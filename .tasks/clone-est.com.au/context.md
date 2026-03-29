# Website Clone Task: est.com.au

**Target URL:** https://est.com.au
**Created:** 2026-03-29
**Status:** Assets Extracted -- Ready for Implementation
**Project Type:** Next.js (App Router) + Tailwind CSS + motion

---

## Downloaded Assets Inventory

### Images (`/public/images/`)

| Filename | Source | Usage |
|----------|--------|-------|
| `hero-background.png` | chatgpt-image-jul-17-2025-12_41_55-pm.png | Hero section background (3MB, large) |
| `wave-graphics-02.png` | wave-graphics-02-scaled.png | Wave transition section bg |
| `wave-graphics-02-2880x1800.png` | wave-graphics-02-2880x1800.png | Benefits/value section bg |
| `wave-graphics-03-2880x1800.png` | wave-graphics-03-2880x1800.png | Lower sections bg |
| `card-success-stories.png` | success-stories-cover-1.png | CTA card: Ancy Matthews |
| `card-jensen.png` | jensen-v1.png | CTA card: Jensen Family |
| `card-julie.png` | julie-ott-4.png | CTA card: Julie Ott |
| `card-mark.png` | 1-1.png | CTA card: Mark |
| `logo.webp` | ff_03.webp | Main logo (575x248 native) |
| `arrow.svg` | arrow.svg | Decorative arrow graphic |
| `content-ways.webp` | untitled-23.webp | "Do you look back" section image (1300x900) |
| `content-running.webp` | untitled-233.webp | Content section image (1300x900) |
| `content-family.webp` | untitled-2.webp | Content section image (1300x900) |

### Icons/SVGs (`/public/icons/`)

| Filename | Description |
|----------|-------------|
| `icon-menu.svg` | Hamburger menu icon (3-bar) |
| `icon-close.svg` | Close/X icon |
| `icon-chevron-left.svg` | Carousel previous arrow |
| `icon-chevron-right.svg` | Carousel next arrow |
| `icon-facebook.svg` | Facebook social icon |
| `icon-youtube.svg` | YouTube social icon |
| `icon-instagram.svg` | Instagram social icon |
| `icon-tiktok.svg` | TikTok social icon |
| `logo-combine.svg` | Interactive SVG services diagram (large, multi-colored) |

### Fonts (`/public/fonts/`)

| Filename | Font Family | Weight |
|----------|-------------|--------|
| `longhand-bold.ttf` | Longhand-Bold Font | 700 |
| `longhand-regular.ttf` | Longhand-Bold Font | 400 (regular) |

---

## Fonts & Typography System

### Font Families

| Font | Source | Usage | Weights Used |
|------|--------|-------|-------------|
| **longhand-lp** | Adobe Typekit (kit IDs: `alp8gux`, `hgc5uiz`) | Hero headings, section titles, decorative headings | 400 (regular), 700 (bold) -- renders as weight 600 in computed |
| **Longhand-Bold Font** | Self-hosted TTF (`/fonts/longhand-bold.ttf`, `/fonts/longhand-regular.ttf`) | CTA card titles (Ancy Matthews, Jensen Family, etc.) | 400, 700 |
| **Roboto** | Google Fonts (self-hosted on est.com.au via Elementor) | Body text, nav links, buttons, form inputs, descriptions | 100-800 |
| **Open Sans** | Google Fonts | Some CTA card descriptions, CTA pill buttons | 400, 700 |
| **Poppins** | Google Fonts | "GET IN TOUCH" section heading | 800 |
| **Manrope** | Google Fonts (import URL below) | Elementor default/fallback | 200-800 |
| **Nothing You Could Do** | Google Fonts | Unknown/accent | 400 |

### Font Import URLs
```
Google Fonts: https://fonts.googleapis.com/css?family=Nothing+You+Could+Do:regular|Manrope:200,300,regular,500,600,700,800&subset=latin,cyrillic,cyrillic-ext,greek,latin-ext,vietnamese&display=swap
Adobe Typekit 1: https://use.typekit.com/alp8gux.css
Adobe Typekit 2: https://use.typekit.com/hgc5uiz.css
Roboto: self-hosted on est.com.au (downloaded by Elementor from Google Fonts)
```

