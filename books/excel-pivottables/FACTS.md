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

Findings from research wait in `RESEARCH.md` until the author accepts them. Only accepted
findings appear here.

---

## F1 · PivotTable purpose
- **Claim:** A PivotTable is an Excel tool for calculating, summarising and analysing data, so you can see comparisons, patterns and trends in it.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F2 · Source data: columns, one header row
- **Claim:** Microsoft says the data for a PivotTable should be organised in columns, with a single header row.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F3 · Source data: no blank rows or columns
- **Claim:** Microsoft says PivotTable source data should be in a tabular layout with no blank rows or columns.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (macOS section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F4 · Headers: unique and not blank
- **Claim:** Every column should have a header, and the headers should be one row of unique labels with none left blank.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F5 · Avoid double header rows and merged cells
- **Claim:** Microsoft's advice for PivotTable source data is to avoid a second row of headers and to avoid merged cells.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F6 · One kind of data per column
- **Claim:** The data in a column should be all one type, so a column shouldn't mix dates and text.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F7 · Insert, then PivotTable
- **Claim:** In Excel for Windows you select the cells to build from, then choose Insert and PivotTable.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F8 · PivotTables work on a copy of the data
- **Claim:** A PivotTable works from a snapshot of your data, called the cache, so building one doesn't change the data it reads.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (macOS section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F9 · Where the PivotTable goes
- **Claim:** In the dialog that appears you choose to put the PivotTable on a new worksheet or on an existing one.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F10 · Field List: fields and four areas
- **Claim:** The Field List has a section for choosing fields and an Areas section where you arrange them by dragging them between four areas.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F11 · Filters area
- **Claim:** A field placed in the Filters area appears above the PivotTable as a report filter.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F12 · Columns area
- **Claim:** A field placed in the Columns area appears as column labels across the top of the PivotTable.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F13 · Rows area
- **Claim:** A field placed in the Rows area appears as row labels down the left side of the PivotTable.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F14 · Values area
- **Claim:** A field placed in the Values area appears as summarised numbers in the PivotTable.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F15 · Where ticked fields land (Field List page)
- **Claim:** Ticking a field puts it in a default area: text fields go to Rows and number fields go to Values.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F16 · Where ticked fields land (Create page)
- **Claim:** Ticking a field puts it in a default area: non-number fields go to Rows, number fields go to Values, and date and time hierarchies go to Columns. The Field List page says only OLAP date and time hierarchies go to Columns, so check the behaviour in Excel before the page states where dates land.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F17 · Reopening the Field List
- **Claim:** If the Field List isn't showing, click in the PivotTable, then choose Analyze and Field List.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F18 · Default calculation is a sum
- **Claim:** A field placed in the Values area is added up (summed) by default.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F19 · Grand totals appear automatically
- **Claim:** A PivotTable that shows value amounts adds subtotals and grand totals by itself, and you can show or hide them.
- **Source:** Microsoft Support, "Show or hide subtotals and totals in a PivotTable": https://support.microsoft.com/en-us/office/show-or-hide-subtotals-and-totals-in-a-pivottable-fc4d8406-f230-4762-aa2f-310826f3e5e2
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F20 · Recommended PivotTable builds a layout
- **Claim:** With a Recommended PivotTable, Excel works out a layout for your data, as a starting point you can then rearrange (described in the macOS section; the Windows steps are not on this page).
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (macOS section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F21 · Recommendations use an AI service
- **Claim:** PivotTable Recommendations are a Microsoft 365 connected experience that sends your data to an AI service for analysis; opting out of connected experiences turns the feature off.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F22 · Recommended PivotTables on the web need 365
- **Claim:** In Excel for the web, Recommended PivotTables are available only to Microsoft 365 subscribers.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (Web section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---
