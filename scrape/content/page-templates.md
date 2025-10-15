# CPCB Mustangs Website - Page Templates and Patterns

## Overview
This document provides HTML/CSS templates and code patterns for replicating the cpcbmustangs.com website pages.

---

## Template 1: Homepage

### Layout Structure
```
┌─────────────────────────────────────┐
│           Header/Navigation         │
├─────────────────────────────────────┤
│                                     │
│          Hero Section               │
│     (Full-width background)         │
│                                     │
├─────────────────────────────────────┤
│                                     │
│        About/Introduction           │
│       (Centered content)            │
│                                     │
├─────────────────────────────────────┤
│   [Card 1]  [Card 2]  [Card 3]     │
│  (Schedule) (Updates)  (Photos)     │
├─────────────────────────────────────┤
│                                     │
│         Contact/Social CTA          │
│                                     │
├─────────────────────────────────────┤
│              Footer                 │
└─────────────────────────────────────┘
```

### HTML Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cal Poly Club Baseball | NCBA Division 1</title>
  <meta name="description" content="Cal Poly Club Baseball competes in NCBA Division 1 SoPac West. 2x Regional Champions, 8x Division Champions.">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <!-- Header -->
  <header class="site-header">
    <nav class="container">
      <a href="/" class="logo">
        <img src="images/cpcb-logo.svg" alt="Cal Poly Club Baseball">
      </a>
      <ul class="nav-menu">
        <li><a href="/" class="active">Home</a></li>
        <li><a href="/schedule">Schedule</a></li>
        <li><a href="/live-updates">Live Updates</a></li>
        <li><a href="/league">League</a></li>
        <li><a href="/photos">Photos</a></li>
        <li><a href="/blog">Team News</a></li>
      </ul>
      <button class="menu-toggle" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1>Cal Poly Club Baseball</h1>
      <p class="hero-subtitle">NCBA Division 1 | SoPac West Conference</p>
      <p class="hero-achievements">2x Regional Champions | 8x Division Champions</p>
      <div class="hero-cta">
        <a href="/schedule" class="btn btn-primary">View Schedule</a>
        <a href="#contact" class="btn btn-secondary">Contact Us</a>
      </div>
    </div>
  </section>

  <!-- About Section -->
  <section class="about section">
    <div class="container">
      <h2>About CPCB</h2>
      <p>Cal Poly Club Baseball is a member of the Cal Poly Club Sport program and competes regionally and nationally as members of the National Club Baseball Association (NCBA).</p>
      <p>We compete in the Southern Pacific - West conference, which includes UCSB, UCLA, USC, CSUF, and Long Beach St. Our regular season takes place from February to May with non-league games occurring in the Fall and early Winter.</p>
    </div>
  </section>

  <!-- Feature Cards -->
  <section class="features section">
    <div class="container">
      <div class="card-grid">
        <div class="card">
          <h3>Schedule</h3>
          <p>View our full season schedule and game results.</p>
          <a href="/schedule" class="card-link">View Schedule →</a>
        </div>
        <div class="card">
          <h3>Live Updates</h3>
          <p>Follow along with live stats via GameChanger.</p>
          <a href="/live-updates" class="card-link">Live Stats →</a>
        </div>
        <div class="card">
          <h3>Photos</h3>
          <p>Check out photos from games and team events.</p>
          <a href="/photos" class="card-link">View Gallery →</a>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact/Social -->
  <section class="contact section" id="contact">
    <div class="container">
      <h2>Get in Touch</h2>
      <p>Interested in joining the team? Have questions?</p>
      <a href="mailto:cpcb.mustangs@gmail.com" class="btn btn-primary">Email Us</a>
      <div class="social-links">
        <a href="https://instagram.com/calpolyclubbaseball" target="_blank" rel="noopener">
          <img src="images/icon-instagram.svg" alt="Instagram">
        </a>
        <a href="https://twitter.com/cpcb_mustangs" target="_blank" rel="noopener">
          <img src="images/icon-twitter.svg" alt="Twitter">
        </a>
        <a href="https://facebook.com/CalPolyClubBaseball" target="_blank" rel="noopener">
          <img src="images/icon-facebook.svg" alt="Facebook">
        </a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/schedule">Schedule</a></li>
            <li><a href="/league">League</a></li>
            <li><a href="/photos">Photos</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4>Connect</h4>
          <p>Email: cpcb.mustangs@gmail.com</p>
          <div class="footer-social">
            <a href="https://instagram.com/calpolyclubbaseball">Instagram</a>
            <a href="https://twitter.com/cpcb_mustangs">Twitter</a>
            <a href="https://facebook.com/CalPolyClubBaseball">Facebook</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>League</h4>
          <p>NCBA Division 1<br>SoPac West Conference</p>
          <a href="https://clubbaseball.org">NCBA Website</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 Cal Poly Club Baseball. All rights reserved.</p>
      </div>
    </div>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

