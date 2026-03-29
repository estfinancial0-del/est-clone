# QA Review - Iteration 2 - 2026-03-29

## Overall Status: ACCEPTABLE

**Original URL:** https://est.com.au
**Clone Location:** http://localhost:3000/clone (Next.js dev server)
**Reviewed Viewports:** 1440px (desktop), 768px (tablet), 375px (mobile), 320px (small mobile)

**Summary:** Significant improvements have been made since the first review. All seven priority fixes from iteration 1 have been addressed: success story cards now have the hero image + overlay text + bottom info structure, "You" is red in the hero heading, the nav has a red bottom border, wave backgrounds are visible, CTAs are side-by-side columns, form inputs have red borders, the mobile menu has a black background, and Longhand font weights have been corrected to bold (700). The clone now captures the overall look and feel of the original site well. The remaining issues are mostly refinement-level differences rather than structural problems, with one notable exception: the footer uses a white background whereas the original uses black.

---

## Verification of Iteration 1 Fixes

| Fix Requested | Status | Notes |
|---|---|---|
| Success story cards: hero image + overlay text + bottom info | FIXED | Cards now have top hero image area with bold white heading, red Longhand accent text, decorative line, script signature, and a bottom section with name, description, and pill button. Structure matches original. |
| Hero "You" is red | FIXED | "You" renders in `rgb(194, 0, 0)` via `<span className="text-[#C20000]">`. This exactly matches the original's inline `color: #c20000` on the `<strong>` tag. |
| Nav has red bottom border | FIXED | Nav has `border-b-2 border-[#C20000]`. Note: the original site actually has NO explicit red bottom border on the nav (confirmed via computed styles). The original has a very subtle dark-red glow from the wave background bleeding into the nav area. The clone's 2px red line looks slightly different but is a reasonable interpretation. |
| Wave backgrounds are visible | FIXED | Wave section now uses `wave-graphics-02-2880x1800.png` with `backgroundSize: cover` and `backgroundPosition: center center`. Red wave curves are now visible. |
| Two CTA sections are side-by-side columns | FIXED | CTAs now use `grid grid-cols-1 md:grid-cols-2` within a single section. At 1440px desktop, both "Start the Conversation" and "Prefer to chat later?" appear side by side. |
| Form inputs have red borders | FIXED | All four inputs use `border-b border-[#FF0000]`. |
| Mobile menu has black background | FIXED | Mobile menu uses `bg-black` with white text links. Matches the original's dark overlay menu style. |
| Font weights corrected (Longhand) | FIXED | All Longhand headings now render at `fontWeight: 700`. |

---

## Critical Issues (1 found)

### 1. Footer - White Background Instead of Black
**Issue:** The clone footer uses a white background (`bg-white`) with black text and red headings. The original site footer has a BLACK background with white text, red headings ("HEAD OFFICE", "CONTACT US"), and the same overall three-column layout. This is a significant visual mismatch because the entire original site is dark-themed, and the footer continues that dark theme.
**Expected:** Black background (`bg-black` or `bg-[#000000]`), white text for body content, red text for section headings, white links.
**Actual:** White background (`bg-white`), black text, red headings. The footer nav bar at the top also has white background.
**Location:** `<footer className="bg-white ...">` (line 694 of page.tsx)
**Fix suggestion:** Change `bg-white` to `bg-black`. Change all `text-[#000000]` in the footer to `text-white`. Keep `text-[#C20000]` for headings. Change `border-gray-200` to `border-white/20`. The footer nav link row should also have dark background. The logo in the footer may need `invert` or a white version.

---

## Major Issues (5 found)

### 1. Hero Heading Font Weight - 700 vs Original 600
**Issue:** The original hero h2 uses `font-weight: 600` (semibold) with the `longhand-lp` Adobe font. The clone uses `font-weight: 700` (bold). Since the Longhand font files only declare weights at 400 and 700, using 700 may actually be the correct approximation -- but visually the original's heading appears slightly lighter/thinner than the clone's rendering.
**Expected:** `font-weight: 600` (original value)
**Actual:** `font-weight: 700`
**Fix suggestion:** The original uses an Adobe Fonts version (longhand-lp) with weight 600. Since the clone uses self-hosted Longhand with only 400/700 declared weights, 700 is the closest match. This is acceptable but worth noting. If a weight-600 variant of the font file exists, it would be more accurate.

### 2. Nav Link Font Weight - semibold (600) in Clone, 600 in Original (Match, but declared differently)
**Issue:** The clone nav links use `font-semibold` which computes to 600. The original also uses 600. These actually match now. However, the clone previously used `font-semibold` which was flagged as an issue in iteration 1 because the Longhand headings used it. The nav links (which use Roboto, not Longhand) correctly use 600. No action needed -- this is confirmed correct.
**Expected:** 600
**Actual:** 600
**Status:** Confirmed match. No fix needed.

