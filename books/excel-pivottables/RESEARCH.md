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

## R1 · PivotTable purpose
- **Claim:** A PivotTable is an Excel tool for calculating, summarising and analysing data, so you can see comparisons, patterns and trends in it.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "A PivotTable is a powerful tool to calculate, summarize, and analyze data"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** One Question, Many Formulas: Why PivotTables Exist
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R2 · Source data: columns, one header row
- **Claim:** Microsoft says the data for a PivotTable should be organised in columns, with a single header row.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "Your data should be organized in columns with a single header row."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Data a PivotTable Can Read
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R3 · Source data: no blank rows or columns
- **Claim:** Microsoft says PivotTable source data should be in a tabular layout with no blank rows or columns.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (macOS section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "not have any blank rows or columns"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Data a PivotTable Can Read
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R4 · Headers: unique and not blank
- **Claim:** Every column should have a header, and the headers should be one row of unique labels with none left blank.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "a single row of unique, non-blank labels for each column"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Tidying a List Before You Pivot
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R5 · Avoid double header rows and merged cells
- **Claim:** Microsoft's advice for PivotTable source data is to avoid a second row of headers and to avoid merged cells.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "Avoid double rows of headers or merged cells."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Tidying a List Before You Pivot
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R6 · One kind of data per column
- **Claim:** The data in a column should be all one type, so a column shouldn't mix dates and text.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "you shouldn't mix dates and text in the same column"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Tidying a List Before You Pivot
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R7 · Insert, then PivotTable
- **Claim:** In Excel for Windows you select the cells to build from, then choose Insert and PivotTable.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "Select Insert > PivotTable."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Inserting Your First PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R8 · PivotTables work on a copy of the data
- **Claim:** A PivotTable works from a snapshot of your data, called the cache, so building one doesn't change the data it reads.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (macOS section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "PivotTables work on a snapshot of your data, called the cache, so your actual data doesn't get altered in any way."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Inserting Your First PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R9 · Where the PivotTable goes
- **Claim:** In the dialog that appears you choose to put the PivotTable on a new worksheet or on an existing one.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "Select New Worksheet to place the PivotTable in a new worksheet"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Where the PivotTable Goes: New Sheet or This One
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R10 · Field List: fields and four areas
- **Claim:** The Field List has a section for choosing fields and an Areas section where you arrange them by dragging them between four areas.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Quote:** "dragging them between the four areas"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Field List and Its Four Boxes
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R11 · Filters area
- **Claim:** A field placed in the Filters area appears above the PivotTable as a report filter.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Quote:** "Filters area fields are shown as top-level report filters above the PivotTable"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Field List and Its Four Boxes
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R12 · Columns area
- **Claim:** A field placed in the Columns area appears as column labels across the top of the PivotTable.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Quote:** "Columns area fields are shown as Column Labels at the top of the PivotTable"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Field List and Its Four Boxes
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R13 · Rows area
- **Claim:** A field placed in the Rows area appears as row labels down the left side of the PivotTable.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Quote:** "Rows area fields are shown as Row Labels on the left side of the PivotTable"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Field List and Its Four Boxes
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R14 · Values area
- **Claim:** A field placed in the Values area appears as summarised numbers in the PivotTable.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Quote:** "Values area fields are shown as summarized numeric values in the PivotTable"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Field List and Its Four Boxes
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R15 · Where ticked fields land (Field List page)
- **Claim:** Ticking a field puts it in a default area: text fields go to Rows and number fields go to Values.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Quote:** "nonnumeric fields are added to the Rows area, numeric fields are added to the Values area"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Field List and Its Four Boxes
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R16 · Where ticked fields land (Create page)
- **Claim:** Ticking a field puts it in a default area: non-number fields go to Rows, number fields go to Values, and date and time hierarchies go to Columns. The Field List page says only OLAP date and time hierarchies go to Columns, so check the behaviour in Excel before the page states where dates land.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "non-numeric fields are added to Rows, date and time hierarchies are added to Columns, and numeric fields are added to Values"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Field List and Its Four Boxes
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R17 · Reopening the Field List
- **Claim:** If the Field List isn't showing, click in the PivotTable, then choose Analyze and Field List.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Quote:** "click Analyze> Field List"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Field List and Its Four Boxes
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R18 · Default calculation is a sum
- **Claim:** A field placed in the Values area is added up (summed) by default.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "By default, PivotTable fields placed in the Values area are displayed as a SUM."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Practice: Your First PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R19 · Grand totals appear automatically
- **Claim:** A PivotTable that shows value amounts adds subtotals and grand totals by itself, and you can show or hide them.
- **Source:** Microsoft Support, "Show or hide subtotals and totals in a PivotTable": https://support.microsoft.com/en-us/office/show-or-hide-subtotals-and-totals-in-a-pivottable-fc4d8406-f230-4762-aa2f-310826f3e5e2
- **Quote:** "subtotals and grand totals appear automatically, but you can also show or hide them"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Reading Row Labels and Grand Totals
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R20 · Recommended PivotTable builds a layout
- **Claim:** With a Recommended PivotTable, Excel works out a layout for your data, as a starting point you can then rearrange (described in the macOS section; the Windows steps are not on this page).
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (macOS section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "Excel determines a meaningful layout by matching the data with the most suitable areas in the PivotTable"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Excel's Recommended PivotTables
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R21 · Recommendations use an AI service
- **Claim:** PivotTable Recommendations are a Microsoft 365 connected experience that sends your data to an AI service for analysis; opting out of connected experiences turns the feature off.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "analyzes your data with artificial intelligence services"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Excel's Recommended PivotTables
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R22 · Recommended PivotTables on the web need 365
- **Claim:** In Excel for the web, Recommended PivotTables are available only to Microsoft 365 subscribers.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (Web section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "Recommended PivotTables are available only to Microsoft 365 subscribers"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Excel's Recommended PivotTables
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R23 · Remove a field by dragging it out
- **Claim:** To take a field out of a PivotTable, drag it out of the areas section of the Field List.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Quote:** "To delete a field from the PivotTable, drag the field out of its areas section."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Moving and Removing Fields
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R24 · Remove a field from its arrow
- **Claim:** You can also remove a field by clicking the down arrow beside it and choosing Remove Field.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Quote:** "clicking the down arrow next to the field and then selecting Remove Field"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Moving and Removing Fields
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R25 · A field sits in only one of Filters, Rows, Columns
- **Claim:** A field can be in the Filters, Rows or Columns area only once, so dropping it into a second one moves it out of the first.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "the field is automatically removed from the original area and put in the new area"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Moving and Removing Fields
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R26 · Text and blanks are counted, not added
- **Claim:** If a field has blanks or non-number values such as text when you put it in Values, Excel counts it instead of adding it up.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Quote:** "the PivotTable uses the Count function for the field"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Values: Choosing What Gets Added Up
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R27 · Change the calculation: Summarize Values By
- **Claim:** To change a value field's calculation, right-click it and choose Summarize Values By.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Quote:** "right-click the value field you want to change, and then click Summarize Values By"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Sum to Count, Average, Max or Min
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R28 · Change the calculation: Value Field Settings
- **Claim:** Another way to change the calculation is the arrow beside the field name in the Values area, then Value Field Settings.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "the arrow to the right of the field name, and then select the Value Field Settings option"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Sum to Count, Average, Max or Min
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R29 · Count counts non-empty values
- **Claim:** The Count calculation gives the number of values that aren't empty.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Quote:** "The number of nonempty values."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Sum to Count, Average, Max or Min
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R30 · Average
- **Claim:** The Average calculation gives the average of the values.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Quote:** "The average of the values."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Sum to Count, Average, Max or Min
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R31 · Max
- **Claim:** The Max calculation gives the largest value.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Quote:** "The largest value."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Sum to Count, Average, Max or Min
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R32 · Min
- **Claim:** The Min calculation gives the smallest value.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Quote:** "The smallest value."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Sum to Count, Average, Max or Min
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R33 · Copy a field into Values
- **Claim:** You can drag the same field into Values as many times as you like to make copies, then give each copy its own calculation.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "Repeat step 1 as many times as you want to copy the field."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Putting Two Values Side by Side
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R34 · The Values label moves values to rows or columns
- **Claim:** With two or more fields in Values, Excel adds a Values label that you can move to the Columns or Rows area, which decides whether the values sit side by side or stacked.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "You can even move the Values Column label to the Column Labels area or Row Labels areas."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Putting Two Values Side by Side
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R35 · Columns nest
- **Claim:** When there is more than one field in Columns, a field lower down the list is nested inside the one above it.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "A column lower in position is nested within another column immediately above it."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Spreading a Field Across Columns
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R36 · Rows nest
- **Claim:** When there is more than one field in Rows, a field lower down the list is nested inside the one above it.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "A row lower in position is nested within another row immediately above it."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Stacking Two Fields in Rows
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R37 · Reorder fields within an area
- **Claim:** If an area holds more than one field, you change their order by dragging them to the position you want.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/office/use-the-field-list-to-arrange-fields-in-a-pivottable-43980e05-a585-4fcd-bd91-80160adfebec
- **Quote:** "you can rearrange the order by dragging the fields into the precise position you want"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Stacking Two Fields in Rows
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R38 · Compact form indents inner fields
- **Claim:** In compact form, the items from different row fields share one column and are indented to show which field they belong to.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "uses indentation to distinguish between the items from different fields"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Stacking Two Fields in Rows
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R39 · Expand and collapse buttons
- **Claim:** To expand or collapse an item, use the expand or collapse button beside it.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Quote:** "Select the expand or collapse button next to the item that you want to expand or collapse."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Expanding and Collapsing Groups
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R40 · Expand and collapse by double-click
- **Claim:** Double-clicking an item expands or collapses it.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Quote:** "Double-click the item that you want to expand or collapse."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Expanding and Collapsing Groups
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R41 · Collapse Entire Field
- **Claim:** Right-click an item, then Expand/Collapse, then Collapse Entire Field to hide the details for every item in that field.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Quote:** "To hide the details for all items in a field, select Collapse Entire Field."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Expanding and Collapsing Groups
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R42 · Show or hide the +/- buttons
- **Claim:** If the expand and collapse buttons are missing, the +/- Buttons command in the Show group on the Analyze tab turns them back on.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Quote:** "click +/- Buttons to show or hide the expand and collapse buttons"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Expanding and Collapsing Groups
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R43 · Expand and collapse buttons are on by default
- **Claim:** The expand and collapse buttons are shown by default, but they can be hidden, for example before printing a report.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Quote:** "The expand and collapse buttons are displayed by default"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Expanding and Collapsing Groups
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R44 · Headings get a 'Sum of' name
- **Claim:** When you set a value field's calculation, Excel puts it in the Custom Name box as a new heading, such as 'Sum of Amount', which you can change.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "Excel automatically appends it in the Custom Name section"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Renaming a Heading in a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R45 · Rename last
- **Claim:** Microsoft's advice is to rename PivotTable fields only after you've finished setting the calculations, because changing a calculation changes the name.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "it's best not to rename your PivotTable fields until you're finished setting up your PivotTable"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Renaming a Heading in a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R46 · Strip 'Sum of' with Find and Replace
- **Claim:** To remove 'Sum of' from every heading at once, use Find and Replace with 'Sum of' as the text to find and nothing as the replacement.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "use Find & Replace (Ctrl+H)"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Renaming a Heading in a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R47 · Number Format changes the whole field
- **Claim:** Choosing Number Format in the Value Field Settings dialog sets the number format for the entire field.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "you can change the number format for the entire field"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Formatting Numbers Inside a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R48 · Number Format from a right-click
- **Claim:** You can also right-click a value and choose Number Format.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "You can also right-click a value field, and then select Number Format."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Formatting Numbers Inside a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R49 · Preserve cell formatting on update
- **Claim:** The PivotTable Options setting 'Preserve cell formatting on update' keeps the table's layout and format each time you do something to it, and clearing it goes back to the defaults.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "select the Preserve cell formatting on update check box"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Formatting Numbers Inside a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R50 · Sort from the label arrow
- **Claim:** To sort a PivotTable, use the arrow on the Row Labels or Column Labels cell and pick a sort option such as Sort A to Z.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Quote:** "select the arrow on Row Labels or Column Labels, and then select the sort option you want"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R51 · What each sort does
- **Claim:** Sorting puts text in alphabetical order, numbers from smallest to largest, and dates from oldest to newest, or the reverse.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Quote:** "numbers will sort from smallest to largest (or vice versa)"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R52 · Sort by a value
- **Claim:** To sort by the numbers rather than the labels, right-click a value or subtotal, choose Sort, and pick a method.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Quote:** "You can sort on individual values or on subtotals by right-clicking a cell, choosing Sort, and then choosing a sort method."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R53 · Sort on the Grand Total column
- **Claim:** Choosing any number in the Grand Total column and sorting on it orders the items by their grand totals.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Quote:** "choose any number in the Grand Total column, and sort on it"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R54 · A value sort covers one level
- **Claim:** A sort on a value applies to all the cells at the same level in that column.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Quote:** "The sort order applies to all the cells at the same level in the column that contains the cell."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R55 · Leading spaces upset a sort
- **Claim:** Leading spaces in the data change the sort order, so remove them before sorting.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Quote:** "Data that has leading spaces will affect the sort results."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R56 · Sorting can follow the data
- **Claim:** In More Sort Options, a tick box lets the PivotTable sort itself again whenever its data updates, or stops it doing so.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Quote:** "either to permit or stop automatic sorting whenever the PivotTable data updates"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R57 · Manual sort
- **Claim:** Choosing Manual in the Sort dialog lets you rearrange items by dragging them.
- **Source:** Microsoft Support, "Sort data in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/sort-data-in-a-pivottable-or-pivotchart-e41f7107-b92d-44ef-861f-24430830450a
- **Quote:** "Select Manual to rearrange items by dragging them."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R58 · Untick Select All, tick the items
- **Claim:** To filter by item, open the filter arrow, untick Select All, then tick the items you want to show.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "uncheck Select All, and then select the check boxes next to the items you want to show"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Filtering Rows and Columns Inside a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R59 · Search box in the filter
- **Claim:** The filter menu has a Search box, so you can filter by typing text.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "You can also filter by entering text in the Search box."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Filtering Rows and Columns Inside a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R60 · Keep Only Selected Items
- **Claim:** Select items, right-click one, choose Filter, then Keep Only Selected Items to show just those.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "To display the selected items, click Keep Only Selected Items."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Filtering Rows and Columns Inside a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R61 · Hide Selected Items
- **Claim:** The same Filter menu has Hide Selected Items, which hides the items you selected.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "To hide the selected items, click Hide Selected Items."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Filtering Rows and Columns Inside a PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R62 · Label Filters
- **Claim:** Label Filters filter by a condition on the row or column labels.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "To filter by creating a conditional expression, select Label Filters"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Filtering by Words in a Label
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R63 · Value Filters
- **Claim:** Values Filters filter by the numbers in the PivotTable.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "To filter by values, select Values Filters and then create a values filter."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Filtering by a Value
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R64 · Top 10 path
- **Claim:** To keep the top or bottom items, choose Values Filters and then Top 10.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "Select Values Filters > Top 10."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Showing Only the Top Items
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R65 · Top 10: Top or Bottom, and how many
- **Claim:** In the Top 10 dialog the first box picks Top or Bottom and the second takes a number.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "In the first box, select Top or Bottom."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Showing Only the Top Items
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R66 · Top 10: Items, Percentage or Sum
- **Claim:** The third box in the Top 10 dialog decides whether the number counts items, a percentage or a sum.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "To filter by number of items, pick Items."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Showing Only the Top Items
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R67 · Top 10: which value
- **Claim:** The fourth box in the Top 10 dialog picks which values field the ranking uses.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "In the fourth box, select a Values field."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Showing Only the Top Items
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R68 · Report filter shows chosen items only
- **Claim:** With a report filter, the items you tick are shown in the PivotTable and the items you don't tick are hidden.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "Items you select in the filter are displayed in the PivotTable, and items that are not selected will be hidden."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Filters Box: One Filter for the Whole Table
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R69 · One sheet per filter item
- **Claim:** A field in the Filters area lets you create a separate PivotTable worksheet for each of its items.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "create individual PivotTable worksheets for each item in the Filter field"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Filters Box: One Filter for the Whole Table
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R70 · Clear a filter (Windows)
- **Claim:** To bring hidden items back, right-click another item in the same field, choose Filter, then Clear Filter.
- **Source:** Microsoft Support, "Filter data in a PivotTable": https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "Right-click another item in the same field, click Filter, and then click Clear Filter."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Clearing Filters and Starting Again
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R71 · Filter icon and Clear Filters (macOS)
- **Claim:** On Mac, the filter arrow changes to show a filter is on, and PivotTable Analyze, Clear, Clear Filters removes every filter at once.
- **Source:** Microsoft Support, "Filter data in a PivotTable" (macOS section of the page): https://support.microsoft.com/en-us/topic/cc1ed287-3a97-4e95-b377-ddfafe79fa8f
- **Quote:** "To remove all filtering at once, click PivotTable Analyze tab > Clear > Clear Filters."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Clearing Filters and Starting Again
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R72 · Include filtered items in totals
- **Claim:** The Subtotals menu on the Design tab has an Include Filtered Items in Totals option. The page doesn't say which way it is set by default, so try it in Excel before saying whether filtered-out items count toward a total.
- **Source:** Microsoft Support, "Show or hide subtotals and totals in a PivotTable": https://support.microsoft.com/en-us/office/show-or-hide-subtotals-and-totals-in-a-pivottable-fc4d8406-f230-4762-aa2f-310826f3e5e2
- **Quote:** "Click Include Filtered Items in Totals."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Clearing Filters and Starting Again
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R73 · Compact is the default
- **Claim:** Compact form is the default layout for a PivotTable.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "is therefore specified as the default layout form for PivotTables"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a Layout: Compact, Outline or Tabular
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R74 · Tabular form
- **Claim:** Tabular form shows one column for each field and has room for field headings.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "Tabular form displays one column per field and provides space for field headers."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a Layout: Compact, Outline or Tabular
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R75 · Outline form
- **Claim:** Outline form is like tabular form but can show subtotals at the top of each group.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "it can display subtotals at the top of every group"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a Layout: Compact, Outline or Tabular
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R76 · Tabular form for copying
- **Claim:** Show in Tabular Form gives a traditional table layout that is easy to copy to another worksheet.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "to easily copy cells to another worksheet, select Show in Tabular Form"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a Layout: Compact, Outline or Tabular
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R77 · Switch layout: Design, Report Layout
- **Claim:** To change layout, click in the PivotTable, then on the Design tab choose Report Layout in the Layout group.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "in the Layout group, select Report Layout"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a Layout: Compact, Outline or Tabular
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R78 · Repeat item labels (Web)
- **Claim:** In Excel for the web, the PivotTable Settings pane lets you choose Repeat or Don't repeat, so item labels appear on every row or only once. The Windows desktop steps are not on this page.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable" (Web section of the page): https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "Select Repeat or Don't repeat to choose whether item labels appear for each item or just once per item label value."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Repeating Item Labels and Spacing Out Groups
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R79 · Blank line after each item (Windows)
- **Claim:** In Field Settings, on the Layout & Print tab, a tick box inserts a blank line after each item label.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "select or clear the Insert blank line after each item label check box"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Repeating Item Labels and Spacing Out Groups
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R80 · Predefined styles
- **Claim:** A PivotTable can take one of many ready-made styles, also called quick styles.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "using one of numerous predefined PivotTable styles"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a PivotTable Style
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R81 · Styles are on the Design tab
- **Claim:** The styles are in the PivotTable Styles group on the Design tab.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "In the Design tab, in the PivotTable Styles group"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a PivotTable Style
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R82 · Banded Rows
- **Claim:** Banded Rows, in the PivotTable Style Options group, alternates a lighter and darker colour down the rows.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "To alternate each row with a lighter and darker color format, select Banded Rows."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a PivotTable Style
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R83 · Banding helps reading
- **Claim:** Banding, a darker and lighter background in turn, can make the data easier to read and scan.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "Banding can make it easier to read and scan data."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a PivotTable Style
- **Status:** new

---
 Choosing a PivotTable Style
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R84 · Group: right-click a value
- **Claim:** To group, right-click a value in the PivotTable and choose Group.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Quote:** "In the PivotTable, right-click a value and select Group."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Grouping Dates by Month
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R85 · Grouping box: start and end
- **Claim:** The Grouping box has Starting at and Ending at tick boxes, with values you can edit.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Quote:** "select Starting at and Ending at checkboxes, and edit the values if needed"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Grouping Dates by Month
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R86 · Group by a time period
- **Claim:** For dates, you pick the time period to group by under By.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Quote:** "Under By, select a time period."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Grouping Dates by Month
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R87 · Dates may group by themselves
- **Claim:** Microsoft says time fields are detected and grouped automatically when you add them to a PivotTable. Check in Excel what happens when you tick Date before the page tells the reader to group by hand.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Quote:** "relationships across time-related fields are automatically detected and grouped together when you add rows of time fields to your PivotTables"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Grouping Dates by Month
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R88 · Quarters and months
- **Claim:** Grouping can turn a long list of dates and times into quarters and months. The page doesn't say how to choose several periods at once, so check that in Excel.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Quote:** "group an unwieldy list date and time fields in the PivotTable into quarters and months"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Grouping Dates by Quarter and Year
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R89 · Group numbers by an interval
- **Claim:** For a number field, you type the size of the interval each group covers.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Quote:** "For numerical fields, enter a number that specifies the interval for each group."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Grouping Numbers Into Bands
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R90 · Group chosen items
- **Claim:** To group items by hand, hold Ctrl, select two or more values, then right-click and choose Group.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Quote:** "Hold Ctrl and select two or more values."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Grouping Text Items by Hand
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R91 · Name a group
- **Claim:** A group's name is changed through Field Settings, in the Custom Name box.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Quote:** "Change the Custom Name to something you want and then select OK."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Grouping Text Items by Hand
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R92 · Ungroup
- **Claim:** To ungroup, right-click any item in the group and choose Ungroup.
- **Source:** Microsoft Support, "Group or ungroup data in a PivotTable": https://support.microsoft.com/en-us/excel/get-started/group-or-ungroup-data-in-a-pivottable
- **Quote:** "Right-click any item that is in the group."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Ungrouping and Changing a Group
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R93 · Excel stores dates as numbers
- **Claim:** Excel stores dates as sequential serial numbers, so they can be used in calculations.
- **Source:** Microsoft Support, "WEEKDAY function": https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a
- **Quote:** "Microsoft Excel stores dates as sequential serial numbers so they can be used in calculations."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Why Dates Won't Group
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R94 · Dates typed as text cause problems
- **Claim:** Microsoft warns that problems can occur when dates are entered as text. It doesn't document the grouping failure itself, so test what Excel says in Excel.
- **Source:** Microsoft Support, "WEEKDAY function": https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a
- **Quote:** "Problems can occur if dates are entered as text."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Why Dates Won't Group
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R95 · Tables pick up new columns
- **Claim:** When the source is an Excel table, new columns appear in the PivotTable Fields list.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (macOS section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "any new columns are included in the PivotTable Fields list"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding a Helper Column to the Data
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R96 · Not a table: change the source
- **Claim:** If the source isn't an Excel table, you have to change the source data of the PivotTable, or use a dynamic named range.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (macOS section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "you need to either Change the source data for a PivotTable"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding a Helper Column to the Data
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R97 · Refresh to see new fields
- **Claim:** After adding fields to the source you may need to refresh the PivotTable before they show in the Field List.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "you may need to refresh the PivotTable to display any new fields"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding a Helper Column to the Data
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R98 · WEEKDAY
- **Claim:** WEEKDAY returns the day of the week for a date.
- **Source:** Microsoft Support, "WEEKDAY function": https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a
- **Quote:** "Returns the day of the week corresponding to a date."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding a Helper Column to the Data
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R99 · WEEKDAY gives 1 to 7
- **Claim:** By default WEEKDAY gives a whole number from 1 (Sunday) to 7 (Saturday).
- **Source:** Microsoft Support, "WEEKDAY function": https://support.microsoft.com/en-us/office/weekday-function-60e44483-2ed1-439f-8bd0-e404c190949a
- **Quote:** "The day is given as an integer, ranging from 1 (Sunday) to 7 (Saturday), by default."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding a Helper Column to the Data
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R100 · TEXT with DDDD gives the day name
- **Claim:** The TEXT function with the format code DDDD shows a date as the name of its weekday, such as Monday.
- **Source:** Microsoft Support, "TEXT function": https://support.microsoft.com/en-us/office/text-function-20d5ac4d-7b94-49fd-bb38-93d29371225c
- **Quote:** "Today's day of the week, like Monday"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding a Helper Column to the Data
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R101 · TEXT returns text
- **Claim:** TEXT turns a number into text, which can make it hard to use in later calculations.
- **Source:** Microsoft Support, "TEXT function": https://support.microsoft.com/en-us/office/text-function-20d5ac4d-7b94-49fd-bb38-93d29371225c
- **Quote:** "The TEXT function converts numbers to text, which may make it difficult to reference in later calculations."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding a Helper Column to the Data
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R102 · Show Values As
- **Claim:** Show Values As presents the same values in different ways without writing formulas.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Quote:** "you can use Show Values As to quickly present values in different ways"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Percent of the Grand Total
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R103 · Where Show Values As is
- **Claim:** To change how a value is shown, right-click the value and choose Show Values As.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Quote:** "In the PivotTable, right-click the value field, and then click Show Values As."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Percent of the Grand Total
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R104 · % of Grand Total
- **Claim:** % of Grand Total shows each value as a share of the grand total of everything in the report.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Quote:** "Displays values as a percentage of the grand total of all the values or data points in the report."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Percent of the Grand Total
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R105 · Show the value and its share together
- **Claim:** Because the same value field can be added more than once, you can show the actual value and another calculation side by side.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Quote:** "show the actual value and other calculations, such as a running total calculation, side by side"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Percent of the Grand Total
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R106 · Copies get a number on the name
- **Claim:** A value field added a second time gets a version number added to its name, which you can edit.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Quote:** "a version number is appended to its field name"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Percent of the Grand Total
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R107 · % of Column Total
- **Claim:** % of Column Total shows each value in a column as a share of that column's total.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Quote:** "Displays all the values in each column or series as a percentage of the total for the column or series."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Percent of a Row or a Column
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R108 · % of Row Total
- **Claim:** % of Row Total shows each value in a row as a share of that row's total.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Quote:** "Displays the value in each row or category as a percentage of the total for the row or category."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Percent of a Row or a Column
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R109 · Rank Largest to Smallest
- **Claim:** Rank Largest to Smallest gives the largest item rank 1, and each smaller value a higher rank number.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Quote:** "listing the largest item in the field as 1, and each smaller value with a higher rank value"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Rank Largest to Smallest
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R110 · Running Total in
- **Claim:** Running Total in shows each item's value as a running total across the items of a base field.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Quote:** "Displays the value for successive items in the Base field as a running total."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Running Totals
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R111 · Difference From
- **Claim:** Difference From shows each value as its difference from the value of one base item in a base field.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Quote:** "Displays values as the difference from the value of the Base item in the Base field."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Change From the Previous Month
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R112 · % Difference From
- **Claim:** % Difference From shows each value as a percentage difference from the value of one base item in a base field.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Quote:** "Displays values as the percentage difference from the value of the Base item in the Base field."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Percent Change From the Previous Month
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R113 · % Of
- **Claim:** % Of shows each value as a percentage of the value of one base item in a base field.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Quote:** "Displays values as a percentage of the value of the Base item in the Base field."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Comparing Everything to One Item
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R114 · No Calculation
- **Claim:** No Calculation shows the value that is in the field, which puts a changed view back to normal.
- **Source:** Microsoft Support, "Show different calculations in PivotTable value fields": https://support.microsoft.com/en-us/excel/show-different-calculations-in-pivottable-value-fields
- **Quote:** "Displays the value that is entered in the field."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Putting Back the Normal View
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R115 · Calculated fields
- **Claim:** When summary functions and custom calculations don't give the result you want, you can write your own formula in a calculated field.
- **Source:** Microsoft Support, "Calculate values in a PivotTable": https://support.microsoft.com/en-us/office/calculate-values-in-a-pivottable-11f41417-da80-435c-a5c6-b0185e59da77
- **Quote:** "you can create your own formulas in calculated fields and calculated items"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Your Own Calculation: A Calculated Field
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R116 · Calculated field: where
- **Claim:** A calculated field is added from the Analyze tab: Calculations group, Fields, Items, & Sets, then Calculated Field.
- **Source:** Microsoft Support, "Calculate values in a PivotTable": https://support.microsoft.com/en-us/office/calculate-values-in-a-pivottable-11f41417-da80-435c-a5c6-b0185e59da77
- **Quote:** "then select Calculated Field"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Your Own Calculation: A Calculated Field
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R117 · Calculated field: using other fields
- **Claim:** In the formula box, you use another field by selecting it in the Fields box and choosing Insert Field.
- **Source:** Microsoft Support, "Calculate values in a PivotTable": https://support.microsoft.com/en-us/office/calculate-values-in-a-pivottable-11f41417-da80-435c-a5c6-b0185e59da77
- **Quote:** "To use the data from another field in the formula, select the field in the Fields box, and then select Insert Field."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Your Own Calculation: A Calculated Field
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R118 · Calculated fields work on sums
- **Claim:** A calculated field's formula works on the sum of each field it uses, not on each individual row.
- **Source:** Microsoft Support, "Calculate values in a PivotTable": https://support.microsoft.com/en-us/office/calculate-values-in-a-pivottable-11f41417-da80-435c-a5c6-b0185e59da77
- **Quote:** "Formulas for calculated fields operate on the sum of the underlying data for any fields in the formula."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Your Own Calculation: A Calculated Field
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R119 · No cell references in a PivotTable formula
- **Claim:** A formula in a calculated field can't use cell references or defined names.
- **Source:** Microsoft Support, "Calculate values in a PivotTable": https://support.microsoft.com/en-us/office/calculate-values-in-a-pivottable-11f41417-da80-435c-a5c6-b0185e59da77
- **Quote:** "you cannot use cell references or defined names"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Your Own Calculation: A Calculated Field
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R120 · Distinct Count
- **Claim:** Distinct Count is a summary function that counts the number of unique values.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Quote:** "The number of unique values."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Counting Each Item Once
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R121 · Distinct Count needs the Data Model
- **Claim:** Distinct Count only works when the PivotTable uses the Data Model in Excel.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Quote:** "This summary function only works when you use the Data Model in Excel."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Counting Each Item Once
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R122 · Add this data to the Data Model
- **Claim:** The Create PivotTable dialog has a tick box that adds the table or range to the workbook's Data Model.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "adds the table or range being used for this PivotTable into the workbook's Data Model"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Counting Each Item Once
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R123 · Double-click a value to see its rows
- **Claim:** Double-clicking a value in the PivotTable puts the detail data behind it on a new worksheet.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Quote:** "The detail data that the value field is based on is placed on a new worksheet."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Drilling Down to the Rows Behind a Number
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R124 · Show Details
- **Claim:** You can also right-click a value and choose Show Details.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Quote:** "Right-click a field in the values area of the PivotTable, and then click Show Details."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Drilling Down to the Rows Behind a Number
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R125 · Remove the detail sheet
- **Claim:** To get rid of the detail sheet, right-click its sheet tab and choose Hide or Delete.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Quote:** "Right-click the sheet tab of the worksheet that contains the value field data, and then click Hide or Delete."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Drilling Down to the Rows Behind a Number
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R126 · Enable show details option
- **Claim:** A PivotTable Options tick box, Enable show details, turns the double-click behaviour on or off.
- **Source:** Microsoft Support, "Expand, collapse, or show details in a PivotTable or PivotChart": https://support.microsoft.com/en-us/office/expand-collapse-or-show-details-in-a-pivottable-or-pivotchart-d70d7e70-d230-4d45-81db-1f5e39bcb394
- **Quote:** "clear or select the Enable show details check box to disable or enable this option"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Drilling Down to the Rows Behind a Number
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R127 · New data needs a refresh
- **Claim:** If you add new data to the source, the PivotTable needs to be refreshed to include it.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "If you add new data to your PivotTable data source, any PivotTables that were built on that data source need to be refreshed."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** When Your Data Grows Past the PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R128 · Right-click Refresh
- **Claim:** To refresh one PivotTable, right-click it and choose Refresh.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Quote:** "You can right-click the PivotTable and select Refresh."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** When Your Data Grows Past the PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R129 · Refresh All
- **Claim:** To refresh every PivotTable in the workbook at once, use the Refresh arrow on the PivotTable Analyze tab and choose Refresh All.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Quote:** "select the Refresh arrow and choose Refresh All"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** When Your Data Grows Past the PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R130 · Tables grow with the PivotTable
- **Claim:** Rows added to an Excel table are included in a PivotTable built on it when you refresh.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data" (macOS section of the page): https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "rows added to a table are included automatically in the PivotTable when you refresh the data"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** When Your Data Grows Past the PivotTable
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R131 · Change Data Source: expand the rows
- **Claim:** After creating a PivotTable you can change the range its data comes from, for example to include more rows.
- **Source:** Microsoft Support, "Change the source data for a PivotTable": https://support.microsoft.com/en-us/office/change-the-source-data-for-a-pivottable-afd93524-f7de-432c-84d0-3896fbbc2577
- **Quote:** "you can expand the source data to include more rows of data"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Which Data a PivotTable Reads
- **Status:** new
- **Verified:** 2026-10-09, quote found on the page

---

## R132 · Change Data Source: where
- **Claim:** On the Analyze tab, in the Data group, choose Change Data Source, then Change Data Source again.
- **Source:** Microsoft Support, "Change the source data for a PivotTable": https://support.microsoft.com/en-us/office/change-the-source-data-for-a-pivottable-afd93524-f7de-432c-84d0-3896fbbc2577
- **Quote:** "in the Data group, select Change Data Source"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Which Data a PivotTable Reads
- **Status:** new

---

## R133 · Change Data Source: the range
- **Claim:** In the dialog you choose Select a table or range and enter the first cell in the Table/Range box.
- **Source:** Microsoft Support, "Change the source data for a PivotTable": https://support.microsoft.com/en-us/office/change-the-source-data-for-a-pivottable-afd93524-f7de-432c-84d0-3896fbbc2577
- **Quote:** "enter the first cell in the Table/Range text box"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Which Data a PivotTable Reads
- **Status:** new

---

## R134 · Big source changes: start again
- **Claim:** If the source has changed a lot, for example with more or fewer columns, Microsoft suggests creating a new PivotTable.
- **Source:** Microsoft Support, "Change the source data for a PivotTable": https://support.microsoft.com/en-us/office/change-the-source-data-for-a-pivottable-afd93524-f7de-432c-84d0-3896fbbc2577
- **Quote:** "consider creating a new PivotTable"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Which Data a PivotTable Reads
- **Status:** new

---

## R135 · Refresh data when opening the file
- **Claim:** In PivotTable Options, on the Data tab, a tick box refreshes the PivotTable when the file opens.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Quote:** "On the Data tab, check the Refresh data when opening the file box."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Refreshing Every Time the File Opens
- **Status:** new

---

## R136 · Older Excel doesn't refresh itself
- **Claim:** In older versions of Excel, PivotTables are not refreshed automatically.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Quote:** "PivotTables are not refreshed automatically"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Refreshing Every Time the File Opens
- **Status:** new

---

## R137 · Auto Refresh is Insider only
- **Claim:** PivotTable Auto Refresh is described as available only to Microsoft 365 Insider program participants.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Quote:** "PivotTable Auto Refresh is currently available to participants of the Microsoft 365 Insider program."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Refreshing Every Time the File Opens
- **Status:** new

---

## R138 · For empty cells show
- **Claim:** In PivotTable Options, on the Layout & Format tab, the For empty cells show box sets what appears in empty cells.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "select the For empty cells show check box, and then type the value that you want to display in empty cells"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Filling Empty Cells With a Zero
- **Status:** new

---

## R139 · Zeros: clear the check box
- **Claim:** Microsoft's tip says that to display zeros you clear the For empty cells show check box.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "To display zeros, clear the check box."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Filling Empty Cells With a Zero
- **Status:** new

---

## R140 · Where the empty-cell option lives
- **Claim:** The option is on the Layout & Format tab of the PivotTable Options dialog.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "select the Layout & Format tab"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Filling Empty Cells With a Zero
- **Status:** new

---

## R141 · Clear Autofit to keep widths
- **Claim:** To keep the current column width when the PivotTable updates, clear the Autofit column widths on update check box.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "To keep the current PivotTable column width, clear the Autofit column widths on update check box."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Keeping Column Widths When You Refresh
- **Status:** new

---

## R142 · Refresh page says to tick Autofit
- **Claim:** The Refresh page says that to stop widths and formatting adjusting on refresh you check both Autofit column widths on update and Preserve cell formatting on update. This disagrees with the layout page (previous finding), so test it in Excel before the page tells the reader which way to set it.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Quote:** "check the Autofit column widths on update and Preserve cell formatting on update boxes"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Keeping Column Widths When You Refresh
- **Status:** new

---

## R143 · Paste Values
- **Claim:** The Values paste option pastes the formula results, without formatting or comments.
- **Source:** Microsoft Support, "Paste options": https://support.microsoft.com/en-us/excel/paste-options
- **Quote:** "Formula results, without formatting or comments."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Copying a PivotTable as Plain Values
- **Status:** new

---

## R144 · Paste Special Values
- **Claim:** In Paste Special, Values pastes only the values as they are displayed in the cells.
- **Source:** Microsoft Support, "Paste options": https://support.microsoft.com/en-us/excel/paste-options
- **Quote:** "Pastes only the values of the copied data as displayed in the cells."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Copying a PivotTable as Plain Values
- **Status:** new

---

## R145 · Paste Special shortcut
- **Claim:** Ctrl+Alt+V opens Paste Special.
- **Source:** Microsoft Support, "Paste options": https://support.microsoft.com/en-us/excel/paste-options
- **Quote:** "Press Ctrl+Alt+V."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Copying a PivotTable as Plain Values
- **Status:** new

---

## R146 · GETPIVOTDATA
- **Claim:** GETPIVOTDATA is a function that returns visible data from a PivotTable.
- **Source:** Microsoft Support, "GETPIVOTDATA function": https://support.microsoft.com/en-us/excel/functions/getpivotdata-function
- **Quote:** "The GETPIVOTDATA function returns visible data from a PivotTable."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Why a Formula Shows GETPIVOTDATA
- **Status:** new

---

## R147 · Clicking a PivotTable cell writes GETPIVOTDATA
- **Claim:** Typing an equals sign in a cell and then clicking a PivotTable cell makes Excel write a GETPIVOTDATA formula for you.
- **Source:** Microsoft Support, "GETPIVOTDATA function": https://support.microsoft.com/en-us/excel/functions/getpivotdata-function
- **Quote:** "clicking the cell in the PivotTable that contains the data you want to return"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Why a Formula Shows GETPIVOTDATA
- **Status:** new

---

## R148 · Turn off Generate GetPivotData
- **Claim:** To stop Excel writing GETPIVOTDATA when you click a PivotTable cell, clear Generate GetPivotData in PivotTable Options.
- **Source:** Microsoft Support, "GETPIVOTDATA function": https://support.microsoft.com/en-us/excel/functions/getpivotdata-function
- **Quote:** "uncheck the Generate GetPivotData option"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Why a Formula Shows GETPIVOTDATA
- **Status:** new

---

## R149 · GETPIVOTDATA grand total
- **Claim:** =GETPIVOTDATA("Sales", $A$3) returns the grand total of the Sales field, where A3 is a cell in the PivotTable.
- **Source:** Microsoft Support, "GETPIVOTDATA function": https://support.microsoft.com/en-us/excel/functions/getpivotdata-function
- **Quote:** "Returns the grand total of the Sales field."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Why a Formula Shows GETPIVOTDATA
- **Status:** new

---

## R150 · GETPIVOTDATA gives #REF! if hidden
- **Claim:** GETPIVOTDATA gives a #REF! error when the item you ask for isn't visible, for example because of a filter.
- **Source:** Microsoft Support, "GETPIVOTDATA function": https://support.microsoft.com/en-us/excel/functions/getpivotdata-function
- **Quote:** "GETPIVOTDATA returns the #REF! error value"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Why a Formula Shows GETPIVOTDATA
- **Status:** new

---

## R151 · Auto Refresh is per data source
- **Claim:** Auto Refresh is set for the data source, so turning it on or off affects every PivotTable connected to that source.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/en-us/office/refresh-pivottable-data-6d24cece-a038-468a-8176-8b6568ca9be2
- **Quote:** "Auto Refresh is set per data source, so turning it on or off affects all PivotTables connected to that data source."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Two PivotTables From One List
- **Status:** new

---

## R152 · GETPIVOTDATA picks the newest PivotTable
- **Claim:** If a GETPIVOTDATA reference covers cells from more than one PivotTable, the answer comes from the one created most recently.
- **Source:** Microsoft Support, "GETPIVOTDATA function": https://support.microsoft.com/en-us/excel/functions/getpivotdata-function
- **Quote:** "data will be retrieved from whichever PivotTable was created most recently"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Two PivotTables From One List
- **Status:** new

---

## R153 · Don't mix data types in a value field
- **Claim:** Microsoft stresses not mixing data types in a field you use as a value, because text turns a sum into a count.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "it's so important to make sure you don't mix data types for value fields"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** When the Numbers Look Wrong
- **Status:** new

---

## R154 · Switching to Sum zeroes the text
- **Claim:** If you change a counted field to Sum, blank and non-number values are changed to 0 so they can be summed.
- **Source:** Microsoft Support, "Sum values in a PivotTable": https://support.microsoft.com/en-us/office/sum-values-in-a-pivottable-9ee73790-646a-42c9-9fc7-e1ca30096d9c
- **Quote:** "any blank or nonnumeric values are changed to 0 in the PivotTable so they can be summed"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** When the Numbers Look Wrong
- **Status:** new

---

## R155 · For error values show
- **Claim:** A PivotTable Options setting, For error values show, replaces error values with something you type.
- **Source:** Microsoft Support, "Design the layout and format of a PivotTable": https://support.microsoft.com/en-us/excel/design-the-layout-and-format-of-a-pivottable
- **Quote:** "To change the error display, select the For error values show check box."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** When the Numbers Look Wrong
- **Status:** new

---

## R156 · PivotChart purpose
- **Claim:** A PivotChart adds a visual to your data, for people who can't quickly see what's going on from a table of numbers.
- **Source:** Microsoft Support, "Create a PivotChart": https://support.microsoft.com/en-us/excel/get-started/create-a-pivotchart
- **Quote:** "PivotCharts are a great way to add data visualizations to your data."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** PivotCharts
- **Status:** new

---

## R157 · Insert, then PivotChart
- **Claim:** To make a PivotChart, select a cell in the data, choose Insert, then PivotChart.
- **Source:** Microsoft Support, "Create a PivotChart": https://support.microsoft.com/en-us/excel/get-started/create-a-pivotchart
- **Quote:** "Select Insert and choose PivotChart."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** PivotCharts
- **Status:** new

---

## R158 · Chart from an existing PivotTable
- **Claim:** You can also make the chart from a PivotTable you already have, by selecting a cell in it and choosing Insert and PivotChart.
- **Source:** Microsoft Support, "Create a PivotChart": https://support.microsoft.com/en-us/excel/get-started/create-a-pivotchart
- **Quote:** "Select a cell in your table."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** PivotCharts
- **Status:** new

---

## R159 · Filters and slicers filter the chart (macOS)
- **Claim:** On Mac, when you filter the PivotTable or use a slicer, the chart is filtered too.
- **Source:** Microsoft Support, "Create a PivotChart" (macOS section of the page): https://support.microsoft.com/en-us/excel/get-started/create-a-pivotchart
- **Quote:** "When you do that, the chart will also be filtered."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** PivotCharts
- **Status:** new

---

## R160 · Change Chart Type
- **Claim:** To change an existing chart's type, select it, open the Design tab and choose Change Chart Type.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "Select the chart, click the Design tab, and click Change Chart Type."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a Chart Type for a PivotChart
- **Status:** new

---

## R161 · Column chart: categories and values
- **Claim:** A column chart typically shows categories along the bottom and values up the side.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "A column chart typically displays categories along the horizontal (category) axis and values along the vertical (value) axis"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a Chart Type for a PivotChart
- **Status:** new

---

## R162 · Clustered column suits unordered names
- **Claim:** A clustered column chart suits categories that are names in no particular order, such as item names or people.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "Names that are not in any specific order (for example, item names, geographic names, or the names of people)."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a Chart Type for a PivotChart
- **Status:** new

---

## R163 · Line chart for trends
- **Claim:** Line charts suit trends at equal intervals such as months, quarters or fiscal years.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "they're ideal for showing trends in data at equal intervals, like months, quarters, or fiscal years"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a Chart Type for a PivotChart
- **Status:** new

---

## R164 · Pie chart shows parts of one total
- **Claim:** A pie chart shows the size of the items in one data series as parts of the whole.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "Pie charts show the size of items in one data series, proportional to the sum of the items."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a Chart Type for a PivotChart
- **Status:** new

---

## R165 · Pie chart limits
- **Claim:** Consider a pie chart only when there are no more than seven categories that are parts of the whole.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "You have no more than seven categories, all of which represent parts of the whole pie."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a Chart Type for a PivotChart
- **Status:** new

---

## R166 · Not every chart type works with a PivotTable (macOS)
- **Claim:** On Mac, only column, line, pie and radar charts work with a PivotTable. The Windows page doesn't give a list, so check which types your Excel allows.
- **Source:** Microsoft Support, "Create a PivotChart" (macOS section of the page): https://support.microsoft.com/en-us/excel/get-started/create-a-pivotchart
- **Quote:** "other types of charts do not work with PivotTables at this time"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing a Chart Type for a PivotChart
- **Status:** new

---

## R167 · Hide field buttons
- **Claim:** On a PivotChart, the Hide All command on the Field Buttons drop-down on the Analyze tab hides the grey field buttons.
- **Source:** Microsoft Learn, "Chart.ShowAllFieldButtons property (Excel)": https://learn.microsoft.com/en-us/office/vba/api/excel.chart.showallfieldbuttons
- **Quote:** "corresponds to the Hide All command on the Field Buttons drop-down list of the Analyze tab"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Cleaning Up a PivotChart
- **Status:** new

---

## R168 · Chart title and axis titles
- **Claim:** You can add a chart title and axis titles to any type of chart.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Quote:** "you can add chart title and axis titles, to any type of chart"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Cleaning Up a PivotChart
- **Status:** new

---

## R169 · Add a chart title (Windows)
- **Claim:** To add a chart title, use the + sign at the top right of the chart.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Quote:** "Select the + sign to the top-right of the chart."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Cleaning Up a PivotChart
- **Status:** new

---

## R170 · No axis titles on pie charts
- **Claim:** Pie and doughnut charts have no axes, so they can't have axis titles.
- **Source:** Microsoft Support, "Add or remove titles in a chart" (Mac section of the page): https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Quote:** "Chart types that do not have axes (such as pie and doughnut charts) cannot display axis titles either."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Cleaning Up a PivotChart
- **Status:** new

---

## R171 · What a slicer is
- **Claim:** A slicer is a set of buttons that filters a table or a PivotTable.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "Slicers provide buttons that you can click to filter"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Slicers
- **Status:** new

---

## R172 · Slicers show the filter state
- **Claim:** A slicer also shows what is currently filtered.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "slicers also indicate the current filtering state"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Slicers
- **Status:** new

---

## R173 · Insert a slicer
- **Claim:** To add a slicer, click in the PivotTable and choose Insert, then Slicer.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "On the Insert tab, select Slicer."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Slicers
- **Status:** new

---

## R174 · Pick the fields for slicers
- **Claim:** In the Insert Slicers dialog you tick the fields you want a slicer for, then choose OK.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "select the check boxes for the fields you want to display, then select OK"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Slicers
- **Status:** new

---

## R175 · Select several slicer items
- **Claim:** Hold Ctrl to select more than one item in a slicer.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "To select more than one item, hold Ctrl, and then select the items that you want to show."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Slicers
- **Status:** new

---

## R176 · Clear a slicer
- **Claim:** The Clear Filter button in a slicer clears its filter.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "To clear a slicer's filters, select Clear Filter in the slicer."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Slicers
- **Status:** new

---

## R177 · Delete a slicer
- **Claim:** To delete a slicer, select it and press Delete.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "Select the slicer, and then press Delete."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Slicers
- **Status:** new

---

## R178 · Slicer style
- **Claim:** A slicer's colour style is picked on the Slicer tab, or the Design tab in Excel 2016 and older.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "On the Slicer or Design tab, select a color style that you want."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Making Slicers Look Right
- **Status:** new

---

## R179 · Resize a slicer
- **Claim:** To resize a slicer, select and hold its corner and drag.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "Select and hold the corner of a slicer to adjust and resize it."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Making Slicers Look Right
- **Status:** new

---

## R180 · Slicer header
- **Claim:** A slicer's header shows the category of the items in it.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "A slicer header indicates the category of the items in the slicer."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Making Slicers Look Right
- **Status:** new

---

## R181 · Reuse a slicer
- **Claim:** A slicer that is already on one PivotTable can be used to filter another.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "If you have a slicer on a PivotTable already, you can use that same slicer to filter another PivotTable."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** One Slicer for Two PivotTables
- **Status:** new

---

## R182 · Same data source only
- **Claim:** A slicer can only be connected to PivotTables that share the same data source.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "Slicers can only be connected to PivotTables that share the same data source."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** One Slicer for Two PivotTables
- **Status:** new

---

## R183 · Report Connections
- **Claim:** On the Slicer tab, Report Connections lets you tick the PivotTables the slicer should filter.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "On the Slicer tab, select Report Connections."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** One Slicer for Two PivotTables
- **Status:** new

---

## R184 · Tick the other PivotTable
- **Claim:** In the Report Connections dialog you select the check box of the PivotTable where you want the slicer to be available.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "select the check box of the PivotTable in which you want the slicer to be available"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** One Slicer for Two PivotTables
- **Status:** new

---

## R185 · Disconnect a slicer
- **Claim:** To disconnect a slicer, click in the PivotTable, choose Filter Connections on the PivotTable Analyze tab and clear the tick.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "select Filter Connections"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** One Slicer for Two PivotTables
- **Status:** new

---

## R186 · What a timeline is
- **Claim:** A timeline is a filter for dates and times, with a slider to zoom in on the period you want.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Quote:** "a dynamic filter option that lets you easily filter by date/time"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Timelines
- **Status:** new

---

## R187 · Insert a timeline
- **Claim:** To add a timeline, click in the PivotTable, then choose Analyze and Insert Timeline.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Quote:** "click Analyze > Insert Timeline"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Timelines
- **Status:** new

---

## R188 · Pick the date field
- **Claim:** In the Insert Timeline dialog you tick the date fields you want.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Quote:** "check the date fields you want, and click OK"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Timelines
- **Status:** new

---

## R189 · Four time levels
- **Claim:** A timeline can filter by years, quarters, months or days.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Quote:** "one of four time levels (years, quarters, months, or days)"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Timelines
- **Status:** new

---

## R190 · Select a range of periods
- **Claim:** To select a date range, click a period tile and drag across more tiles, then adjust with the handles.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Quote:** "click a period tile and drag to include additional tiles to select the date range you want"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Timelines
- **Status:** new

---

## R191 · One timeline, several PivotTables
- **Claim:** A single timeline can filter several PivotTables, provided they use the same data source.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Quote:** "you can use a single Timeline to filter multiple PivotTables"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Timelines
- **Status:** new

---

## R192 · Clear a timeline
- **Claim:** The Clear Filter button clears a timeline.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Quote:** "To clear a timeline, click the Clear Filter button."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Timelines
- **Status:** new

---

## R193 · Slicer and timeline on the same date field
- **Claim:** To combine a slicer with a timeline on one date field, tick Allow multiple filters per field in PivotTable Options.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Quote:** "you can do that by checking the Allow multiple filters per field box"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Timelines
- **Status:** new

---

## R194 · Move and resize a timeline
- **Claim:** A timeline can be moved by dragging it and resized with its sizing handles.
- **Source:** Microsoft Support, "Create a PivotTable timeline to filter dates": https://support.microsoft.com/en-us/excel/create-a-pivottable-timeline-to-filter-dates
- **Quote:** "To move the timeline, simply drag it to the location you want."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Laying Out a One-Page Dashboard
- **Status:** new

---

## R195 · Scale to Fit: width
- **Claim:** On the Page Layout tab, in Scale to Fit, setting Width to 1 page puts the columns on one page.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Quote:** "in the Width dropdown list, select 1 page"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Printing the Dashboard on One Page
- **Status:** new

---

## R196 · Scale to Fit: height
- **Claim:** To print the whole sheet on a single page, also set Height to 1 page.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Quote:** "To print your worksheet on a single page, select 1 page in the Height box."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Printing the Dashboard on One Page
- **Status:** new

---

## R197 · Shrunk print can be hard to read
- **Claim:** Fitting a sheet onto one page shrinks the data, so the printout may be difficult to read.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Quote:** "the printout may be difficult to read because Excel shrinks the data to fit"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Printing the Dashboard on One Page
- **Status:** new

---

## R198 · The Scale box shows the shrink
- **Claim:** The Scale box shows how much the sheet has been scaled.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Quote:** "To see how much scaling is used, look at the number in the Scale box."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Printing the Dashboard on One Page
- **Status:** new

---

## R199 · Landscape
- **Claim:** Switch from portrait to landscape through Page Layout, Page Setup, Orientation.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Quote:** "go to Page Layout > Page Setup > Orientation, and select Landscape"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Printing the Dashboard on One Page
- **Status:** new

---

## R200 · Print Area
- **Claim:** The Print Area command in the Page Setup group leaves out columns or rows you don't want printed.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Quote:** "Use the Print Area command (Page Setup group) to exclude any columns or rows that you don't need to print."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Printing the Dashboard on One Page
- **Status:** new

---

## R201 · Fit Sheet on One Page is a scaling option
- **Claim:** Microsoft's page names Fit Sheet on One Page as one of the scaling options you can find applied in Print Preview.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/excel/scale-a-worksheet
- **Quote:** "check if a scaling option like Fit Sheet on One Page has been applied"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Printing the Dashboard on One Page
- **Status:** new

---

## R202 · Clear Filter clears a slicer
- **Claim:** A slicer's Clear Filter button removes the filter by selecting all the items.
- **Source:** Microsoft Support, "Use slicers to filter data": https://support.microsoft.com/en-us/office/use-slicers-to-filter-data-249f966b-a9d5-4b0f-b31a-12651785d29d
- **Quote:** "A Clear Filter button removes the filter by selecting all items in the slicer."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Checking the Dashboard Before You Send It
- **Status:** new

---