---

## Template 2: Schedule Page

### HTML Template
```html
<section class="page-header">
  <div class="container">
    <h1>2024-25 Season Schedule</h1>
    <p>Regular season: February - May | Non-league: Fall & Winter</p>
  </div>
</section>

<section class="schedule-section section">
  <div class="container">
    <div class="schedule-filters">
      <button class="filter-btn active" data-filter="all">All Games</button>
      <button class="filter-btn" data-filter="conference">Conference</button>
      <button class="filter-btn" data-filter="upcoming">Upcoming</button>
    </div>

    <div class="schedule-table-wrapper">
      <table class="schedule-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
            <th>Opponent</th>
            <th>Location</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          <tr data-category="conference">
            <td data-label="Date">Mar 15, 2024</td>
            <td data-label="Time">2:00 PM</td>
            <td data-label="Opponent">vs UCSB</td>
            <td data-label="Location">Baggett Field</td>
            <td data-label="Result"><span class="result win">W 8-5</span></td>
          </tr>
          <!-- More rows -->
        </tbody>
      </table>
    </div>

    <!-- Mobile card view (alternative) -->
    <div class="schedule-cards mobile-only">
      <div class="game-card">
        <div class="game-date">Mar 15, 2024 | 2:00 PM</div>
        <div class="game-matchup">Cal Poly vs UCSB</div>
        <div class="game-location">Baggett Field</div>
        <div class="game-result win">W 8-5</div>
      </div>
      <!-- More cards -->
    </div>
  </div>
</section>
```

---

## Template 3: Photo Gallery Page

### HTML Template
```html
<section class="page-header">
  <div class="container">
    <h1>Photo Gallery</h1>
    <p>Game days, team events, and championship moments</p>
  </div>
</section>

<section class="gallery-section section">
  <div class="container">
    <!-- Gallery filters/categories -->
    <div class="gallery-filters">
      <button class="filter-btn active" data-category="all">All Photos</button>
      <button class="filter-btn" data-category="2024-25">Season 2024-25</button>
      <button class="filter-btn" data-category="championships">Championships</button>
      <button class="filter-btn" data-category="events">Events</button>
    </div>

    <!-- Photo grid -->
    <div class="photo-grid">
      <div class="photo-item" data-category="2024-25">
        <img src="images/photos/game1-thumb.jpg"
             alt="Cal Poly player batting against UCSB"
             loading="lazy"
             data-full="images/photos/game1-full.jpg">
        <div class="photo-caption">
          <p>Regional Championship Game</p>
          <span class="photo-date">March 15, 2024</span>
        </div>
      </div>
      <!-- More photo items -->
    </div>
  </div>
</section>

<!-- Lightbox Modal -->
<div class="lightbox" id="lightbox" role="dialog" aria-modal="true">
  <button class="lightbox-close" aria-label="Close">&times;</button>
  <button class="lightbox-prev" aria-label="Previous">&larr;</button>
  <button class="lightbox-next" aria-label="Next">&rarr;</button>
  <div class="lightbox-content">
    <img src="" alt="" id="lightbox-image">
    <div class="lightbox-caption" id="lightbox-caption"></div>
  </div>
</div>
```

---

## Template 4: Blog/News Listing

