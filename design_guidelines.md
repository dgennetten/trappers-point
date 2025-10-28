# Trappers Point Showcase Website - Design Guidelines

## Design Approach

**Reference-Based Approach**: Drawing inspiration from luxury real estate platforms (Sotheby's International Realty, Airbnb Luxe) and high-end architecture portfolio sites. The design emphasizes sophisticated elegance, generous whitespace, and imagery-first storytelling that mirrors the property's premium positioning.

**Core Principles:**
- Editorial sophistication with magazine-quality presentation
- Spacious, breathing layouts that convey luxury
- Imagery as the hero, with type and UI supporting the visual narrative
- Restrained elegance over flashy effects

## Typography System

**Font Stack:**
- Primary: Cormorant Garamond (serif) - for headlines, large display text
- Secondary: Inter (sans-serif) - for body text, UI elements, data

**Hierarchy:**
- Hero Headline: 4xl-6xl, Cormorant, light weight, generous letter-spacing
- Section Headings: 3xl-4xl, Cormorant, normal weight
- Feature Text: xl-2xl, Inter, medium weight
- Body Copy: base-lg, Inter, normal weight, increased line-height (1.7-1.8)
- Property Specs Labels: sm-base, Inter, semibold, uppercase with tracking
- Property Specs Values: lg-xl, Inter, light weight

## Layout & Spacing System

**Spacing Primitives:** Tailwind units of 4, 6, 8, 12, 16, 20, 24, 32
- Component internal padding: p-6 to p-8
- Section vertical spacing: py-20 to py-32 (desktop), py-12 to py-16 (mobile)
- Content max-width: max-w-7xl for full sections, max-w-4xl for centered content blocks
- Grid gaps: gap-6 to gap-8

## Section-Specific Design

### Hero Section (Full-Screen Slideshow)
**Layout:**
- Full viewport height (h-screen) with background image slideshow
- 4-5 images cycling with 5-second intervals, smooth crossfade transitions (3s duration)
- Dark gradient overlay (top-to-bottom, 40% opacity) for text legibility
- Content container: centered, max-w-5xl, px-8

**Content Structure:**
- Property address: small, uppercase, tracking-wide, positioned top-center
- Main headline area: Large statement combining location pride with property essence
- Feature highlights: Two-column grid (md:grid-cols-2) with elegant bullet points
  - Left column: "3+ acres lakefront", "4 fireplaces", "Custom architecture", "Horse facilities"
  - Right column: "40min to DIA", "20min to foothills", "Private & secluded", "Irrigation rights"
- Primary CTA button: Positioned below features, blurred background (backdrop-blur-md), white border, subtle shadow
- Slideshow navigation: Subtle dot indicators at bottom-center, minimal and elegant

### Property Specifications Section
**Layout:**
- py-24 section with subtle background differentiation
- max-w-6xl container
- Section header: centered, mb-16

**Grid Structure:**
- 6-column responsive grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3, gap-8
- Each spec card: p-8, subtle border, rounded corners
- Card internal: Label above, value below with generous spacing (space-y-3)
- Specs: Square Footage, Lot Size, Monthly Utilities, Annual Taxes, School Districts, Estimated Value

**Visual Treatment:**
- Clean, data-focused presentation
- Icons from Heroicons (outline style) positioned top-left of each card
- Horizontal divider within each card separating label from value

### Photo Galleries Section
**Overall Structure:**
- Three distinct gallery subsections, each py-20
- Alternating background treatments for visual rhythm
- Each gallery: heading, grid, "View All" link

**Grid Layouts:**
- Interior Photos: 3-column masonry-style grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-3), gap-4
- Exterior Photos: 4-column grid (grid-cols-2 lg:grid-cols-4), gap-6, emphasizing landscape orientation
- Lake Photos: 2-column grid with larger images (grid-cols-1 lg:grid-cols-2), gap-8, showcasing panoramic views

**Image Treatment:**
- Aspect ratios: object-cover with rounded corners (rounded-lg)
- Hover: subtle scale transform (scale-105), smooth transition (300ms)
- Click opens modal lightbox with full-screen view, prev/next arrows, close button

**Modal Specifications:**
- Full-screen overlay with semi-transparent dark background
- Centered image, max 90vw/90vh
- Navigation arrows: positioned left/right edges, large click targets
- Close button: top-right corner, clear X icon from Heroicons

### Lakeside Living Section
**Layout:**
- py-32 for prominence, full-width background image with parallax effect
- Dark overlay (50-60% opacity) for text contrast
- Content: max-w-4xl, centered, px-8

**Content Structure:**
- Section heading: centered, mb-12, large serif typography
- Four-column grid (grid-cols-1 md:grid-cols-2 lg:grid-cols-4) of lifestyle benefits
- Each benefit: icon (Heroicons), headline, short poetic description
- Pull quote: Large centered quote below grid in elegant serif, 2xl-3xl size
  - "Like having your own 24/7 nature documentary"

**Benefits Content:**
- "Panoramic Lake Views" - Ever-changing water vistas
- "Therapeutic Living" - Science-backed wellness of water proximity  
- "Private Sanctuary" - Secluded yet accessible
- "Natural Beauty" - Wildlife, sunsets, seasonal changes

### Contact Section
**Layout:**
- py-20, centered content, max-w-2xl
- Clean, minimal presentation

**Structure:**
- Section heading: "Connect With Us"
- Email display: Large, clickable link with subtle underline on hover
- Supporting text: "For inquiries about this exceptional property"
- Optional: Simple single-column contact form with Name, Email, Message fields and Submit button

## Component Library

**Buttons:**
- Primary CTA: px-8, py-4, rounded-lg, backdrop-blur-md (when on images)
- Secondary: px-6, py-3, outlined style
- Icon buttons (modal navigation): p-3, circular, semi-transparent backgrounds

**Cards:**
- Spec cards: p-8, subtle borders, rounded-lg
- Photo cards: no padding, rounded-lg, overflow-hidden for images

**Navigation (if needed):**
- Minimal top nav: fixed, backdrop-blur, subtle shadow on scroll
- Links: uppercase, tracking-wide, small size
- Logo/address on left, contact link on right

## Image Strategy

**Critical Images:**
- Hero Slideshow: 4-5 high-resolution landscape images showcasing property exterior, lake views, interiors, and grounds
- Interior Gallery: 9-12 images featuring living spaces, fireplaces, custom doors, finishes
- Exterior Gallery: 8-12 images showing architecture, landscaping, horse facilities, seasonal views
- Lake Gallery: 6-8 images of water views, sunsets, wildlife, dock/shoreline
- Lakeside Living Background: Single panoramic lake view image for parallax section

**Image Specifications:**
- Hero: 1920x1080 minimum, optimized for web
- Gallery thumbnails: 800x600, with high-res versions for modal
- Background images: 2560x1440 for sharpness

## Interaction Patterns

**Animations (Minimal & Purposeful):**
- Hero slideshow: 3s crossfade between images, automated cycling
- Scroll-triggered: Subtle fade-in for section headings as they enter viewport
- Image hover: Scale transform on gallery images (scale-105, 300ms ease)
- Modal: Fade-in overlay and slide-in image (400ms)
- Parallax: Subtle parallax on Lakeside Living background image

**No Animations For:**
- Button hover states (rely on native browser/Tailwind defaults)
- Text elements
- Spec cards
- Navigation

**Accessibility:**
- Slideshow: Pause on hover, keyboard navigation for controls
- Modal: Focus trap, ESC to close, keyboard navigation
- All interactive elements: Proper focus indicators
- Images: Descriptive alt text for all property photos