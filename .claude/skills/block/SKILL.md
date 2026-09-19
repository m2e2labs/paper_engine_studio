---
name: block
description: Write and lay out one finished page (a "block") for a book built on the paper engine, on the strict B5 canvas. One concept per page, in the book's own voice, with an inline SVG diagram or a generated photograph, an explainer, and an action box. Use this WHENEVER someone asks for a book page, a block, a new page for the book, a printable explainer, or says "make a block on X", "lay out X as a page", "write the page about X", or hands over a topic for a book in books/. It outputs one <section class="sheet bb"> written into the book's interior file, then verifies it with check.mjs and shot.mjs. It does NOT write blog posts, social posts, or flowing prose chapters.
---

# Block

## What this builds

One **page**. Not a chapter, not an article. A single B5 page that explains a single
concept to somebody who does not already understand it, and then tells them one thing to
go and do.

The page is one `<section class="sheet bb">` inside the book's interior file at
`books/<slug>/<slug>.html`. The look comes from `engine/themes/studio.css`. You write the
content, and nothing else: no layout CSS, no inline `<style>`, no `@media print`.

Every page has the same seven parts, in this order:

| Part | Markup | What it is |
|---|---|---|
| accent tab | `<div class="tab">` | a bar of the book's colour |
| eyebrow + pill | `<div class="top">` | the series label and the category |
| title + subtitle | `<h1 class="title">`, `<div class="sub">` | the concept, and what it means in plain words |
| band | `<div class="diagram">` or `<figure class="photo">` | ONE picture of the idea |
| explainer | `<div class="explain">` | two or three short paragraphs plus a closer |
| action box | `<div class="ask">` | the one thing to go and do |
| footer | `<div class="foot">` | brand, page number, part name |

`references/example-page.html` is a complete, working page. Copy it.

## Before you write anything

**Step 0 — ask if they have their own thought to put in.** One question, every time:
do they have a take, a rough draft, a story, or specific wording they want in this page?

- If they give you something, that is the **primary material**. Build the page around
  their point and keep their wording verbatim. Fix real typos only. Never upgrade their
  phrasing.
- If they say no or "just go", write it yourself from `blocks.md`.
- If they already volunteered it in the request, skip the question.

Never skip this. It is their one chance to lead the page before you fill in the rest.

**Then read three files, in this order:**

1. `books/<slug>/blocks.md` — what this page is about. **Never invent the topic.**
   Its **Facts** line names the facts this page may state.
2. `books/<slug>/VOICE.md` — how this book sounds. This is law.
3. `books/<slug>/book.json` — the chrome (series label, brand, whether pages are
   numbered) and which part the page belongs to.

4. `books/<slug>/FACTS.md` — what the author actually knows, each fact with its source.
   Read the facts the block cites. **A page may only state what those facts state**:
   every figure, name, study and personal story on the page has to be in one of them.
   If the page needs a fact that is not there, stop and ask the author for it and where
   it came from, add it to `FACTS.md` under the next free id, cite that id on the
   block's Facts line, and only then write the sentence. Never write the sentence first.
   If the book has no `FACTS.md`, copy `books/starter/FACTS.md` and start one.
   If the missing fact is something that can be looked up (documentation, a standard, a
   release note), use the `research` skill: it files a sourced finding in `RESEARCH.md`
   for the author to accept. A finding is not a fact. Do not write from one until the
   author has accepted it and it has an `F` id.

5. `books/<slug>/GLOSSARY.md`, if the book has one — the author's terms and what they mean
   by them. Use a term the way its `Means` line says. Do not add a term or rewrite a
   definition yourself: ask the author, as with a fact.

**Pointing at another page.** Write `<span class="xref">Exact page title</span>` (or
`<span class="xref" data-to="Exact page title">your words</span>`). Never type a page
number. `build.mjs` prints the real one, "Circuit breaker (p. 21)", so leave room on the
line for it and run `check.mjs` afterwards. Only point at a page that exists.

## Step 1 — diagram or photo?

The band is one picture. Decide which kind before you write, because it changes the copy.

**A diagram**, when the thing being taught is a **mechanism**: a flow, a threat, a
before and after, a decision, a timeline. Write it as inline SVG. Never generate a
diagram as a picture: an image model garbles the labels, and you cannot edit the result.

Pick the shape from the type of idea. Full catalogue and copy-paste parts in
`references/diagram-system.md`.

