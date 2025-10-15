# CPCB Mustangs Website - Spacing and Layout System

## Overview
The CPCB Mustangs website uses Wix's responsive layout system with grid-based design, flexible containers, and adaptive spacing patterns. The layout adapts across mobile, tablet, and desktop breakpoints.

---

## Layout Structure

### Page Container
- **Type:** Full-width container
- **Max Width:** Likely `1200px - 1440px` for content areas
- **Padding (Desktop):** `0 20px - 40px` (estimated)
- **Padding (Mobile):** `0 15px - 20px` (estimated)
- **Background:** Variable per section

### Content Sections
- **Section Padding (Vertical):** `60px - 100px` (desktop), `40px - 60px` (mobile)
- **Section Padding (Horizontal):** Inherits from container
- **Section Margin:** Typically none (padding handles spacing)

---

## Grid System

### Desktop Grid
- **System:** CSS Grid / Flexbox hybrid
- **Columns:** Flexible, content-dependent
- **Common Patterns:**
  - 12-column grid for complex layouts
  - 2-column for split content
  - 3-column for features/cards
  - 4-column for galleries/photo grids

### Mobile Grid
- **Default:** Single column layout
- **Exceptions:** 2-column for specific content (photo grids)
- **Stack Order:** Content stacks vertically

---

## Responsive Breakpoints

### Major Breakpoints
Based on Wix's standard breakpoint system:

```css
/* Mobile Small */
< 480px
- Single column
- Increased touch targets
- Stacked navigation

/* Mobile */
480px - 768px
- Single to dual column
- Simplified navigation
- Reduced spacing

/* Tablet */
768px - 1024px
- 2-3 column layouts
- Responsive navigation (may collapse)
- Moderate spacing

/* Desktop */
1024px - 1440px
- Full multi-column layouts
- Expanded navigation
- Maximum spacing

/* Large Desktop */
> 1440px
- Constrained max-width for content
- Maintained spacing ratios
```

---

## Spacing Scale

### Recommended Spacing System
Based on standard Wix patterns, using 8px base unit:

```css
--space-xs: 4px;     /* Tight spacing (icons, small gaps) */
--space-sm: 8px;     /* Small spacing (inline elements) */
--space-md: 16px;    /* Medium spacing (standard gaps) */
--space-lg: 24px;    /* Large spacing (between components) */
--space-xl: 32px;    /* Extra large (section elements) */
--space-2xl: 48px;   /* 2X large (major sections) */
--space-3xl: 64px;   /* 3X large (page sections) */
--space-4xl: 96px;   /* 4X large (hero sections) */
```

### Vertical Spacing (Margins/Padding)

**Component Spacing:**
- **Buttons:** `12px 24px` (padding: vertical horizontal)
- **Cards:** `20px - 30px` (internal padding)
- **Form Elements:** `12px - 16px` (padding)
- **List Items:** `8px - 12px` (vertical spacing)

**Section Spacing:**
- **Header:** `20px - 40px` (vertical padding)
- **Footer:** `40px - 60px` (vertical padding)
- **Content Sections:** `60px - 100px` (between major sections)
- **Subsections:** `30px - 40px` (between minor sections)

### Horizontal Spacing

**Component Gaps:**
- **Navigation Items:** `20px - 30px` (gap between menu items)
- **Button Groups:** `12px - 16px` (gap between buttons)
- **Grid Columns:** `20px - 30px` (gutter width)
- **Icon + Text:** `8px - 12px` (gap)

---

## Common Layout Patterns

### Header/Navigation
```
Structure:
┌─────────────────────────────────────────┐
│ [Logo]              [Nav Items]    [CTA]│
│  (left)            (center/right) (right)│
└─────────────────────────────────────────┘

Padding: 20px - 30px (vertical), Container-width (horizontal)
Position: Fixed or Relative
Background: Solid color or transparent
```

### Hero Section
```
Structure:
┌─────────────────────────────────────────┐
│                                         │
│            [Hero Image/BG]              │
│                                         │
│         [Large Heading]                 │
│       [Subheading/Description]          │
│           [CTA Buttons]                 │
│                                         │
└─────────────────────────────────────────┘

Height: 60vh - 100vh (viewport height)
Padding: 80px - 120px (vertical)
Text Alignment: Center (typical)
```

### Content Grid (3-Column Example)
```
Structure:
┌─────────┬─────────┬─────────┐
│ Card 1  │ Card 2  │ Card 3  │
│         │         │         │
└─────────┴─────────┴─────────┘

Gap: 20px - 30px
Card Padding: 20px - 30px
Mobile: Stacks to single column
```

### Two-Column Split
```
Structure:
┌──────────────┬──────────────┐
│              │              │
│   Content    │    Image     │
│   (Text)     │   or Media   │
│              │              │
└──────────────┴──────────────┘

Ratio: 50/50 or 60/40
Gap: 40px - 60px
Mobile: Stacks vertically
```

### Footer
```
Structure:
┌─────────────────────────────────────────┐
│  [Column 1]  [Column 2]  [Column 3]     │
│  Links       Contact     Social Media   │
│                                         │
│  ─────────────────────────────────────  │
│  [Copyright]         [Legal Links]      │
└─────────────────────────────────────────┘

Padding: 40px - 60px (vertical)
Background: Dark (typically)
Columns: 3-4 on desktop, stack on mobile
```

---

## Component Spacing Details

### Navigation Bar
- **Height:** `60px - 80px` (desktop), `60px` (mobile)
- **Horizontal Padding:** `20px - 40px`
- **Item Spacing:** `20px - 30px` between items
- **Logo Size:** `40px - 60px` (height)

