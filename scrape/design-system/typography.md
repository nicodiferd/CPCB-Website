# CPCB Mustangs Website - Typography System

## Overview
The CPCB Mustangs website uses a Wix-based typography system with both standard web fonts and custom font families. The site employs responsive typography that adapts to different screen sizes.

---

## Font Families

### Primary Font (Body Text)
- **Font Stack:** `Arial, Helvetica, sans-serif`
- **Classification:** Sans-serif
- **Usage:** Body text, paragraphs, general content
- **Backup Fonts:** Helvetica → Generic sans-serif
- **Characteristics:** Clean, readable, web-safe

### Custom Display Font
- **Font Name:** `lulo-clean-w01-one-bold`
- **Classification:** Display/Headline font
- **Usage:** Large headings, hero sections, major titles
- **Characteristics:** Bold, attention-grabbing, custom Wix font
- **Note:** This is a Wix-specific font that may require licensing or replacement

### Additional Font Variables
Based on Wix's CSS structure, the site likely uses multiple font variables:
- `--font_1` - Primary body font
- `--font_2` - Secondary font (possibly for headings)
- Additional font variables for specific components

---

## Typography Scale

### Heading Hierarchy

While exact pixel values require visual inspection, typical Wix sites use a modular scale. Recommended recreation values:

