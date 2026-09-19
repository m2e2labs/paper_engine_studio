# Paper Engine Studio — implementation handoff

**Status:** installed, verified, and extended with screen-reader and EPUB exports.

This document records the work completed in this checkout so the project can be moved to
`m2e2labs/paper_engine_studio` without relying on chat history.

## Installed baseline

- Source: `hassancs91/paper-engine`, commit `58065db` (`main`).
- Runtime verified: Node `24.20.0`, npm `11.19.0`.
- Installed locked dependencies with `npm ci`.
- Installed Playwright Chromium, used by the existing page checker and PDF exporter.

The original engine remains a file-and-command workflow. Its authoring source is the
interior HTML file plus `book.json`; `book.html` is generated and must not be edited.

## Verification completed

The supplied showcase was built and checked:

```bash
npm run build -- books/showcase
npm run check -- books/showcase/book.html
```

Result: 17 pages, **no overflow** and **no broken images**.

Chromium needs normal machine permissions in this hosted environment; the check passed
when run with those permissions. This is an environment restriction, not a Paper Engine
layout failure.

## Reader and ebook extension

Added `engine/tools/build-reader.mjs` and exposed it as:

```bash
npm run reader -- books/<slug>
npm run reader -- books/<slug> --edition free
```

For a book, the command produces two generated outputs beside its source files:

| Output | Purpose |
| --- | --- |
| `reader.html` | Offline, responsive browser reader with contents navigation, text-size controls, and a dark theme. |
| `book.epub` | Reflowable EPUB 3 for compatible ebook-reading apps. |

Edition builds use `reader-<edition>.html` and `book-<edition>.epub`. The exporter reads
the existing parts and editions in `book.json`, reuses the authored pages, prefixes inline
SVG IDs so diagrams do not collide in the single-document web reader, and bundles local
image assets into the EPUB. It has no new runtime dependency.

The original PDF pipeline is unchanged. PDF is the fixed B5 print edition; reader and EPUB
are deliberately reflowable so font size and narrow screens work properly.

## Generated and checked examples

```bash
npm run reader -- books/showcase
npm run reader -- books/showcase --edition free
```

Produced:

- `books/showcase/reader.html` and `books/showcase/book.epub` — 10 chapters and 5 bundled photos.
- `books/showcase/reader-free.html` and `books/showcase/book-free.epub` — 4 chapters and 2 bundled photos.

Both EPUB archives passed `unzip -t`. The full EPUB was also checked for EPUB packaging
requirements: `mimetype` is its first archive entry and is stored uncompressed. The mobile
web reader was visually reviewed at a 390px viewport.

## Files changed

- `engine/tools/build-reader.mjs` — new reader and EPUB exporter.
- `package.json` — adds the `npm run reader` command.
- `engine/tools/README.md` — documents the tool and edition option.
- `README.md` — documents reader and EPUB outputs.
- `books/showcase/reader*.html`, `books/showcase/book*.epub` — generated showcase examples.

## Current limits and next work

Paper Engine does **not** yet have an authoring workflow UI. `reader.html` is for reading,
not editing. A future UI could provide book creation, metadata/part editing, source-page
editing, a PDF/EPUB preview, and build/check/export actions while continuing to use the
same source files and print engine.

Before publishing to another GitHub repository, set that repository as the intended push
remote. This checkout still has the upstream source repository configured as `origin`.
