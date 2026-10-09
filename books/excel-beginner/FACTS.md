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

## F1 · Formulas start with an equal sign
- **Claim:** In Excel every formula begins with an equal sign.
- **Source:** Microsoft Support, "Overview of formulas in Excel": https://support.microsoft.com/en-us/office/overview-of-formulas-in-excel-ecfdc708-9162-49e8-b993-c311f47ca173
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F2 · SUM ignores text
- **Claim:** The SUM function adds the numbers in the cells it is given, and it ignores text values.
- **Source:** Microsoft Support, "SUM function": https://support.microsoft.com/en-us/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F3 · PivotTables summarise data
- **Claim:** A PivotTable is a tool that calculates, summarizes and analyzes data in a table.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F4 · Turn a range into a table
- **Claim:** You can turn a range of cells into an Excel table.
- **Source:** Microsoft Support, "Overview of Excel tables": https://support.microsoft.com/en-us/office/overview-of-excel-tables-7ab0bb7d-3a9e-4b56-a3c9-6c94334e492c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F5 · SUMIF adds only matching cells
- **Claim:** SUMIF adds up the values in a range that meet a condition you specify.
- **Source:** Microsoft Support, "SUMIF function": https://support.microsoft.com/en-us/excel/sumif-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F6 · Sort by text, numbers or dates
- **Claim:** Excel can sort the rows of a range or table by text, by numbers or by dates.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F7 · SUM skips empty cells
- **Claim:** SUM adds up the numbers in the cells you select and skips blank cells and text.
- **Source:** Microsoft Learn, "WorksheetFunction.Sum method (Excel)": https://learn.microsoft.com/office/vba/api/excel.worksheetfunction.sum
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F8 · AVERAGE counts zeros
- **Claim:** AVERAGE leaves out blank cells and text, but a cell that shows zero still counts toward the average.
- **Source:** Microsoft Learn, "WorksheetFunction.Average method (Excel)": https://learn.microsoft.com/office/vba/api/excel.worksheetfunction.average#remarks
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F9 · SUMIF without sum_range
- **Claim:** If you leave out the last part of SUMIF, it adds up the same cells it checked for a match.
- **Source:** Microsoft Learn, "WorksheetFunction.SumIf method (Excel)": https://learn.microsoft.com/office/vba/api/excel.worksheetfunction.sumif
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F10 · AutoFilter filters a list
- **Claim:** AutoFilter filters a list so that only the rows matching your choice stay visible.
- **Source:** Microsoft Learn, "Range.AutoFilter method (Excel)": https://learn.microsoft.com/office/vba/api/excel.range.autofilter
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F11 · An Excel table is one unit on the sheet
- **Claim:** An Excel table is a block of data on a sheet that Excel treats as one object.
- **Source:** Microsoft Learn, "ListObjects object (Excel)": https://learn.microsoft.com/office/vba/api/excel.listobjects
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F12 · Clustered column chart type
- **Claim:** Excel has a built-in chart type called Clustered Column.
- **Source:** Microsoft Learn, "XlChartType enumeration (Excel)": https://learn.microsoft.com/office/vba/api/excel.xlcharttype
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F13 · .xlsx is the normal Excel file type
- **Claim:** The normal Excel file type, .xlsx, is the standard way to save a workbook.
- **Source:** Microsoft Learn, "XlFileFormat enumeration (Excel)": https://learn.microsoft.com/office/vba/api/excel.xlfileformat
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F14 · .xlsm keeps macros
- **Claim:** The .xlsm file type is a workbook that can keep macros, which are small automated steps.
- **Source:** Microsoft Learn, "XlFileFormat enumeration (Excel)": https://learn.microsoft.com/office/vba/api/excel.xlfileformat
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F15 · Copy fill repeats source
- **Claim:** A copy-style fill repeats the values and formatting of your starting cells across the cells you fill.
- **Source:** Microsoft Learn, "XlAutoFillType enumeration (Excel)": https://learn.microsoft.com/office/vba/api/excel.xlautofilltype
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F16 · References can be relative or absolute
- **Claim:** Excel formulas can use relative or absolute cell addresses, and Excel can switch a formula between them.
- **Source:** Microsoft Learn, "Application.ConvertFormula method (Excel)": https://learn.microsoft.com/office/vba/api/excel.application.convertformula
- **Kind:** reference
- **Checked:** 2026-10-09

---

---

## F30 · Sales sheet columns
- **Claim:** On the Sales sheet of the sample workbook, Region is column B and Amount is column G.
- **Source:** My own work: `datasets/absolute-beginners/Sales clean.xlsx`, sheet Sales, header row read from the file on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

