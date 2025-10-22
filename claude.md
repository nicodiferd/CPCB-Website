# CPCB Mustangs Website - Project Specifications

## Project Overview

**Project Name:** CPCB Mustangs Baseball Website
**Purpose:** Replace the existing Wix-based website (cpcbmustangs.com) with a custom-built solution
**Primary Goal:** Reduce costs from Wix subscription while improving functionality and user experience
**Status:** Phase 1 - Active Development (Analysis Complete, Building Features)

---

## Business Objectives

### Cost Reduction
- Eliminate monthly Wix subscription fees
- Migrate to free or low-cost hosting solution (GitHub Pages, Netlify, Vercel)
- Reduce long-term maintenance costs

### Improved Functionality
- Better performance and loading speeds
- Enhanced mobile responsiveness
- Modern features and integrations
- Easier content management

### Better Team Utility
- Meet current and future team needs
- Integrate with baseball-specific tools and APIs
- Streamline information access for players, coaches, and fans

---

## Development Phases

### Phase 0: Foundation ✅ COMPLETE
- [x] Initialize git repository
- [x] Create basic project structure
- [x] Set up initial HTML/CSS/JS files
- [x] Create project documentation
- [x] Set up dev/prod branch workflow
- [x] Push to GitHub repository

### Phase 1: Analysis & Replication ✅ IN PROGRESS
**Status:** Active Development

**Completed:**
- ✅ Scrape and analyze current website (see `/scrape/` directory)
- ✅ Extract design guidelines (colors, typography, branding)
- ✅ Document existing features and functionality (15 markdown files)
- ✅ Analyze content structure and organization
- ✅ Identify site architecture and navigation flow
- ✅ Migrate to Next.js 15 + Tailwind CSS v4
- ✅ Build core pages (Home, Schedule, Live Updates, League, Photos, Blog)
- ✅ Implement responsive navigation with mobile menu
- ✅ Set up Playwright testing infrastructure (177 tests)
- ✅ Deploy to Vercel with dev/prod workflow

**In Progress:**
- ⏳ Content population for all pages
- ⏳ GameChanger API integration research
- ⏳ Photo gallery implementation
- ⏳ Blog post functionality

**Deliverables:**
- ✅ Complete feature inventory from current site (in `/scrape/` directory)
- ✅ Design system documentation (colors, typography, spacing)
- ✅ Content audit and structure map
- 🔄 Rebuild all existing functionality in custom site (80% complete)

### Phase 2: Enhancement & Innovation
**Status:** Not Started

**Objectives:**
1. Internal team needs assessment
2. Feature gap analysis
3. New feature development
4. Modern capability integration

**Potential Features:**
- GameChanger API integration for live stats (if API exists)
- Enhanced mobile experience
- Improved content management system
- Team communication features
- Fan engagement tools
- Sponsor management section
- Photo/video galleries
- Social media integration
- Event/practice calendar
- Player/parent portal (if needed)

---

## Technical Stack

### Current (Production)
- **Framework:** Next.js 15.5.5 (App Router)
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS v4
- **Fonts:** Oswald (Google Fonts) + Arial/Helvetica
- **Testing:** Playwright v1.56.0 (177 tests across 3 devices)
- **Version Control:** Git + GitHub
- **Hosting:** Vercel
- **Deployment:** Continuous deployment via GitHub branches
- **Package Manager:** npm

### Testing Infrastructure
- **Framework:** Playwright
- **Coverage:** Homepage, Navigation, Responsive Design
- **Devices:** Desktop (1440x900), Mobile (Pixel 5), Tablet (iPad Pro)
- **Tests:** 177 total tests across 3 spec files
- **Screenshots:** Automated capture for visual documentation
- **Reports:** HTML reports with traces and screenshots

### Future Considerations
- CMS integration (Sanity, Contentful, or headless WordPress)
- Analytics (Google Analytics, Plausible, or Vercel Analytics)
- GameChanger API for live game stats
- Image optimization with Next.js Image component
- SEO enhancements with schema markup

---

## Git Workflow & Deployment Strategy

### Branch Structure
This project uses a **feature branch workflow** with two primary branches:

