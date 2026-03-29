import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

const BASE_DIR = '/Users/justinimanuelle/est-clone/.tasks/clone-est.com.au/screenshots';
const TASK_DIR = '/Users/justinimanuelle/est-clone/.tasks/clone-est.com.au';

const PAGES = [
  { name: 'about', url: 'https://est.com.au/about-est-financial/', title: 'About Us' },
  { name: 'team', url: 'https://est.com.au/team/', title: 'Our Team' },
  { name: 'services', url: 'https://est.com.au/services/', title: 'Services' },
  { name: 'blog', url: 'https://est.com.au/our-blog/', title: 'Our Blog/Media' },
];

const VIEWPORTS = [
  { name: 'desktop', width: 1920, height: 1080 },
  { name: 'tablet', width: 1024, height: 768 },
  { name: 'mobile', width: 375, height: 812 },
];

async function waitForPageReady(page) {
  try { await page.waitForLoadState('networkidle', { timeout: 15000 }); } catch {}
  await page.waitForTimeout(3000);

  // Scroll to bottom to trigger lazy-loaded content
  await page.evaluate(async () => {
    const delay = ms => new Promise(r => setTimeout(r, ms));
    const totalHeight = document.body.scrollHeight;
    for (let i = 0; i < totalHeight; i += 500) {
      window.scrollTo(0, i);
      await delay(150);
    }
    // Scroll back to top
    window.scrollTo(0, 0);
    await delay(1000);
  });
  await page.waitForTimeout(2000);
}

async function dismissPopups(page) {
  const selectors = [
    '[class*="cookie"] button', '[class*="consent"] button',
    '[class*="popup"] .close', 'button:has-text("Accept")',
    'button:has-text("Close")', 'button:has-text("Got it")',
    '.cookie-notice button', '[class*="banner"] .close',
  ];
  for (const sel of selectors) {
    try {
      const el = await page.$(sel);
      if (el && await el.isVisible()) {
        await el.click();
        await page.waitForTimeout(500);
      }
    } catch {}
  }
}

async function extractFullContent(page) {
  return await page.evaluate(() => {
    const result = {
      title: document.title,
      meta: document.querySelector('meta[name="description"]')?.content || '',
      bodyText: '',
      sections: [],
      headings: [],
      paragraphs: [],
      links: [],
      images: [],
      buttons: [],
      styles: {},
    };

    // Get all visible text organized by sections
    const allSections = document.querySelectorAll(
      'section, .elementor-section, .elementor-top-section, .et_pb_section, header, footer, [class*="section"], main > div'
    );

    const sectionData = [];
    const seen = new Set();

    allSections.forEach((sec, idx) => {
      const rect = sec.getBoundingClientRect();
      if (rect.height < 30) return;
      const key = `${Math.round(rect.top + window.scrollY)}-${Math.round(rect.height)}`;
      if (seen.has(key)) return;
      seen.add(key);

      const text = sec.innerText?.trim() || '';
      if (text.length < 5) return;

      const headings = Array.from(sec.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
        tag: h.tagName, text: h.innerText?.trim()
      }));

      const bg = getComputedStyle(sec).backgroundColor;

      sectionData.push({
        index: idx,
        top: Math.round(rect.top + window.scrollY),
        height: Math.round(rect.height),
        width: Math.round(rect.width),
        bg,
        classes: sec.className?.toString().substring(0, 300),
        headings,
        text: text.substring(0, 2000),
      });
    });

    sectionData.sort((a, b) => a.top - b.top);
    result.sections = sectionData;

    // All headings
    result.headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6')).map(h => ({
      tag: h.tagName,
      text: h.innerText?.trim(),
      font: getComputedStyle(h).fontFamily,
      size: getComputedStyle(h).fontSize,
      weight: getComputedStyle(h).fontWeight,
      color: getComputedStyle(h).color,
    })).filter(h => h.text);

    // All paragraphs
    result.paragraphs = Array.from(document.querySelectorAll('p')).map(p => p.innerText?.trim()).filter(Boolean);

    // All links
    result.links = Array.from(document.querySelectorAll('a')).map(a => ({
      text: a.innerText?.trim().substring(0, 150),
      href: a.href,
    })).filter(l => l.text);

    // All images
    result.images = Array.from(document.querySelectorAll('img')).map(img => ({
      src: img.src, alt: img.alt || '', width: img.naturalWidth, height: img.naturalHeight,
    }));

    // Buttons
    result.buttons = Array.from(document.querySelectorAll('a.btn, a.button, .btn, .button, [class*="btn"], [class*="cta"], input[type="submit"], button')).map(b => ({
      text: b.innerText?.trim() || b.value || '',
      classes: b.className?.toString().substring(0, 200),
    })).filter(b => b.text);

    // Body text
    result.bodyText = document.body.innerText?.substring(0, 15000) || '';

    // Style info
    const body = document.body;
    const cs = getComputedStyle(body);
    result.styles = {
      bodyFont: cs.fontFamily,
      bodyColor: cs.color,
      bodyBg: cs.backgroundColor,
    };

    // Navigation items
    const navItems = Array.from(document.querySelectorAll('nav a, .menu a, header a, [class*="menu-item"] a')).map(a => ({
      text: a.innerText?.trim(), href: a.href,
    })).filter(n => n.text);
    result.navItems = navItems;

    return result;
  });
}