### HTML Template
```html
<section class="page-header">
  <div class="container">
    <h1>Team News</h1>
    <p>Latest updates, game recaps, and announcements</p>
  </div>
</section>

<section class="blog-section section">
  <div class="container">
    <div class="blog-grid">
      <!-- Blog post card -->
      <article class="blog-card">
        <a href="/post/club-baseball-tryouts" class="blog-card-link">
          <img src="images/blog/tryouts-thumb.jpg"
               alt="Players at tryouts"
               class="blog-card-image"
               loading="lazy">
          <div class="blog-card-content">
            <h2 class="blog-card-title">2019-2020 Club Baseball Tryouts</h2>
            <p class="blog-card-date">October 8, 2019</p>
            <p class="blog-card-excerpt">
              Tryouts are scheduled for Wednesday 10/9 and Thursday 10/10
              at 8pm on the intramural fields...
            </p>
            <span class="blog-card-link-text">Read More →</span>
          </div>
        </a>
      </article>
      <!-- More blog cards -->
    </div>

    <!-- Pagination -->
    <nav class="pagination" aria-label="Blog pagination">
      <button class="pagination-btn" disabled>« Previous</button>
      <span class="pagination-info">Page 1 of 3</span>
      <button class="pagination-btn">Next »</button>
    </nav>
  </div>
</section>
```

---

## Template 5: Blog Post Page

### HTML Template
```html
<article class="blog-post">
  <header class="post-header">
    <div class="container">
      <h1 class="post-title">2019-2020 Club Baseball Tryouts</h1>
      <div class="post-meta">
        <time datetime="2019-10-08">October 8, 2019</time>
      </div>
    </div>
  </header>

  <div class="post-featured-image">
    <img src="images/blog/tryouts-featured.jpg"
         alt="Players practicing at tryouts">
  </div>

  <div class="post-content container">
    <div class="post-body">
      <h2>Tryout Schedule</h2>
      <ul>
        <li>Wednesday 10/9 at 8pm - Intramural Fields</li>
        <li>Thursday 10/10 at 8pm - Intramural Fields</li>
        <li>Saturday 10/12, 2pm-6pm - Invite-only inter squad at Baggett Field</li>
      </ul>

      <h2>Mandatory Pre-Tryout Meeting</h2>
      <p>Tuesday 10/8 at 8pm in Building 8, Room 123. $15 fee for bib number. Attendance is required to participate in tryouts.</p>

      <!-- Rest of content -->
    </div>

    <div class="post-footer">
      <div class="share-buttons">
        <span>Share:</span>
        <a href="#" class="share-btn" aria-label="Share on Facebook">Facebook</a>
        <a href="#" class="share-btn" aria-label="Share on Twitter">Twitter</a>
      </div>
    </div>
  </div>
</article>

<aside class="related-posts section">
  <div class="container">
    <h2>Related Posts</h2>
    <div class="related-grid">
      <!-- Related post cards -->
    </div>
  </div>
</aside>
```

---

## Common CSS Patterns

### Basic Reset and Variables
```css
:root {
  /* Colors */
  --color-primary: #003831;
  --color-secondary: #FFE395;
  --color-tertiary: #B38F4F;
  --color-black: #000000;
  --color-white: #FFFFFF;
  --color-gray-light: #F5F5F5;
  --color-gray: #CCCCCC;
  --color-gray-dark: #666666;

  /* Spacing */
  --space-xs: 0.5rem;
  --space-sm: 1rem;
  --space-md: 1.5rem;
  --space-lg: 2rem;
  --space-xl: 3rem;
  --space-2xl: 4rem;

  /* Typography */
  --font-body: Arial, Helvetica, sans-serif;
  --font-display: 'Oswald', Arial, sans-serif;

  /* Layout */
  --container-max: 1200px;
  --border-radius: 8px;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.6;
  color: var(--color-black);
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-md);
}

.section {
  padding: var(--space-2xl) 0;
}
```

