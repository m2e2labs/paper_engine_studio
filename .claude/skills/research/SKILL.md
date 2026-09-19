---
name: research
description: Research a planned page (or a topic) for a book built on the paper engine, and file what you find in the book's research inbox, books/<slug>/RESEARCH.md, for the author to accept or reject. Use this WHENEVER someone says "research X for the book", "find sources for the page on X", "what do the docs say about X", "fill the research inbox", or a page in blocks.md needs facts that FACTS.md does not have. It files findings with their source and a checking quote. It NEVER writes to FACTS.md, never accepts a finding, and never writes the page: that is the block skill's job, after the author has accepted the facts.
---

# Research: find it, source it, file it, stop

A book on this engine may only state what is in `books/<slug>/FACTS.md`, and only the
author puts things there. Your job is the step before that: find what is true, find where
it says so, and put both in front of the author. Then stop.

```
you search  →  RESEARCH.md (findings)  →  the AUTHOR accepts  →  FACTS.md  →  the block skill writes the page
```

**You never write to `FACTS.md`. You never run `--accept`. You never edit a Status line.**
If the author says "just add it", they can press Accept in the Studio's Research tab or
run the command themselves: it takes one second, and it means a person looked.

## Step 0: read before you search

1. `books/<slug>/blocks.md`: the entry for the page you are researching. Its **What**,
   **Use when** and **Action** lines tell you what the page will claim, so they tell you
   what needs a source.
2. `books/<slug>/FACTS.md`: what the author already has. Do not re-file it.
3. `books/<slug>/RESEARCH.md`, if it exists: what was already found, and what was
   **rejected and why**. Do not file a rejected finding again, and learn from the reason.

Then write down, for yourself, the three to six things this page needs to be able to say.
Research those. Not the whole subject.

## Step 1: search, best source first

1. **The vendor's own documentation.** If an MCP server for it is connected (for Microsoft
   products, the Microsoft Learn docs server: search, then fetch the page), use that first.
   It is authoritative, current, and gives a stable link.
2. **Web search and fetch** for what the docs do not cover: release notes, the product's
   own blog, standards, a well-known book.
3. **Community answers and blog posts last**, and only to find your way to a primary source.
   Do not file a forum post as the source of a fact the vendor documents.

Always **open the page** you are going to cite. Never file a finding from a search result
snippet: snippets are stale and truncated, and the quote has to be on the page.

Things only the author can know (what they did, what they measured, what a client said)
cannot be researched. Do not file them. List them in your report as questions for the author.

## Step 2: file each finding

One finding is ONE claim from ONE page.

```bash
node engine/tools/research.mjs books/<slug> --add \
  --label  "Row-level security roles" \
  --claim  "One plain sentence, in your own words, that the source supports. Every figure exactly as the source gives it." \
  --source "Microsoft Learn, \"Row-level security (RLS) with Power BI\": https://learn.microsoft.com/…" \
  --quote  "the few words on that page that say so, copied exactly" \
  --for    "Row-level security"
```

- **Claim**: your own words, never the source's sentence. A fact is free to restate; their
  wording is theirs. No hedging, no marketing adjectives, nothing the quote does not support.
- **Source**: a human-readable title, then the exact URL of the page (not the site, not a
  search page, no tracking parameters).
- **Quote**: copied character for character, **under 25 words**, the shortest span that
  backs the claim. It exists so the author and `--verify` can check you. It is never printed.
- **For**: the page title exactly as in `blocks.md`. Accepting the finding cites the new
  fact on that page's Facts line.
- A version number, a limit, a price, a date: say which version or as-of date in the claim.
  Software changes; "as of the March 2026 release" ages better than a bare number.

## Step 3: check yourself

```bash
node engine/tools/research.mjs books/<slug> --verify     # opens every source: is the quote really there?
node engine/tools/research.mjs books/<slug>              # the inbox, with any problems
```

A finding whose quote is not found on its page is **your** mistake to fix now: you
paraphrased the quote, or cited the wrong page. Fix the entry in `RESEARCH.md` or remove
it. Do not leave it for the author. (A page rendered entirely by script can fail the check
while being right. Say so in your report.)

## Step 4: report, and stop

Tell the author, briefly:

- what you filed (ids and labels), and for which page;
- what you looked for and **could not source**. Say so plainly. A page that cannot be
  sourced should be cut or changed, not written from memory;
- where sources **disagreed**, with both findings filed;
- the questions only they can answer (their own experience, their own numbers);
- that the findings are waiting in the Studio's **Research** tab.

Do not write the page. Do not suggest the facts are settled. They are not, until a person
accepts them.

## Never

- Never write to `FACTS.md`, run `--accept` or `--reject`, or change a Status line.
- Never file a claim you have not seen on the page you cite.
- Never invent or "tidy" a quote, a URL, a title, a version or a date.
- Never file the same claim twice, or re-file something the author rejected.
- Never paste the source's paragraph into the claim.