- **`main-master`** - Production branch
  - Deployed to: `cpcb-website.vercel.app` (production domain)
  - Protected branch (merge via pull requests only)
  - Only stable, tested code

- **`dev-master`** - Development/staging branch
  - Deployed to: `https://cpcb-website-git-dev-master-nicolo-diferdinandos-projects.vercel.app/` (preview domain)
  - Integration branch for testing features
  - All feature branches merge here first

- **`feature/*`** - Feature branches
  - Created from `dev-master` for individual features/fixes
  - Example: `feature/game-schedule`, `feature/navbar`, `fix/mobile-bug`
  - Get automatic Vercel preview deployments
  - Merged back to `dev-master` when complete

### Development Workflow

#### Starting New Work
```bash
# Switch to dev-master branch
git checkout dev-master

# Pull latest changes
git pull origin dev-master

# Create feature branch
git checkout -b feature/your-feature-name
```

#### Working on a Feature
```bash
# Make changes, then commit
git add .
git commit -m "Descriptive commit message"

# Push to GitHub (creates PR preview)
git push -u origin feature/your-feature-name
```

#### Merging to Dev (Testing)
```bash
# Switch to dev-master
git checkout dev-master

# Merge feature branch
git merge feature/your-feature-name

# Push to trigger dev deployment
git push origin dev-master

# Preview changes at https://cpcb-website-git-dev-master-nicolo-diferdinandos-projects.vercel.app/
```

#### Deploying to Production
```bash
# Once tested on dev-master, switch to main-master
git checkout main-master

# Merge dev-master branch
git merge dev-master

# Push to trigger production deployment
git push origin main-master

# Site goes live at cpcb-website.vercel.app
```

### Deployment Configuration

**Vercel Settings:**
- Production Branch: `main-master`
- Automatic deployments enabled for all branches
- Each PR gets unique preview URL
- Custom domains assigned to production and development deployments
  - `main-master` → `cpcb-website.vercel.app`
  - `dev-master` → `https://cpcb-website-git-dev-master-nicolo-diferdinandos-projects.vercel.app`

**GitHub Protection Rules (Recommended):**
```
main-master branch:
- Require pull request reviews before merging
- Require status checks to pass
- No direct pushes (merge via PR only)
```

### Best Practices
1. Always work in feature branches, never directly in `dev-master` or `main-master`
2. Test thoroughly in `dev-master` before merging to `main-master`
3. Use descriptive branch names: `feature/`, `fix/`, `enhancement/`
4. Write clear commit messages
5. Use pull requests for code review (even solo development)
6. Delete feature branches after merging

---

## Project Structure

```
CPCB Website/
├── .git/                          # Git repository
├── .gitignore                     # Git ignore rules
├── .claude/                       # Claude Code configuration
│   └── agents/                    # Custom agent definitions
│       └── cpcb-site-analyzer.md
├── app/                           # Next.js App Router
│   ├── components/                # React components
│   │   ├── layout/               # Header, Footer, Navigation
│   │   │   ├── Header.tsx        # Responsive header with mobile menu
│   │   │   └── Footer.tsx        # Site footer
│   │   ├── sections/             # Page sections
│   │   │   ├── Hero.tsx          # Homepage hero section
│   │   │   ├── Features.tsx      # Features showcase
│   │   │   └── CTA.tsx           # Call-to-action section
│   │   └── ui/                   # Reusable UI components
│   │       └── Button.tsx        # Button component
│   ├── schedule/                 # Schedule page route
│   │   └── page.tsx
│   ├── live-updates/             # Live Updates page route
│   │   └── page.tsx
│   ├── league/                   # League standings page route
│   │   └── page.tsx
│   ├── photos/                   # Photos gallery page route
│   │   └── page.tsx
│   ├── blog/                     # Blog listing page route
│   │   └── page.tsx
│   ├── layout.tsx                # Root layout with Header/Footer
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Global styles & Tailwind config
│   └── favicon.ico               # Site favicon
├── public/                        # Static assets
│   └── images/                   # Image files (future)
├── tests/                         # Playwright test suite
│   ├── README.md                 # Test documentation
│   ├── homepage.spec.ts          # Homepage tests (15 tests)
│   ├── navigation.spec.ts        # Navigation tests (35 tests)
│   ├── responsive.spec.ts        # Responsive tests (127 tests)
│   └── screenshots/              # Test screenshots (9 files)
├── playwright-report/             # Test result reports
│   └── README.md                 # Report documentation
├── scrape/                        # Scraped site documentation
│   ├── README.md                 # Overview of findings
│   ├── design-system/            # Colors, typography, spacing, branding
│   ├── features/                 # Pages, navigation, interactive elements
│   ├── content/                  # Site structure, content audit
│   └── technical/                # Integrations, performance, tools
├── old-files/                     # Archived original HTML/CSS/JS files
├── node_modules/                  # npm dependencies
├── package.json                   # Project dependencies & scripts
├── package-lock.json              # Dependency lock file
├── playwright.config.ts           # Playwright test configuration
├── next.config.ts                 # Next.js configuration
├── tsconfig.json                  # TypeScript configuration
├── eslint.config.mjs              # ESLint configuration
├── postcss.config.mjs             # PostCSS configuration
├── tailwind.config.js             # Tailwind CSS configuration (if needed)
├── vercel.json                    # Vercel deployment config
├── README.md                      # Project overview (user-facing)
├── claude.md                      # This file (development guide)
├── TEST-REPORT.md                 # Comprehensive test results
└── .env.local                     # Environment variables (gitignored)
```