#### H1 - Main Page Titles
- **Font Family:** `lulo-clean-w01-one-bold` or similar display font
- **Size (Desktop):** `48px - 64px` (estimated)
- **Size (Mobile):** `32px - 40px` (estimated)
- **Weight:** Bold (700-900)
- **Line Height:** `1.2`
- **Letter Spacing:** `-0.5px to 0px`
- **Color:** Cal Poly Green (#003831) or Black
- **Usage:** Page headers, hero section titles

#### H2 - Section Headings
- **Font Family:** `lulo-clean-w01-one-bold` or Arial Bold
- **Size (Desktop):** `36px - 48px` (estimated)
- **Size (Mobile):** `28px - 32px` (estimated)
- **Weight:** Bold (700)
- **Line Height:** `1.3`
- **Letter Spacing:** `0px`
- **Color:** Cal Poly Green (#003831) or Black
- **Usage:** Major section headings, content area titles

#### H3 - Subsection Headings
- **Font Family:** Arial Bold or display font
- **Size (Desktop):** `28px - 32px` (estimated)
- **Size (Mobile):** `24px - 28px` (estimated)
- **Weight:** Bold (700)
- **Line Height:** `1.4`
- **Letter Spacing:** `0px`
- **Color:** Cal Poly Green or Black
- **Usage:** Subsection titles, card headings

#### H4 - Minor Headings
- **Font Family:** Arial Bold
- **Size (Desktop):** `20px - 24px` (estimated)
- **Size (Mobile):** `18px - 20px` (estimated)
- **Weight:** Bold (700)
- **Line Height:** `1.4`
- **Letter Spacing:** `0px`
- **Color:** Black or Dark Gray
- **Usage:** Smaller content sections, list headers

#### H5 & H6 - Tertiary Headings
- **Font Family:** Arial Bold
- **Size:** `16px - 18px` (estimated)
- **Weight:** Bold (600-700)
- **Line Height:** `1.5`
- **Usage:** Minor headings, emphasized labels

---

## Body Text Styles

### Paragraph Text (Default)
- **Font Family:** Arial, Helvetica, sans-serif
- **Size (Desktop):** `16px - 18px`
- **Size (Mobile):** `14px - 16px`
- **Weight:** Regular (400)
- **Line Height:** `1.6 - 1.8`
- **Letter Spacing:** `0px`
- **Color:** Black (#000000) or Dark Gray
- **Usage:** Main content, article text, descriptions

### Small Text
- **Font Family:** Arial, Helvetica, sans-serif
- **Size:** `12px - 14px`
- **Weight:** Regular (400)
- **Line Height:** `1.5`
- **Color:** Gray (#666666)
- **Usage:** Captions, footnotes, metadata, timestamps

### Large Lead Text
- **Font Family:** Arial, Helvetica, sans-serif
- **Size:** `20px - 24px`
- **Weight:** Regular (400) or Medium (500)
- **Line Height:** `1.6`
- **Color:** Black or Dark Gray
- **Usage:** Introduction paragraphs, featured content

---

## Interactive Text Elements

### Links
- **Font:** Inherits from parent element
- **Size:** Matches surrounding text
- **Weight:** Regular (400) or Medium (500)
- **Color:** Cal Poly Green (#003831) or Copper Gold (#B38F4F)
- **Text Decoration:** None (default) or underline on hover
- **Hover State:** Underline + slight color shift

### Buttons
- **Font Family:** Arial Bold or display font
- **Size:** `14px - 18px`
- **Weight:** Bold (700) or Semi-bold (600)
- **Letter Spacing:** `0.5px - 1px`
- **Text Transform:** None or UPPERCASE
- **Color:** White (on dark backgrounds) or Cal Poly Green (on light)

### Navigation Menu
- **Font Family:** Arial, Helvetica, sans-serif
- **Size:** `14px - 16px`
- **Weight:** Medium (500) or Semi-bold (600)
- **Letter Spacing:** `0px - 0.5px`
- **Text Transform:** None or UPPERCASE
- **Color:** Black or Cal Poly Green
- **Hover State:** Color change or underline

---

## Specialized Text Styles

### All Caps Text
- **Font Family:** Arial Bold
- **Text Transform:** UPPERCASE
- **Letter Spacing:** `1px - 2px`
- **Usage:** Labels, category tags, section identifiers

### Emphasized Text
- **Font Style:** Italic (for `<em>` tags)
- **Font Weight:** Bold (for `<strong>` tags)
- **Usage:** Inline emphasis, important information

### Quotes/Testimonials
- **Font Family:** Arial or display font
- **Size:** `18px - 24px`
- **Weight:** Regular (400) or Medium (500)
- **Style:** May include italics
- **Color:** Dark Gray or Black
- **Usage:** Player quotes, testimonials, featured statements

---

## Responsive Typography

### Mobile Breakpoints
- **Small Mobile:** `< 480px`
  - Base font size: `14px`
  - Reduced heading sizes (70-80% of desktop)

- **Mobile:** `480px - 768px`
  - Base font size: `15px - 16px`
  - Moderate heading reduction (80-90% of desktop)

- **Tablet:** `768px - 1024px`
  - Base font size: `16px`
  - Slight heading reduction (90-95% of desktop)

- **Desktop:** `> 1024px`
  - Base font size: `16px - 18px`
  - Full heading sizes

---

## Font Loading and Performance

### Current Implementation (Wix)
- Fonts loaded via Wix's font service
- Custom fonts (`lulo-clean-w01-one-bold`) hosted by Wix
- Font subsetting may be applied
- FOUT (Flash of Unstyled Text) handling by Wix framework

### Recommendations for Custom Build
1. **Web-Safe Fallback:** Use system fonts for better performance
2. **Custom Font Hosting:** Self-host or use Google Fonts
3. **Font Display:** Use `font-display: swap` for better UX
4. **Font Subsetting:** Only load necessary character sets
5. **Variable Fonts:** Consider using variable fonts for file size optimization

---

## Accessibility Considerations

### Readability
- Minimum font size: 14px for body text
- Adequate line height: 1.5 minimum for body text
- Sufficient contrast ratios (see colors.md)
- Avoid all-caps for long text passages

### Responsive Text
- Text should scale appropriately on mobile
- No horizontal scrolling required to read content
- Touch targets for links/buttons: minimum 44x44px

### Font Choices
- Avoid overly decorative fonts for body text
- Ensure sufficient x-height for readability
- Use clear, distinguishable letterforms

---

## Implementation Example

```css
/* Base Typography */
html {
  font-size: 16px; /* Base for rem units */
}

body {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem; /* 16px */
  line-height: 1.6;
  color: #000000;
  font-weight: 400;
}

/* Headings */
h1, h2, h3, h4, h5, h6 {
  font-family: 'Lulo Clean', Arial, sans-serif;
  line-height: 1.2;
  color: #003831; /* Cal Poly Green */
  margin-bottom: 0.75em;
}

h1 {
  font-size: 3rem; /* 48px */
  font-weight: 900;
}

h2 {
  font-size: 2.25rem; /* 36px */
  font-weight: 700;
}

h3 {
  font-size: 1.75rem; /* 28px */
  font-weight: 700;
}

h4 {
  font-size: 1.375rem; /* 22px */
  font-weight: 700;
}

/* Links */
a {
  color: #003831;
  text-decoration: none;
  transition: color 0.2s ease;
}

a:hover {
  text-decoration: underline;
}

/* Buttons */
.btn {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  text-transform: none;
}

/* Responsive Typography */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }

  h1 {
    font-size: 2rem; /* 32px with 16px base */
  }

  h2 {
    font-size: 1.75rem; /* 28px */
  }
}
```

---

## Font Replacement Recommendations

For custom rebuild (to avoid Wix-specific fonts):

### Option 1: System Font Stack (Performance)
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Arial, sans-serif;
```

### Option 2: Google Fonts (Balance)
**Heading Font Options:**
- **Oswald** (bold, sporty) - Similar to Lulo Clean
- **Bebas Neue** (clean, athletic)
- **Montserrat** (modern, bold)
- **Raleway** (elegant, bold)

**Body Font:**
- **Open Sans** (highly readable)
- **Roboto** (clean, modern)
- **Lato** (friendly, professional)

### Option 3: Custom Sports Font
- Purchase or license a collegiate sports-oriented font
- Ensure proper licensing for web use

---

## Notes and Observations

- Wix uses proprietary font system with numbered CSS variables
- Base font size appears to be 10px with scaling applied
- Custom font `lulo-clean-w01-one-bold` is Wix-specific
- Font loading is handled by Wix's infrastructure
- Typography adapts responsively across device types
- Font weights may be limited by available font files

---

## Action Items for Complete Typography Audit

- [ ] Capture screenshots of all heading levels
- [ ] Measure exact font sizes using browser DevTools
- [ ] Identify all font families in use
- [ ] Document line heights and letter spacing values
- [ ] Test responsive behavior at all breakpoints
- [ ] Find suitable replacement fonts for custom build
- [ ] Verify font licensing requirements
- [ ] Document all text style variations (buttons, links, etc.)
- [ ] Test accessibility with screen readers
- [ ] Measure font loading performance

---

*Last Updated: 2025-10-14*
*Status: Based on Wix CSS analysis and standard web typography patterns. Requires visual verification for exact values.*
