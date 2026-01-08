# Handoff: Daniel Martin — personal site

## Overview

A small, single-page personal website for Daniel Martin. The site links elegantly to past works across physics, game design, startups, and philosophy. It is intended to be **memorable, restrained, and easy to extend with a blog in the future**.

The aesthetic reference is [nat.org](https://nat.org) — pure black-on-white, plain HTML, prose-style. The single departure from that reference is **small clickable thumbnails next to each project**, since most of Daniel's projects have a visual artifact.

## About the design files

The files in this bundle are **design references created in HTML** — a working prototype showing intended look and behavior, **not production code to copy directly**.

The prototype currently loads React + Babel from CDN to render JSX components on the canvas. **You should not ship this stack.** This is a static text-heavy site in the spirit of nat.org; the implementation should be **plain semantic HTML and a single short CSS file**, no JS framework required. The React structure in the prototype just exists because the design tool renders previews that way.

Choose a framework appropriate to the project. Recommended:

- **Plain static HTML/CSS** hosted on GitHub Pages, Cloudflare Pages, or similar. This best matches the aesthetic and minimises maintenance.
- **11ty / Astro / Hugo** if a blog will be added soon — pick whichever the developer is comfortable with. The site is small enough that the choice is reversible.

Avoid React/Next.js/Vue for this; it's overkill and works against the chosen aesthetic.

## Fidelity

**High-fidelity.** Colors, typography, spacing, layout, and link behavior are all final. Recreate pixel-perfectly using the chosen framework. The placeholder thumbnails are *intentional* — Daniel will supply real images later.

## Screens / Views

The site is a single page.

### Personal site (root `/`)

**Purpose:** A static homepage someone can land on after meeting Daniel at a conference, or after seeing one of his projects referenced elsewhere. They should see a coherent variety of work and be invited to email.

**Layout:**

- Single column, centered.
- Max content width **640px**.
- Outer padding: `64px 56px 80px` (top, sides, bottom).
- Background: `#ffffff`. Foreground: `#000000`. No accent colors.

**Structure (top to bottom):**

1. `<h1>` — "Daniel Martin"
2. Two intro paragraphs (no tagline — explicit user request).
3. Five sections (in order): **Startups, Physics, Game Design, Philosophy, Small things**.
4. **Contact** section (also rendered as an `<h2>` heading + paragraph of inline links).

Each section is structured as:

- `<h2>` section heading.
- A list of **project rows**.

Each project row is a flex row:

- **Left (flex: 1):** project text — a link styled as plain underlined black text, followed by an em-dash (` — `), followed by a caption. The caption may contain inline `<a>` links to additional URLs (e.g. arXiv papers, the Factorio mod page, the foundrygg blog post). The caption inline links use the same styling as the title link.
- **Right (flex: 0):** a clickable 80×56 thumbnail wrapped in an `<a>` to the same destination as the title link. The whole thumbnail is the clickable area.
- `gap: 14px` between text and thumbnail.
- `margin-bottom: 14px` between rows.

### Components

#### Heading 1 (name)

- Font: Times New Roman / Times / serif
- Size: 28px
- Weight: 700
- Letter-spacing: -0.01em
- Margin: `0 0 24px`

#### Heading 2 (section title)

- Font: Times New Roman / Times / serif
- Size: 17px (same as body)
- Weight: 700
- Margin: `40px 0 8px`

#### Body paragraph (intro + contact)

- Font: Times New Roman / Times / serif
- Size: 17px
- Line-height: 1.55
- Margin-bottom: 14px
- Color: `#000`

#### Project row

- `display: flex; gap: 14px; align-items: flex-start; margin-bottom: 14px`

#### Project title (and inline caption) link

- Color: `#000`
- `text-decoration: underline` by default
- **Hover state:** `background: #000; color: #fff; text-decoration: none` — this is a deliberate "highlight the link" hover, mimicking a few classic personal-site conventions. Implement with `a:hover` only.

#### Thumbnail

- **Currently a striped SVG placeholder** with the project id as a monospace label.
- Final implementation should accept a real image (`<img>`) and fall back to the placeholder if missing.
- Size: 80×56 px. Maintain a consistent aspect ratio across all thumbnails (5:3.5, roughly).
- Wrap in an `<a>` so the whole image is clickable.
- No border-radius. A 1px stroke at `rgba(0,0,0,0.35)` if showing the placeholder.

#### Contact paragraph

- Same body styling.
- Links separated by ` · ` (middle dot, with single spaces).
- Order: Email, Twitter, GitHub, LinkedIn.

## Interactions & Behavior

- All project links are standard `<a href="...">` — no JS handlers. Clicking opens the destination.
- **Hover state on all links:** invert (white text on black background, no underline).
- **No animations**, no scroll behavior, no responsive breakpoints needed beyond what plain CSS gives you. The max-width: 640px + side padding does the work.
- On narrow screens (< ~600px), allow the side padding to shrink (e.g. `padding: 48px 24px`) via a single media query if desired.

## State Management

None. Static site.

## Design tokens

```
/* Color */
--fg: #000000;
--bg: #ffffff;
--placeholder-stroke: rgba(0, 0, 0, 0.35);
--placeholder-stripe: rgba(0, 0, 0, 0.08);
--placeholder-label: rgba(0, 0, 0, 0.55);

/* Type */
--font-body: "Times New Roman", Times, serif;
--font-mono: ui-monospace, SFMono-Regular, Menlo, monospace;  /* only used inside placeholder thumbs */

--size-body: 17px;
--size-h1: 28px;
--line-body: 1.55;

/* Spacing */
--page-max-width: 640px;
--page-padding-y: 64px 80px;  /* top / bottom */
--page-padding-x: 56px;
--section-gap: 40px;          /* h2 margin-top */
--row-gap: 14px;              /* between project rows AND between text and thumb */
--thumb-w: 80px;
--thumb-h: 56px;
```

## Content

All site content lives in `data.js` in the prototype. The structure should be ported to whatever data source the chosen framework prefers (a YAML/JSON file, frontmatter, etc.). Schema:

```ts
type Site = {
  name: string;                  // "Daniel Martin"
  intro: string[];               // paragraphs, plain text
  contact: { label: string; href: string }[];
  sections: {
    id: string;
    title: string;
    items: {
      title: string;
      href: string;              // primary link
      thumb: string;             // image filename or placeholder id
      caption: string;           // may contain inline <a> HTML
    }[];
  }[];
};
```

**Sections, in order:** Startups, Physics, Game Design, Philosophy, Small things.

**Content has placeholder URLs (`#` and `https://arxiv.org/`) in many places.** Daniel will replace these with real URLs himself — keep the schema, but don't hardcode the placeholders.

## Assets

- **No real images yet.** All thumbnails are striped SVG placeholders labelled with the project id. Daniel will provide images later. The thumbnail component should accept either a real image path or fall back to the placeholder.
- **No icons, no logos, no fonts to ship.** The body font is the system Times — no Google Fonts needed for the V1 design.

## Future extensions to keep in mind

The site will grow a blog. Plan for:

- A `/blog/` (or `/posts/`) index page using the same visual language.
- Individual post pages — black-on-white prose, same 640px column.
- An RSS feed at `/feed.xml`.
- The Foundry "2D Terrain Generation" essay currently linked under Game Design will eventually move from foundrygg.com to this blog; the link in `data.js` should be easy to update.

## Files in this bundle

- `Personal Site.html` — the prototype entry point (React + Babel; **do not ship as-is**).
- `data.js` — the canonical content data, schema and copy. Port this to the target framework's data source.
- `variations/v1.jsx` — the chosen layout (V1, "Plain serif"). Shows styles, structure, hover behavior. **Reference, not production.**
- `thumbnails.jsx` — the placeholder thumbnail component. Re-implement as a small `<img>` with a fallback SVG.
- `uploads/plan-for-site.md` — Daniel's original brief and project list, for context.

## Acceptance checklist

- [ ] Plain HTML/CSS, no JS framework, no client-side JS unless strictly needed.
- [ ] Black-on-white, system serif (Times), 640px column, 17px body.
- [ ] Five sections in the order listed, with the right items in each.
- [ ] Each project row is text-left, thumbnail-right, both clickable.
- [ ] Caption supports inline `<a>` links.
- [ ] Hover state: black background, white text, no underline.
- [ ] Thumbnails accept a real image or fall back to a placeholder.
- [ ] Mobile-readable below ~600px (tighter padding is fine).
- [ ] Deployable as a static site (GitHub Pages, Cloudflare Pages, Vercel static, etc.).
