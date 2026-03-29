# Our Team Page - est.com.au/team/

## Page Overview
- **URL:** https://est.com.au/team/
- **Title:** Our Team | EST Financial Advisors & Property Experts
- **Purpose:** Showcases the full EST Financial team with names, titles, and photos
- **Builder:** WordPress + Divi Theme (et_pb_ classes)
- **Theme:** Dark/black backgrounds with white text, red (#C20000) accents

---

## Site-Wide Navigation (shared across all pages)
- Logo: EST Financial logo (white on dark, "ff_03.webp")
- Menu Items: About Us | Our Team | Our Media | Success Stories | Services
- CTA Button: "Free Consultation" (links to /welcome/)
- Social links: Facebook, Instagram, YouTube, X (Twitter)

---

## Color Scheme
| Role | Color | Notes |
|------|-------|-------|
| Primary Background | #000000 | Black, used for hero and major sections |
| Secondary Background | #FFFFFF | White, used for content sections |
| Accent Red | #C20000 | CTA buttons, hover states |
| Body Text (dark bg) | #FFFFFF | White on black |
| Body Text (light bg) | #3D3A34 | Dark grey-brown on white |
| Secondary Text | #69727D | Muted grey |
| Light Grey | #F5F5F5 | Card backgrounds, accents |
| Border | #333333 | Subtle borders |

---

## Typography
| Element | Font Family | Size (Desktop) | Weight | Color |
|---------|-------------|----------------|--------|-------|
| Display Headings | "longhand-lp" | 60-70px | 400 | #FFFFFF |
| Section Headings | "longhand-lp" | 42-48px | 400 | Varies |
| Body Text | "Roboto" | 18-20px | 400 | #3D3A34 / #FFFFFF |
| Team Member Name | "Roboto" | 18-22px | 600-700 | #FFFFFF |
| Team Member Title | "Roboto" | 14-16px | 400 | #FFFFFF or muted |

---

## Sections (Top to Bottom)

### 1. Header / Navigation
- Fixed/sticky header, dark background
- Logo left, menu center/right, CTA button far right
- Same nav as all other pages

### 2. Hero / Team Intro Section
- **Background:** Black (#000000)
- **Heading:** "Our Team" (longhand-lp script font, white, large display size)
- **Description Paragraph:** "At est, we bring the right people together. Investment specialists, mortgage experts, property advisors, and a team who keeps things moving. We're more than just advisors. We work together as your strategy team, focused on helping you make smart, practical moves that actually lead somewhere. We focus on the essentials, making sure your plans stay on track and everything's taken care of."

### 3. Team Members Grid
- **Layout:** Grid of team member cards (likely 3-4 columns on desktop, 2 on tablet, 1 on mobile)
- **Card Style:** Each card contains a photo, name, and title
- **Background:** Likely dark or black

#### Team Members (17 total):

| # | Name | Title |
|---|------|-------|
| 1 | Paul Hanna | Chief Executive Officer |
| 2 | Victoria Holsten | Client Relationship Manager |
| 3 | Raphael Bove | Senior Strategist |
| 4 | Samuel Hanna | Operations Manager |
| 5 | Cassandra Hanna | QLD General Manager |
| 6 | Chris Vaughan | Senior Strategist |
| 7 | Michael Gee | Head of Finance |
| 8 | Dominic Carbone | Head of Law |
| 9 | James Peach | Asset Acquisition Manager |
| 10 | Hans Schmid | Marketing Strategist |
| 11 | Justin Immanuelle | Digital Media Designer |
| 12 | Simon Liddle | Financial Advisor |
| 13 | Jim Calagis | Financial Needs Analyst |
| 14 | Caitlin Sager | Paralegal |
| 15 | Martin Fiay | Sales Specialist |
| 16 | Karim Hallal | Broker Assistant |
| 17 | Umar Khan | Financial Needs Analyst |

### 4. Footer
- **Background:** Black
- **Head Office:** Level 18, 1 Castlereagh St, Sydney, NSW 2000
- **Email:** Enquiries@est.com.au
- **Phone:** 1300 123 378
- **Links:** Credit Guide, Privacy Policy
- **Social Media:** Facebook, YouTube, Instagram, TikTok
- **Disclaimer:** "All strategies and information provided on this website are general advice only and does not take into consideration any of your personal circumstances. Please arrange an appointment to seek personal financial and taxation advice prior to acting on this information."
- **Copyright:** "EST FINANCIAL Pty Ltd ABN 30 611 799 850"

---

## Interactive Elements & Animations
- **Team member cards:** Likely scale/shadow/highlight on hover
- **Card hover transitions:** 0.3s ease transform and box-shadow
- **Smooth scrolling** enabled site-wide
- **Button hover:** Background transitions to brighter red
- **Possible click-through:** Cards may link to individual team member pages or expand with more info

---

## Layout Notes
- **Team grid:** 3-4 columns desktop, 2 tablet, 1 mobile
- **Container max-width:** 1240px desktop
- **Card spacing:** Consistent gap (20-30px)
- **Cards likely uniform height** with object-fit cover on photos
- **Responsive:** Stacks to single column on mobile

---

## Images Referenced
- EST Financial logo
- 17 individual team member photos (headshots)
- Possible decorative background elements

---

## Screenshots Inventory
*Screenshots to be captured by running the Playwright script*

### Full Page
- `full-page-desktop.png` -- Complete page at 1920x1080
- `full-page-tablet.png` -- Complete page at 1024x768
- `full-page-mobile.png` -- Complete page at 375x812

### Sections
- `section-header.png` -- Navigation bar
- `section-hero.png` -- Hero with team intro heading and description
- `section-team-grid.png` -- Full team members grid (may need multiple parts)
- `section-footer.png` -- Footer with contact info

### Components
- `component-nav-default.png` -- Navigation default state
- `component-card-*.png` -- Team member card default state
- `component-card-*-hover.png` -- Team member card hover state
