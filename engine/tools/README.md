# engine/tools

Five commands for writing a book, and four for shipping one. Every one takes paths relative to the repo root, and every one carries a
full usage block at the top of its own file.

One-time setup:

```bash
npm install
npx playwright install chromium
```

## The loop

| Tool | What it does | Run it |
|---|---|---|
| `build-book.mjs` | Wraps your pages in a cover, a copyright page, a contents with real page numbers, a divider per part and an alphabetical index, then writes `book.html`. Driven entirely by `book.json`. | `node engine/tools/build-book.mjs books/<slug>` |
| `check.mjs` | **The gate.** Opens the book in a real browser, waits for the fonts, and measures how far each page runs past the bottom edge. Must read `0 mm`. Also catches broken images and a stylesheet that never loaded. Exits 1 on failure. | `node engine/tools/check.mjs books/<slug>/book.html` |
| `shot.mjs` | One PNG per page, at 2x, so 11px labels are readable. | `node engine/tools/shot.mjs books/<slug>/book.html [out-dir]` |
| `export.mjs` | Deterministic PDF via headless Chrome. Obeys `@page { size:B5; margin:0 }` and prints backgrounds, so the PDF is a 1:1 capture of the screen. | `node engine/tools/export.mjs books/<slug>/book.html [out.pdf]` |
| `build-reader.mjs` | Creates a responsive, offline `reader.html` and a reflowable EPUB 3 file from the same source pages. The print PDF remains the fixed B5 edition. | `node engine/tools/build-reader.mjs books/<slug>` |

The canonical order: **build, check until every page is 0 mm, shot and READ them,
export.**

`check.mjs` proves a page fits. It cannot see overlap, a clipped label, a squashed row, a
photo cropped through its subject, or a diagram that says the wrong thing. Only the PNGs
show those. Always look.

## Shipping

The loop is how you write a book. These are how you ship one. The full walkthrough is in
`docs/PRODUCTION.md`.

| Tool | What it does | Run it |
|---|---|---|
| `preflight.mjs` | **The release gate.** Everything `check.mjs` is, plus: book details filled in, running order complete, build not stale, images at print resolution (300 dpi), fonts loaded, no SVG label past the edge of its drawing, nothing fetched from the network, alt text, print-on-demand limits, and every page approved. Exits 1 on failure. | `node engine/tools/preflight.mjs books/<slug>` |
| `epub.mjs` | A **fixed-layout** EPUB 3 from a built book (the reflowable one comes from `build-reader.mjs`): one page per sheet, same CSS and fonts, SVG diagrams still live text. Every page is parsed back as XML before the file is written. | `node engine/tools/epub.mjs books/<slug> [--edition free]` |
| `release.mjs` | Build, preflight, export, for the full book and any editions, plus EPUBs with `--epub`, into a new dated folder under `books/<slug>/dist/` with a manifest and checksums. Stops before writing anything if preflight fails. | `node engine/tools/release.mjs books/<slug> --editions all --bleed 3` |
| `../studio/server.mjs` | The Studio: the same commands behind a local web UI, with page-by-page review and approval. | `npm run studio` |

## Images

| Tool | What it does | Run it |
|---|---|---|
| `gen-image.mjs` | A text prompt into a photograph, for pages whose subject is physical. Two providers: `agy` (default, the Antigravity CLI on your Google account, no key and no per-image charge) and `gemini` (the metered API, needs `GEMINI_API_KEY`). | `node engine/tools/gen-image.mjs "<prompt>" out.jpg --aspect 16:9` |

```bash
node engine/tools/gen-image.mjs --check    # is agy installed, signed in, driver model current?
```

**Diagrams are never generated as images.** They are written as inline SVG, so they stay
text: editable one word at a time, sharp at any size, free, and never spelled wrong.

The prompt rules, and the shared style sentence that makes one book's photos look like
one book, are in `.claude/skills/block/references/photo-blocks.md`.

## Flags worth knowing

```
build-book.mjs  --edition <name>     build a subset listed under "editions" in book.json
                --out <file>         write somewhere other than book.html

build-reader.mjs --edition <name>    make reader-<name>.html and book-<name>.epub

export.mjs      --bleed 3            a printer's PDF: same sheets, on paper 3 mm larger per side

preflight.mjs   --edition <name>     check an edition build (book-<name>.html)
                --strict             unapproved pages fail instead of warn
                --json <file>        write the report as JSON

release.mjs     --editions full,free which to ship; "all" is the full book plus every edition
                --bleed 3            also write <slug>-print.pdf with bleed
                --epub               also write <slug>.epub, fixed-layout, per edition
                --proofs             also write one PNG per page
                --strict             every page must be approved
                --force              ship despite failing checks (the manifest records it)

gen-image.mjs   --check              verify the CLI before you rely on it
                --provider gemini    the metered fallback
                --aspect 16:9        16:9 suits the page's photo band
                --prompt-file p.txt  keep the prompt in a file, next to the image
                --ref style.jpg      up to 3 reference images, to hold a style
```

Environment, all optional, in a repo-root `.env`: `AGY_BIN`, `AGY_DRIVER_MODEL`,
`GEMINI_API_KEY`. The engine builds books with none of them.
