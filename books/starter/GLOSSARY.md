# Glossary

The words this book uses in its own way. A `{ "kind": "glossary" }` page under `matter` in
`book.json` prints them, alphabetical, with the pages that use each one.

- **Means** is what YOU mean by the word, in a sentence or two. It is printed as written.
- **Also** is optional: other spellings, plurals, the long form, separated by commas. A page
  that uses any of them counts as using the term.

Which pages use a term is never written here. It is read from the pages, so the page
numbers cannot go stale. A term no page uses is left out of the book, and preflight says so.

To point one page at another, write `<span class="xref">Exact page title</span>` in the
page. The build prints the real page number after it.

---

## SSRF
- **Means:** An attacker gives your app a URL that points back at your app's own machine.
  Your app fetches it from inside, and hands over things no outsider can reach.
- **Also:** server-side request forgery

---

<!-- Copy the shape above for your own terms.

## <Term>
- **Means:** <what you mean by it>
- **Also:** <other forms, optional>
-->
