# CPCB Mustangs Website

The official website for Cal Poly Club Baseball (CPCB Mustangs) - NCBA Division 1, Southern Pacific West Conference.

## Overview

This is a modern, fast, and accessible website built with Next.js 14+ and Tailwind CSS to replace the existing Wix-based website. The project aims to reduce costs while improving performance, customization, and user experience.

**Live Site:** [cpcbmustangs.com](https://www.cpcbmustangs.com) (coming soon)

## Features

- **Homepage** - Hero section with team achievements and quick links
- **Game Schedule** - Full season schedule with dates, opponents, and results
- **Live Updates** - Real-time game updates via GameChanger integration
- **League Standings** - NCBA Division 1 SoPac West conference standings
- **Photo Gallery** - Game action shots and team photos
- **Team News/Blog** - Announcements, game recaps, and tryout information
- **Mobile-First Design** - Fully responsive across all devices
- **Accessibility** - WCAG 2.1 AA compliant with keyboard navigation
- **SEO Optimized** - Meta tags, semantic HTML, and schema markup

## Tech Stack

- **Framework:** [Next.js 15.5.5](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **Testing:** [Playwright v1.56.0](https://playwright.dev/) (177 tests)
- **Fonts:** [Oswald](https://fonts.google.com/specimen/Oswald) (headings), Arial/Helvetica (body)
- **Hosting:** [Vercel](https://vercel.com/)
- **Version Control:** Git + GitHub
- **Package Manager:** npm

## Design System

Based on official Cal Poly Athletics branding:

### Colors
- **Cal Poly Green:** `#003831` (primary)
- **Vegas Gold:** `#FFE395` (secondary)
- **Copper Gold:** `#B38F4F` (tertiary)
- **Neutral Grays:** `#F5F5F5`, `#CCCCCC`, `#666666`, `#333333`

### Typography
- **Display Font:** Oswald (Google Fonts)
- **Body Font:** Arial, Helvetica, sans-serif
- **Base Size:** 16px
- **Responsive:** Scales down to 14px on mobile

### Spacing
- Uses an 8px base spacing scale
- Container max-width: 1200px
- Responsive padding: 20px (desktop), 15px (mobile)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git checkout dev
git pull origin dev
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

**Development:**
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

**Testing:**
- `npm test` - Run Playwright tests (headless)
- `npm run test:ui` - Run tests with interactive UI
- `npm run test:headed` - Run tests in headed mode (watch browser)
- `npm run test:report` - View HTML test report

## Project Structure

```
CPCB Website/
├── app/                      # Next.js App Router
│   ├── components/           # React components
│   │   ├── layout/          # Header, Footer, Navigation
│   │   │   ├── Header.tsx   # Responsive header with mobile menu
│   │   │   └── Footer.tsx   # Site footer
│   │   ├── sections/        # Page sections (Hero, Features, CTA)
│   │   │   ├── Hero.tsx     # Homepage hero section
│   │   │   ├── Features.tsx # Features showcase
│   │   │   └── CTA.tsx      # Call-to-action section
│   │   └── ui/              # Reusable UI components
│   │       └── Button.tsx   # Button component
│   ├── schedule/            # Schedule page route
│   │   └── page.tsx
│   ├── live-updates/        # Live Updates page route
│   │   └── page.tsx
│   ├── league/              # League standings page route
│   │   └── page.tsx
│   ├── photos/              # Photos gallery page route
│   │   └── page.tsx
│   ├── blog/                # Blog listing page route
│   │   └── page.tsx
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles & Tailwind config
├── public/                   # Static assets
│   └── images/              # Image files (future)
├── tests/                    # Playwright test suite
│   ├── README.md            # Test documentation
│   ├── homepage.spec.ts     # Homepage tests (15 tests)
│   ├── navigation.spec.ts   # Navigation tests (35 tests)
│   ├── responsive.spec.ts   # Responsive design tests (127 tests)
│   └── screenshots/         # Test screenshots (9 files)
├── playwright-report/        # Test result reports
│   └── README.md            # Report documentation
├── scrape/                   # Scraped documentation from original site
│   ├── README.md            # Overview of findings
│   ├── design-system/       # Colors, typography, spacing, branding
│   ├── features/            # Pages, navigation, interactive elements
│   ├── content/             # Site structure, content audit
│   └── technical/           # Integrations, performance, tools
├── old-files/               # Archived original HTML/CSS/JS files
├── package.json             # Dependencies and scripts
├── playwright.config.ts     # Playwright test configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
├── eslint.config.mjs        # ESLint configuration
├── README.md                # This file
├── claude.md                # Development guide & project specs
└── TEST-REPORT.md           # Comprehensive test results
```

## Development Workflow

This project uses a **feature branch workflow** with two primary branches:

### Branches

- **`main-master`** - Production branch (cpcb-website.vercel.app)
- **`dev-master`** - Development/staging branch (preview URL)
- **`feature/*`** - Feature branches (merge to dev-master)

### Workflow

1. **Start new work:**
```bash
git checkout dev-master
git pull origin dev-master
git checkout -b feature/your-feature-name
```

2. **Make changes and commit:**
```bash
git add .
git commit -m "Descriptive commit message"
git push -u origin feature/your-feature-name
```

3. **Test on dev:**
```bash
git checkout dev-master
git merge feature/your-feature-name
git push origin dev-master
# Preview at dev deployment URL
```

4. **Deploy to production:**
```bash
git checkout main-master
git merge dev-master
git push origin main-master
# Goes live at cpcb-website.vercel.app
```

## Deployment

### Vercel (Recommended)

This project is optimized for deployment on Vercel:

1. ✅ Connected GitHub repository to Vercel
2. ✅ Set production branch to `main-master`
3. ✅ Enabled automatic deployments for all branches
4. 🔄 Custom domain configuration (pending: cpcbmustangs.com)

### Environment Variables

Add these to your Vercel project settings (if needed):

```env
# Add environment variables here as needed
# Example:
# NEXT_PUBLIC_API_URL=https://api.example.com
```

## Testing

### Test Suite

The project includes a comprehensive Playwright test suite:

- **177 tests** across 3 spec files
- **3 device configurations** (Desktop, Mobile, Tablet)
- **9 screenshots** for visual documentation
- **76.8% pass rate** (136/177 tests passing)

### Running Tests

```bash
npm test              # Run all tests
npm run test:ui       # Interactive UI mode
npm run test:report   # View HTML report
```

See [tests/README.md](tests/README.md) for detailed documentation.

---

## Accessibility

This website follows WCAG 2.1 AA guidelines:

- ✅ Semantic HTML structure
- ✅ Keyboard navigation support
- ✅ Skip to main content link
- ✅ Focus indicators on interactive elements
- ✅ Color contrast ratios (minimum 4.5:1)
- ⏳ Alt text for images (when images are added)
- ✅ ARIA labels where needed
- ✅ Screen reader compatible navigation

## Performance Targets

- **Page Load:** < 2 seconds (3G network)
- **PageSpeed Score:** > 85 (mobile), > 90 (desktop)
- **Page Weight:** < 1 MB
- **Core Web Vitals:** All passing (LCP, FID, CLS)

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a private project for Cal Poly Club Baseball. For questions or contributions, contact:

**Email:** cpcb.mustangs@gmail.com

## Future Enhancements

### Phase 2 (Post-Launch)
- Enhanced photo galleries with albums and filtering
- Roster/player profiles page
- Advanced blog search and categorization
- Social media feed embeds
- Video highlights library
- Improved contact form
- Email newsletter signup
- Google Analytics integration

### Phase 3 (Long-term)
- Custom statistics dashboard
- Alumni section
- Recruitment portal
- Merchandise store (e-commerce)
- Interactive game calendar
- Weather integration
- Parent/player portal
- Mobile app (consideration)

## Cost Savings

**Current (Wix):** $192-420/year
**New (Vercel):** $0-20/year (with free tier)
**Savings:** 95-100% cost reduction

## Project History

- **October 2025:** Phase 0 completed - Repository setup, Git workflow
- **October 2025:** Phase 1 active development
  - ✅ Comprehensive site scraping (15 markdown files, 8,194+ lines)
  - ✅ Next.js 15 + TypeScript migration complete
  - ✅ Tailwind CSS v4 configuration with CPCB brand colors
  - ✅ All core pages built (Home, Schedule, Live Updates, League, Photos, Blog)
  - ✅ Responsive navigation with mobile menu
  - ✅ Playwright testing infrastructure (177 tests)
  - 🔄 Content population in progress
- **Target Launch:** TBD

## Resources

- **Original Site:** [cpcbmustangs.com](https://www.cpcbmustangs.com)
- **NCBA:** [clubbaseball.org](https://clubbaseball.org/)
- **Cal Poly Athletics:** [gopoly.com](https://gopoly.com/)
- **Instagram:** [@calpolyclubbaseball](https://www.instagram.com/calpolyclubbaseball/)
- **Twitter:** [@CPCB_Mustangs](https://twitter.com/cpcb_mustangs)
- **Facebook:** [Cal Poly Club Baseball](https://www.facebook.com/CalPolyClubBaseball/)

## License

© 2025 Cal Poly Club Baseball. All rights reserved.

## Acknowledgments

- Cal Poly Athletics for branding guidelines
- NCBA for league information
- GameChanger for live game statistics
- Vercel for hosting platform
- Next.js team for the framework

---

---

## Development Status

**Current Phase:** Phase 1 - Active Development (80% complete)

**Latest Updates (October 15, 2025):**
- ✅ Site scraping and analysis complete
- ✅ Next.js migration complete
- ✅ All core pages built
- ✅ Testing infrastructure operational
- 🔄 Content population in progress
- 🔄 GameChanger API integration research

**Next Milestones:**
- [ ] Complete content population
- [ ] Implement photo gallery
- [ ] Add roster/player profiles
- [ ] GameChanger integration
- [ ] Production deployment with custom domain

See [claude.md](claude.md) for detailed development specifications.

---

**Built with ❤️ for the Mustangs**

*2x SoPac Regional Champions | 8x SoPac West Division Champions*
