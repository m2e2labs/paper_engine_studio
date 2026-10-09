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

## F23 · Remove a field by dragging it out
- **Claim:** To take a field out of a PivotTable, drag it out of the areas section of the Field List.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F24 · Remove a field from its arrow
- **Claim:** You can also remove a field by clicking the down arrow beside it and choosing Remove Field.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F25 · A field sits in only one of Filters, Rows, Columns
- **Claim:** A field can be in the Filters, Rows or Columns area only once, so dropping it into a second one moves it out of the first.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F26 · Text and blanks are counted, not added
- **Claim:** If a field has blanks or non-number values such as text when you put it in Values, Excel counts it instead of adding it up.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F27 · Change the calculation: Summarize Values By
- **Claim:** To change a value field's calculation, right-click it and choose Summarize Values By.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F28 · Change the calculation: Value Field Settings
- **Claim:** Another way to change the calculation is the arrow beside the field name in the Values area, then Value Field Settings.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F29 · Count counts non-empty values
- **Claim:** The Count calculation gives the number of values that aren't empty.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F30 · Average
- **Claim:** The Average calculation gives the average of the values.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F31 · Max
- **Claim:** The Max calculation gives the largest value.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F32 · Min
- **Claim:** The Min calculation gives the smallest value.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F33 · Copy a field into Values
- **Claim:** You can drag the same field into Values as many times as you like to make copies, then give each copy its own calculation.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F34 · The Values label moves values to rows or columns
- **Claim:** With two or more fields in Values, Excel adds a Values label that you can move to the Columns or Rows area, which decides whether the values sit side by side or stacked.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F35 · Columns nest
- **Claim:** When there is more than one field in Columns, a field lower down the list is nested inside the one above it.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F36 · Rows nest
- **Claim:** When there is more than one field in Rows, a field lower down the list is nested inside the one above it.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F37 · Reorder fields within an area
- **Claim:** If an area holds more than one field, you change their order by dragging them to the position you want.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F38 · Compact form indents inner fields
- **Claim:** In compact form, the items from different row fields share one column and are indented to show which field they belong to.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F39 · Expand and collapse buttons
- **Claim:** To expand or collapse an item, use the expand or collapse button beside it.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F40 · Expand and collapse by double-click
- **Claim:** Double-clicking an item expands or collapses it.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F41 · Collapse Entire Field
- **Claim:** Right-click an item, then Expand/Collapse, then Collapse Entire Field to hide the details for every item in that field.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F42 · Show or hide the +/- buttons
- **Claim:** If the expand and collapse buttons are missing, the +/- Buttons command in the Show group on the Analyze tab turns them back on.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F43 · Expand and collapse buttons are on by default
- **Claim:** The expand and collapse buttons are shown by default, but they can be hidden, for example before printing a report.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F44 · Headings get a 'Sum of' name
- **Claim:** When you set a value field's calculation, Excel puts it in the Custom Name box as a new heading, such as 'Sum of Amount', which you can change.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F45 · Rename last
- **Claim:** Microsoft's advice is to rename PivotTable fields only after you've finished setting the calculations, because changing a calculation changes the name.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F46 · Strip 'Sum of' with Find and Replace
- **Claim:** To remove 'Sum of' from every heading at once, use Find and Replace with 'Sum of' as the text to find and nothing as the replacement.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F47 · Number Format changes the whole field
- **Claim:** Choosing Number Format in the Value Field Settings dialog sets the number format for the entire field.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F48 · Number Format from a right-click
- **Claim:** You can also right-click a value and choose Number Format.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F49 · Preserve cell formatting on update
- **Claim:** The PivotTable Options setting 'Preserve cell formatting on update' keeps the table's layout and format each time you do something to it, and clearing it goes back to the defaults.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F50 · Sort from the label arrow
- **Claim:** To sort a PivotTable, use the arrow on the Row Labels or Column Labels cell and pick a sort option such as Sort A to Z.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F51 · What each sort does
- **Claim:** Sorting puts text in alphabetical order, numbers from smallest to largest, and dates from oldest to newest, or the reverse.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F52 · Sort by a value
- **Claim:** To sort by the numbers rather than the labels, right-click a value or subtotal, choose Sort, and pick a method.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F53 · Sort on the Grand Total column
- **Claim:** Choosing any number in the Grand Total column and sorting on it orders the items by their grand totals.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F54 · A value sort covers one level
- **Claim:** A sort on a value applies to all the cells at the same level in that column.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F55 · Leading spaces upset a sort
- **Claim:** Leading spaces in the data change the sort order, so remove them before sorting.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F56 · Sorting can follow the data
- **Claim:** In More Sort Options, a tick box lets the PivotTable sort itself again whenever its data updates, or stops it doing so.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F57 · Manual sort
- **Claim:** Choosing Manual in the Sort dialog lets you rearrange items by dragging them.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F58 · Untick Select All, tick the items
- **Claim:** To filter by item, open the filter arrow, untick Select All, then tick the items you want to show.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F59 · Search box in the filter
- **Claim:** The filter menu has a Search box, so you can filter by typing text.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F60 · Keep Only Selected Items
- **Claim:** Select items, right-click one, choose Filter, then Keep Only Selected Items to show just those.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F61 · Hide Selected Items
- **Claim:** The same Filter menu has Hide Selected Items, which hides the items you selected.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F62 · Label Filters
- **Claim:** Label Filters filter by a condition on the row or column labels.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F63 · Value Filters
- **Claim:** Values Filters filter by the numbers in the PivotTable.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F64 · Top 10 path
- **Claim:** To keep the top or bottom items, choose Values Filters and then Top 10.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F65 · Top 10: Top or Bottom, and how many
- **Claim:** In the Top 10 dialog the first box picks Top or Bottom and the second takes a number.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F66 · Top 10: Items, Percentage or Sum
- **Claim:** The third box in the Top 10 dialog decides whether the number counts items, a percentage or a sum.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F67 · Top 10: which value
- **Claim:** The fourth box in the Top 10 dialog picks which values field the ranking uses.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F68 · Report filter shows chosen items only
- **Claim:** With a report filter, the items you tick are shown in the PivotTable and the items you don't tick are hidden.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F69 · One sheet per filter item
- **Claim:** A field in the Filters area lets you create a separate PivotTable worksheet for each of its items.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F70 · Clear a filter (Windows)
- **Claim:** To bring hidden items back, right-click another item in the same field, choose Filter, then Clear Filter.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F71 · Filter icon and Clear Filters (macOS)
- **Claim:** On Mac, the filter arrow changes to show a filter is on, and PivotTable Analyze, Clear, Clear Filters removes every filter at once.
- **Source:** Microsoft Support, "Filter data in a PivotTable" (macOS section of the page): https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F72 · Include filtered items in totals
- **Claim:** The Subtotals menu on the Design tab has an Include Filtered Items in Totals option. The page doesn't say which way it is set by default, so try it in Excel before saying whether filtered-out items count toward a total.
- **Source:** Microsoft Support, "Show or hide subtotals and totals in a PivotTable": https://support.microsoft.com/en-us/office/show-or-hide-subtotals-and-totals-in-a-pivottable-fc4d8406-f230-4762-aa2f-310826f3e5e2
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F73 · Compact is the default
- **Claim:** Compact form is the default layout for a PivotTable.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F74 · Tabular form
- **Claim:** Tabular form shows one column for each field and has room for field headings.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F75 · Outline form
- **Claim:** Outline form is like tabular form but can show subtotals at the top of each group.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F76 · Tabular form for copying
- **Claim:** Show in Tabular Form gives a traditional table layout that is easy to copy to another worksheet.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F77 · Switch layout: Design, Report Layout
- **Claim:** To change layout, click in the PivotTable, then on the Design tab choose Report Layout in the Layout group.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F78 · Repeat item labels (Web)
- **Claim:** In Excel for the web, the PivotTable Settings pane lets you choose Repeat or Don't repeat, so item labels appear on every row or only once. The Windows desktop steps are not on this page.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable" (Web section of the page): https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F79 · Blank line after each item (Windows)
- **Claim:** In Field Settings, on the Layout & Print tab, a tick box inserts a blank line after each item label.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F80 · Predefined styles
- **Claim:** A PivotTable can take one of many ready-made styles, also called quick styles.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F81 · Styles are on the Design tab
- **Claim:** The styles are in the PivotTable Styles group on the Design tab.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F82 · Banded Rows
- **Claim:** Banded Rows, in the PivotTable Style Options group, alternates a lighter and darker colour down the rows.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F83 · Banding helps reading
- **Claim:** Banding, a darker and lighter background in turn, can make the data easier to read and scan.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F84 · Group: right-click a value
- **Claim:** To group, right-click a value in the PivotTable and choose Group.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F85 · Grouping box: start and end
- **Claim:** The Grouping box has Starting at and Ending at tick boxes, with values you can edit.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F86 · Group by a time period
- **Claim:** For dates, you pick the time period to group by under By.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F87 · Dates may group by themselves
- **Claim:** Microsoft says time fields are detected and grouped automatically when you add them to a PivotTable. Check in Excel what happens when you tick Date before the page tells the reader to group by hand.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F88 · Quarters and months
- **Claim:** Grouping can turn a long list of dates and times into quarters and months. The page doesn't say how to choose several periods at once, so check that in Excel.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F89 · Group numbers by an interval
- **Claim:** For a number field, you type the size of the interval each group covers.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F90 · Group chosen items
- **Claim:** To group items by hand, hold Ctrl, select two or more values, then right-click and choose Group.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F91 · Name a group
- **Claim:** A group's name is changed through Field Settings, in the Custom Name box.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F92 · Ungroup
- **Claim:** To ungroup, right-click any item in the group and choose Ungroup.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F93 · Excel stores dates as numbers
- **Claim:** Excel stores dates as sequential serial numbers, so they can be used in calculations.
- **Source:** Microsoft Support, "WEEKDAY function": https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F94 · Dates typed as text cause problems
- **Claim:** Microsoft warns that problems can occur when dates are entered as text. It doesn't document the grouping failure itself, so test what Excel says in Excel.
- **Source:** Microsoft Support, "WEEKDAY function": https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F95 · Tables pick up new columns
- **Claim:** When the source is an Excel table, new columns appear in the PivotTable Fields list.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (macOS section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F96 · Not a table: change the source
- **Claim:** If the source isn't an Excel table, you have to change the source data of the PivotTable, or use a dynamic named range.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (macOS section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F97 · Refresh to see new fields
- **Claim:** After adding fields to the source you may need to refresh the PivotTable before they show in the Field List.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F98 · WEEKDAY
- **Claim:** WEEKDAY returns the day of the week for a date.
- **Source:** Microsoft Support, "WEEKDAY function": https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F99 · WEEKDAY gives 1 to 7
- **Claim:** By default WEEKDAY gives a whole number from 1 (Sunday) to 7 (Saturday).
- **Source:** Microsoft Support, "WEEKDAY function": https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F100 · TEXT with DDDD gives the day name
- **Claim:** The TEXT function with the format code DDDD shows a date as the name of its weekday, such as Monday.
- **Source:** Microsoft Support, "TEXT function": https://support.microsoft.com/en-us/office/text-function-20d5ac4d-7b94-49fd-bb38-93d29371225c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F101 · TEXT returns text
- **Claim:** TEXT turns a number into text, which can make it hard to use in later calculations.
- **Source:** Microsoft Support, "TEXT function": https://support.microsoft.com/en-us/office/text-function-20d5ac4d-7b94-49fd-bb38-93d29371225c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F102 · Show Values As
- **Claim:** Show Values As presents the same values in different ways without writing formulas.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F103 · Where Show Values As is
- **Claim:** To change how a value is shown, right-click the value and choose Show Values As.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F104 · % of Grand Total
- **Claim:** % of Grand Total shows each value as a share of the grand total of everything in the report.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F105 · Show the value and its share together
- **Claim:** Because the same value field can be added more than once, you can show the actual value and another calculation side by side.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F106 · Copies get a number on the name
- **Claim:** A value field added a second time gets a version number added to its name, which you can edit.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F107 · % of Column Total
- **Claim:** % of Column Total shows each value in a column as a share of that column's total.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F108 · % of Row Total
- **Claim:** % of Row Total shows each value in a row as a share of that row's total.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F109 · Rank Largest to Smallest
- **Claim:** Rank Largest to Smallest gives the largest item rank 1, and each smaller value a higher rank number.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F110 · Running Total in
- **Claim:** Running Total in shows each item's value as a running total across the items of a base field.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F111 · Difference From
- **Claim:** Difference From shows each value as its difference from the value of one base item in a base field.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F112 · % Difference From
- **Claim:** % Difference From shows each value as a percentage difference from the value of one base item in a base field.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F113 · % Of
- **Claim:** % Of shows each value as a percentage of the value of one base item in a base field.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F114 · No Calculation
- **Claim:** No Calculation shows the value that is in the field, which puts a changed view back to normal.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F115 · Calculated fields
- **Claim:** When summary functions and custom calculations don't give the result you want, you can write your own formula in a calculated field.
- **Source:** Microsoft Support, "Calculate values in a PivotTable": https://support.microsoft.com/en-us/office/calculate-values-in-a-pivottable-11f41417-da80-435c-a5c6-b0185e59da77
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F116 · Calculated field: where
- **Claim:** A calculated field is added from the Analyze tab: Calculations group, Fields, Items, & Sets, then Calculated Field.
- **Source:** Microsoft Support, "Calculate values in a PivotTable": https://support.microsoft.com/en-us/office/calculate-values-in-a-pivottable-11f41417-da80-435c-a5c6-b0185e59da77
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F117 · Calculated field: using other fields
- **Claim:** In the formula box, you use another field by selecting it in the Fields box and choosing Insert Field.
- **Source:** Microsoft Support, "Calculate values in a PivotTable": https://support.microsoft.com/en-us/office/calculate-values-in-a-pivottable-11f41417-da80-435c-a5c6-b0185e59da77
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F118 · Calculated fields work on sums
- **Claim:** A calculated field's formula works on the sum of each field it uses, not on each individual row.
- **Source:** Microsoft Support, "Calculate values in a PivotTable": https://support.microsoft.com/en-us/office/calculate-values-in-a-pivottable-11f41417-da80-435c-a5c6-b0185e59da77
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F119 · No cell references in a PivotTable formula
- **Claim:** A formula in a calculated field can't use cell references or defined names.
- **Source:** Microsoft Support, "Calculate values in a PivotTable": https://support.microsoft.com/en-us/office/calculate-values-in-a-pivottable-11f41417-da80-435c-a5c6-b0185e59da77
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F120 · Distinct Count
- **Claim:** Distinct Count is a summary function that counts the number of unique values.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F121 · Distinct Count needs the Data Model
- **Claim:** Distinct Count only works when the PivotTable uses the Data Model in Excel.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F122 · Add this data to the Data Model
- **Claim:** The Create PivotTable dialog has a tick box that adds the table or range to the workbook's Data Model.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F123 · Double-click a value to see its rows
- **Claim:** Double-clicking a value in the PivotTable puts the detail data behind it on a new worksheet.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F124 · Show Details
- **Claim:** You can also right-click a value and choose Show Details.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F125 · Remove the detail sheet
- **Claim:** To get rid of the detail sheet, right-click its sheet tab and choose Hide or Delete.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F126 · Enable show details option
- **Claim:** A PivotTable Options tick box, Enable show details, turns the double-click behaviour on or off.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F127 · New data needs a refresh
- **Claim:** If you add new data to the source, the PivotTable needs to be refreshed to include it.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F128 · Right-click Refresh
- **Claim:** To refresh one PivotTable, right-click it and choose Refresh.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F129 · Refresh All
- **Claim:** To refresh every PivotTable in the workbook at once, use the Refresh arrow on the PivotTable Analyze tab and choose Refresh All.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F130 · Tables grow with the PivotTable
- **Claim:** Rows added to an Excel table are included in a PivotTable built on it when you refresh.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (macOS section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F131 · Change Data Source: expand the rows
- **Claim:** After creating a PivotTable you can change the range its data comes from, for example to include more rows.
- **Source:** Microsoft Support, "Change the source data for a PivotTable": https://support.microsoft.com/en-us/office/change-the-source-data-for-a-pivottable-afd93524-f7de-432c-84d0-3896fbbc2577
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F132 · Change Data Source: where
- **Claim:** On the Analyze tab, in the Data group, choose Change Data Source, then Change Data Source again.
- **Source:** Microsoft Support, "Change the source data for a PivotTable": https://support.microsoft.com/en-us/office/change-the-source-data-for-a-pivottable-afd93524-f7de-432c-84d0-3896fbbc2577
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F133 · Change Data Source: the range
- **Claim:** In the dialog you choose Select a table or range and enter the first cell in the Table/Range box.
- **Source:** Microsoft Support, "Change the source data for a PivotTable": https://support.microsoft.com/en-us/office/change-the-source-data-for-a-pivottable-afd93524-f7de-432c-84d0-3896fbbc2577
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F134 · Big source changes: start again
- **Claim:** If the source has changed a lot, for example with more or fewer columns, Microsoft suggests creating a new PivotTable.
- **Source:** Microsoft Support, "Change the source data for a PivotTable": https://support.microsoft.com/en-us/office/change-the-source-data-for-a-pivottable-afd93524-f7de-432c-84d0-3896fbbc2577
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F135 · Refresh data when opening the file
- **Claim:** In PivotTable Options, on the Data tab, a tick box refreshes the PivotTable when the file opens.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F136 · Older Excel doesn't refresh itself
- **Claim:** In older versions of Excel, PivotTables are not refreshed automatically.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F137 · Auto Refresh is Insider only
- **Claim:** PivotTable Auto Refresh is described as available only to Microsoft 365 Insider program participants.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F138 · For empty cells show
- **Claim:** In PivotTable Options, on the Layout & Format tab, the For empty cells show box sets what appears in empty cells.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F139 · Zeros: clear the check box
- **Claim:** Microsoft's tip says that to display zeros you clear the For empty cells show check box.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F140 · Where the empty-cell option lives
- **Claim:** The option is on the Layout & Format tab of the PivotTable Options dialog.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F141 · Clear Autofit to keep widths
- **Claim:** To keep the current column width when the PivotTable updates, clear the Autofit column widths on update check box.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F142 · Refresh page says to tick Autofit
- **Claim:** The Refresh page says that to stop widths and formatting adjusting on refresh you check both Autofit column widths on update and Preserve cell formatting on update. This disagrees with the layout page (previous finding), so test it in Excel before the page tells the reader which way to set it.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F143 · Paste Values
- **Claim:** The Values paste option pastes the formula results, without formatting or comments.
- **Source:** Microsoft Support, "Paste options": https://support.microsoft.com/en-us/excel/paste-options
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F144 · Paste Special Values
- **Claim:** In Paste Special, Values pastes only the values as they are displayed in the cells.
- **Source:** Microsoft Support, "Paste options": https://support.microsoft.com/en-us/excel/paste-options
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F145 · Paste Special shortcut
- **Claim:** Ctrl+Alt+V opens Paste Special.
- **Source:** Microsoft Support, "Paste options": https://support.microsoft.com/en-us/excel/paste-options
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F146 · GETPIVOTDATA
- **Claim:** GETPIVOTDATA is a function that returns visible data from a PivotTable.
- **Source:** Microsoft Support, "GETPIVOTDATA function": https://support.microsoft.com/en-us/excel/functions/getpivotdata-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F147 · Clicking a PivotTable cell writes GETPIVOTDATA
- **Claim:** Typing an equals sign in a cell and then clicking a PivotTable cell makes Excel write a GETPIVOTDATA formula for you.
- **Source:** Microsoft Support, "GETPIVOTDATA function": https://support.microsoft.com/en-us/excel/functions/getpivotdata-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F148 · Turn off Generate GetPivotData
- **Claim:** To stop Excel writing GETPIVOTDATA when you click a PivotTable cell, clear Generate GetPivotData in PivotTable Options.
- **Source:** Microsoft Support, "GETPIVOTDATA function": https://support.microsoft.com/en-us/excel/functions/getpivotdata-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F149 · GETPIVOTDATA grand total
- **Claim:** =GETPIVOTDATA("Sales", $A$3) returns the grand total of the Sales field, where A3 is a cell in the PivotTable.
- **Source:** Microsoft Support, "GETPIVOTDATA function": https://support.microsoft.com/en-us/excel/functions/getpivotdata-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F150 · GETPIVOTDATA gives #REF! if hidden
- **Claim:** GETPIVOTDATA gives a #REF! error when the item you ask for isn't visible, for example because of a filter.
- **Source:** Microsoft Support, "GETPIVOTDATA function": https://support.microsoft.com/en-us/excel/functions/getpivotdata-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F151 · Auto Refresh is per data source
- **Claim:** Auto Refresh is set for the data source, so turning it on or off affects every PivotTable connected to that source.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F152 · GETPIVOTDATA picks the newest PivotTable
- **Claim:** If a GETPIVOTDATA reference covers cells from more than one PivotTable, the answer comes from the one created most recently.
- **Source:** Microsoft Support, "GETPIVOTDATA function": https://support.microsoft.com/en-us/excel/functions/getpivotdata-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F153 · Don't mix data types in a value field
- **Claim:** Microsoft stresses not mixing data types in a field you use as a value, because text turns a sum into a count.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F154 · Switching to Sum zeroes the text
- **Claim:** If you change a counted field to Sum, blank and non-number values are changed to 0 so they can be summed.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F155 · For error values show
- **Claim:** A PivotTable Options setting, For error values show, replaces error values with something you type.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F156 · Group dates by a number of days (VBA reference)
- **Claim:** In VBA, grouping a date field by days only, with the By argument set, gives groups of that many days. Microsoft's page is the VBA reference, so it doesn't give the menu steps for the Group box.
- **Source:** Microsoft Learn, "Range.Group method (Excel)": https://learn.microsoft.com/office/vba/api/excel.range.group
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F157 · PivotChart purpose
- **Claim:** A PivotChart adds a visual to your data, for people who can't quickly see what's going on from a table of numbers.
- **Source:** Microsoft Support, "Create a PivotChart": https://support.microsoft.com/en-us/excel/get-started/create-a-pivotchart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F158 · Insert, then PivotChart
- **Claim:** To make a PivotChart, select a cell in the data, choose Insert, then PivotChart.
- **Source:** Microsoft Support, "Create a PivotChart": https://support.microsoft.com/en-us/excel/get-started/create-a-pivotchart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F159 · Chart from an existing PivotTable
- **Claim:** You can also make the chart from a PivotTable you already have, by selecting a cell in it and choosing Insert and PivotChart.
- **Source:** Microsoft Support, "Create a PivotChart": https://support.microsoft.com/en-us/excel/get-started/create-a-pivotchart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F160 · Filters and slicers filter the chart (macOS)
- **Claim:** On Mac, when you filter the PivotTable or use a slicer, the chart is filtered too.
- **Source:** Microsoft Support, "Create a PivotChart" (macOS section of the page): https://support.microsoft.com/en-us/excel/get-started/create-a-pivotchart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F161 · Change Chart Type
- **Claim:** To change an existing chart's type, select it, open the Design tab and choose Change Chart Type.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F162 · Column chart: categories and values
- **Claim:** A column chart typically shows categories along the bottom and values up the side.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F163 · Clustered column suits unordered names
- **Claim:** A clustered column chart suits categories that are names in no particular order, such as item names or people.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F164 · Line chart for trends
- **Claim:** Line charts suit trends at equal intervals such as months, quarters or fiscal years.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F165 · Pie chart shows parts of one total
- **Claim:** A pie chart shows the size of the items in one data series as parts of the whole.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F166 · Pie chart limits
- **Claim:** Consider a pie chart only when there are no more than seven categories that are parts of the whole.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F167 · Not every chart type works with a PivotTable (macOS)
- **Claim:** On Mac, only column, line, pie and radar charts work with a PivotTable. The Windows page doesn't give a list, so check which types your Excel allows.
- **Source:** Microsoft Support, "Create a PivotChart" (macOS section of the page): https://support.microsoft.com/en-us/excel/get-started/create-a-pivotchart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F168 · Hide field buttons
- **Claim:** On a PivotChart, the Hide All command on the Field Buttons drop-down on the Analyze tab hides the grey field buttons.
- **Source:** Microsoft Learn, "Chart.ShowAllFieldButtons property (Excel)": https://learn.microsoft.com/en-us/office/vba/api/excel.chart.showallfieldbuttons
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F169 · Chart title and axis titles
- **Claim:** You can add a chart title and axis titles to any type of chart.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F170 · Add a chart title (Windows)
- **Claim:** To add a chart title, use the + sign at the top right of the chart.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F171 · No axis titles on pie charts
- **Claim:** Pie and doughnut charts have no axes, so they can't have axis titles.
- **Source:** Microsoft Support, "Add or remove titles in a chart" (Mac section of the page): https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F172 · What a slicer is
- **Claim:** A slicer is a set of buttons that filters a table or a PivotTable.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F173 · Slicers show the filter state
- **Claim:** A slicer also shows what is currently filtered.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F174 · Insert a slicer
- **Claim:** To add a slicer, click in the PivotTable and choose Insert, then Slicer.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F175 · Pick the fields for slicers
- **Claim:** In the Insert Slicers dialog you tick the fields you want a slicer for, then choose OK.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F176 · Select several slicer items
- **Claim:** Hold Ctrl to select more than one item in a slicer.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F177 · Clear a slicer
- **Claim:** The Clear Filter button in a slicer clears its filter.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F178 · Delete a slicer
- **Claim:** To delete a slicer, select it and press Delete.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F179 · Slicer style
- **Claim:** A slicer's colour style is picked on the Slicer tab, or the Design tab in Excel 2016 and older.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F180 · Resize a slicer
- **Claim:** To resize a slicer, select and hold its corner and drag.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F181 · Slicer header
- **Claim:** A slicer's header shows the category of the items in it.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F182 · Reuse a slicer
- **Claim:** A slicer that is already on one PivotTable can be used to filter another.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F183 · Same data source only
- **Claim:** A slicer can only be connected to PivotTables that share the same data source.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F184 · Report Connections
- **Claim:** On the Slicer tab, Report Connections lets you tick the PivotTables the slicer should filter.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F185 · Tick the other PivotTable
- **Claim:** In the Report Connections dialog you select the check box of the PivotTable where you want the slicer to be available.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F186 · Disconnect a slicer
- **Claim:** To disconnect a slicer, click in the PivotTable, choose Filter Connections on the PivotTable Analyze tab and clear the tick.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F187 · What a timeline is
- **Claim:** A timeline is a filter for dates and times, with a slider to zoom in on the period you want.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F188 · Insert a timeline
- **Claim:** To add a timeline, click in the PivotTable, then choose Analyze and Insert Timeline.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F189 · Pick the date field
- **Claim:** In the Insert Timeline dialog you tick the date fields you want.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F190 · Four time levels
- **Claim:** A timeline can filter by years, quarters, months or days.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F191 · Select a range of periods
- **Claim:** To select a date range, click a period tile and drag across more tiles, then adjust with the handles.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F192 · One timeline, several PivotTables
- **Claim:** A single timeline can filter several PivotTables, provided they use the same data source.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F193 · Clear a timeline
- **Claim:** The Clear Filter button clears a timeline.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F194 · Slicer and timeline on the same date field
- **Claim:** To combine a slicer with a timeline on one date field, tick Allow multiple filters per field in PivotTable Options.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F195 · Move and resize a timeline
- **Claim:** A timeline can be moved by dragging it and resized with its sizing handles.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F196 · Scale to Fit: width
- **Claim:** On the Page Layout tab, in Scale to Fit, setting Width to 1 page puts the columns on one page.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F197 · Scale to Fit: height
- **Claim:** To print the whole sheet on a single page, also set Height to 1 page.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F198 · Shrunk print can be hard to read
- **Claim:** Fitting a sheet onto one page shrinks the data, so the printout may be difficult to read.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F199 · The Scale box shows the shrink
- **Claim:** The Scale box shows how much the sheet has been scaled.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F200 · Landscape
- **Claim:** Switch from portrait to landscape through Page Layout, Page Setup, Orientation.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F201 · Print Area
- **Claim:** The Print Area command in the Page Setup group leaves out columns or rows you don't want printed.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F202 · Fit Sheet on One Page is a scaling option
- **Claim:** Microsoft's page names Fit Sheet on One Page as one of the scaling options you can find applied in Print Preview.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F203 · Clear Filter clears a slicer
- **Claim:** A slicer's Clear Filter button removes the filter by selecting all the items.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Kind:** reference
- **Checked:** 2026-10-09

---
