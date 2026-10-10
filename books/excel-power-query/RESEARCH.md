# Research

Findings waiting for you. A search, or the `/research` skill, files them here. Nothing in
this file is in the book and nothing here can be cited by a page. Read each one, open its
source, and then accept it (it becomes a fact in `FACTS.md`, checked today) or reject it.

The **Quote** is the few words on the source page that back the claim, so you can check it
in seconds. It is never printed: the book says things in its own words.

    node engine/tools/research.mjs books/<slug>                 the inbox
    node engine/tools/research.mjs books/<slug> --verify        is each quote really on its page?
    node engine/tools/research.mjs books/<slug> --accept R3
    node engine/tools/research.mjs books/<slug> --reject R3 --why "out of date"

---
