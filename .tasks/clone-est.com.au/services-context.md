# Services Page - est.com.au/services/

## Page Overview
- **URL:** https://est.com.au/services/
- **Title:** Services | EST Financial - Finance, Property & Tax Strategy
- **Purpose:** Showcases EST Financial's 6 core service offerings with descriptions and imagery
- **Builder:** WordPress + Elementor
- **Theme:** Dark/black backgrounds with white text, red (#C20000) accents

---

## Site-Wide Navigation (shared across all pages)
- Logo: EST Financial logo (white on dark, "ff_03.webp")
- Menu Items: About Us | Our Team | Our Media | Success Stories | Services
- CTA Button: "Free Consultation" (links to /welcome/)

---

## Color Scheme
| Role | Color | Notes |
|------|-------|-------|
| Primary Background | #000000 | Black, hero and service sections |
| Secondary Background | #FFFFFF | White, possible content areas |
| Accent Red | #C20000 | CTA buttons, hover states, highlights |
| Body Text (dark bg) | #FFFFFF | White on black |
| Body Text (light bg) | #3D3A34 | Dark grey-brown on white |
| Secondary Text | #69727D | Muted grey |
| Card Background | #111111 or #1A1A1A | Slightly lighter than pure black |
| Light Grey | #F5F5F5 | Accents |

---

## Typography
| Element | Font Family | Size (Desktop) | Weight | Color |
|---------|-------------|----------------|--------|-------|
| Page Heading | "longhand-lp" | 60-70px | 400 | #FFFFFF |
| Service Card Title | "Roboto" or "longhand-lp" | 24-32px | 600 | #FFFFFF |
| Service Description | "Roboto" | 16-18px | 400 | #FFFFFF or muted |
| CTA Button | "Roboto" | 14-16px | 600 | #FFFFFF |

---

## Sections (Top to Bottom)

### 1. Header / Navigation
- Fixed/sticky header, dark background
- Same nav as all other pages

### 2. Hero Section
- **Background:** Black (#000000)
- **Heading:** "Services" (longhand-lp script font, white, large display size, prominently centered)

### 3. Service Cards Grid (6 Cards)
- **Layout:** Grid layout (likely 2-3 columns desktop, 1-2 tablet, 1 mobile)
- **Card Style:** Each card has an image, title, and description text
- **Background:** Dark theme

#### Service Card 1: Finance & Mortgage Broking
- **Image:** Close-up of house key exchange
- **Title:** "Finance & Mortgage Broking"
- **Description:** "We don't just organise loans, we structure smart finance that works with your bigger picture, not against it."

#### Service Card 2: Investment Acquisition
- **Image:** Businessmen reviewing financial report
- **Title:** "Investment Acquisition"
- **Description:** "We help you find, assess and secure quality investments that fit your goals, not just what's available, but what's right."

#### Service Card 3: Asset Management
- **Image:** Real estate agent working
- **Title:** "Asset Management"
- **Description:** "Managing your portfolio isn't a task, it's a strategy. We work to grow your assets while protecting what matters most."

#### Service Card 4: Legal Services
- **Image:** Gavel and legal documents
- **Title:** "Legal Services"
- **Description:** "Our legal partners keep your path clear, from contracts to settlements, so you can move forward with confidence."

#### Service Card 5: Tax Accounting
- **Image:** Businesswoman working
- **Title:** "Tax Accounting"
- **Description:** "We simplify the complex, giving you tax strategies that make sense, save money and support your broader plan."

#### Service Card 6: Financial Planning
- **Image:** Woman showing colleague tablet
- **Title:** "Financial Planning"
- **Description:** "We don't just give advice, we walk with you. At every life stage, we build strategies that actually mean something."

### 4. CTA Section (possible)
- "Contact Us" button (red with white text)

### 5. Footer
- **Background:** Black
- **Head Office:** Level 18, 1 Castlereagh St, Sydney, NSW 2000
- **Email:** Enquiries@est.com.au
- **Phone:** 1300 123 378
- **Links:** Credit Guide, Privacy Policy
- **Social Media:** Facebook, YouTube, Instagram, TikTok
- **Disclaimer:** "All strategies and information provided on this website are general advice only and does not take into consideration any of your personal circumstances. Please arrange an appointment to seek personal financial and taxation advice prior to acting on this information. Copyright @ 2025 EST FINANCIAL Pty Ltd ABN 30 611 799 850. All rights reserved."

---

## Interactive Elements & Animations
- **Service cards:** Hover effect likely includes scale-up, shadow increase, or overlay change (0.3s transition)
- **Card images:** Possible zoom effect on hover (transform: scale)
- **CTA buttons:** Background transitions from #C20000 to brighter red on hover
- **Smooth scrolling** enabled site-wide
- **Possible card click-through:** Cards may link to individual service detail pages

---

## Layout Notes
- **Service grid:** 2-3 columns desktop, 2 tablet, 1 mobile
- **Container max-width:** 1240px desktop
- **Card dimensions:** Consistent sizing with object-fit cover on images
- **Card spacing:** Gap 20-30px
- **Cards likely have rounded corners** and subtle box-shadow
- **Responsive stacking** on smaller viewports

---

## Images Referenced
- EST Financial logo
- 6 service card images (stock photography, business/finance themed):
  - House key exchange (Finance & Mortgage Broking)
  - Financial report review (Investment Acquisition)
  - Real estate agent (Asset Management)
  - Gavel and documents (Legal Services)
  - Businesswoman working (Tax Accounting)
  - Colleagues with tablet (Financial Planning)

---

## Screenshots Inventory
*Screenshots to be captured by running the Playwright script*

### Full Page
- `full-page-desktop.png` -- Complete page at 1920x1080
- `full-page-tablet.png` -- Complete page at 1024x768
- `full-page-mobile.png` -- Complete page at 375x812

### Sections
- `section-header.png` -- Navigation bar
- `section-hero.png` -- Hero with "Services" heading
- `section-services-grid.png` -- All 6 service cards
- `section-footer.png` -- Footer with contact info

### Components
- `component-nav-default.png` -- Navigation default state
- `component-service-card-*.png` -- Service card default state (up to 6)
- `component-service-card-*-hover.png` -- Service card hover state
- `component-button-cta.png` -- CTA button default
- `component-button-cta-hover.png` -- CTA button hover
