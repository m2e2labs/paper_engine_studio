# Facts

Everything this book is allowed to state as true, and where each thing came from. The
`/block` skill reads this before it writes a page, and it may only print a figure, a
name, a study or a story that is in here. If a page needs something that is not, the fix
is to add it here first, with its source. Never the other way round.

Nothing here is printed. It is the book's memory of what you actually know.

Keep the four lines:

- **Claim** is the fact, in one plain sentence. Write every figure the way you know it.
- **Source** is where it came from: a link, a book and page, or "my own work" and what
  you did. A fact with no source is a guess, and preflight fails a page that cites one.
- **Kind** is one of `reference` (you can point to it), `experience` (you did it),
  `measurement` (you measured it) or `quote` (someone said it, word for word).
- **Checked** is the date you last confirmed it. Links rot and numbers change.

Give each fact the next free id: `F1`, `F2`, `F3`. An id is for life, because pages cite
it from `blocks.md`. Retire a fact by deleting it, never by reusing its number.

`node engine/tools/preflight.mjs books/<slug>` compares every figure printed on a page
with the facts that page cites, and tells you which ones it cannot trace.

---

## F1 · Cloud metadata address
- **Claim:** On AWS, a server reaches its own instance metadata, which can include
  temporary security credentials, at the link-local address 169.254.169.254. The address
  only answers from inside the machine.
- **Source:** AWS EC2 User Guide, "Access instance metadata for an EC2 instance":
  https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instancedata-data-retrieval.html
- **Kind:** reference
- **Checked:** 2026-09-19

---

<!-- Copy the shape above for your own facts.

## F2 · <Short label>
- **Claim:**
- **Source:**
- **Kind:** reference | experience | measurement | quote
- **Checked:** YYYY-MM-DD
-->
