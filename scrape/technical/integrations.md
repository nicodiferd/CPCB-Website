# CPCB Mustangs Website - Technical Integrations

## Overview
This document catalogs all third-party integrations, external services, APIs, and technical dependencies on the cpcbmustangs.com website.

---

## Core Platform

### Wix Platform
**Type:** Website builder and hosting platform

**Services Provided:**
- Website hosting
- Content management system (CMS)
- Domain management
- SSL certificate
- CDN (content delivery network)
- Database (for dynamic content)
- Form handling
- Analytics (Wix built-in)

**Current Status:** Active subscription
**Cost:** Monthly subscription fee (exact amount TBD)
**Migration Plan:** Move away from Wix to reduce costs

**Wix-Specific Technologies:**
- Thunderbolt framework (version 1.16393.0)
- Wix data binding system
- Wix media manager
- Wix blog system
- Wix mobile optimization

---

## Primary Integrations

### 1. GameChanger Integration
**Service:** Live scoring and statistics platform
**Website:** https://gc.com/
**Purpose:** Real-time game updates, statistics tracking

**Integration Type:**
- Embedded widget/iframe
- Direct link to team profile
- Potential API integration (availability TBD)

**Features Used:**
- Live game scores
- Play-by-play updates
- Player statistics
- Team statistics
- Historical game data
- Box scores

**Implementation Details:**
- **Location:** Live Updates page (/live-updates)
- **Format:** Embedded iframe or widget code
- **Responsive:** Adapts to mobile and desktop
- **Update Frequency:** Real-time during games

**Cost:**
- Free tier (likely)
- Premium features may require subscription
- Check GameChanger pricing for full details

**API Availability:**
- Research GameChanger API documentation
- May require API key/authentication
- Rate limits and usage restrictions may apply

**Rebuild Considerations:**
- Obtain embed code or API credentials
- Ensure responsive embedding
- Fallback for when no live game
- Privacy/consent considerations

**Alternative Options (if GameChanger unavailable):**
- Manual score updates
- Twitter integration for updates
- Custom statistics tracking system
- Other sports scoring platforms (TeamSnap, etc.)

---

### 2. Social Media Integrations

#### Instagram (@calpolyclubbaseball)
**Platform:** Instagram
**Profile:** https://www.instagram.com/calpolyclubbaseball/
**Followers:** 1,357

**Integration Types:**

**A. Social Media Links:**
- Direct link to Instagram profile
- Icon in header/footer
- Opens in new tab

**B. Instagram Feed Embed (Potential):**
- Display recent posts on website
- Third-party widget (Juicer, Curator, etc.)
- Official Instagram embed API
- Implementation: iframe or JavaScript widget

**Content Displayed:**
- Recent photos and videos
- Captions
- Like/comment counts
- Link to view on Instagram

**Rebuild Considerations:**
- Instagram Basic Display API (official)
- Third-party embed services (cost varies)
- Manual curation vs. automatic feed
- Privacy/GDPR compliance
- Lazy loading for performance

---

#### Twitter/X (@CPCB_Mustangs)
**Platform:** Twitter/X
**Profile:** https://twitter.com/cpcb_mustangs

**Integration Types:**

**A. Social Media Links:**
- Direct link to Twitter profile
- Icon in header/footer

**B. Twitter Timeline Embed (Potential):**
- Official Twitter widget
- Display recent tweets
- Customizable theme

**Implementation:**
```html
<a class="twitter-timeline"
   href="https://twitter.com/cpcb_mustangs"
   data-height="500">
   Tweets by CPCB_Mustangs
</a>
<script async src="https://platform.twitter.com/widgets.js"></script>
```

**Rebuild Considerations:**
- Twitter API v2 (rate limits)
- Official embed widget (free)
- Manual tweet curation option
- Privacy compliance

---

#### Facebook (Cal Poly Club Baseball)
**Platform:** Facebook
**Page:** https://www.facebook.com/CalPolyClubBaseball/
**Likes:** 658

