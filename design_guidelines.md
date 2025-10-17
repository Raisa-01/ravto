# Ravto Software Agency - Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from modern tech agencies (Vercel, Stripe, Linear) with sci-fi enhancement. Youth-focused, animation-rich experience that balances minimal aesthetics with visual impact.

## Core Design Elements

### A. Color Palette

**Light Theme Foundation**:
- **Primary Background**: 0 0% 98% (off-white base)
- **Surface**: 0 0% 100% (pure white cards/sections)
- **Primary Brand**: 220 90% 56% (vibrant electric blue)
- **Accent Gradient**: Linear gradient from 280 85% 60% (purple) to 200 95% 55% (cyan)
- **Text Primary**: 220 20% 15% (near black with blue tint)
- **Text Secondary**: 220 15% 45% (muted gray-blue)
- **Border/Divider**: 220 15% 90% (subtle light gray)

**Sci-Fi Enhancement Colors**:
- **Glow Effect**: 200 100% 60% with blur for neon accents
- **Particle Colors**: Gradient mesh using primary + accent colors at 20% opacity

### B. Typography

**Font Stack** (via Google Fonts):
- **Primary (Headings)**: 'Space Grotesk' - geometric, modern, sci-fi feel
- **Secondary (Body)**: 'Inter' - clean, highly legible
- **Accent (Special elements)**: 'JetBrains Mono' - monospace for tech details

**Scale**:
- Hero Headline: text-7xl md:text-8xl (72-96px), font-bold, tracking-tight
- Section Titles: text-4xl md:text-5xl, font-bold
- Service Cards: text-2xl, font-semibold
- Body Text: text-base md:text-lg, leading-relaxed
- CTA Buttons: text-lg, font-medium, letter-spacing wide

### C. Layout System

**Spacing Primitives**: Tailwind units of 4, 8, 12, 16, 20, 24 (consistent rhythm)
- Section padding: py-20 md:py-32
- Card padding: p-8
- Element gaps: gap-8 to gap-16
- Container: max-w-7xl mx-auto px-6

**Grid System**:
- Hero: Single column, centered, max-w-4xl
- Services: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Features: 2-column splits for visual variety

### D. Component Library

**Navigation**:
- Fixed header with glass-morphism backdrop-blur-xl bg-white/80
- Logo left, navigation center, CTA button right
- Sticky on scroll with subtle shadow animation

**Hero Section**:
- Animated particle background (WebGL or Canvas-based, subtle geometric shapes)
- Large Ravto logo with subtle glow effect
- Powerful tagline with gradient text effect
- "Let's Build Together" CTA - large, primary color, subtle pulse animation
- Floating geometric shapes with parallax on scroll (3-5 elements)

**Service Cards**:
- White cards with subtle border hover effect
- Icon with gradient background circle
- Hover: lift animation (translateY(-8px)), glow shadow effect
- Each card shows service name, brief description, and "Learn More" link

**Interactive Elements**:
- Magnetic cursor effect on CTAs (elements slightly follow cursor)
- Ripple effect on button clicks
- Smooth page transitions with fade + slide combinations
- Scroll-triggered animations: fade-in-up for cards, scale for images

**Additional Sections**:
- Process/Workflow: Animated timeline with connected nodes
- Why Choose Us: 3-column feature grid with animated icons
- Contact CTA: Full-width section with gradient background

### E. Animation Strategy

**Hero Animations**:
- Particle system with slow drift (2-3s cycle)
- Logo entrance: scale + fade (800ms cubic-bezier)
- Tagline: stagger character reveal (1.2s total)
- CTA: delay entrance with bounce effect

**Scroll Animations** (using Intersection Observer):
- Service cards: cascade entrance with 100ms stagger
- Section reveals: fade + slide up (600ms ease-out)
- Parallax: Hero elements move at 0.5x scroll speed

**Hover Interactions**:
- Service cards: lift + glow shadow + scale icon (300ms)
- Buttons: scale(1.05) + brightness increase
- Links: gradient underline animation

**Micro-interactions**:
- Form inputs: floating labels, focus glow
- Checkboxes/toggles: smooth fill animations
- Loading states: skeleton screens with shimmer

## Images

**Hero Section**: 
- Sci-fi inspired abstract geometric illustration (3D rendered shapes, holographic feel)
- Positioned as subtle background layer with 40% opacity
- Alternatively: Animated gradient mesh as dynamic background

**Service Icons**: 
- Modern line icons with gradient fills
- Consider: Heroicons with custom gradient overlays

**Decorative Elements**:
- Floating geometric shapes (cubes, pyramids, rings) throughout sections
- Grid patterns with glow effects in section backgrounds
- Subtle noise texture overlay (5% opacity) for depth

## Key Design Principles

1. **Sci-Fi Minimalism**: Clean layouts with futuristic accents, not cluttered
2. **Animation Hierarchy**: Hero and CTAs get most movement, content stays readable
3. **Light & Airy**: Generous whitespace despite light theme, avoid visual heaviness
4. **Youth Appeal**: Bold gradients, smooth animations, modern geometric shapes
5. **Performance**: Optimize animations to run at 60fps, use CSS transforms over properties