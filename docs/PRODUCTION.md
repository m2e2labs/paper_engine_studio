# Production: from pages to files you can sell

The loop in the README (build, check, shot, export) is how you **write** a book. This is
how you **ship** one. It adds three things the loop does not have: a release gate, a
record of who looked at what, and releases you can find again.

```
WRITE ──> BUILD ──> PREFLIGHT ──> REVIEW ──> RELEASE
pages     book.html   20 checks     a person     dated folder in dist/
                                    approves     PDF + print PDF + EPUB + manifest
```

Everything here works from the command line. The Studio is the same commands with a face.

## The Studio

```bash
npm run studio          # http://localhost:4173
```

| Tab | What you do there |
|---|---|
| **Plan** | `blocks.md` and `FACTS.md` read as data: every planned page with its status (planned, draft, in review, approved), the facts it may state, and any figure printed on the page that those facts do not cover. **Start page** turns a planned entry into a blank page in the right part. Both files open in an editor. |
| **Pages** | Every page as a proof thumbnail, in book order. Click one to review it full size, leave a note, and set it to Draft, In review or Approved. `←` `→` move, `A` approves and advances, `R` sends back to review. **Edit source** opens the page's HTML; saving writes it into the interior and runs proof. |
| **Images** | `images.json` read as data: every picture with its source, licence, prompt and the pages that show it, plus stray files no page uses. **Regenerate** remakes one generated picture from its subject and the book's shared style; the picture it replaces is kept in `images/.previous/`. |
| **Structure** | `book.json` as a form: book details, parts, page order, which pages each edition keeps, and the **Publishing** panel (description, keywords, categories, price, ISBNs with a live check digit, per-edition ISBNs). A save the schema rejects is refused, with the reason. Reordering a book is still a JSON edit; this is just a nicer way to make it. |
| **Preflight** | The last report, check by check. |
| **Release** | Pick editions, bleed and EPUB, run a release, and download anything you have ever shipped. |

**Run proof** (top right) is the loop in one button: build, preflight, screenshot every
page. The log at the bottom shows the exact commands, so nothing the Studio does is magic.

The Studio serves nothing outside `books/` and `engine/`, and writes nowhere outside
`books/<slug>/`. It listens in exactly one place at a time: `127.0.0.1` by default.

### On your tailnet, and only there

```bash
npm run studio -- --host tailscale      # https://<machine>.<tailnet>.ts.net:4173
```

With `--host tailscale` (or `HOST=tailscale`) the Studio binds to this machine's
Tailscale address and **nothing else**: not localhost, not the LAN, not `0.0.0.0`. Only
devices on your tailnet can connect. The Studio has no login, because it can edit books
and run builds, so Tailscale's ACLs are the login, and `--host` refuses every other
address. On the machine itself you open the same tailnet address; `localhost:4173` will
not answer.

It serves **HTTPS** when it can. `tailscale cert` issues a real certificate for the
machine's MagicDNS name (kept in `~/.paper-engine-studio`, renewed while the Studio
runs). The same port also answers plain HTTP, so typing the bare address works too:
`https://<name>:4173` and `http://100.x.y.z:4173` are the same Studio. (No certificate
can cover an IP address, so by address it is always `http://`.) Two things have to be
true for HTTPS, once:

- **HTTPS Certificates** is on for the tailnet (admin console, DNS page). The very first
  start then takes half a minute while the certificate is issued.
- On Linux, your user is the Tailscale operator: `sudo tailscale set --operator=$USER`.

If either is missing the Studio does not fail. It serves plain **HTTP** on the Tailscale
address instead, by name or by IP (`http://100.x.y.z:4173`), and says why in the terminal
and in the sidebar. Tailnet traffic is WireGuard-encrypted either way. `STUDIO_TLS=off`
skips the certificate on purpose.

The sidebar's **Share on tailnet** switch does the same move on a running Studio: it
leaves localhost, starts answering on the Tailscale address, and the page reopens there.
Flip it back and it returns to localhost. Only the machine itself can flip it. A switch
flipped in the sidebar is not remembered; `--host tailscale` is what makes it permanent,
and `paper-engine-studio.service` sets it. If Tailscale is not up yet the Studio exits
and systemd tries again every ten seconds. `ALLOWED_HOSTS=name1,name2` lets the Studio
answer to a hostname of your own if you put a proxy in front of it.

On Windows, the first time Node listens beyond loopback the firewall asks whether to
allow it. Allow it on private networks; Tailscale's interface is one.

## Preflight: the release gate

```bash
node engine/tools/preflight.mjs books/<slug> [--edition free] [--strict] [--json out.json]
```