**Integration Types:**

**A. Social Media Links:**
- Direct link to Facebook page
- Icon in header/footer

**B. Facebook Page Plugin (Potential):**
- Show page likes
- Display recent posts
- CTA to like page

**Implementation:**
- Facebook Page Plugin generator
- iframe embed
- Customizable width and features

**Rebuild Considerations:**
- Facebook SDK
- Privacy and consent requirements
- Page width and responsive design
- Lazy loading

---

### 3. Google Services

#### Google Maps
**Service:** Google Maps embedding
**Purpose:** Show field location, directions

**Potential Implementation:**
- Embed map of Baggett Field
- Interactive map with zoom, satellite view
- Directions link

**Code Example:**
```html
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!..."
  width="600"
  height="450"
  style="border:0;"
  allowfullscreen=""
  loading="lazy">
</iframe>
```

**API Consideration:**
- Google Maps Embed API (free, with restrictions)
- Google Maps JavaScript API (requires API key, billing)
- Static Maps API (for images)

**Rebuild Recommendations:**
- Use Embed API (free tier)
- Add API key for tracking
- Lazy load map
- Provide text address as fallback

---

#### Google Analytics (Potential)
**Service:** Website analytics
**Status:** May or may not be implemented

**If Implemented:**
- Track page views
- User demographics
- Traffic sources
- User behavior flow
- Event tracking

**Implementation:**
- GA4 (Google Analytics 4) - current version
- Tracking code in site header
- Cookie consent required (GDPR/CCPA)

**Rebuild Considerations:**
- Set up GA4 property
- Add tracking code
- Configure events
- Set up goals/conversions
- Comply with privacy regulations

**Alternative:**
- Plausible Analytics (privacy-focused, paid)
- Umami (self-hosted, free)
- Simple Analytics (paid)
- No analytics (minimal approach)

---

### 4. Email Services

#### Contact Email
**Email:** cpcb.mustangs@gmail.com
**Provider:** Gmail (Google)

**Current Usage:**
- Primary contact method
- Recruitment inquiries
- General questions
- Listed on website

**Implementation:**
- `mailto:` links
- Displayed as text with copy button (potential)
- Contact form submissions sent here (if form exists)

**Limitations:**
- Not a custom domain email (looks less professional)
- Gmail free tier (storage limits, no custom features)

**Future Consideration:**
- Custom email: contact@cpcbmustangs.com
- Requires email hosting service
- Options: Google Workspace ($6/user/month), Zoho Mail (free tier available), custom hosting

---

#### Contact Form (If Present)
**Type:** Wix Forms or custom

**Form Processing:**
- Client-side validation
- Submit to email (SMTP)
- Wix form handler (current)
- Custom backend (rebuild)

**Rebuild Options:**
1. **Formspree** (free tier, then paid)
2. **Netlify Forms** (free with Netlify hosting)
3. **EmailJS** (free tier, client-side)
4. **Custom PHP/Node.js backend**
5. **Google Forms** (free, but different UX)

**Considerations:**
- Spam protection (reCAPTCHA)
- Email delivery reliability
- Data storage/privacy
- Cost

---

## Potential Integrations (Not Confirmed)

### 1. NCBA Website Links
**Website:** https://clubbaseball.org/
**Type:** External link

**Purpose:**
- League affiliation
- Standings and schedules
- Rules and documents
- Team profile on NCBA site

**Team Profile:**
- May have dedicated page on NCBA site
- Link to full team information
- League-maintained data

---

### 2. Opponent Team Links
**Teams:**
- UCSB Club Baseball
- UCLA Club Baseball
- USC Club Baseball
- CSUF Club Baseball
- Long Beach State Club Baseball
- UC Davis, UC Berkeley, Sonoma State (non-conference)

**Purpose:**
- Provide context for opponents
- Fan convenience
- Sportsmanship

