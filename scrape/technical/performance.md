# CPCB Mustangs Website - Performance Analysis

## Overview
This document analyzes the performance characteristics of cpcbmustangs.com and provides recommendations for optimization in the rebuild.

---

## Current Platform Performance

### Wix Platform Characteristics

**Advantages:**
- Built-in CDN (content delivery network)
- Automatic image optimization
- Mobile-responsive by default
- SSL/HTTPS included
- Automated caching

**Disadvantages:**
- Heavy JavaScript framework (Thunderbolt)
- Large initial page load
- Third-party scripts and tracking
- Less control over optimization
- Code bloat from drag-and-drop builder

---

## Performance Metrics to Measure

### Core Web Vitals (Google)

#### 1. Largest Contentful Paint (LCP)
**What It Measures:** Loading performance
**Target:** < 2.5 seconds
**Factors:**
- Server response time
- Resource load time
- Client-side rendering

**Current (Estimated):** 2-4 seconds (Wix typical range)

---

#### 2. First Input Delay (FID) / Interaction to Next Paint (INP)
**What It Measures:** Interactivity
**Target:** < 100ms (FID) or < 200ms (INP)
**Factors:**
- JavaScript execution time
- Main thread blocking

**Current (Estimated):** 50-150ms

---

#### 3. Cumulative Layout Shift (CLS)
**What It Measures:** Visual stability
**Target:** < 0.1
**Factors:**
- Images without dimensions
- Dynamic content injection
- Web fonts loading

**Current (Estimated):** 0.05-0.15

---

### Additional Metrics

#### Time to First Byte (TTFB)
**Target:** < 600ms
**Factors:**
- Server processing time
- Network latency
- CDN performance

**Wix Performance:** Generally good due to CDN

---

#### First Contentful Paint (FCP)
**Target:** < 1.8 seconds
**What It Measures:** When first content appears

---

#### Speed Index
**Target:** < 3.4 seconds
**What It Measures:** How quickly content is visually populated

---

#### Total Blocking Time (TBT)
**Target:** < 200ms
**What It Measures:** Time main thread is blocked

---

## Page Weight Analysis

### Typical Wix Page Weight
- **HTML:** 50-100 KB
- **CSS:** 100-200 KB
- **JavaScript:** 500-1000 KB (Wix framework)
- **Images:** 500-2000 KB (varies by page)
- **Fonts:** 50-150 KB
- **Total:** 1.5-4 MB

### Rebuild Target
- **HTML:** 20-50 KB
- **CSS:** 30-80 KB
- **JavaScript:** 50-150 KB (minimal, vanilla JS)
- **Images:** 300-800 KB (optimized)
- **Fonts:** 30-80 KB (subset fonts)
- **Total:** < 1 MB (goal), < 2 MB (acceptable)

---

## Resource Loading

### Critical Resources
**Above the Fold:**
- HTML structure
- Critical CSS (inline if small)
- Logo and hero image
- Web fonts (if used)

**Below the Fold:**
- Remaining CSS
- JavaScript (defer or async)
- Non-critical images (lazy load)
- Third-party widgets (lazy load)

---

### Current Load Strategy (Wix)
- Wix framework loads upfront
- CSS and JS bundled
- Images lazy loaded (Wix handles)
- Third-party scripts loaded asynchronously

---

### Recommended Load Strategy (Rebuild)

**1. HTML:**
- Clean, semantic markup
- Minimal inline styles
- No blocking scripts in `<head>`

**2. CSS:**
- Critical CSS inline or in `<head>`
- Non-critical CSS async load
- Unused CSS removed
- Minified

**3. JavaScript:**
- Defer or async attribute
- Load only what's needed
- Vanilla JS preferred over frameworks
- Minified and bundled

**4. Images:**
- Lazy loading (`loading="lazy"`)
- Responsive images (`srcset`)
- WebP format with JPEG fallback
- Optimized and compressed

**5. Fonts:**
- Subset fonts (Latin characters only)
- Font-display: swap
- Self-host for performance
- Limit font weights loaded