| Check | Fails when | Warns when |
|---|---|---|
| Book details | no title or author | starter placeholders remain ("Your Name", "yoursite.com") |
| book.json | a value breaks `engine/book.schema.json`: wrong type, a bad colour, date or language tag, more than seven keywords, an edition called `full` | a key the engine does not know (usually a typo) |
| Publishing | an ISBN's check digit is wrong, one ISBN is used for two formats or editions, or `publishing.editions` names an edition that does not exist | there is a `publishing` block but no language, description, keywords, categories, date or price, or the print ISBN is not on the copyright page. No `publishing` block at all passes: not every book is for sale |
| Running order | `book.json` lists an unwritten page, or an edition lists an unknown one | a written page is in no part |
| Plan | | there is no `blocks.md`, or a page in the book has no entry in it |
| Facts | a page cites a fact id that is not in `FACTS.md`, a cited fact has no Source, or an id is defined twice | there is no `FACTS.md`, an entry has no Facts line, or a figure printed on a page is not in the facts that page cites |
| Image rights | `images.json` breaks its schema, or a picture shown in the book is missing from it, is `licensed` or `public-domain` with no licence written down, or is `licensed` with no credit or url | there is no `images.json`, a file in `images/` is on no page, a generated picture has no subject or prompt, or no licence is recorded |
| Front/back matter | a `matter` page cannot be made: a prose or list page with no title, an empty body, a paragraph longer than a sheet | an epigraph with no `by`, starter placeholders in the text, a `sources` page with nothing to list |
| References | a cross-reference names a page that does not exist or the page it is on, `GLOSSARY.md` defines a term twice or with no `Means` line | a cross-reference's target is not in this edition (it prints with no number), a glossary term no page uses, a `GLOSSARY.md` with no `glossary` page to print it, or the reverse |
| Theme | a colour is not a hex value, or `ink` on `surface` or `card` is under 4.5:1 | `muted` under 4.5:1, a role colour under 3:1 on the card, two roles nearly the same colour |
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

The Facts check reads figures (`30`, `169.254.169.254`) and spelled-out amounts from three
up (`thirty`, `twice`) in a page's prose, not in its diagram, and looks for each in the
Claim of a fact that page cites. It is a tripwire, not a fact-checker: it cannot tell
whether a source is any good, only that you wrote one down.

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
  <slug>-listing.md          title, blurb, keywords, categories, ISBNs, price, page count:
                             what you paste into a store's listing form
  <slug>-proofs/             with --proofs: one PNG per page
  manifest.json              commit, date, page counts, sha256 of every file