### Self-Hosted Font Face Declarations
```css
@font-face {
  font-family: "Longhand-Bold Font";
  font-style: normal;
  font-weight: 700;
  src: url("/fonts/longhand-bold.ttf") format("truetype");
}
@font-face {
  font-family: "Longhand-Bold Font";
  font-style: normal;
  font-weight: 400;
  src: url("/fonts/longhand-regular.ttf") format("truetype");
}
```

### Typography Scale (Computed from Live Site)

#### Headings (longhand-lp)
| Element | Size | Weight | Line-Height | Letter-Spacing | Color | Text |
|---------|------|--------|-------------|----------------|-------|------|
| Hero H1 | 63px | 600 | 63px | normal | `#FFFFFF` | "Are You Dreaming of a Better Future?" |
| Section accent (red) | 60px | 600 | 60px | normal | `rgb(252,18,18)` / `#FC1212` | "A faster way" / "to financial freedom" |
| Section subhead | 48px | 600 | 45px | normal | `#FFFFFF` | "est brings all the pieces together" |
| Section title | 63px | 600 | 63px | normal | `#FFFFFF` | "Success Stories" |
| Black section title | 56px | 600 | 56px | normal | `#000000` | "Do you look back & wish you had invested?" |
| CTA heading (red) | 40px | 500 | 48px | -2px | `rgb(249,0,0)` / `#F90000` | "Start the Conversation" |
| CTA heading (red) | 41px | 800 | 49.2px | -2px | `rgb(255,0,0)` / `#FF0000` | "Prefer to chat later?" |
| Form section heading | 48px | 600 | 48px | normal | `rgb(255,0,0)` / `#FF0000` | "Book A Free Discovery Session" |

#### Sub-headings / Labels
| Element | Font | Size | Weight | Line-Height | Letter-Spacing | Color | Transform |
|---------|------|------|--------|-------------|----------------|-------|-----------|
| Section label | Roboto | 16px | 800 | 17.6px | 2px | `#FFFFFF` | uppercase |
| Section label alt | Poppins | 16px | 800 | 17.6px | 2px | `#FFFFFF` | uppercase |
| Footer heading | Roboto | 18px | 600 | 18px | normal | `rgb(194,0,0)` / `#C20000` | none |
| Footer address | Roboto | 17px | 400 | 21px | normal | `#000000` | none |
| Disclaimer/note | Roboto | 13px | 600 | 13px | normal | `#000000` | none |

#### CTA Card Typography
| Element | Font | Size | Weight | Line-Height | Color |
|---------|------|------|--------|-------------|-------|
| Card title | Longhand-Bold Font | 34px | 600 | 34px | `#FFFFFF` |
| Card description | Roboto / Open Sans | 20px | 400 | 23.8px | `#FFFFFF` |
| Card button text | Roboto | 15px | 500 | 15px | `rgba(255,255,255,0.99)` |

#### Nav Typography
| Element | Font | Size | Weight | Line-Height | Color |
|---------|------|------|--------|-------------|-------|
| Desktop nav link | Roboto | 24px | 600 | 20px | `#FFFFFF` |
| Mobile nav link | Roboto | 24px | 500 | 20px | `#000000` |
| Nav link transition | - | - | - | - | 0.4s |

#### Body / Paragraph Typography
| Element | Font | Size | Weight | Line-Height | Color |
|---------|------|------|--------|-------------|-------|
| Body text | Roboto | 16px | 400 | 22.4px | `#FFFFFF` (on dark) |
| Form input text | Roboto | 16px | 400 | 22.4px | `#FFFFFF` |

---

## Color Palette (Exact Computed Values)

### Elementor Global Colors
```
--e-global-color-primary:   #333333  (text dark)
--e-global-color-secondary: #C20000  (primary red)
--e-global-color-text:      #3D3A34  (body text)
--e-global-color-accent:    #F5F5F5  (light bg)
```

