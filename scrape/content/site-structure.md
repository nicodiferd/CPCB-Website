# CPCB Mustangs Website - Site Structure and Architecture

## Overview
This document maps the information architecture, site hierarchy, and structural organization of cpcbmustangs.com.

---

## Site Hierarchy

```
cpcbmustangs.com (Root)
│
├── Home (/)
│   ├── Hero Section
│   ├── About/Introduction
│   ├── Featured Content
│   ├── Quick Links
│   └── Contact/Social CTA
│
├── Schedule (/schedule)
│   ├── Season Schedule Table
│   ├── Game Results
│   └── Upcoming Games
│
├── Live Updates (/live-updates)
│   ├── GameChanger Integration
│   ├── Live Scores
│   └── Statistics
│
├── League (/league)
│   ├── Conference Standings
│   ├── Team Information
│   └── League Links
│
├── Photos (/photos)
│   ├── Gallery Grid
│   └── Photo Albums/Categories
│       ├── Season 2024-25
│       ├── Season 2023-24
│       ├── Championships
│       └── Events
│
└── Team News / Blog (/blog)
    ├── Post Listing
    └── Individual Posts (/post/[slug])
        └── Example: /post/club-baseball-tryouts
```

---

## Information Architecture

### Primary Content Areas

**1. Team Information**
- Team name and identity
- Achievements and history
- NCBA affiliation
- Conference membership
- Contact information

**2. Competitive Information**
- Game schedule
- Live updates
- League standings
- Results and records

**3. Media and Engagement**
- Photos and galleries
- News and updates
- Social media presence

**4. Recruitment and Participation**
- Tryout information
- Team requirements
- Contact for prospective players

---

## Page Templates

### Template 1: Homepage
**Layout:** Multi-section landing page

**Sections:**
1. Hero/Banner
2. About/Introduction
3. Featured content (3-column cards)
4. Call-to-action
5. Footer

**Purpose:** Gateway, overview, first impression

---

### Template 2: Content Page (Schedule, League)
**Layout:** Single-column with data table

**Sections:**
1. Page header
2. Content area (table or structured data)
3. Additional information
4. Footer

**Purpose:** Information display, functional data

---

### Template 3: Gallery Page (Photos)
**Layout:** Grid-based media gallery

**Sections:**
1. Page header
2. Gallery grid
3. Filtering/categories (optional)
4. Footer

**Purpose:** Visual content showcase

---

### Template 4: Blog Listing Page
**Layout:** Card grid

**Sections:**
1. Page header
2. Post cards grid (2-3 columns)
3. Pagination
4. Footer

**Purpose:** Content discovery, news archive

---

### Template 5: Blog Post Page
**Layout:** Single-column article

**Sections:**
1. Post header (title, date, image)
2. Article content
3. Related content (optional)
4. Share buttons
5. Footer

**Purpose:** Detailed content, announcements

---

## URL Structure

### URL Patterns

**Homepage:**
- `https://www.cpcbmustangs.com/`
- `https://www.cpcbmustangs.com` (no trailing slash)

**Top-Level Pages:**
- `/schedule`
- `/live-updates`
- `/league`
- `/photos`
- `/blog`

**Blog Posts:**
- `/post/[post-slug]`
- Example: `/post/club-baseball-tryouts`

**Best Practices:**
- Clean, readable URLs
- Lowercase
- Hyphens for spaces
- Descriptive slugs
- No special characters

---

## Navigation Flow

### User Journeys

#### Journey 1: New Visitor
```
Home → Learn about team → Schedule → Social media follow
```

#### Journey 2: Fan
```
Home → Live Updates (game day) → Photos → Team News
```

#### Journey 3: Prospective Player
```
Home → Team News (tryouts) → Schedule (commitment) → Contact
```

#### Journey 4: Parent/Supporter
```
Schedule → Live Updates → Photos → League (standings)
```

---

## Content Organization Principles

### Hierarchy Rules
1. **Primary Navigation:** Most important pages (5-7 items max)
2. **Secondary Access:** Footer links, contextual links
3. **Tertiary Content:** Blog posts, individual items
4. **Deep Links:** Specific details, external resources

