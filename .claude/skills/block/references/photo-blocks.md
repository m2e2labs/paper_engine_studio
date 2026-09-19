# Photo blocks

Most pages want a diagram. Some want a photograph. This is how to tell, and how to get
one that looks like it belongs in the book.

## When a photo beats a diagram

Use a photo when the reader has to **recognise something by sight**:

- a dish at the moment it is done, or resting, or over-cooked
- a plant, a leaf, a pest, a cut, a graft
- a posture, a grip, a stance
- a finished object, so they know what they are aiming at
- an arrangement in space: what neatly packed actually looks like

Use a diagram when the point is a **mechanism**: an order of events, a flow, a threat, a
trade-off, a decision, a timeline. A photo cannot show "and then the breaker opens".

**Never generate a diagram as a picture.** Image models garble text, so the labels come
back misspelled, and you cannot edit the result or change one word later. Diagrams are
written as SVG, which is text, prints sharp at any size, and costs nothing.

## Making one

A book's pictures are listed in `books/<slug>/images.json`: one shared `style` sentence for
the whole book, then one entry per file. Add the new picture there first, as a `subject`
(what is in the frame, and nothing about light or background: the style says that once,
for every picture), then generate it from the manifest:

```json
"images": {
  "<name>.jpg": { "source": "generated", "subject": "A cooked steak resting on a wooden board, juices gathering under it, a plain knife beside it." }
}
```

```bash
node engine/tools/gen-image.mjs --check
node engine/tools/images.mjs books/<slug> --generate <name>.jpg      # subject + the book's style
node engine/tools/images.mjs books/<slug>                            # the report: every picture, its rights, its page
```

No `images.json` yet? `node engine/tools/images.mjs books/<slug> --init` drafts one from the
folder. If the book has no `style` yet, agree one with the author before the first photo;
it is the hardest thing to change later. Generating costs quota or money, so it is never
run for a file you did not name. `gen-image.mjs` still works on its own for a one-off.

**Rights are the author's to state, never yours.** `source` is `generated` only for a
picture this tool made. For anything else (`own`, `licensed`, `public-domain`), ask the
author for the licence, the credit and where it came from, and write down what they say.
Do not guess a licence. Preflight fails a book that shows a picture nobody can account for.

The band is wide and short, so **16:9** is the right aspect. The page crops it to the
band height from the centre, so keep the subject centred and leave the top and bottom of
the frame expendable.

The prompt that was used is saved next to the image as `<name>.txt` for you. It costs
nothing and it means anybody can see how the picture was made.

## Writing the prompt

Four rules, in order of how much they matter.

**1. No text in the image.** End every prompt with a version of: *"absolutely no text,
letters, numbers or labels anywhere in the image."* Image models cannot spell reliably,
and a misspelled label on a printed page is the single most obvious sign that nobody
checked the work. Your words live in the HTML, in real type.

**2. Say the light, the angle, and the background.** These three do more than any pile
of adjectives:

> "Soft natural daylight from the left, gentle shadows, shallow depth of field, plain
> warm neutral background, muted natural colours, calm and uncluttered."

**3. Give every photo in one book the same style sentence.** It lives once, in
`images.json` as `style`, and is added to the end of every subject for you. That is what makes ten photos look like one book instead of a
mood board. Change the subject, keep the style.

**4. Nothing branded and nobody real.** No logos, no brand names, no embossed lettering
on objects, no recognisable people. If a brand sneaks in (it happens on products), say
so explicitly and render it again: *"completely smooth unmarked surfaces with no logos,
no embossing and no engraved lettering on any object."*

## A worked prompt

```
A thick cooked steak resting on a worn wooden cutting board, seen from a low
three-quarter angle, a carving knife lying beside it, a shallow pool of juices gathering
under the meat. Soft natural daylight from the left, gentle shadows, shallow depth of
field, plain warm neutral background, muted natural colours, calm and uncluttered,
nothing branded, no people, absolutely no text, letters, numbers or labels anywhere in
the image.
```

Subject, then angle, then light, then background, then the exclusions. Every photo in
`books/showcase/images/` was made this way, and its prompt is in the folder.

## Putting it in the page

```html
<figure class="photo">
  <img src="images/<name>.jpg" alt="Plain description of what is in the photo.">
</figure>
```

That is the whole markup. The theme fixes the height, crops from the centre, and rounds
the corners, so a photo page and a diagram page lay out identically below the band. Use
`images/<name>.jpg`, never a path outside the book folder and never base64.

Write a real `alt`. It is what somebody using a screen reader gets instead of the photo,
and it is also the fastest way for you to notice that the picture does not actually show
what you claimed.

## Then look at it

```bash
node engine/tools/check.mjs books/<slug>/book.html   # broken image? wrong path?
node engine/tools/shot.mjs  books/<slug>/book.html   # then open the PNG
```

The check can only tell you the file loaded. It cannot tell you the crop went through
the middle of the subject, that there is a stray word on a label, or that the picture
shows the wrong thing entirely. **Open the page render and look**, every time.

Re-rolling is cheap. If it is wrong, fix the prompt and run it again.
