# CPCB Mustangs Website - Navigation System

## Overview
This document details the navigation structure, menu patterns, and user flow throughout the cpcbmustangs.com website.

---

## Primary Navigation

### Desktop Navigation Bar

**Location:** Top of page, fixed or static
**Layout:** Horizontal menu bar

**Estimated Menu Items:**
1. **Home** → `/` or `/home`
2. **Schedule** → `/schedule`
3. **Live Updates** → `/live-updates`
4. **League** → `/league`
5. **Photos** → `/photos`
6. **Team News** or **Blog** → `/blog`

**Additional Possible Items:**
- About
- Roster
- Contact
- Join/Recruitment

**Navigation Styling:**
- **Font:** Arial, Helvetica, sans-serif
- **Size:** 14px - 16px
- **Weight:** Medium (500) or Semi-bold (600)
- **Color:** Black or Cal Poly Green (#003831)
- **Spacing:** 20px - 30px between items
- **Hover State:** Color change, underline, or background highlight
- **Active State:** Underline, different color, or bold

**Logo Placement:**
- **Position:** Left side of navigation
- **Clickable:** Yes, links to homepage
- **Size:** 40px - 60px height
- **Mobile:** May scale down or show icon only

---

## Mobile Navigation

### Hamburger Menu
**Trigger:** Viewport width < 768px (typical breakpoint)

**Menu Icon:**
- **Type:** Three horizontal lines (hamburger icon)
- **Position:** Top right corner
- **Size:** 24px - 32px
- **Color:** Black or Cal Poly Green
- **Animation:** Transforms to X when open

**Menu Behavior:**
- **Activation:** Tap/click hamburger icon
- **Transition:** Slide-in from right, top, or overlay
- **Layout:** Vertical list of menu items
- **Close:** X button, tap outside, or tap menu item

**Mobile Menu Items:**
Same as desktop navigation, stacked vertically:
1. Home
2. Schedule
3. Live Updates
4. League
5. Photos
6. Team News / Blog
7. [Social Media Links] (potential)
8. [Contact] (potential)

**Mobile Menu Styling:**
- **Background:** White or Cal Poly Green
- **Text Color:** Contrasting color for accessibility
- **Item Height:** 44px minimum (touch target size)
- **Separator:** Border or divider lines between items
- **Animation:** Smooth slide or fade transition

---

## Footer Navigation

### Footer Menu Structure

**Layout:** Multi-column or stacked (mobile)

**Column 1: Quick Links**
- Home
- Schedule
- Live Updates
- League
- Photos
- Team News

**Column 2: About**
- About the Team
- NCBA Information
- Recruitment/Join
- Contact Us

**Column 3: Connect**
- Email: cpcb.mustangs@gmail.com
- Social Media Links:
  - Instagram: @calpolyclubbaseball
  - Twitter/X: @CPCB_Mustangs
  - Facebook: Cal Poly Club Baseball

**Column 4: Legal/Resources**
- Privacy Policy (if applicable)
- Terms of Use (if applicable)
- Site Map (potential)
- NCBA Website Link
- Cal Poly Athletics Link

**Footer Styling:**
- **Background:** Cal Poly Green (#003831) or dark gray
- **Text Color:** White or Vegas Gold
- **Font Size:** 12px - 14px
- **Link Hover:** Underline or color change
- **Padding:** 40px - 60px vertical

**Copyright Notice:**
- **Text:** "© 2025 Cal Poly Club Baseball. All rights reserved." (example)
- **Position:** Bottom of footer, centered or left-aligned
- **Font Size:** 12px
- **Color:** Light gray or muted gold

---

## Social Media Navigation

### Social Media Links

**Platforms:**
1. **Instagram** (@calpolyclubbaseball)
   - Icon: Instagram logo
   - Link: https://www.instagram.com/calpolyclubbaseball/

2. **Twitter/X** (@CPCB_Mustangs)
   - Icon: X/Twitter logo
   - Link: https://twitter.com/cpcb_mustangs

3. **Facebook** (Cal Poly Club Baseball)
   - Icon: Facebook logo
   - Link: https://www.facebook.com/CalPolyClubBaseball/

**Placement:**
- Header (top right corner, potential)
- Footer (dedicated social section)
- Sidebar (on certain pages, potential)

**Icon Styling:**
- **Style:** Filled or outline icons
- **Size:** 24px - 32px
- **Color:** Cal Poly Green, black, or platform brand colors
- **Hover:** Color shift or scale effect
- **Spacing:** 12px - 16px between icons
- **Format:** SVG icons or icon font

**Behavior:**
- Open in new tab/window (target="_blank")
- Include rel="noopener noreferrer" for security

---

## Breadcrumb Navigation

**Status:** Not confirmed on current site
**Potential Implementation:** For blog posts and deep pages

**Example:**
```
Home > Team News > 2019-2020 Club Baseball Tryouts
```

**Styling:**
- Font Size: 12px - 14px
- Color: Gray with active page in Cal Poly Green
- Separator: > or / character
- Position: Top of content area

---

## Internal Navigation Patterns

### Call-to-Action Buttons

**Primary CTAs:**
- "View Full Schedule" → /schedule
- "Follow Live Updates" → /live-updates
- "Contact Us" → mailto:cpcb.mustangs@gmail.com
- "View Photos" → /photos
- "Read More" → Blog post pages

**Button Styling:**
- **Background:** Cal Poly Green (#003831)
- **Text Color:** White (#FFFFFF)
- **Padding:** 12px 24px (medium), 16px 32px (large)
- **Border Radius:** 4px - 8px
- **Font Weight:** Bold (700)
- **Hover:** Darker green or Vegas Gold background

**Secondary CTAs:**
- **Background:** Transparent or white
- **Border:** 2px solid Cal Poly Green
- **Text Color:** Cal Poly Green
- **Hover:** Filled background, inverted colors

### Link Styling

**Text Links (in content):**
- **Color:** Cal Poly Green or Copper Gold
- **Decoration:** None (default) or underline
- **Hover:** Underline, color shift
- **Visited:** Slightly muted color (optional)

**Navigation Links:**
- **Color:** Black or Cal Poly Green
- **Hover:** Underline, background highlight, or color change
- **Active Page:** Bold, underline, or different color

---

## Navigation Behavior

### Scroll Behavior

**Sticky Header (Potential):**
- Navigation bar sticks to top on scroll
- May shrink in height when scrolled
- Logo may reduce in size
- Background may change (transparent to solid)

**Smooth Scroll:**
- Anchor links scroll smoothly
- Used for on-page navigation (if applicable)

### Active Page Indication

**Methods:**
- **Bold Text:** Current page in bold
- **Underline:** Active page underlined
- **Color Change:** Different color for current page
- **Background:** Subtle background highlight

---

## User Flow Paths

### Primary User Journeys

**New Visitor Journey:**
1. Land on **Home** page
2. Learn about team
3. Navigate to **Schedule** to see games
4. Check **League** standings
5. Follow on social media

**Fan Journey:**
1. Home → **Live Updates** (game day)
2. Check **Schedule** for upcoming games
3. View **Photos** from recent game
4. Read **Team News** for updates

**Prospective Player Journey:**
1. Home → Learn about team achievements
2. **Team News** → Find tryout information
3. **Schedule** → See season commitment
4. Contact via email

**Parent/Supporter Journey:**
1. **Schedule** → Plan attendance
2. **League** → Understand competition level
3. **Live Updates** → Follow game remotely
4. **Photos** → See player involvement

---

## External Navigation

### External Links

**NCBA Links:**
- NCBA Homepage: https://clubbaseball.org/
- Conference Page: SoPac West conference
- Team Profile on NCBA site

**Opponent Teams:**
- UCSB Club Baseball
- UCLA Club Baseball
- USC Club Baseball
- CSUF Club Baseball
- Long Beach State Club Baseball

**Cal Poly Links:**
- Cal Poly Homepage: calpoly.edu
- Cal Poly Athletics: gopoly.com
- Cal Poly Recreation: (club sports portal)

**GameChanger:**
- Team profile on GameChanger
- Live game links

**Link Behavior:**
- External links open in new tab
- Icon indicator for external links (potential)
- Consistent with external link best practices

---

## Search Functionality

**Status:** Not confirmed on current site
**Recommendation:** Add search for blog/news posts in Phase 2

**Potential Implementation:**
- Search bar in header or sidebar
- Search results page
- Filter by category, date, keywords

---

## Skip Navigation

**Accessibility Feature:**
- "Skip to main content" link
- Hidden until keyboard focus
- Improves screen reader navigation
- WCAG compliance

---

## Navigation Accessibility

### Keyboard Navigation
- All menu items accessible via Tab key
- Enter key activates links
- Escape key closes mobile menu
- Arrow keys for dropdowns (if applicable)

### Screen Reader Support
- Semantic HTML (`<nav>`, `<ul>`, `<li>`)
- ARIA labels for icon-only navigation
- ARIA-expanded for mobile menu state
- Skip navigation link

### Focus Indicators
- Visible outline on focus
- High contrast for visibility
- Consistent across all interactive elements

### Color Contrast
- Text vs. background: Minimum 4.5:1 ratio
- Active states clearly distinguishable
- Not relying on color alone for information

---

## Navigation Performance

### Loading Considerations
- Menu items load with initial page (not AJAX)
- Icons optimized (SVG or icon font)
- Minimal JavaScript for mobile menu toggle
- No layout shift on menu interaction

### Mobile Performance
- Touch-friendly target sizes (44x44px minimum)
- Fast tap response (no 300ms delay)
- Smooth animations (60fps)
- No horizontal scrolling

---

## Implementation Examples

### Desktop Navigation HTML Structure
```html
<header>
  <nav class="main-nav">
    <div class="container">
      <a href="/" class="logo">
        <img src="logo.svg" alt="Cal Poly Club Baseball">
      </a>
      <ul class="nav-menu">
        <li><a href="/" class="active">Home</a></li>
        <li><a href="/schedule">Schedule</a></li>
        <li><a href="/live-updates">Live Updates</a></li>
        <li><a href="/league">League</a></li>
        <li><a href="/photos">Photos</a></li>
        <li><a href="/blog">Team News</a></li>
      </ul>
      <div class="social-links">
        <a href="https://instagram.com/calpolyclubbaseball" target="_blank">
          <img src="instagram-icon.svg" alt="Instagram">
        </a>
        <!-- Additional social icons -->
      </div>
    </div>
  </nav>
</header>
```

### Mobile Navigation Toggle
```javascript
// Simple mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});
```

### CSS for Navigation
```css
.main-nav {
  background: #FFFFFF;
  padding: 20px 0;
  border-bottom: 1px solid #CCCCCC;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-menu a {
  color: #003831; /* Cal Poly Green */
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: #B38F4F; /* Copper Gold */
  text-decoration: underline;
}

/* Mobile */
@media (max-width: 768px) {
  .nav-menu {
    flex-direction: column;
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100vh;
    background: #003831;
    padding: 80px 20px;
    transition: right 0.3s ease;
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-menu a {
    color: #FFFFFF;
    padding: 12px 0;
    display: block;
  }
}
```

---

## Navigation Testing Checklist

- [ ] All navigation links work correctly
- [ ] Active page indication functions
- [ ] Mobile menu opens and closes smoothly
- [ ] External links open in new tabs
- [ ] Social media links direct to correct profiles
- [ ] Keyboard navigation works (Tab, Enter, Esc)
- [ ] Screen reader announces navigation properly
- [ ] Focus indicators visible on all interactive elements
- [ ] Touch targets meet 44x44px minimum on mobile
- [ ] No broken links (404 errors)
- [ ] Navigation consistent across all pages
- [ ] Logo links to homepage
- [ ] Footer navigation matches primary navigation

---

## Notes and Observations

- Navigation structure is straightforward, typical of small organization sites
- Mobile-first approach essential for fan engagement at games
- Social media integration prominent for community building
- External links important for NCBA affiliation and opponent context
- Email contact is primary communication method (no contact form observed)
- Clean, simple navigation supports ease of use

---

## Recommendations for Rebuild

1. **Maintain Simplicity:** Keep navigation straightforward
2. **Mobile Optimization:** Ensure smooth mobile menu
3. **Visual Feedback:** Clear hover and active states
4. **Accessibility First:** Keyboard and screen reader support
5. **Performance:** Minimize JavaScript for menu
6. **Consistency:** Match navigation across all pages
7. **Social Prominence:** Make social links easy to find
8. **Clear Hierarchy:** Primary actions easily accessible

---

*Last Updated: 2025-10-14*
*Status: Based on standard Wix navigation patterns and discovered page structure. Requires visual confirmation for exact implementation.*
