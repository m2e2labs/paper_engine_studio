# CLAUDE.md

This repo builds **books**: one concept per page, on a strict B5 canvas (176 x 250 mm),
where the same CSS drives screen and print. Read `engine/AUTHORING.md` for how the canvas
works and `engine/tools/README.md` for the commands.

When asked to write or lay out a page, use the **`block` skill** in
`.claude/skills/block/`. It owns the voice, the diagram system, and the design rules.

## Hard invariants

- **`book.html` is GENERATED. Never hand-edit it.** The source is the interior file,
  `books/<slug>/<slug>.html`, plus `books/<slug>/book.json`. Every build overwrites
  `book.html`.
- **Books live exactly 2 folders deep**: `books/<slug>/`, because every page links
  `../../engine/…`. A wrong depth renders an unstyled page that can still pass a naive
  check, which is why `check.mjs` tests for it.
- **The same CSS drives screen and print.** Never add an `@media print` rule that changes
  a size, a font, or an image. That single thing is what makes an exported PDF stop
  matching the screen.
- **One concept per page.** One `<section class="sheet bb">`. If it needs two pages, it
  is two concepts.
- **Never let a page overflow.** `check.mjs` must read `0 mm` on every page. If it does
  not, cut words. Do NOT shrink a diagram's `viewBox` to make it fit: that silently clips
  the bottom of the drawing and hides the problem instead of solving it.
- **Colour is a role, not decoration**, and the roles are the same on every page of every
  book: indigo is the mechanism being taught, teal the good outcome, red the threat or
  mistake, amber the thing worth protecting, neutral the reader's own app or self.
- **Diagrams are inline SVG, never generated images.** An image model garbles labels and
  the result cannot be edited. Photographs are for physical subjects only.
- **Never invent a fact, a number, a study, or a personal story** for a page. If the
  author did not say it, do not write it. What the author did say lives in
  `books/<slug>/FACTS.md`, each fact with its source, and each entry in `blocks.md` names
  the fact ids its page may state. Need a fact that is not there? Ask the author, add it
  to `FACTS.md` with its source, cite it, then write the sentence. Never invent a source
  either, and never add a fact just to make preflight pass.

## The loop, after every edit

```bash
node engine/tools/build.mjs      books/<slug>            # assemble book.html
node engine/tools/check.mjs      books/<slug>/book.html  # MUST be 0 mm, no broken images
node engine/tools/shot.mjs       books/<slug>/book.html  # then READ the PNGs
```

`check.mjs` only proves a page FITS. It cannot see overlap, a clipped SVG label, a photo
cropped through its subject, or a diagram that says the wrong thing. **Always run
`shot.mjs` and actually look at the images.** A page is not done until you have.

## Shipping a book

The loop above is for writing. To ship, use the production tools (`docs/PRODUCTION.md`):

```bash
node engine/tools/preflight.mjs books/<slug>                     # the release gate, 20 checks
node engine/tools/release.mjs   books/<slug> --editions all --bleed 3 --epub
npm run studio                                                   # the same, as a local web UI
```

- **`books/<slug>/workflow.json` is the review record.** A person approves pages in the
  Studio. Never mark a page approved yourself, and never edit that file to get a release
  through. An approval is pinned to the page's content hash, so editing an approved page
  correctly puts it back in the queue.
- There are two EPUBs, on purpose. `epub.mjs` / `release.mjs --epub` writes a FIXED-LAYOUT
  EPUB, the PDF's twin, page for page. `build-reader.mjs` writes a REFLOWABLE `book.epub`
  and `reader.html` for phones. Do not turn one into the other.
- `engine/book.schema.json` describes `book.json`, including the `publishing` block (listing
  data: description, keywords, categories, ISBNs, price). Add a key to the schema before
  you use it, or preflight reports it as unknown. `lib/schema.mjs` implements only the
  JSON Schema keywords that file uses and throws on any other, on purpose.
- **Never invent an ISBN, a price or a publication date.** Those come from the author.
- **Front and back matter lives in `book.json` under `matter`** (`front` and `back`: a
  `dedication`, an `epigraph`, `prose`, a `list`, `sources` or `glossary`). `build.mjs` runs
  `build-book.mjs` and then adds those sheets, and rewrites the contents and index numbers
  from where every sheet really ended up. Always build with `build.mjs`; preflight fails a
  book with matter that was built without it. A dedication, a preface, a biography and an
  "also by" list are the author's words: **never write one the author did not give you.**
  The `sources` page is generated from `FACTS.md`, so there is nothing to write.
- **`books/<slug>/GLOSSARY.md` is the author's list of terms** (`## Term`, a `Means` line, an
  optional `Also` line). A `glossary` matter page prints the terms the pages actually use.
  Which pages use a term is read from the pages, never written down. A definition is the
  author's meaning: ask before adding a term, as with a fact.
- **To point at another page, write `<span class="xref">Exact page title</span>`** (or
  `data-to="Exact page title"` when the words differ). Never type a page number: `build.mjs`
  prints the real one, and leaves plain words in an edition that does not hold the target.
  The number adds a few characters to the line, so run `check.mjs` after adding one.
- **A book's own colours live in `book.json`**: `accent`, `accentStrong`, and `theme` (`signal`,
  `danger`, `warn`, `ink`, `muted`, `line`, `surface`, `card`). **Pages and diagrams are still
  written in the studio palette, always**, exactly as the diagram system says; `build.mjs`
  repaints the finished book, tints included. Never hand-write a book's theme colours into a
  page or an SVG, and never add a per-book stylesheet. A theme changes what a role looks
  like, never what it means.
- `dist/`, `.studio/` and `book-<edition>.html` are regenerable and gitignored.
- Shared code for these tools lives in `engine/tools/lib/`. `build-book.mjs`, `check.mjs`
  and `shot.mjs` are untouched upstream files (`build.mjs` wraps the first); keep them that way so upstream still merges.

## Adding a page

1. Write it into `books/<slug>/<slug>.html` as one `<section class="sheet bb">`. Copy
   `.claude/skills/block/references/example-page.html`.
2. Add its title to the right part in `books/<slug>/book.json`. A page that is not listed
   there is not in the book. The builder will tell you if you forget.
3. Run the loop above.

The builder matches pages to `book.json` **by their `<h1 class="title">`**, so titles
have to be unique within a book, and reordering the book is a JSON edit rather than HTML
surgery.

## Images

`engine/tools/gen-image.mjs` defaults to the **agy** provider (Antigravity CLI, signed
into a Google account, no API key, no per-image charge). `--provider gemini` is the
metered fallback and needs `GEMINI_API_KEY` in `.env`.

`books/<slug>/images.json` is the image manifest: one shared `style` sentence for the book,
and per file its `source`, its licence, and the `subject` it is generated from. Generate
from it with `node engine/tools/images.mjs books/<slug> --generate <name>.jpg`, never for
a file nobody named. **Never guess a licence or a credit**: rights are the author's to
state. Which page uses a picture, and its alt text, are read from the pages, not stored.

The style must forbid text in the image and name the light, the angle and the background.
See `.claude/skills/block/references/photo-blocks.md`.

## Notes

- Fonts are self-hosted in `engine/fonts/`, so builds and PDF exports are deterministic
  and work offline. Do not switch to a font CDN.
- `*.pdf` and `page*.png` are gitignored and regenerable.
- `.env` is optional. The engine builds books with no keys at all.