### Primary Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Black | `#000000` | `rgb(0,0,0)` | Primary backgrounds, nav bg, hero overlay |
| White | `#FFFFFF` | `rgb(255,255,255)` | Text on dark, footer bg |
| Red (Brand) | `#C20000` | `rgb(194,0,0)` | Footer headings, social icon bg, global secondary |
| Red (Bright) | `#FC1212` | `rgb(252,18,18)` | Accent headings ("A faster way") |
| Red (Vivid) | `#F90000` | `rgb(249,0,0)` | CTA section headings |
| Red (Pure) | `#FF0000` | `rgb(255,0,0)` | CTA headings, form section heading |
| Red (CTA Button) | `#E60000` | `rgb(230,0,0)` | Nav "Free Consultation" button bg |
| Red (Submit) | `#FF0202` | `rgb(255,2,2)` | Form submit button bg |
| Red (CTA Pill) | `#FF0000` | `rgb(255,0,0)` | "Call Now" / "Secure Your Booking" pill buttons |
| Red (Border) | `#FF0F0F` | `rgb(255,15,15)` | Moneysmart button border |

### Neutral Colors
| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| Gray (Section bg) | `#999999` | `rgb(153,153,153)` | Middle content section bg |
| Dark Gray (Text) | `#3D3A34` | `rgb(61,58,52)` | Body text default |
| Text Dark | `#333333` | `rgb(51,51,51)` | Primary text |
| Gray (Swiper nav) | `rgba(237,237,237,0.9)` | - | Swiper arrow color |

---

## Component Styles (Exact CSS Values)

### Navigation / Header
```css
/* Header container */
background: rgb(0, 0, 0);  /* #000000 */
position: sticky;           /* elementor-sticky with --effects class */
padding: 0px 10px;
z-index: high (sticky);

/* Logo */
width: 108.5px;
height: 46.78px;
max-width: 100%;

/* Nav CTA Button ("Free Consultation") */
font-family: Roboto, sans-serif;
font-size: 22px;
font-weight: 800;
line-height: 22px;
color: rgb(255, 255, 255);
background: rgb(230, 0, 0);  /* #E60000 */
padding: 12px 24px;
border-radius: 10px;
transition: 0.4s;

/* Nav Links */
font-family: Roboto, sans-serif;
font-size: 24px;
font-weight: 600;
line-height: 20px;
color: rgb(255, 255, 255);
padding: 13px 20px;
transition: 0.4s;
```

### CTA Card Buttons (Ghost/Outline on cards)
```css
font-family: Roboto, sans-serif;
font-size: 15px;
font-weight: 500;
line-height: 15px;
color: rgba(255, 255, 255, 0.99);
background: transparent;
padding: 12px 24px;
border: 2px solid rgb(255, 255, 255);
border-radius: 30px;
transition: 0.3s;
```

### CTA Pill Buttons (Call Now / Secure Booking)
```css
font-family: "Open Sans", sans-serif;
font-size: 17px;
font-weight: 700;
line-height: 17px;
color: rgb(255, 255, 255);
background: rgb(255, 0, 0);     /* #FF0000 */
padding: 20px 50px;
border: 5px solid rgb(252, 0, 0);  /* or rgb(251,0,0) */
border-radius: 40px;              /* or 41px */
text-transform: capitalize;
transition: transform 0.3s;
```

### Form Submit Button
```css
font-family: Roboto, sans-serif;
font-size: 30px;
font-weight: 500;
line-height: 30px;
color: rgb(255, 255, 255);
background: rgb(255, 2, 2);   /* #FF0202 */
padding: 10px 100px;
border: 5px solid rgb(255, 0, 0);
border-radius: 29px;
transition: 0.3s;
/* Hover: white bg, red text (inverts) */
```

### Moneysmart / Regulatory Button (Outline)
```css
font-family: Roboto, sans-serif;
font-size: 18px;
font-weight: 500;
line-height: 18px;
color: rgb(255, 255, 255);
background: transparent;
padding: 15px 30px;
border: 2px solid rgb(255, 15, 15);  /* #FF0F0F */
border-radius: 4px;
transition: 0.3s;
```