---

### 3. Cal Poly Links
**Cal Poly Recreation:**
- Club sports portal
- Registration and policies
- Cal Poly affiliation

**Cal Poly Athletics (gopoly.com):**
- Athletic department
- Separate from club sports but related
- Branding guidelines source

---

### 4. Video Hosting

#### YouTube (Likely)
**Purpose:** Host video highlights and promotional content

**Integration:**
- Embedded YouTube videos
- YouTube channel (if exists)
- Playlist embeds

**Implementation:**
- iframe embed
- YouTube Player API (for custom controls)
- Lazy loading

**Rebuild Considerations:**
- Create/claim YouTube channel
- Organize videos in playlists
- Optimize video metadata (SEO)
- Embed responsively

---

#### Vimeo (Alternative)
**Purpose:** Premium video hosting

**Pros:**
- Ad-free
- Better player customization
- Higher quality

**Cons:**
- Paid service
- Less discovery than YouTube

---

## Performance and Optimization Services

### Content Delivery Network (CDN)
**Current:** Wix CDN (included)

**Rebuild Options:**
- **Cloudflare** (free tier available)
- **GitHub Pages** (built-in CDN)
- **Netlify** (built-in CDN)
- **Vercel** (built-in CDN)

**Benefits:**
- Faster global content delivery
- DDoS protection
- SSL/HTTPS
- Caching

---

### Image Optimization
**Current:** Wix media manager (automatic)

**Rebuild Solutions:**
- **Cloudinary** (free tier, image/video CDN)
- **ImageKit** (free tier, real-time optimization)
- **TinyPNG** (manual compression)
- **WebP conversion** (modern format)
- **Responsive images** (srcset)

---

## Security and Privacy

### SSL/HTTPS
**Current:** Wix-provided SSL certificate
**Rebuild:** Free SSL from hosting provider or Let's Encrypt

---

### Privacy Compliance

#### Cookie Consent
**Required For:**
- Google Analytics
- Social media widgets
- Any tracking

**Implementation:**
- Cookie consent banner
- Privacy policy page
- Cookie policy page

**Services:**
- **Cookiebot** (free tier available)
- **OneTrust** (enterprise, expensive)
- **Custom solution** (free, more work)

---

#### Privacy Policy
**Required:** Yes (if collecting any data)

**Must Include:**
- What data is collected
- How it's used
- Who it's shared with
- User rights (GDPR, CCPA)
- Contact information

**Generators:**
- **TermsFeed** (free generator)
- **Privacy Policy Generator** (free)
- Legal review recommended

---

## Development and Deployment Tools

### Version Control
**Current:** Not applicable (Wix)

**Rebuild:**
- **Git** (version control)
- **GitHub** (repository hosting, also hosting option)
- **GitLab** or **Bitbucket** (alternatives)

---

### Hosting Options (for Rebuild)

#### Option 1: GitHub Pages
**Cost:** Free
**Pros:** Simple, free, version controlled, custom domain
**Cons:** Static only, no server-side processing
**Best For:** Simple static site

---

#### Option 2: Netlify
**Cost:** Free tier generous, paid for advanced features
**Pros:** Forms, functions, CDN, continuous deployment
**Cons:** Free tier limits (bandwidth, build minutes)
**Best For:** Static site with some dynamic features

---

#### Option 3: Vercel
**Cost:** Free tier available
**Pros:** Fast, serverless functions, good DX
**Cons:** Similar to Netlify
**Best For:** Modern static/JAMstack sites

---

#### Option 4: Traditional Hosting
**Providers:** Bluehost, HostGator, SiteGround
**Cost:** $3-10/month
**Pros:** cPanel, PHP/MySQL, full control
**Cons:** More maintenance, slower than modern options

---

### Build Tools (Potential)

