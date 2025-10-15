# CPCB Mustangs Website - Color System

## Overview
The CPCB Mustangs website uses the official Cal Poly Athletics color palette as their primary branding colors. The site is built on Wix and uses CSS custom properties for color management.

---

## Primary Brand Colors

### Cal Poly Green (Primary)
- **Pantone:** PMS 3308 C
- **Hex:** `#003831`
- **RGB:** `rgb(0, 56, 49)`
- **CMYK:** `C:100 M:0 Y:60 K:72`
- **Usage:** Primary brand color, headers, navigation, key interactive elements

### Cal Poly Vegas Gold (Secondary)
- **Pantone:** PMS 1205 C
- **Hex:** `#FFE395`
- **RGB:** `rgb(255, 227, 149)`
- **CMYK:** `C:0 M:6 Y:30 K:0`
- **Usage:** Accent color, highlights, secondary buttons, decorative elements

### Cal Poly Copper Gold (Tertiary)
- **Pantone:** PMS 465 C
- **Hex:** `#B38F4F`
- **RGB:** `rgb(179, 143, 79)`
- **CMYK:** `C:20 M:20 Y:70 K:15`
- **Usage:** Alternative accent, borders, subtle highlights

### Black
- **Pantone:** PMS Black 6 C
- **Hex:** `#000000`
- **RGB:** `rgb(0, 0, 0)`
- **CMYK:** `C:0 M:0 Y:0 K:100`
- **Usage:** Text, strong contrast elements

---

## Wix CSS Variable System

The website uses Wix's CSS custom property system for colors. While exact mappings require access to the site's backend, the following CSS variables are commonly used:

### Text Colors
- `--color_15` - Primary text color (likely black or dark green)
- Additional text color variables referenced in CSS

### Background Colors
- `--color_11` - Background color variable
- Additional background variables for sections and containers

### Interactive Element Colors
- Button colors defined with CSS variables for different states:
  - Normal state
  - Hover state
  - Disabled state
  - Focus state

---

## Supplementary Colors

### White
- **Hex:** `#FFFFFF`
- **RGB:** `rgb(255, 255, 255)`
- **Usage:** Background sections, text on dark backgrounds, card backgrounds

### Neutral Grays (Estimated)
Based on typical Wix site patterns, the site likely uses a neutral gray scale for:
- Borders
- Disabled states
- Background sections
- Text hierarchy (lighter text for secondary information)

**Common Gray Values (To be verified):**
- Light Gray: `#F5F5F5` - Section backgrounds
- Medium Gray: `#CCCCCC` - Borders, dividers
- Dark Gray: `#666666` - Secondary text

---

## Color Usage Guidelines

### Accessibility Considerations
All color combinations should meet WCAG 2.1 AA standards for contrast:
- Normal text: 4.5:1 contrast ratio minimum
- Large text (18pt+): 3:1 contrast ratio minimum

### State-Based Color Usage

#### Buttons
- **Default:** Cal Poly Green background with white text
- **Hover:** Darker green or Vegas Gold
- **Active/Pressed:** Copper Gold or darker green
- **Disabled:** Gray with reduced opacity

#### Links
- **Default:** Cal Poly Green or Copper Gold
- **Hover:** Underlined with color shift
- **Visited:** Slightly muted version of link color
- **Active:** Darker shade

#### Forms
- **Input Borders:** Neutral gray
- **Focus State:** Cal Poly Green border
- **Error State:** Red (exact value TBD)
- **Success State:** Green (exact value TBD)

---

## Brand Consistency Notes

1. **Cal Poly Branding:** The club team follows official Cal Poly Athletics branding guidelines
2. **Mustang Identity:** Colors reflect the Mustang mascot and school spirit
3. **Professional Sports Aesthetic:** Color usage follows collegiate sports website patterns
4. **Green Dominance:** Cal Poly Green is the primary identifier and should be used liberally

---

## Implementation Recommendations

For the custom rebuild:

1. **CSS Custom Properties:** Implement using CSS variables for easy theme management
2. **Color Palette File:** Create a centralized color configuration
3. **Dark Mode (Future):** Consider accessibility with dark mode variants
4. **Brand Compliance:** Ensure all colors match official Cal Poly guidelines

### Example CSS Implementation

```css
:root {
  /* Primary Brand Colors */
  --color-primary: #003831;          /* Cal Poly Green */
  --color-secondary: #FFE395;        /* Vegas Gold */
  --color-tertiary: #B38F4F;         /* Copper Gold */
  --color-black: #000000;
  --color-white: #FFFFFF;

  /* Neutral Grays */
  --color-gray-100: #F5F5F5;
  --color-gray-300: #CCCCCC;
  --color-gray-600: #666666;
  --color-gray-900: #333333;

  /* State Colors */
  --color-hover: #00241F;            /* Darker green */
  --color-focus: #003831;
  --color-error: #DC3545;
  --color-success: #28A745;

  /* Text Colors */
  --text-primary: #000000;
  --text-secondary: #666666;
  --text-inverse: #FFFFFF;
  --text-link: #003831;
}
```

---

## Notes and Observations

- The site is hosted on Wix, which uses a proprietary theming system
- Colors are managed through Wix's design panel and CSS variables
- Exact color usage requires manual inspection of rendered pages
- Some colors may be dynamically applied by Wix's framework
- The responsive design may use color variations for mobile vs desktop

---

## Action Items for Complete Color Audit

- [ ] Access Wix admin panel to view exact color palette settings
- [ ] Capture screenshots of all pages to identify color usage patterns
- [ ] Document hover states and transitions
- [ ] Verify accessibility compliance of color combinations
- [ ] Identify any custom colors used outside the official palette
- [ ] Map CSS variable names to actual color values
- [ ] Document gradient usage (if any)
- [ ] Note any seasonal or event-specific color variations

---

*Last Updated: 2025-10-14*
*Status: Based on web research and official Cal Poly branding guidelines. Requires visual verification for complete accuracy.*
