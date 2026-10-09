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

## R1 · Formulas start with an equal sign
- **Claim:** In Excel every formula begins with an equal sign.
- **Source:** Microsoft Support, "Overview of formulas in Excel": https://support.microsoft.com/en-us/office/overview-of-formulas-in-excel-ecfdc708-9162-49e8-b993-c311f47ca173
- **Quote:** "Formulas in Excel always begin with the equal sign."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** What a Formula Actually Is
- **Status:** accepted as F1, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R2 · SUM ignores text
- **Claim:** The SUM function adds the numbers in the cells it is given, and it ignores text values.
- **Source:** Microsoft Support, "SUM function": https://support.microsoft.com/en-us/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89
- **Quote:** "SUM will ignore text values and give you the sum of just the numeric values."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** SUM and AutoSum
- **Status:** accepted as F2, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R3 · PivotTables summarise data
- **Claim:** A PivotTable is a tool that calculates, summarizes and analyzes data in a table.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "A PivotTable is a powerful tool to calculate, summarize, and analyze data"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Summary Tables: Totals by Group
- **Status:** accepted as F3, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R4 · Turn a range into a table
- **Claim:** You can turn a range of cells into an Excel table.
- **Source:** Microsoft Support, "Overview of Excel tables": https://support.microsoft.com/en-us/office/overview-of-excel-tables-7ab0bb7d-3a9e-4b56-a3c9-6c94334e492c
- **Quote:** "you can turn a range of cells into an Excel table"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Turning Your Data Into a Table
- **Status:** accepted as F4, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R5 · SUMIF adds only matching cells
- **Claim:** SUMIF adds up the values in a range that meet a condition you specify.
- **Source:** Microsoft Support, "SUMIF function": https://support.microsoft.com/en-us/excel/sumif-function
- **Quote:** "You use the SUMIF function to sum the values in a range that meet criteria that you specify."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** SUMIF: Adding Up Only What Matches
- **Status:** accepted as F5, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R6 · Sort by text, numbers or dates
- **Claim:** Excel can sort the rows of a range or table by text, by numbers or by dates.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Quote:** "You can sort data by text (A to Z or Z to A), numbers (smallest to largest or largest to smallest)"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting Rows
- **Status:** accepted as F6, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R7 · SUM skips empty cells
- **Claim:** SUM adds up the numbers in the cells you select and skips blank cells and text.
- **Source:** Microsoft Learn, "WorksheetFunction.Sum method (Excel)": https://learn.microsoft.com/office/vba/api/excel.worksheetfunction.sum
- **Quote:** "Empty cells, logical values, or text in the array or reference are ignored."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** SUM and AutoSum
- **Status:** accepted as F7, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R8 · AVERAGE counts zeros
- **Claim:** AVERAGE leaves out blank cells and text, but a cell that shows zero still counts toward the average.
- **Source:** Microsoft Learn, "WorksheetFunction.Average method (Excel)": https://learn.microsoft.com/office/vba/api/excel.worksheetfunction.average#remarks
- **Quote:** "however, cells with the value zero are included."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** AVERAGE, MIN, MAX and COUNT
- **Status:** accepted as F8, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R9 · SUMIF without sum_range
- **Claim:** If you leave out the last part of SUMIF, it adds up the same cells it checked for a match.
- **Source:** Microsoft Learn, "WorksheetFunction.SumIf method (Excel)": https://learn.microsoft.com/office/vba/api/excel.worksheetfunction.sumif
- **Quote:** "If sum_range is omitted, the cells in range are both evaluated by criteria and added if they match criteria."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** SUMIF: Adding Up Only What Matches
- **Status:** accepted as F9, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R10 · AutoFilter filters a list
- **Claim:** AutoFilter filters a list so that only the rows matching your choice stay visible.
- **Source:** Microsoft Learn, "Range.AutoFilter method (Excel)": https://learn.microsoft.com/office/vba/api/excel.range.autofilter
- **Quote:** "Filters a list by using the AutoFilter."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Filtering Rows
- **Status:** accepted as F10, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R11 · An Excel table is one unit on the sheet
- **Claim:** An Excel table is a block of data on a sheet that Excel treats as one object.
- **Source:** Microsoft Learn, "ListObjects object (Excel)": https://learn.microsoft.com/office/vba/api/excel.listobjects
- **Quote:** "Each ListObject object represents a table on the worksheet."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Turning Your Data Into a Table
- **Status:** accepted as F11, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R12 · Clustered column chart type
- **Claim:** Excel has a built-in chart type called Clustered Column.
- **Source:** Microsoft Learn, "XlChartType enumeration (Excel)": https://learn.microsoft.com/office/vba/api/excel.xlcharttype
- **Quote:** "Clustered Column."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Building Your First Column Chart
- **Status:** accepted as F12, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R13 · .xlsx is the normal Excel file type
- **Claim:** The normal Excel file type, .xlsx, is the standard way to save a workbook.
- **Source:** Microsoft Learn, "XlFileFormat enumeration (Excel)": https://learn.microsoft.com/office/vba/api/excel.xlfileformat
- **Quote:** "Open XML Workbook"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Saving, and Which File Type to Use
- **Status:** accepted as F13, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R14 · .xlsm keeps macros
- **Claim:** The .xlsm file type is a workbook that can keep macros, which are small automated steps.
- **Source:** Microsoft Learn, "XlFileFormat enumeration (Excel)": https://learn.microsoft.com/office/vba/api/excel.xlfileformat
- **Quote:** "Open XML Workbook Macro Enabled"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Saving, and Which File Type to Use
- **Status:** accepted as F14, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R15 · Copy fill repeats source
- **Claim:** A copy-style fill repeats the values and formatting of your starting cells across the cells you fill.
- **Source:** Microsoft Learn, "XlAutoFillType enumeration (Excel)": https://learn.microsoft.com/office/vba/api/excel.xlautofilltype
- **Quote:** "Copy the values and formats from the source range to the target range, repeating if necessary."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Selecting, Copying and Filling
- **Status:** accepted as F15, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R16 · References can be relative or absolute
- **Claim:** Excel formulas can use relative or absolute cell addresses, and Excel can switch a formula between them.
- **Source:** Microsoft Learn, "Application.ConvertFormula method (Excel)": https://learn.microsoft.com/office/vba/api/excel.application.convertformula
- **Quote:** "between relative and absolute references"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Locking a Cell With the Dollar Sign
- **Status:** accepted as F16, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R17 · Cell address is a letter and a number
- **Claim:** A cell is named by its column letter followed by its row number, such as D50.
- **Source:** Microsoft Learn, "Columns and rows are labeled numerically in Excel": https://learn.microsoft.com/troubleshoot/microsoft-365-apps/excel/numeric-columns-and-rows
- **Quote:** "To refer to a cell, type the column letter followed by the row number."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Workbooks, Sheets and Cells
- **Status:** accepted as F31, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R18 · Drag the fill handle
- **Claim:** You can quickly copy formulas into adjacent cells by dragging the fill handle.
- **Source:** Microsoft Support, "Fill a formula down into adjacent cells": https://support.microsoft.com/en-us/excel/fill-a-formula-down-into-adjacent-cells
- **Quote:** "You can quickly copy formulas into adjacent cells by dragging the fill handle"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Selecting, Copying and Filling
- **Status:** accepted as F32, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R19 · AutoSum location
- **Claim:** AutoSum is on the Home tab and the Formulas tab.
- **Source:** Microsoft Support, "Use AutoSum to sum numbers in Excel": https://support.microsoft.com/en-us/excel/use-autosum-to-sum-numbers-in-excel
- **Quote:** "AutoSum is in two locations: Home > AutoSum, and Formulas > AutoSum."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** SUM and AutoSum
- **Status:** accepted as F33, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R20 · AutoSum writes SUM
- **Claim:** When you use AutoSum, Excel enters a formula that uses the SUM function to add the numbers.
- **Source:** Microsoft Support, "Use AutoSum to sum numbers in Excel": https://support.microsoft.com/en-us/excel/use-autosum-to-sum-numbers-in-excel
- **Quote:** "When you select AutoSum, Excel automatically enters a formula (that uses the SUM function) to sum the numbers."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** SUM and AutoSum
- **Status:** accepted as F34, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R21 · Sort from a column cell
- **Claim:** To sort, select a cell in the column you want to sort, then use the Sort and Filter group on the Data tab.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Quote:** "Select a cell in the column you want to sort."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting Rows
- **Status:** accepted as F35, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R22 · Filter from the header arrow
- **Claim:** To filter a table, select the arrow in the column header and pick a filter option.
- **Source:** Microsoft Support, "Filter data in a range or table in Excel": https://support.microsoft.com/en-us/office/filter-data-in-a-range-or-table-7fbe34f4-8382-431d-942e-41e9a88f6a96
- **Quote:** "To apply a filter, select the arrow in the column header, and pick a filter option."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Filtering Rows
- **Status:** accepted as F36, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R23 · Format as Table option
- **Claim:** When you make a table, the checkbox named My table as headers tells Excel the first row holds the column headings.
- **Source:** Microsoft Support, "Overview of Excel tables": https://support.microsoft.com/en-us/office/overview-of-excel-tables-7ab0bb7d-3a9e-4b56-a3c9-6c94334e492c
- **Quote:** "select the checkbox next to My table as headers"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Turning Your Data Into a Table
- **Status:** accepted as F37, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R24 · Recommended Charts on Insert tab
- **Claim:** To insert a chart, click Insert, then Recommended Charts, and pick a chart from the suggestions.
- **Source:** Microsoft Support, "Create a chart with recommended charts": https://support.microsoft.com/en-us/excel/create-a-chart-with-recommended-charts
- **Quote:** "Click Insert > Recommended Charts."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Building Your First Column Chart
- **Status:** accepted as F38, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R25 · PivotTable from the Insert tab
- **Claim:** To make a summary table, select Insert, then PivotTable.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "Select Insert > PivotTable."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Summary Tables: Totals by Group
- **Status:** accepted as F39, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R26 · Non-numeric fields go to Rows
- **Claim:** By default, Excel puts non-numeric fields in the Rows area of a PivotTable and numeric fields in the Values area.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "By default, non-numeric fields are added to the Rows area"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Summary Tables: Totals by Group
- **Status:** accepted as F40, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R27 · Save As from the File menu
- **Claim:** To save a copy in another file type, choose File, then Save As.
- **Source:** Microsoft Support, "Save a workbook in another file format": https://support.microsoft.com/en-us/office/6a16c862-4a36-48f9-a300-c2ca0065286e
- **Quote:** "Select File > Save As."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Saving, and Which File Type to Use
- **Status:** accepted as F41, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R28 · F4 switches reference type
- **Claim:** Pressing F4 cycles a selected cell reference through the relative, absolute and mixed reference types.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Quote:** "Press F4 to switch between the reference types."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Locking a Cell With the Dollar Sign
- **Status:** accepted as F42, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R29 · Dollar sign makes a reference absolute
- **Claim:** Putting a dollar sign before the column and before the row makes a cell reference absolute, so it stays fixed when copied.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Quote:** "you make the cell reference absolute by preceding the columns (B and C) and row (2) with a dollar sign"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Locking a Cell With the Dollar Sign
- **Status:** accepted as F43, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R30 · A1 notation names cells and blocks
- **Claim:** In A1 notation, a block of cells is written with its top-left and bottom-right cells, such as A1:B5, and rows are numbered in the same way.
- **Source:** Microsoft Learn, "Refer to Cells and Ranges by Using A1 Notation": https://learn.microsoft.com/office/vba/excel/concepts/cells-and-ranges/refer-to-cells-and-ranges-by-using-a1-notation
- **Quote:** "Cells A1 through B5"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Workbooks, Sheets and Cells
- **Status:** accepted as F44, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R31 · Adding, sorting, filtering and charts
- **Claim:** Once data is in rows and columns, Excel can add it up, sort and filter it, put it in tables, and build charts.
- **Source:** Microsoft Support, "Basic tasks in Excel": https://support.microsoft.com/en-us/excel/basic-tasks-in-excel
- **Quote:** "That allows you to add up your data, sort and filter it, put it in tables, and build great-looking charts."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** What Excel Is For
- **Status:** accepted as F45, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R32 · Simple calculations and tracking
- **Claim:** Excel also works well for simple calculations and for tracking almost any kind of information.
- **Source:** Microsoft Support, "Basic tasks in Excel": https://support.microsoft.com/en-us/excel/basic-tasks-in-excel
- **Quote:** "it also works really well for simple calculations and tracking almost any kind of information"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** What Excel Is For
- **Status:** accepted as F46, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R33 · What a cell can hold
- **Claim:** Each cell can hold a number, some text, or a formula.
- **Source:** Microsoft Support, "Basic tasks in Excel": https://support.microsoft.com/en-us/excel/basic-tasks-in-excel
- **Quote:** "Cells can contain numbers, text, or formulas."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** What Excel Is For
- **Status:** accepted as F47, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R34 · Workbook is the file
- **Claim:** An Excel file is called a workbook.
- **Source:** Microsoft Support, "Basic tasks in Excel": https://support.microsoft.com/en-us/excel/basic-tasks-in-excel
- **Quote:** "Excel documents are called workbooks."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Workbooks, Sheets and Cells
- **Status:** accepted as F48, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R35 · Sheets in a workbook
- **Claim:** A workbook holds sheets, and you can add as many sheets as you want to one workbook.
- **Source:** Microsoft Support, "Basic tasks in Excel": https://support.microsoft.com/en-us/excel/basic-tasks-in-excel
- **Quote:** "You can add as many sheets as you want to a workbook."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Workbooks, Sheets and Cells
- **Status:** accepted as F49, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R36 · The ribbon's tabs
- **Claim:** The ribbon has tabs such as Home and Insert, and each tab groups related options together.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "The ribbon groups related options on tabs."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** A Tour of the Excel Window
- **Status:** accepted as F50, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R37 · Formula bar shows the formula
- **Claim:** The formula bar shows the formula in the selected cell.
- **Source:** Microsoft Support, "Overview of formulas in Excel": https://support.microsoft.com/en-us/excel/get-started/overview-of-formulas-in-excel
- **Quote:** "To see a formula in the formula bar, select a cell."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** A Tour of the Excel Window
- **Status:** accepted as F51, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R38 · Name box position
- **Claim:** The Name box sits to the left of the formula bar.
- **Source:** Microsoft Support, "Select specific cells or ranges in Excel": https://support.microsoft.com/en-us/excel/select-specific-cells-or-ranges-in-excel
- **Quote:** "which is located to the left of the formula bar"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** A Tour of the Excel Window
- **Status:** accepted as F52, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R39 · Typing an address selects a cell
- **Claim:** Typing a cell address in the Name box and pressing Enter selects that cell.
- **Source:** Microsoft Support, "Select specific cells or ranges in Excel": https://support.microsoft.com/en-us/excel/select-specific-cells-or-ranges-in-excel
- **Quote:** "type B3 to select that cell"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Moving Around the Sheet
- **Status:** accepted as F53, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R40 · New sheet button
- **Claim:** The New Sheet plus icon at the bottom of the workbook adds a worksheet.
- **Source:** Microsoft Support, "Insert or delete a worksheet": https://support.microsoft.com/en-us/excel/get-started/insert-or-delete-a-worksheet
- **Quote:** "Select the New Sheet plus icon"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding and Renaming Sheets
- **Status:** accepted as F54, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R41 · Rename a sheet tab
- **Claim:** Double-clicking a sheet name on its tab lets you rename the sheet.
- **Source:** Microsoft Support, "Insert or delete a worksheet": https://support.microsoft.com/en-us/excel/get-started/insert-or-delete-a-worksheet
- **Quote:** "Double-click the sheet name on the Sheet tab to quickly rename it."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding and Renaming Sheets
- **Status:** accepted as F55, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R42 · Next sheet shortcut
- **Claim:** Ctrl+Page down moves to the next sheet in a workbook.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Move to the next sheet in a workbook."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding and Renaming Sheets
- **Status:** accepted as F56, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R43 · Arrow keys move one cell
- **Claim:** The arrow keys move the active cell one cell at a time, up, down, left or right.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Move one cell up, down, left, or right in a worksheet."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Moving Around the Sheet
- **Status:** accepted as F57, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R44 · Edge of a block of data
- **Claim:** Ctrl with an arrow key jumps to the edge of the current block of data.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Move to the edge of the current data region in a worksheet."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Moving Around the Sheet
- **Status:** accepted as F58, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R45 · Ctrl+Home
- **Claim:** Ctrl+Home moves to the beginning of the worksheet.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Move to the beginning of a worksheet."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Moving Around the Sheet
- **Status:** accepted as F59, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R46 · Ctrl+End
- **Claim:** Ctrl+End moves to the last used cell, at the lowest used row of the rightmost used column.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Move to the last cell on a worksheet, to the lowest used row of the rightmost used column."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Moving Around the Sheet
- **Status:** accepted as F60, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R47 · Enter moves down
- **Claim:** Enter completes the entry and, by default, selects the cell below.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "selects the cell below (by default)"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Moving Around the Sheet
- **Status:** accepted as F61, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R48 · Sheet tabs at the bottom
- **Claim:** The worksheet tabs sit at the bottom of the Excel workbook.
- **Source:** Microsoft Support, "Where are my worksheet tabs?": https://support.microsoft.com/en-us/excel/where-are-my-worksheet-tabs
- **Quote:** "the worksheet tabs at the bottom of your Excel workbook"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** A Tour of the Excel Window
- **Status:** accepted as F62, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R49 · Ribbon along the top edge
- **Claim:** In Excel the ribbon is a horizontal strip along the top edge of the window, with its related groups on tabs.
- **Source:** Microsoft Learn, "Ribbon overview" (developer documentation, applies to Excel): https://learn.microsoft.com/en-us/visualstudio/vsto/ribbon-overview?view=vs-2022
- **Quote:** "along a horizontal strip at the top edge of an application window"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** A Tour of the Excel Window
- **Status:** accepted as F63, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R50 · Rename with Enter
- **Claim:** To rename a sheet, double-click its tab, type the new name, and press Enter.
- **Source:** Microsoft Support, "Rename a worksheet" (en-au, Microsoft 365): https://support.microsoft.com/en-au/office/rename-a-worksheet-8ad39220-ee16-46d0-9c92-bd97cbdfaf91
- **Quote:** "type a new name, and then press Enter"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding and Renaming Sheets
- **Status:** accepted as F64, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R51 · Sample file has four sheets
- **Claim:** The sample file Corner Shop sales.xlsx has four sheets: Sales, Products, Targets and Staff.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, sheet names read with openpyxl on 2026-10-09 (make.py, seed 11).
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: First Look at the Corner Shop Sales
- **Status:** accepted as F65, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R52 · Sales sheet last cell
- **Claim:** On the Sales sheet of the sample file, the last cell in use is G241. Pressing Ctrl+End there should land on it.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, Sales sheet, last used cell read with openpyxl on 2026-10-09. Not yet tried in Excel itself.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: First Look at the Corner Shop Sales
- **Status:** accepted as F66, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R53 · Sales rows
- **Claim:** The Sales sheet of the sample file has one heading row and 240 sales rows.
- **Source:** My own work: datasets/excel-beginner/make.py writes 240 sales rows, and answers.json records rows: 240, checked on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: First Look at the Corner Shop Sales
- **Status:** accepted as F67, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R54 · Tab moves one cell right
- **Claim:** The Tab key moves the active cell one cell to the right.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Move one cell to the right in a worksheet."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Typing Into a Cell
- **Status:** accepted as F68, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R55 · Esc cancels an entry
- **Claim:** Esc cancels an entry in the cell or the formula bar before you finish it.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Cancel an entry in the cell or formula bar."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Undo and Cancel
- **Status:** accepted as F69, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R56 · Enter or Tab to next cell
- **Claim:** After you type in a cell, pressing Enter or Tab moves to the next cell.
- **Source:** Microsoft Support, "Basic tasks in Excel": https://support.microsoft.com/en-us/excel/basic-tasks-in-excel
- **Quote:** "Press Enter or Tab to move to the next cell."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Typing Into a Cell
- **Status:** accepted as F70, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R57 · Ctrl+Z undoes
- **Claim:** Ctrl+Z undoes the last action.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Undo the last action."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Undo and Cancel
- **Status:** accepted as F71, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R58 · F2 edits in place
- **Claim:** F2 edits the active cell and puts the insertion point at the end of its contents.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Edit the active cell and put the insertion point at the end of its contents."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Editing and Clearing a Cell
- **Status:** accepted as F72, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R59 · Delete clears contents
- **Claim:** Delete removes the contents of the selected cells and leaves their formats in place.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Removes the cell contents (data and formulas) from selected cells without affecting cell formats"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Editing and Clearing a Cell
- **Status:** accepted as F73, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R60 · Shift with arrow extends
- **Claim:** Shift with an arrow key extends the selection by one cell.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Extend the selection of cells by one cell."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Selecting Cells
- **Status:** accepted as F74, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R61 · Ctrl+Space selects column
- **Claim:** Ctrl+Space selects an entire column in a worksheet.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Select an entire column in a worksheet."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Selecting Cells
- **Status:** accepted as F75, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R62 · Shift+Space selects row
- **Claim:** Shift+Space selects an entire row in a worksheet.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Select an entire row in a worksheet."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Selecting Cells
- **Status:** accepted as F76, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R63 · Alert on numbers stored as text
- **Claim:** Excel usually shows an alert next to a cell where numbers are stored as text.
- **Source:** Microsoft Support, "Convert numbers stored as text to numbers in Excel": https://support.microsoft.com/en-us/excel/convert-numbers-stored-as-text-to-numbers-in-excel
- **Quote:** "an alert next to the cell where numbers are being stored as text"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Numbers Stored as Text
- **Status:** accepted as F77, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R64 · Convert to Number
- **Claim:** To fix the alert, select the cells, click the error indicator in the top left corner, and choose Convert to Number.
- **Source:** Microsoft Support, "Convert numbers stored as text to numbers in Excel": https://support.microsoft.com/en-us/excel/convert-numbers-stored-as-text-to-numbers-in-excel
- **Quote:** "Select Convert to Number from the menu."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Numbers Stored as Text
- **Status:** accepted as F78, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R65 · Green triangle removed
- **Claim:** After the cells are converted, the green triangle warning is removed.
- **Source:** Microsoft Support, "Convert numbers stored as text to numbers in Excel": https://support.microsoft.com/en-us/excel/convert-numbers-stored-as-text-to-numbers-in-excel
- **Quote:** "green triangle warning removed"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Numbers Stored as Text
- **Status:** accepted as F79, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R66 · Alt+Shift+F10 for the error menu
- **Claim:** Alt+Shift+F10 opens the error indicator menu from the keyboard.
- **Source:** Microsoft Support, "Convert numbers stored as text to numbers in Excel": https://support.microsoft.com/en-us/excel/convert-numbers-stored-as-text-to-numbers-in-excel
- **Quote:** "or use the keyboard shortcut Alt+Shift+F10"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Numbers Stored as Text
- **Status:** accepted as F80, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R67 · Typed 2/2 read as a date
- **Claim:** Typing 2/2 in a cell makes Excel interpret the entry as a date.
- **Source:** Microsoft Support, "Format numbers as dates or times": https://support.microsoft.com/en-us/excel/format-numbers-as-dates-or-times
- **Quote:** "Excel automatically interprets this as a date"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Entering Dates Excel Can Read
- **Status:** accepted as F81, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R68 · Default date format from regional settings
- **Claim:** The default date format for a typed date comes from the regional date and time settings in Control Panel.
- **Source:** Microsoft Support, "Format numbers as dates or times": https://support.microsoft.com/en-us/excel/format-numbers-as-dates-or-times
- **Quote:** "This default format is based on the regional date and time settings that are specified in Control Panel"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Entering Dates Excel Can Read
- **Status:** accepted as F82, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R69 · Products sheet headings
- **Claim:** The Products sheet of the sample file has three headings: Product, Category and Unit price.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, Products sheet, row 1 read with openpyxl on 2026-10-09 (make.py, seed 11).
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: Typing and Fixing a Short List
- **Status:** accepted as F83, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R70 · Bold, italic and underline
- **Claim:** Bold, italic and underline apply to the text or numbers in a cell once you select the cell.
- **Source:** Microsoft Support, "Format text in cells": https://support.microsoft.com/en-US/excel/format-text-in-cells
- **Quote:** "If you want text or numbers in a cell to appear bold, italic, or have a single or double underline, select the cell."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Bold and Fonts
- **Status:** accepted as F84, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R71 · Font style, size and colour
- **Claim:** On the Home tab you can change a cell's font style, size and colour, or apply effects.
- **Source:** Microsoft Support, "Format text in cells": https://support.microsoft.com/en-US/excel/format-text-in-cells
- **Quote:** "Change font style, size, color, or apply effects"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Bold and Fonts
- **Status:** accepted as F85, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R72 · Font size arrow
- **Claim:** To change the font size, click the arrow next to Font Size and pick the size you want.
- **Source:** Microsoft Support, "Change the font style and size for a worksheet": https://support.microsoft.com/en-us/office/change-the-font-style-and-size-for-a-worksheet-b3f1792b-9980-4b92-9aa5-5dd6e940b195
- **Quote:** "To change font size, click the arrow next to the default Font Size and pick the size you want."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Bold and Fonts
- **Status:** accepted as F86, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R73 · Currency or Accounting for money
- **Claim:** To show numbers as money, apply the Currency or Accounting number format to the cells.
- **Source:** Microsoft Support, "Format numbers as currency in Excel": https://support.microsoft.com/en-us/excel/format-numbers-as-currency-in-excel
- **Quote:** "To do this, you apply either the Currency or Accounting number format to the cells that you want to format."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Showing Money With Currency
- **Status:** accepted as F87, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R74 · Accounting Number Format button
- **Claim:** The Accounting Number Format button is in the Number group on the Home tab.
- **Source:** Microsoft Support, "Format numbers as currency in Excel": https://support.microsoft.com/en-us/excel/format-numbers-as-currency-in-excel
- **Quote:** "On the Home tab, in the Number group, select Accounting Number Format."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Showing Money With Currency
- **Status:** accepted as F88, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R75 · Ctrl+Shift+$ applies Currency
- **Claim:** Pressing Ctrl+Shift+$ applies the Currency format to the selected cells.
- **Source:** Microsoft Support, "Format numbers as currency in Excel": https://support.microsoft.com/en-us/excel/format-numbers-as-currency-in-excel
- **Quote:** "If you want to apply the Currency format instead, select the cells, and press Ctrl+Shift+$."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Showing Money With Currency
- **Status:** accepted as F89, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R76 · Accounting lines up symbols
- **Claim:** The Accounting format lines up currency symbols and decimal points in a column of data.
- **Source:** Microsoft Learn, "How to control and understand settings in the Format Cells dialog box in Excel": https://learn.microsoft.com/troubleshoot/microsoft-365-apps/excel/format-cells-settings
- **Quote:** "This format lines up the currency symbols and decimal points in a column of data."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Showing Money With Currency
- **Status:** accepted as F90, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R77 · Percent format multiplies by 100
- **Claim:** Applying the Percentage format to numbers already in a workbook multiplies those numbers by 100.
- **Source:** Microsoft Support, "Format numbers as percentages in Excel": https://support.microsoft.com/en-us/excel/format-numbers-as-percentages-in-excel
- **Quote:** "If you apply the Percentage format to existing numbers in a workbook, Excel multiplies those numbers by 100 to convert them to percentages."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Percentages and Decimal Places
- **Status:** accepted as F91, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R78 · Percent Style button
- **Claim:** The Percent Style button, in the Number group on the Home tab, applies percentage formatting to the selected cells.
- **Source:** Microsoft Support, "Format numbers as percentages in Excel": https://support.microsoft.com/en-us/excel/format-numbers-as-percentages-in-excel
- **Quote:** "To quickly apply percentage formatting to selected cells, click Percent Style in the Number group on the Home tab"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Percentages and Decimal Places
- **Status:** accepted as F92, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R79 · Increase and Decrease Decimal
- **Claim:** On the Home tab, Increase Decimal and Decrease Decimal show more or fewer digits after the decimal point.
- **Source:** Microsoft Support, "Round a number to the decimal places I want in Excel": https://support.microsoft.com/en-US/Excel/round-a-number-to-the-decimal-places-i-want-in-excel
- **Quote:** "Go to Home > Number and select Increase Decimal or Decrease Decimal to show more or fewer digits after the decimal point."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Percentages and Decimal Places
- **Status:** accepted as F93, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R80 · Drag column boundary
- **Claim:** To widen or narrow one column, drag the boundary on the right side of its heading until the column is the width you want.
- **Source:** Microsoft Support, "Change column width or row height": https://support.microsoft.com/en-us/excel/change-column-width-or-row-height
- **Quote:** "drag the boundary on the right side of the column B header until the column is the width that you want."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Column Widths
- **Status:** accepted as F94, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R81 · Double-click to fit
- **Claim:** Double-clicking the boundary between two column headings makes the column fit the size of its text.
- **Source:** Microsoft Support, "Change column width or row height": https://support.microsoft.com/en-us/excel/change-column-width-or-row-height
- **Quote:** "A quick way to make the column width fit the size of the text is to double-click the boundary between column headers."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Column Widths
- **Status:** accepted as F95, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R82 · Drag row boundary
- **Claim:** To change the height of one row, drag the boundary below its row heading until the row is the height you want.
- **Source:** Microsoft Support, "Change column width or row height": https://support.microsoft.com/en-us/excel/change-column-width-or-row-height
- **Quote:** "To change the height of a single row, drag the boundary below the row heading until the row is the height you want."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Column Widths
- **Status:** accepted as F96, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R83 · When to change width
- **Claim:** Changing the row height or column width can help when you cannot see all the data in a cell.
- **Source:** Microsoft Support, "Change column width or row height": https://support.microsoft.com/en-us/excel/change-column-width-or-row-height
- **Quote:** "If you can't see all the data in a cell, changing the row height or column width can help"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Changing Column Widths
- **Status:** accepted as F97, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R84 · Borders button styles
- **Claim:** To apply a border, open the arrow next to Borders on the Home tab and select a border style.
- **Source:** Microsoft Support, "Apply or remove cell borders on a worksheet": https://support.microsoft.com/en-us/Excel/apply-or-remove-cell-borders-on-a-worksheet
- **Quote:** "select the arrow next to Borders, and then select a border style."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Borders
- **Status:** accepted as F98, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R85 · Borders button in Font group
- **Claim:** The Borders button is in the Font group on the Home tab.
- **Source:** Microsoft Support, "Apply or remove cell borders on a worksheet": https://support.microsoft.com/en-us/Excel/apply-or-remove-cell-borders-on-a-worksheet
- **Quote:** "On the Home tab, in the Font group, select the arrow next to Borders"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Borders
- **Status:** accepted as F99, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R86 · No Border removes borders
- **Claim:** Choosing No Border from the Borders menu removes cell borders.
- **Source:** Microsoft Support, "Apply or remove cell borders on a worksheet": https://support.microsoft.com/en-us/Excel/apply-or-remove-cell-borders-on-a-worksheet
- **Quote:** "To remove cell borders, select the arrow next to Borders, and then select No Border."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Borders
- **Status:** accepted as F100, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R87 · Fill Color menu
- **Claim:** To fill cells with a solid colour, open the Fill Color menu and pick a colour from Theme Colors or Standard Colors.
- **Source:** Microsoft Support, "Apply or remove cell shading in Excel": https://support.microsoft.com/en-us/excel/apply-or-remove-cell-shading-in-excel
- **Quote:** "select the arrow next to Fill Color, and then under Theme Colors or Standard Colors, select the color that you want."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Colour in Cells
- **Status:** accepted as F101, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R88 · Fill Color in Font group
- **Claim:** The Fill Color button is in the Font group on the Home tab.
- **Source:** Microsoft Support, "Apply or remove cell shading in Excel": https://support.microsoft.com/en-us/excel/apply-or-remove-cell-shading-in-excel
- **Quote:** "in the Font group, select the arrow next to Fill Color"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Colour in Cells
- **Status:** accepted as F102, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R89 · No Fill removes shading
- **Claim:** Choosing No Fill from the Fill Color menu removes a cell's shading.
- **Source:** Microsoft Support, "Apply or remove cell shading in Excel": https://support.microsoft.com/en-us/excel/apply-or-remove-cell-shading-in-excel
- **Quote:** "select the arrow next to Fill Color, and then select No Fill."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Colour in Cells
- **Status:** accepted as F103, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R90 · Font Color for text
- **Claim:** To change the colour of text, select Font Color and pick a colour.
- **Source:** Microsoft Support, "Format text in cells": https://support.microsoft.com/en-US/excel/format-text-in-cells
- **Quote:** "To change the font color, select Font Color and pick a color."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Colour in Cells
- **Status:** accepted as F104, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R91 · Sales money columns
- **Claim:** On the Sales sheet of the sample file, the Unit price and Amount columns use the £ currency format.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, Sales sheet, number formats read with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: Making the Sales Sheet Readable
- **Status:** accepted as F105, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R92 · A1 notation, narrowed
- **Claim:** In A1 notation, A1:B5 means the cells from A1 through B5.
- **Source:** Microsoft Learn, "Refer to Cells and Ranges by Using A1 Notation": https://learn.microsoft.com/office/vba/excel/concepts/cells-and-ranges/refer-to-cells-and-ranges-by-using-a1-notation
- **Quote:** "Cells A1 through B5"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Bold and Fonts
- **Status:** accepted as F291, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R93 · Result appears in the cell
- **Claim:** A formula's result appears in the cell that holds the formula.
- **Source:** Microsoft Support, "Overview of formulas in Excel": https://support.microsoft.com/en-us/office/overview-of-formulas-in-excel-ecfdc708-9162-49e8-b993-c311f47ca173
- **Quote:** "The result of the calculation appears in the cell with the formula."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** What a Formula Actually Is
- **Status:** accepted as F106, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R94 · Enter gives the result
- **Claim:** Pressing Enter gives the result of a formula.
- **Source:** Microsoft Support, "Overview of formulas in Excel": https://support.microsoft.com/en-us/office/overview-of-formulas-in-excel-ecfdc708-9162-49e8-b993-c311f47ca173
- **Quote:** "Press Enter to get the result."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Your First Formula: Adding Two Cells
- **Status:** accepted as F107, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R95 · Typed numbers change only when edited
- **Claim:** A formula that uses typed numbers, not cell references, changes its result only when you edit the formula.
- **Source:** Microsoft Support, "Overview of formulas in Excel": https://support.microsoft.com/en-us/office/overview-of-formulas-in-excel-ecfdc708-9162-49e8-b993-c311f47ca173
- **Quote:** "the result changes only if you modify the formula"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Your First Formula: Adding Two Cells
- **Status:** accepted as F108, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R96 · Plus sign adds
- **Claim:** In a formula, the plus sign adds.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Quote:** "(plus sign) Addition"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Symbols in a Formula
- **Status:** accepted as F109, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R97 · Minus sign subtracts
- **Claim:** In a formula, the minus sign subtracts.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Quote:** "(minus sign) Subtraction"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Symbols in a Formula
- **Status:** accepted as F110, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R98 · Asterisk multiplies
- **Claim:** In a formula, the asterisk multiplies.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Quote:** "(asterisk) Multiplication"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Symbols in a Formula
- **Status:** accepted as F111, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R99 · Forward slash divides
- **Claim:** In a formula, the forward slash divides.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Quote:** "(forward slash) Division"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Symbols in a Formula
- **Status:** accepted as F112, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R100 · Caret raises to a power
- **Claim:** In a formula, the caret raises a number to a power.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Quote:** "(caret) Exponentiation"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** The Symbols in a Formula
- **Status:** accepted as F113, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R101 · Multiplication first
- **Claim:** Excel does multiplication before addition in a formula.
- **Source:** Microsoft Support, "The order in which Excel performs operations in formulas": https://support.microsoft.com/en-us/excel/the-order-in-which-excel-performs-operations-in-formulas
- **Quote:** "Excel performs multiplication before addition"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Brackets and the Order of Calculation
- **Status:** accepted as F114, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R102 · Parentheses change the order
- **Claim:** Parentheses change the order of calculation, so the part inside them is worked out first.
- **Source:** Microsoft Support, "The order in which Excel performs operations in formulas": https://support.microsoft.com/en-us/excel/the-order-in-which-excel-performs-operations-in-formulas
- **Quote:** "if you use parentheses to change the syntax, Excel adds 5 and 2 together and then multiplies the result by 3 to produce 21"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Brackets and the Order of Calculation
- **Status:** accepted as F115, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R103 · SUM adds values
- **Claim:** The SUM function adds the values it is given.
- **Source:** Microsoft Support, "SUM function": https://support.microsoft.com/en-us/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89
- **Quote:** "The SUM function adds values."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** SUM and AutoSum
- **Status:** accepted as F116, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R104 · SUM over a range
- **Claim:** =SUM(A2:A10) adds the values in cells A2 to A10.
- **Source:** Microsoft Support, "SUM function": https://support.microsoft.com/en-us/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89
- **Quote:** "=SUM(A2:A10) Adds the values in cells A2:10"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** SUM and AutoSum
- **Status:** accepted as F117, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R105 · AVERAGE is the arithmetic mean
- **Claim:** AVERAGE returns the average, or arithmetic mean, of the numbers it is given.
- **Source:** Microsoft Support, "AVERAGE function": https://support.microsoft.com/en-US/excel/average-function
- **Quote:** "Returns the average (arithmetic mean) of the arguments"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** AVERAGE: The Middle of a Group
- **Status:** accepted as F118, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R106 · How an average is found
- **Claim:** An average is found by adding a group of numbers and dividing by how many numbers there are.
- **Source:** Microsoft Support, "AVERAGE function": https://support.microsoft.com/en-US/excel/average-function
- **Quote:** "Average, which is the arithmetic mean, and is calculated by adding a group of numbers and then dividing by the count of those numbers."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** AVERAGE: The Middle of a Group
- **Status:** accepted as F119, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R107 · MIN is the smallest
- **Claim:** MIN returns the smallest number in a group of values.
- **Source:** Microsoft Support, "MIN function": https://support.microsoft.com/en-us/excel/functions/min-function
- **Quote:** "Returns the smallest number in a set of values."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** MIN and MAX: Smallest and Largest
- **Status:** accepted as F120, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R108 · MIN ignores empty cells and text
- **Claim:** MIN ignores empty cells, logical values and text in a range.
- **Source:** Microsoft Support, "MIN function": https://support.microsoft.com/en-us/excel/functions/min-function
- **Quote:** "Empty cells, logical values, or text in the array or reference are ignored."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** MIN and MAX: Smallest and Largest
- **Status:** accepted as F121, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R109 · MAX is the largest
- **Claim:** MAX returns the largest value in a group of values.
- **Source:** Microsoft Support, "MAX function": https://support.microsoft.com/en-US/excel/functions/max-function
- **Quote:** "Returns the largest value in a set of values."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** MIN and MAX: Smallest and Largest
- **Status:** accepted as F122, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R110 · COUNT counts numbers
- **Claim:** COUNT counts the cells that contain numbers.
- **Source:** Microsoft Support, "COUNT function": https://support.microsoft.com/en-us/excel/count-function
- **Quote:** "Counts the number of cells that contain numbers"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** COUNT: How Many Numbers
- **Status:** accepted as F123, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R111 · ROUND syntax
- **Claim:** ROUND takes a number and the number of digits to round it to.
- **Source:** Microsoft Support, "ROUND function": https://support.microsoft.com/en-us/Excel/functions/round-function
- **Quote:** "ROUND(number, num_digits)"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** ROUND: Fewer Decimal Places
- **Status:** accepted as F124, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R112 · Decimal places
- **Claim:** When num_digits is above zero, ROUND rounds the number to that many decimal places.
- **Source:** Microsoft Support, "ROUND function": https://support.microsoft.com/en-us/Excel/functions/round-function
- **Quote:** "If num_digits is greater than 0 (zero), then number is rounded to the specified number of decimal places."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** ROUND: Fewer Decimal Places
- **Status:** accepted as F125, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R113 · Stored value used
- **Claim:** Excel calculates with the stored value of a number, not the value you see in the cell.
- **Source:** Microsoft Support, "Stop rounding numbers": https://support.microsoft.com/excel/stop-rounding-numbers
- **Quote:** "Excel uses the stored value, not the value that is visible in the cell."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** ROUND: Fewer Decimal Places
- **Status:** accepted as F126, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R114 · Amount total
- **Claim:** On the Sales sheet, the Amount column adds up to 6325.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, Sales sheet, Amount column G2 to G241 summed with openpyxl on 2026-10-09 (240 values).
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: First Formulas on the Sales Sheet
- **Status:** accepted as F127, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R115 · Amount average
- **Claim:** The average of the Amount column is 26.35 to two decimal places.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, Sales sheet, Amount column G2 to G241 summed with openpyxl on 2026-10-09 (240 values).
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: First Formulas on the Sales Sheet
- **Status:** accepted as F128, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R116 · Smallest and largest amount
- **Claim:** The smallest amount on the Sales sheet is 2, and the largest is 90.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, Sales sheet, Amount column G2 to G241 summed with openpyxl on 2026-10-09 (240 values).
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: First Formulas on the Sales Sheet
- **Status:** accepted as F129, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R117 · References are relative by default
- **Claim:** By default, a cell reference is relative, which means it is measured from the cell that holds the formula.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Quote:** "By default, a cell reference is a relative reference, which means that the reference is relative to the location of the cell."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Copying Formulas: Relative References
- **Status:** accepted as F130, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R118 · Copying changes a relative reference
- **Claim:** When you copy a formula that contains a relative cell reference, the reference in the formula changes.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Quote:** "When you copy a formula that contains a relative cell reference, that reference in the formula will change."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Copying Formulas: Relative References
- **Status:** accepted as F131, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R119 · Copying =B4*C4 from D4 to D5
- **Claim:** Copying the formula =B4*C4 from D4 to D5 gives =B5*C5 in D5.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Quote:** "if you copy the formula =B4*C4 from cell D4 to D5, the formula in D5 adjusts to the right by one column and becomes =B5*C5"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Copying Formulas: Relative References
- **Status:** accepted as F132, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R120 · Absolute formula stays the same
- **Claim:** Copying the formula =$B$4*$C$4 from D4 to D5 leaves the formula exactly the same.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Quote:** "the formula stays exactly the same"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Locking a Cell With the Dollar Sign
- **Status:** accepted as F133, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R121 · Mixed references fix the column or the row
- **Claim:** A dollar sign before just the column or just the row mixes absolute and relative, fixing either the column or the row, as in $B4 or C$4.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Quote:** "mix absolute and relative cell references by preceding either the column or the row value with a dollar sign"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Mixed References: Lock Only the Column or the Row
- **Status:** accepted as F134, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R122 · Copying $A1 two down and two right
- **Claim:** Copied two cells down and two cells to the right, a $A1 reference becomes $A3, so it is mixed.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Quote:** "$A1 (absolute column and relative row) $A3 (the reference is mixed)"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Mixed References: Lock Only the Column or the Row
- **Status:** accepted as F135, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R123 · Copying A$1 two down and two right
- **Claim:** Copied two cells down and two cells to the right, an A$1 reference becomes C$1, so it is mixed.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Quote:** "A$1 (relative column and absolute row) C$1 (the reference is mixed)"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Mixed References: Lock Only the Column or the Row
- **Status:** accepted as F136, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R124 · Steps to change the reference type
- **Claim:** To change a reference type, select the cell that holds the formula, select the reference in the formula bar, and press the F4 key to switch between the types.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Quote:** "Select the cell that contains the formula. In the formula bar, select the reference that you want to change. Press F4 to switch between the reference types."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Switching Reference Type With F4
- **Status:** accepted as F137, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R125 · Sheet name and exclamation mark
- **Claim:** To use a cell on another worksheet in the same workbook, put the worksheet name and an exclamation mark in front of the cell reference.
- **Source:** Microsoft Support, "Create or change a cell reference": https://support.microsoft.com/office/create-or-change-a-cell-reference-c7b8b95d-c594-4488-947e-c835903cebaa
- **Quote:** "You can refer to cells that are on other worksheets in the same workbook by prepending the name of the worksheet followed by an exclamation point"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Referring to Another Sheet
- **Status:** accepted as F138, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R126 · Marketing example
- **Claim:** A formula can use AVERAGE on the range B1:B10 of a worksheet named Marketing in the same workbook.
- **Source:** Microsoft Support, "Create or change a cell reference": https://support.microsoft.com/office/create-or-change-a-cell-reference-c7b8b95d-c594-4488-947e-c835903cebaa
- **Quote:** "the worksheet function named AVERAGE calculates the average value for the range B1:B10 on the worksheet named Marketing in the same workbook"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Referring to Another Sheet
- **Status:** accepted as F139, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R127 · Single quotation marks for other sheet names
- **Claim:** If the other worksheet name contains non-alphabetical characters, it must be enclosed in single quotation marks.
- **Source:** Microsoft Support, "Create or change a cell reference": https://support.microsoft.com/office/create-or-change-a-cell-reference-c7b8b95d-c594-4488-947e-c835903cebaa
- **Quote:** "If the name of the other worksheet contains nonalphabetical characters, you must enclose the name (or the path) within single quotation marks"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Referring to Another Sheet
- **Status:** accepted as F140, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R128 · Typing = then picking the other sheet
- **Claim:** To build the reference by clicking, type = in the formula bar, select the tab of the other worksheet, then select the cell to refer to.
- **Source:** Microsoft Support, "Create or change a cell reference": https://support.microsoft.com/office/create-or-change-a-cell-reference-c7b8b95d-c594-4488-947e-c835903cebaa
- **Quote:** "Select the tab for the worksheet to be referenced. Select the cell or range of cells to be referenced."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Referring to Another Sheet
- **Status:** accepted as F141, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R129 · North target
- **Claim:** On the Targets sheet, cell B2 holds the North target, 1500.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Referring to Another Sheet
- **Status:** accepted as F142, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R130 · Quantity times Unit price matches Amount
- **Claim:** On the Sales sheet, Quantity times Unit price equals Amount in all 240 rows, from row 2 to row 241.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: Copying a Formula Down the Sales Sheet
- **Status:** accepted as F143, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R131 · Quantity times Unit price total
- **Claim:** Quantity times Unit price, added up over the 240 rows, comes to 6325, the same as the Amount column.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: Copying a Formula Down the Sales Sheet
- **Status:** accepted as F144, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R132 · Comparison gives TRUE or FALSE
- **Claim:** Comparing two values with a comparison symbol gives the answer TRUE or FALSE.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Quote:** "When two values are compared by using these operators, the result is a logical value either TRUE or FALSE."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Comparing Two Values
- **Status:** accepted as F145, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R133 · Equal, greater and less symbols
- **Claim:** In a formula, = means equal to, > means greater than, and < means less than.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Quote:** "= (equal sign) Equal to =A1=B1 > (greater than sign) Greater than =A1>B1 < (less than sign) Less than =A1<B1"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Comparing Two Values
- **Status:** accepted as F146, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R134 · Or-equal and not-equal symbols
- **Claim:** In a formula, >= means greater than or equal to, <= means less than or equal to, and <> means not equal to.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Quote:** ">= (greater than or equal to sign) Greater than or equal to =A1>=B1 <= (less than or equal to sign) Less than or equal to =A1<=B1 <> (not equal to sign) Not equal to =A1<>B1"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Comparing Two Values
- **Status:** accepted as F147, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R135 · IF returns one value or another
- **Claim:** IF returns one value if a condition is true and another value if it is false.
- **Source:** Microsoft Support, "IF function": https://support.microsoft.com/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2
- **Quote:** "to return one value if a condition is true and another value if it's false"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** IF: Making a Decision in a Cell
- **Status:** accepted as F148, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R136 · IF has three parts
- **Claim:** IF takes the test, the value to return if the test is true, and optionally the value to return if it is false.
- **Source:** Microsoft Support, "IF function": https://support.microsoft.com/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2
- **Quote:** "IF(logical_test, value_if_true, [value_if_false])"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** IF: Making a Decision in a Cell
- **Status:** accepted as F149, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R137 · Over Budget example
- **Claim:** In a formula such as =IF(C2>B2,"Over Budget","Within Budget"), IF checks whether C2 is greater than B2, and returns Over Budget if it is.
- **Source:** Microsoft Support, "IF function": https://support.microsoft.com/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2
- **Quote:** "the IF function in D2 is saying IF(C2 Is Greater Than B2, then return"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** IF: Making a Decision in a Cell
- **Status:** accepted as F150, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R138 · Text goes in quotation marks
- **Claim:** Text used in a formula must be wrapped in quotation marks.
- **Source:** Microsoft Support, "IF function": https://support.microsoft.com/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2
- **Quote:** "If you are going to use text in formulas, you need to wrap the text in quotes"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** IF: Making a Decision in a Cell
- **Status:** accepted as F151, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R139 · AND needs all true
- **Claim:** AND returns TRUE if all its tests are true, and FALSE if one or more are false.
- **Source:** Microsoft Support, "AND function": https://support.microsoft.com/office/and-function-5f19b2e8-e1df-4408-897a-ce285a19e9d9
- **Quote:** "The AND function returns TRUE if all its arguments evaluate to TRUE, and returns FALSE if one or more arguments evaluate to FALSE."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** AND and OR: More Than One Test
- **Status:** accepted as F152, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R140 · OR needs any true
- **Claim:** OR returns TRUE if any of its tests is true, and FALSE only if all of them are false.
- **Source:** Microsoft Support, "OR function": https://support.microsoft.com/office/or-function-7d17ad14-8700-4281-b308-00b131e22af0
- **Quote:** "The OR function returns TRUE if any of its arguments evaluate to TRUE, and returns FALSE if all of its arguments evaluate to FALSE."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** AND and OR: More Than One Test
- **Status:** accepted as F153, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R141 · AND inside IF
- **Claim:** Using AND as the test inside IF lets you test many conditions instead of just one.
- **Source:** Microsoft Support, "AND function": https://support.microsoft.com/office/and-function-5f19b2e8-e1df-4408-897a-ce285a19e9d9
- **Quote:** "By using the AND function as the logical_test argument of the IF function, you can test many different conditions instead of just one."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** AND and OR: More Than One Test
- **Status:** accepted as F154, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R142 · OR inside IF
- **Claim:** Using OR as the test inside IF lets you test many conditions instead of just one.
- **Source:** Microsoft Support, "OR function": https://support.microsoft.com/office/or-function-7d17ad14-8700-4281-b308-00b131e22af0
- **Quote:** "By using the OR function as the logical_test argument of the IF function, you can test many different conditions instead of just one."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** AND and OR: More Than One Test
- **Status:** accepted as F155, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R143 · AND example
- **Claim:** =AND(A2>1,A2<100) shows TRUE if A2 is greater than 1 and less than 100, otherwise FALSE.
- **Source:** Microsoft Support, "AND function": https://support.microsoft.com/office/and-function-5f19b2e8-e1df-4408-897a-ce285a19e9d9
- **Quote:** "Displays TRUE if A2 is greater than 1 AND less than 100, otherwise it displays FALSE."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** AND and OR: More Than One Test
- **Status:** accepted as F156, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R144 · COUNTIF counts matching cells
- **Claim:** COUNTIF counts the number of cells that meet a condition.
- **Source:** Microsoft Support, "COUNTIF function": https://support.microsoft.com/office/countif-function-e0de10c6-f885-4e71-abb4-1f464816df34
- **Quote:** "to count the number of cells that meet a criterion"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** COUNTIF: Counting What Matches
- **Status:** accepted as F157, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R145 · COUNTIF has two parts
- **Claim:** COUNTIF takes the group of cells to look in and the condition to look for.
- **Source:** Microsoft Support, "COUNTIF function": https://support.microsoft.com/office/countif-function-e0de10c6-f885-4e71-abb4-1f464816df34
- **Quote:** "COUNTIF(range, criteria)"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** COUNTIF: Counting What Matches
- **Status:** accepted as F158, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R146 · COUNTIF condition can be a comparison
- **Claim:** The condition in COUNTIF can be a number, a comparison such as ">32", a cell, or a word.
- **Source:** Microsoft Support, "COUNTIF function": https://support.microsoft.com/office/countif-function-e0de10c6-f885-4e71-abb4-1f464816df34
- **Quote:** "you can use a number like 32, a comparison like ">32", a cell like B4, or a word like "apples"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** COUNTIF: Counting What Matches
- **Status:** accepted as F159, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R147 · COUNTIF greater-than example
- **Claim:** =COUNTIF(B2:B5,">55") counts the cells in B2 to B5 with a value greater than 55.
- **Source:** Microsoft Support, "COUNTIF function": https://support.microsoft.com/office/countif-function-e0de10c6-f885-4e71-abb4-1f464816df34
- **Quote:** "Counts the number of cells with a value greater than 55 in cells B2 through B5."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** COUNTIF: Counting What Matches
- **Status:** accepted as F160, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R148 · Amounts over 50
- **Claim:** On the Sales sheet, 35 of the 240 amounts in G2 to G241 are over 50, and none is exactly 50.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** COUNTIF: Counting What Matches
- **Status:** accepted as F161, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R149 · XLOOKUP finds things by row
- **Claim:** XLOOKUP finds things in a table or range by row.
- **Source:** Microsoft Support, "XLOOKUP function": https://support.microsoft.com/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929
- **Quote:** "Use the XLOOKUP function to find things in a table or range by row."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** XLOOKUP: Finding a Value in a List
- **Status:** accepted as F162, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R150 · Search one column, return from another
- **Claim:** XLOOKUP looks in one column for a search term and returns a result from the same row in another column, on either side.
- **Source:** Microsoft Support, "XLOOKUP function": https://support.microsoft.com/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929
- **Quote:** "you can look in one column for a search term and return a result from the same row in another column, regardless of which side the return column is on"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** XLOOKUP: Finding a Value in a List
- **Status:** accepted as F163, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R151 · XLOOKUP parts
- **Claim:** XLOOKUP takes the value to search for, the range to search, and the range to return from, with optional extras.
- **Source:** Microsoft Support, "XLOOKUP function": https://support.microsoft.com/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929
- **Quote:** "=XLOOKUP(lookup_value, lookup_array, return_array, [if_not_found], [match_mode], [search_mode])"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** XLOOKUP: Finding a Value in a List
- **Status:** accepted as F164, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R152 · No match gives #N/A
- **Claim:** If XLOOKUP finds no match and no message is supplied, it returns #N/A.
- **Source:** Microsoft Support, "XLOOKUP function": https://support.microsoft.com/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929
- **Quote:** "If a valid match is not found, and [if_not_found] is missing, #N/A is returned."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** XLOOKUP: Finding a Value in a List
- **Status:** accepted as F165, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R153 · Not in older Excel
- **Claim:** XLOOKUP is not available in Excel 2016 and Excel 2019.
- **Source:** Microsoft Support, "XLOOKUP function": https://support.microsoft.com/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929
- **Quote:** "XLOOKUP is not available in Excel 2016 and Excel 2019."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** XLOOKUP: Finding a Value in a List
- **Status:** accepted as F166, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R154 · Products sheet
- **Claim:** On the Products sheet, A2 to A6 list Notebook, Pen, Mug, Bag and Plant, B2 to B6 hold their categories, and Bag, in A5, is in the Kitchen category.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** XLOOKUP: Finding a Value in a List
- **Status:** accepted as F167, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R155 · IFERROR returns your value on an error
- **Claim:** IFERROR returns a value you specify if a formula gives an error, and otherwise returns the formula's result.
- **Source:** Microsoft Support, "IFERROR function": https://support.microsoft.com/office/iferror-function-c526fd07-caeb-47b8-8bb6-63f3e417f611
- **Quote:** "IFERROR returns a value you specify if a formula evaluates to an error; otherwise, it returns the result of the formula."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** IFERROR: Handling an Error
- **Status:** accepted as F168, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R156 · IFERROR has two parts
- **Claim:** IFERROR takes the formula to check and the value to return if it gives an error.
- **Source:** Microsoft Support, "IFERROR function": https://support.microsoft.com/office/iferror-function-c526fd07-caeb-47b8-8bb6-63f3e417f611
- **Quote:** "IFERROR(value, value_if_error)"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** IFERROR: Handling an Error
- **Status:** accepted as F169, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R157 · Errors IFERROR covers
- **Claim:** IFERROR covers the errors #N/A, #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME? and #NULL!.
- **Source:** Microsoft Support, "IFERROR function": https://support.microsoft.com/office/iferror-function-c526fd07-caeb-47b8-8bb6-63f3e417f611
- **Quote:** "The following error types are evaluated: #N/A, #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME?, or #NULL!."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** IFERROR: Handling an Error
- **Status:** accepted as F170, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R158 · IFERROR divide by zero example
- **Claim:** In =IFERROR(A3/B3,"Error in calculation"), dividing 55 by 0 gives a division by 0 error, so the message is returned.
- **Source:** Microsoft Support, "IFERROR function": https://support.microsoft.com/office/iferror-function-c526fd07-caeb-47b8-8bb6-63f3e417f611
- **Quote:** "finds a division by 0 error, and then returns value_if_error"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** IFERROR: Handling an Error
- **Status:** accepted as F171, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R159 · First Sales row
- **Claim:** On the Sales sheet, row 2 is a Bag sale, with D2 holding Bag and G2 holding 72.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: Decisions and a Lookup on the Sales Sheet
- **Status:** accepted as F172, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R160 · A date is a serial number
- **Claim:** In the 1900 date system, Excel converts a date into a serial number that counts the days elapsed since January 1, 1900.
- **Source:** Microsoft Support, "Date systems in Excel": https://support.microsoft.com/office/date-systems-in-excel-e7fe7167-48a9-4b96-bb53-5612a800b487
- **Quote:** "it is converted into a serial number that represents the number of days elapsed since January 1, 1900"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Dates Are Numbers
- **Status:** accepted as F173, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R161 · July 5, 2011 is 40729
- **Claim:** In the 1900 date system, July 5, 2011 becomes the serial number 40729.
- **Source:** Microsoft Support, "Date systems in Excel": https://support.microsoft.com/office/date-systems-in-excel-e7fe7167-48a9-4b96-bb53-5612a800b487
- **Quote:** "Excel converts the date to the serial number 40729"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Dates Are Numbers
- **Status:** accepted as F174, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R162 · Subtracting dates gives days
- **Claim:** Subtracting one date from another, such as =C2-B2, shows the number of days between the two dates.
- **Source:** Microsoft Support, "Subtract dates": https://support.microsoft.com/office/subtract-dates-bce4fadf-a200-4d0d-bdee-c44f7dd0fe83
- **Quote:** "Excel displays the result as the number of days between the two dates"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Dates Are Numbers
- **Status:** accepted as F175, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R163 · TODAY gives the current date
- **Claim:** The TODAY function returns the serial number of the current date.
- **Source:** Microsoft Support, "TODAY function": https://support.microsoft.com/office/today-function-5eb3078d-a82c-4736-8930-2f51a028fdd9
- **Quote:** "The TODAY function returns the serial number of the current date."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** TODAY: Today's Date
- **Status:** accepted as F176, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R164 · TODAY shows the date whenever opened
- **Claim:** TODAY is useful when you need the current date displayed on a worksheet, whenever you open the workbook.
- **Source:** Microsoft Support, "TODAY function": https://support.microsoft.com/office/today-function-5eb3078d-a82c-4736-8930-2f51a028fdd9
- **Quote:** "regardless of when you open the workbook"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** TODAY: Today's Date
- **Status:** accepted as F177, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R165 · TODAY has nothing between its brackets
- **Claim:** TODAY takes nothing between its brackets.
- **Source:** Microsoft Support, "TODAY function": https://support.microsoft.com/office/today-function-5eb3078d-a82c-4736-8930-2f51a028fdd9
- **Quote:** "The TODAY function syntax has no arguments."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** TODAY: Today's Date
- **Status:** accepted as F178, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R166 · TODAY plus 5 days
- **Claim:** =TODAY()+5 returns the current date plus 5 days.
- **Source:** Microsoft Support, "TODAY function": https://support.microsoft.com/office/today-function-5eb3078d-a82c-4736-8930-2f51a028fdd9
- **Quote:** "Returns the current date plus 5 days."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** TODAY: Today's Date
- **Status:** accepted as F179, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R167 · TODAY changes General to Date
- **Claim:** If the cell was in General format before TODAY was entered, Excel changes it to the Date format.
- **Source:** Microsoft Support, "TODAY function": https://support.microsoft.com/office/today-function-5eb3078d-a82c-4736-8930-2f51a028fdd9
- **Quote:** "If the cell format was General before the function was entered, Excel changes the cell format to Date."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** TODAY: Today's Date
- **Status:** accepted as F180, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R168 · YEAR returns the year
- **Claim:** YEAR returns the year of a date, as a whole number from 1900 to 9999.
- **Source:** Microsoft Support, "YEAR function": https://support.microsoft.com/en-US/excel/functions/year-function
- **Quote:** "Returns the year corresponding to a date. The year is returned as an integer in the range 1900-9999."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** YEAR, MONTH and DAY
- **Status:** accepted as F181, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R169 · MONTH returns 1 to 12
- **Claim:** MONTH returns the month of a date as a whole number from 1 (January) to 12 (December).
- **Source:** Microsoft Support, "MONTH function": https://support.microsoft.com/en-US/Excel/functions/month-function
- **Quote:** "The month is given as an integer, ranging from 1 (January) to 12 (December)."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** YEAR, MONTH and DAY
- **Status:** accepted as F182, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R170 · DAY returns 1 to 31
- **Claim:** DAY returns the day of the month as a whole number from 1 to 31.
- **Source:** Microsoft Support, "DAY function": https://support.microsoft.com/en-us/excel/day-function
- **Quote:** "The day is given as an integer ranging from 1 to 31."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** YEAR, MONTH and DAY
- **Status:** accepted as F183, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R171 · DATE builds a date
- **Claim:** DATE(2025,5,23) is the 23rd day of May, 2025, and dates for these functions should be entered with DATE or as the results of other formulas.
- **Source:** Microsoft Support, "YEAR function": https://support.microsoft.com/en-US/excel/functions/year-function
- **Quote:** "use DATE(2025,5,23) for the 23rd day of May, 2025"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** YEAR, MONTH and DAY
- **Status:** accepted as F184, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R172 · Dates typed as text cause problems
- **Claim:** Problems can occur if dates are entered as text.
- **Source:** Microsoft Support, "YEAR function": https://support.microsoft.com/en-US/excel/functions/year-function
- **Quote:** "Problems can occur if dates are entered as text."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** YEAR, MONTH and DAY
- **Status:** accepted as F185, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R173 · Ampersand or CONCAT joins cells
- **Claim:** You can combine data from several cells into one cell using the ampersand symbol or the CONCAT function.
- **Source:** Microsoft Support, "Combine text from two or more cells into one cell": https://support.microsoft.com/office/combine-text-from-two-or-more-cells-into-one-cell-81ba0946-ce78-42ed-b3c3-21340eb164a6
- **Quote:** "You can combine data from multiple cells into a single cell using the Ampersand symbol (&) or the CONCAT function."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Joining Text With the Ampersand
- **Status:** accepted as F186, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R174 · Ampersand example with a space
- **Claim:** The formula =A2&" "&B2 joins the contents of A2, a space, and the contents of B2.
- **Source:** Microsoft Support, "Combine text from two or more cells into one cell": https://support.microsoft.com/office/combine-text-from-two-or-more-cells-into-one-cell-81ba0946-ce78-42ed-b3c3-21340eb164a6
- **Quote:** "An example formula might be =A2&" "&B2."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Joining Text With the Ampersand
- **Status:** accepted as F187, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R175 · CONCAT example
- **Claim:** The formula =CONCAT(A2, " Family") joins the contents of A2 and the text Family.
- **Source:** Microsoft Support, "Combine text from two or more cells into one cell": https://support.microsoft.com/office/combine-text-from-two-or-more-cells-into-one-cell-81ba0946-ce78-42ed-b3c3-21340eb164a6
- **Quote:** "An example formula might be =CONCAT(A2, " Family")."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Joining Text With the Ampersand
- **Status:** accepted as F188, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R176 · Ampersand connects two values
- **Claim:** The ampersand connects, or concatenates, two values to produce one continuous text value.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Quote:** "Connects, or concatenates, two values to produce one continuous text value."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Joining Text With the Ampersand
- **Status:** accepted as F189, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R177 · TRIM removes extra spaces
- **Claim:** TRIM removes all spaces from text except for single spaces between words.
- **Source:** Microsoft Support, "TRIM function": https://support.microsoft.com/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9
- **Quote:** "Removes all spaces from text except for single spaces between words."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** TRIM: Removing Extra Spaces
- **Status:** accepted as F190, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R178 · When to use TRIM
- **Claim:** Use TRIM on text received from another application that may have irregular spacing.
- **Source:** Microsoft Support, "TRIM function": https://support.microsoft.com/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9
- **Quote:** "Use TRIM on text that you have received from another application that may have irregular spacing."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** TRIM: Removing Extra Spaces
- **Status:** accepted as F191, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R179 · TRIM Sales report example
- **Claim:** =TRIM(" Sales report ") removes the spaces at the beginning and end of "Sales report".
- **Source:** Microsoft Support, "TRIM function": https://support.microsoft.com/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9
- **Quote:** "removes spaces at the beginning and end of "Sales report"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** TRIM: Removing Extra Spaces
- **Status:** accepted as F192, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R180 · TRIM leaves non-breaking spaces
- **Claim:** By itself, TRIM does not remove the non-breaking space character, which is commonly used on web pages.
- **Source:** Microsoft Support, "TRIM function": https://support.microsoft.com/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9
- **Quote:** "By itself, the TRIM function does not remove this nonbreaking space character."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** TRIM: Removing Extra Spaces
- **Status:** accepted as F193, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R181 · First Staff row
- **Claim:** On the Staff sheet, row 2 holds Ada Okafor in A2, North in B2, and a start date of 4 March 2019 in C2.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: Dates and Text on the Staff Sheet
- **Status:** accepted as F194, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R182 · Freeze Panes keeps an area in view
- **Claim:** On the View tab, Freeze Panes locks specific rows and columns in place, so an area of the worksheet stays visible while you scroll to another area.
- **Source:** Microsoft Support, "Freeze panes to lock rows and columns": https://support.microsoft.com/office/freeze-panes-to-lock-rows-and-columns-dab2ffc9-020d-4026-8121-67dd25f2508f
- **Quote:** "To keep an area of a worksheet visible while you scroll to another area of the worksheet, go to the View tab, where you can Freeze Panes to lock specific rows and columns in place"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Keeping the Headings in View
- **Status:** accepted as F195, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R183 · Freeze Panes freezes above and left
- **Claim:** Freeze Panes freezes the rows above and the columns left of the selected cell.
- **Source:** Microsoft Support, "Freeze panes to lock rows and columns": https://support.microsoft.com/office/freeze-panes-to-lock-rows-and-columns-dab2ffc9-020d-4026-8121-67dd25f2508f
- **Quote:** "Freeze Panes freezes the rows above and the columns left of the selected cell."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Keeping the Headings in View
- **Status:** accepted as F196, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R184 · Which cell to select to freeze
- **Claim:** To freeze rows and columns, select the cell below the rows and to the right of the columns you want to keep visible, then choose View, Freeze Panes, Freeze Panes.
- **Source:** Microsoft Support, "Freeze panes to lock rows and columns": https://support.microsoft.com/office/freeze-panes-to-lock-rows-and-columns-dab2ffc9-020d-4026-8121-67dd25f2508f
- **Quote:** "Select the cell below the rows and to the right of the columns you want to keep visible when you scroll. Select View > Freeze Panes > Freeze Panes."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Keeping the Headings in View
- **Status:** accepted as F197, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R185 · Unfreeze Panes
- **Claim:** To unfreeze rows or columns, go to the View tab, then Freeze Panes, then Unfreeze Panes.
- **Source:** Microsoft Support, "Freeze panes to lock rows and columns": https://support.microsoft.com/office/freeze-panes-to-lock-rows-and-columns-dab2ffc9-020d-4026-8121-67dd25f2508f
- **Quote:** "On the View tab > Freeze Panes > Unfreeze Panes."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Keeping the Headings in View
- **Status:** accepted as F198, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R186 · Sales headings already frozen
- **Claim:** In the sample file, the Sales sheet already has its heading row frozen, with the panes frozen at A2.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Keeping the Headings in View
- **Status:** accepted as F199, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R187 · Sorting by more than one column
- **Claim:** You can sort by more than one column to group rows by the same value in one column and then sort another column within each group of equal values.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Quote:** "then sort another column or row within that group of equal values"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting by More Than One Column
- **Status:** accepted as F200, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R188 · Department then Employee example
- **Claim:** With a Department column and an Employee column, you can sort by Department first to group the employees, then by name to put the names in alphabetical order within each department.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Quote:** "you can first sort by Department (to group all the employees in the same department together) and then sort by name (to put the names in alphabetical order within each department)"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting by More Than One Column
- **Status:** accepted as F201, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R189 · Sort button on the Data tab
- **Claim:** To sort by more than one column, select any cell in the data range, then on the Data tab, in the Sort & Filter group, select Sort.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Quote:** "On the Data tab, in the Sort & Filter group, select Sort."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting by More Than One Column
- **Status:** accepted as F202, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R190 · Add Level
- **Claim:** To add another column to sort by, select Add Level in the Sort box.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Quote:** "To add another column to sort by, select Add Level"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting by More Than One Column
- **Status:** accepted as F203, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R191 · Higher levels sort first
- **Claim:** Entries higher in the list in the Sort box are sorted before entries lower in the list.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Quote:** "Entries higher in the list are sorted before entries lower in the list."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting by More Than One Column
- **Status:** accepted as F204, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R192 · Sort range needs headings
- **Claim:** For best results, the range of cells you sort should have column headings.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Quote:** "For best results, the range of cells that you sort should have column headings."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sorting by More Than One Column
- **Status:** accepted as F205, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R193 · Filtering hides, removing deletes
- **Claim:** Filtering for unique values temporarily hides duplicate values, but removing duplicate values permanently deletes them.
- **Source:** Microsoft Support, "Filter for or remove duplicate values": https://support.microsoft.com/office/filter-for-or-remove-duplicate-values-662c153f-cf21-4d7b-a5af-a9390648eb37
- **Quote:** "When you filter for unique values, you temporarily hide duplicate values, but when you remove duplicate values, you permanently delete duplicate values."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Removing Duplicate Rows
- **Status:** accepted as F206, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R194 · What a duplicate is
- **Claim:** A duplicate value is one where all the values in the row are an exact match of all the values in another row.
- **Source:** Microsoft Support, "Filter for or remove duplicate values": https://support.microsoft.com/office/filter-for-or-remove-duplicate-values-662c153f-cf21-4d7b-a5af-a9390648eb37
- **Quote:** "A duplicate value is one where all values in the row are an exact match of all values in another row."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Removing Duplicate Rows
- **Status:** accepted as F207, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R195 · Duplicates go by the displayed value
- **Claim:** Duplicate values are decided by the value displayed in the cell, not necessarily the value stored in it.
- **Source:** Microsoft Support, "Filter for or remove duplicate values": https://support.microsoft.com/office/filter-for-or-remove-duplicate-values-662c153f-cf21-4d7b-a5af-a9390648eb37
- **Quote:** "Duplicate values are determined by the value displayed in the cell and not necessarily the value stored in the cell."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Removing Duplicate Rows
- **Status:** accepted as F208, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R196 · Copy the data first
- **Claim:** Because removing duplicates permanently deletes data, it is a good idea to copy the original range or table to another sheet or workbook first.
- **Source:** Microsoft Support, "Filter for or remove duplicate values": https://support.microsoft.com/office/filter-for-or-remove-duplicate-values-662c153f-cf21-4d7b-a5af-a9390648eb37
- **Quote:** "it's a good idea to copy the original range of cells or table to another sheet or workbook before removing duplicate values"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Removing Duplicate Rows
- **Status:** accepted as F209, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R197 · Remove Duplicates steps
- **Claim:** To remove duplicates, select the range or a cell in a table, click Remove Duplicates in the Data Tools group on the Data tab, tick the boxes for the columns to check, and click Remove Duplicates.
- **Source:** Microsoft Support, "Filter for or remove duplicate values": https://support.microsoft.com/office/filter-for-or-remove-duplicate-values-662c153f-cf21-4d7b-a5af-a9390648eb37
- **Quote:** "On the Data tab, in the Data Tools group, click Remove Duplicates. Select one or more of the check boxes, which refer to columns in the table, and then click Remove Duplicates."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Removing Duplicate Rows
- **Status:** accepted as F210, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R198 · One repeated Sales row
- **Claim:** The Sales sheet has 240 rows, and one of them repeats another row exactly in every column, so 239 rows are different.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Removing Duplicate Rows
- **Status:** accepted as F211, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R199 · North rows
- **Claim:** On the Sales sheet, 107 of the 240 rows have North in the Region column.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: Sorting and Filtering the Sales Sheet
- **Status:** accepted as F212, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R200 · Largest Amount appears three times
- **Claim:** On the Sales sheet, the largest Amount is 90, and three rows have it.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: Sorting and Filtering the Sales Sheet
- **Status:** accepted as F213, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R201 · Column chart categories and values
- **Claim:** A column chart typically shows categories along the horizontal axis and values along the vertical axis.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "A column chart typically displays categories along the horizontal (category) axis and values along the vertical (value) axis"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing the Right Chart
- **Status:** accepted as F214, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R202 · Line charts suit trends over time
- **Claim:** Line charts can show continuous data over time on an evenly scaled axis, so they are ideal for showing trends at equal intervals, like months, quarters or fiscal years.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "Line charts can show continuous data over time on an evenly scaled axis, so they're ideal for showing trends in data at equal intervals, like months, quarters, or fiscal years."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing the Right Chart
- **Status:** accepted as F215, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R203 · Pie charts show parts of a total
- **Claim:** Pie charts show the size of the items in one data series, in proportion to the sum of the items.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "Pie charts show the size of items in one data series, proportional to the sum of the items."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing the Right Chart
- **Status:** accepted as F216, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R204 · Recommended Charts suggests charts
- **Claim:** The Recommended Charts command on the Insert tab analyses your data and makes suggestions.
- **Source:** Microsoft Support, "Create a chart with recommended charts": https://support.microsoft.com/en-us/excel/create-a-chart-with-recommended-charts
- **Quote:** "Excel will analyze your data and make suggestions for you."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Choosing the Right Chart
- **Status:** accepted as F217, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R205 · Titles make a chart easier to understand
- **Claim:** Chart titles and axis titles make a chart easier to understand.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Quote:** "To make a chart easier to understand, you can add chart title and axis titles"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Titles to a Chart
- **Status:** accepted as F218, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R206 · Type into the Chart Title box
- **Claim:** To add a chart title, select the Chart Title box in the chart and type in a title.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Quote:** "select the "Chart Title" box and type in a title"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Titles to a Chart
- **Status:** accepted as F219, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R207 · Plus sign opens chart elements
- **Claim:** The + sign at the top right of the chart opens the list of chart elements, including the arrow next to Chart Title.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Quote:** "Select the + sign to the top-right of the chart. Select the arrow next to Chart Title."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Titles to a Chart
- **Status:** accepted as F220, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R208 · Remove a chart title
- **Claim:** To remove a chart title, click the chart, select the + sign at its top right, and untick Chart Title.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Quote:** "Uncheck the checkbox next to Chart Title."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Titles to a Chart
- **Status:** accepted as F221, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R209 · Axis titles from Add Chart Element
- **Claim:** To add an axis title, click the chart, click the Chart Design tab, then Add Chart Element, then Axis Titles, and type the text in the Axis Title box.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Quote:** "Click Add Chart Element > Axis Titles, and then choose an axis title option. Type the text in the Axis Title box."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Titles to a Chart
- **Status:** accepted as F222, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R210 · No axis titles on pie charts
- **Claim:** Chart types that do not have axes, such as pie and doughnut charts, cannot display axis titles.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Quote:** "Chart types that do not have axes (such as pie and doughnut charts) cannot display axis titles either."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Adding Titles to a Chart
- **Status:** accepted as F223, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R211 · Line chart axes
- **Claim:** In a line chart, category data is spread evenly along the horizontal axis, and all value data is spread evenly along the vertical axis.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "In a line chart, category data is distributed evenly along the horizontal axis, and all value data is distributed evenly along the vertical axis."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Line Charts: Trends Over Time
- **Status:** accepted as F224, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R212 · Line charts work best with several series
- **Claim:** Line charts work best with more than one data series. With only one series, a scatter chart is worth considering instead.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "Line charts work best when you have multiple data series in your chart"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Line Charts: Trends Over Time
- **Status:** accepted as F225, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R213 · Pie chart data layout
- **Claim:** Data arranged in one column or row on a worksheet can be plotted in a pie chart.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "Data that's arranged in one column or row on a worksheet can be plotted in a pie chart."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Pie Charts: Parts of a Whole
- **Status:** accepted as F226, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R214 · Pie slices are percentages
- **Claim:** The data points in a pie chart are shown as a percentage of the whole pie.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "The data points in a pie chart are shown as a percentage of the whole pie."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Pie Charts: Parts of a Whole
- **Status:** accepted as F227, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R215 · When to use a pie chart
- **Claim:** Consider a pie chart when there is only one data series, no negative values, almost no zero values, and no more than seven categories that are all parts of the whole pie.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Quote:** "You have only one data series. None of the values in your data are negative. Almost none of the values in your data are zero values. You have no more than seven categories, all of which represent parts of the whole pie."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Pie Charts: Parts of a Whole
- **Status:** accepted as F228, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R216 · Data labels identify the data
- **Claim:** You can add data labels to the data points of a chart to quickly identify a data series.
- **Source:** Microsoft Support, "Add or remove data labels in a chart": https://support.microsoft.com/office/add-or-remove-data-labels-in-a-chart-884bf2f1-2e29-454e-8b42-f467c9f4eb2d
- **Quote:** "To quickly identify a data series in a chart, you can add data labels to the data points of the chart."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Pie Charts: Parts of a Whole
- **Status:** accepted as F229, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R217 · Data labels update by themselves
- **Claim:** By default, data labels are linked to values on the worksheet, and they update automatically when those values change.
- **Source:** Microsoft Support, "Add or remove data labels in a chart": https://support.microsoft.com/office/add-or-remove-data-labels-in-a-chart-884bf2f1-2e29-454e-8b42-f467c9f4eb2d
- **Quote:** "By default, the data labels are linked to values on the worksheet, and they update automatically when changes are made to these values."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Pie Charts: Parts of a Whole
- **Status:** accepted as F230, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R218 · Add Data Labels
- **Claim:** To add data labels, select the chart or series, then at the top right of the chart select Add Chart Element and choose Data Labels.
- **Source:** Microsoft Support, "Add or remove data labels in a chart": https://support.microsoft.com/office/add-or-remove-data-labels-in-a-chart-884bf2f1-2e29-454e-8b42-f467c9f4eb2d
- **Quote:** "In the upper right corner, next to the chart, select Add Chart Element and choose Data Labels."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Pie Charts: Parts of a Whole
- **Status:** accepted as F231, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R219 · Remove data labels
- **Claim:** To remove data labels, select them and press Delete.
- **Source:** Microsoft Support, "Add or remove data labels in a chart": https://support.microsoft.com/office/add-or-remove-data-labels-in-a-chart-884bf2f1-2e29-454e-8b42-f467c9f4eb2d
- **Quote:** "you can remove any or all of them by selecting the data labels and then pressing Delete"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Pie Charts: Parts of a Whole
- **Status:** accepted as F232, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R220 · Targets sheet
- **Claim:** On the Targets sheet, A1 to B5 hold the headings Region and Target, and four regional targets: North 1500, South 1400, East 1300 and West 1200.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: Charting the Targets
- **Status:** accepted as F233, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R221 · All Charts shows every chart type
- **Claim:** In Recommended Charts, if you do not see a chart you like, click All Charts to see all the available chart types.
- **Source:** Microsoft Support, "Create a chart with recommended charts": https://support.microsoft.com/en-us/excel/create-a-chart-with-recommended-charts
- **Quote:** "If you don't see a chart you like, click All Charts to see all available chart types."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Line Charts: Trends Over Time
- **Status:** accepted as F234, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R222 · Values default to SUM
- **Claim:** By default, PivotTable fields placed in the Values area are displayed as a SUM.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "By default, PivotTable fields placed in the Values area are displayed as a SUM."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sum, Count or Average in a Summary Table
- **Status:** accepted as F235, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R223 · Text in Values is counted
- **Claim:** If Excel interprets your data as text, the data is displayed as a COUNT.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "If Excel interprets your data as text, the data is displayed as a COUNT."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sum, Count or Average in a Summary Table
- **Status:** accepted as F236, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R224 · Open Value Field Settings by right-click
- **Claim:** To change the summary function, right-click a value in the PivotTable and choose Summarize Values By or Value Field Settings.
- **Source:** Microsoft Support, "Change the summary function or custom calculation for a field in a PivotTable": https://support.microsoft.com/en-us/excel/change-the-summary-function-or-custom-calculation-for-a-field-in-a-pivottable
- **Quote:** "you can right-click a value in the PivotTable and choose Summarize Values By or Value Field Settings."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sum, Count or Average in a Summary Table
- **Status:** accepted as F237, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R225 · Average summary function
- **Claim:** The Average summary function gives the average of the values.
- **Source:** Microsoft Support, "Change the summary function or custom calculation for a field in a PivotTable": https://support.microsoft.com/en-us/excel/change-the-summary-function-or-custom-calculation-for-a-field-in-a-pivottable
- **Quote:** "The average of the values."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sum, Count or Average in a Summary Table
- **Status:** accepted as F238, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R226 · Count summary function
- **Claim:** The Count summary function gives the number of values.
- **Source:** Microsoft Support, "Change the summary function or custom calculation for a field in a PivotTable": https://support.microsoft.com/en-us/excel/change-the-summary-function-or-custom-calculation-for-a-field-in-a-pivottable
- **Quote:** "The number of values."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sum, Count or Average in a Summary Table
- **Status:** accepted as F239, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R227 · Count is the default for non-numbers
- **Claim:** Count is the default function for values other than numbers.
- **Source:** Microsoft Support, "Change the summary function or custom calculation for a field in a PivotTable": https://support.microsoft.com/en-us/excel/change-the-summary-function-or-custom-calculation-for-a-field-in-a-pivottable
- **Quote:** "Count is the default function for values other than numbers."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Sum, Count or Average in a Summary Table
- **Status:** accepted as F240, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R228 · Regional totals, counts and averages
- **Claim:** On the Sales sheet the Amount column totals East 839, North 2756, South 1256 and West 1474 (6325 in all). The number of rows is East 36, North 107, South 43 and West 54. The average Amount is East 23.31, North 25.76, South 29.21 and West 27.30.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Sum, Count or Average in a Summary Table
- **Status:** accepted as F241, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R229 · The Areas section arranges fields
- **Claim:** The Field List has an Areas section, at the bottom, in which you arrange the chosen fields the way you want.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/Excel/get-started/use-the-field-list-to-arrange-fields-in-a-pivottable
- **Quote:** "the Areas section (at the bottom) in which you can arrange those fields the way you want"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Rows and Columns: A Two-Way Summary
- **Status:** accepted as F242, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R230 · Columns area labels
- **Claim:** Fields in the Columns area are shown as Column Labels at the top of the PivotTable.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/Excel/get-started/use-the-field-list-to-arrange-fields-in-a-pivottable
- **Quote:** "Columns area fields are shown as Column Labels at the top of the PivotTable"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Rows and Columns: A Two-Way Summary
- **Status:** accepted as F243, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R231 · Rows area labels
- **Claim:** Fields in the Rows area are shown as Row Labels on the left side of the PivotTable.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/Excel/get-started/use-the-field-list-to-arrange-fields-in-a-pivottable
- **Quote:** "Rows area fields are shown as Row Labels on the left side of the PivotTable"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Rows and Columns: A Two-Way Summary
- **Status:** accepted as F244, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R232 · Values area numbers
- **Claim:** Fields in the Values area are shown as summarized numeric values in the PivotTable.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/Excel/get-started/use-the-field-list-to-arrange-fields-in-a-pivottable
- **Quote:** "Values area fields are shown as summarized numeric values in the PivotTable"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Rows and Columns: A Two-Way Summary
- **Status:** accepted as F245, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R233 · Drag a field between areas
- **Claim:** To move a field from one area to another, drag the field to the target area.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "To move a field from one area to another, drag the field to the target area."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Rows and Columns: A Two-Way Summary
- **Status:** accepted as F246, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R234 · Product by region totals
- **Claim:** On the Sales sheet, the Amount column totals by product across the regions East, North, South and West are Bag 180, 936, 384 and 624; Mug 304, 576, 176 and 232; Notebook 45, 252, 138 and 99; Pen 40, 152, 48 and 54; Plant 270, 840, 510 and 465.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Rows and Columns: A Two-Way Summary
- **Status:** accepted as F247, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R235 · Right-click Refresh
- **Claim:** To refresh just one PivotTable, right-click anywhere in the PivotTable range, and then select Refresh.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "To refresh just one PivotTable, you can right-click anywhere in the PivotTable range, and then select Refresh."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Refreshing a Summary Table
- **Status:** accepted as F248, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R236 · Refresh at any time
- **Claim:** At any time, you can select Refresh to update the data for the PivotTables in your workbook.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/excel/refresh-pivottable-data
- **Quote:** "At any time, you can select Refresh to update the data for the PivotTables in your workbook."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Refreshing a Summary Table
- **Status:** accepted as F249, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R237 · New Worksheet placement
- **Claim:** In the Create PivotTable dialog box, select New Worksheet to place the PivotTable in a new worksheet.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "Select New Worksheet to place the PivotTable in a new worksheet"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Practice: A Summary of the Sales Sheet
- **Status:** accepted as F250, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R238 · Tick fields in the pane
- **Claim:** In the PivotTable Fields pane, select the check box for any field you want to add to your PivotTable.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Quote:** "In the PivotTable Fields pane, select the check box for any field you want to add to your PivotTable."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Practice: A Summary of the Sales Sheet
- **Status:** accepted as F251, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R239 · Insert PivotChart
- **Claim:** To create a PivotChart, select a cell in your table, select Insert and choose PivotChart, then select where you want the PivotChart to appear and select OK.
- **Source:** Microsoft Support, "Create a PivotChart": https://support.microsoft.com/en-us/topic/c1b1e057-6990-4c38-b52b-8255538e7b1c
- **Quote:** "Select Insert and choose PivotChart."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Practice: A Summary of the Sales Sheet
- **Status:** accepted as F252, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R240 · File then Print shows the preview
- **Claim:** Click File, and then click Print to display the Preview window and printing options.
- **Source:** Microsoft Support, "Preview worksheet pages before you print": https://support.microsoft.com/en-US/Excel/preview-worksheet-pages-before-you-print
- **Quote:** "Click File, and then click Print to display the Preview window and printing options."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Previewing and Printing a Sheet
- **Status:** accepted as F253, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R241 · Ctrl+P opens Print
- **Claim:** The keyboard shortcut for the Print screen is Ctrl+P.
- **Source:** Microsoft Support, "Quick start: Print a worksheet": https://support.microsoft.com/en-us/excel/quick-start-print-a-worksheet
- **Quote:** "Press Ctrl+P."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Previewing and Printing a Sheet
- **Status:** accepted as F254, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R242 · Next Page and Previous Page
- **Claim:** In the preview, use the Next Page and Previous Page arrows at the bottom, or type the page number, to move between pages.
- **Source:** Microsoft Support, "Preview worksheet pages before you print": https://support.microsoft.com/en-US/Excel/preview-worksheet-pages-before-you-print
- **Quote:** "click the arrows for Next Page and Previous Page at the bottom"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Previewing and Printing a Sheet
- **Status:** accepted as F255, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R243 · Show Margins button
- **Claim:** To view page margins, click the Show Margins button in the lower right corner of the Print Preview window.
- **Source:** Microsoft Support, "Preview worksheet pages before you print": https://support.microsoft.com/en-US/Excel/preview-worksheet-pages-before-you-print
- **Quote:** "To view page margins, click the Show Margins button in the lower right corner of the Print Preview window."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Previewing and Printing a Sheet
- **Status:** accepted as F256, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R244 · Preview is black and white
- **Claim:** Unless you are using a colour printer, the preview appears in black and white, even if there is colour in your sheets.
- **Source:** Microsoft Support, "Preview worksheet pages before you print": https://support.microsoft.com/en-US/Excel/preview-worksheet-pages-before-you-print
- **Quote:** "Unless you're using a color printer, the preview appears in black-and-white, even if there's color in your sheets."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Previewing and Printing a Sheet
- **Status:** accepted as F257, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R245 · Choose the printer
- **Claim:** To change the printer, select the drop-down box under Printer, and select the printer that you want.
- **Source:** Microsoft Support, "Quick start: Print a worksheet": https://support.microsoft.com/en-us/excel/quick-start-print-a-worksheet
- **Quote:** "To change the printer, select the drop-down box under Printer, and select the printer that you want."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Previewing and Printing a Sheet
- **Status:** accepted as F258, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R246 · Print what: sheets, workbook or selection
- **Claim:** Under Settings you can choose Print Active Sheets, Print Entire Workbook or Print Selection.
- **Source:** Microsoft Support, "Quick start: Print a worksheet": https://support.microsoft.com/en-us/excel/quick-start-print-a-worksheet
- **Quote:** "Print Active Sheets, Print Entire workbook, or Print Selection."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Previewing and Printing a Sheet
- **Status:** accepted as F259, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R247 · Select Print to print
- **Claim:** After checking the preview and settings, select Print.
- **Source:** Microsoft Support, "Quick start: Print a worksheet": https://support.microsoft.com/en-us/excel/quick-start-print-a-worksheet
- **Quote:** "Select Print."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Previewing and Printing a Sheet
- **Status:** accepted as F260, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R248 · Landscape for wide sheets
- **Claim:** If your worksheet has many columns, you might need to switch the page orientation from portrait to landscape.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/Excel/scale-a-worksheet
- **Quote:** "If your worksheet has many columns, you might need to switch the page orientation from portrait to landscape."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Fitting the Sheet on the Page
- **Status:** accepted as F261, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R249 · Orientation steps
- **Claim:** To switch to landscape, go to Page Layout, then Page Setup, then Orientation, and select Landscape.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/Excel/scale-a-worksheet
- **Quote:** "go to Page Layout > Page Setup > Orientation, and select Landscape."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Fitting the Sheet on the Page
- **Status:** accepted as F262, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R250 · Width 1 page, height Automatic
- **Claim:** In the Scale to Fit group on the Page Layout tab, set the Width list to 1 page and the Height list to Automatic.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/Excel/scale-a-worksheet
- **Quote:** "In the Scale to Fit group, in the Width dropdown list, select 1 page, and in the Height dropdown list, select Automatic."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Fitting the Sheet on the Page
- **Status:** accepted as F263, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R251 · Everything on a single page
- **Claim:** To print your worksheet on a single page, select 1 page in the Height box.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/Excel/scale-a-worksheet
- **Quote:** "To print your worksheet on a single page, select 1 page in the Height box."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Fitting the Sheet on the Page
- **Status:** accepted as F264, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R252 · Shrinking can hurt readability
- **Claim:** The printout may be difficult to read because Excel shrinks the data to fit.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/Excel/scale-a-worksheet
- **Quote:** "the printout may be difficult to read because Excel shrinks the data to fit."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Fitting the Sheet on the Page
- **Status:** accepted as F265, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R253 · Scale box shows the shrinking
- **Claim:** To see how much scaling is used, look at the number in the Scale box.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/Excel/scale-a-worksheet
- **Quote:** "To see how much scaling is used, look at the number in the Scale box."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Fitting the Sheet on the Page
- **Status:** accepted as F266, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R254 · Sales sheet size
- **Claim:** On the Sales sheet, row 1 holds the headings Date, Region, Salesperson, Product, Quantity, Unit price and Amount in columns A to G, and the 240 rows of sales run from row 2 to row 241.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Fitting the Sheet on the Page
- **Status:** accepted as F267, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---

