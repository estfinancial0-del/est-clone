import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const SCREENSHOT_DIR = '/Users/justinimanuelle/est-clone/.tasks/clone-est.com.au/screenshots';
mkdirSync(SCREENSHOT_DIR, { recursive: true });

const shot = (name) => join(SCREENSHOT_DIR, name);

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const browser = await chromium.launch({ headless: true });

  // =====================================================
  // DESKTOP VIEWPORT (1920x1080)
  // =====================================================
  console.log('--- DESKTOP CAPTURES (1920x1080) ---');
  const desktopCtx = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 2,
  });
  const desktop = await desktopCtx.newPage();

  await desktop.goto('https://est.com.au', { waitUntil: 'networkidle', timeout: 60000 });
  await delay(3000);

  // Scroll through entire page to trigger lazy loading
  console.log('Scrolling to trigger lazy loading...');
  await desktop.evaluate(async () => {
    const distance = 500;
    const totalHeight = document.body.scrollHeight;
    for (let i = 0; i < totalHeight; i += distance) {
      window.scrollTo(0, i);
      await new Promise(r => setTimeout(r, 200));
    }
    window.scrollTo(0, 0);
    await new Promise(r => setTimeout(r, 1000));
  });
  await delay(2000);

  // Full page desktop
  console.log('Capturing full-page-desktop.png');
  await desktop.screenshot({ path: shot('full-page-desktop.png'), fullPage: true });

  // Identify all sections by scrolling and capturing viewport-sized chunks
  // First, get page dimensions and section positions
  const sections = await desktop.evaluate(() => {
    const results = [];

    // Try to find sections by common selectors
    const selectors = [
      'header', 'nav', 'footer',
      'section', '.elementor-section',
      '[data-elementor-type]',
      '.elementor-top-section',
      '.e-con',  // Elementor containers
    ];

    const seen = new Set();
    for (const sel of selectors) {
      document.querySelectorAll(sel).forEach(el => {
        if (seen.has(el)) return;
        seen.add(el);
        const rect = el.getBoundingClientRect();
        if (rect.height > 50) {
          const classes = Array.from(el.classList).join(' ');
          const id = el.id || '';
          const tag = el.tagName.toLowerCase();
          const text = el.querySelector('h1,h2,h3,h4,h5,h6')?.textContent?.trim()?.substring(0, 80) || '';
          results.push({
            tag, id, classes, text,
            top: rect.top + window.scrollY,
            left: rect.left,
            width: rect.width,
            height: rect.height,
          });
        }
      });
    }

    // Sort by position
    results.sort((a, b) => a.top - b.top);
    return results;
  });

  console.log(`Found ${sections.length} potential sections`);

  // Get all unique top-level sections
  const topLevelSections = [];
  const occupiedRanges = [];
  for (const s of sections) {
    const isContained = occupiedRanges.some(
      r => s.top >= r.top && (s.top + s.height) <= (r.top + r.height + 10)
    );
    if (!isContained && s.width > 500 && s.height > 80) {
      topLevelSections.push(s);
      occupiedRanges.push({ top: s.top, height: s.height });
    }
  }

  console.log(`Identified ${topLevelSections.length} top-level sections`);

  // Name sections based on content/position
  function nameSections(sections) {
    const named = [];
    for (let i = 0; i < sections.length; i++) {
      const s = sections[i];
      let name;
      if (s.tag === 'header' || s.tag === 'nav' || s.classes.includes('header') || s.classes.includes('nav')) {
        name = 'header';
      } else if (s.tag === 'footer' || s.classes.includes('footer')) {
        name = 'footer';
      } else if (i === 0 || (i === 1 && named[0]?.name === 'header')) {
        name = 'hero';
      } else {
        // Use heading text or position-based name
        const textLower = s.text.toLowerCase();
        if (textLower.includes('service') || textLower.includes('what we do')) name = 'services';
        else if (textLower.includes('about')) name = 'about';
        else if (textLower.includes('team') || textLower.includes('people')) name = 'team';
        else if (textLower.includes('contact') || textLower.includes('get in touch')) name = 'contact';
        else if (textLower.includes('testimonial') || textLower.includes('review') || textLower.includes('client')) name = 'testimonials';
        else if (textLower.includes('buy') || textLower.includes('invest') || textLower.includes('grow')) name = 'value-proposition';
        else if (textLower.includes('partner') || textLower.includes('logo')) name = 'partners';
        else name = `section-${i}`;
      }

      // Handle duplicates
      const count = named.filter(n => n.name === name).length;
      if (count > 0) name = `${name}-${count + 1}`;

      named.push({ ...s, name });
    }
    return named;
  }

  const namedSections = nameSections(topLevelSections);

  // Capture each section with generous padding
  for (const s of namedSections) {
    const padding = 40;
    const clipTop = Math.max(0, s.top - padding);
    const clipHeight = s.height + padding * 2;

    console.log(`Capturing section-${s.name}.png (${s.text || 'no heading'}) - height: ${s.height}px`);

    // Scroll to section first
    await desktop.evaluate((top) => window.scrollTo(0, top - 100), s.top);
    await delay(500);

    await desktop.screenshot({
      path: shot(`section-${s.name}.png`),
      fullPage: true,
      clip: {
        x: 0,
        y: clipTop,
        width: 1920,
        height: Math.min(clipHeight, 16000), // Playwright max clip
      },
    });
  }

  // =====================================================
  // NAVIGATION CAPTURES
  // =====================================================
  console.log('\n--- NAVIGATION CAPTURES ---');

  // Scroll to top for nav default
  await desktop.evaluate(() => window.scrollTo(0, 0));
  await delay(1000);
  await desktop.screenshot({
    path: shot('component-nav-default.png'),
    clip: { x: 0, y: 0, width: 1920, height: 120 },
  });

  // Scroll down to see if nav changes (sticky/scroll state)
  await desktop.evaluate(() => window.scrollTo(0, 600));
  await delay(1000);
  await desktop.screenshot({
    path: shot('component-nav-scrolled.png'),
    clip: { x: 0, y: 0, width: 1920, height: 120 },
  });

  // Try hovering on nav links
  const navLinks = await desktop.$$('header a, nav a, .elementor-nav-menu a, .e-n-menu a');
  console.log(`Found ${navLinks.length} nav links`);
  await desktop.evaluate(() => window.scrollTo(0, 0));
  await delay(500);

  for (let i = 0; i < Math.min(navLinks.length, 5); i++) {
    try {
      await navLinks[i].hover();
      await delay(600);
      const text = await navLinks[i].textContent();
      const safeName = (text || `link-${i}`).trim().toLowerCase().replace(/[^a-z0-9]/g, '-').substring(0, 20);
      console.log(`Capturing nav hover: ${safeName}`);
      await desktop.screenshot({
        path: shot(`component-nav-hover-${safeName}.png`),
        clip: { x: 0, y: 0, width: 1920, height: 300 },
      });
    } catch (e) {
      console.log(`Skipping nav link ${i}: ${e.message}`);
    }
  }

  // =====================================================
  // BUTTON AND INTERACTIVE ELEMENT CAPTURES
  // =====================================================
  console.log('\n--- BUTTON & INTERACTIVE CAPTURES ---');

  // Find all buttons/CTAs
  const buttons = await desktop.$$('a.elementor-button, .elementor-button, button, [role="button"], .e-button');
  console.log(`Found ${buttons.length} buttons`);

  for (let i = 0; i < Math.min(buttons.length, 8); i++) {
    try {
      const btn = buttons[i];
      const text = (await btn.textContent())?.trim() || `btn-${i}`;
      const safeName = text.toLowerCase().replace(/[^a-z0-9]/g, '-').substring(0, 25);

      // Scroll to button
      await btn.scrollIntoViewIfNeeded();
      await delay(500);

      const box = await btn.boundingBox();
      if (!box) continue;

      // Default state
      const padBtn = 30;
      await desktop.screenshot({
        path: shot(`component-button-${safeName}-default.png`),
        clip: {
          x: Math.max(0, box.x - padBtn),
          y: Math.max(0, box.y - padBtn),
          width: box.width + padBtn * 2,
          height: box.height + padBtn * 2,
        },
      });

      // Hover state
      await btn.hover();
      await delay(600);
      await desktop.screenshot({
        path: shot(`component-button-${safeName}-hover.png`),
        clip: {
          x: Math.max(0, box.x - padBtn),
          y: Math.max(0, box.y - padBtn),
          width: box.width + padBtn * 2,
          height: box.height + padBtn * 2,
        },
      });

      console.log(`Captured button: ${safeName}`);
    } catch (e) {
      console.log(`Skipping button ${i}: ${e.message}`);
    }
  }

  // =====================================================
  // CARD COMPONENTS
  // =====================================================
  console.log('\n--- CARD COMPONENTS ---');

  const cards = await desktop.$$('.elementor-widget-container .e-con, .elementor-widget-image-box, [class*="card"], [class*="cta"]');
  console.log(`Found ${cards.length} potential card elements`);

  for (let i = 0; i < Math.min(cards.length, 6); i++) {
    try {
      const card = cards[i];
      await card.scrollIntoViewIfNeeded();
      await delay(400);
      const box = await card.boundingBox();
      if (!box || box.height < 50 || box.width < 100) continue;

      await desktop.screenshot({
        path: shot(`component-card-${i}.png`),
        clip: {
          x: Math.max(0, box.x - 10),
          y: Math.max(0, box.y - 10),
          width: Math.min(box.width + 20, 1920),
          height: Math.min(box.height + 20, 4000),
        },
      });

      // Hover state
      await card.hover();
      await delay(600);
      await desktop.screenshot({
        path: shot(`component-card-${i}-hover.png`),
        clip: {
          x: Math.max(0, box.x - 10),
          y: Math.max(0, box.y - 10),
          width: Math.min(box.width + 20, 1920),
          height: Math.min(box.height + 20, 4000),
        },
      });

      console.log(`Captured card ${i}`);
    } catch (e) {
      console.log(`Skipping card ${i}: ${e.message}`);
    }
  }

  // =====================================================
  // SWIPER/CAROUSEL
  // =====================================================
  console.log('\n--- CAROUSEL/SLIDER ---');
  const swiper = await desktop.$('.swiper, .elementor-swiper, [class*="carousel"], [class*="slider"]');
  if (swiper) {
    await swiper.scrollIntoViewIfNeeded();
    await delay(1000);
    const box = await swiper.boundingBox();
    if (box) {
      // Capture current slide
      await desktop.screenshot({
        path: shot('component-carousel-slide-1.png'),
        clip: {
          x: Math.max(0, box.x - 10),
          y: Math.max(0, box.y - 10),
          width: Math.min(box.width + 20, 1920),
          height: Math.min(box.height + 20, 2000),
        },
      });

      // Click next to get second slide
      const nextBtn = await desktop.$('.swiper-button-next, .elementor-swiper-button-next, [class*="swiper-button-next"]');
      if (nextBtn) {
        await nextBtn.click();
        await delay(1500);
        await desktop.screenshot({
          path: shot('component-carousel-slide-2.png'),
          clip: {
            x: Math.max(0, box.x - 10),
            y: Math.max(0, box.y - 10),
            width: Math.min(box.width + 20, 1920),
            height: Math.min(box.height + 20, 2000),
          },
        });
      }
      console.log('Captured carousel slides');
    }
  } else {
    console.log('No carousel/slider found');
  }

  // =====================================================
  // FORM ELEMENTS
  // =====================================================
  console.log('\n--- FORM CAPTURES ---');
  const form = await desktop.$('form, .elementor-form, .wpcf7, [class*="form"]');
  if (form) {
    await form.scrollIntoViewIfNeeded();
    await delay(500);
    const box = await form.boundingBox();
    if (box) {
      await desktop.screenshot({
        path: shot('component-form.png'),
        clip: {
          x: Math.max(0, box.x - 20),
          y: Math.max(0, box.y - 20),
          width: Math.min(box.width + 40, 1920),
          height: Math.min(box.height + 40, 3000),
        },
      });
      console.log('Captured form');
    }
  }

  // =====================================================
  // FOOTER CLOSE-UP
  // =====================================================
  console.log('\n--- FOOTER CLOSE-UP ---');
  const footer = await desktop.$('footer, .site-footer, [class*="footer"]');
  if (footer) {
    await footer.scrollIntoViewIfNeeded();
    await delay(500);
    const box = await footer.boundingBox();
    if (box) {
      await desktop.screenshot({
        path: shot('component-footer.png'),
        clip: {
          x: Math.max(0, box.x),
          y: Math.max(0, box.y - 10),
          width: Math.min(box.width, 1920),
          height: Math.min(box.height + 20, 2000),
        },
      });
      console.log('Captured footer');
    }
  }

  await desktopCtx.close();

  // =====================================================
  // TABLET VIEWPORT (1024x768)
  // =====================================================
  console.log('\n--- TABLET CAPTURES (1024x768) ---');
  const tabletCtx = await browser.newContext({
    viewport: { width: 1024, height: 768 },
    deviceScaleFactor: 2,
  });
  const tablet = await tabletCtx.newPage();

  await tablet.goto('https://est.com.au', { waitUntil: 'networkidle', timeout: 60000 });
  await delay(3000);

  // Scroll to trigger lazy loading
  await tablet.evaluate(async () => {
    const totalHeight = document.body.scrollHeight;
    for (let i = 0; i < totalHeight; i += 400) {
      window.scrollTo(0, i);
      await new Promise(r => setTimeout(r, 150));
    }
    window.scrollTo(0, 0);
    await new Promise(r => setTimeout(r, 1000));
  });
  await delay(1000);

  await tablet.screenshot({ path: shot('full-page-tablet.png'), fullPage: true });
  console.log('Captured full-page-tablet.png');

  // Tablet nav
  await tablet.screenshot({
    path: shot('component-nav-tablet.png'),
    clip: { x: 0, y: 0, width: 1024, height: 100 },
  });

  // Try to open mobile menu on tablet
  const tabletHamburger = await tablet.$('.elementor-menu-toggle, [class*="hamburger"], [class*="menu-toggle"], button[aria-label*="Menu"]');
  if (tabletHamburger) {
    await tabletHamburger.click();
    await delay(800);
    await tablet.screenshot({
      path: shot('component-nav-tablet-open.png'),
      fullPage: false,
    });
    console.log('Captured tablet nav open state');
  }

  await tabletCtx.close();

  // =====================================================
  // MOBILE VIEWPORT (375x812)
  // =====================================================
  console.log('\n--- MOBILE CAPTURES (375x812) ---');
  const mobileCtx = await browser.newContext({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 3,
    userAgent: 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.0 Mobile/15E148 Safari/604.1',
  });
  const mobile = await mobileCtx.newPage();

  await mobile.goto('https://est.com.au', { waitUntil: 'networkidle', timeout: 60000 });
  await delay(3000);

  // Scroll to trigger lazy loading
  await mobile.evaluate(async () => {
    const totalHeight = document.body.scrollHeight;
    for (let i = 0; i < totalHeight; i += 300) {
      window.scrollTo(0, i);
      await new Promise(r => setTimeout(r, 150));
    }
    window.scrollTo(0, 0);
    await new Promise(r => setTimeout(r, 1000));
  });
  await delay(1000);

  await mobile.screenshot({ path: shot('full-page-mobile.png'), fullPage: true });
  console.log('Captured full-page-mobile.png');

  // Mobile nav default
  await mobile.screenshot({
    path: shot('component-nav-mobile.png'),
    clip: { x: 0, y: 0, width: 375, height: 80 },
  });

  // Try to open mobile hamburger menu
  const mobileHamburger = await mobile.$('.elementor-menu-toggle, [class*="hamburger"], [class*="menu-toggle"], button[aria-label*="Menu"]');
  if (mobileHamburger) {
    await mobileHamburger.click();
    await delay(800);
    await mobile.screenshot({
      path: shot('component-nav-mobile-open.png'),
      fullPage: false,
    });
    console.log('Captured mobile nav open state');

    // Close menu
    try {
      await mobileHamburger.click();
      await delay(500);
    } catch (e) { /* ignore */ }
  }

  // Mobile hero section
  await mobile.evaluate(() => window.scrollTo(0, 0));
  await delay(500);
  await mobile.screenshot({
    path: shot('section-hero-mobile.png'),
    clip: { x: 0, y: 0, width: 375, height: 812 },
  });

  await mobileCtx.close();

  // =====================================================
  // DETAIL / ZOOM CAPTURES
  // =====================================================
  console.log('\n--- DETAIL CAPTURES ---');
  const detailCtx = await browser.newContext({
    viewport: { width: 1920, height: 1080 },
    deviceScaleFactor: 3, // Higher DPI for detail shots
  });
  const detail = await detailCtx.newPage();

  await detail.goto('https://est.com.au', { waitUntil: 'networkidle', timeout: 60000 });
  await delay(3000);

  // Logo/branding detail
  const logo = await detail.$('.elementor-widget-theme-site-logo img, header img, .site-logo img, [class*="logo"] img, header .elementor-image img');
  if (logo) {
    await logo.scrollIntoViewIfNeeded();
    await delay(300);
    const box = await logo.boundingBox();
    if (box) {
      await detail.screenshot({
        path: shot('detail-logo.png'),
        clip: {
          x: Math.max(0, box.x - 20),
          y: Math.max(0, box.y - 20),
          width: box.width + 40,
          height: box.height + 40,
        },
      });
      console.log('Captured logo detail');
    }
  }

  // Wave graphics detail
  await detail.evaluate(() => window.scrollTo(0, 800));
  await delay(500);
  await detail.screenshot({
    path: shot('detail-wave-transition.png'),
    clip: { x: 0, y: 700, width: 1920, height: 500 },
  });

  // Color palette reference - capture a strip of each major section bg
  await detail.evaluate(() => window.scrollTo(0, 0));
  await delay(300);

  // Get background colors of all sections
  const colorInfo = await detail.evaluate(() => {
    const sections = document.querySelectorAll('section, .elementor-section, .e-con');
    const colors = [];
    sections.forEach(s => {
      const style = getComputedStyle(s);
      colors.push({
        bg: style.backgroundColor,
        text: style.color,
        classes: s.className.substring(0, 60),
      });
    });
    return colors;
  });
  console.log('Color palette extracted:', JSON.stringify(colorInfo.slice(0, 10)));

  // =====================================================
  // EXTRACT COMPLETE PAGE CONTENT
  // =====================================================
  console.log('\n--- EXTRACTING PAGE CONTENT ---');
  const pageContent = await detail.evaluate(() => {
    const data = {};

    // All headings
    data.headings = [];
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(h => {
      data.headings.push({
        level: h.tagName,
        text: h.textContent.trim(),
        rect: { top: Math.round(h.getBoundingClientRect().top + window.scrollY) },
      });
    });

    // All paragraphs
    data.paragraphs = [];
    document.querySelectorAll('p').forEach(p => {
      const text = p.textContent.trim();
      if (text.length > 5) data.paragraphs.push(text);
    });

    // All links
    data.links = [];
    document.querySelectorAll('a').forEach(a => {
      data.links.push({
        text: a.textContent.trim().substring(0, 100),
        href: a.href,
        classes: a.className.substring(0, 80),
      });
    });

    // All buttons
    data.buttons = [];
    document.querySelectorAll('button, [role="button"], .elementor-button, a.elementor-button-link').forEach(b => {
      data.buttons.push({
        text: b.textContent.trim().substring(0, 80),
        classes: b.className.substring(0, 80),
      });
    });

    // All images
    data.images = [];
    document.querySelectorAll('img').forEach(img => {
      data.images.push({
        src: img.src,
        alt: img.alt,
        width: img.naturalWidth,
        height: img.naturalHeight,
      });
    });

    // Nav items
    data.navItems = [];
    document.querySelectorAll('nav a, header a, .elementor-nav-menu a, .e-n-menu-item a').forEach(a => {
      data.navItems.push({
        text: a.textContent.trim(),
        href: a.href,
      });
    });

    // Footer content
    const footer = document.querySelector('footer') || document.querySelector('[class*="footer"]');
    data.footerText = footer ? footer.textContent.trim().substring(0, 2000) : 'Footer not found';
    data.footerLinks = [];
    if (footer) {
      footer.querySelectorAll('a').forEach(a => {
        data.footerLinks.push({ text: a.textContent.trim(), href: a.href });
      });
    }

    // Form fields
    data.formFields = [];
    document.querySelectorAll('input, textarea, select').forEach(f => {
      data.formFields.push({
        type: f.type || f.tagName.toLowerCase(),
        name: f.name,
        placeholder: f.placeholder,
        label: f.labels?.[0]?.textContent?.trim() || '',
      });
    });

    // Background images from computed styles
    data.bgImages = [];
    document.querySelectorAll('*').forEach(el => {
      const bg = getComputedStyle(el).backgroundImage;
      if (bg && bg !== 'none' && bg.includes('url(')) {
        const url = bg.match(/url\("?([^"]+)"?\)/)?.[1];
        if (url && !data.bgImages.includes(url)) data.bgImages.push(url);
      }
    });

    // Page dimensions
    data.pageHeight = document.body.scrollHeight;
    data.pageWidth = document.body.scrollWidth;

    return data;
  });

  writeFileSync(
    join(SCREENSHOT_DIR, '_page-content.json'),
    JSON.stringify(pageContent, null, 2)
  );
  console.log(`Extracted: ${pageContent.headings.length} headings, ${pageContent.paragraphs.length} paragraphs, ${pageContent.links.length} links, ${pageContent.images.length} images, ${pageContent.bgImages.length} bg images`);

  await detailCtx.close();
  await browser.close();

  // Print section summary
  console.log('\n\n========= SECTION SUMMARY =========');
  for (const s of namedSections) {
    console.log(`  ${s.name}: top=${Math.round(s.top)}px, height=${Math.round(s.height)}px, heading="${s.text}"`);
  }
  console.log('====================================');

  // Write section data to JSON for context.md generation
  const sectionData = namedSections.map(s => ({
    name: s.name,
    top: Math.round(s.top),
    height: Math.round(s.height),
    heading: s.text,
    tag: s.tag,
    id: s.id,
  }));

  writeFileSync(
    join(SCREENSHOT_DIR, '_section-data.json'),
    JSON.stringify({ sections: sectionData, colors: colorInfo || [] }, null, 2)
  );

  console.log('\nAll screenshots saved to:', SCREENSHOT_DIR);
  console.log('Done!');
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