### 3. Form Input Border - 1px Red vs Original 2px Gray
**Issue:** The original form inputs have a `2px solid rgb(105, 114, 125)` bottom border -- a medium gray, not red. The clone uses `1px solid rgb(255, 0, 0)` -- a thin red line. The iteration 1 review incorrectly identified the original borders as red (likely due to reference screenshot interpretation). Live inspection confirms the original uses gray borders.
**Expected:** `border-b-2 border-[#697281]` (2px gray bottom border)
**Actual:** `border-b border-[#FF0000]` (1px red bottom border)
**Location:** Form input elements in page.tsx
**Fix suggestion:** Change `border-b border-[#FF0000]` to `border-b-2 border-[#697281]` on all four input fields. Also update focus state from `focus:border-[#FF0000]` to `focus:border-white` or `focus:border-[#FF0000]` if the focus state should turn red.

### 4. "Call Now" Button - Border Radius Already Correct at 40px (rounded-full)
**Issue:** The iteration 1 review flagged the 40px border radius as too pill-like and suggested reducing to 10-15px. However, live inspection of the original confirms `border-radius: 40px` with `padding: 20px 50px`. The clone now uses `rounded-full` which is equivalent. This is actually correct. The clone's CTA buttons match the original's pill shape.
**Expected:** 40px border radius (pill shape)
**Actual:** `rounded-full` (equivalent)
**Status:** Confirmed match. No fix needed.

### 5. Card Grid Gap - 0 in Clone vs 20px in Original
**Issue:** The original success story card grid has `gap: 20px` between cards. The clone uses `gap-0`, so the four cards are flush against each other with no spacing.
**Expected:** 20px gap between all cards (row and column gap)
**Actual:** 0px gap (cards touch each other)
**Location:** `className="grid grid-cols-1 gap-0 sm:grid-cols-2"` in the success stories section
**Fix suggestion:** Change `gap-0` to `gap-[20px]`.

---

## Minor Issues (8 found)

### 1. Nav Red Bottom Border - Not Present in Original
**Issue:** The clone has a visible 2px red bottom border on the nav. The original has no explicit border -- the subtle red glow at the bottom of the nav area comes from the wave background graphics bleeding through. The clone's red line is a reasonable stylistic choice and looks good, but technically differs from the original.
**Fix suggestion:** This is a judgment call. The red border line adds visual polish and is close enough to the original's subtle red glow effect. Acceptable as-is. To exactly match: remove `border-b-2 border-[#C20000]` from the nav.

### 2. Hero Heading Text Alignment
**Issue:** The clone centers the hero heading (`text-center`). The original also centers it. However, the original has a `<br>` tag between "Dreaming" and "of a Better Future?" which creates a specific line break. The clone wraps naturally. The visual result is similar at desktop but may differ at certain viewport widths.
**Fix suggestion:** Consider adding an explicit line break: `Are <span>You</span> Dreaming<br className="hidden md:inline" /> of a Better Future?`

### 3. Success Story Card Overlay Text - Font Sizes
**Issue:** The overlay heading text on cards uses `text-[28px] sm:text-[34px] md:text-[38px]`. The original's overlay heading (e.g., "She tried doing her SMSF alone.") appears to use a slightly larger bold sans-serif font. The visual difference is small.
**Fix suggestion:** Consider increasing to `text-[32px] sm:text-[38px] md:text-[42px]` for closer match.

### 4. "Watch the Video" Button - Border Width
**Issue:** The original button uses `2px solid white` border. The clone uses `border-2 border-white` which is the same. Match confirmed. However, the clone also adds `bg-transparent` and `text-white/[0.99]` which is slightly unusual. The `/[0.99]` opacity is practically invisible but adds unnecessary complexity.
**Fix suggestion:** Change `text-white/[0.99]` to `text-white`.

### 5. Hero Phone Icon Emoji Missing from "Call Now" Button
**Issue:** The original "Call Now" button text includes a phone emoji: "phone Call Now 1300 123 EST". The clone just has "Call Now 1300 123 EST" without the phone icon.
**Fix suggestion:** Add the phone emoji or a phone icon SVG before "Call Now".

### 6. CTA Heading Font Weights - "Start the Conversation" vs Original
**Issue:** The clone uses `font-medium` (400) for "Start the Conversation" and `font-extrabold` (800) for "Prefer to chat later?". The original likely uses consistent weights. The visual difference is subtle.
**Fix suggestion:** Consider using `font-semibold` (600) for both CTA Longhand headings.

