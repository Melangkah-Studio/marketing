# Design QA

Source visual truth: https://scrollingcards.framer.website/

Implementation: http://localhost:4323/#section-6

Source screenshot path: Codex in-app browser capture, retained inline with this task.

Implementation screenshot path: Codex in-app browser capture, retained inline with this task.

Viewport: desktop 1280 × 720 CSS px; mobile 390 × 844 CSS px; device scale factor 1. Source and implementation were compared at CSS viewport scale without density conversion.

State: the sticky image frame is crossing the boundary between two content rows, with the next image partially revealed.

## Full-view comparison evidence

Both versions keep one image frame fixed over stacked rows and reveal the next image from the bottom upward as its row crosses the frame. The implementation intentionally retains the site's existing Geist typography, warm neutral palette, copy, image aspect ratio, and responsive content density instead of copying the reference site's visual identity.

## Focused region comparison evidence

The transition boundary, frame crop, stacking order, row alignment, and sticky release at the end of the section were checked directly at desktop and mobile sizes. No additional focused crop was needed because the image frame and adjacent text remain legible in the full viewport captures.

## Findings

No actionable P0, P1, or P2 differences remain for the requested animation behavior.

- Fonts and typography: existing project typography and hierarchy are preserved; no clipping or unintended wrapping was found.
- Spacing and layout rhythm: the image frame matches one row's height, stays centered on desktop and right-aligned on mobile, and renders beneath the white dividers.
- Colors and visual tokens: the existing white and warm neutral section colors are unchanged.
- Image quality and asset fidelity: the four existing process images are compiled through Astro image optimization and use a consistent crop.
- Copy and content: all existing process titles and descriptions are retained.
- Accessibility: the animated image stack is decorative, static images replace it when reduced motion is requested, and the content remains semantic.

## Comparison history

- Initial finding [P1]: the sticky frame scrolled away because the page wrapper used `overflow: hidden`.
- Fix: changed the wrapper to horizontal clipping only, preserving overflow protection without creating a non-scrolling sticky container.
- Post-fix evidence: desktop and mobile browser captures show the frame remaining fixed while successive images reveal across row boundaries.
- Follow-up finding [P1]: the frame height differed from the row height, crossed above the divider, and could exceed the final row boundary.
- Fix: made the frame inherit the row height, restored explicit foreground dividers, and replaced the negative-margin overlay with a shared grid area.
- Post-fix evidence: desktop and mobile captures show equal frame and row heights, uninterrupted white dividers, and the final image ending before the contact section.

## Implementation checklist

- [x] Sticky frame remains constrained to the process section.
- [x] Reveal progress follows scroll position.
- [x] Desktop and mobile layouts preserve readable copy.
- [x] Reduced-motion users receive static images.
- [x] Browser console has no warnings or errors.

final result: passed