## R255 · What print titles do
- **Claim:** Print titles are row and column headings or labels that print on every page of a worksheet that spans more than one page.
- **Source:** Microsoft Support, "Print rows with column headers on top of every page": https://support.microsoft.com/en-us/office/print-rows-with-column-headers-on-top-of-every-page-d3550133-f6a1-4c72-ad70-5309a2e8fe8c
- **Quote:** "(also called print titles) on every page"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Repeating Headings on Every Printed Page
- **Status:** accepted as F268, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R256 · Print Titles on the Page Layout tab
- **Claim:** On the Page Layout tab, in the Page Setup group, select Print Titles.
- **Source:** Microsoft Support, "Print rows with column headers on top of every page": https://support.microsoft.com/en-us/office/print-rows-with-column-headers-on-top-of-every-page-d3550133-f6a1-4c72-ad70-5309a2e8fe8c
- **Quote:** "On the Page Layout tab, in the Page Setup group, select"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Repeating Headings on Every Printed Page
- **Status:** accepted as F269, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R257 · Rows to repeat at top box
- **Claim:** In the Rows to repeat at top box, type the reference of the rows that contain the column labels.
- **Source:** Microsoft Support, "Print rows with column headers on top of every page": https://support.microsoft.com/en-us/office/print-rows-with-column-headers-on-top-of-every-page-d3550133-f6a1-4c72-ad70-5309a2e8fe8c
- **Quote:** "In the Rows to repeat at top box, type the reference of the rows that contain the column labels."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Repeating Headings on Every Printed Page
- **Status:** accepted as F270, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R258 · Dollar one colon dollar one example
- **Claim:** To print column labels at the top of every printed page, type $1:$1 in the Rows to repeat at top box.
- **Source:** Microsoft Support, "Print rows with column headers on top of every page": https://support.microsoft.com/en-us/office/print-rows-with-column-headers-on-top-of-every-page-d3550133-f6a1-4c72-ad70-5309a2e8fe8c
- **Quote:** "type $1:$1 in the Rows to repeat at top box"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Repeating Headings on Every Printed Page
- **Status:** accepted as F271, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R259 · Collapse Dialog to pick rows
- **Claim:** You can choose Collapse Dialog at the right end of the Rows to repeat at top box, then select the title rows in the worksheet.
- **Source:** Microsoft Support, "Print rows with column headers on top of every page": https://support.microsoft.com/en-us/office/print-rows-with-column-headers-on-top-of-every-page-d3550133-f6a1-4c72-ad70-5309a2e8fe8c
- **Quote:** "Collapse Dialog at the right end of the Rows to repeat at top and Columns to repeat at left boxes"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Repeating Headings on Every Printed Page
- **Status:** accepted as F272, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R260 · Why use PDF
- **Claim:** Use the PDF format for files that you want to look the same on most computers.
- **Source:** Microsoft Support, "Save or convert to PDF": https://support.microsoft.com/en-us/office/save-or-convert-to-pdf-9df63379-2b35-4d96-bebd-cd58baf2008c
- **Quote:** "Use the PDF format for files that you want to look the same on most computers"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Saving as a PDF to Share
- **Status:** accepted as F273, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R261 · Save a Copy
- **Claim:** To save as a PDF, select File, then Save a Copy.
- **Source:** Microsoft Support, "Save or convert to PDF": https://support.microsoft.com/en-us/office/save-or-convert-to-pdf-9df63379-2b35-4d96-bebd-cd58baf2008c
- **Quote:** "Select File > Save a Copy."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Saving as a PDF to Share
- **Status:** accepted as F274, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R262 · Save as type PDF
- **Claim:** In the Save as type list, select PDF.
- **Source:** Microsoft Support, "Save or convert to PDF": https://support.microsoft.com/en-us/office/save-or-convert-to-pdf-9df63379-2b35-4d96-bebd-cd58baf2008c
- **Quote:** "In the Save as type list, select PDF"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Saving as a PDF to Share
- **Status:** accepted as F275, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R263 · Open file after publishing
- **Claim:** To open the file in the new format after saving, select the Open file after publishing check box in More options.
- **Source:** Microsoft Support, "Save or convert to PDF": https://support.microsoft.com/en-us/office/save-or-convert-to-pdf-9df63379-2b35-4d96-bebd-cd58baf2008c
- **Quote:** "select the Open file after publishing check box in More options."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Saving as a PDF to Share
- **Status:** accepted as F276, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R264 · Corner triangle marks an error
- **Claim:** Any error that is found is marked with a triangle in the top-left corner of the cell.
- **Source:** Microsoft Support, "Detect formula errors in Excel": https://support.microsoft.com/en-us/Excel/detect-formula-errors-in-excel
- **Quote:** "Any error that is found is marked with a triangle in the top-left corner of the cell."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Reading an Error Message
- **Status:** accepted as F277, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R265 · List of error values
- **Claim:** Error values include #DIV/0!, #N/A, #NAME?, #NULL!, #NUM!, #REF! and #VALUE!.
- **Source:** Microsoft Support, "Detect formula errors in Excel": https://support.microsoft.com/en-us/Excel/detect-formula-errors-in-excel
- **Quote:** "Error values include #DIV/0!, #N/A, #NAME?, #NULL!, #NUM!, #REF!, and #VALUE!."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Reading an Error Message
- **Status:** accepted as F278, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R266 · Error rules are not a guarantee
- **Claim:** The error checking rules do not guarantee that your worksheet is error free.
- **Source:** Microsoft Support, "Detect formula errors in Excel": https://support.microsoft.com/en-us/Excel/detect-formula-errors-in-excel
- **Quote:** "These rules do not guarantee that your worksheet is error free."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Reading an Error Message
- **Status:** accepted as F279, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R267 · DIV/0 when dividing by zero
- **Claim:** Excel shows the #DIV/0! error when a number is divided by zero (0).
- **Source:** Microsoft Support, "How to correct a #DIV/0! error": https://support.microsoft.com/en-us/excel/how-to-correct-a-div-0-error
- **Quote:** "Microsoft Excel shows the #DIV/0! error when a number is divided by zero (0)."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Reading an Error Message
- **Status:** accepted as F280, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R268 · DIV/0 with a blank cell
- **Claim:** The #DIV/0! error also shows when a formula refers to a cell that has 0 or is blank.
- **Source:** Microsoft Support, "How to correct a #DIV/0! error": https://support.microsoft.com/en-us/excel/how-to-correct-a-div-0-error
- **Quote:** "a formula refers to a cell that has 0 or is blank"
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Reading an Error Message
- **Status:** accepted as F281, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R269 · NAME typo
- **Claim:** The top reason the #NAME? error appears is a typo in the formula name.
- **Source:** Microsoft Support, "How to correct a #NAME? error": https://support.microsoft.com/en-us/excel/how-to-correct-a-name-error
- **Quote:** "The top reason why the #NAME? error appears in the formula is because there's a typo in the formula name."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Reading an Error Message
- **Status:** accepted as F282, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R270 · NAME undefined name
- **Claim:** When your formula refers to a name that is not defined in Excel, you see the #NAME? error.
- **Source:** Microsoft Support, "How to correct a #NAME? error": https://support.microsoft.com/en-us/excel/how-to-correct-a-name-error
- **Quote:** "When your formula has a reference to a name not defined in Excel, you see the #NAME? error."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Reading an Error Message
- **Status:** accepted as F283, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R271 · REF invalid cell
- **Claim:** The #REF! error shows when a formula refers to a cell that is not valid.
- **Source:** Microsoft Support, "How to correct a #REF! error": https://support.microsoft.com/en-us/excel/how-to-correct-a-ref-error
- **Quote:** "The #REF! error shows when a formula refers to a cell that's not valid."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Reading an Error Message
- **Status:** accepted as F284, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R272 · REF after deleting or pasting over
- **Claim:** The #REF! error happens most often when cells that were referenced by formulas get deleted, or pasted over.
- **Source:** Microsoft Support, "How to correct a #REF! error": https://support.microsoft.com/en-us/excel/how-to-correct-a-ref-error
- **Quote:** "This happens most often when cells that were referenced by formulas get deleted, or pasted over."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Reading an Error Message
- **Status:** accepted as F285, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R273 · Undo restores deleted cells
- **Claim:** Right after deleting or pasting over cells, you can select the Undo button on the Quick Access Toolbar, or press Ctrl+Z, to restore them.
- **Source:** Microsoft Support, "How to correct a #REF! error": https://support.microsoft.com/en-us/excel/how-to-correct-a-ref-error
- **Quote:** "you can immediately select the Undo button on the Quick Access Toolbar (or press CTRL+Z) to restore them."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Reading an Error Message
- **Status:** accepted as F286, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R274 · VALUE means a typing or cell problem
- **Claim:** The #VALUE! error means there is something wrong with the way your formula is typed, or with the cells you are referencing.
- **Source:** Microsoft Support, "How to correct a #VALUE! error": https://support.microsoft.com/en-us/excel/how-to-correct-a-value-error
- **Quote:** "There's something wrong with the way your formula is typed. Or, there's something wrong with the cells you are referencing."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Reading an Error Message
- **Status:** accepted as F287, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R275 · Ctrl+backtick shows formulas
- **Claim:** Press Ctrl and the grave accent key (`) to switch between displaying formulas and their results from the keyboard.
- **Source:** Microsoft Support, "Display or hide formulas": https://support.microsoft.com/en-US/Excel/display-or-hide-formulas
- **Quote:** "Press CTRL + ` (grave accent)."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Showing the Formulas Behind the Numbers
- **Status:** accepted as F288, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R276 · Show Formulas on the Formulas tab
- **Claim:** Select Formulas and then select Show Formulas to switch between displaying formulas and results.
- **Source:** Microsoft Support, "Display or hide formulas": https://support.microsoft.com/en-US/Excel/display-or-hide-formulas
- **Quote:** "Select Formulas and then select Show Formulas to switch between displaying formulas and results."
- **Kind:** reference
- **Retrieved:** 2026-10-09
- **For:** Showing the Formulas Behind the Numbers
- **Status:** accepted as F289, 2026-10-09
- **Verified:** 2026-10-09, quote found on the page

---

## R277 · Sales sheet Amount total
- **Claim:** On the Sales sheet, the Amount column is column G, and =SUM(G2:G241) gives 6325.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Retrieved:** 2026-10-09
- **For:** Practice: The Final Check
- **Status:** accepted as F290, 2026-10-09
- **Verified:** 2026-10-09, no link: measurement, so it is yours to vouch for

---