**6. Third-Party Scripts:**
- Load asynchronously
- Lazy load when possible (on scroll or interaction)
- Minimize number of third-party scripts

---

## Image Optimization

### Current Implementation (Wix)
- Automatic image optimization
- Responsive image generation
- Lazy loading
- WebP conversion (automatic)
- CDN delivery

### Rebuild Recommendations

**Format Selection:**
- **WebP:** Primary format (better compression)
- **JPEG:** Fallback for older browsers
- **SVG:** For logos and icons
- **PNG:** Only when transparency needed and no WebP support

**Compression:**
- JPEG: 80-85% quality
- WebP: 75-80% quality
- Use tools: TinyPNG, ImageOptim, Squoosh

**Responsive Images:**
```html
<picture>
  <source type="image/webp" srcset="hero-400.webp 400w, hero-800.webp 800w, hero-1200.webp 1200w">
  <source type="image/jpeg" srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1200.jpg 1200w">
  <img src="hero-800.jpg" alt="Cal Poly baseball action" loading="lazy">
</picture>
```

**Lazy Loading:**
```html
<img src="image.jpg" alt="Description" loading="lazy">
```

**Size Recommendations:**
- Hero images: 1920x1080, < 300 KB
- Content images: 800x600, < 150 KB
- Thumbnails: 400x300, < 50 KB
- Logos: SVG or small PNG

---

## JavaScript Performance

### Current (Wix)
- Large Wix framework (~500-1000 KB)
- React-based (Wix uses React)
- Multiple third-party scripts
- Analytics and tracking

### Rebuild Strategy

**Minimal JavaScript:**
- Only what's necessary
- Vanilla JavaScript (no frameworks for simple site)
- Total JS budget: < 150 KB

**Essential JavaScript:**
1. Mobile menu toggle
2. Photo lightbox/modal
3. Form validation
4. Lazy loading (if not native)
5. Analytics (if used)

**Code Splitting:**
- Load JavaScript only on pages that need it
- Inline small scripts (< 1 KB)
- External scripts for larger functionality

**Example Minimal JS:**
```javascript
// Mobile menu toggle (< 1 KB)
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-menu');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});
```

---

## CSS Performance

### Current (Wix)
- Wix-generated CSS
- Large stylesheets
- Many unused styles
- CSS-in-JS for components

### Rebuild Strategy

**CSS Organization:**
- Single stylesheet or small modular files
- Critical CSS inline (< 14 KB)
- Remove unused CSS
- Minify and compress

**CSS Methodology:**
- BEM or similar (consistent naming)
- Utility classes for common patterns
- Avoid deep nesting
- Mobile-first media queries

**Size Target:**
- Total CSS: < 50 KB uncompressed
- Critical CSS: < 14 KB (inline in `<head>`)
- Gzip compression reduces by ~70%

---

## Font Performance

### Web Fonts Impact
- Each font file: 20-100 KB
- Multiple weights multiply file size
- FOUT (Flash of Unstyled Text) if not handled

### Optimization Strategies

**1. System Font Stack (Fastest):**
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI",
             Roboto, "Helvetica Neue", Arial, sans-serif;
```
- No external fonts to load
- Instant rendering
- Looks good on all platforms

**2. Google Fonts (Balanced):**
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Oswald:wght@700&family=Open+Sans&display=swap" rel="stylesheet">
```
- Limit to 2 font families
- Limit to 2-3 weights per family
- Use `font-display: swap`

**3. Self-Hosted Fonts (Full Control):**
- Host font files on same domain
- Subset fonts (Latin only, ~30% smaller)
- Use woff2 format (best compression)
- Preload critical fonts

**Font Loading CSS:**
```css
@font-face {
  font-family: 'Oswald';
  src: url('/fonts/oswald-bold.woff2') format('woff2');
  font-weight: 700;
  font-display: swap; /* Show fallback immediately */
}
```

---

## Caching Strategy