### Buttons
- **Padding:** `12px 24px` (small), `16px 32px` (medium), `20px 40px` (large)
- **Min Height:** `44px` (for accessibility)
- **Border Radius:** `4px - 8px` (estimated)
- **Gap in Groups:** `12px - 16px`

### Cards/Boxes
- **Padding:** `20px - 30px` (internal)
- **Margin:** `15px - 20px` (between cards)
- **Border Radius:** `8px - 12px` (estimated)
- **Shadow:** Varies by component

### Forms
- **Input Height:** `44px - 50px`
- **Input Padding:** `12px - 16px`
- **Field Spacing:** `16px - 24px` (between fields)
- **Label Margin:** `8px` (below label)

### Images and Media
- **Container Margin:** `20px - 40px` (around media)
- **Caption Margin:** `8px - 12px` (above caption)
- **Gallery Gap:** `15px - 20px` (between images)

---

## Wix-Specific Layout Features

### Container Types
Wix uses several container types:
- **Page Container:** Full-width, holds all content
- **Section Container:** Individual sections with backgrounds
- **Strip Container:** Full-width strips for backgrounds
- **Column Container:** Multi-column layouts
- **Grid Container:** CSS Grid-based layouts

### Positioning
- **Absolute Positioning:** Used for overlays, floating elements
- **Fixed Positioning:** Navigation bars, CTAs
- **Relative/Flex:** Main content flow
- **Z-Index Layers:** Managed by Wix framework

---

## Responsive Behavior

### Mobile Adaptations
- **Navigation:** Hamburger menu (likely)
- **Grid Columns:** Collapse to 1-2 columns
- **Font Sizes:** Scale down (see typography.md)
- **Padding/Margins:** Reduce by 30-50%
- **Images:** Full-width, stack vertically

### Tablet Adaptations
- **Grid Columns:** 2-3 columns
- **Navigation:** May remain horizontal or collapse
- **Spacing:** Moderate reduction from desktop
- **Images:** May remain side-by-side in some layouts

---

## Alignment and Positioning

### Text Alignment
- **Headers:** Center or Left (varies by section)
- **Body Text:** Left-aligned
- **Hero Sections:** Center-aligned (typical)
- **Footer:** Left or Center (varies by column)

### Content Alignment
- **Centered Content:** Max-width container with auto margins
- **Full-Width Sections:** Edge-to-edge backgrounds with contained content
- **Asymmetric Layouts:** 60/40 or 70/30 splits for visual interest

---

## Whitespace Philosophy

### Principles
1. **Breathing Room:** Adequate spacing around text for readability
2. **Visual Hierarchy:** More space around important elements
3. **Grouped Content:** Related items closer together
4. **Section Separation:** Clear visual breaks between sections
5. **Mobile Optimization:** Maintain hierarchy while reducing overall space

---

## Implementation Recommendations

### CSS Grid Example
```css
.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 15px;
  }
}
```

### Spacing Utilities
```css
/* Margin Utilities */
.mt-sm { margin-top: 8px; }
.mt-md { margin-top: 16px; }
.mt-lg { margin-top: 24px; }
.mt-xl { margin-top: 32px; }

/* Padding Utilities */
.p-sm { padding: 8px; }
.p-md { padding: 16px; }
.p-lg { padding: 24px; }
.p-xl { padding: 32px; }

/* Section Spacing */
.section {
  padding: 80px 20px;
}

@media (max-width: 768px) {
  .section {
    padding: 40px 15px;
  }
}
```

---

## Page-Specific Layouts

### Homepage
- **Hero Section:** Full viewport height, centered content
- **Feature Sections:** 3-column grid, alternating layouts
- **Schedule/Scores:** Table or card layout
- **Footer:** Multi-column with social links

### Schedule Page
- **Table Layout:** Responsive table or card grid
- **Filters:** Horizontal button group or dropdown
- **Details:** Expandable rows or modal popups

### Blog/News Page
- **Post Grid:** 2-3 column card grid
- **Featured Post:** Full-width at top
- **Sidebar:** Right column (desktop), stack on mobile

### Photos Page
- **Gallery Grid:** 3-4 columns on desktop, 2 on mobile
- **Lightbox:** Full-screen overlay on click
- **Spacing:** Tight gaps (10px-15px) for grid effect

---

## Accessibility Considerations

### Touch Targets
- **Minimum Size:** 44x44px for interactive elements
- **Spacing:** Adequate gap between clickable items
- **Focus States:** Visible outline/border on keyboard focus

### Reading Width
- **Optimal Line Length:** 50-75 characters per line
- **Max Content Width:** 700-800px for long-form text
- **Paragraph Spacing:** 1.5em between paragraphs

---

## Notes and Observations

- Wix uses a drag-and-drop builder affecting layout consistency
- Grid system is flexible but may vary across pages
- Responsive behavior is automated by Wix framework
- Exact spacing values require visual inspection with DevTools
- Layout patterns follow standard web design conventions
- Mobile-first approach with progressive enhancement

---

## Action Items for Complete Layout Audit

- [ ] Measure exact container widths at all breakpoints
- [ ] Document all section padding values
- [ ] Capture grid column configurations for each page
- [ ] Measure gutter widths between columns
- [ ] Document responsive behavior transitions
- [ ] Identify all layout patterns used
- [ ] Measure header and footer dimensions
- [ ] Document z-index layering system
- [ ] Test touch target sizes on mobile
- [ ] Verify accessibility of spacing

---

*Last Updated: 2025-10-14*
*Status: Based on Wix framework patterns and standard responsive design practices. Requires visual measurement for exact values.*
