---
name: Senior FullStack Engineering Portfolio
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#3e4850'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#6e7881'
  outline-variant: '#bec8d2'
  surface-tint: '#006591'
  primary: '#006591'
  on-primary: '#ffffff'
  primary-container: '#0ea5e9'
  on-primary-container: '#003751'
  inverse-primary: '#89ceff'
  secondary: '#006686'
  on-secondary: '#ffffff'
  secondary-container: '#7ed4fd'
  on-secondary-container: '#005b78'
  tertiary: '#665f3d'
  on-tertiary: '#ffffff'
  tertiary-container: '#b5ac84'
  on-tertiary-container: '#464021'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#c9e6ff'
  primary-fixed-dim: '#89ceff'
  on-primary-fixed: '#001e2f'
  on-primary-fixed-variant: '#004c6e'
  secondary-fixed: '#c0e8ff'
  secondary-fixed-dim: '#7bd1fa'
  on-secondary-fixed: '#001e2b'
  on-secondary-fixed-variant: '#004d66'
  tertiary-fixed: '#ede3b8'
  tertiary-fixed-dim: '#d1c79d'
  on-tertiary-fixed: '#201c02'
  on-tertiary-fixed-variant: '#4d4727'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display-lg:
    fontFamily: Geist
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Geist
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Geist
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  section-gap: 80px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Brand & Style
The brand personality centers on the intersection of high-velocity engineering and serene, architectural clarity. It targets sophisticated hiring managers and technical founders who value precision as much as executive presence. The design style is a hybrid of **Minimalism** and **Glassmorphism**, emphasizing structural integrity through generous whitespace and premium "frosted" finishes.

The UI should evoke an emotional response of "calm competence." By utilizing a palette inspired by coastal horizons, the interface reduces cognitive load, suggesting that the engineer can navigate complex AI and Full Stack architectures with clarity and ease. The aesthetic is high-performance, yet approachable and human-centric.

## Colors
The palette is rooted in a "Clear Sky" logic. The **Primary Sky Blue** (#0ea5e9) is reserved for interactive elements, primary actions, and brand highlights, ensuring high visibility and a sense of "active" technology. The **Secondary Soft Blue** (#7dd3fc) serves as a supporting tint for backgrounds, accents, and subtle gradients.

**Sandy Beige** (#fef3c7) acts as the warmth in the system, used sparingly for specific highlights or as a very soft background tone to prevent the interface from feeling clinical. The **Neutral** foundation is a crisp, cool white/gray sequence (#f8fafc) that ensures the engineering content remains the focal point. Use white surfaces for the primary "glass" cards to maintain the refreshing, airy atmosphere.

## Typography
This design system utilizes **Geist** exclusively to maintain a highly technical, "developer-first" aesthetic that feels precise and modern. The typography strategy relies on tight letter-spacing for headlines to create a compact, professional look, while body text is given ample line-height to ensure readability of technical project descriptions.

- **Headlines:** Use Bold and Semibold weights to establish a clear hierarchy.
- **Body:** Stick to Regular weight for long-form content to maximize the "airiness" of the coastal theme.
- **Monospaced Accents:** For code snippets or AI model parameters, utilize the built-in mono variants of Geist to reinforce the engineering pedigree.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain a gallery-like feel, centering content with generous outer margins. A 12-column grid is used for project displays, while a more focused 8-column grid is used for technical blog posts or case studies.

Spacing is intentionally large ("Section-Gap") to simulate the openness of a coastal horizon. 
- **Mobile:** Transition to a single-column fluid layout with 16px side margins. 
- **Stacking:** Use the 8px base unit for all component internals. Elements should never feel crowded; when in doubt, increase padding by one scale unit.

## Elevation & Depth
Depth is achieved through **Glassmorphism** rather than traditional heavy shadows. Surfaces should feel like semi-transparent panes of glass resting on a soft, atmospheric background.

- **Glass Layers:** Use a background blur (12px to 20px) combined with a highly transparent white fill (e.g., `rgba(255, 255, 255, 0.7)`).
- **Edge Definition:** Instead of shadows, use a 1px solid border with very low opacity (`rgba(255, 255, 255, 0.4)`) to catch light, mimicking the edge of a glass pane.
- **Ambient Glow:** For the primary CTA or active cards, use a very soft, large-radius shadow tinted with the primary sky blue (`#0ea5e9` at 10% opacity) to suggest a subtle glow.

## Shapes
The shape language is **Rounded**, reflecting the soft, weathered edges of coastal stones and organic forms. This softens the "hard" nature of AI and code, making the technology feel integrated with the user's environment.

- **Standard Elements:** 0.5rem (8px) for input fields and small buttons.
- **Cards/Containers:** 1rem (16px) for project cards and main content areas to emphasize the premium glass effect.
- **Interactive Pill:** Use 3rem (full rounding) for tags, chips, and the primary "Contact" button to provide a distinct tactile contrast to the rectangular grid.

## Components
- **Buttons:** Primary buttons should be a solid Sky Blue with white text. Secondary buttons should use the glassmorphic style (transparent background, blur, thin border).
- **Project Cards:** Large glass panes with a subtle "inner glow" border. Images within cards should have a soft 8px corner radius.
- **Chips/Tags:** Used for tech stacks (e.g., "React", "PyTorch"). These should be semi-transparent Sandy Beige with dark-amber text to provide a warm "pop" against the blue/white background.
- **Input Fields:** Minimalist with only a bottom border or a very faint glass background. Focus states should trigger a soft blue glow.
- **Navigation:** A floating glass-dock at the top or bottom of the screen, utilizing high backdrop blur to keep content readable as the user scrolls.
- **Code Blocks:** Dark-themed glass containers to provide high-contrast "moments" that ground the light UI in technical reality.