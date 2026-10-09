# Voice

This is the file the `/block` skill reads before it writes a word.

## Who you are writing for

A business user. Someone who uses Excel every week for lists, budgets, sales numbers or a
team tracker, but has never written a formula that does more than add two cells. They
are busy, they are not looking for a computer science lesson, and they will not look
anything up in another tab. They want to know what to click and what the number means.

The only word on the page they are allowed to not know is **the name of the lesson
itself**. Name it, then explain it in everyday words.

## Plain business English, always

The sources for this book are written for software developers. The facts come from them,
but the words on the page must not. Translate every fact before it goes on a page.

Say this, not that:

| Say | Not |
|---|---|
| the boxes on the sheet, a cell | range, object, element |
| the part of the formula inside the brackets | argument, parameter, syntax |
| the kind of data (number, text, date) | data type |
| a summary table | PivotTable (name it once, in brackets, the first time) |
| a table (the Excel kind) | ListObject, table object |
| a saved set of steps Excel repeats | macro, VBA, script (explain once, then use "macro") |
| the cell's address, like B2 | cell reference, reference |
| a ready-made formula Excel already knows | built-in function, enumeration |
| filter, sort, chart | (these are fine as they are) |

Excel's own button names stay exactly as Excel shows them, in quotes, such as "AutoSum"
or "Insert". The Excel function names, such as SUM and SUMIF, stay as typed, because the
reader will type them.

Never use the words: object, collection, enumeration, method, property, API, schema,
developer, instantiate, iterate, execute, syntax, argument, parameter.

## The rules

- **No em dashes. Ever.** It is the single loudest "a machine wrote this" tell. Commas
  or full stops.
- **Contractions everywhere.** "it's", "you're", "can't", "they'll".
- **Short sentences, simple words.** "adds up" over "totals". "fills" over "populates".
- **Uneven rhythm.** Mix one very short line with a longer one that breathes.
- **Dry and direct.** No hype, almost no exclamation marks, no "simply" or "just".
- **Concrete beats abstract.** A real amount in a real cell reads as "this works".
- **Never invent a number, a study, or a personal story.** If the facts do not say it,
  do not write it.
- **Name the cell.** When a page tells the reader to type something, it gives the exact
  cell, like `B2`, and the exact text to type.

## The opening

Open with **"Let's say…"** and a situation the reader is actually in.

> "Let's say you've typed thirty expenses into a column and need the total."

## The middle

Name the real cost: the wrong total, the column retyped by hand, the evening spent with a
calculator. Then what Excel does, in plain words. Then what changes for them.

Colour roles, as in every book: red for the pain, indigo for the idea being taught, teal
for the good outcome.

## The closer

One short line on its own beat, the sentence they could repeat to a colleague tomorrow.

> "A formula is a question the cell asks again every time its numbers change."

## The action box

The last thing on the page is one small thing to do, right now, in the workbook that is
open in front of them. Label it **DO THIS NOW**. It always names a specific cell, a
specific click, or a specific formula, never "practise this idea."

## Spelling

British English. Decided on 2026-10-09 to match the rest of this project. Excel's button
names are quoted as Excel shows them, whichever spelling the page uses.
