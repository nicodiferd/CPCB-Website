# CPCB Mustangs Website - Comprehensive Scrape Analysis

## Executive Summary

This document provides a comprehensive analysis of the cpcbmustangs.com website as part of Phase 1 of the website rebuild project. The analysis covers design specifications, feature inventory, content structure, and technical integrations necessary to replicate and improve upon the current Wix-based site.

**Date:** October 14, 2025
**Current Platform:** Wix
**Analysis Status:** Complete
**Site Accessibility:** Confirmed online and accessible

---

## Project Context

### Objectives
1. **Cost Reduction:** Eliminate Wix subscription fees ($192-420/year)
2. **Improved Performance:** Faster loading, better mobile experience
3. **Enhanced Control:** Full customization capability
4. **Future-Ready:** Foundation for new features

### Rebuild Strategy
- **Phase 1:** Complete replication of existing functionality
- **Phase 2:** Enhancements and new features
- **Phase 3:** Advanced integrations and scaling

---

## Key Findings

### 1. Design System

#### Brand Identity
- **Team:** Cal Poly Club Baseball (CPCB Mustangs)
- **League:** NCBA Division 1, Southern Pacific West Conference
- **Achievements:** 2x SoPac Regional Champions, 8x Division Champions
- **Contact:** cpcb.mustangs@gmail.com

