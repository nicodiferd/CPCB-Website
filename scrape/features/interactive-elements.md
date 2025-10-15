# CPCB Mustangs Website - Interactive Elements and Features

## Overview
This document catalogs all interactive elements, user interface components, and dynamic features on the cpcbmustangs.com website.

---

## Navigation Interactions

### Primary Menu
- **Desktop Hover:** Menu items change color/underline on hover
- **Mobile Tap:** Hamburger menu opens/closes
- **Active State:** Current page indicated visually
- **Transitions:** Smooth color transitions (0.2s - 0.3s)

### Mobile Menu
- **Toggle Animation:** Hamburger icon → X transformation
- **Menu Slide:** Slide-in from right or overlay effect
- **Close Triggers:** X button, outside tap, menu item selection
- **Backdrop:** Semi-transparent overlay behind menu
- **Scrolling:** Prevent body scroll when menu open

---

## Buttons and CTAs

### Primary Buttons
**Examples:** "View Schedule," "Contact Us," "Follow Live Updates"

**States:**
1. **Default:**
   - Background: Cal Poly Green (#003831)
   - Text: White
   - Border: None or matching green
   - Cursor: Pointer

2. **Hover:**
   - Background: Darker green or Vegas Gold
   - Text: White
   - Transform: Slight scale (1.02) or none
   - Transition: 0.2s ease

3. **Active/Pressed:**
   - Background: Even darker green
   - Transform: Scale down (0.98)
   - Shadow: Reduced or none

4. **Focus:**
   - Outline: 2px solid color for keyboard users
   - Accessibility: Visible focus indicator

5. **Disabled:**
   - Background: Light gray
   - Text: Dark gray
   - Cursor: Not-allowed
   - Opacity: 0.6

**Button Sizes:**
- Small: 12px 20px padding
- Medium: 14px 28px padding
- Large: 16px 32px padding

### Secondary Buttons
**Style:** Outlined or ghost buttons

**States:**
- **Default:** Transparent background, Cal Poly Green border and text
- **Hover:** Filled green background, white text
- **Active:** Darker green fill

### Social Media Buttons
**Icon Buttons:**
- **Default:** Cal Poly Green or gray icon
- **Hover:** Color shift to platform brand color or scale effect
- **Size:** 24px - 32px
- **Spacing:** 12px - 16px between icons
- **Target:** Open in new tab

---

## Links

### Text Links (In-Content)
**Default State:**
- Color: Cal Poly Green or Copper Gold
- Decoration: None or underline
- Font weight: Inherit or medium

**Hover State:**
- Underline appears (if not default)
- Color: Slightly darker or shift to Copper Gold
- Cursor: Pointer

**Visited State:**
- Color: Slightly muted version (optional)

**Focus State:**
- Outline for keyboard navigation
- High contrast for visibility

### Navigation Links
See navigation.md for detailed navigation link interactions

---

## Forms

### Contact Form (If Present)
**Likely on contact page or embedded in footer**

**Form Fields:**
1. **Name Input**
   - Type: Text
   - Required: Yes
   - Placeholder: "Your Name"
   - Validation: Not empty

2. **Email Input**
   - Type: Email
   - Required: Yes
   - Placeholder: "your.email@example.com"
   - Validation: Valid email format

3. **Subject Input** (Optional)
   - Type: Text
   - Placeholder: "Subject"

4. **Message Textarea**
   - Type: Textarea
   - Required: Yes
   - Placeholder: "Your message..."
   - Rows: 4-6

5. **Submit Button**
   - Text: "Send Message" or "Submit"
   - Type: Submit
   - Style: Primary button

**Field States:**
1. **Default:**
   - Border: 1px solid light gray
   - Background: White
   - Padding: 12px 16px

2. **Focus:**
   - Border: 2px solid Cal Poly Green
   - Outline: None (custom border handles it)
   - Background: White

3. **Error:**
   - Border: 2px solid red
   - Background: Light red tint
   - Error message below field
   - Icon: Warning/error icon

4. **Success:**
   - Border: 2px solid green
   - Checkmark icon (optional)

5. **Disabled:**
   - Background: Light gray
   - Cursor: Not-allowed
   - Opacity: 0.6

**Form Validation:**
- **Client-side:** JavaScript validation before submit
- **Real-time:** Validation on blur or input
- **Error Messages:** Clear, specific messages
- **Success Message:** "Thank you! We'll be in touch soon."

**Submission:**
- Loading state on submit button
- Form disabled during submission
- Success/error notification
- Form reset on success (or redirect)

---

## Modals and Overlays

### Photo Lightbox
**Trigger:** Click on photo in gallery

**Behavior:**
1. **Open:**
   - Modal overlay appears (semi-transparent dark background)
   - Image displays at larger size
   - Navigation arrows (prev/next)
   - Close button (X in corner)
   - Body scroll locked

2. **Navigation:**
   - Arrow keys: Previous/next image
   - Click arrows: Previous/next
   - Click outside image: Close (optional)
   - ESC key: Close

3. **Close:**
   - X button click
   - ESC key press
   - Click backdrop
   - Smooth fade out transition

**Elements:**
- **Image:** Centered, max-width/height to fit viewport
- **Caption:** Below or over image
- **Counter:** "Image 5 of 24"
- **Navigation Arrows:** Left and right edges
- **Close Button:** Top right corner
- **Loading Indicator:** Spinner while image loads

**Styling:**
- **Backdrop:** Black or dark green, 80-90% opacity
- **Image Border:** Optional white border
- **Arrows:** Large, visible, Cal Poly Green or white
- **Close X:** 32px - 40px, white or light color

---

## Embedded Content

### GameChanger Widget
**Location:** Live Updates page

**Type:** Embedded iframe or widget

**Features:**
- Live score updates
- Play-by-play text
- Player statistics
- Auto-refresh during live games
- Links to full GameChanger profile

**Behavior:**
- Responsive sizing (adapts to container)
- May require user interaction to load (privacy)
- External link to full stats on GameChanger site

**Styling:**
- Border: Optional frame around widget
- Background: Matches page or white
- Loading state: Spinner or skeleton screen

### Social Media Embeds (Potential)
**Types:**
- Instagram feed widget
- Twitter timeline
- Facebook page plugin

**Behavior:**
- Lazy loading (load when scrolled into view)
- Responsive sizing
- Privacy-conscious (may require consent)

---

## Tables

### Schedule Table
**Structure:**
- Headers: Date, Time, Opponent, Location, Result
- Rows: Individual games
- Alternating row colors for readability

**Interactive Features:**
1. **Sorting:**
   - Click column header to sort
   - Ascending/descending toggle
   - Arrow indicators for sort direction

2. **Filtering:**
   - Dropdown to filter by month, conference, result
   - "Show upcoming only" toggle
   - Search/filter bar

3. **Mobile Responsiveness:**
   - Horizontal scroll (not ideal)
   - Card-based layout (better)
   - Accordion rows (expandable)

**Styling:**
- **Header Row:** Bold, Cal Poly Green background, white text
- **Rows:** White/light gray alternating
- **Borders:** Subtle borders between rows
- **Hover:** Light highlight on row hover
- **Links:** Opponent names may link to opponent sites

### League Standings Table
**Structure:**
- Headers: Team, Wins, Losses, PCT, GB (Games Behind)
- Rows: Conference teams
- Cal Poly row highlighted

**Features:**
- Static or sortable
- Current team highlighted (Cal Poly)
- Updated weekly during season

**Styling:**
- Cal Poly row: Green background or bold
- Leaders/playoffs: Special indicator
- Clean, readable table design

---

## Carousels/Sliders

### Hero Carousel (Potential)
**Location:** Homepage hero section

**Features:**
- Auto-advance slides (5-7 seconds)
- Manual navigation (arrows, dots)
- Pause on hover
- Swipe on mobile

**Elements:**
- **Slides:** 3-5 featured images/messages
- **Navigation Dots:** Bottom center
- **Arrows:** Left/right sides
- **Pause Button:** Optional

**Content:**
- Featured announcements
- Game highlights
- Recruitment messages
- Championship celebrations

### Photo Gallery Slider (Alternative to Grid)
**Features:**
- Thumbnail navigation
- Prev/next arrows
- Auto-play (optional)
- Caption display

---

## Accordions/Expandable Sections

### FAQ or Information Sections (If Present)
**Behavior:**
- Click header to expand/collapse
- Smooth expand/collapse animation
- Arrow icon indicates state (down = closed, up = open)
- One open at a time (accordion) or multiple (toggles)

**Styling:**
- Header: Bold, clickable, hover state
- Content: Padded, smooth transition
- Icon: Chevron or plus/minus

---

## Animations and Transitions

### Page Load Animations
**Elements:**
- Fade in on scroll (content blocks)
- Slide in from side (images, cards)
- Stagger animations (list items appear sequentially)

**Timing:**
- Duration: 0.3s - 0.6s
- Easing: Ease-out or ease-in-out
- Delay: Staggered by 0.1s - 0.2s

### Hover Animations
**Common Effects:**
- Scale transform (1.05) on images/cards
- Color transitions on buttons and links
- Underline slide-in on links
- Shadow increase on cards

**Performance:**
- Use CSS transforms (GPU-accelerated)
- Avoid animating layout properties
- Keep animations under 300ms

### Scroll Animations
**Sticky Header:**
- Nav bar sticks to top on scroll down
- May shrink or change background opacity
- Smooth transition

**Parallax Effects (Potential):**
- Background images scroll slower than content
- Creates depth effect
- Use sparingly for performance

---

## Loading States

### Page Loading
- **Initial Load:** Wix loading animation (if default)
- **Custom Loader:** Spinner in Cal Poly Green
- **Skeleton Screens:** Placeholder content while loading
- **Progressive Loading:** Images load progressively

### Content Loading
- **Lazy Loading Images:** Load as user scrolls
- **Infinite Scroll:** Blog posts load on scroll (potential)
- **AJAX Loading:** Dynamic content updates without page reload

**Loading Indicators:**
- Spinner: Rotating circle or dots
- Progress bar: For multi-step processes
- Skeleton: Gray boxes mimicking content structure

---

## Error States

### 404 Page
**Content:**
- "Page Not Found" heading
- Friendly message
- Link back to homepage
- Search bar (optional)
- Navigation menu intact

**Design:**
- Maintains site branding
- Cal Poly colors
- Helpful, not punishing

### Form Errors
- Inline error messages
- Red border on invalid fields
- Icon indicators
- Clear instructions for fixing

### Connection Errors
- "Unable to load content" message
- Retry button
- Fallback content or cached version

---

## Accessibility Features

### Keyboard Navigation
- Tab through all interactive elements
- Enter activates buttons and links
- Escape closes modals
- Arrow keys for sliders and carousels
- Spacebar for checkboxes and toggles

### Screen Reader Support
- ARIA labels on icon buttons
- ARIA-live regions for dynamic content
- Semantic HTML (nav, main, footer, etc.)
- Alt text on all images
- Form labels properly associated

### Focus Management
- Visible focus indicators (outline)
- Logical tab order
- Focus trap in modals
- Skip to main content link

### Color and Contrast
- Meets WCAG AA standards (4.5:1 for text)
- Not relying on color alone for information
- High contrast mode support

---

## Microinteractions

### Success Feedback
- Checkmark animation on form submit
- Toast notification: "Message sent!"
- Button color change: Green for success

### Error Feedback
- Shake animation on invalid input
- Red flash or border on error
- Error icon display

### Copy to Clipboard
- "Copy" button for email or links
- "Copied!" tooltip on success
- Icon change: Clipboard → Checkmark

### Share Buttons
- Click to share on social media
- Opens share dialog or new window
- Confirmation message (optional)

---

## Dynamic Content

### Live Game Updates
**Source:** GameChanger integration
**Update Frequency:** Real-time or periodic refresh
**Display:** Score ticker, play-by-play feed
**Fallback:** Static schedule if no live game

### News Feed
**Source:** Wix blog system
**Display:** Card grid or list
**Pagination:** Next/previous or load more
**Filtering:** By date, category, or search

### Photo Gallery
**Source:** Wix media manager
**Layout:** Grid or masonry
**Lightbox:** Click for full view
**Lazy Load:** Images load as user scrolls

---

## Mobile-Specific Interactions

### Touch Gestures
- **Swipe:** Navigate carousel, gallery
- **Pinch-to-Zoom:** Images (in lightbox)
- **Pull-to-Refresh:** Reload content (potential)
- **Long Press:** Context menu (browser default)

### Mobile Navigation
- **Tap:** All interactions (no hover state)
- **Touch Targets:** Minimum 44x44px
- **Feedback:** Visual response to tap
- **Scroll:** Smooth momentum scrolling

### Mobile Forms
- **Input Types:** Trigger correct keyboard (email, tel, number)
- **Autocomplete:** Suggest saved values
- **Validation:** Immediate feedback
- **Submit:** Large, easy-to-tap button

---

## Performance Considerations

### Optimization
- Debounce scroll events
- Throttle resize handlers
- Use passive event listeners
- Minimize repaints and reflows

### Progressive Enhancement
- Core content accessible without JavaScript
- Enhanced interactions with JavaScript enabled
- Graceful degradation for older browsers

---

## Implementation Examples

### Button Hover Effect
```css
.btn-primary {
  background: #003831;
  color: #FFFFFF;
  padding: 14px 28px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
}

.btn-primary:hover {
  background: #002820;
  transform: translateY(-2px);
}

.btn-primary:active {
  transform: translateY(0);
}

.btn-primary:focus {
  outline: 2px solid #FFE395;
  outline-offset: 2px;
}
```

### Modal Open/Close
```javascript
// Simple modal functionality
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
  modal.querySelector('.modal-close').focus();
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

// Close on backdrop click
document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) {
      closeModal(backdrop.closest('.modal').id);
    }
  });
});

// Close on ESC key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal.active').forEach(modal => {
      closeModal(modal.id);
    });
  }
});
```

### Form Validation
```javascript
// Simple form validation
function validateForm(formId) {
  const form = document.getElementById(formId);
  const inputs = form.querySelectorAll('input[required], textarea[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      showError(input, 'This field is required');
      isValid = false;
    } else if (input.type === 'email' && !isValidEmail(input.value)) {
      showError(input, 'Please enter a valid email');
      isValid = false;
    } else {
      clearError(input);
    }
  });

  return isValid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function showError(input, message) {
  input.classList.add('error');
  let errorDiv = input.nextElementSibling;
  if (!errorDiv || !errorDiv.classList.contains('error-message')) {
    errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    input.after(errorDiv);
  }
  errorDiv.textContent = message;
}

function clearError(input) {
  input.classList.remove('error');
  const errorDiv = input.nextElementSibling;
  if (errorDiv && errorDiv.classList.contains('error-message')) {
    errorDiv.remove();
  }
}
```

---

## Testing Checklist

- [ ] All buttons respond to clicks
- [ ] Hover states work on desktop
- [ ] Mobile menu opens/closes correctly
- [ ] Forms validate properly
- [ ] Modals open/close without issues
- [ ] Keyboard navigation works throughout
- [ ] Focus indicators visible
- [ ] Error states display correctly
- [ ] Loading states show appropriately
- [ ] Links open correct targets (same/new tab)
- [ ] Social media links work
- [ ] Embedded content loads properly
- [ ] Tables are responsive on mobile
- [ ] Touch targets meet minimum size
- [ ] Animations perform smoothly
- [ ] No layout shifts during interactions

---

## Notes and Observations

- Interactions should be intuitive and predictable
- Wix provides many interactions out-of-the-box
- Custom JavaScript needed for unique features
- Mobile touch interactions are critical for fan engagement
- Accessibility must be prioritized in all interactions
- Performance impacts user experience significantly
- GameChanger integration is key unique feature

---

## Recommendations for Rebuild

1. **Keep It Simple:** Don't over-engineer interactions
2. **Mobile First:** Design for touch from the start
3. **Accessibility:** Keyboard and screen reader support essential
4. **Performance:** Optimize all animations and scripts
5. **Feedback:** Provide clear visual feedback for all actions
6. **Testing:** Test on real devices, not just desktop browser
7. **Progressive Enhancement:** Core functionality without JavaScript
8. **User Experience:** Smooth, predictable, delightful

---

*Last Updated: 2025-10-14*
*Status: Based on standard Wix functionality and best practices. Requires hands-on testing for exact interaction details.*