| Type of idea | The point is | Shape |
|---|---|---|
| Attack | someone reaches something they should not | there and back across a boundary, red leak arrow |
| Resilience | it breaks under load or when something else dies | happy path plus a drop to a fallback |
| Performance | slow or expensive at scale | before and after, or a timeline |
| Correctness | a wrong result slips through | recompute and compare |
| Habit / practice | it only moves if you change the ask | a rising series against a flat line |
| Timing | when matters more than how much | a timeline with changing gaps |
| Protection | a buffer absorbs a shock | a hit, the buffer, the outcome |
| Two systems | something is handed over | a call and a response |

**A photograph**, when the thing being taught is **physical**: a dish, a plant, a
posture, a finished print, a tool held the right way. Something the reader has to
recognise by sight. See `references/photo-blocks.md`.

## Step 2 — draft the words, then stop

Write, as plain text, and **present it before building anything**:

- **title** — the concept, short. An acronym stays uppercase.
- **subtitle** — one line saying what it means, or expanding the acronym.
- **explainer** — the "Let's say…" opening, the real cost, the mechanism, the closer.
- **action** — the one thing to go and do, and the label for its box.
- **band plan** — one line: which shape, which boxes, or which photo.

Then **stop and wait.** Their edits are law: use their wording verbatim, fix only real
typos, never improve their phrasing. If they say skip the check and build it, build it.

## Step 3 — build the page

Read `references/design-rules.md` first. It is the accumulated list of things that have
gone wrong on real pages, and it wins over the general guidance when they disagree.

1. Copy one `.bb` section from `references/example-page.html` into
   `books/<slug>/<slug>.html`, in the right place.
2. Write the band. Diagram: `viewBox="0 0 592 <H>"`, H around 200. Photo: generate it
   with `engine/tools/gen-image.mjs`, save it to `books/<slug>/images/`, and save the
   prompt beside it as `<name>.txt`.
3. Write the explainer with the role colours as emphasis spans: `.bad` red for the pain,
   `.hl` indigo for the idea, `.good` teal for the outcome, `strong` for a key phrase.
   End with `<p class="close">`.
4. Write the action box from the block's Action line.
5. Add the page's title to its part in `books/<slug>/book.json`, or it will not be in
   the book. The builder tells you if you forget.

## Step 4 — verify, and actually look

```bash
node engine/tools/build.mjs books/<slug>          # assemble (also gives every xref its page number)
node engine/tools/check.mjs books/<slug>/book.html  # MUST be 0 mm on every page
node engine/tools/shot.mjs  books/<slug>/book.html  # then READ the PNGs
```

`check.mjs` proves the page fits. It cannot see overlap, a clipped label, a squashed
row, a photo cropped through the subject, or a diagram that confidently says the wrong
thing. **Open the PNG and look at it.** A page is not done until you have.

If it overflows, **cut words**. Do not shrink the viewBox to make it fit: that clips the
bottom of the drawing instead of fixing anything.

## Hard rules

- **Never invent the topic.** It comes from `blocks.md`.
- **Never invent a fact.** Every figure, name, study and story comes from a fact in
  `FACTS.md` that the block cites. `preflight.mjs` compares the figures on the page with
  those facts and lists the ones it cannot trace. Fix the source, not the check.
- **Never fabricate** a number, a study, a quote, or a personal story.
- **No em dashes.** Commas or full stops.
- **Write for someone who does not know the term.** The only unfamiliar word allowed is
  the name of the block.
- **Colour is a role, not decoration.** Indigo is the mechanism, teal the good outcome,
  red the threat or the mistake, amber the thing worth protecting, neutral you or your
  app. Same meaning on every page of the book.
- **Set every colour explicitly**, including a `fill` on every SVG `<text>`. Inherited
  colours get overridden and go invisible.
- **The theme owns layout.** One block is one `.sheet bb`. Never let it overflow.

## References

- `references/voice.md` — the default voice, and why each rule is there. The book's own
  `VOICE.md` overrides it.
- `references/diagram-system.md` — the SVG vocabulary, the colour roles, copy-paste
  parts, and the shape catalogue.
- `references/design-rules.md` — accumulated corrections. Newest wins.
- `references/photo-blocks.md` — when a photo beats a diagram, and how to prompt for one.
- `references/page-template.md` — the design tokens and the page anatomy.
- `references/example-page.html` — a complete working page. Copy this.
