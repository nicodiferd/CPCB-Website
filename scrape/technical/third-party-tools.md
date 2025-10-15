# CPCB Mustangs Website - Third-Party Tools and Services

## Overview
This document catalogs all third-party tools, widgets, and external services used or potentially used on cpcbmustangs.com.

---

## Current Third-Party Tools

### 1. Wix Platform
**Category:** Website Builder / CMS / Hosting
**Website:** https://www.wix.com/
**Cost:** $15-30/month (estimated)

**Services Provided:**
- Drag-and-drop website builder
- Content management system
- Web hosting
- SSL certificate
- CDN (content delivery network)
- Email integration
- Analytics
- Forms
- Mobile optimization
- SEO tools

**Pros:**
- All-in-one solution
- No coding required
- Automatic updates
- Built-in features

**Cons:**
- Monthly cost
- Limited customization
- Code bloat
- Vendor lock-in
- Performance overhead

**Replacement Plan:** Migrate to custom build

---

### 2. GameChanger
**Category:** Sports Scoring and Statistics
**Website:** https://gc.com/
**Cost:** Free tier likely (Premium features available)

**Services Provided:**
- Live game scoring
- Play-by-play updates
- Player statistics
- Team statistics
- Box scores
- Historical game data
- Mobile app for scorekeeping

**Integration Method:**
- Embedded widget/iframe on Live Updates page
- Direct link to team profile
- Potential API integration

**Pros:**
- Industry-standard for club sports
- Real-time updates
- Mobile-friendly
- Free tier available
- Parents and fans familiar with platform

**Cons:**
- Third-party dependency
- Limited customization
- May require premium for advanced features

**Rebuild Plan:** Maintain integration (critical feature)

**API/Embed Documentation:**
- Check GameChanger developer docs
- Obtain embed code or API key
- Verify terms of service for website embedding

---

### 3. Social Media Platforms

#### Instagram
**Platform:** Instagram (Meta)
**Website:** https://www.instagram.com/
**Account:** @calpolyclubbaseball
**Cost:** Free

**Integration:**
- Direct links to profile
- Potential feed embed widget
- Share buttons

**API Options:**
- Instagram Basic Display API (official, free)
- Third-party embed services (Juicer, Curator, etc.)

---

#### Twitter/X
**Platform:** Twitter/X
**Website:** https://twitter.com/
**Account:** @CPCB_Mustangs
**Cost:** Free

**Integration:**
- Direct links to profile
- Embedded timeline widget (official)
- Individual tweet embeds

**API:**
- Twitter API v2 (free tier with rate limits)
- Official embed widget (free, no API required)

---

#### Facebook
**Platform:** Facebook (Meta)
**Website:** https://www.facebook.com/
**Page:** Cal Poly Club Baseball
**Cost:** Free

**Integration:**
- Direct links to page
- Facebook Page Plugin (official widget)
- Share buttons

**API:**
- Facebook SDK (free)
- Page Plugin (free, no coding required)

---

## Potential Third-Party Tools (Not Confirmed)

### Analytics

#### Google Analytics
**Category:** Web Analytics
**Website:** https://analytics.google.com/
**Cost:** Free

**Features:**
- Page views and traffic
- User demographics
- Behavior flow
- Traffic sources
- Real-time users
- Custom events

**Implementation:**
- GA4 (current version)
- Tracking script in site header
- Privacy considerations (cookie consent)

**Alternatives:**
- **Plausible Analytics:** Privacy-focused, $9/month, no cookies
- **Umami:** Self-hosted, free, open-source
- **Simple Analytics:** Paid, privacy-focused
- **Fathom:** Paid, privacy-focused

**Recommendation:** Start with Google Analytics (free), consider privacy-focused alternative if budget allows

---

### Forms and Email

#### Formspree
**Category:** Form Backend Service
**Website:** https://formspree.io/
**Cost:** Free tier (50 submissions/month), $10/month unlimited

**Features:**
- Contact form processing
- Email notifications
- No backend coding required
- Spam protection
- File uploads (paid tiers)

**Integration:**
- Simple HTML form
- POST to Formspree endpoint
- Emails sent to specified address

**Alternatives:**
- **Netlify Forms:** Free with Netlify hosting (100 submissions/month)
- **EmailJS:** Free tier (200 emails/month)
- **Google Forms:** Free, but different UX
- **Custom backend:** PHP or Node.js