### CTA Cards (Success Stories)
```css
/* Card container */
transition: 0.5s;
border-radius: 0px;
padding: 0px;

/* Card content overlay */
background: transparent (default), dark overlay on hover;
padding: 55.19px;
display: flex;
flex-direction: row;
align-items: center;
transition: 0.4s;

/* Card title */
font-family: "Longhand-Bold Font", sans-serif;
font-size: 34px;
font-weight: 600;
line-height: 34px;
color: #FFFFFF;
padding-bottom: 10px;
margin-bottom: 15px;

/* Card description */
font-family: Roboto/Open Sans, sans-serif;
font-size: 20px;
font-weight: 400;
line-height: 23.8px;
color: #FFFFFF;
margin-bottom: 52px (first card) or 15px (others);
```

### Form Inputs
```css
font-family: Roboto, sans-serif;
font-size: 16px;
font-weight: 400;
line-height: 22.4px;
color: rgb(255, 255, 255);
background: transparent;
padding: 2px (short inputs) / 5px 14px (message textarea);
border-radius: 3px;
/* Note: bottom-border style for inputs on dark background */
```

### Social Icons
```css
background: rgb(194, 0, 0);  /* #C20000 */
border-radius: 50%;
transition: 0.3s;
color: rgb(105, 114, 125);   /* icon color within */
```

### Carousel / Swiper Navigation
```css
color: rgba(237, 237, 237, 0.9);
font-size: 25px;
width: 25px;
height: 25px;
```

---

## Layout & Spacing

### Container
```
Max-width: 1240px (Elementor default boxed)
Wide container: full-width (e-con-full)
```

### Section Backgrounds & Layout (Top to Bottom)

| # | Section | Background | Min-Height | Padding | Notes |
|---|---------|-----------|------------|---------|-------|
| 0 | Header (sticky) | `#000000` | auto | `0 10px` | Sticky with --effects |
| 1 | Second header (mobile) | `#000000` | auto | `10px` | Duplicate for mobile |
| 2 | Hero | `#000000` + bg-image | `864px` | `10px` | bg: `hero-background.png`, size: cover, pos: 50% 50% |
| 3 | Wave transition | `#000000` + bg-image | auto | `50px 0 227px 0` | bg: `wave-graphics-02.png`, size: cover, pos: 0 -450px |
| 4 | Success Stories cards | `#000000` | auto | `0 10px` | Contains 2x2 CTA card grid |
| 5 | Benefits/Value | `#000000` + bg-image | auto | `10px` | bg: `wave-graphics-02-2880x1800.png`, size: cover, pos: 50% 50% |
| 6 | Gray middle section | `#999999` | auto | `0` | "Do you look back" content |
| 7 | Dark bottom section | `#000000` | auto | `0 10px` | CTA sections, form |
| 8 | Footer | `#FFFFFF` | auto | `10px` | White background |

### Breakpoints
```
Desktop: > 1024px
Tablet:  768px - 1024px
Mobile:  < 767px
```

---

## Animations & Transitions

### Global
```css
html { scroll-behavior: smooth; }
```

### Component Transitions
| Component | Transition | Details |
|-----------|-----------|---------|
| Nav links | `0.4s` | Color/opacity on hover |
| Nav CTA button | `0.4s` | Background color on hover |
| CTA cards | `0.5s` | Overlay reveal, content slide |
| Card content | `0.4s` | Overlay/content appearance |
| Card buttons (outline) | `0.3s` | Border/bg/color on hover |
| Pill buttons | `transform 0.3s` | Scale on hover |
| Form submit | `0.3s` | Background/color inversion |
| Social icons | `0.3s` | Hover state |

### Hover Effects
| Element | Default | Hover |
|---------|---------|-------|
| Nav CTA button | Red bg `#E60000`, white text | White bg, red text (invert) |
| Card buttons (outline) | Transparent bg, white border | Filled bg, color change |
| Pill buttons (CTA) | Red bg | Scale transform |
| Form submit | Red bg `#FF0202`, white text | White bg, red text |
| CTA cards | Image visible, content hidden/overlay | Dark overlay reveals, content slides up |

