# About Us Page - est.com.au/about-est-financial/

## Page Overview
- **URL:** https://est.com.au/about-est-financial/
- **Title:** About est. Financial | Strategy-Led Finance, Property & Tax
- **Purpose:** Company about page explaining EST Financial's philosophy, approach, and client journey
- **Builder:** WordPress + Elementor
- **Theme:** Dark/black backgrounds with white text, red (#C20000) accents

---

## Site-Wide Navigation (shared across all pages)
- Logo: EST Financial logo (white on dark, "ff_03.webp")
- Menu Items: About Us | Our Team | Our Media | Success Stories | Services
- CTA Button: "Free Consultation" (links to /welcome/)
- Navigation style: Fixed/sticky header, dark background, white text

---

## Color Scheme
| Role | Color | Notes |
|------|-------|-------|
| Primary Background | #000000 | Black, used for hero and major sections |
| Secondary Background | #FFFFFF | White, used for content sections |
| Accent Red | #C20000 | CTA buttons, hover states, highlights |
| Accent Red (hover variants) | #F90000, #FC1212, #FF0000 | Brighter reds on hover |
| Body Text (dark bg) | #FFFFFF | White text on black |
| Body Text (light bg) | #3D3A34 | Dark brown-grey on white |
| Secondary Text | #69727D | Muted grey |
| Light Grey | #F5F5F5 | Backgrounds, accents |
| Border/Divider | #333333 | Subtle borders |

---

## Typography
| Element | Font Family | Size (Desktop) | Size (Mobile) | Weight | Color |
|---------|-------------|----------------|---------------|--------|-------|
| Display Headings | "longhand-lp" (serif/script) | 60-70px | 42-50px | 400 | #FFFFFF |
| Section Headings | "longhand-lp" | 42-48px | 32-36px | 400 | Varies |
| Body Text | "Roboto", sans-serif | 18-20px | 16px | 400 | #3D3A34 or #FFFFFF |
| Navigation Links | "Roboto" | 14-16px | 14px | 500 | #FFFFFF |
| Button Text | "Roboto" | 14-16px | 14px | 600 | #FFFFFF |

Additional fonts loaded: "Open Sans", "Poppins" (may appear in specific elements)

---

## Sections (Top to Bottom)

### 1. Header / Navigation
- Fixed/sticky at top
- Dark background (black)
- Logo on left, menu items centered or right, CTA button on far right
- Hamburger menu on mobile

### 2. Hero Section
- **Background:** Black (#000000)
- **Main Heading:** "About **est**" (in longhand-lp script font, white, ~70px)
- **Subtext:** "20" displayed (likely referencing years or a statistic, Roboto, 20px weight)
- **Decorative Element:** Image with negative margin (-130px), full height
- **Layout:** Full-width, centered content
- **Wave graphic:** Decorative wave pattern in background (positioned at 0 -444px)

### 3. Philosophy Section (White Background)
- **Heading:** Large serif text (longhand-lp, 48px, centered)
- **Body Text (Paragraph 1):** "At est, we don't just manage money, we manage meaning. We understand that your financial life isn't separate from your real life."
- **Body Text (Paragraph 2):** The company describes walking "beside you, not in front of you, not behind you, but with you" through life's seasons.
- **Key Quote:** "Because when you win, we win."
- **Layout:** Centered content, max-width container (1240px)
- **Font:** Roboto, 20px, color #3D3A34

### 4. Values / Deeper Meaning Section (Black Background)
- **Background:** Black with wave graphic pattern
- **Text:** White text on dark background, Roboto font
- Content about financial advice being about deeper life stories -- family stability, personal freedom, legacy building
- Solutions: debt reduction, tax optimization, investment growth, financial control
- **Two accent blocks:** "20" displayed in accent color (#F5F5F5)

### 5. Meal Analogy Section
- **Philosophy Text:** "Choosing financial advice is a lot like choosing a meal... It's about what that meal does for you."
- Emphasis on "peace of mind," reducing stress, long-term wellbeing
- Raw, authentic service delivery
- Long-term client relationships
- Integrity-focused operations
- Personalized strategy development

### 6. Your Journey / CTA Section (Dark Background)
- **Heading:** Large longhand-lp font, white, 42-60px
- **Three-Step Process:**
  1. **Book** -- Free consultation
  2. **Discuss** -- Goals with team, assess support options
  3. **Meet** -- In-office session with property strategist or mortgage broker for tailored solutions
- **Decorative Image:** With negative margin (-100px/-150px mobile)

### 7. Footer
- **Background:** Black
- **Head Office:** Level 18, 1 Castlereagh St, Sydney, NSW 2000
- **Email:** Enquiries@est.com.au
- **Phone:** 1300 123 378
- **Links:** Credit Guide, Privacy Policy
- **Social Media:** Facebook, YouTube, Instagram, TikTok
- **Disclaimer:** "All strategies and information provided on this website are general advice only and does not take into consideration any of your personal circumstances. Please arrange an appointment to seek personal financial and taxation advice prior to acting on this information."
- **Copyright:** "Copyright @ 2025 EST FINANCIAL Pty Ltd ABN 30 611 799 850. All rights reserved."

---

## Interactive Elements & Animations
- **Smooth scrolling** enabled site-wide (CSS scroll-behavior: smooth)
- **Transitions:** Background, border, and transform transitions (0.3-0.4s duration, ease)
- **Hero fade-in:** Content likely fades in on load
- **Hover states:** Buttons change background to brighter red on hover
- **Hidden scrollbars** across all browsers (custom CSS)
- **Reduced motion** preferences respected via media queries

---

## Layout Notes
- **Container max-width:** 1240px (desktop), 1024px (tablet), responsive below
- **Flexbox layouts** with column direction for stacked sections
- **Responsive padding:** 50px desktop, 25px mobile
- **Grid gaps:** 20px default
- **Full-width sections** with contained inner content

---

## Images Referenced
- EST Financial logo: `wp-content/uploads/2025/01/ff_03-480x207.png` (also .webp)
- Wave graphic background pattern
- Decorative hero image
- Journey/process section decorative image

---

## Screenshots Inventory
*Screenshots to be captured by running the Playwright script*

### Full Page
- `full-page-desktop.png` -- Complete page at 1920x1080
- `full-page-tablet.png` -- Complete page at 1024x768
- `full-page-mobile.png` -- Complete page at 375x812

### Sections
- `section-header.png` -- Navigation bar
- `section-hero.png` -- Hero with "About est" heading
- `section-philosophy.png` -- White background philosophy text
- `section-values.png` -- Black background values section
- `section-analogy.png` -- Meal analogy section
- `section-journey.png` -- Three-step journey CTA
- `section-footer.png` -- Footer with contact info

### Components
- `component-nav-default.png` -- Navigation default state
- `component-nav-dropdown-*.png` -- Navigation dropdown states
- `component-button-*.png` -- Button default and hover states
