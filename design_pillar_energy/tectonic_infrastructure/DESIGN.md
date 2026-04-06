# Design System Specification: Pillar Energy

## 1. Overview & Creative North Star
**Creative North Star: "The Architectural Monolith"**

This design system is built on the principles of engineering precision, structural integrity, and industrial reliability. We are moving away from the "disposable" feel of modern SaaS templates to embrace a visual language that feels as permanent as a steel beam. 

To achieve this, we utilize **Architectural Brutalism**: a style defined by raw, honest materials, sharp 90-degree geometry, and a rigid adherence to the grid. We break the "web template" feel by using extreme contrast—massive, authoritative typography set against expansive, clinical whitespace. This is not a "marketing" site; it is a digital manifestation of a power plant: high-performance, compliant, and immovable.

---

## 2. Colors & Tonal Logic
The palette is rooted in industrial materials: charcoal slate, high-voltage blue, and sterile whites.

### The "No-Line" Rule
Traditional UI relies on 1px borders to separate content. In this system, **borders are prohibited for sectioning.** Structural boundaries must be defined solely through background color shifts or tonal transitions. Use `surface-container-low` against `surface` to denote a change in context. This creates a "machined" look where components fit together like interlocking parts rather than being "outlined" on a page.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers. Use the following hierarchy to create depth without shadows:
*   **Base Layer:** `surface` (#f7f9ff) for the primary canvas.
*   **Secondary Context:** `surface-container-low` (#edf4ff) for sidebars or secondary content.
*   **Interactive Components:** `surface-container-highest` (#d1e4fb) for cards or active areas.
*   **The "Glass & Gradient" Rule:** While the brand is industrial, we avoid being "flat." Use a subtle linear gradient on primary CTAs (from `primary` #006193 to `primary_container` #207ab3) at a 135-degree angle to mimic the sheen of brushed metal or solar glass.

---

## 3. Typography: The Voice of Authority
Typography is our primary tool for conveying "Reliability." We use a high-contrast scale to ensure an editorial, premium feel.

*   **Display & Headlines (Work Sans):** Chosen for its geometric stability and "ink trap" qualities that mirror architectural blueprints.
    *   *Display-LG (3.5rem):* Reserved for hero statements. Use tight letter-spacing (-0.02em).
    *   *Headline-MD (1.75rem):* Used for section headers. Always Uppercase for a "stamped" industrial feel.
*   **Body & Labels (Inter):** A high-legibility typeface for technical documentation and data.
    *   *Body-MD (0.875rem):* The workhorse for all technical descriptions.
    *   *Label-SM (0.6875rem):* Used for data tags and metadata. Letter-spacing should be increased (+0.05em) for clarity in small sizes.

---

## 4. Elevation & Depth
In an engineering-focused system, "depth" represents physical weight. We avoid "floating" elements unless they are critical alerts.

*   **Tonal Layering:** Instead of shadows, stack containers. Place a `surface_container_lowest` (#ffffff) card inside a `surface_container` (#e3efff) wrapper. This creates a "recessed" or "inset" look, suggestive of high-precision machining.
*   **Ambient Shadows:** If a floating element (like a modal) is required, use a high-diffuse, low-opacity shadow: `box-shadow: 0 20px 40px rgba(9, 29, 46, 0.06)`. The color is derived from `on_surface` to keep the shadow feeling integrated with the charcoal palette.
*   **The "Ghost Border" Fallback:** If a container requires definition against an identical background, use `outline_variant` at 15% opacity. Never use 100% opaque borders.
*   **Sharpness Scale:** All `borderRadius` tokens are set to **0px**. No exceptions. Every corner must be a hard 90-degree angle to reinforce the "Pillar" identity.

---

## 5. Components

### Buttons: Industrial Switches
*   **Primary:** Background: `primary` (#006193); Text: `on_primary` (#ffffff). Shape: Rectangular (0px radius). Hover state: Shift to `primary_container`.
*   **Secondary:** Background: `transparent`; Border: 2px solid `primary`. Use for secondary actions.
*   **Tertiary:** Text only, bolded `primary`, with a 1px underline that disappears on hover.

### Cards & Data Lists
*   **Forbid Divider Lines:** Separate list items using a 16px vertical gap and a subtle background toggle between `surface` and `surface_container_low`.
*   **Header-Alignment:** Every card must lead with a `label-md` category tag in `tertiary` (#7f5300) to provide a "warning/caution" industrial accent.

### Input Fields: Precision Entries
*   **Style:** Underline only or "Block Fill." Use `surface_container_high` as the field background.
*   **Focus State:** The bottom border animates from `outline` to a 2px thick `primary` blue.
*   **Error:** Use `error` (#ba1a1a) for text and `error_container` as a subtle 5% opacity background fill for the entire field.

### Signature Component: The "Data Pillar"
A custom vertical progress indicator or stat block that uses a thick vertical bar of `primary` blue to the left of the content. This reinforces the "Pillar" brand name visually throughout the interface.

---

## 6. Do’s and Don’ts

### Do:
*   **DO** use extreme whitespace. If a section feels "tight," double the padding.
*   **DO** align everything to a strict 12-column grid. Components should span specific column counts (e.g., 4, 6, or 8).
*   **DO** use "Technical Blue" (`primary`) sparingly for emphasis; the majority of the UI should feel "Slate and White."

### Don't:
*   **DON'T** use rounded corners. Even a 2px radius breaks the industrial aesthetic.
*   **DON'T** use icons with "playful" or rounded styles. Use sharp, thin-stroke icons (1px or 1.5px stroke weight).
*   **DON'T** use "marketing fluff" animations. Transitions should be fast (150ms-200ms) and linear or "ease-out" to feel like mechanical switches.