async function captureSectionsDesktop(page, dir) {
  const sections = await page.evaluate(() => {
    const results = [];
    const candidates = document.querySelectorAll(
      'header, footer, section, .elementor-section, .elementor-top-section, .et_pb_section, [class*="hero"], [class*="banner"]'
    );
    const seen = new Set();

    candidates.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.height < 50 || rect.width < 300) return;
      const key = `${Math.round(rect.top + window.scrollY)}-${Math.round(rect.height)}`;
      if (seen.has(key)) return;
      seen.add(key);

      let tag = el.tagName.toLowerCase();
      let name = '';
      const cls = el.className?.toString() || '';
      const text = el.innerText?.substring(0, 100) || '';

      if (tag === 'header' || cls.includes('header')) name = 'header';
      else if (tag === 'footer' || cls.includes('footer')) name = 'footer';
      else if (cls.includes('hero') || cls.includes('banner')) name = 'hero';
      else name = `section`;

      results.push({
        name,
        top: Math.round(rect.top + window.scrollY),
        height: Math.round(rect.height),
        width: Math.round(rect.width),
        textPreview: text,
      });
    });

    results.sort((a, b) => a.top - b.top);
    return results;
  });

  // Deduplicate names
  const nameCount = {};
  sections.forEach(s => { nameCount[s.name] = (nameCount[s.name] || 0) + 1; });
  const nameIdx = {};
  sections.forEach(s => {
    if (nameCount[s.name] > 1) {
      nameIdx[s.name] = (nameIdx[s.name] || 0) + 1;
      s.fileName = `${s.name}-${nameIdx[s.name]}`;
    } else {
      s.fileName = s.name;
    }
  });

  const captured = [];
  const pad = 20;
  for (const s of sections) {
    try {
      const clipHeight = Math.min(s.height + pad * 2, 16000);
      await page.screenshot({
        path: join(dir, `section-${s.fileName}.png`),
        clip: {
          x: 0,
          y: Math.max(0, s.top - pad),
          width: 1920,
          height: clipHeight,
        },
      });
      captured.push({ file: `section-${s.fileName}.png`, ...s });
      console.log(`    section-${s.fileName}.png (${s.height}px tall)`);
    } catch (e) {
      console.log(`    FAILED section-${s.fileName}: ${e.message}`);
    }
  }
  return captured;
}

async function captureNavComponent(page, dir) {
  const captured = [];
  try {
    const nav = await page.$('header, nav, [class*="header"], [class*="navbar"], #main-header');
    if (nav) {
      const box = await nav.boundingBox();
      if (box && box.height > 20) {
        await page.screenshot({
          path: join(dir, 'component-nav-default.png'),
          clip: { x: 0, y: Math.max(0, box.y), width: 1920, height: box.height + 20 },
        });
        captured.push('component-nav-default.png');
        console.log('    component-nav-default.png');

        // Try hovering nav items for dropdowns
        const navLinks = await page.$$('nav a, .menu-item > a, header a, #top-menu > li > a');
        for (let i = 0; i < Math.min(navLinks.length, 6); i++) {
          const link = navLinks[i];
          if (!(await link.isVisible())) continue;
          const text = await link.innerText().catch(() => '');
          if (!text.trim()) continue;

          await link.hover();
          await page.waitForTimeout(600);

          // Check for dropdown
          const hasDropdown = await page.evaluate(() => {
            const subs = document.querySelectorAll('.sub-menu, [class*="dropdown"], [class*="submenu"], .et_pb_menu__submenu');
            return Array.from(subs).some(s => {
              const r = s.getBoundingClientRect();
              return r.height > 10 && getComputedStyle(s).visibility !== 'hidden' && getComputedStyle(s).opacity !== '0';
            });
          });

          if (hasDropdown) {
            await page.screenshot({
              path: join(dir, `component-nav-dropdown-${i + 1}.png`),
              clip: { x: 0, y: 0, width: 1920, height: 600 },
            });
            captured.push(`component-nav-dropdown-${i + 1}.png`);
            console.log(`    component-nav-dropdown-${i + 1}.png`);
          }
        }

        // Move mouse away to reset
        await page.mouse.move(960, 500);
        await page.waitForTimeout(300);
      }
    }
  } catch (e) {
    console.log(`    Nav capture error: ${e.message}`);
  }
  return captured;
}