### Header and Navigation
```css
.site-header {
  background: var(--color-white);
  border-bottom: 1px solid var(--color-gray);
  position: sticky;
  top: 0;
  z-index: 100;
}

.site-header nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--space-md) 0;
}

.logo img {
  height: 50px;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: var(--space-lg);
}

.nav-menu a {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-menu a:hover,
.nav-menu a.active {
  color: var(--color-tertiary);
}

.menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
  }

  .nav-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 80%;
    height: 100vh;
    background: var(--color-primary);
    flex-direction: column;
    padding: var(--space-2xl);
    transition: right 0.3s;
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-menu a {
    color: var(--color-white);
    padding: var(--space-sm) 0;
  }
}
```

### Hero Section
```css
.hero {
  background: url('../images/hero-bg.jpg') center/cover;
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  color: var(--color-white);
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 56, 49, 0.7);
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  padding: var(--space-md);
}

.hero h1 {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  margin-bottom: var(--space-sm);
}

.hero-subtitle {
  font-size: 1.25rem;
  margin-bottom: var(--space-sm);
}

.hero-achievements {
  font-size: 1.125rem;
  color: var(--color-secondary);
  margin-bottom: var(--space-lg);
}

.hero-cta {
  display: flex;
  gap: var(--space-md);
  justify-content: center;
  flex-wrap: wrap;
}
```

### Buttons
```css
.btn {
  display: inline-block;
  padding: 0.875rem 1.75rem;
  border-radius: var(--border-radius);
  text-decoration: none;
  font-weight: 700;
  transition: all 0.2s;
  cursor: pointer;
  border: 2px solid transparent;
}

.btn-primary {
  background: var(--color-primary);
  color: var(--color-white);
}

.btn-primary:hover {
  background: #002820;
  transform: translateY(-2px);
}

.btn-secondary {
  background: transparent;
  color: var(--color-white);
  border-color: var(--color-white);
}

.btn-secondary:hover {
  background: var(--color-white);
  color: var(--color-primary);
}
```

### Cards
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: var(--space-lg);
}

.card {
  background: var(--color-white);
  border: 1px solid var(--color-gray);
  border-radius: var(--border-radius);
  padding: var(--space-lg);
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.card h3 {
  color: var(--color-primary);
  margin-bottom: var(--space-sm);
}

.card-link {
  color: var(--color-tertiary);
  text-decoration: none;
  font-weight: 600;
  display: inline-block;
  margin-top: var(--space-sm);
}

.card-link:hover {
  text-decoration: underline;
}
```

---

## JavaScript Patterns

### Mobile Menu Toggle
```javascript
// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuToggle.classList.toggle('active');
});

// Close menu when clicking a link
navMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  });
});
```

### Photo Lightbox
```javascript
// Photo lightbox functionality
const photoGrid = document.querySelector('.photo-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const lightboxCaption = document.getElementById('lightbox-caption');
let currentIndex = 0;
let photos = [];

// Gather all photos
photos = Array.from(document.querySelectorAll('.photo-item img'));

// Open lightbox
photoGrid.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    currentIndex = photos.indexOf(e.target);
    showPhoto(currentIndex);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
});

// Show photo
function showPhoto(index) {
  const photo = photos[index];
  lightboxImage.src = photo.dataset.full || photo.src;
  lightboxImage.alt = photo.alt;
  lightboxCaption.textContent = photo.alt;
}

// Navigation
document.querySelector('.lightbox-next').addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % photos.length;
  showPhoto(currentIndex);
});

document.querySelector('.lightbox-prev').addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + photos.length) % photos.length;
  showPhoto(currentIndex);
});

// Close lightbox
function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

document.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;

  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') document.querySelector('.lightbox-next').click();
  if (e.key === 'ArrowLeft') document.querySelector('.lightbox-prev').click();
});
```

---

## Notes

These templates provide a solid foundation for the rebuild. Customize as needed based on final design decisions and additional features.

Key principles:
- Semantic HTML5
- Mobile-first CSS
- Minimal, vanilla JavaScript
- Accessible (ARIA labels, keyboard navigation)
- Performance-optimized (lazy loading, efficient selectors)

---

*Last Updated: 2025-10-14*
*Ready for implementation*
