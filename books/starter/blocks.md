# Blocks

The backlog. One entry per page you intend to write, in any order. The `/block` skill
reads this to know what a page is about before it drafts anything, so the more honest
these lines are, the less you have to fix later.

Nothing here is printed. The page gets written from it.

Keep the five lines. Four map onto the page, and the fifth keeps it honest:

- **What** becomes the explainer.
- **Use when** decides whether the page is even worth writing.
- **Action** becomes the box at the bottom of the page.
- **Band** tells the skill whether to draw a diagram or generate a photo.
- **Facts** lists the ids from `FACTS.md` this page is allowed to state, like `F1, F4`.
  Write `none` if the page prints no figure, name, study or story. A page may only say
  what its facts say, so a page with a number on it and `none` here is a page to fix.

You never write a status here. A title with no page yet is *planned*; once the page
exists it is a *draft* until a person approves it in the Studio. The Studio's Plan tab
shows all of it side by side.

---

## Part 1 · Your first part

#### SSRF
Security · diagram
- **What:** an attacker gives your app a link that points back at your own machine, so
  your app fetches something private and hands it over.
- **Use when:** your app fetches any URL a user gave it. **Skip when:** it never does.
- **Action:** "I fetch user-supplied URLs. Add an SSRF guard that blocks private IPs and
  unsafe schemes, re-checked when the address resolves."
- **Band:** diagram (attack: there and back across a trust boundary, red leak arrow)
- **Facts:** F1

---

<!-- Copy the shape above for your own pages.

#### <Title>
<Category> · <diagram|photo>
- **What:**
- **Use when:**  ... **Skip when:**
- **Action:**
- **Band:**
- **Facts:**
-->