### Browser Caching
**Set Cache Headers:**
- **HTML:** No cache or short (1 hour)
- **CSS/JS:** Long cache (1 year) with versioned filenames
- **Images:** Long cache (1 year)
- **Fonts:** Long cache (1 year)

**Example Headers:**
```
Cache-Control: public, max-age=31536000, immutable  # CSS, JS, fonts, images
Cache-Control: no-cache  # HTML
```

**Filename Versioning:**
- `styles.v1.2.css` or `styles.abc123.css` (hash)
- Change filename when updating
- Forces cache bust

---

### Service Worker (Advanced)
**Benefits:**
- Offline functionality
- Faster repeat visits
- Control over caching

**Complexity:**
- Requires JavaScript knowledge
- Maintenance overhead
- May be overkill for simple site

**Recommendation:** Skip for Phase 1, consider for Phase 2

---

## Third-Party Script Performance

### Current Third-Party Scripts (Likely)
1. **Wix framework:** Heavy
2. **Analytics:** Moderate
3. **GameChanger widget:** Varies
4. **Social media embeds:** Moderate to heavy

### Optimization Strategies

**1. Lazy Load Third-Party Scripts:**
- Load on scroll or interaction
- Not on initial page load
- Reduce initial load time

**Example:**
```javascript
// Load GameChanger widget when user scrolls to Live Updates section
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      loadGameChangerWidget();
      observer.disconnect();
    }
  });
});
observer.observe(document.querySelector('#live-updates'));
```

**2. Async/Defer Attributes:**
```html
<script src="analytics.js" async></script>
<script src="gamechanger-widget.js" defer></script>
```

**3. Self-Host When Possible:**
- Reduces DNS lookups
- More control over caching
- Privacy benefits

**4. Limit Number of Third-Parties:**
- Each adds latency
- Minimize to essentials

---

## Mobile Performance

### Mobile-Specific Optimizations

**1. Smaller Images:**
- Serve smaller images to mobile
- Use `srcset` and `sizes` attributes
- Example: 400px wide for mobile vs 1200px for desktop

**2. Reduce Data Transfer:**
- Mobile users may be on slow networks
- Every KB matters
- Target < 1 MB total page weight

**3. Touch-Friendly Interactions:**
- Large tap targets (44x44px minimum)
- Fast tap response (no 300ms delay)
- Minimal JavaScript overhead

**4. Mobile-First CSS:**
- Base styles for mobile
- Enhance for larger screens with media queries
- Reduces unnecessary code for mobile users

---

## Hosting and Server Performance

### Hosting Options Comparison

#### GitHub Pages
- **Speed:** Excellent (global CDN)
- **Uptime:** 99.9%+
- **Cost:** Free
- **Limitations:** Static only, 100 GB bandwidth/month soft limit

#### Netlify
- **Speed:** Excellent (global CDN)
- **Uptime:** 99.9%+
- **Cost:** Free tier generous
- **Features:** Forms, functions, continuous deployment
- **Limitations:** 100 GB bandwidth/month on free tier

#### Vercel
- **Speed:** Excellent (global CDN)
- **Uptime:** 99.9%+
- **Cost:** Free tier available
- **Similar to Netlify**

**Recommendation:** Any of these will outperform current Wix in speed and cost

---

## Performance Testing Tools

### Recommended Tools

**1. Google PageSpeed Insights**
- URL: https://pagespeed.web.dev/
- Provides Core Web Vitals
- Mobile and desktop scores
- Specific recommendations

**2. GTmetrix**
- URL: https://gtmetrix.com/
- Detailed waterfall chart
- Historical tracking
- Video playback of load

**3. WebPageTest**
- URL: https://www.webpagetest.org/
- Advanced testing options
- Multiple locations
- Connection speed throttling
- Film strip view

**4. Lighthouse (Chrome DevTools)**
- Built into Chrome browser
- Performance, accessibility, SEO, best practices
- Run locally for testing

---

## Performance Budget

### Recommended Budgets