#### Color Palette
Based on official Cal Poly Athletics branding:
- **Primary:** Cal Poly Green (#003831)
- **Secondary:** Vegas Gold (#FFE395)
- **Tertiary:** Copper Gold (#B38F4F)
- **Supporting:** Black (#000000), White (#FFFFFF)

#### Typography
- **Display Font:** lulo-clean-w01-one-bold (Wix custom) - needs replacement
- **Body Font:** Arial, Helvetica, sans-serif (web-safe)
- **Recommended Alternatives:** Oswald, Bebas Neue (for display); Open Sans, Roboto (for body)

#### Layout Patterns
- Responsive design with mobile-first approach
- Grid-based layouts (12-column system)
- Standard breakpoints: 480px, 768px, 1024px, 1440px
- Container max-width: ~1200-1440px

**Documentation:** See `/design-system/` folder for complete specifications

---

### 2. Site Structure and Pages

#### Discovered Pages
1. **Home** (/) - Landing page with team info and featured content
2. **Schedule** (/schedule) - Game schedule and results
3. **Live Updates** (/live-updates) - GameChanger integration for live stats
4. **League** (/league) - Conference standings and information
5. **Photos** (/photos) - Photo galleries and albums
6. **Team News / Blog** (/blog) - News posts and announcements
7. **Individual Blog Posts** (/post/[slug]) - Full articles

#### Page Templates
- Homepage: Multi-section landing page
- Content pages: Single-column with data tables
- Gallery: Grid-based media showcase
- Blog listing: Card-based grid
- Blog post: Single-column article layout

**Documentation:** See `/features/pages-inventory.md` for detailed page analysis

---

### 3. Key Features

#### Navigation
- **Desktop:** Horizontal menu bar with 6-7 main items
- **Mobile:** Hamburger menu with slide-in navigation
- **Footer:** Multi-column with links, contact, social media

#### Interactive Elements
- **Buttons:** Primary (green), Secondary (outlined)
- **Forms:** Contact form (if present) with validation
- **Modals:** Photo lightbox for gallery viewing
- **Tables:** Schedule and standings with responsive behavior
- **Animations:** Hover effects, smooth transitions

#### Media
- **Images:** Photography-heavy (game action, team photos, events)
- **Optimization:** Lazy loading, responsive images needed
- **Galleries:** Grid layout with lightbox functionality
- **Videos:** Embedded YouTube/Vimeo (potential)

**Documentation:** See `/features/` folder for complete feature breakdown

---

### 4. Content Inventory

#### Primary Content Types
1. **Informational:** Team history, NCBA affiliation, facilities
2. **Recruitment:** Tryout information, player requirements
3. **Competitive:** Schedules, results, standings, live updates
4. **News:** Blog posts, announcements, game recaps
5. **Visual:** Photo galleries, video highlights

#### Messaging
- **Tone:** Professional, competitive, welcoming, passionate
- **Voice:** Achievement-focused, community-oriented
- **Key Messages:**
  - NCBA Division 1 competition
  - Championship pedigree (2x Regional, 8x Division)
  - Cal Poly affiliation and pride
  - Open to serious players

#### Content Update Frequency
- **Schedule:** Weekly during season
- **Live Updates:** Real-time on game days
- **Blog/News:** 2-4 times per month
- **Photos:** Weekly after games
- **League:** Weekly (standings)

**Documentation:** See `/content/` folder for full content audit

---

### 5. Technical Integrations

#### Critical Integration: GameChanger
- **Purpose:** Live game scoring and statistics
- **Location:** Live Updates page
- **Type:** Embedded widget/iframe
- **Status:** Essential to replicate
- **Cost:** Free tier available

#### Social Media
- **Instagram:** @calpolyclubbaseball (1,357 followers)
- **Twitter/X:** @CPCB_Mustangs
- **Facebook:** Cal Poly Club Baseball (658 likes)
- **Integration:** Direct links, potential feed embeds

#### Other Services
- **Google Maps:** Field location (Baggett Field)
- **Email:** cpcb.mustangs@gmail.com (Gmail)
- **Analytics:** Google Analytics (likely, not confirmed)
- **Forms:** Contact form processing

**Documentation:** See `/technical/integrations.md` for complete details

---

## Rebuild Recommendations

### Phase 1: Foundation (MVP)

#### Hosting
**Recommendation:** Netlify or GitHub Pages
- **Cost:** Free
- **Features:** SSL, CDN, Git deployment
- **Performance:** Excellent (faster than Wix)

#### Tech Stack
**Recommendation:** Static HTML, CSS, JavaScript
- **HTML5:** Semantic, accessible markup
- **CSS3:** Custom properties, mobile-first, BEM methodology
- **Vanilla JS:** Minimal, only essential interactions
- **No framework needed** for initial build (keeps it simple and fast)

#### Critical Features to Replicate
1. ✅ All 7 pages with content
2. ✅ GameChanger integration
3. ✅ Responsive navigation (mobile menu)
4. ✅ Photo gallery with lightbox
5. ✅ Schedule table (responsive)
6. ✅ Blog/news system
7. ✅ Social media links
8. ✅ Contact information

#### Performance Targets
- **Page Load:** < 2 seconds (3G network)
- **PageSpeed Score:** > 85 (mobile), > 90 (desktop)
- **Page Weight:** < 1 MB
- **Core Web Vitals:** All passing

#### Estimated Timeline
- **Week 1:** Setup hosting, structure, design system
- **Week 2:** Build pages (Home, Schedule, League)
- **Week 3:** Build features (Photos, Blog, Live Updates)
- **Week 4:** Testing, optimization, launch

---

### Phase 2: Enhancements

**After stable Phase 1 launch:**
1. Enhanced photo galleries (albums, filtering)
2. Roster/player profiles page
3. Advanced search for blog posts
4. Social media feed embeds
5. Video highlights library
6. Improved contact form
7. Email newsletter signup
8. Google Analytics implementation

---

### Phase 3: Innovation

**Future enhancements:**
1. Custom statistics dashboard
2. Alumni section
3. Recruitment portal
4. Merchandise store (e-commerce)
5. Interactive game calendar
6. Weather integration
7. Parent/player portal
8. Mobile app (consideration)

---

## Cost Analysis

### Current Costs (Wix)
- **Wix Subscription:** $16-35/month
- **Annual Total:** ~$192-420/year

### Rebuild Costs (Phase 1 - Minimal)
- **Hosting:** Free (Netlify/GitHub Pages)
- **Domain:** $12/year (if not already owned)
- **Third-Party Services:** Free (GameChanger, social links)
- **Annual Total:** $12/year

**Savings:** $180-408/year (93-97% cost reduction)

### Rebuild Costs (Phase 2 - Enhanced)
- **Hosting:** Free
- **Domain:** $12/year
- **Custom Email:** $72/year (Google Workspace, optional)
- **Image CDN:** Free (Cloudinary free tier)
- **Analytics:** Free (Google Analytics) or $108/year (Plausible)
- **Annual Total:** $12-192/year

**Savings:** $0-408/year

---

## Performance Expectations

### Current Site (Wix, Estimated)
- Load Time: 3-5 seconds (3G)
- PageSpeed: 60-75 (mobile), 75-85 (desktop)
- Page Weight: 2-4 MB
- JavaScript: 500-1000 KB (Wix framework)

### Rebuilt Site (Target)
- Load Time: 1-2 seconds (3G)
- PageSpeed: 85-95 (mobile), 90-100 (desktop)
- Page Weight: < 1 MB
- JavaScript: < 150 KB (minimal)

**Expected Improvement:** 50-70% faster, 60-75% smaller

---

## Critical Success Factors

### Must-Haves for Launch
1. ✅ All existing pages replicated
2. ✅ GameChanger integration working
3. ✅ Mobile-responsive design
4. ✅ Fast loading (< 2s)
5. ✅ Accessible (WCAG AA compliance)
6. ✅ SEO optimized
7. ✅ Social media links functional
8. ✅ Contact email working

### Quality Standards
- **Design:** Match or exceed current visual quality
- **Content:** All existing content preserved
- **Functionality:** No feature regressions
- **Performance:** Significantly faster than current
- **Accessibility:** Keyboard navigation, screen reader support
- **Browser Support:** Modern browsers (Chrome, Firefox, Safari, Edge)
- **Mobile:** Full functionality on iOS and Android

---

## Risk Mitigation

### Identified Risks

**1. GameChanger Integration**
- **Risk:** API or embed not available
- **Mitigation:** Contact GameChanger support early, have manual update fallback

**2. Content Migration**
- **Risk:** Missing content from Wix export
- **Mitigation:** Manual screenshot and copy all pages before migration

**3. Design Accuracy**
- **Risk:** Visual differences from original
- **Mitigation:** Side-by-side comparison, stakeholder review

**4. SEO Impact**
- **Risk:** Loss of search rankings during transition
- **Mitigation:** 301 redirects, same URL structure, sitemap submission

**5. Email Continuity**
- **Risk:** Email disruption during migration
- **Mitigation:** Keep cpcb.mustangs@gmail.com, add forwarding if custom domain email added

---

## Documentation Structure

This scrape analysis is organized into the following folders:

```
/scrape/
├── README.md (this file)
├── design-system/
│   ├── colors.md
│   ├── typography.md
│   ├── spacing-layout.md
│   └── branding.md
├── features/
│   ├── navigation.md
│   ├── pages-inventory.md
│   ├── interactive-elements.md
│   └── media-content.md
├── content/
│   ├── site-structure.md
│   └── content-audit.md
└── technical/
    ├── integrations.md
    ├── performance.md
    └── third-party-tools.md
```

### How to Use This Documentation

**For Designers:**
- Review `/design-system/` for colors, typography, spacing
- Reference `/features/` for UI component specifications
- Check `/content/` for content organization and voice

**For Developers:**
- Start with `/technical/` for hosting and integration setup
- Review `/features/` for functionality requirements
- Reference `/design-system/` for CSS implementation
- Use `/content/site-structure.md` for page architecture

**For Project Managers:**
- Read this README for high-level overview
- Review `/features/pages-inventory.md` for feature list
- Check cost analysis section for budget planning
- Use timeline estimates for scheduling

**For Content Creators:**
- Review `/content/content-audit.md` for messaging and tone
- Check `/content/site-structure.md` for page organization
- Reference `/features/media-content.md` for asset specifications

---

## Next Steps

### Immediate (This Week)
1. ✅ Review this documentation thoroughly
2. [ ] Obtain access to Wix admin panel (export content)
3. [ ] Contact GameChanger for embed code/API
4. [ ] Gather all brand assets (logos, photos)
5. [ ] Set up GitHub repository
6. [ ] Choose hosting platform (Netlify recommended)

### Short-Term (Next 2 Weeks)
1. [ ] Create wireframes based on documentation
2. [ ] Set up development environment
3. [ ] Build design system (CSS framework)
4. [ ] Develop homepage
5. [ ] Integrate GameChanger
6. [ ] Build remaining pages

### Medium-Term (Next Month)
1. [ ] Complete all pages
2. [ ] Add all content
3. [ ] Optimize images and assets
4. [ ] Test on multiple devices
5. [ ] SEO optimization
6. [ ] Soft launch (preview URL)
7. [ ] Stakeholder review and feedback
8. [ ] Launch!

---

## Open Questions

**Questions for Team:**
1. Do you have access to the Wix admin panel for content export?
2. Do you have high-resolution logo files (SVG or large PNG)?
3. Is there a specific launch deadline?
4. Who will manage content updates after launch?
5. Do you want custom email (contact@cpcbmustangs.com)?
6. Are there any features you'd like to add beyond current site?
7. Do you have access to GameChanger admin to get embed code?

**Technical Questions:**
1. Is GameChanger API available or only embed widget?
2. What analytics are currently being used (if any)?
3. Are there any integrations not visible on public site?
4. Is there a Wix blog database or is content in pages?

---

## Resources and References

### Official Links
- **Current Site:** https://www.cpcbmustangs.com/
- **Instagram:** https://www.instagram.com/calpolyclubbaseball/
- **Twitter:** https://twitter.com/cpcb_mustangs
- **Facebook:** https://www.facebook.com/CalPolyClubBaseball/
- **NCBA:** https://clubbaseball.org/
- **Cal Poly Athletics:** https://gopoly.com/

### Tools and Services
- **GameChanger:** https://gc.com/
- **Netlify:** https://www.netlify.com/
- **GitHub Pages:** https://pages.github.com/
- **Google Fonts:** https://fonts.google.com/
- **Cal Poly Branding:** https://gopoly.com/sports/2020/6/4/insideathletics-branding-guidelines

### Testing Tools
- **PageSpeed Insights:** https://pagespeed.web.dev/
- **GTmetrix:** https://gtmetrix.com/
- **WebPageTest:** https://www.webpagetest.org/

---

## Appendix

### Glossary

- **NCBA:** National Club Baseball Association
- **SoPac West:** Southern Pacific West Conference
- **CDN:** Content Delivery Network
- **CTA:** Call-to-Action
- **CMS:** Content Management System
- **API:** Application Programming Interface
- **SEO:** Search Engine Optimization
- **WCAG:** Web Content Accessibility Guidelines
- **LCP:** Largest Contentful Paint
- **FID:** First Input Delay
- **CLS:** Cumulative Layout Shift

---

### Change Log

**2025-10-14:**
- Initial comprehensive scrape analysis completed
- All documentation files created
- Site confirmed accessible and online
- GameChanger integration identified
- Social media accounts documented
- Cal Poly branding guidelines researched
- Page structure mapped
- Technical integrations cataloged

---

### Contributors

- **Analysis by:** Claude Code (AI Assistant)
- **Project Owner:** Nicolo Di Ferdinando
- **Team Contact:** cpcb.mustangs@gmail.com

---

## Conclusion

The current cpcbmustangs.com website is a well-structured, functional site built on Wix with the following characteristics:

**Strengths:**
- Clear navigation and information hierarchy
- Strong branding aligned with Cal Poly Athletics
- Essential features present (schedule, live updates, photos, news)
- GameChanger integration provides professional stats
- Active social media presence
- Mobile-responsive design

**Opportunities for Improvement:**
- Performance optimization (faster loading)
- Cost reduction (eliminate Wix fees)
- Enhanced customization
- Modern development practices
- Better accessibility
- Expansion potential

**Rebuild Feasibility:** ✅ **HIGHLY FEASIBLE**

The site is relatively simple in structure, making it an excellent candidate for a custom rebuild. All critical features can be replicated using free or low-cost tools, resulting in significant cost savings while improving performance and control.

**Recommended Approach:**
1. Build static HTML/CSS/JS version (Phase 1)
2. Host on Netlify or GitHub Pages (free)
3. Maintain GameChanger integration
4. Optimize for mobile and performance
5. Launch with all existing features
6. Enhance with new features in Phase 2

**Expected Outcome:**
- 90%+ cost reduction
- 50-70% performance improvement
- Full feature parity
- Foundation for future growth
- No vendor lock-in

This comprehensive analysis provides all necessary information to proceed with confidence into the rebuild phase.

---

*Analysis Complete | Ready for Phase 1 Development*

**Total Documentation:** 12 comprehensive markdown files covering design, features, content, and technical specifications.

**Next Step:** Review documentation, address open questions, and begin development sprint.

---