### 7. Horizontal Overflow at 320px Viewport
**Issue:** At 320px viewport width, the page body scrollWidth is 345px, causing 25px of horizontal overflow. This creates an unwanted horizontal scrollbar on very small devices.
**Fix suggestion:** Add `overflow-x-hidden` to the root container, and review any elements with fixed pixel widths that might cause overflow at small sizes. Likely culprits: the card overlay text, or the submit button with `px-[100px]` on mobile (though it has `max-md:px-[50px]`).

### 8. Footer Logo - Needs Inversion if Footer Goes Dark
**Issue:** If the footer background is changed to black (see Critical #1), the current logo image (`/images/logo.webp`) which has red "est" text on a dark/transparent background should still work. But verify after the fix.
**Fix suggestion:** After changing footer to dark, verify the logo is still visible.

---

## What's Working Well

- **Overall page structure and section order** correctly matches the original site flow
- **Hero section** is strong: background image, centered heading with red "You", description text all look great
- **"You" red text** exactly matches the original color `#C20000`
- **Wave background graphics** are now visible and add the correct atmospheric effect behind sections
- **Success story cards** have been completely rebuilt with the correct two-part structure (hero image with overlay text + bottom info section). The overlay includes bold heading, red Longhand accent text, decorative line, and script signature -- all matching the original's structure
- **Success story card grid** uses 2-column layout that persists correctly down to `sm` (640px) breakpoint
- **Two CTA sections** are properly side-by-side at desktop with wave background
- **CTA buttons** (Call Now, Secure Your Booking) have the correct pill shape with red background and red border
- **Credentials carousel** functions correctly with slide transitions and navigation arrows
- **Contact form** has all four fields with the heading, description text, checkbox, and submit button
- **Submit button** styling matches the original (29px border radius, red background, large text)
- **Mobile menu** correctly uses black background with white text links
- **Navigation** has correct link spacing, font size (24px), and the "Free Consultation" button styling
- **Longhand custom font** renders correctly for all headings with proper bold weight
- **Color palette** is accurate throughout: black backgrounds, red accents (#C20000, #FF0000, #FC1212), white text
- **Responsive breakpoints** work well -- layout adapts correctly at tablet and mobile
- **Framer Motion animations** provide smooth entrance effects throughout the page
- **SVG services puzzle diagram** renders well and is centered properly
- **Gray "Do you look back" section** has the correct background color (#999999) and heading styling
- **Social media icons** in the footer are properly styled with red circular backgrounds

---

## Recommended Fix Priority

1. **Footer background color (Critical #1)** - Change from white to black to match original's dark theme. This is the most visually jarring difference remaining.
2. **Form input borders (Major #3)** - Change from 1px red to 2px gray (#697281) to match the actual original styling.
3. **Card grid gap (Major #5)** - Add 20px gap between success story cards.
4. **Horizontal overflow at 320px (Minor #7)** - Add overflow-x-hidden to prevent horizontal scroll on small devices.
5. **Phone emoji on Call Now button (Minor #5)** - Quick addition for accuracy.

---

## Browser Compatibility Notes
- The `font-['Longhand']` Tailwind arbitrary value syntax works in modern browsers. The font weight 700 will map correctly to the declared bold @font-face.
- `rounded-full` on CTA buttons produces consistent pill shapes across browsers.
- The wave background images with `background-size: cover` and `background-position: center` work universally.
- `accent-[#FF0000]` on the checkbox has limited support; Firefox and older Safari may ignore it.
- Google Fonts `@import` via CSS is functional but `next/font/google` would provide better loading performance and avoid FOUT.

---

## Screenshots Captured During Review
- `qa2-clone-desktop-full.png` - Full page at 1440px
- `qa2-clone-nav.png` - Navigation bar
- `qa2-clone-hero.png` - Hero section
- `qa2-clone-wave-section.png` - Wave/"faster way" section
- `qa2-clone-success-stories.png` - Success stories cards (2x2 grid with overlay text)
- `qa2-clone-cta.png` - Side-by-side CTA sections
- `qa2-clone-form.png` - Contact form with red borders
- `qa2-clone-footer.png` - Footer (currently white - needs fix)
- `qa2-clone-mobile-menu.png` - Mobile menu (black background, white links)
- `qa2-clone-mobile-full.png` - Full page at 375px
- `qa2-clone-tablet-full.png` - Full page at 768px
- `qa2-clone-320px-full.png` - Full page at 320px (shows overflow issue)
- `qa2-original-desktop-full.png` - Original full page at 1440px
- `qa2-original-nav.png` - Original nav
- `qa2-original-nav-zoomed.png` - Original nav zoomed (120px height)
- `qa2-original-nav-scrolled.png` - Original nav when scrolled
- `qa2-original-hero.png` - Original hero section
- `qa2-original-mobile-full.png` - Original full page at 375px
- `qa2-original-mobile-menu.png` - Original mobile menu
- `qa2-original-tablet-full.png` - Original full page at 768px
- `qa2-original-footer-zoomed.png` - Original footer area
