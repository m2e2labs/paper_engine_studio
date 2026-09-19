# Production: from pages to files you can sell

The loop in the README (build, check, shot, export) is how you **write** a book. This is
how you **ship** one. It adds three things the loop does not have: a release gate, a
record of who looked at what, and releases you can find again.

```
WRITE ──> BUILD ──> PREFLIGHT ──> REVIEW ──> RELEASE
pages     book.html   12 checks     a person     dated folder in dist/
                                    approves     PDF + print PDF + EPUB + manifest
```

Everything here works from the command line. The Studio is the same commands with a face.

## The Studio

```bash
npm run studio          # http://localhost:4173
```

| Tab | What you do there |
|---|---|
| **Pages** | Every page as a proof thumbnail, in book order. Click one to review it full size, leave a note, and set it to Draft, In review or Approved. `←` `→` move, `A` approves and advances, `R` sends back to review. **Edit source** opens the page's HTML; saving writes it into the interior and runs proof. |
| **Structure** | `book.json` as a form: book details, parts, page order, and which pages each edition keeps. Reordering a book is still a JSON edit; this is just a nicer way to make it. |
| **Preflight** | The last report, check by check. |
| **Release** | Pick editions, bleed and EPUB, run a release, and download anything you have ever shipped. |

**Run proof** (top right) is the loop in one button: build, preflight, screenshot every
page. The log at the bottom shows the exact commands, so nothing the Studio does is magic.

The Studio listens on `127.0.0.1` only, serves nothing outside `books/` and `engine/`, and
writes nowhere outside `books/<slug>/`.

## Preflight: the release gate

```bash
node engine/tools/preflight.mjs books/<slug> [--edition free] [--strict] [--json out.json]
```

| Check | Fails when | Warns when |
|---|---|---|
| Book details | no title or author | starter placeholders remain ("Your Name", "yoursite.com") |
| Running order | `book.json` lists an unwritten page, or an edition lists an unknown one | a written page is in no part |
| Build | `book.html` is missing or older than its source | |
| Pages fit | any page is past the bottom edge, or the stylesheet never loaded | |
| Images load | any image is broken | |
| Print resolution | an image is under 150 dpi at its printed size | under 300 dpi |
| Fonts | a font file failed to load | |
| Diagram labels | | an SVG `<text>` runs past the edge of its drawing |
| Self-contained | | the book fetches anything from the network |
| Alt text | | a photo has no `alt`, or a diagram no `aria-label` |
| Print limits | | under 24 or over 828 pages, or the safe margin is narrower than KDP's inside margin for that page count |
| Reviewed | with `--strict`: any page is not approved | any page is not approved |

A fail blocks a release. A warn is yours to read and decide. Preflight still cannot tell
you a diagram says the wrong thing. That is what review is for.

## Review

`books/<slug>/workflow.json` records each page's status, note and the hash of the content
that was approved. **Commit it.** Edit an approved page and it shows as *edited since
approval* until someone looks again, so an approval always means "this exact page".

Proofs go stale the same way: the Studio tells you when the screenshots are older than
the source, because approving a picture of last week's page is not a review.

## Release

```bash
node engine/tools/release.mjs books/<slug> --editions all --bleed 3 --epub --strict
```

For the full book and each edition it builds fresh, runs preflight, and **only if every
edition passes** writes:

```
books/<slug>/dist/edition-1.0_20260919-111604/
  <slug>.pdf                 screen PDF, 1:1 with what you reviewed
  <slug>-print.pdf           with --bleed: the printer's file
  <slug>.epub                with --epub: fixed-layout EPUB 3
  <slug>-free.pdf            one per edition
  <slug>-preflight.json      the report this release passed
  <slug>-proofs/             with --proofs: one PNG per page
  manifest.json              commit, date, page counts, sha256 of every file
```

It also counts the pages in each PDF and stops if that differs from the number of sheets,
which is the one way a strict page can silently go wrong in print. Folders are dated and
never overwritten. `--force` ships past failing checks, and the manifest says it did.

### Bleed

`--bleed 3` does **not** touch the sheet. Same box, same fonts, same sizes, so the rule
that makes print match screen still holds. Each sheet is centred on paper 3 mm larger on
every side, filled with the sheet's own paper colour. The engine keeps all content inside
the safe margin, so extending the paper colour is the whole job. Upload the `-print.pdf`
and choose "bleed" at the printer; B5 is a custom trim of 6.93 x 9.84 in.

Colour is RGB, as Chromium writes it. KDP, IngramSpark's digital presses and most
print-on-demand services accept RGB and convert it. An offset printer who wants CMYK
PDF/X will need a conversion pass this engine does not do.

### EPUB

```bash
node engine/tools/epub.mjs books/<slug> [--edition free] [--out file.epub]   # on its own
node engine/tools/release.mjs books/<slug> --epub                            # as part of a release
```

The EPUB is **fixed-layout** (`rendition:layout: pre-paginated`), on purpose. A page in
this engine is a rigid box; a reflowable EPUB would throw away the diagram band, the
layout and the "it fits or it doesn't" rule. So the EPUB is the PDF's twin: one XHTML
document per sheet, the same CSS, the same self-hosted fonts embedded, and SVG diagrams
that are still live, selectable, searchable text.

What is in it: a cover image (a render of the cover sheet, which is what stores show), a
navigation document with the parts and pages as a nested contents, landmarks, a page
list matching the printed numbers, and accessibility metadata. The identifier is
`"identifier"` from `book.json` if you set one (an ISBN is `urn:isbn:9780000000000`),
otherwise a `urn:uuid` derived from the book's folder and edition, so every release of
the same book keeps the same id and readers' libraries treat it as an update.

Before the file is written, every page is parsed back as XML, and the release stops if
the EPUB's page count differs from the PDF's. That is not a substitute for
[EPUBCheck](https://www.w3.org/publishing/epubcheck/), which needs Java and is what the
stores run. Run it once before your first upload:
`java -jar epubcheck.jar books/<slug>/dist/<release>/<slug>.epub`.

Where it goes: Apple Books, Kobo and Google Play take fixed-layout EPUB directly. KDP
accepts it as a fixed-layout ebook; preview it in Kindle Previewer first, since Kindle's
fixed-layout renderer is the strictest of the four. Fixed-layout pages do not reflow on a
phone: the reader pinches and zooms, the same as with the PDF.

## If the repo lives on Google Drive, OneDrive or Dropbox

`npm install` writes thousands of small files fast, and synced drives drop some of them
as zero-byte files. The symptom is `ERR_INVALID_PACKAGE_CONFIG` from any tool. Install
somewhere local and copy the result in:

```powershell
$deps = "$env:LOCALAPPDATA\paper-engine-deps"
New-Item -ItemType Directory -Force $deps | Out-Null
Copy-Item package.json, package-lock.json $deps
Push-Location $deps; npm install; Pop-Location
robocopy "$deps\node_modules" node_modules /E
```

Better still, keep the repo on a local disk and let git, not the drive, be the backup.