**Recommendation:** Netlify Forms if using Netlify hosting, otherwise Formspree

---

#### Google Workspace (Gmail for Business)
**Category:** Business Email
**Website:** https://workspace.google.com/
**Cost:** $6/user/month

**Features:**
- Custom domain email (contact@cpcbmustangs.com)
- Professional appearance
- 30 GB storage per user
- Google Calendar, Drive integration
- Mobile apps

**Current:** Using free Gmail (cpcb.mustangs@gmail.com)

**Alternatives:**
- **Zoho Mail:** Free tier (1 domain, 5 users, 5 GB each)
- **ProtonMail:** Privacy-focused, paid
- **Microsoft 365:** $5-6/user/month
- **Email forwarding:** Free (forwards to Gmail)

**Recommendation:** Consider email forwarding or Zoho free tier to save costs

---

### Maps and Location

#### Google Maps
**Category:** Maps and Location Services
**Website:** https://cloud.google.com/maps-platform/
**Cost:** Free tier (28,000 map loads/month), then pay-per-use

**Features:**
- Interactive maps
- Directions
- Satellite view
- Street view
- Custom markers

**Implementation:**
- **Embed API:** Free, simple iframe
- **JavaScript API:** More features, requires API key and billing setup

**Recommendation:** Use free Embed API for simplicity

**Alternative:**
- **OpenStreetMap:** Free, open-source
- **Mapbox:** Free tier, then paid

---

### Image Optimization and CDN

#### Cloudinary
**Category:** Image and Video Management
**Website:** https://cloudinary.com/
**Cost:** Free tier (25 GB storage, 25 GB bandwidth/month)

**Features:**
- Image optimization
- Automatic format conversion (WebP)
- Responsive image generation
- CDN delivery
- Video hosting and optimization
- Transformations on-the-fly

**Integration:**
- Upload images to Cloudinary
- Use Cloudinary URLs in site
- Automatic optimization

**Alternatives:**
- **ImageKit:** Free tier (20 GB bandwidth/month)
- **Imgix:** Paid, powerful
- **Self-hosted optimization:** Free but more work

**Recommendation:** Use if budget allows (free tier may suffice), otherwise self-optimize images

---

#### Cloudflare CDN
**Category:** Content Delivery Network
**Website:** https://www.cloudflare.com/
**Cost:** Free tier available

**Features:**
- Global CDN
- DDoS protection
- SSL certificate
- Caching
- Performance optimization
- Analytics

**Integration:**
- Point domain nameservers to Cloudflare
- Configure caching rules
- Enable optimizations

**Recommendation:** Use if not using GitHub Pages/Netlify (which include CDN)

---

### Video Hosting

#### YouTube
**Category:** Video Hosting
**Website:** https://www.youtube.com/
**Cost:** Free

**Features:**
- Unlimited storage
- Free hosting
- Embed videos
- Playlists
- Discovery (search, recommendations)

**Pros:**
- Free
- Familiar platform
- Good for recruitment (searchable)

**Cons:**
- Ads (unless Premium)
- Less control over player
- YouTube branding

**Recommendation:** Primary video hosting

---

#### Vimeo
**Category:** Video Hosting
**Website:** https://vimeo.com/
**Cost:** Free tier limited, $7/month Plus, $20/month Pro

**Features:**
- Ad-free
- Customizable player
- Better privacy controls
- Higher quality

**Pros:**
- Professional appearance
- No ads
- Better player customization

**Cons:**
- Paid for meaningful use
- Less discovery than YouTube

**Recommendation:** YouTube for Phase 1, consider Vimeo if budget allows and professionalism desired

---

### Cookie Consent and Privacy

#### Cookiebot
**Category:** Cookie Consent Management
**Website:** https://www.cookiebot.com/
**Cost:** Free for small sites (1 domain, 100 pages/month), then paid

**Features:**
- Cookie banner
- GDPR/CCPA compliance
- Automatic cookie detection
- Consent management

**Alternatives:**
- **OneTrust:** Enterprise-level, expensive
- **Osano:** Free tier available
- **Custom solution:** Free, more work

**Recommendation:** Only needed if using tracking (Analytics, ads, social widgets)

---

### Search