## F31 · Cell address is a letter and a number
- **Claim:** A cell is named by its column letter followed by its row number, such as D50.
- **Source:** Microsoft Learn, "Columns and rows are labeled numerically in Excel": https://learn.microsoft.com/troubleshoot/microsoft-365-apps/excel/numeric-columns-and-rows
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F32 · Drag the fill handle
- **Claim:** You can quickly copy formulas into adjacent cells by dragging the fill handle.
- **Source:** Microsoft Support, "Fill a formula down into adjacent cells": https://support.microsoft.com/en-us/excel/fill-a-formula-down-into-adjacent-cells
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F33 · AutoSum location
- **Claim:** AutoSum is on the Home tab and the Formulas tab.
- **Source:** Microsoft Support, "Use AutoSum to sum numbers in Excel": https://support.microsoft.com/en-us/excel/use-autosum-to-sum-numbers-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F34 · AutoSum writes SUM
- **Claim:** When you use AutoSum, Excel enters a formula that uses the SUM function to add the numbers.
- **Source:** Microsoft Support, "Use AutoSum to sum numbers in Excel": https://support.microsoft.com/en-us/excel/use-autosum-to-sum-numbers-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F35 · Sort from a column cell
- **Claim:** To sort, select a cell in the column you want to sort, then use the Sort and Filter group on the Data tab.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F36 · Filter from the header arrow
- **Claim:** To filter a table, select the arrow in the column header and pick a filter option.
- **Source:** Microsoft Support, "Filter data in a range or table in Excel": https://support.microsoft.com/en-us/office/filter-data-in-a-range-or-table-7fbe34f4-8382-431d-942e-41e9a88f6a96
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F37 · Format as Table option
- **Claim:** When you make a table, the checkbox named My table as headers tells Excel the first row holds the column headings.
- **Source:** Microsoft Support, "Overview of Excel tables": https://support.microsoft.com/en-us/office/overview-of-excel-tables-7ab0bb7d-3a9e-4b56-a3c9-6c94334e492c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F38 · Recommended Charts on Insert tab
- **Claim:** To insert a chart, click Insert, then Recommended Charts, and pick a chart from the suggestions.
- **Source:** Microsoft Support, "Create a chart with recommended charts": https://support.microsoft.com/en-us/excel/create-a-chart-with-recommended-charts
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F39 · PivotTable from the Insert tab
- **Claim:** To make a summary table, select Insert, then PivotTable.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F40 · Non-numeric fields go to Rows
- **Claim:** By default, Excel puts non-numeric fields in the Rows area of a PivotTable and numeric fields in the Values area.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F41 · Save As from the File menu
- **Claim:** To save a copy in another file type, choose File, then Save As.
- **Source:** Microsoft Support, "Save a workbook in another file format": https://support.microsoft.com/en-us/office/6a16c862-4a36-48f9-a300-c2ca0065286e
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F42 · F4 switches reference type
- **Claim:** Pressing F4 cycles a selected cell reference through the relative, absolute and mixed reference types.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F43 · Dollar sign makes a reference absolute
- **Claim:** Putting a dollar sign before the column and before the row makes a cell reference absolute, so it stays fixed when copied.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F44 · A1 notation names cells and blocks
- **Claim:** In A1 notation, a block of cells is written with its top-left and bottom-right cells, such as A1:B5, and rows are numbered in the same way.
- **Source:** Microsoft Learn, "Refer to Cells and Ranges by Using A1 Notation": https://learn.microsoft.com/office/vba/excel/concepts/cells-and-ranges/refer-to-cells-and-ranges-by-using-a1-notation
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F45 · Adding, sorting, filtering and charts
- **Claim:** Once data is in rows and columns, Excel can add it up, sort and filter it, put it in tables, and build charts.
- **Source:** Microsoft Support, "Basic tasks in Excel": https://support.microsoft.com/en-us/excel/basic-tasks-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F46 · Simple calculations and tracking
- **Claim:** Excel also works well for simple calculations and for tracking almost any kind of information.
- **Source:** Microsoft Support, "Basic tasks in Excel": https://support.microsoft.com/en-us/excel/basic-tasks-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F47 · What a cell can hold
- **Claim:** Each cell can hold a number, some text, or a formula.
- **Source:** Microsoft Support, "Basic tasks in Excel": https://support.microsoft.com/en-us/excel/basic-tasks-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F48 · Workbook is the file
- **Claim:** An Excel file is called a workbook.
- **Source:** Microsoft Support, "Basic tasks in Excel": https://support.microsoft.com/en-us/excel/basic-tasks-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F49 · Sheets in a workbook
- **Claim:** A workbook holds sheets, and you can add as many sheets as you want to one workbook.
- **Source:** Microsoft Support, "Basic tasks in Excel": https://support.microsoft.com/en-us/excel/basic-tasks-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F50 · The ribbon's tabs
- **Claim:** The ribbon has tabs such as Home and Insert, and each tab groups related options together.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F51 · Formula bar shows the formula
- **Claim:** The formula bar shows the formula in the selected cell.
- **Source:** Microsoft Support, "Overview of formulas in Excel": https://support.microsoft.com/en-us/excel/get-started/overview-of-formulas-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F52 · Name box position
- **Claim:** The Name box sits to the left of the formula bar.
- **Source:** Microsoft Support, "Select specific cells or ranges in Excel": https://support.microsoft.com/en-us/excel/select-specific-cells-or-ranges-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F53 · Typing an address selects a cell
- **Claim:** Typing a cell address in the Name box and pressing Enter selects that cell.
- **Source:** Microsoft Support, "Select specific cells or ranges in Excel": https://support.microsoft.com/en-us/excel/select-specific-cells-or-ranges-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F54 · New sheet button
- **Claim:** The New Sheet plus icon at the bottom of the workbook adds a worksheet.
- **Source:** Microsoft Support, "Insert or delete a worksheet": https://support.microsoft.com/en-us/excel/get-started/insert-or-delete-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F55 · Rename a sheet tab
- **Claim:** Double-clicking a sheet name on its tab lets you rename the sheet.
- **Source:** Microsoft Support, "Insert or delete a worksheet": https://support.microsoft.com/en-us/excel/get-started/insert-or-delete-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F56 · Next sheet shortcut
- **Claim:** Ctrl+Page down moves to the next sheet in a workbook.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F57 · Arrow keys move one cell
- **Claim:** The arrow keys move the active cell one cell at a time, up, down, left or right.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F58 · Edge of a block of data
- **Claim:** Ctrl with an arrow key jumps to the edge of the current block of data.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F59 · Ctrl+Home
- **Claim:** Ctrl+Home moves to the beginning of the worksheet.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F60 · Ctrl+End
- **Claim:** Ctrl+End moves to the last used cell, at the lowest used row of the rightmost used column.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F61 · Enter moves down
- **Claim:** Enter completes the entry and, by default, selects the cell below.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F62 · Sheet tabs at the bottom
- **Claim:** The worksheet tabs sit at the bottom of the Excel workbook.
- **Source:** Microsoft Support, "Where are my worksheet tabs?": https://support.microsoft.com/en-us/excel/where-are-my-worksheet-tabs
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F63 · Ribbon along the top edge
- **Claim:** In Excel the ribbon is a horizontal strip along the top edge of the window, with its related groups on tabs.
- **Source:** Microsoft Learn, "Ribbon overview" (developer documentation, applies to Excel): https://learn.microsoft.com/en-us/visualstudio/vsto/ribbon-overview?view=vs-2022
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F64 · Rename with Enter
- **Claim:** To rename a sheet, double-click its tab, type the new name, and press Enter.
- **Source:** Microsoft Support, "Rename a worksheet" (en-au, Microsoft 365): https://support.microsoft.com/en-au/office/rename-a-worksheet-8ad39220-ee16-46d0-9c92-bd97cbdfaf91
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F65 · Sample file has four sheets
- **Claim:** The sample file Corner Shop sales.xlsx has four sheets: Sales, Products, Targets and Staff.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, sheet names read with openpyxl on 2026-10-09 (make.py, seed 11).
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F66 · Sales sheet last cell
- **Claim:** On the Sales sheet of the sample file, the last cell in use is G241. Pressing Ctrl+End there should land on it.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, Sales sheet, last used cell read with openpyxl on 2026-10-09. Not yet tried in Excel itself.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F67 · Sales rows
- **Claim:** The Sales sheet of the sample file has one heading row and 240 sales rows.
- **Source:** My own work: datasets/excel-beginner/make.py writes 240 sales rows, and answers.json records rows: 240, checked on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F68 · Tab moves one cell right
- **Claim:** The Tab key moves the active cell one cell to the right.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F69 · Esc cancels an entry
- **Claim:** Esc cancels an entry in the cell or the formula bar before you finish it.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F70 · Enter or Tab to next cell
- **Claim:** After you type in a cell, pressing Enter or Tab moves to the next cell.
- **Source:** Microsoft Support, "Basic tasks in Excel": https://support.microsoft.com/en-us/excel/basic-tasks-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F71 · Ctrl+Z undoes
- **Claim:** Ctrl+Z undoes the last action.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F72 · F2 edits in place
- **Claim:** F2 edits the active cell and puts the insertion point at the end of its contents.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F73 · Delete clears contents
- **Claim:** Delete removes the contents of the selected cells and leaves their formats in place.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F74 · Shift with arrow extends
- **Claim:** Shift with an arrow key extends the selection by one cell.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F75 · Ctrl+Space selects column
- **Claim:** Ctrl+Space selects an entire column in a worksheet.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F76 · Shift+Space selects row
- **Claim:** Shift+Space selects an entire row in a worksheet.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F77 · Alert on numbers stored as text
- **Claim:** Excel usually shows an alert next to a cell where numbers are stored as text.
- **Source:** Microsoft Support, "Convert numbers stored as text to numbers in Excel": https://support.microsoft.com/en-us/excel/convert-numbers-stored-as-text-to-numbers-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F78 · Convert to Number
- **Claim:** To fix the alert, select the cells, click the error indicator in the top left corner, and choose Convert to Number.
- **Source:** Microsoft Support, "Convert numbers stored as text to numbers in Excel": https://support.microsoft.com/en-us/excel/convert-numbers-stored-as-text-to-numbers-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F79 · Green triangle removed
- **Claim:** After the cells are converted, the green triangle warning is removed.
- **Source:** Microsoft Support, "Convert numbers stored as text to numbers in Excel": https://support.microsoft.com/en-us/excel/convert-numbers-stored-as-text-to-numbers-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F80 · Alt+Shift+F10 for the error menu
- **Claim:** Alt+Shift+F10 opens the error indicator menu from the keyboard.
- **Source:** Microsoft Support, "Convert numbers stored as text to numbers in Excel": https://support.microsoft.com/en-us/excel/convert-numbers-stored-as-text-to-numbers-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F81 · Typed 2/2 read as a date
- **Claim:** Typing 2/2 in a cell makes Excel interpret the entry as a date.
- **Source:** Microsoft Support, "Format numbers as dates or times": https://support.microsoft.com/en-us/excel/format-numbers-as-dates-or-times
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F82 · Default date format from regional settings
- **Claim:** The default date format for a typed date comes from the regional date and time settings in Control Panel.
- **Source:** Microsoft Support, "Format numbers as dates or times": https://support.microsoft.com/en-us/excel/format-numbers-as-dates-or-times
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F83 · Products sheet headings
- **Claim:** The Products sheet of the sample file has three headings: Product, Category and Unit price.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, Products sheet, row 1 read with openpyxl on 2026-10-09 (make.py, seed 11).
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F84 · Bold, italic and underline
- **Claim:** Bold, italic and underline apply to the text or numbers in a cell once you select the cell.
- **Source:** Microsoft Support, "Format text in cells": https://support.microsoft.com/en-US/excel/format-text-in-cells
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F85 · Font style, size and colour
- **Claim:** On the Home tab you can change a cell's font style, size and colour, or apply effects.
- **Source:** Microsoft Support, "Format text in cells": https://support.microsoft.com/en-US/excel/format-text-in-cells
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F86 · Font size arrow
- **Claim:** To change the font size, click the arrow next to Font Size and pick the size you want.
- **Source:** Microsoft Support, "Change the font style and size for a worksheet": https://support.microsoft.com/en-us/office/change-the-font-style-and-size-for-a-worksheet-b3f1792b-9980-4b92-9aa5-5dd6e940b195
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F87 · Currency or Accounting for money
- **Claim:** To show numbers as money, apply the Currency or Accounting number format to the cells.
- **Source:** Microsoft Support, "Format numbers as currency in Excel": https://support.microsoft.com/en-us/excel/format-numbers-as-currency-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F88 · Accounting Number Format button
- **Claim:** The Accounting Number Format button is in the Number group on the Home tab.
- **Source:** Microsoft Support, "Format numbers as currency in Excel": https://support.microsoft.com/en-us/excel/format-numbers-as-currency-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F89 · Ctrl+Shift+$ applies Currency
- **Claim:** Pressing Ctrl+Shift+$ applies the Currency format to the selected cells.
- **Source:** Microsoft Support, "Format numbers as currency in Excel": https://support.microsoft.com/en-us/excel/format-numbers-as-currency-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F90 · Accounting lines up symbols
- **Claim:** The Accounting format lines up currency symbols and decimal points in a column of data.
- **Source:** Microsoft Learn, "How to control and understand settings in the Format Cells dialog box in Excel": https://learn.microsoft.com/troubleshoot/microsoft-365-apps/excel/format-cells-settings
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F91 · Percent format multiplies by 100
- **Claim:** Applying the Percentage format to numbers already in a workbook multiplies those numbers by 100.
- **Source:** Microsoft Support, "Format numbers as percentages in Excel": https://support.microsoft.com/en-us/excel/format-numbers-as-percentages-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F92 · Percent Style button
- **Claim:** The Percent Style button, in the Number group on the Home tab, applies percentage formatting to the selected cells.
- **Source:** Microsoft Support, "Format numbers as percentages in Excel": https://support.microsoft.com/en-us/excel/format-numbers-as-percentages-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F93 · Increase and Decrease Decimal
- **Claim:** On the Home tab, Increase Decimal and Decrease Decimal show more or fewer digits after the decimal point.
- **Source:** Microsoft Support, "Round a number to the decimal places I want in Excel": https://support.microsoft.com/en-US/Excel/round-a-number-to-the-decimal-places-i-want-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F94 · Drag column boundary
- **Claim:** To widen or narrow one column, drag the boundary on the right side of its heading until the column is the width you want.
- **Source:** Microsoft Support, "Change column width or row height": https://support.microsoft.com/en-us/excel/change-column-width-or-row-height
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F95 · Double-click to fit
- **Claim:** Double-clicking the boundary between two column headings makes the column fit the size of its text.
- **Source:** Microsoft Support, "Change column width or row height": https://support.microsoft.com/en-us/excel/change-column-width-or-row-height
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F96 · Drag row boundary
- **Claim:** To change the height of one row, drag the boundary below its row heading until the row is the height you want.
- **Source:** Microsoft Support, "Change column width or row height": https://support.microsoft.com/en-us/excel/change-column-width-or-row-height
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F97 · When to change width
- **Claim:** Changing the row height or column width can help when you cannot see all the data in a cell.
- **Source:** Microsoft Support, "Change column width or row height": https://support.microsoft.com/en-us/excel/change-column-width-or-row-height
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F98 · Borders button styles
- **Claim:** To apply a border, open the arrow next to Borders on the Home tab and select a border style.
- **Source:** Microsoft Support, "Apply or remove cell borders on a worksheet": https://support.microsoft.com/en-us/Excel/apply-or-remove-cell-borders-on-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F99 · Borders button in Font group
- **Claim:** The Borders button is in the Font group on the Home tab.
- **Source:** Microsoft Support, "Apply or remove cell borders on a worksheet": https://support.microsoft.com/en-us/Excel/apply-or-remove-cell-borders-on-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F100 · No Border removes borders
- **Claim:** Choosing No Border from the Borders menu removes cell borders.
- **Source:** Microsoft Support, "Apply or remove cell borders on a worksheet": https://support.microsoft.com/en-us/Excel/apply-or-remove-cell-borders-on-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F101 · Fill Color menu
- **Claim:** To fill cells with a solid colour, open the Fill Color menu and pick a colour from Theme Colors or Standard Colors.
- **Source:** Microsoft Support, "Apply or remove cell shading in Excel": https://support.microsoft.com/en-us/excel/apply-or-remove-cell-shading-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F102 · Fill Color in Font group
- **Claim:** The Fill Color button is in the Font group on the Home tab.
- **Source:** Microsoft Support, "Apply or remove cell shading in Excel": https://support.microsoft.com/en-us/excel/apply-or-remove-cell-shading-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F103 · No Fill removes shading
- **Claim:** Choosing No Fill from the Fill Color menu removes a cell's shading.
- **Source:** Microsoft Support, "Apply or remove cell shading in Excel": https://support.microsoft.com/en-us/excel/apply-or-remove-cell-shading-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F104 · Font Color for text
- **Claim:** To change the colour of text, select Font Color and pick a colour.
- **Source:** Microsoft Support, "Format text in cells": https://support.microsoft.com/en-US/excel/format-text-in-cells
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F105 · Sales money columns
- **Claim:** On the Sales sheet of the sample file, the Unit price and Amount columns use the £ currency format.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, Sales sheet, number formats read with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F106 · Result appears in the cell
- **Claim:** A formula's result appears in the cell that holds the formula.
- **Source:** Microsoft Support, "Overview of formulas in Excel": https://support.microsoft.com/en-us/office/overview-of-formulas-in-excel-ecfdc708-9162-49e8-b993-c311f47ca173
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F107 · Enter gives the result
- **Claim:** Pressing Enter gives the result of a formula.
- **Source:** Microsoft Support, "Overview of formulas in Excel": https://support.microsoft.com/en-us/office/overview-of-formulas-in-excel-ecfdc708-9162-49e8-b993-c311f47ca173
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F108 · Typed numbers change only when edited
- **Claim:** A formula that uses typed numbers, not cell references, changes its result only when you edit the formula.
- **Source:** Microsoft Support, "Overview of formulas in Excel": https://support.microsoft.com/en-us/office/overview-of-formulas-in-excel-ecfdc708-9162-49e8-b993-c311f47ca173
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F109 · Plus sign adds
- **Claim:** In a formula, the plus sign adds.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F110 · Minus sign subtracts
- **Claim:** In a formula, the minus sign subtracts.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F111 · Asterisk multiplies
- **Claim:** In a formula, the asterisk multiplies.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F112 · Forward slash divides
- **Claim:** In a formula, the forward slash divides.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F113 · Caret raises to a power
- **Claim:** In a formula, the caret raises a number to a power.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F114 · Multiplication first
- **Claim:** Excel does multiplication before addition in a formula.
- **Source:** Microsoft Support, "The order in which Excel performs operations in formulas": https://support.microsoft.com/en-us/excel/the-order-in-which-excel-performs-operations-in-formulas
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F115 · Parentheses change the order
- **Claim:** Parentheses change the order of calculation, so the part inside them is worked out first.
- **Source:** Microsoft Support, "The order in which Excel performs operations in formulas": https://support.microsoft.com/en-us/excel/the-order-in-which-excel-performs-operations-in-formulas
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F116 · SUM adds values
- **Claim:** The SUM function adds the values it is given.
- **Source:** Microsoft Support, "SUM function": https://support.microsoft.com/en-us/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F117 · SUM over a range
- **Claim:** =SUM(A2:A10) adds the values in cells A2 to A10.
- **Source:** Microsoft Support, "SUM function": https://support.microsoft.com/en-us/office/sum-function-043e1c7d-7726-4e80-8f32-07b23e057f89
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F118 · AVERAGE is the arithmetic mean
- **Claim:** AVERAGE returns the average, or arithmetic mean, of the numbers it is given.
- **Source:** Microsoft Support, "AVERAGE function": https://support.microsoft.com/en-US/excel/average-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F119 · How an average is found
- **Claim:** An average is found by adding a group of numbers and dividing by how many numbers there are.
- **Source:** Microsoft Support, "AVERAGE function": https://support.microsoft.com/en-US/excel/average-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F120 · MIN is the smallest
- **Claim:** MIN returns the smallest number in a group of values.
- **Source:** Microsoft Support, "MIN function": https://support.microsoft.com/en-us/excel/functions/min-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F121 · MIN ignores empty cells and text
- **Claim:** MIN ignores empty cells, logical values and text in a range.
- **Source:** Microsoft Support, "MIN function": https://support.microsoft.com/en-us/excel/functions/min-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F122 · MAX is the largest
- **Claim:** MAX returns the largest value in a group of values.
- **Source:** Microsoft Support, "MAX function": https://support.microsoft.com/en-US/excel/functions/max-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F123 · COUNT counts numbers
- **Claim:** COUNT counts the cells that contain numbers.
- **Source:** Microsoft Support, "COUNT function": https://support.microsoft.com/en-us/excel/count-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F124 · ROUND syntax
- **Claim:** ROUND takes a number and the number of digits to round it to.
- **Source:** Microsoft Support, "ROUND function": https://support.microsoft.com/en-us/Excel/functions/round-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F125 · Decimal places
- **Claim:** When num_digits is above zero, ROUND rounds the number to that many decimal places.
- **Source:** Microsoft Support, "ROUND function": https://support.microsoft.com/en-us/Excel/functions/round-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F126 · Stored value used
- **Claim:** Excel calculates with the stored value of a number, not the value you see in the cell.
- **Source:** Microsoft Support, "Stop rounding numbers": https://support.microsoft.com/excel/stop-rounding-numbers
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F127 · Amount total
- **Claim:** On the Sales sheet, the Amount column adds up to 6325.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, Sales sheet, Amount column G2 to G241 summed with openpyxl on 2026-10-09 (240 values).
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F128 · Amount average
- **Claim:** The average of the Amount column is 26.35 to two decimal places.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, Sales sheet, Amount column G2 to G241 summed with openpyxl on 2026-10-09 (240 values).
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F129 · Smallest and largest amount
- **Claim:** The smallest amount on the Sales sheet is 2, and the largest is 90.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, Sales sheet, Amount column G2 to G241 summed with openpyxl on 2026-10-09 (240 values).
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F130 · References are relative by default
- **Claim:** By default, a cell reference is relative, which means it is measured from the cell that holds the formula.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F131 · Copying changes a relative reference
- **Claim:** When you copy a formula that contains a relative cell reference, the reference in the formula changes.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F132 · Copying =B4*C4 from D4 to D5
- **Claim:** Copying the formula =B4*C4 from D4 to D5 gives =B5*C5 in D5.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F133 · Absolute formula stays the same
- **Claim:** Copying the formula =$B$4*$C$4 from D4 to D5 leaves the formula exactly the same.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F134 · Mixed references fix the column or the row
- **Claim:** A dollar sign before just the column or just the row mixes absolute and relative, fixing either the column or the row, as in $B4 or C$4.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F135 · Copying $A1 two down and two right
- **Claim:** Copied two cells down and two cells to the right, a $A1 reference becomes $A3, so it is mixed.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F136 · Copying A$1 two down and two right
- **Claim:** Copied two cells down and two cells to the right, an A$1 reference becomes C$1, so it is mixed.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F137 · Steps to change the reference type
- **Claim:** To change a reference type, select the cell that holds the formula, select the reference in the formula bar, and press the F4 key to switch between the types.
- **Source:** Microsoft Support, "Switch between relative, absolute, and mixed references": https://support.microsoft.com/office/dfec08cd-ae65-4f56-839e-5f0d8d0baca9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F138 · Sheet name and exclamation mark
- **Claim:** To use a cell on another worksheet in the same workbook, put the worksheet name and an exclamation mark in front of the cell reference.
- **Source:** Microsoft Support, "Create or change a cell reference": https://support.microsoft.com/office/create-or-change-a-cell-reference-c7b8b95d-c594-4488-947e-c835903cebaa
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F139 · Marketing example
- **Claim:** A formula can use AVERAGE on the range B1:B10 of a worksheet named Marketing in the same workbook.
- **Source:** Microsoft Support, "Create or change a cell reference": https://support.microsoft.com/office/create-or-change-a-cell-reference-c7b8b95d-c594-4488-947e-c835903cebaa
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F140 · Single quotation marks for other sheet names
- **Claim:** If the other worksheet name contains non-alphabetical characters, it must be enclosed in single quotation marks.
- **Source:** Microsoft Support, "Create or change a cell reference": https://support.microsoft.com/office/create-or-change-a-cell-reference-c7b8b95d-c594-4488-947e-c835903cebaa
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F141 · Typing = then picking the other sheet
- **Claim:** To build the reference by clicking, type = in the formula bar, select the tab of the other worksheet, then select the cell to refer to.
- **Source:** Microsoft Support, "Create or change a cell reference": https://support.microsoft.com/office/create-or-change-a-cell-reference-c7b8b95d-c594-4488-947e-c835903cebaa
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F142 · North target
- **Claim:** On the Targets sheet, cell B2 holds the North target, 1500.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F143 · Quantity times Unit price matches Amount
- **Claim:** On the Sales sheet, Quantity times Unit price equals Amount in all 240 rows, from row 2 to row 241.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F144 · Quantity times Unit price total
- **Claim:** Quantity times Unit price, added up over the 240 rows, comes to 6325, the same as the Amount column.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F145 · Comparison gives TRUE or FALSE
- **Claim:** Comparing two values with a comparison symbol gives the answer TRUE or FALSE.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F146 · Equal, greater and less symbols
- **Claim:** In a formula, = means equal to, > means greater than, and < means less than.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F147 · Or-equal and not-equal symbols
- **Claim:** In a formula, >= means greater than or equal to, <= means less than or equal to, and <> means not equal to.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F148 · IF returns one value or another
- **Claim:** IF returns one value if a condition is true and another value if it is false.
- **Source:** Microsoft Support, "IF function": https://support.microsoft.com/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F149 · IF has three parts
- **Claim:** IF takes the test, the value to return if the test is true, and optionally the value to return if it is false.
- **Source:** Microsoft Support, "IF function": https://support.microsoft.com/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F150 · Over Budget example
- **Claim:** In a formula such as =IF(C2>B2,"Over Budget","Within Budget"), IF checks whether C2 is greater than B2, and returns Over Budget if it is.
- **Source:** Microsoft Support, "IF function": https://support.microsoft.com/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F151 · Text goes in quotation marks
- **Claim:** Text used in a formula must be wrapped in quotation marks.
- **Source:** Microsoft Support, "IF function": https://support.microsoft.com/office/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F152 · AND needs all true
- **Claim:** AND returns TRUE if all its tests are true, and FALSE if one or more are false.
- **Source:** Microsoft Support, "AND function": https://support.microsoft.com/office/and-function-5f19b2e8-e1df-4408-897a-ce285a19e9d9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F153 · OR needs any true
- **Claim:** OR returns TRUE if any of its tests is true, and FALSE only if all of them are false.
- **Source:** Microsoft Support, "OR function": https://support.microsoft.com/office/or-function-7d17ad14-8700-4281-b308-00b131e22af0
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F154 · AND inside IF
- **Claim:** Using AND as the test inside IF lets you test many conditions instead of just one.
- **Source:** Microsoft Support, "AND function": https://support.microsoft.com/office/and-function-5f19b2e8-e1df-4408-897a-ce285a19e9d9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F155 · OR inside IF
- **Claim:** Using OR as the test inside IF lets you test many conditions instead of just one.
- **Source:** Microsoft Support, "OR function": https://support.microsoft.com/office/or-function-7d17ad14-8700-4281-b308-00b131e22af0
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F156 · AND example
- **Claim:** =AND(A2>1,A2<100) shows TRUE if A2 is greater than 1 and less than 100, otherwise FALSE.
- **Source:** Microsoft Support, "AND function": https://support.microsoft.com/office/and-function-5f19b2e8-e1df-4408-897a-ce285a19e9d9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F157 · COUNTIF counts matching cells
- **Claim:** COUNTIF counts the number of cells that meet a condition.
- **Source:** Microsoft Support, "COUNTIF function": https://support.microsoft.com/office/countif-function-e0de10c6-f885-4e71-abb4-1f464816df34
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F158 · COUNTIF has two parts
- **Claim:** COUNTIF takes the group of cells to look in and the condition to look for.
- **Source:** Microsoft Support, "COUNTIF function": https://support.microsoft.com/office/countif-function-e0de10c6-f885-4e71-abb4-1f464816df34
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F159 · COUNTIF condition can be a comparison
- **Claim:** The condition in COUNTIF can be a number, a comparison such as ">32", a cell, or a word.
- **Source:** Microsoft Support, "COUNTIF function": https://support.microsoft.com/office/countif-function-e0de10c6-f885-4e71-abb4-1f464816df34
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F160 · COUNTIF greater-than example
- **Claim:** =COUNTIF(B2:B5,">55") counts the cells in B2 to B5 with a value greater than 55.
- **Source:** Microsoft Support, "COUNTIF function": https://support.microsoft.com/office/countif-function-e0de10c6-f885-4e71-abb4-1f464816df34
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F161 · Amounts over 50
- **Claim:** On the Sales sheet, 35 of the 240 amounts in G2 to G241 are over 50, and none is exactly 50.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F162 · XLOOKUP finds things by row
- **Claim:** XLOOKUP finds things in a table or range by row.
- **Source:** Microsoft Support, "XLOOKUP function": https://support.microsoft.com/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F163 · Search one column, return from another
- **Claim:** XLOOKUP looks in one column for a search term and returns a result from the same row in another column, on either side.
- **Source:** Microsoft Support, "XLOOKUP function": https://support.microsoft.com/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F164 · XLOOKUP parts
- **Claim:** XLOOKUP takes the value to search for, the range to search, and the range to return from, with optional extras.
- **Source:** Microsoft Support, "XLOOKUP function": https://support.microsoft.com/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F165 · No match gives #N/A
- **Claim:** If XLOOKUP finds no match and no message is supplied, it returns #N/A.
- **Source:** Microsoft Support, "XLOOKUP function": https://support.microsoft.com/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F166 · Not in older Excel
- **Claim:** XLOOKUP is not available in Excel 2016 and Excel 2019.
- **Source:** Microsoft Support, "XLOOKUP function": https://support.microsoft.com/office/xlookup-function-b7fd680e-6d10-43e6-84f9-88eae8bf5929
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F167 · Products sheet
- **Claim:** On the Products sheet, A2 to A6 list Notebook, Pen, Mug, Bag and Plant, B2 to B6 hold their categories, and Bag, in A5, is in the Kitchen category.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F168 · IFERROR returns your value on an error
- **Claim:** IFERROR returns a value you specify if a formula gives an error, and otherwise returns the formula's result.
- **Source:** Microsoft Support, "IFERROR function": https://support.microsoft.com/office/iferror-function-c526fd07-caeb-47b8-8bb6-63f3e417f611
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F169 · IFERROR has two parts
- **Claim:** IFERROR takes the formula to check and the value to return if it gives an error.
- **Source:** Microsoft Support, "IFERROR function": https://support.microsoft.com/office/iferror-function-c526fd07-caeb-47b8-8bb6-63f3e417f611
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F170 · Errors IFERROR covers
- **Claim:** IFERROR covers the errors #N/A, #VALUE!, #REF!, #DIV/0!, #NUM!, #NAME? and #NULL!.
- **Source:** Microsoft Support, "IFERROR function": https://support.microsoft.com/office/iferror-function-c526fd07-caeb-47b8-8bb6-63f3e417f611
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F171 · IFERROR divide by zero example
- **Claim:** In =IFERROR(A3/B3,"Error in calculation"), dividing 55 by 0 gives a division by 0 error, so the message is returned.
- **Source:** Microsoft Support, "IFERROR function": https://support.microsoft.com/office/iferror-function-c526fd07-caeb-47b8-8bb6-63f3e417f611
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F172 · First Sales row
- **Claim:** On the Sales sheet, row 2 is a Bag sale, with D2 holding Bag and G2 holding 72.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F173 · A date is a serial number
- **Claim:** In the 1900 date system, Excel converts a date into a serial number that counts the days elapsed since January 1, 1900.
- **Source:** Microsoft Support, "Date systems in Excel": https://support.microsoft.com/office/date-systems-in-excel-e7fe7167-48a9-4b96-bb53-5612a800b487
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F174 · July 5, 2011 is 40729
- **Claim:** In the 1900 date system, July 5, 2011 becomes the serial number 40729.
- **Source:** Microsoft Support, "Date systems in Excel": https://support.microsoft.com/office/date-systems-in-excel-e7fe7167-48a9-4b96-bb53-5612a800b487
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F175 · Subtracting dates gives days
- **Claim:** Subtracting one date from another, such as =C2-B2, shows the number of days between the two dates.
- **Source:** Microsoft Support, "Subtract dates": https://support.microsoft.com/office/subtract-dates-bce4fadf-a200-4d0d-bdee-c44f7dd0fe83
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F176 · TODAY gives the current date
- **Claim:** The TODAY function returns the serial number of the current date.
- **Source:** Microsoft Support, "TODAY function": https://support.microsoft.com/office/today-function-5eb3078d-a82c-4736-8930-2f51a028fdd9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F177 · TODAY shows the date whenever opened
- **Claim:** TODAY is useful when you need the current date displayed on a worksheet, whenever you open the workbook.
- **Source:** Microsoft Support, "TODAY function": https://support.microsoft.com/office/today-function-5eb3078d-a82c-4736-8930-2f51a028fdd9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F178 · TODAY has nothing between its brackets
- **Claim:** TODAY takes nothing between its brackets.
- **Source:** Microsoft Support, "TODAY function": https://support.microsoft.com/office/today-function-5eb3078d-a82c-4736-8930-2f51a028fdd9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F179 · TODAY plus 5 days
- **Claim:** =TODAY()+5 returns the current date plus 5 days.
- **Source:** Microsoft Support, "TODAY function": https://support.microsoft.com/office/today-function-5eb3078d-a82c-4736-8930-2f51a028fdd9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F180 · TODAY changes General to Date
- **Claim:** If the cell was in General format before TODAY was entered, Excel changes it to the Date format.
- **Source:** Microsoft Support, "TODAY function": https://support.microsoft.com/office/today-function-5eb3078d-a82c-4736-8930-2f51a028fdd9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F181 · YEAR returns the year
- **Claim:** YEAR returns the year of a date, as a whole number from 1900 to 9999.
- **Source:** Microsoft Support, "YEAR function": https://support.microsoft.com/en-US/excel/functions/year-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F182 · MONTH returns 1 to 12
- **Claim:** MONTH returns the month of a date as a whole number from 1 (January) to 12 (December).
- **Source:** Microsoft Support, "MONTH function": https://support.microsoft.com/en-US/Excel/functions/month-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F183 · DAY returns 1 to 31
- **Claim:** DAY returns the day of the month as a whole number from 1 to 31.
- **Source:** Microsoft Support, "DAY function": https://support.microsoft.com/en-us/excel/day-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F184 · DATE builds a date
- **Claim:** DATE(2025,5,23) is the 23rd day of May, 2025, and dates for these functions should be entered with DATE or as the results of other formulas.
- **Source:** Microsoft Support, "YEAR function": https://support.microsoft.com/en-US/excel/functions/year-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F185 · Dates typed as text cause problems
- **Claim:** Problems can occur if dates are entered as text.
- **Source:** Microsoft Support, "YEAR function": https://support.microsoft.com/en-US/excel/functions/year-function
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F186 · Ampersand or CONCAT joins cells
- **Claim:** You can combine data from several cells into one cell using the ampersand symbol or the CONCAT function.
- **Source:** Microsoft Support, "Combine text from two or more cells into one cell": https://support.microsoft.com/office/combine-text-from-two-or-more-cells-into-one-cell-81ba0946-ce78-42ed-b3c3-21340eb164a6
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F187 · Ampersand example with a space
- **Claim:** The formula =A2&" "&B2 joins the contents of A2, a space, and the contents of B2.
- **Source:** Microsoft Support, "Combine text from two or more cells into one cell": https://support.microsoft.com/office/combine-text-from-two-or-more-cells-into-one-cell-81ba0946-ce78-42ed-b3c3-21340eb164a6
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F188 · CONCAT example
- **Claim:** The formula =CONCAT(A2, " Family") joins the contents of A2 and the text Family.
- **Source:** Microsoft Support, "Combine text from two or more cells into one cell": https://support.microsoft.com/office/combine-text-from-two-or-more-cells-into-one-cell-81ba0946-ce78-42ed-b3c3-21340eb164a6
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F189 · Ampersand connects two values
- **Claim:** The ampersand connects, or concatenates, two values to produce one continuous text value.
- **Source:** Microsoft Support, "Calculation operators and precedence in Excel": https://support.microsoft.com/en-US/excel/calculation-operators-and-precedence-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F190 · TRIM removes extra spaces
- **Claim:** TRIM removes all spaces from text except for single spaces between words.
- **Source:** Microsoft Support, "TRIM function": https://support.microsoft.com/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F191 · When to use TRIM
- **Claim:** Use TRIM on text received from another application that may have irregular spacing.
- **Source:** Microsoft Support, "TRIM function": https://support.microsoft.com/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F192 · TRIM Sales report example
- **Claim:** =TRIM(" Sales report ") removes the spaces at the beginning and end of "Sales report".
- **Source:** Microsoft Support, "TRIM function": https://support.microsoft.com/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F193 · TRIM leaves non-breaking spaces
- **Claim:** By itself, TRIM does not remove the non-breaking space character, which is commonly used on web pages.
- **Source:** Microsoft Support, "TRIM function": https://support.microsoft.com/office/trim-function-410388fa-c5df-49c6-b16c-9e5630b479f9
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F194 · First Staff row
- **Claim:** On the Staff sheet, row 2 holds Ada Okafor in A2, North in B2, and a start date of 4 March 2019 in C2.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F195 · Freeze Panes keeps an area in view
- **Claim:** On the View tab, Freeze Panes locks specific rows and columns in place, so an area of the worksheet stays visible while you scroll to another area.
- **Source:** Microsoft Support, "Freeze panes to lock rows and columns": https://support.microsoft.com/office/freeze-panes-to-lock-rows-and-columns-dab2ffc9-020d-4026-8121-67dd25f2508f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F196 · Freeze Panes freezes above and left
- **Claim:** Freeze Panes freezes the rows above and the columns left of the selected cell.
- **Source:** Microsoft Support, "Freeze panes to lock rows and columns": https://support.microsoft.com/office/freeze-panes-to-lock-rows-and-columns-dab2ffc9-020d-4026-8121-67dd25f2508f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F197 · Which cell to select to freeze
- **Claim:** To freeze rows and columns, select the cell below the rows and to the right of the columns you want to keep visible, then choose View, Freeze Panes, Freeze Panes.
- **Source:** Microsoft Support, "Freeze panes to lock rows and columns": https://support.microsoft.com/office/freeze-panes-to-lock-rows-and-columns-dab2ffc9-020d-4026-8121-67dd25f2508f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F198 · Unfreeze Panes
- **Claim:** To unfreeze rows or columns, go to the View tab, then Freeze Panes, then Unfreeze Panes.
- **Source:** Microsoft Support, "Freeze panes to lock rows and columns": https://support.microsoft.com/office/freeze-panes-to-lock-rows-and-columns-dab2ffc9-020d-4026-8121-67dd25f2508f
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F199 · Sales headings already frozen
- **Claim:** In the sample file, the Sales sheet already has its heading row frozen, with the panes frozen at A2.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F200 · Sorting by more than one column
- **Claim:** You can sort by more than one column to group rows by the same value in one column and then sort another column within each group of equal values.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F201 · Department then Employee example
- **Claim:** With a Department column and an Employee column, you can sort by Department first to group the employees, then by name to put the names in alphabetical order within each department.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F202 · Sort button on the Data tab
- **Claim:** To sort by more than one column, select any cell in the data range, then on the Data tab, in the Sort & Filter group, select Sort.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F203 · Add Level
- **Claim:** To add another column to sort by, select Add Level in the Sort box.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F204 · Higher levels sort first
- **Claim:** Entries higher in the list in the Sort box are sorted before entries lower in the list.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F205 · Sort range needs headings
- **Claim:** For best results, the range of cells you sort should have column headings.
- **Source:** Microsoft Support, "Sort data in a range or table in Excel": https://support.microsoft.com/en-us/excel/sort-data-in-a-range-or-table-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F206 · Filtering hides, removing deletes
- **Claim:** Filtering for unique values temporarily hides duplicate values, but removing duplicate values permanently deletes them.
- **Source:** Microsoft Support, "Filter for or remove duplicate values": https://support.microsoft.com/office/filter-for-or-remove-duplicate-values-662c153f-cf21-4d7b-a5af-a9390648eb37
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F207 · What a duplicate is
- **Claim:** A duplicate value is one where all the values in the row are an exact match of all the values in another row.
- **Source:** Microsoft Support, "Filter for or remove duplicate values": https://support.microsoft.com/office/filter-for-or-remove-duplicate-values-662c153f-cf21-4d7b-a5af-a9390648eb37
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F208 · Duplicates go by the displayed value
- **Claim:** Duplicate values are decided by the value displayed in the cell, not necessarily the value stored in it.
- **Source:** Microsoft Support, "Filter for or remove duplicate values": https://support.microsoft.com/office/filter-for-or-remove-duplicate-values-662c153f-cf21-4d7b-a5af-a9390648eb37
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F209 · Copy the data first
- **Claim:** Because removing duplicates permanently deletes data, it is a good idea to copy the original range or table to another sheet or workbook first.
- **Source:** Microsoft Support, "Filter for or remove duplicate values": https://support.microsoft.com/office/filter-for-or-remove-duplicate-values-662c153f-cf21-4d7b-a5af-a9390648eb37
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F210 · Remove Duplicates steps
- **Claim:** To remove duplicates, select the range or a cell in a table, click Remove Duplicates in the Data Tools group on the Data tab, tick the boxes for the columns to check, and click Remove Duplicates.
- **Source:** Microsoft Support, "Filter for or remove duplicate values": https://support.microsoft.com/office/filter-for-or-remove-duplicate-values-662c153f-cf21-4d7b-a5af-a9390648eb37
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F211 · One repeated Sales row
- **Claim:** The Sales sheet has 240 rows, and one of them repeats another row exactly in every column, so 239 rows are different.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F212 · North rows
- **Claim:** On the Sales sheet, 107 of the 240 rows have North in the Region column.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F213 · Largest Amount appears three times
- **Claim:** On the Sales sheet, the largest Amount is 90, and three rows have it.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F214 · Column chart categories and values
- **Claim:** A column chart typically shows categories along the horizontal axis and values along the vertical axis.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F215 · Line charts suit trends over time
- **Claim:** Line charts can show continuous data over time on an evenly scaled axis, so they are ideal for showing trends at equal intervals, like months, quarters or fiscal years.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F216 · Pie charts show parts of a total
- **Claim:** Pie charts show the size of the items in one data series, in proportion to the sum of the items.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F217 · Recommended Charts suggests charts
- **Claim:** The Recommended Charts command on the Insert tab analyses your data and makes suggestions.
- **Source:** Microsoft Support, "Create a chart with recommended charts": https://support.microsoft.com/en-us/excel/create-a-chart-with-recommended-charts
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F218 · Titles make a chart easier to understand
- **Claim:** Chart titles and axis titles make a chart easier to understand.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F219 · Type into the Chart Title box
- **Claim:** To add a chart title, select the Chart Title box in the chart and type in a title.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F220 · Plus sign opens chart elements
- **Claim:** The + sign at the top right of the chart opens the list of chart elements, including the arrow next to Chart Title.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F221 · Remove a chart title
- **Claim:** To remove a chart title, click the chart, select the + sign at its top right, and untick Chart Title.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F222 · Axis titles from Add Chart Element
- **Claim:** To add an axis title, click the chart, click the Chart Design tab, then Add Chart Element, then Axis Titles, and type the text in the Axis Title box.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F223 · No axis titles on pie charts
- **Claim:** Chart types that do not have axes, such as pie and doughnut charts, cannot display axis titles.
- **Source:** Microsoft Support, "Add or remove titles in a chart": https://support.microsoft.com/en-us/office/excelexp/add-or-remove-titles-in-a-chart
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F224 · Line chart axes
- **Claim:** In a line chart, category data is spread evenly along the horizontal axis, and all value data is spread evenly along the vertical axis.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F225 · Line charts work best with several series
- **Claim:** Line charts work best with more than one data series. With only one series, a scatter chart is worth considering instead.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F226 · Pie chart data layout
- **Claim:** Data arranged in one column or row on a worksheet can be plotted in a pie chart.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F227 · Pie slices are percentages
- **Claim:** The data points in a pie chart are shown as a percentage of the whole pie.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F228 · When to use a pie chart
- **Claim:** Consider a pie chart when there is only one data series, no negative values, almost no zero values, and no more than seven categories that are all parts of the whole pie.
- **Source:** Microsoft Support, "Available chart types in Office": https://support.microsoft.com/en-us/excel/available-chart-types-in-office
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F229 · Data labels identify the data
- **Claim:** You can add data labels to the data points of a chart to quickly identify a data series.
- **Source:** Microsoft Support, "Add or remove data labels in a chart": https://support.microsoft.com/office/add-or-remove-data-labels-in-a-chart-884bf2f1-2e29-454e-8b42-f467c9f4eb2d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F230 · Data labels update by themselves
- **Claim:** By default, data labels are linked to values on the worksheet, and they update automatically when those values change.
- **Source:** Microsoft Support, "Add or remove data labels in a chart": https://support.microsoft.com/office/add-or-remove-data-labels-in-a-chart-884bf2f1-2e29-454e-8b42-f467c9f4eb2d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F231 · Add Data Labels
- **Claim:** To add data labels, select the chart or series, then at the top right of the chart select Add Chart Element and choose Data Labels.
- **Source:** Microsoft Support, "Add or remove data labels in a chart": https://support.microsoft.com/office/add-or-remove-data-labels-in-a-chart-884bf2f1-2e29-454e-8b42-f467c9f4eb2d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F232 · Remove data labels
- **Claim:** To remove data labels, select them and press Delete.
- **Source:** Microsoft Support, "Add or remove data labels in a chart": https://support.microsoft.com/office/add-or-remove-data-labels-in-a-chart-884bf2f1-2e29-454e-8b42-f467c9f4eb2d
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F233 · Targets sheet
- **Claim:** On the Targets sheet, A1 to B5 hold the headings Region and Target, and four regional targets: North 1500, South 1400, East 1300 and West 1200.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F234 · All Charts shows every chart type
- **Claim:** In Recommended Charts, if you do not see a chart you like, click All Charts to see all the available chart types.
- **Source:** Microsoft Support, "Create a chart with recommended charts": https://support.microsoft.com/en-us/excel/create-a-chart-with-recommended-charts
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F235 · Values default to SUM
- **Claim:** By default, PivotTable fields placed in the Values area are displayed as a SUM.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F236 · Text in Values is counted
- **Claim:** If Excel interprets your data as text, the data is displayed as a COUNT.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F237 · Open Value Field Settings by right-click
- **Claim:** To change the summary function, right-click a value in the PivotTable and choose Summarize Values By or Value Field Settings.
- **Source:** Microsoft Support, "Change the summary function or custom calculation for a field in a PivotTable": https://support.microsoft.com/en-us/excel/change-the-summary-function-or-custom-calculation-for-a-field-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F238 · Average summary function
- **Claim:** The Average summary function gives the average of the values.
- **Source:** Microsoft Support, "Change the summary function or custom calculation for a field in a PivotTable": https://support.microsoft.com/en-us/excel/change-the-summary-function-or-custom-calculation-for-a-field-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F239 · Count summary function
- **Claim:** The Count summary function gives the number of values.
- **Source:** Microsoft Support, "Change the summary function or custom calculation for a field in a PivotTable": https://support.microsoft.com/en-us/excel/change-the-summary-function-or-custom-calculation-for-a-field-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F240 · Count is the default for non-numbers
- **Claim:** Count is the default function for values other than numbers.
- **Source:** Microsoft Support, "Change the summary function or custom calculation for a field in a PivotTable": https://support.microsoft.com/en-us/excel/change-the-summary-function-or-custom-calculation-for-a-field-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F241 · Regional totals, counts and averages
- **Claim:** On the Sales sheet the Amount column totals East 839, North 2756, South 1256 and West 1474 (6325 in all). The number of rows is East 36, North 107, South 43 and West 54. The average Amount is East 23.31, North 25.76, South 29.21 and West 27.30.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F242 · The Areas section arranges fields
- **Claim:** The Field List has an Areas section, at the bottom, in which you arrange the chosen fields the way you want.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/Excel/get-started/use-the-field-list-to-arrange-fields-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F243 · Columns area labels
- **Claim:** Fields in the Columns area are shown as Column Labels at the top of the PivotTable.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/Excel/get-started/use-the-field-list-to-arrange-fields-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F244 · Rows area labels
- **Claim:** Fields in the Rows area are shown as Row Labels on the left side of the PivotTable.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/Excel/get-started/use-the-field-list-to-arrange-fields-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F245 · Values area numbers
- **Claim:** Fields in the Values area are shown as summarized numeric values in the PivotTable.
- **Source:** Microsoft Support, "Use the Field List to arrange fields in a PivotTable": https://support.microsoft.com/en-us/Excel/get-started/use-the-field-list-to-arrange-fields-in-a-pivottable
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F246 · Drag a field between areas
- **Claim:** To move a field from one area to another, drag the field to the target area.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F247 · Product by region totals
- **Claim:** On the Sales sheet, the Amount column totals by product across the regions East, North, South and West are Bag 180, 936, 384 and 624; Mug 304, 576, 176 and 232; Notebook 45, 252, 138 and 99; Pen 40, 152, 48 and 54; Plant 270, 840, 510 and 465.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F248 · Right-click Refresh
- **Claim:** To refresh just one PivotTable, right-click anywhere in the PivotTable range, and then select Refresh.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F249 · Refresh at any time
- **Claim:** At any time, you can select Refresh to update the data for the PivotTables in your workbook.
- **Source:** Microsoft Support, "Refresh PivotTable data": https://support.microsoft.com/excel/refresh-pivottable-data
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F250 · New Worksheet placement
- **Claim:** In the Create PivotTable dialog box, select New Worksheet to place the PivotTable in a new worksheet.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F251 · Tick fields in the pane
- **Claim:** In the PivotTable Fields pane, select the check box for any field you want to add to your PivotTable.
- **Source:** Microsoft Support, "Create a PivotTable to analyze worksheet data": https://support.microsoft.com/en-us/office/create-a-pivottable-to-analyze-worksheet-data-a9a84538-bfe9-40a9-a8e9-f99134456576
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F252 · Insert PivotChart
- **Claim:** To create a PivotChart, select a cell in your table, select Insert and choose PivotChart, then select where you want the PivotChart to appear and select OK.
- **Source:** Microsoft Support, "Create a PivotChart": https://support.microsoft.com/en-us/topic/c1b1e057-6990-4c38-b52b-8255538e7b1c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F253 · File then Print shows the preview
- **Claim:** Click File, and then click Print to display the Preview window and printing options.
- **Source:** Microsoft Support, "Preview worksheet pages before you print": https://support.microsoft.com/en-US/Excel/preview-worksheet-pages-before-you-print
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F254 · Ctrl+P opens Print
- **Claim:** The keyboard shortcut for the Print screen is Ctrl+P.
- **Source:** Microsoft Support, "Quick start: Print a worksheet": https://support.microsoft.com/en-us/excel/quick-start-print-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F255 · Next Page and Previous Page
- **Claim:** In the preview, use the Next Page and Previous Page arrows at the bottom, or type the page number, to move between pages.
- **Source:** Microsoft Support, "Preview worksheet pages before you print": https://support.microsoft.com/en-US/Excel/preview-worksheet-pages-before-you-print
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F256 · Show Margins button
- **Claim:** To view page margins, click the Show Margins button in the lower right corner of the Print Preview window.
- **Source:** Microsoft Support, "Preview worksheet pages before you print": https://support.microsoft.com/en-US/Excel/preview-worksheet-pages-before-you-print
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F257 · Preview is black and white
- **Claim:** Unless you are using a colour printer, the preview appears in black and white, even if there is colour in your sheets.
- **Source:** Microsoft Support, "Preview worksheet pages before you print": https://support.microsoft.com/en-US/Excel/preview-worksheet-pages-before-you-print
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F258 · Choose the printer
- **Claim:** To change the printer, select the drop-down box under Printer, and select the printer that you want.
- **Source:** Microsoft Support, "Quick start: Print a worksheet": https://support.microsoft.com/en-us/excel/quick-start-print-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F259 · Print what: sheets, workbook or selection
- **Claim:** Under Settings you can choose Print Active Sheets, Print Entire Workbook or Print Selection.
- **Source:** Microsoft Support, "Quick start: Print a worksheet": https://support.microsoft.com/en-us/excel/quick-start-print-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F260 · Select Print to print
- **Claim:** After checking the preview and settings, select Print.
- **Source:** Microsoft Support, "Quick start: Print a worksheet": https://support.microsoft.com/en-us/excel/quick-start-print-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F261 · Landscape for wide sheets
- **Claim:** If your worksheet has many columns, you might need to switch the page orientation from portrait to landscape.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/Excel/scale-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F262 · Orientation steps
- **Claim:** To switch to landscape, go to Page Layout, then Page Setup, then Orientation, and select Landscape.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/Excel/scale-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F263 · Width 1 page, height Automatic
- **Claim:** In the Scale to Fit group on the Page Layout tab, set the Width list to 1 page and the Height list to Automatic.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/Excel/scale-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F264 · Everything on a single page
- **Claim:** To print your worksheet on a single page, select 1 page in the Height box.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/Excel/scale-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F265 · Shrinking can hurt readability
- **Claim:** The printout may be difficult to read because Excel shrinks the data to fit.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/Excel/scale-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F266 · Scale box shows the shrinking
- **Claim:** To see how much scaling is used, look at the number in the Scale box.
- **Source:** Microsoft Support, "Scale a worksheet": https://support.microsoft.com/en-us/Excel/scale-a-worksheet
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F267 · Sales sheet size
- **Claim:** On the Sales sheet, row 1 holds the headings Date, Region, Salesperson, Product, Quantity, Unit price and Amount in columns A to G, and the 240 rows of sales run from row 2 to row 241.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F268 · What print titles do
- **Claim:** Print titles are row and column headings or labels that print on every page of a worksheet that spans more than one page.
- **Source:** Microsoft Support, "Print rows with column headers on top of every page": https://support.microsoft.com/en-us/office/print-rows-with-column-headers-on-top-of-every-page-d3550133-f6a1-4c72-ad70-5309a2e8fe8c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F269 · Print Titles on the Page Layout tab
- **Claim:** On the Page Layout tab, in the Page Setup group, select Print Titles.
- **Source:** Microsoft Support, "Print rows with column headers on top of every page": https://support.microsoft.com/en-us/office/print-rows-with-column-headers-on-top-of-every-page-d3550133-f6a1-4c72-ad70-5309a2e8fe8c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F270 · Rows to repeat at top box
- **Claim:** In the Rows to repeat at top box, type the reference of the rows that contain the column labels.
- **Source:** Microsoft Support, "Print rows with column headers on top of every page": https://support.microsoft.com/en-us/office/print-rows-with-column-headers-on-top-of-every-page-d3550133-f6a1-4c72-ad70-5309a2e8fe8c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F271 · Dollar one colon dollar one example
- **Claim:** To print column labels at the top of every printed page, type $1:$1 in the Rows to repeat at top box.
- **Source:** Microsoft Support, "Print rows with column headers on top of every page": https://support.microsoft.com/en-us/office/print-rows-with-column-headers-on-top-of-every-page-d3550133-f6a1-4c72-ad70-5309a2e8fe8c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F272 · Collapse Dialog to pick rows
- **Claim:** You can choose Collapse Dialog at the right end of the Rows to repeat at top box, then select the title rows in the worksheet.
- **Source:** Microsoft Support, "Print rows with column headers on top of every page": https://support.microsoft.com/en-us/office/print-rows-with-column-headers-on-top-of-every-page-d3550133-f6a1-4c72-ad70-5309a2e8fe8c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F273 · Why use PDF
- **Claim:** Use the PDF format for files that you want to look the same on most computers.
- **Source:** Microsoft Support, "Save or convert to PDF": https://support.microsoft.com/en-us/office/save-or-convert-to-pdf-9df63379-2b35-4d96-bebd-cd58baf2008c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F274 · Save a Copy
- **Claim:** To save as a PDF, select File, then Save a Copy.
- **Source:** Microsoft Support, "Save or convert to PDF": https://support.microsoft.com/en-us/office/save-or-convert-to-pdf-9df63379-2b35-4d96-bebd-cd58baf2008c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F275 · Save as type PDF
- **Claim:** In the Save as type list, select PDF.
- **Source:** Microsoft Support, "Save or convert to PDF": https://support.microsoft.com/en-us/office/save-or-convert-to-pdf-9df63379-2b35-4d96-bebd-cd58baf2008c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F276 · Open file after publishing
- **Claim:** To open the file in the new format after saving, select the Open file after publishing check box in More options.
- **Source:** Microsoft Support, "Save or convert to PDF": https://support.microsoft.com/en-us/office/save-or-convert-to-pdf-9df63379-2b35-4d96-bebd-cd58baf2008c
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F277 · Corner triangle marks an error
- **Claim:** Any error that is found is marked with a triangle in the top-left corner of the cell.
- **Source:** Microsoft Support, "Detect formula errors in Excel": https://support.microsoft.com/en-us/Excel/detect-formula-errors-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F278 · List of error values
- **Claim:** Error values include #DIV/0!, #N/A, #NAME?, #NULL!, #NUM!, #REF! and #VALUE!.
- **Source:** Microsoft Support, "Detect formula errors in Excel": https://support.microsoft.com/en-us/Excel/detect-formula-errors-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F279 · Error rules are not a guarantee
- **Claim:** The error checking rules do not guarantee that your worksheet is error free.
- **Source:** Microsoft Support, "Detect formula errors in Excel": https://support.microsoft.com/en-us/Excel/detect-formula-errors-in-excel
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F280 · DIV/0 when dividing by zero
- **Claim:** Excel shows the #DIV/0! error when a number is divided by zero (0).
- **Source:** Microsoft Support, "How to correct a #DIV/0! error": https://support.microsoft.com/en-us/excel/how-to-correct-a-div-0-error
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F281 · DIV/0 with a blank cell
- **Claim:** The #DIV/0! error also shows when a formula refers to a cell that has 0 or is blank.
- **Source:** Microsoft Support, "How to correct a #DIV/0! error": https://support.microsoft.com/en-us/excel/how-to-correct-a-div-0-error
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F282 · NAME typo
- **Claim:** The top reason the #NAME? error appears is a typo in the formula name.
- **Source:** Microsoft Support, "How to correct a #NAME? error": https://support.microsoft.com/en-us/excel/how-to-correct-a-name-error
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F283 · NAME undefined name
- **Claim:** When your formula refers to a name that is not defined in Excel, you see the #NAME? error.
- **Source:** Microsoft Support, "How to correct a #NAME? error": https://support.microsoft.com/en-us/excel/how-to-correct-a-name-error
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F284 · REF invalid cell
- **Claim:** The #REF! error shows when a formula refers to a cell that is not valid.
- **Source:** Microsoft Support, "How to correct a #REF! error": https://support.microsoft.com/en-us/excel/how-to-correct-a-ref-error
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F285 · REF after deleting or pasting over
- **Claim:** The #REF! error happens most often when cells that were referenced by formulas get deleted, or pasted over.
- **Source:** Microsoft Support, "How to correct a #REF! error": https://support.microsoft.com/en-us/excel/how-to-correct-a-ref-error
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F286 · Undo restores deleted cells
- **Claim:** Right after deleting or pasting over cells, you can select the Undo button on the Quick Access Toolbar, or press Ctrl+Z, to restore them.
- **Source:** Microsoft Support, "How to correct a #REF! error": https://support.microsoft.com/en-us/excel/how-to-correct-a-ref-error
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F287 · VALUE means a typing or cell problem
- **Claim:** The #VALUE! error means there is something wrong with the way your formula is typed, or with the cells you are referencing.
- **Source:** Microsoft Support, "How to correct a #VALUE! error": https://support.microsoft.com/en-us/excel/how-to-correct-a-value-error
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F288 · Ctrl+backtick shows formulas
- **Claim:** Press Ctrl and the grave accent key (`) to switch between displaying formulas and their results from the keyboard.
- **Source:** Microsoft Support, "Display or hide formulas": https://support.microsoft.com/en-US/Excel/display-or-hide-formulas
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F289 · Show Formulas on the Formulas tab
- **Claim:** Select Formulas and then select Show Formulas to switch between displaying formulas and results.
- **Source:** Microsoft Support, "Display or hide formulas": https://support.microsoft.com/en-US/Excel/display-or-hide-formulas
- **Kind:** reference
- **Checked:** 2026-10-09

---

## F290 · Sales sheet Amount total
- **Claim:** On the Sales sheet, the Amount column is column G, and =SUM(G2:G241) gives 6325.
- **Source:** My own work: datasets/excel-beginner/Corner Shop sales.xlsx, opened with openpyxl on 2026-10-09.
- **Kind:** measurement
- **Checked:** 2026-10-09

---

## F291 · A1 notation, narrowed
- **Claim:** In A1 notation, A1:B5 means the cells from A1 through B5.
- **Source:** Microsoft Learn, "Refer to Cells and Ranges by Using A1 Notation": https://learn.microsoft.com/office/vba/excel/concepts/cells-and-ranges/refer-to-cells-and-ranges-by-using-a1-notation
- **Kind:** reference
- **Checked:** 2026-10-09

---