async function captureInteractiveElements(page, dir, pageName) {
  const captured = [];
  const elementTypes = [
    { sel: '.elementor-button, .et_pb_button, a.btn, a.button, [class*="cta-btn"], [class*="button"]', name: 'button' },
    { sel: '.card, [class*="card"], [class*="team-member"], [class*="member"]', name: 'card' },
    { sel: '[class*="service"], [class*="feature"]', name: 'service-item' },
    { sel: 'article, [class*="blog-post"], [class*="post-card"], .et_pb_post', name: 'blog-post' },
    { sel: '[class*="accordion"], [class*="toggle"]', name: 'accordion' },
  ];

  for (const { sel, name } of elementTypes) {
    try {
      const elements = await page.$$(sel);
      if (elements.length === 0) continue;

      for (let i = 0; i < Math.min(elements.length, 3); i++) {
        const el = elements[i];
        if (!(await el.isVisible())) continue;
        const box = await el.boundingBox();
        if (!box || box.height < 10 || box.width < 10) continue;

        const pad = 20;
        // Default state
        await page.screenshot({
          path: join(dir, `component-${name}-${i + 1}.png`),
          clip: {
            x: Math.max(0, box.x - pad),
            y: Math.max(0, box.y - pad),
            width: Math.min(box.width + pad * 2, 1920),
            height: Math.min(box.height + pad * 2, 3000),
          },
        });
        captured.push(`component-${name}-${i + 1}.png`);
        console.log(`    component-${name}-${i + 1}.png`);

        // Hover state
        await el.hover();
        await page.waitForTimeout(500);
        await page.screenshot({
          path: join(dir, `component-${name}-${i + 1}-hover.png`),
          clip: {
            x: Math.max(0, box.x - pad),
            y: Math.max(0, box.y - pad),
            width: Math.min(box.width + pad * 2, 1920),
            height: Math.min(box.height + pad * 2, 3000),
          },
        });
        captured.push(`component-${name}-${i + 1}-hover.png`);
        console.log(`    component-${name}-${i + 1}-hover.png`);

        // Reset hover
        await page.mouse.move(0, 0);
        await page.waitForTimeout(300);
      }
    } catch (e) {
      console.log(`    Interactive capture error for ${name}: ${e.message}`);
    }
  }
  return captured;
}

async function capturePage(browser, pageCfg) {
  const dir = join(BASE_DIR, pageCfg.name);
  mkdirSync(dir, { recursive: true });

  console.log(`\n${'='.repeat(60)}`);
  console.log(`CAPTURING: ${pageCfg.title} (${pageCfg.url})`);
  console.log(`Output: ${dir}`);
  console.log('='.repeat(60));

  const result = {
    fullPageScreenshots: [],
    sectionScreenshots: [],
    componentScreenshots: [],
    content: null,
  };

  // --- Full-page screenshots at all 3 viewports ---
  for (const vp of VIEWPORTS) {
    const context = await browser.newContext({
      viewport: { width: vp.width, height: vp.height },
      deviceScaleFactor: 1,
      userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    });
    const page = await context.newPage();

    try {
      console.log(`\n  [${vp.name}] Navigating (${vp.width}x${vp.height})...`);
      await page.goto(pageCfg.url, { waitUntil: 'domcontentloaded', timeout: 30000 });
      await waitForPageReady(page);
      await dismissPopups(page);

      // Full-page screenshot
      const fileName = `full-page-${vp.name}.png`;
      await page.screenshot({ path: join(dir, fileName), fullPage: true });
      result.fullPageScreenshots.push(fileName);
      console.log(`  Saved ${fileName}`);

      // Desktop-only detailed captures
      if (vp.name === 'desktop') {
        console.log('\n  [desktop] Extracting page content...');
        result.content = await extractFullContent(page);

        console.log('  [desktop] Capturing navigation...');
        const navFiles = await captureNavComponent(page, dir);
        result.componentScreenshots.push(...navFiles);

        console.log('  [desktop] Capturing sections...');
        const sectionFiles = await captureSectionsDesktop(page, dir);
        result.sectionScreenshots = sectionFiles;

        console.log('  [desktop] Capturing interactive elements...');
        const interactiveFiles = await captureInteractiveElements(page, dir, pageCfg.name);
        result.componentScreenshots.push(...interactiveFiles);
      }
    } catch (e) {
      console.error(`  ERROR: ${e.message}`);
    }

    await context.close();
  }

  return result;
}

async function main() {
  console.log('Launching Chromium browser...');
  const browser = await chromium.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  const allResults = {};

  for (const pageCfg of PAGES) {
    allResults[pageCfg.name] = await capturePage(browser, pageCfg);
  }

  await browser.close();

  // Save results JSON
  writeFileSync(
    join(TASK_DIR, 'capture-results.json'),
    JSON.stringify(allResults, null, 2)
  );
  console.log(`\nResults saved to ${join(TASK_DIR, 'capture-results.json')}`);
  console.log('\nAll captures complete!');
}

main().catch(e => {
  console.error('FATAL:', e);
  process.exit(1);
});