#### Algolia
**Category:** Search Service
**Website:** https://www.algolia.com/
**Cost:** Free tier (10,000 searches/month, 10,000 records)

**Features:**
- Fast, typo-tolerant search
- Instant results
- Faceted search
- Search analytics

**Implementation:**
- Index blog posts and content
- Add search bar to site
- Connect to Algolia API

**Alternatives:**
- **Lunr.js:** Client-side, free, JavaScript library
- **Fuse.js:** Client-side, free, fuzzy search
- **Custom backend search:** Free, more work

**Recommendation:** Client-side search (Lunr.js or Fuse.js) for Phase 1, sufficient for blog/news search

---

### Monitoring and Uptime

#### UptimeRobot
**Category:** Uptime Monitoring
**Website:** https://uptimerobot.com/
**Cost:** Free (50 monitors, 5-minute checks)

**Features:**
- Uptime monitoring
- Email/SMS alerts
- Public status pages
- Response time monitoring

**Alternatives:**
- **Pingdom:** Paid, more features
- **StatusCake:** Free tier available
- **Better Uptime:** Paid

**Recommendation:** Use UptimeRobot free tier for peace of mind

---

### Performance Monitoring

#### Google PageSpeed Insights
**Category:** Performance Testing
**Website:** https://pagespeed.web.dev/
**Cost:** Free

**Features:**
- Core Web Vitals
- Performance score
- Optimization suggestions
- Mobile and desktop testing

**Recommendation:** Use regularly for performance audits

---

#### GTmetrix
**Category:** Performance Testing
**Website:** https://gtmetrix.com/
**Cost:** Free with registration (limited), paid for advanced

**Features:**
- Performance scoring
- Waterfall chart
- Historical tracking
- Video playback

**Recommendation:** Use for detailed performance analysis

---

## Development and Deployment Tools

### Version Control

#### GitHub
**Category:** Version Control and Code Hosting
**Website:** https://github.com/
**Cost:** Free for public repositories

**Features:**
- Git repository hosting
- Collaboration tools
- GitHub Pages (free hosting)
- GitHub Actions (CI/CD)
- Issue tracking

**Recommendation:** Use for version control and potentially hosting

---

### Hosting

#### GitHub Pages
**Category:** Static Site Hosting
**Website:** https://pages.github.com/
**Cost:** Free

**Features:**
- Free hosting
- Custom domain support
- HTTPS included
- CDN via Fastly
- 100 GB bandwidth/month (soft limit)

**Limitations:**
- Static sites only (HTML, CSS, JS)
- No server-side processing
- No databases

**Recommendation:** Excellent option for Phase 1

---

#### Netlify
**Category:** JAMstack Hosting Platform
**Website:** https://www.netlify.com/
**Cost:** Free tier, paid for advanced features

**Features:**
- Free hosting
- CDN included
- SSL certificate
- Continuous deployment (Git integration)
- Forms (100 submissions/month free)
- Serverless functions
- 100 GB bandwidth/month free

**Recommendation:** Excellent option, more features than GitHub Pages

---

#### Vercel
**Category:** Frontend Hosting Platform
**Website:** https://vercel.com/
**Cost:** Free for personal projects

**Features:**
- Similar to Netlify
- Excellent performance
- Serverless functions
- Git integration
- Analytics (paid)

**Recommendation:** Good alternative to Netlify

---

### Build Tools

#### Eleventy (11ty)
**Category:** Static Site Generator
**Website:** https://www.11ty.dev/
**Cost:** Free, open-source

**Features:**
- Simple, flexible
- Multiple template languages
- Fast build times
- Data-driven content
- Plugin ecosystem

**Recommendation:** Consider for Phase 2 if content management becomes complex

---

### Design and Assets

#### Font Awesome
**Category:** Icon Library
**Website:** https://fontawesome.com/
**Cost:** Free tier (1,608 icons), Pro $99/year

**Features:**
- Icon fonts and SVGs
- Social media icons
- Common UI icons
- Easy integration

**Alternatives:**
- **Heroicons:** Free, MIT license, Tailwind creators
- **Feather Icons:** Free, MIT license, simple line icons
- **Material Icons:** Free, Google

**Recommendation:** Use free icon library (Heroicons or Feather)

---

