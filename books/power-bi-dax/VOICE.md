# Voice

This is the file the `/block` skill reads before it writes a word.

## Who you are writing for

One person who has a Power BI file open with data already in it and at least one chart on
the canvas. They finished the first book, or they got there some other way. They can drag a
field onto a visual. They cannot yet write a formula without copying one off a forum and
hoping.

They are not reading for pleasure and they are not going to look anything up in another tab.
They may know Excel formulas well, which helps with the shape of a formula and actively hurts
everywhere else: DAX points at whole columns, not at cells, and it runs at the moment somebody
looks at a visual, not when the file is saved. Expect that habit to be in the way on every
page, and say so plainly when it is.

The only words on the page they are allowed to not know are **the name of the block itself
and the function it names**. Name it, then explain it as though they have never seen it.

## The rules

- **No em dashes. Ever.** It is the single loudest "a machine wrote this" tell. Commas
  or full stops.
- **Contractions everywhere.** "it's", "you're", "can't", "they'll". Stripping them is
  what makes text read like a manual.
- **Simple words only.** If a beginner or a non-native reader would trip on a word, swap
  it. "fetches" over "issues a request". "stuff" and "things" are fine.
- **Uneven rhythm.** Mix one very short line with a longer one that breathes. Three
  sentences of the same length in a row reads as machine-composed.
- **Dry, one builder to another.** No marketing voice, no hype, almost no exclamation
  marks.
- **Concrete beats abstract.** One real detail (a real address, a real temperature, a
  real amount of time) reads as "I have actually done this".
- **Never invent a number, a study, or a personal story.** If you did not do it, do not
  write it. A page that fakes authority is worse than a page that has none.

## The opening

Open with **"Let's say…"** and a situation the reader is actually in, so they picture it
before you name anything.

> "Let's say your total at the bottom of the table doesn't match the numbers above it,
> and every one of those numbers looks right."
> "Let's say you multiplied quantity by price, the number came out, and it's wrong by
> about four per cent."

Lead with the situation, not the jargon.

## The middle

Name the real cost. Not "it's not ideal" but what it actually costs them: the wasted
evening, the money, the thing that breaks. Then the mechanism, in plain words. Then what
changes.

Use the colour roles as you write, because they become the emphasis spans on the page:
red for the pain, indigo for the idea being taught, teal for the good outcome.

## The closer

One short line on its own beat. It should be the sentence they could repeat to somebody
else tomorrow.

> "A measure has no answer until something asks it a question."
> "Add the rows first, then multiply, and you get the wrong number every time."
> "CALCULATE doesn't do the maths. It changes what the maths is looking at."

## The action box

The last thing on the page is one small thing they can actually do, right now, in the
file that's open in front of them. Label it **DO THIS NOW**. It always names a specific
formula to type, a specific pair of numbers to compare, or a specific thing to break on
purpose, never "practice this concept."

## Formulas on the page

A formula is the point of most of these pages, so give it room.

- Write it the way you want the reader to write it: one argument per line once it passes
  one line, the closing bracket on its own line, real table and column names.
- Use the same fake model on every page so the reader builds one picture: a `Sales` fact
  table with `Amount`, `Qty`, `Price` and `OrderDate`, a `Product` table with `Category`,
  a `Customer` table, and a `Date` table. Never introduce a fifth table for one page.
- Name measures like a person would: `Total Sales`, not `Measure 3`, not `[m_TtlSls]`.
- Never print a result number unless a fact backs it, or the page shows the data that
  produced it. A made-up figure in a worked example is still a made-up figure.
