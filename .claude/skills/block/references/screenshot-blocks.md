# Screenshot blocks

The band is one picture. A **diagram** teaches a mechanism. A **photograph** shows a
physical thing. A **screenshot** shows the reader **where to click in real software**:
the dialog, the menu, the pane, the setting. Use one only when the page's point is "this
is the thing on your screen, and this is what you do to it". If the page is about *why*
something works, it wants a diagram even in a software book.

## Hard rules

- **A screenshot is a real capture of the real software.** Never generate one with an image
  model, never draw a mock-up and present it as the product, never edit what the screen
  says. If you do not have the capture, ask the author for it.
- **The author supplies or approves every capture.** You cannot see their desktop apps or
  anything behind a sign-in, and you never sign in to anything. For a page anyone can open,
  you may capture it with the tool below.
- **One screenshot per page**, in place of the diagram. It is the band.
- **Crop to what the page is about.** The band is about 560 points wide. A full window
  shrunk to fit prints its text at 3 pt and preflight fails it. A capture 500 to 650 points
  wide (one dialog, one pane, one ribbon group) prints at its real size and reads well.
- **Rights and private data are the author's to state, never yours.** Do not write a
  `licence` and do not set `cleared` in `images.json`. If you can see a name, an email, a
  company or customer name, a key, a file path or anyone's data in a capture, say so.

## Getting the capture in

```bash
# the author took it (a desktop app, anything signed in). --scale 2 if their display is 200% / Retina
node engine/tools/screenshot.mjs books/<slug> --add <path/to/capture.png> \
     --name rls-manage-roles.png --app "Power BI Desktop" --version "<as the author gives it>" --scale 2

# a page anyone can open, captured here at 2x. Size the viewport to the part you want.
node engine/tools/screenshot.mjs books/<slug> --url https://… --name docs-roles.png \
     --width 620 --height 320 [--selector "main"] --app "…"
```

Name the file for what it shows (`rls-manage-roles.png`), never `Screenshot 2026-….png`.
The tool puts it in `images/`, records it in `images.json` as `"source": "screenshot"` with
the app, the capture date and the scale, and prints the markup below. Never invent a
version number: leave it out if the author did not give it.

## The markup

```html
<figure class="shot">
  <div class="frame">
    <img src="images/rls-manage-roles.png"
         alt="The Manage roles dialog. One role, Sales West, is selected, and the filter box for the Region table holds a DAX expression.">
    <span class="pin" style="left:18%;top:32%">1</span>
    <span class="pin" style="left:61%;top:58%">2</span>
    <span class="mark" style="left:52%;top:50%;width:40%;height:16%"></span>
  </div>
  <figcaption>1 name the role · 2 write the filter</figcaption>
</figure>
```

- `left` and `top` are **percent of the capture**, to the pin's centre (a mark's top-left
  corner, plus `width` and `height`). They hold at any size, in the PDF and the EPUB.
- **Pins are steps, in the order the reader does them**, at most four. The caption says
  what each is, in the same "1 … · 2 …" form as a diagram's key. The explainer uses the
  same numbers.
- **A mark** is a box round one region. Use it instead of a pin when the thing is an area,
  not a button. One or two, not five.
- Role colours still mean what they mean: a plain pin or mark is indigo (the thing being
  taught), `class="pin bad"` red (the setting that causes the problem), `class="pin good"`
  teal (the result you want to see). Most pages only need the plain one.
- `class="shot tall"` deepens the band from 200 to 300 points for a capture that is taller
  than wide. It costs about four lines of explainer. Cut the words; never shrink the capture.
- **Alt text** describes what the screen shows and what state it is in, for someone who
  cannot see it. Not "screenshot of Power BI".

## Then look

Run the loop, and read the PNG. Check every pin sits on the control it names (a pin a few
percent off points at the wrong button), nothing important is under a pin, and the text in
the capture can actually be read. `preflight.mjs` measures the last one: it fails a capture
printed under 40% of its real size and warns under 62%.