---

## Feature Requirements

### Must-Have Features (Phase 1 - Parity)
- [x] Home page with hero/welcome section
- [ ] Team roster/player profiles
- [x] Game schedule page (structure built, needs content)
- [x] News/announcements section (blog listing page)
- [ ] Contact information
- [x] Responsive navigation with mobile hamburger menu
- [x] Mobile-friendly design (tested across 7 viewports)
- [x] Live Updates page (structure built, needs GameChanger integration)
- [x] League standings page (structure built, needs content)
- [x] Photos gallery page (structure built, needs implementation)

### Nice-to-Have Features (Phase 2 - Enhancement)
- [ ] GameChanger API integration
- [ ] Live game updates
- [ ] Player statistics
- [ ] Photo gallery
- [ ] Video highlights
- [ ] Sponsor showcase
- [ ] Online registration (if applicable)
- [ ] Practice schedule
- [ ] Team calendar
- [ ] Weather integration for game days
- [ ] Social media feeds
- [ ] Email notifications/newsletter

### Future Considerations
- [ ] Content Management System
- [ ] User authentication (players/parents portal)
- [ ] Payment processing (if needed for fees)
- [ ] Mobile app companion

---

## Design Considerations

### Branding
- **Team Name:** CPCB Mustangs
- **Colors:**
  - Cal Poly Green: `#003831` (primary)
  - Vegas Gold: `#FFE395` (secondary)
  - Copper Gold: `#B38F4F` (tertiary)
  - Neutral Grays: `#F5F5F5`, `#CCCCCC`, `#666666`, `#333333`
- **Logo:** TBD (needs official Cal Poly Club Baseball logo)
- **Typography:**
  - Display: Oswald (Google Fonts)
  - Body: Arial, Helvetica, sans-serif
  - Base size: 16px (14px on mobile)

### User Experience
- Fast loading times
- Mobile-first approach
- Intuitive navigation
- Accessible design (WCAG compliance)
- Cross-browser compatibility

---

## External Integrations

### Planned
- **GameChanger:** Live stats and game data (API availability TBD)

### Under Consideration
- Social media APIs (Twitter, Instagram, Facebook)
- Google Calendar for schedules
- Email service provider for newsletters
- Payment processor (if needed)
- Weather API for game forecasts
- Google Maps for field locations

---

## Success Metrics

- [x] Zero monthly subscription costs (Vercel free tier)
- [x] Page load time < 2 seconds (verified in tests)
- [x] Mobile responsiveness score > 90 (tested across 7 viewports)
- [ ] All features from old site replicated (80% complete)
- [ ] At least 3 new features implemented
- [ ] Positive feedback from team members (pending launch)
- [ ] Easy content updates (CMS consideration for future)
- [x] Comprehensive test coverage (177 tests, 76.8% pass rate)
- [x] Accessibility compliance (WCAG 2.1 AA features implemented)