#### Google Fonts
**Category:** Web Fonts
**Website:** https://fonts.google.com/
**Cost:** Free

**Features:**
- Free, open-source fonts
- Easy integration
- Wide selection
- Hosting included

**Alternatives:**
- **Adobe Fonts:** Paid (with Adobe CC)
- **Self-hosted fonts:** Font files from Fontsquirrel, etc.
- **System fonts:** Free, fastest

**Recommendation:** Use Google Fonts or system fonts for best performance

---

## Third-Party Tool Priorities

### Must-Have (Phase 1)
1. **Hosting:** GitHub Pages or Netlify (free)
2. **GameChanger:** Live updates (free tier)
3. **Social Media Links:** Instagram, Twitter, Facebook (free)
4. **SSL/HTTPS:** Included with hosting (free)

**Total Cost:** $0

---

### Should-Have (Phase 1.5)
1. **Google Analytics:** Traffic tracking (free)
2. **Formspree or Netlify Forms:** Contact form (free tier)
3. **Google Maps:** Location embed (free)
4. **UptimeRobot:** Monitoring (free)

**Total Cost:** $0

---

### Nice-to-Have (Phase 2)
1. **Google Workspace:** Custom email ($72/year)
2. **Cloudinary:** Image optimization (free tier)
3. **Social Media Embeds:** Widgets on site (free)
4. **Client-side Search:** Lunr.js (free)

**Total Cost:** $0-72/year

---

### Future Enhancements (Phase 3)
1. **Premium Video Hosting:** Vimeo Pro ($240/year)
2. **Advanced Analytics:** Plausible ($108/year)
3. **Form Service:** Formspree paid ($120/year)
4. **E-commerce:** Shopify Lite or similar (if merchandise)

**Total Cost:** $0-468/year (depending on features chosen)

---

## Total Cost Comparison

### Current (Wix)
- Wix Premium: $16-35/month
- **Annual:** $192-420/year

### Phase 1 Rebuild (Minimal)
- Hosting: Free
- Domain: $12/year (if not already owned)
- Third-party services: Free
- **Annual:** $12/year

**Savings:** $180-408/year

---

### Phase 2 Rebuild (With Enhancements)
- Hosting: Free
- Domain: $12/year
- Google Workspace: $72/year (optional)
- Other services: Free
- **Annual:** $12-84/year

**Savings:** $108-408/year

---

## Tool Selection Criteria

### Considerations
1. **Cost:** Prefer free/low-cost options
2. **Reliability:** Established services
3. **Ease of Use:** Minimal technical overhead
4. **Performance:** Fast loading, minimal impact
5. **Privacy:** GDPR/CCPA compliance
6. **Scalability:** Can grow with team needs
7. **Support:** Good documentation and community

---

## Implementation Priority

### Week 1: Essential Setup
- [ ] GitHub repository
- [ ] Hosting setup (GitHub Pages or Netlify)
- [ ] Domain configuration
- [ ] SSL certificate

### Week 2: Core Integrations
- [ ] GameChanger embed
- [ ] Social media links
- [ ] Google Maps embed
- [ ] Contact email setup

### Week 3: Enhancements
- [ ] Google Analytics (optional)
- [ ] Contact form
- [ ] Uptime monitoring
- [ ] Cookie consent (if needed)

### Week 4+: Optimization
- [ ] Image optimization workflow
- [ ] Performance monitoring
- [ ] Search implementation (if needed)
- [ ] Additional features as needed

---

## Notes and Observations

- Most essential services have generous free tiers
- Custom build can leverage many free tools
- Modern hosting platforms include CDN and SSL
- Third-party dependencies should be minimized
- Privacy and performance should be prioritized
- Cost savings over Wix are significant

---

## Recommendations

1. **Start Simple:** Use free services for Phase 1
2. **Add Gradually:** Introduce paid services only when necessary
3. **Monitor Costs:** Track expenses vs. Wix baseline
4. **Prioritize Performance:** Choose fast, lightweight tools
5. **Maintain Independence:** Avoid vendor lock-in
6. **Document Everything:** API keys, setup processes
7. **Test Thoroughly:** Ensure all integrations work
8. **Plan for Scaling:** Choose tools that can grow

---

*Last Updated: 2025-10-14*
*Status: Comprehensive list of potential tools. Final selection depends on budget and feature priorities.*