```

It also counts the pages in each PDF and stops if that differs from the number of sheets,
which is the one way a strict page can silently go wrong in print. Folders are dated and
never overwritten. `--force` ships past failing checks, and the manifest says it did.

### The image manifest

```bash
node engine/tools/images.mjs books/<slug>                      # the report
node engine/tools/images.mjs books/<slug> --init               # draft images.json from the folder
node engine/tools/images.mjs books/<slug> --generate a.jpg     # remake one, from subject + style
node engine/tools/images.mjs books/<slug> --generate --all     # the whole set, in the current style
```

`books/<slug>/images.json` (schema: [`engine/images.schema.json`](../engine/images.schema.json))
holds one shared `style` sentence for the book and, per file in `images/`, its `source`
(`generated`, `own`, `licensed`, `public-domain`), its licence and credit, and the `subject`
it is generated from. The prompt is the subject plus the style, so changing the style and
running `--generate --all` restyles every photograph together. A picture that must differ
keeps a whole `prompt` of its own instead.

`--init` records only what the folder can prove: a picture with a saved prompt beside it
was generated. It leaves `licence` empty, because only you know what rights you hold. Two
things are deliberately not stored: which page uses a picture, and its alt text. Both are
read from the pages, so they cannot go stale. Generating costs quota or money, so it never
runs for a file you did not name, and `--dry-run` prints the commands without running them.

### Front and back matter

```bash
node engine/tools/build.mjs books/<slug>        # build-book.mjs, then the matter
```

```json
"matter": {
  "front": [
    { "kind": "dedication", "body": ["For Sam."] },
    { "kind": "prose", "title": "Preface", "body": ["First paragraph.", "## A subheading", "Second paragraph."], "by": "Your Name" }
  ],
  "back": [
    { "kind": "sources" },
    { "kind": "glossary" },
    { "kind": "prose", "title": "About the author", "body": ["…"] },
    { "kind": "list", "title": "Also by", "items": [{ "name": "Another book", "note": "One line about it." }] },
    { "kind": "prose", "title": "Get the full book", "body": ["…"], "editions": ["free"] }
  ]
}
```

A dedication and an epigraph go before the contents; the rest of `front` comes after it,
before Part 1; `back` sits between the last page and the index. `build.mjs` runs the
untouched `build-book.mjs`, adds these sheets, then writes the contents and every index
number again **from where each sheet actually ended up**, so a printed number cannot
disagree with the PDF. Matter pages are listed in the contents (`"toc": false` to leave
one out) and in the EPUB's navigation. `"editions"` keeps a page to the editions named;
`full` is the whole book. A book with no `matter` builds byte for byte as before.

Prose that is too long for one sheet continues onto the next by itself. The fit is
estimated, on the careful side, and preflight still measures every sheet in a browser.

`sources` is generated: every fact in `FACTS.md` that a page in this edition cites, its
source, the date you checked it, and the page that uses it. There is nothing to write, so
there is nothing to get wrong. In the Studio, all of this is the **Front and back matter**
panel of the Structure tab.

### The glossary and cross-references

```markdown
## SSRF
- **Means:** A request your server is tricked into making for someone else.
- **Also:** server-side request forgery
```

`books/<slug>/GLOSSARY.md` holds the terms, and `{ "kind": "glossary" }` under `matter`
prints them: alphabetical, each with what it means and the pages that use it. Only terms a
page in that edition actually uses are printed. Which pages those are is **read from the
pages** (the term, or anything on its `Also` line, as a whole word, any case), so the
numbers cannot go stale and there is nothing to keep in step.

To point one page at another, write the target's exact title in the page:

```html
See <span class="xref">Circuit breaker</span>.
See <span class="xref" data-to="Circuit breaker">the page on breakers</span>.
```

`build.mjs` turns that into "Circuit breaker (p. 21)", with the number taken from where
the page really is, as a link that works in the PDF and the fixed-layout EPUB. In an
edition that leaves the target out, the words stay and no number is printed. Preflight
fails a reference to a title that does not exist. The number makes the line a little
longer, so check the page still reads `0 mm`.

### The book's own colours

```json
"accent": "#0E7490",
"theme": { "signal": "#15803D", "surface": "#FBF8F1", "line": "#E6DFD0", "ink": "#1F2421" }
```

Ten tokens: `accent` and `accentStrong` at the top level of `book.json` (they were already
there, for the generated pages), and `signal`, `danger`, `warn`, `ink`, `muted`, `line`,
`surface` and `card` under `theme`. Leave one out and it keeps the studio value; give an
`accent` with no `accentStrong` and one is worked out.

Nothing about writing a page changes. Pages and diagrams are written in the studio
palette, as the diagram system describes, and `build.mjs` repaints the finished book: the
CSS tokens on every sheet, generated pages and matter included, and every palette colour
inside every diagram. A role's card fill and stroke are its colour mixed into the card
colour, in the same proportions as the original, so a dark `surface` and `card` give a
dark book with diagrams that still read. A book with no theme builds byte for byte as before.

The roles do not move: `accent` is still the mechanism, `signal` the good outcome, `danger`
the threat, `warn` the thing worth protecting. Preflight fails text that cannot be read
(`ink` on the page under 4.5:1) and warns when two roles are close enough to confuse.
`build-reader.mjs` (the reflowable reader) is not themed.

### Publishing metadata

`book.json` takes an optional `publishing` block, described (like everything else in the
file) by [`engine/book.schema.json`](../engine/book.schema.json). Start a book's
`book.json` with `"$schema": "../../engine/book.schema.json"` and VS Code, and most other
editors, complete and check it as you type.

```json
"language": "en",
"publishing": {
  "description": "The blurb a store shows.",
  "keywords": ["up to", "seven"],
  "categories": ["COM053000", "Computers / Security / General"],
  "publisher": "Your imprint",
  "published": "2026-10-01",
  "price": { "amount": 9.99, "currency": "USD" },
  "isbn": { "print": "978-…", "epub": "978-…" },
  "editions": { "free": { "isbn": { "epub": "978-…" } } }
}
```

None of it is printed in the book. It goes into the EPUB (`dc:description`, `dc:subject`,
`dc:publisher`, `dc:date`, and the EPUB ISBN becomes the book's `urn:isbn:` identifier) and
into `<slug>-listing.md` in every release. An edition never inherits the full book's ISBN:
a different set of pages is a different product. The print ISBN is not added to the
copyright page for you; put it in `copyright.lines`, and preflight reminds you if it is
missing. PDFs carry only the title, because that is all Chromium writes.

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

This repo makes **two** EPUBs, and they are different products. `npm run reader` writes
a *reflowable* `book.epub` (and `reader.html`) for phones, where font size matters more
than layout. `--epub` writes the *fixed-layout* `<slug>.epub` described here, where the
page is the point. Ship whichever the store listing calls for; they do not share a file
name, so they never overwrite each other.

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