### CTA Card Hover Behavior
- Default: background image visible, title/text overlaid at bottom
- Hover: dark overlay (1500ms transition per original context), content becomes fully visible
- Card transition: `0.5s`
- Content transition: `0.4s`

---

## Page Structure & Full Text Content

### 1. Header / Navigation (Sticky)
- **Background:** Black `#000000`
- **Logo:** `/images/logo.webp` (108.5 x 46.78px displayed)
- **Nav Items:** About Us | Our Team | Our Media | Success Stories | Services
- **CTA Button:** "Free Consultation" (red, 22px, 800 weight)
- **Mobile:** Hamburger menu icon, opens full-screen menu

### 2. Hero Section
- **Background Image:** `/images/hero-background.png` (cover, centered)
- **Background Color:** `#000000` (under image)
- **Min-Height:** 864px
- **Heading:** "Are You Dreaming of a Better Future?" (longhand-lp, 63px, white, centered)
- **Body Text:** "Dreaming of paying off your home faster, retiring comfortably, helping the kids in the future, or just want to take more holidays? Let est help turn your financial plans and goals into reality. est provides sensible, strategic financial steps with life-changing results. With over twenty years of experience, est helps keep more of your hard-earned cash in your pocket to spend on things you actually enjoy, rather than wasting it on crippling loans and tax."

### 3. Wave Transition Section
- **Background Image:** `/images/wave-graphics-02.png` (cover, position: 0 -450px)
- **Background Color:** `#000000`
- **Padding:** 50px top, 227px bottom
- **Content:**
  - Red heading: "A faster way" (longhand-lp, 60px, `#FC1212`, left-aligned)
  - Red heading: "to financial freedom" (longhand-lp, 60px, `#FC1212`, center-aligned)
  - Body text: "est keep the big picture in mind and manage every step along the journey. Our industry-leading, personalised investment strategies effectively grow your capital and minimise tax and loan payments to put more cash in your pocket. est make wealth management accessible and affordable so every Australian can turn their aspirations into reality by achieving better financial outcomes."

### 4. SVG Services Diagram
- **Content:** Interactive SVG (`/icons/logo-combine.svg`) showing 6 services in a circular/connected layout
- **Services listed in SVG:**
  - Asset Management
  - Finance & Mortgage Broking
  - Investment Acquisition
  - Financial Planning
  - Tax Accounting
  - Legal Services
- **SVG Colors:** Red `#CF1319`, Gray `#BFBFBF`, White `#FFFFFF`
- **Heading below:** "est brings all the pieces together" (longhand-lp, 48px, white, centered)

### 5. Success Stories Section (CTA Cards Grid)
- **Heading:** "Success Stories" (longhand-lp, 63px, white, centered)
- **Layout:** 2x2 grid of CTA cards (on desktop)
- **Cards:**

  **Card 1 - Ancy Matthews**
  - Background: `/images/card-success-stories.png`
  - Title: "Ancy Matthews" (Longhand-Bold, 34px)
  - Description: "with guidance from est team, Ancy moved from feeling overwhelmed and unsure to feeling informed"
  - Button: "Watch the Video" (outline, pill)

  **Card 2 - The Jensen Family**
  - Background: `/images/card-jensen.png`
  - Title: "The Jensen Family" (Longhand-Bold, 34px)
  - Description: "'est' helped us save 12 years' worth of home loan repayments. We've trusted Raphael for over 8 years and couldn't speak more highly of 'est' Financial."
  - Button: "Meet the Jensen's" (outline, pill)

  **Card 3 - Julie Ott**
  - Background: `/images/card-julie.png`
  - Title: "Julie Ott" (Longhand-Bold, 34px)
  - Description: "I spent years focussing on my career and exploring the world. Then it hit me -- I needed a plan. I'm so thankful I found est Financial"
  - Button: "Watch Julie's Story" (outline, pill)

  **Card 4 - Mark**
  - Background: `/images/card-mark.png`
  - Title: "Mark" (Longhand-Bold, 34px)
  - Description: "He felt cautious and overwhelmed at first until est Financial help me in buying 2 Properties in secured the future with est"
  - Button: "Watch Mark's Story" (outline, pill)