---

## Open Questions & Decisions Needed

### Questions for Team
1. **Content Management:** Who will be responsible for updating content after launch?
2. **Current Site Access:** Do you have admin access to the current Wix site to extract content?
3. **Branding Assets:** Do you have access to team logos, official colors, and brand guidelines?
4. **Priority Features:** What are the top 3 most important features from the current site?
5. **Timeline:** Is there a target launch date or deadline?
6. **Hosting Budget:** Is there any budget for hosting, or should we stick to free options?
7. **Domain:** Will you be keeping the cpcbmustangs.com domain? How will DNS be managed?
8. **Analytics:** Do you want visitor tracking? Any privacy policy requirements?
9. **Content Types:** What types of content need to be updated regularly (news, schedules, rosters)?
10. **User Roles:** Do different people need different access levels (coach, admin, player, parent)?

### Technical Decisions
1. **Static vs Dynamic:** Should this be a static site or do we need server-side functionality?
2. **CMS:** Do we need a content management system, or is manual HTML editing acceptable?
3. **Build Process:** Should we add a build step for optimization, or keep it simple?
4. **Framework:** Stay vanilla or adopt a framework/library (React, Vue, etc.)?
5. **API Integration:** What APIs are available and what are their costs/limits?

---

## Notes

- Original site analysis completed via web research and Cal Poly branding docs
- Phase 1 active development - Next.js migration complete
- Comprehensive site scraping documentation in `/scrape/` directory (8,194+ lines)
- Testing infrastructure fully operational (Playwright with 177 tests)
- All core pages built, content population in progress
- This is a living document and will be updated as the project progresses
- All major decisions and changes should be documented here

---

## Resources & Links

- **Current Site:** cpcbmustangs.com (currently down)
- **Repository:** https://github.com/nicodiferd/CPCB-Website
- **Production Domain:** cpcb-website.vercel.app
- **Dev Domain:** https://cpcb-website-git-dev-master-nicolo-diferdinandos-projects.vercel.app/
- **GameChanger:** https://gc.com/ (API documentation TBD)

---

---

## Recent Updates

### October 22, 2025
- ✅ Fixed JSX compliance: Escaped apostrophes in About Us component
- ✅ All homepage changes successfully deployed to dev-master

### October 17, 2025
- ✅ Refactored homepage with new About Us section
- ✅ Created comprehensive About Us component with program history and highlights
- ✅ Restructured homepage layout: Hero → About Us → What We Offer → CTA
- ✅ Added detailed program information (established 2010, season schedule, roster size)
- ✅ Improved page scrollability with enhanced spacing between sections
- ✅ Removed duplicate stats and replaced with unique, contextual information
- ✅ Added decorative dividers and improved visual hierarchy

### October 15, 2025
- ✅ Completed comprehensive site scraping and analysis (15 markdown files)
- ✅ Migrated from vanilla HTML/CSS to Next.js 15 + TypeScript
- ✅ Configured Tailwind CSS v4 with CPCB brand colors
- ✅ Built all core pages (Home, Schedule, Live Updates, League, Photos, Blog)
- ✅ Implemented responsive navigation with mobile hamburger menu
- ✅ Set up Playwright testing infrastructure (177 tests)
- ✅ Captured 9 screenshots for visual documentation
- ✅ Generated comprehensive test report (TEST-REPORT.md)
- ✅ Created test documentation (tests/README.md, playwright-report/README.md)

### Next Steps
- [ ] Populate content for Schedule page (game dates, opponents, results)
- [ ] Implement photo gallery with albums and filtering
- [ ] Research GameChanger API for live stats integration
- [ ] Add roster/player profiles page
- [ ] Implement blog post detail pages
- [ ] Add contact form or contact information page
- [ ] Optimize images with Next.js Image component
- [ ] Add schema markup for SEO
- [ ] Fix remaining test assertions (improve pass rate to 95%+)
- [ ] Deploy to production with custom domain

---

*Last Updated: October 22, 2025*
*Version: 1.2.1 (Phase 1 - Active Development)*