#### Static Site Generators
**Options:**
- **Eleventy (11ty):** Simple, flexible, JavaScript
- **Hugo:** Fast, Go-based
- **Astro:** Modern, component-based
- **Jekyll:** Ruby-based, GitHub Pages native

**Benefits:**
- Fast performance
- Version control friendly
- Markdown content
- Template reusability

---

## API Integrations (Future Possibilities)

### GameChanger API
**Status:** Availability unknown
**Purpose:** Automated stats pulling
**Implementation:** If API exists, fetch data programmatically

---

### Weather API
**Service:** OpenWeatherMap, Weather.com API
**Purpose:** Game day weather forecast
**Cost:** Free tier available
**Implementation:** Display weather for game location/time

---

### Calendar API
**Service:** Google Calendar API
**Purpose:** Sync schedule to calendar
**Cost:** Free (with quotas)
**Implementation:** Export schedule, iCal format

---

## Testing and Monitoring

### Uptime Monitoring
**Services:**
- **UptimeRobot** (free)
- **Pingdom** (paid)
- **StatusCake** (free tier)

**Purpose:** Alert if site goes down

---

### Performance Monitoring
**Tools:**
- **Google PageSpeed Insights** (free)
- **GTmetrix** (free)
- **WebPageTest** (free)

**Metrics:**
- Load time
- Core Web Vitals
- Optimization suggestions

---

## Integration Priority for Rebuild

### Must-Have (Phase 1)
1. GameChanger integration (live updates)
2. Social media links (Instagram, Twitter, Facebook)
3. Email contact (mailto link)
4. SSL/HTTPS
5. Basic analytics (optional)

### Nice-to-Have (Phase 2)
1. Social media feed embeds
2. Google Maps embed
3. Contact form
4. Image CDN/optimization
5. Advanced analytics

### Future Enhancements (Phase 3)
1. Video highlights library
2. Weather integration
3. Calendar sync
4. Advanced stats dashboard
5. E-commerce (merchandise)

---

## API Keys and Credentials Needed

### For Rebuild
- [ ] GameChanger embed code or API credentials
- [ ] Google Maps API key (if using JavaScript API)
- [ ] Google Analytics tracking ID (if using)
- [ ] Social media app credentials (for feed embeds)
- [ ] Email service API key (for contact forms)
- [ ] Domain registrar access (for DNS)
- [ ] Hosting account access
- [ ] Git repository access

---

## Cost Analysis

### Current Costs (Estimated)
- Wix subscription: $15-30/month
- Domain: Included or $12/year
- **Total: ~$180-360/year**

### Rebuild Costs (Minimum)
- Hosting: Free (GitHub Pages/Netlify)
- Domain: $12/year
- **Total: $12/year**

### Rebuild Costs (With Services)
- Hosting: Free
- Domain: $12/year
- Email (Google Workspace): $6/month = $72/year
- Image optimization (Cloudinary): Free tier or $0
- Analytics (Plausible): $9/month = $108/year (optional)
- **Total: $84-192/year**

**Savings:** $96-276/year minimum

---

## Notes and Observations

- Wix provides many integrations out-of-the-box
- GameChanger is critical unique integration
- Social media well-integrated
- Email is free but non-professional domain
- Opportunity for cost savings with custom build
- Modern hosting platforms offer generous free tiers

---

## Recommendations for Rebuild

1. **Replicate GameChanger Integration:** Essential feature
2. **Maintain Social Links:** Important for engagement
3. **Consider Custom Email:** More professional
4. **Use Free Hosting:** GitHub Pages or Netlify
5. **Minimal Paid Services:** Keep costs low
6. **Privacy Compliance:** Add cookie consent if using analytics
7. **Performance First:** Optimize all integrations
8. **Document Everything:** API keys, credentials, setup
9. **Test Thoroughly:** All integrations before launch
10. **Plan for Growth:** Design for future integrations

---

*Last Updated: 2025-10-14*
*Status: Based on current site observation and standard integrations. GameChanger API availability requires verification.*