### 6. "Do you look back" Section (Gray Background)
- **Background:** `#999999`
- **Heading:** "Do you look back & wish you had invested?" (longhand-lp, 56px, `#000000`)
- **Image:** `/images/content-ways.webp` (1300x900)
- **Note text:** "*ABS 6% annual growth in Australian property" (Roboto, 13px, 600 weight, `#000000`)

### 7. CTA Section - "Speak with an expert"
- **Background:** `#000000`
- **Sub-label:** "Speak with an expert" (Roboto, 16px, 800 weight, uppercase, 2px letter-spacing, white)
- **Heading:** "Start the Conversation" (longhand-lp, 40px, 500 weight, `#F90000`, capitalize, -2px letter-spacing)
- **CTA Button:** "Call Now 1300 123 EST" (Open Sans, 17px, 700 weight, pill, red bg, `border-radius: 40px`, `padding: 20px 50px`)
- **Supporting text:** "Speak with our expert team today. Give us a quick call and get the answers you need"

### 8. CTA Section - "Prefer to chat later?"
- **Sub-label:** "get in touch" (Poppins, 16px, 800 weight, uppercase, 2px letter-spacing, white)
- **Heading:** "Prefer to chat later?" (longhand-lp, 41px, 800 weight, `#FF0000`, capitalize, -2px letter-spacing)
- **CTA Button:** "Secure Your Booking" (Open Sans, 17px, 700 weight, pill, red bg, `border-radius: 41px`, `padding: 20px 50px`)
- **Supporting text:** "Schedule a free consultation with our experienced team, based in Sydney."

### 9. Contact Form Section
- **Heading:** "Book A Free Discovery Session" (longhand-lp, 48px, 600 weight, `#FF0000`)
- **Description:** "The friendly team of est experts will discuss your current financial situation and learn more about your future goals. They explain a bit more about how you can get your money working harder. There's no obligation and regardless of whether you decide to work with us or not, you'll still get a ton of value from the call."
- **Form Fields:**
  - Name (placeholder: "Full Name", type: text)
  - Phone (placeholder: "Phone", type: text)
  - Email (placeholder: "Email", type: email)
  - Postcode (placeholder: "Postcode", type: text)
  - SMS consent checkbox: "I Consent to Recieve SMS Notification. Alerts & Occasional Marketing Communication from est Financial"
  - Privacy policy link in consent text
  - Hidden UTM fields: utm_source, utm_medium, utm_campaign
- **Submit Button:** "Submit" (Roboto, 30px, 500 weight, red bg `#FF0202`, `padding: 10px 100px`, `border: 5px solid #FF0000`, `border-radius: 29px`)

### 10. Credentials Carousel (Swiper)
- **Slide 1 - "Our Trusted Partner":**
  - Heading: "Our Trusted Partner" (Roboto, 18px, 500 weight, white)
  - Text: "We work with our trusted partner, Simon Liddle, who is an authorised representative of Avana Financial Solutions Pty Ltd (AFSL 516325). Simon's ASIC Authorised Representative number is 431197. You can view his credentials directly below."
  - Button: "Moneysmart Financial Advisers Register" (outline, red border, `border-radius: 4px`)
  - Link: https://moneysmart.gov.au/financial-advice/financial-advisers-register#!id=000431197
- **Slide 2 - "Credentials":**
  - Heading: "Credentials"
  - Text: "Est Home Loans holds Australian Credit Licence number 387025. Est Home Loans and Est Mortgages are authorised credit representatives of Specialist Finance Group."

