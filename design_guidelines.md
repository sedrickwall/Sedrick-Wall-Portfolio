# Design Guidelines: Sedrick Wall Premium Portfolio

## Design Approach
**Reference-Based + Luxury Premium Aesthetic**
Drawing inspiration from Huly.io's interactive animations, LeBron James's timeline storytelling, and combining modern SaaS aesthetics with luxury brand positioning. This is a narrative-driven, experience-focused portfolio that showcases multi-dimensional professional identity.

## Color Palette
- **Primary**: Gold (#C9A86A) - Premium accents, CTAs, highlights
- **Background**: White (#FFFFFF) - Primary background, text on dark
- **Text/Headers**: Black (#000000) - Primary text, bold statements  
- **Accent**: Navy (#0A0E27) - Deep sections, contrast backgrounds
- **Usage**: Predominantly white backgrounds with strategic navy sections for depth. Gold reserved for premium moments (CTAs, hover states, decorative elements).

## Typography
- **Headings**: Poppins or Satoshi
  - H1: 4xl-6xl (bold/extrabold) for hero statements
  - H2: 3xl-4xl (semibold) for section headers
  - H3: 2xl-3xl (medium) for subsections
- **Body**: Inter
  - Base: text-base/lg (regular/medium)
  - Small: text-sm for metadata, labels
- **Hierarchy**: Strong contrast between display headings and body. Use letter-spacing for luxury feel on headings.

## Layout System
**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24, 32
- Section padding: py-20 (desktop), py-12 (mobile)
- Card spacing: p-8, gap-8
- Micro-spacing: p-4, gap-4
- Container: max-w-7xl with px-6

**Grid Patterns**:
- Hero: Full viewport with centered content
- Domain Cards: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Projects: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Timeline: Single column with offset content
- Tech Stack: grid-cols-2 md:grid-cols-4 lg:grid-cols-6

## Core Components

### Navigation
Sticky header with smooth scroll behavior. Links to sections with gold underline on active state. Mobile: hamburger menu with full-screen overlay. Logo left, navigation center, CTA right.

### Hero Section
Full viewport height with:
- Large name display (Poppins, 6xl)
- Multi-line subtitle describing domains
- Dual CTAs: primary (gold bg) + secondary (outlined)
- Animated gold line patterns as decorative background
- Subtle gradient overlay (navy to transparent)
- Parallax text effects on scroll

### Domain Cards (4 Cards)
Hoverable cards with:
- Icon/graphic at top
- Title (2xl, Poppins)
- Brief description
- Subtle gold border on hover
- Micro lift animation (translateY -2)
- White background with soft shadow

### Timeline Component
Vertical timeline with:
- Year markers on left (gold circles)
- Gold connecting line
- Content cards alternating or stacked
- Fade-in on scroll
- Milestone titles, descriptions, metrics

### Project Cards
Grid layout with:
- Featured image placeholder
- Project title (xl, semibold)
- Tech stack icons row
- Short description
- Dual links: "Live" + "GitHub"
- Gold accent on hover state
- Rounded corners (lg)

### Tech Stack Showcase
Icon grid with:
- Technology logos/icons
- Labels beneath
- Grouped by category (Frontend, Backend, Tools)
- Subtle hover scale animation
- Light background panels per group

### Testimonial Carousel
Rotating testimonials with:
- Quote text (lg, italic)
- Author name + title
- Author photo (rounded-full)
- Navigation dots (gold active state)
- Auto-rotate with manual controls

### Client Logo Grid
Simple grid layout:
- Grayscale logos
- Uniform sizing
- Color on hover
- grid-cols-3 md:grid-cols-4 lg:grid-cols-6
- Centered alignment

### Contact Section
Two-column layout (desktop):
- Left: Contact form (name, email, message)
- Right: Contact info + social links
- Gold submit button
- Navy background section

### Footer
Multi-column layout:
- Quick links
- Social icons
- Resume download
- Copyright
- Navy background, white text

## Animations (Framer Motion)
- **Scroll Animations**: Fade-in with slight translateY for sections
- **Hover States**: Subtle scale (1.02-1.05) and shadow increase
- **Card Interactions**: Lift effect with gold border glow
- **Timeline**: Progressive reveal on scroll
- **Hero**: Parallax text layers at different speeds
- **Page Transitions**: Smooth fade between routes
- **Cursor**: Custom gold glow trail (optional enhancement)
- **Principle**: Purposeful, smooth, luxury feel - avoid excessive motion

## Images
### Hero Section
Full-width background image with overlay gradient (navy to transparent). Professional portrait or abstract luxury pattern. Ensure text remains legible with proper contrast treatment.

### Project Cards
Portfolio work screenshots/mockups. 16:9 aspect ratio, high quality. Use placeholder images initially with proper aspect ratio containers.

### About Section
Professional headshot, circular or square with rounded corners. Position on left or right with text wrapping.

### Blog Posts
Featured images for each post, 2:1 aspect ratio for card previews.

### Real Estate/Community Pages
Property photos, event photos, team photos as appropriate. Maintain consistent image treatment with subtle overlays.

## Page-Specific Notes

### Home (One-Pager)
Sections flow: Hero → Domains → Featured Projects → Career Timeline → Metrics Dashboard → Blog Preview → Testimonials → Contact

### Real Estate Page
Header with property grid, investment strategy breakdown, mid-term/long-term rental sections, CTA to LVEN Estates

### Community Page
Mission statement hero, photo gallery grid, upcoming events cards, CTA to MenOnMission.org

### Blog
Card grid index with filters, dynamic routing to individual posts, frontmatter metadata display, share buttons, related posts

## Responsive Behavior
- Mobile-first approach
- Hamburger menu on mobile
- Stack columns to single column
- Reduce spacing (py-12 vs py-20)
- Scale typography down appropriately
- Maintain touch-friendly targets (44px minimum)

## Accessibility
- Semantic HTML throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus states with gold outline
- Sufficient color contrast ratios
- Alt text for all images