### Content Grouping
- **Static Pages:** Home, Schedule, League, Photos
- **Dynamic Content:** Team News/Blog posts
- **External Integration:** Live Updates (GameChanger)
- **Utility:** Contact, Social links

---

## Sitemap (XML)

### Recommended sitemap.xml Structure
```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.cpcbmustangs.com/</loc>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.cpcbmustangs.com/schedule</loc>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.cpcbmustangs.com/live-updates</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.cpcbmustangs.com/league</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.cpcbmustangs.com/photos</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>https://www.cpcbmustangs.com/blog</loc>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
  </url>
  <!-- Blog posts would be listed here -->
</urlset>
```

---

## Breadcrumb Structure

### Implementation Recommendation

**Homepage:**
- No breadcrumbs needed

**Top-Level Pages:**
```
Home > Schedule
Home > Live Updates
Home > League
Home > Photos
Home > Team News
```

**Blog Posts:**
```
Home > Team News > [Post Title]
```

**Schema Markup:**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://www.cpcbmustangs.com/"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Team News",
    "item": "https://www.cpcbmustangs.com/blog"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "2019-2020 Club Baseball Tryouts"
  }]
}
```

---

## Mobile Structure Considerations

### Mobile Navigation
- Hamburger menu for primary nav
- Stacked sections on all pages
- Single-column layouts
- Touch-friendly spacing
- Bottom navigation (potential future enhancement)

### Mobile Content Priority
1. Key information above fold
2. Quick actions (contact, schedule)
3. Progressive disclosure
4. Optimized images
5. Minimal scrolling for essential content

---

## Search and Discovery

### Search Functionality (Recommendation)
**Scope:**
- Blog/news posts
- Page titles and content
- Photo captions (optional)

**Implementation:**
- Search bar in header
- Search results page
- Filtering options

**Not Currently Present:**
- May be added in rebuild Phase 2

---

## Content Relationships

### Cross-Linking Strategy

**Homepage Links To:**
- All primary navigation pages
- Featured blog posts
- Social media profiles
- Contact/email

**Schedule Links To:**
- Live Updates (game days)
- League (standings context)
- Opponent websites (external)

**Blog Posts Link To:**
- Related posts
- Schedule (for game recaps)
- Photos (event coverage)
- Social media

---

## Footer Structure

### Footer Content Organization

**Column 1: Navigation**
- Quick links to main pages
- Mirrors primary navigation

**Column 2: About**
- Team information
- NCBA affiliation
- Cal Poly connection

**Column 3: Connect**
- Contact email
- Social media links
- "Follow us" CTA

**Column 4: Legal/Resources**
- Privacy policy (if applicable)
- Terms of use (if applicable)
- External links (NCBA, Cal Poly)

**Bottom Bar:**
- Copyright notice
- Powered by / Built by (optional)

---

## SEO Structure

### Page Titles
**Format:** `[Page Name] | Cal Poly Club Baseball`

**Examples:**
- "Home | Cal Poly Club Baseball"
- "Schedule | Cal Poly Club Baseball"
- "2019-2020 Club Baseball Tryouts | Cal Poly Club Baseball"

### Meta Descriptions
**Character Limit:** 155-160 characters

**Examples:**
- Homepage: "Cal Poly Club Baseball competes in NCBA Division 1 SoPac West. 2x Regional Champions, 8x Division Champions. Follow our season!"
- Schedule: "View the Cal Poly Club Baseball game schedule for the 2024-25 season. NCBA Division 1 SoPac West conference games and tournaments."

### Headings (H1)
- One H1 per page
- Descriptive, includes keywords
- Examples:
  - "Cal Poly Club Baseball"
  - "2024-25 Season Schedule"
  - "Live Game Updates and Statistics"

---

## Schema.org Markup

### Organization Schema
```json
{
  "@context": "https://schema.org",
  "@type": "SportsTeam",
  "name": "Cal Poly Club Baseball",
  "alternateName": "CPCB Mustangs",
  "url": "https://www.cpcbmustangs.com",
  "logo": "https://www.cpcbmustangs.com/images/logo.png",
  "sport": "Baseball",
  "email": "cpcb.mustangs@gmail.com",
  "memberOf": {
    "@type": "SportsOrganization",
    "name": "National Club Baseball Association",
    "url": "https://clubbaseball.org"
  },
  "location": {
    "@type": "Place",
    "name": "Cal Poly San Luis Obispo",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Luis Obispo",
      "addressRegion": "CA"
    }
  }
}
```

### SportsEvent Schema (for games)
```json
{
  "@context": "https://schema.org",
  "@type": "SportsEvent",
  "name": "Cal Poly vs UCSB",
  "startDate": "2024-03-15T14:00:00",
  "location": {
    "@type": "Place",
    "name": "Baggett Field"
  },
  "homeTeam": {
    "@type": "SportsTeam",
    "name": "Cal Poly Club Baseball"
  },
  "awayTeam": {
    "@type": "SportsTeam",
    "name": "UCSB Club Baseball"
  }
}
```

---

## Analytics Structure

### Recommended Event Tracking
- Page views (all pages)
- Button clicks (CTAs)
- External link clicks (social media, NCBA)
- Form submissions (if contact form exists)
- Photo gallery interactions
- Video plays
- Schedule table interactions

### User Flow Analysis
- Entry pages
- Exit pages
- Common pathways
- Drop-off points
- Time on page

---

## Accessibility Structure

### Semantic HTML
- `<header>` for site header
- `<nav>` for navigation
- `<main>` for primary content
- `<article>` for blog posts
- `<aside>` for sidebar content
- `<footer>` for site footer

### ARIA Landmarks
- `role="banner"` (header)
- `role="navigation"` (nav)
- `role="main"` (main content)
- `role="contentinfo"` (footer)
- `role="search"` (search form)

### Skip Links
- "Skip to main content" at top
- "Skip to navigation"
- Hidden until keyboard focus

---

## Content Update Workflow

### Update Frequency by Section
- **Homepage:** Seasonal (major updates), monthly (minor)
- **Schedule:** Pre-season bulk, weekly during season
- **Live Updates:** Real-time (game days)
- **League:** Weekly (standings updates)
- **Photos:** Weekly (after games/events)
- **Blog/News:** As needed (2-4 times/month)

### Content Management Roles
- **Webmaster:** Overall site management
- **Coach/Captain:** Content approval
- **Social Media Manager:** Blog posts, photos
- **Stats Keeper:** Schedule, live updates, league info

---

## Scalability Considerations

### Future Structure Expansion
**Potential Additional Sections:**
- Roster/Player Profiles (`/roster`)
- Coaching Staff (`/coaches`)
- Statistics Dashboard (`/stats`)
- Alumni Section (`/alumni`)
- Merchandise Store (`/shop`)
- Sponsors Page (`/sponsors`)
- Recruitment Info (`/join`)

**URL Structure for Growth:**
- `/roster/[player-name]`
- `/stats/team` and `/stats/players`
- `/news/category/[category-name]`

---

## Notes and Observations

- Current structure is simple and effective
- Wix provides automatic sitemap generation
- Clean URL structure good for SEO
- Clear hierarchy aids user navigation
- Mobile structure needs careful planning
- Room for expansion without major restructuring

---

## Recommendations for Rebuild

1. **Maintain Simplicity:** Current structure works well
2. **Clean URLs:** Keep descriptive, readable URLs
3. **Semantic HTML:** Use proper HTML5 elements
4. **Schema Markup:** Implement for better SEO
5. **Breadcrumbs:** Add for deeper pages
6. **Sitemap:** Auto-generate and submit to search engines
7. **Analytics:** Track user behavior for optimization
8. **Mobile-First:** Structure content for mobile priority
9. **Accessibility:** Proper landmarks and skip links
10. **Scalability:** Plan for future growth

---

*Last Updated: 2025-10-14*
*Status: Based on discovered pages and best practices for sports team websites.*