### 11. Footer
- **Background:** `#FFFFFF`
- **Layout:** Multi-column

  **Column 1 - Logo & Links**
  - Logo image (same as header)
  - Link: "Credit Guide"
  - Link: "Privacy Policy"
  - Social Icons (Facebook, YouTube, Instagram, TikTok) -- red `#C20000` circle bg

  **Column 2 - Head Office**
  - Label: "HEAD OFFICE" (Roboto, 18px, 600 weight, `#C20000`)
  - Address: "Level 18, 1 Castlereagh St, Sydney, NSW 2000" (Roboto, 17px, 400 weight, `#000000`)

  **Column 3 - Contact Us**
  - Label: "CONTACT US" (Roboto, 18px, 600 weight, `#C20000`)
  - Email: "Enquiries@est.com.au" (Roboto, 17px, 400 weight, `#000000`)
  - Phone: "1300 123 378" (Roboto, 17px, 400 weight, `#000000`)

  **Disclaimer Text:**
  "All strategies and information provided on this website are general advice only and does not take into consideration any of your personal circumstances. Please arrange an appointment to seek personal financial and taxation advice prior to acting on this information. Copyright @ 2025 EST FINANCIAL Pty Ltd ABN 30 611 799 850. All rights reserved."

---

## Screenshots Reference

All screenshots are in: `/Users/justinimanuelle/est-clone/.tasks/clone-est.com.au/screenshots/`

### Full Page
- `full-page-desktop.png` (1920x1080 viewport)
- `full-page-tablet.png` (1024x768 viewport)
- `full-page-mobile.png` (375x812 viewport)

### Components
- `component-nav-default.png` / `component-nav-scrolled.png`
- `component-nav-hover-*.png` (about-us, our-media, our-team, services, success-stories)
- `component-nav-mobile.png` / `component-nav-mobile-open.png`
- `component-nav-tablet.png` / `component-nav-tablet-open.png`
- `component-button-*-default.png` / `component-button-*-hover.png`
- `component-card-0.png` through `component-card-5.png` (with hover variants)
- `component-carousel-slide-1.png` / `component-carousel-slide-2.png`
- `component-form.png`
- `component-footer.png`
- `section-hero.png` / `section-hero-mobile.png`
- `detail-wave-transition.png`

---

## Technical Notes

### Platform
- WordPress + Elementor page builder
- Swiper.js for carousels
- Adobe Typekit for longhand-lp font
- Google Fonts (Roboto self-hosted via Elementor, Manrope via CDN)

### Key Implementation Notes
1. **longhand-lp font**: Loaded via Adobe Typekit. For the clone, use the self-hosted Longhand-Bold Font TTF files at `/fonts/longhand-bold.ttf` and `/fonts/longhand-regular.ttf`. These are the same underlying font. Apply via `@font-face` in CSS.
2. **Roboto**: Use Google Fonts import or next/font/google.
3. **Open Sans and Poppins**: Used sparingly. Import via Google Fonts.
4. **Hero background**: Large PNG (3MB). Consider optimizing/converting to WebP for production.
5. **Wave graphics**: Used as decorative section dividers with specific background-position offsets.
6. **SVG services diagram** (`logo-combine.svg`): Complex interactive SVG with links to /Services/. Contains text labels for 6 services arranged in a circular pattern. Colors: red `#CF1319`, gray `#BFBFBF`, white `#FFF`.
7. **CTA cards**: Use background-image with overlay on hover. The hover reveals content that slides up. Transition duration: 0.5s for card, 0.4s for content.
8. **Form**: Simple contact form with 4 visible fields + SMS consent checkbox. Dark background with white text inputs (transparent bg, bottom border style).
9. **Sticky header**: Black header stays at top on scroll. Has duplicate markup for desktop and mobile nav variants.
10. **Color consistency**: Multiple reds are used throughout -- they are NOT all the same. `#C20000` for branding/footer, `#E60000` for nav button, `#FF0000`/`#FF0202` for CTA/form buttons, `#FC1212` for accent headings.
11. **Card images**: Each success story card has a unique background image with a person, revealed with a dark overlay on hover showing name/description/CTA.
12. **Content images**: `content-ways.webp`, `content-running.webp`, and `content-family.webp` are used in the gray middle section and potentially in two-column layouts.