**Page Weight:**
- Homepage: < 1 MB
- Schedule page: < 800 KB
- Blog listing: < 1.2 MB
- Blog post: < 800 KB
- Photo gallery: Progressive load, 2-3 MB total

**Load Time (Fast 3G):**
- First Contentful Paint: < 2s
- Largest Contentful Paint: < 3s
- Time to Interactive: < 4s

**Requests:**
- Total HTTP requests: < 50
- Minimize third-party requests

---

## Monitoring and Optimization Workflow

### Initial Audit
1. Test current site with all tools
2. Record baseline metrics
3. Identify bottlenecks

### Build Phase
1. Implement optimizations
2. Test incrementally
3. Compare to baseline

### Launch
1. Final pre-launch audit
2. Ensure all targets met
3. Monitor after launch

### Ongoing
1. Monthly performance checks
2. Optimize new content (images, etc.)
3. Keep dependencies updated
4. Monitor for regressions

---

## Performance Checklist

### HTML
- [ ] Semantic, clean markup
- [ ] Minimal inline styles
- [ ] No render-blocking resources in `<head>`

### CSS
- [ ] Critical CSS inline (< 14 KB)
- [ ] Minified and compressed
- [ ] Unused CSS removed
- [ ] Mobile-first approach

### JavaScript
- [ ] Minimal JS (< 150 KB)
- [ ] Defer or async loading
- [ ] No blocking scripts
- [ ] Vanilla JS or minimal framework

### Images
- [ ] All images optimized
- [ ] WebP with JPEG fallback
- [ ] Lazy loading implemented
- [ ] Responsive images (srcset)
- [ ] Alt text for accessibility

### Fonts
- [ ] Limit to 2 families, 2-3 weights
- [ ] font-display: swap
- [ ] Subset or use system fonts
- [ ] Preload critical fonts

### Third-Party
- [ ] Lazy load widgets
- [ ] Async/defer scripts
- [ ] Minimize number of third-parties
- [ ] Self-host when possible

### Hosting
- [ ] Fast hosting with CDN
- [ ] SSL/HTTPS enabled
- [ ] Proper cache headers
- [ ] Gzip/Brotli compression

### Testing
- [ ] PageSpeed score > 90 (mobile and desktop)
- [ ] Core Web Vitals pass
- [ ] Test on real devices
- [ ] Test on slow networks

---

## Expected Performance Gains

### Current Site (Wix, Estimated)
- **Load Time:** 3-5 seconds (3G)
- **PageSpeed Score:** 60-75 (mobile), 75-85 (desktop)
- **Page Weight:** 2-4 MB
- **Core Web Vitals:** Borderline pass

### Rebuilt Site (Optimized, Target)
- **Load Time:** 1-2 seconds (3G)
- **PageSpeed Score:** 85-95 (mobile), 90-100 (desktop)
- **Page Weight:** < 1 MB
- **Core Web Vitals:** Pass with good margins

**Improvement:** 50-70% faster load times, 40-60% smaller page weight

---

## Notes and Observations

- Wix is convenient but adds overhead
- Custom build allows full optimization control
- Images are typically the largest performance factor
- Third-party scripts can significantly impact performance
- Mobile optimization is critical for fan engagement
- Fast sites improve user experience and SEO

---

## Recommendations for Rebuild

1. **Set Performance Budget:** Define targets before building
2. **Test Early and Often:** Don't wait until end to test
3. **Optimize Images Aggressively:** Biggest impact on page weight
4. **Minimize JavaScript:** Use vanilla JS, avoid heavy frameworks
5. **Lazy Load Wisely:** Third-party widgets, below-fold images
6. **Use Modern Formats:** WebP images, woff2 fonts
7. **Leverage CDN:** Free hosting options include CDN
8. **Monitor Continuously:** Regular performance audits
9. **Mobile First:** Optimize for mobile users primarily
10. **Compare to Baseline:** Track improvements vs. current site

---

*Last Updated: 2025-10-14*
*Status: Based on typical Wix performance and best practices. Actual metrics require testing current live site.*
