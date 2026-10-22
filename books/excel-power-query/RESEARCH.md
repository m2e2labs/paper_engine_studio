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

## R1 · Refresh runs every step again
- **Claim:** When a query is refreshed, Power Query runs each of its recorded steps again by itself.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "When you refresh a query, each step runs automatically."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Cleaning the Same Data Every Week
- **Status:** accepted as F1, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R2 · Queries replace fixing data by hand
- **Claim:** Microsoft says queries replace the need to connect to and shape data by hand in Excel.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "Queries replace the need to manually connect and shape data in Excel."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Cleaning the Same Data Every Week
- **Status:** accepted as F2, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R3 · Refresh brings in additions, changes and deletes
- **Claim:** Once data is imported with Power Query, refreshing brings in rows that were added, changed or deleted at the source.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "you can refresh the data to bring in additions, changes, and deletes from the external data source"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Cleaning the Same Data Every Week
- **Status:** accepted as F3, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R4 · Power Query is called Get & Transform in Excel
- **Claim:** Excel also calls Power Query Get & Transform; it lets you import or connect to data and then shape it, for example by removing a column or changing a kind of data.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "With Power Query (known as Get & Transform in Excel), you can import or connect to external data"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** What Power Query Does in Excel
- **Status:** accepted as F4, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R5 · Four phases: connect, transform, combine, load
- **Claim:** Microsoft describes four phases to using Power Query: Connect, Transform, Combine and Load.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "There are four phases to using Power Query."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** What Power Query Does in Excel
- **Status:** accepted as F5, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R6 · Transform leaves the original unchanged
- **Claim:** In the Transform phase you shape the data while the original source stays as it was.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "Shape data to meet your needs, while the original source remains unchanged"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** What Power Query Does in Excel
- **Status:** accepted as F6, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R7 · Combine joins data from several sources
- **Claim:** In the Combine phase you bring together data from more than one source into one view.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "Integrate data from multiple sources to get a unique view into the data"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** What Power Query Does in Excel
- **Status:** accepted as F7, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R8 · Load to a worksheet or the Data Model
- **Claim:** In the Load phase the finished query goes into a worksheet or the Data Model, and it can be refreshed from time to time.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "load it into a worksheet or Data Model and periodically refresh it"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** What Power Query Does in Excel
- **Status:** accepted as F8, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R9 · Available on Windows, Mac and the web
- **Claim:** Power Query is available in Excel for Windows, Excel for Mac and Excel for the web.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "Power Query is available on three Excel applications, Excel for Windows, Excel for Mac and Excel for the Web."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** What Power Query Does in Excel
- **Status:** accepted as F9, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R10 · Get & Transform Data group on the Data tab
- **Claim:** In Microsoft 365, the Power Query import tools are in the Get & Transform Data group on the Data tab of the ribbon.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "from the Get & Transform Data group on the Data tab of the Excel ribbon"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding Get & Transform on the Ribbon
- **Status:** accepted as F10, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R11 · Excel 2016 and 2019 for Windows have it built in
- **Claim:** Excel 2016 and Excel 2019 for Windows have the same built-in Get & Transform Data experience as Microsoft 365.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "We added the same Get & Transform Data experience based on the Power Query technology as that of Microsoft 365."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding Get & Transform on the Ribbon
- **Status:** accepted as F11, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R12 · Excel 2010 and 2013 needed an add-in
- **Claim:** In Excel 2010 and 2013 for Windows, Power Query was a separate free add-in with its own Power Query tab on the ribbon.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "In Excel 2010 for Windows, we first introduced Power Query and it was available as a free add-in"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding Get & Transform on the Ribbon
- **Status:** accepted as F12, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R13 · No Power Query in Excel 2016 or 2019 for Mac
- **Claim:** Excel 2016 and Excel 2019 for Mac don't support Power Query.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "There is no support for Power Query on Excel 2016 and Excel 2019 for Mac."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding Get & Transform on the Ribbon
- **Status:** accepted as F13, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R14 · On a Mac: Data, Get Data (Power Query)
- **Claim:** In Excel for Microsoft 365 for Mac you start from Data, then Get Data (Power Query).
- **Source:** Microsoft Support, "Import and shape data in Excel for Mac (Power Query)": https://support.microsoft.com/en-us/excel/import-and-shape-data-in-excel-for-mac-power-query
- **Quote:** "To select the desired data source, select Get Data (Power Query)."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding Get & Transform on the Ribbon
- **Status:** accepted as F14, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R15 · Mac editor needs version 16.69 or later
- **Claim:** On a Mac, the Power Query Editor is available to Microsoft 365 subscribers running Excel for Mac version 16.69 (23010700) or later (as stated on the page on 2026-10-15).
- **Source:** Microsoft Support, "Import and shape data in Excel for Mac (Power Query)": https://support.microsoft.com/en-us/excel/import-and-shape-data-in-excel-for-mac-power-query
- **Quote:** "running Version 16.69 (23010700) or later of Excel for Mac"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding Get & Transform on the Ribbon
- **Status:** accepted as F15, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R16 · Modern Get Data dialog from version 2510
- **Claim:** Excel for Windows version 2510 introduced a modern Get Data dialog, opened from Get Data on the Data tab, so the reader's screen may look different from older guides.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "This feature is available in Excel (introduced in version 2510) for Windows"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding Get & Transform on the Ribbon
- **Status:** accepted as F16, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R17 · Create Table: Ctrl+T or Ctrl+L
- **Claim:** Pressing Ctrl+T (or Ctrl+L) opens the Create Table dialog box in Excel for Windows.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/office/keyboard-shortcuts-in-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f
- **Quote:** "Display the Create Table dialog box. Ctrl+L or Ctrl+T"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Turning a List Into an Excel Table
- **Status:** accepted as F17, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R18 · Tick My table has headers
- **Claim:** When you make a table, the Create Table dialog box asks you to confirm the range and to mark whether the table has headers.
- **Source:** Microsoft Support, "Create and format tables": https://support.microsoft.com/en-us/excel/get-started/create-and-format-tables
- **Quote:** "In the Create Table dialog box, set your cell range. Mark if your table has headers."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Turning a List Into an Excel Table
- **Status:** accepted as F18, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R19 · A table grows when you type below it
- **Claim:** Typing in the cell just below a table's last row makes the table grow to include the new row.
- **Source:** Microsoft Support, "Resize a table by adding or removing rows and columns": https://support.microsoft.com/en-us/office/resize-a-table-by-adding-or-removing-rows-and-columns-e65ae4bb-e44b-43f4-ad8b-7d68784f1165
- **Quote:** "start typing in a cell below the last table row. The table expands to include the new row."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Turning a List Into an Excel Table
- **Status:** accepted as F19, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R20 · Tables get default names Table1, Table2
- **Claim:** Excel gives each new table a default name, Table1, Table2, Table3 and so on, and you can give it a name of your own.
- **Source:** Microsoft Support, "Rename an Excel table": https://support.microsoft.com/en-us/excel/rename-an-excel-table
- **Quote:** "Excel assigns a default name to the table according to this naming convention: Table1, Table2, Table3"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Turning a List Into an Excel Table
- **Status:** accepted as F20, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R21 · Renaming a table in Table Name
- **Claim:** To rename a table, click in it, find the Table Name box (under Properties on the table's Design tab, or the Table tab on a Mac), and type a new name over the old one.
- **Source:** Microsoft Support, "Rename an Excel table": https://support.microsoft.com/en-us/excel/rename-an-excel-table
- **Quote:** "Highlight the table name and enter a new name."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Turning a List Into an Excel Table
- **Status:** accepted as F21, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R22 · No spaces in a table name
- **Claim:** A table name can't contain spaces; Microsoft suggests joining the words, or using an underscore or a full stop between them, as in DeptSales or Sales_Tax.
- **Source:** Microsoft Support, "Rename an Excel table": https://support.microsoft.com/en-us/excel/rename-an-excel-table
- **Quote:** "Spaces cannot be used in the name."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Turning a List Into an Excel Table
- **Status:** accepted as F22, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R23 · Data, From Table/Range
- **Claim:** To start a query from data on a sheet, select any cell in the data and choose Data, From Table/Range.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Quote:** "Select any cell within your data range. Select Data From Table/Range ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Your First Query From a Table
- **Status:** accepted as F23, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R24 · A plain range is turned into a table
- **Claim:** From Table/Range works on an Excel table, a named range or a dynamic array in the same workbook, and a plain range is turned into a table first.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Quote:** "If the selected data is a simple range, it's converted to a table."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Your First Query From a Table; Turning a List Into an Excel Table
- **Status:** accepted as F24, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R25 · Header cells become the column names
- **Claim:** If the data has headings and you tick My table has headers, the heading cells become the column names in the query.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Quote:** "The header cells are used to define the column names for the query."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Your First Query From a Table
- **Status:** accepted as F25, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R26 · The editor opens when you connect or create a query
- **Claim:** The Power Query Editor is its own window, and it opens when you connect to data, create a new query or load a query.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "it also opens when you connect to a data source, create a new query, or load a query"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Your First Query From a Table
- **Status:** accepted as F26, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R27 · Know whether you're in Excel or Power Query
- **Claim:** Microsoft advises knowing at every moment whether you're working in Excel or in the Power Query Editor, because working on the sheet is different from working in Power Query.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Quote:** "it's important to know which environment you are currently in, Excel or Power Query"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding Your Way Around the Editor
- **Status:** accepted as F27, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R28 · Five parts of the editor window
- **Claim:** Microsoft Learn names five parts of the Power Query editor: the ribbon, the Queries pane, the current view, the Query settings pane and the status bar. (This page covers Power Query in general, not Excel only.)
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Quote:** "Your main working view, which by default shows a preview of the data for your query."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding Your Way Around the Editor
- **Status:** accepted as F28, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R29 · Query settings shows the name and steps
- **Claim:** The Query settings pane shows the selected query's name and its steps.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Quote:** "A view of the currently selected query with relevant information, such as query name, query steps"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding Your Way Around the Editor
- **Status:** accepted as F29, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R30 · Ribbon tabs depend on the product
- **Claim:** The editor's ribbon holds most of the changes you can make, and which tabs it shows depends on the product Power Query is running in.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Quote:** "It has multiple tabs, whose values depend on the product integration."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding Your Way Around the Editor
- **Status:** accepted as F30, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R31 · Status bar shows rows and columns
- **Claim:** The status bar at the bottom of the editor shows information about the query, including the total number of columns and rows.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Quote:** "such as execution time, total columns and rows, and processing status"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding Your Way Around the Editor; Practice: Your First Query
- **Status:** accepted as F31, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R32 · Every change is recorded as a named step
- **Claim:** The Power Query Editor records and names every change you make as a step, and you can see and change each one in Applied Steps in the Query Settings pane.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "keeps track of everything you do with the data by recording and labelling each transformation, or step"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** How Excel Records Your Steps
- **Status:** accepted as F32, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R33 · A query is a new view of unchanged data
- **Claim:** All the steps together make up the query, which is a new version of the data while the original source stays unchanged.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "which is a new representation of the original (and unchanged) data source"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** How Excel Records Your Steps
- **Status:** accepted as F33, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R34 · Clicking a step shows the data at that point
- **Claim:** Selecting a step in Applied Steps shows the data as it was after that step, so you can see how each step changed it.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Quote:** "Selecting any step displays the results of that particular step"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** How Excel Records Your Steps
- **Status:** accepted as F34, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R35 · Steps get names like Renamed columns
- **Claim:** Each step gets a name automatically; renaming a column, for example, adds a step called Renamed columns.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Quote:** "the new column name is displayed in the Applied steps list as Renamed columns"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** How Excel Records Your Steps
- **Status:** accepted as F35, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R36 · Deleting a step
- **Claim:** To remove a step, right-click it and choose Delete, or select the X beside it.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Quote:** "To delete a step, right-click the step and select Delete ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** How Excel Records Your Steps
- **Status:** accepted as F36, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R37 · Close & Load puts the result on a sheet
- **Claim:** In the Power Query Editor, Home, then Close & Load, loads the query's result to a worksheet.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Quote:** "To load to a worksheet, select Home Close & Load Close & Load ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Loading the Result to a Sheet
- **Status:** accepted as F37, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R38 · One query loads to a new worksheet by default
- **Claim:** By default, a single query loads to a new worksheet, while several queries loaded at the same time go to the Data Model.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Quote:** "By default, Power Query loads queries to a new worksheet when loading a single query"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Loading the Result to a Sheet
- **Status:** accepted as F38, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R39 · The Query tab shows data came from Power Query
- **Claim:** If you click a cell of data and a Query tab appears on the ribbon, that data was loaded by Power Query.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Quote:** "if the Query context ribbon tab appears, then the data was loaded from Power Query"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Loading the Result to a Sheet
- **Status:** accepted as F39, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R40 · Query, Edit reopens the editor
- **Claim:** To change a query that's already on a sheet, select a cell in its data and choose Query, Edit.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Quote:** "select a cell in the data, and then select Query Edit"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Loading the Result to a Sheet
- **Status:** accepted as F40, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R41 · Rename sheet tabs so data and query are clear
- **Claim:** Microsoft suggests renaming sheet tabs so it's clear which sheet holds the original data and which holds the loaded query, for example DataTable and QueryTable.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Quote:** "rename Sheet1 to DataTable and Table1 to QueryTable"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Loading the Result to a Sheet
- **Status:** accepted as F41, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R42 · Data, Get Data, From File, From Excel Workbook
- **Claim:** To read data from another workbook, choose Data, Get Data, From File, From Excel Workbook, then find the file and select Open.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Quote:** "Select Data Get Data From File From Excel Workbook ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing From Another Workbook
- **Status:** accepted as F42, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R43 · Named ranges show up as data sets
- **Claim:** If the other workbook has named ranges, each one is offered by its name as something you can import.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Quote:** "If your source workbook has named ranges, the name of the range will be available as a data set."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing From Another Workbook
- **Status:** accepted as F43, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R44 · Data, Get Data, From File, From Text/CSV
- **Claim:** To read a CSV or text file, choose Data, Get Data, From File, From Text/CSV, then find the file and select Open.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Quote:** "Select Data Get Data From File From Text/CSV ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing a CSV or Text File
- **Status:** accepted as F44, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R45 · In a CSV, commas separate the values
- **Claim:** In a CSV file, a comma usually separates each value; in a tab-delimited text file, a tab does.
- **Source:** Microsoft Support, "Import or export text (.txt or .csv) files": https://support.microsoft.com/en-us/excel/get-started/import-or-export-text-txt-or-csv-files
- **Quote:** "Comma separated values text files (.csv), in which the comma character (,) typically separates each field of text."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing a CSV or Text File
- **Status:** accepted as F45, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R46 · CSV: separators, names and kinds are detected
- **Claim:** When you import a CSV file, Power Query works out the separator, uses the first row as column names and sets the kind of data for each column by itself.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Quote:** "Power Query will automatically detect column delimiters including column names and types."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing a CSV or Text File
- **Status:** accepted as F46, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R47 · Change the delimiter and see it in the preview
- **Claim:** With From Text/CSV you can pick a different separator from the Delimiter list, and the preview shows the effect straight away, before you load anything.
- **Source:** Microsoft Support, "Import or export text (.txt or .csv) files": https://support.microsoft.com/en-us/excel/get-started/import-or-export-text-txt-or-csv-files
- **Quote:** "You can see the effect of your new choice immediately in the data preview"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing a CSV or Text File
- **Status:** accepted as F47, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R48 · Load, Load to, or Transform Data
- **Claim:** In the preview window, Load puts the data on a new worksheet, Load to lets you choose where it goes (including only a connection), and Transform Data opens it in Power Query to edit first.
- **Source:** Microsoft Support, "Import or export text (.txt or .csv) files": https://support.microsoft.com/en-us/excel/get-started/import-or-export-text-txt-or-csv-files
- **Quote:** "Select Transform Data if you want to load the data to Power Query, and edit it before bringing it to Excel."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing a CSV or Text File; Load to a Sheet, or Only Connect
- **Status:** accepted as F48, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R49 · Kind detection: first 200 rows, whole file, or off
- **Claim:** For a CSV, you can base the detection of each column's kind of data on the first 200 rows or on the whole file, or turn detection off so every column stays as text.
- **Source:** Microsoft Learn, "Power Query Text/CSV connector": https://learn.microsoft.com/en-us/power-query/connectors/text-csv
- **Quote:** "You can base it on the first 200 rows or on the entire data set."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing a CSV or Text File; Setting the Kind of Data Early
- **Status:** accepted as F49, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R50 · Navigator: list on the left, preview on the right
- **Claim:** The Navigator window lists the items you can import on the left and shows a preview of the selected item on the right.
- **Source:** Microsoft Learn, "Getting data overview": https://learn.microsoft.com/en-us/power-query/get-data-experience
- **Quote:** "The data preview pane on the right side of the window shows a preview of the data from the object you selected."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Choosing What to Load in the Navigator
- **Status:** accepted as F50, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R51 · Select multiple items in Excel's Navigator
- **Claim:** In Excel, tick Select multiple items at the top left of the Navigator to choose more than one item at a time.
- **Source:** Microsoft Learn, "Getting data overview": https://learn.microsoft.com/en-us/power-query/get-data-experience
- **Quote:** "For Power Query in Excel, select the Select multiple items option from the upper-left corner of the Navigator window"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Choosing What to Load in the Navigator
- **Status:** accepted as F51, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R52 · Navigator: Load or Transform Data
- **Claim:** After choosing items in the Navigator, Load loads them straight away and Transform Data opens them in the Power Query Editor first.
- **Source:** Microsoft Learn, "Power Query Excel connector": https://learn.microsoft.com/en-us/power-query/connectors/excel
- **Quote:** "either select Load to load the data or Transform Data to continue transforming the data in Power Query Editor"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Choosing What to Load in the Navigator
- **Status:** accepted as F52, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R53 · Whole sheet or suggested tables
- **Claim:** For a sheet without a single table, the Navigator offers the whole sheet and also suggested tables it spotted in the layout; choosing the whole sheet shows every blank cell as null.
- **Source:** Microsoft Learn, "Power Query Excel connector": https://learn.microsoft.com/en-us/power-query/connectors/excel
- **Quote:** "with all of the blank cells filled with null"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Choosing What to Load in the Navigator
- **Status:** accepted as F53, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R54 · A changed sheet may stop refreshing properly
- **Claim:** If a source sheet's layout changes enough, a suggested table might not refresh properly, and importing again with a new suggested table may fix it.
- **Source:** Microsoft Learn, "Power Query Excel connector": https://learn.microsoft.com/en-us/power-query/connectors/excel
- **Quote:** "If the sheet changes enough, the table might not refresh properly."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Choosing What to Load in the Navigator
- **Status:** accepted as F54, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R55 · Combine a folder of files into one table
- **Claim:** Power Query can combine many files with the same layout, kept in one folder, into a single table; Microsoft's example is combining each month's workbooks that share the same columns.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Quote:** "Use Power Query to combine multiple files with the same schema stored in a single folder into one table."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Many Files in One Folder, One Table
- **Status:** accepted as F55, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R56 · Data, Get Data, From File, From Folder
- **Claim:** To start, choose Data, Get Data, From File, From Folder, find the folder, and check the list of files that appears.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Quote:** "Select Data Get Data From File From Folder . The Browse dialog box appears."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Many Files in One Folder, One Table
- **Status:** accepted as F56, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R57 · Keep only those files in the folder
- **Claim:** Keep the files to combine in a folder of their own, because every file in the folder (and in any subfolders you select) is included.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Quote:** "Ensure that all the files you want to combine are contained in a dedicated folder without extraneous files."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Many Files in One Folder, One Table
- **Status:** accepted as F57, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R58 · Columns are matched by name, not order
- **Claim:** Each file should have the same column headings, kinds of data and number of columns, but the columns don't have to be in the same order, because they're matched by name.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Quote:** "The columns do not have to be in the same order as the matching is done by column names."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Many Files in One Folder, One Table
- **Status:** accepted as F58, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R59 · Combine & Load or Combine & Transform Data
- **Claim:** The buttons at the bottom of the folder window include Combine & Load, which loads the combined table to a worksheet, and Combine & Transform Data, which opens it in the editor.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Quote:** "To combine all the files with a query, and then launch the Power Query Editor, select Combine Combine and Transform Data ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Many Files in One Folder, One Table
- **Status:** accepted as F59, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R60 · The first file is the sample by default
- **Claim:** Power Query uses one file as the example for the layout, the first file in the list unless you pick another, and you can tick Skip files with errors.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Quote:** "Power Query analyzes an example file, by default the first file in the list"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Many Files in One Folder, One Table
- **Status:** accepted as F60, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R61 · Helper queries appear
- **Claim:** Combining files creates extra supporting queries in a Helper Queries group, and the final query is named after the folder by default.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Quote:** "By default, it is named after the folder you imported the files from."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Many Files in One Folder, One Table
- **Status:** accepted as F61, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R62 · Refresh to pick up each new month
- **Claim:** Once a folder query is set up, refreshing it brings in the results for each new month.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Quote:** "refresh the data to see results for each month"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Many Files in One Folder, One Table
- **Status:** accepted as F62, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R63 · Data, Get Data, From Other Sources, From Web
- **Claim:** To read a table from a web page, choose Data, Get Data, From Other Sources, From Web, and type the page's address.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Quote:** "In the From Web dialog box, enter a web page URL , then click OK ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing a Table From a Web Page
- **Status:** accepted as F63, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R64 · Web View shows the whole page
- **Claim:** The Navigator lists the tables found on the page; if you're not sure which one you want, the Web View tab shows the whole page.
- **Source:** Microsoft Learn, "Power Query Web connector": https://learn.microsoft.com/en-us/power-query/connectors/web/web
- **Quote:** "you can select the Web View tab"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing a Table From a Web Page
- **Status:** accepted as F64, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R65 · From Web needs WebView2
- **Claim:** In Excel for Windows, From Web needs the Microsoft Edge WebView2 component installed, and without it Excel shows a message about additional components.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Quote:** "The Web connector requires WebView 2 Framework to be installed on your computer."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing a Table From a Web Page
- **Status:** accepted as F65, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R66 · The icon on the heading shows the kind
- **Claim:** In the Power Query Editor, a small icon on the left of each column heading shows the column's kind of data.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Quote:** "The data type of a column is displayed on the left side of the column heading with an icon that symbolizes the data type."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Setting the Kind of Data Early
- **Status:** accepted as F66, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R67 · Kinds are guessed from the values
- **Claim:** For Excel, CSV and text files, Power Query guesses each column's kind of data by looking at the values in it.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Quote:** "Power Query automatically detects data types by inspecting the values in the table."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Setting the Kind of Data Early
- **Status:** accepted as F67, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R68 · Guess based on the first 200 rows, as two steps
- **Claim:** By default the guess is based on the first 200 rows, and Power Query adds it as two steps after Source: Promoted Headers and Changed Type.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Quote:** "based on the first 200 rows of your table"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Setting the Kind of Data Early
- **Status:** accepted as F68, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R69 · Set the kind from Home, Data Type
- **Claim:** To set a column's kind of data, select the column and choose Home, Data Type, or click the icon on its heading.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Quote:** "To define a data type, select Home Data Type , and then select a data type from the drop-down menu."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Setting the Kind of Data Early
- **Status:** accepted as F69, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R70 · Automatic guesses can cause refresh errors
- **Claim:** Microsoft notes you might not want the automatic kind-of-data steps, because they can cause errors when the data refreshes.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Quote:** "the action might cause refresh errors of your data source"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Setting the Kind of Data Early
- **Status:** accepted as F70, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R71 · Date and number options need the right kind
- **Claim:** Microsoft recommends setting the right kind of data on every column, because options such as the date commands and the date filters are greyed out until the column has one.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/en-us/power-query/best-practices
- **Quote:** "If the column doesn't have a data type set, these options are grayed out."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Setting the Kind of Data Early
- **Status:** accepted as F71, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R72 · Day and month order differ by region
- **Claim:** Different regions write dates differently, some as month/day/year and others as day/month/year, and Power Query reads dates using your computer's regional setting.
- **Source:** Microsoft Support, "Set a locale or region for data (Power Query)": https://support.microsoft.com/en-us/excel/set-a-locale-or-region-for-data-power-query
- **Quote:** "The Power Query locale is based on the regional setting of your operating system."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Dates That Arrive as Text
- **Status:** accepted as F72, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R73 · Wrong region gives errors, like month 22
- **Claim:** If dates written day/month/year are read with a month/day/year setting, changing the column to Date gives errors, because there's no month 22.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/en-us/power-query/data-types
- **Quote:** "Because there's no month 22 in the calendar, it causes an error."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Dates That Arrive as Text
- **Status:** accepted as F73, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R74 · Change Type, Using Locale
- **Claim:** To read one column with a different region's format, right-click its heading and choose Change Type, Using Locale, then pick the kind of data and the region.
- **Source:** Microsoft Support, "Set a locale or region for data (Power Query)": https://support.microsoft.com/en-us/excel/set-a-locale-or-region-for-data-power-query
- **Quote:** "Right-click a column header, and select Change Type Using Locale ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Dates That Arrive as Text
- **Status:** accepted as F74, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R75 · Set the workbook's region in Query Options
- **Claim:** To change the region for every query in the workbook, choose Data, Get Data, Query Options, then Regional Settings under Current Workbook.
- **Source:** Microsoft Support, "Set a locale or region for data (Power Query)": https://support.microsoft.com/en-us/excel/set-a-locale-or-region-for-data-power-query
- **Quote:** "under CURRENT WORKBOOK , select Regional Settings ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Dates That Arrive as Text
- **Status:** accepted as F75, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R76 · Text can hold numbers and dates
- **Claim:** Power Query's Text kind covers words, numbers and dates stored as text.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Quote:** "Strings, numbers, or dates represented in a text format."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Numbers That Arrive as Text
- **Status:** accepted as F76, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R77 · Values that can't convert become errors
- **Claim:** When you change a column's kind of data, any value that can't be converted, such as NA in a column of whole numbers, shows as an error.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Quote:** "Some values found in the column couldn't be converted to the desired data type."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Numbers That Arrive as Text
- **Status:** accepted as F77, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R78 · An Error cell doesn't stop the load
- **Claim:** An error in a single cell doesn't stop the query loading; the cell shows Error, and selecting the space in that cell shows the details under the preview.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Quote:** "A cell-level error doesn't prevent the query from loading, but displays error values as Error in the cell."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Numbers That Arrive as Text
- **Status:** accepted as F78, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R79 · Close & Load To opens the Import Data box
- **Claim:** Choosing Close & Load To, instead of Close & Load, opens the Import Data dialog box so you can choose where this query's result goes.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Quote:** "by using the Import dialog box which displays after you select Close & LoadTo"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Load to a Sheet, or Only Connect
- **Status:** accepted as F79, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R80 · Only Create Connection
- **Claim:** The Import Data dialog box has an Only Create Connection option, which keeps the query without putting its result on a sheet.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Quote:** "In the Import Data dialog box, select Only Create Connection , and then select OK ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Load to a Sheet, or Only Connect
- **Status:** accepted as F80, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R81 · Not every query is loaded to a sheet
- **Claim:** Not every query has to be loaded to a worksheet; it can go to the Data Model or be kept as a connection instead.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Quote:** "Not all queries may be loaded to a worksheet."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Load to a Sheet, or Only Connect
- **Status:** accepted as F81, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R82 · Load To can be dimmed the first time
- **Claim:** The first time you make a query in a workbook, Load To may be greyed out; Microsoft's fix is Close & Load, then right-click the query in Queries & Connections and choose Load To.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Quote:** "Sometimes the Load To command is dimmed or disabled. This can occur the first time you create a query in a workbook."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Load to a Sheet, or Only Connect
- **Status:** accepted as F82, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R83 · Change where a query loads later
- **Claim:** To change where an existing query loads, open Data, Queries & Connections, right-click the query and choose Load To.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Quote:** "right click the query, and then select Load To . The Import Data dialog box appears."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Load to a Sheet, or Only Connect
- **Status:** accepted as F83, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R84 · A query feeding another can skip loading
- **Claim:** In Microsoft's worked example, the queries that feed a combined query have their loading turned off, so only the combined result is loaded. (This page covers Power Query in general, not Excel only.)
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Quote:** "disable the load of the Customers table by clearing the Enable load option"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Load to a Sheet, or Only Connect
- **Status:** accepted as F84, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R85 · Home, Use First Row As Headers
- **Claim:** To turn the first row into column headings, choose Home, Use First Row As Headers (on the Transform tab in Excel for the web).
- **Source:** Microsoft Support, "Promote or demote rows and column headers (Power Query)": https://support.microsoft.com/en-us/excel/promote-or-demote-rows-and-column-headers-power-query
- **Quote:** "To promote the first row to column headers, select Home (or Transform in Excel for the Web) Use First Row As Headers ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Using the First Row as Headers
- **Status:** accepted as F85, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R86 · Use Headers as First Row undoes it
- **Claim:** The arrow next to Use First Row As Headers has Use Headers as First Row, which moves the headings back down into the data.
- **Source:** Microsoft Support, "Promote or demote rows and column headers (Power Query)": https://support.microsoft.com/en-us/excel/promote-or-demote-rows-and-column-headers-power-query
- **Quote:** "select the arrow next to Use First Row As Headers , and then select Use Headers as First Row"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Using the First Row as Headers
- **Status:** accepted as F86, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R87 · Headings are often promoted for you
- **Claim:** When a table is created, Power Query often spots the column headings and promotes them by itself.
- **Source:** Microsoft Support, "Promote or demote rows and column headers (Power Query)": https://support.microsoft.com/en-us/excel/promote-or-demote-rows-and-column-headers-power-query
- **Quote:** "When a table is created, Power Query often automatically detects column headers and promotes them if necessary."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Using the First Row as Headers
- **Status:** accepted as F87, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R88 · The automatic guess isn't always right
- **Claim:** Power Query doesn't always recognise the heading row correctly, which is why you may need to promote headings yourself.
- **Source:** Microsoft Learn, "Promote or demote column headers": https://learn.microsoft.com/en-us/power-query/table-promote-demote-headers
- **Quote:** "Power Query might not identify the pattern correctly 100 percent of the time"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Using the First Row as Headers
- **Status:** accepted as F88, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R89 · Promoted Headers is the same command
- **Claim:** The Promoted Headers step that Power Query adds by itself does the same as the Use First Row as Headers command.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Quote:** "This step is the equivalent of the Use First Row as Headers command in the Home tab."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Using the First Row as Headers
- **Status:** accepted as F89, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R90 · Home, Remove Rows, Remove Top Rows
- **Claim:** To delete rows at the top, choose Home, Remove Rows, Remove Top Rows, and type how many rows to remove.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "Select Home Remove Rows Remove Top Rows ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Removing Junk Rows at the Top
- **Status:** accepted as F90, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R91 · Remove the title rows, then promote
- **Claim:** In Microsoft's example the real headings sit in row 5 under some title rows, so you remove the first four rows and then promote the headings.
- **Source:** Microsoft Learn, "Promote or demote column headers": https://learn.microsoft.com/en-us/power-query/table-promote-demote-headers
- **Quote:** "Before you can promote the headers, you need to remove the first four rows of the table."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Removing Junk Rows at the Top; Using the First Row as Headers
- **Status:** accepted as F91, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R92 · Remove Bottom Rows for totals and notes
- **Claim:** Remove Rows also has Remove Bottom Rows, which deletes a set number of rows from the end.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "Select Home Remove Rows Remove Bottom Rows ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Removing Junk Rows at the Top
- **Status:** accepted as F92, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R93 · Reports with a fixed layout
- **Claim:** Microsoft's example of a report with a fixed layout has five rows of report header, then the data, then rows of comments, and Keep Range of Rows keeps only the data rows.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "Sometimes, a table of data is derived from a report with a fixed layout."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Removing Junk Rows at the Top
- **Status:** accepted as F93, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R94 · Home, Remove Rows, Remove Blank Rows
- **Claim:** To delete empty rows, choose Home, Remove Rows, Remove Blank Rows; it looks at the whole row, not one column.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "This method examines the entire row as a record"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Removing Blank Rows
- **Status:** accepted as F94, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R95 · Remove empty from a column's filter arrow
- **Claim:** You can also click a column's filter arrow and choose Remove empty, which removes rows where that column has nothing in it.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "Select Remove empty then select OK ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Removing Blank Rows
- **Status:** accepted as F95, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R96 · Null or blank means nothing in the cell
- **Claim:** In Power Query, a null or blank value is a cell with nothing in it.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "A null or blank value occurs when a cell has nothing in it."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Removing Blank Rows
- **Status:** accepted as F96, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R97 · Select several columns with Ctrl or Shift
- **Claim:** To remove several columns at once, select them with Ctrl+click or Shift+click and choose Home, Remove Columns; they don't have to sit next to each other.
- **Source:** Microsoft Support, "Remove columns (Power Query)": https://support.microsoft.com/en-us/excel/remove-columns-power-query
- **Quote:** "To remove several columns, select the columns by using Ctrl + Click or Shift + Click."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Choosing Which Columns to Keep
- **Status:** accepted as F97, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R98 · Remove Other Columns keeps the selected ones
- **Claim:** Remove Other Columns keeps the columns you selected and removes all the rest.
- **Source:** Microsoft Support, "Remove columns (Power Query)": https://support.microsoft.com/en-us/excel/remove-columns-power-query
- **Quote:** "To remove all columns except the selected column, select one or more columns, and then select Remove Other Columns ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Choosing Which Columns to Keep
- **Status:** accepted as F98, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R99 · Remove Other Columns drops new columns on refresh
- **Claim:** After Remove Other Columns, a column added to the source later won't come through on refresh, because it counts as one of the other columns; removing columns by name lets new ones through.
- **Source:** Microsoft Support, "Remove columns (Power Query)": https://support.microsoft.com/en-us/excel/remove-columns-power-query
- **Quote:** "the query might not detect new columns added to the data source since your last refresh operation"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Choosing Which Columns to Keep
- **Status:** accepted as F99, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R100 · Choose Columns: tick the ones to keep
- **Claim:** Home, Choose Columns opens a list of every column with a tick box, and you clear the ones you don't want.
- **Source:** Microsoft Learn, "Choose or remove columns": https://learn.microsoft.com/en-us/power-query/choose-remove-columns
- **Quote:** "On the Home tab, in the Manage columns group, select Choose columns ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Choosing Which Columns to Keep
- **Status:** accepted as F100, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R101 · Transform, Rename, or double-click
- **Claim:** To rename a column, select it and choose Transform, Rename, or double-click its heading, then type the new name.
- **Source:** Microsoft Support, "Rename a column (Power Query)": https://support.microsoft.com/en-us/excel/rename-a-column-power-query
- **Quote:** "Select a column, and then select Transform Rename . You can also double-click the column header."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Renaming Columns
- **Status:** accepted as F101, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R102 · One column at a time, names must be unique
- **Claim:** You rename one column at a time, and column names must be unique, so a name that's already used gives an error.
- **Source:** Microsoft Support, "Rename a column (Power Query)": https://support.microsoft.com/en-us/excel/rename-a-column-power-query
- **Quote:** "If you rename a column to a name that already exists, an error is returned."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Renaming Columns
- **Status:** accepted as F102, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R103 · Renaming doesn't touch the source
- **Claim:** Renaming a column in Power Query doesn't rename the heading in the original data.
- **Source:** Microsoft Support, "Rename a column (Power Query)": https://support.microsoft.com/en-us/excel/rename-a-column-power-query
- **Quote:** "Renaming a column header in Power Query doesn't rename the original data source column header."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Renaming Columns
- **Status:** accepted as F103, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R104 · A changed source heading breaks the query
- **Claim:** If someone changes a heading in the source after the query is made, Power Query may not find the column and shows an error saying the column wasn't found.
- **Source:** Microsoft Support, "Rename a column (Power Query)": https://support.microsoft.com/en-us/excel/rename-a-column-power-query
- **Quote:** "Power Query might no longer find the expected column name and could return an error"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Renaming Columns; When a Heading Was Renamed
- **Status:** accepted as F104, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R105 · The Format menu: Trim, Clean, case
- **Claim:** The Format menu offers lowercase, UPPERCASE, Capitalize Each Word, Trim, Clean, Add Prefix and Add Suffix; on the Add Column tab it adds a new column, and on the Transform tab it changes the column itself.
- **Source:** Microsoft Support, "Add a column based on a data type (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-based-on-a-data-type-power-query
- **Quote:** "Each of these commands is also available under the Transform tab, which changes the original column."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Trimming Stray Spaces; Fixing Capital Letters
- **Status:** accepted as F105, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R106 · Changing the original column: take care
- **Claim:** Microsoft warns that changing the original column, rather than adding a new one, can lead to refresh errors you didn't expect.
- **Source:** Microsoft Support, "Add a column based on a data type (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-based-on-a-data-type-power-query
- **Quote:** "Be cautious when changing the original column, as it might lead to inadvertent refresh errors."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Trimming Stray Spaces; Fixing Capital Letters
- **Status:** accepted as F106, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R107 · Trim removes spaces at the start and end
- **Claim:** Trim (the Text.Trim function underneath) removes spaces at the start and end of the text; Microsoft's example keeps the single spaces between the letters.
- **Source:** Microsoft Learn, "Text.Trim": https://learn.microsoft.com/en-us/powerquery-m/text-trim
- **Quote:** "By default, all the leading and trailing whitespace characters are removed."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Trimming Stray Spaces
- **Status:** accepted as F107, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R108 · Clean removes hidden control characters
- **Claim:** Clean (the Text.Clean function underneath) removes control characters, such as line feeds, from text.
- **Source:** Microsoft Learn, "Text.Clean": https://learn.microsoft.com/en-us/powerquery-m/text-clean
- **Quote:** "Returns a text value with all control characters of text removed."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Trimming Stray Spaces
- **Status:** accepted as F108, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R109 · Replace can find a non-breaking space
- **Claim:** Under Advanced options, Replace Values can insert special characters to find, including a tab, a line feed and a non-breaking space.
- **Source:** Microsoft Support, "Replace values (Power Query)": https://support.microsoft.com/en-us/excel/replace-values-power-query
- **Quote:** "Line Feed , Carriage Return and Line Feed , and Non-breaking Space"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Trimming Stray Spaces; Replacing Values
- **Status:** accepted as F109, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R110 · Power Query is case-sensitive
- **Claim:** The same word can arrive with different capitals, such as Redmond, redmond and REDMOND, and Power Query treats them as different because it's case-sensitive.
- **Source:** Microsoft Learn, "Capitalization in Power Query M": https://learn.microsoft.com/en-us/powerquery-m/m-working-with-case
- **Quote:** "the Power Query M formula language is case sensitive"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Fixing Capital Letters
- **Status:** accepted as F110, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R111 · Capitalize Each Word lowers the other letters
- **Claim:** Capitalize Each Word (the Text.Proper function underneath) makes the first letter of each word a capital and every other letter lower case.
- **Source:** Microsoft Learn, "Text.Proper": https://learn.microsoft.com/en-us/powerquery-m/text-proper
- **Quote:** "All other letters are returned in lowercase."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Fixing Capital Letters
- **Status:** accepted as F111, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R112 · Add Column, Format, Capitalize Each Word
- **Claim:** Choosing Add Column, Format, Capitalize Each Word adds a new column with the result and leaves the original as it was.
- **Source:** Microsoft Support, "Add a column based on a data type (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-based-on-a-data-type-power-query
- **Quote:** "Select Add Column Format Capitalize Each Word . A new column is added with the result."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Fixing Capital Letters
- **Status:** accepted as F112, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R113 · Home or Transform, Replace Values
- **Claim:** To swap one value for another in a column, choose Replace Values on the Home or Transform tab, then fill in Value To Find and Replace With.
- **Source:** Microsoft Support, "Replace values (Power Query)": https://support.microsoft.com/en-us/excel/replace-values-power-query
- **Quote:** "Select Home or Transform Replace Value . The Replace Values dialog box appears."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Replacing Values
- **Status:** accepted as F113, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R114 · Text: part of a cell unless Match entire cell
- **Claim:** In a text column, Replace Values changes the matching text inside each cell unless you tick Match entire cell contents under Advanced options.
- **Source:** Microsoft Support, "Replace values (Power Query)": https://support.microsoft.com/en-us/excel/replace-values-power-query
- **Quote:** "To replace the the whole cell value, select Match entire cell contents."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Replacing Values
- **Status:** accepted as F114, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R115 · Numbers and dates: whole cell only
- **Claim:** In a number, date or true/false column, Replace Values always replaces the whole contents of the cell, and that can't be changed.
- **Source:** Microsoft Support, "Replace values (Power Query)": https://support.microsoft.com/en-us/excel/replace-values-power-query
- **Quote:** "The default behavior for non-text columns is to search and replace the full contents of a cell."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Replacing Values
- **Status:** accepted as F115, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R116 · Replacing doesn't edit the source
- **Claim:** Replacing values in a query doesn't change the original data.
- **Source:** Microsoft Support, "Replace values (Power Query)": https://support.microsoft.com/en-us/excel/replace-values-power-query
- **Quote:** "Replacing values in a query does not edit the external data source in any way."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Replacing Values
- **Status:** accepted as F116, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R117 · Home, Remove Rows, Remove Duplicates
- **Claim:** To drop repeated rows, select the column or columns to compare and choose Home, Remove Rows, Remove Duplicates; the columns you select decide what counts as a repeat.
- **Source:** Microsoft Support, "Keep or remove duplicate rows (Power Query)": https://support.microsoft.com/en-us/excel/keep-or-remove-duplicate-rows-power-query
- **Quote:** "The results are based on which columns you select as the comparison"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Dropping Repeated Rows
- **Status:** accepted as F117, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R118 · Keep Duplicates shows the repeats
- **Claim:** Home, Keep Rows, Keep Duplicates does the opposite and shows only the repeated rows, so you can look at them first.
- **Source:** Microsoft Support, "Keep or remove duplicate rows (Power Query)": https://support.microsoft.com/en-us/excel/keep-or-remove-duplicate-rows-power-query
- **Quote:** "Select Home Keep Rows Keep Duplicates ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Dropping Repeated Rows
- **Status:** accepted as F118, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R119 · Duplicates are case-sensitive
- **Claim:** Power Query takes capitals into account when it looks for repeats, so Microsoft suggests making the text all upper or all lower case before removing duplicates.
- **Source:** Microsoft Learn, "Working with duplicate values": https://learn.microsoft.com/en-us/power-query/working-with-duplicates
- **Quote:** "As a workaround, you can apply an uppercase or lowercase transform before removing duplicates."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Dropping Repeated Rows; Fixing Capital Letters
- **Status:** accepted as F119, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R120 · Fill Down copies the value above into nulls
- **Claim:** Fill Down replaces each null in a column with the last value above it that isn't empty; Fill Up works from the bottom.
- **Source:** Microsoft Learn, "Fill values in a column": https://learn.microsoft.com/en-us/power-query/fill-values-column
- **Quote:** "You can use fill up and fill down to replace null values with the last nonempty value in a column."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Filling Down Empty Cells
- **Status:** accepted as F120, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R121 · Right-click, Fill Down
- **Claim:** To fill down, right-click the column's heading and choose Fill Down.
- **Source:** Microsoft Learn, "Fill values in a column": https://learn.microsoft.com/en-us/power-query/fill-values-column
- **Quote:** "you can right-click to select the Date column, and then select Fill Down ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Filling Down Empty Cells
- **Status:** accepted as F121, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R122 · Empty-looking cells must become null first
- **Claim:** Fill only fills null cells, so cells that only look empty must first be replaced with null using Replace Values, leaving Value to find blank and typing null in Replace with.
- **Source:** Microsoft Learn, "Fill values in a column": https://learn.microsoft.com/en-us/power-query/fill-values-column
- **Quote:** "Before you can do the fill up operation, you need to transform those empty cells into null values"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Filling Down Empty Cells; Replacing Values
- **Status:** accepted as F122, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R123 · Count Rows gives the real row count
- **Claim:** Transform, Count Rows returns the actual number of rows in the query, whatever the profiling setting.
- **Source:** Microsoft Support, "Profile data to view statistics (Power Query)": https://support.microsoft.com/en-us/excel/profile-data-to-view-statistics-power-query
- **Quote:** "The Count Rows command returns the actual row count of the data and is not affected by the Column Profile setting."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Practice: A Clean Sales List; Practice: Your First Query
- **Status:** accepted as F123, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R124 · Column quality: valid, error, empty
- **Claim:** Turning on Column Quality on the View tab shows, for each column, the share of values that are valid, errors or empty.
- **Source:** Microsoft Support, "Profile data to view statistics (Power Query)": https://support.microsoft.com/en-us/excel/profile-data-to-view-statistics-power-query
- **Quote:** "Valid (green), Error (red), Empty (dark grey) for each column"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Practice: A Clean Sales List; Removing Blank Rows
- **Status:** accepted as F124, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R125 · Profiles cover the first 1,000 rows
- **Claim:** The data profiles are based on the first 1,000 rows unless you switch them to the entire data set in the bottom-left corner of the editor.
- **Source:** Microsoft Support, "Profile data to view statistics (Power Query)": https://support.microsoft.com/en-us/excel/profile-data-to-view-statistics-power-query
- **Quote:** "By default, Power Query profiles data over the first 1,000 rows."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Practice: A Clean Sales List
- **Status:** accepted as F125, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R126 · Filter with the arrow on a heading
- **Claim:** To filter in the editor, click the arrow next to a column heading, clear (Select All), tick the values you want and select OK.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "Select the check box of the column values by which you want to filter, and then select OK ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Filtering Rows in the Editor
- **Status:** accepted as F126, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R127 · A filtered column shows a filter icon
- **Claim:** A filtered column shows a small filter icon in its heading, and Clear filter on the same arrow removes the filter.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "A filtered column contains a small filter icon"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Filtering Rows in the Editor
- **Status:** accepted as F127, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R128 · The filter list shows 1,000 values at first
- **Claim:** The filter list shows only the first 1,000 different values at first; if it says the list may be incomplete, select Load more.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "By default, you only see the first 1,000 distinct values."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Filtering Rows in the Editor
- **Status:** accepted as F128, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R129 · Filter several columns one after another
- **Claim:** To filter on more than one column, filter the first column and then repeat for each other column.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "To filter multiple columns, filter a first column, and then repeat a column filter for each additional column."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Filtering Rows in the Editor
- **Status:** accepted as F129, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R130 · Filter early
- **Claim:** Microsoft recommends filtering as early as you can in a query, so that later steps have fewer rows to work through.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/en-us/power-query/best-practices
- **Quote:** "Filter data as early as possible to reduce the number of rows that Power Query processes in later transformations."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Filtering Rows in the Editor
- **Status:** accepted as F130, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R131 · Text Filters menu
- **Claim:** A text column's arrow has Text Filters, with Equals, Does Not Equal, Begins With, Does Not Begin With, Ends With, Does Not End With, Contains and Does Not Contain.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "You can filter by a specific text value using the Text Filters submenu."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Filtering by Text, Number and Date
- **Status:** accepted as F131, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R132 · Number Filters menu
- **Claim:** A number column's arrow has Number Filters, with Equals, Does Not Equal, Greater Than, Greater Than or Equal To, Less Than, Less Than Or Equal To and Between.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "You can filter by a number value using the Number Filters submenu."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Filtering by Text, Number and Date
- **Status:** accepted as F132, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R133 · Date/Time Filters menu
- **Claim:** A date column's arrow has Date/Time Filters, with choices such as Before, After, Between, In the Next and In the Previous, plus ready-made Year, Quarter, Month, Week and Day filters.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "You can filter by date/time value using the Date/Time Filters submenu."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Filtering by Text, Number and Date
- **Status:** accepted as F133, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R134 · The menu depends on the kind of data
- **Claim:** Which filter menu you see depends on the column's kind of data.
- **Source:** Microsoft Learn, "Filter by values in a column": https://learn.microsoft.com/en-us/power-query/filter-values
- **Quote:** "Power Query displays a type-specific filter based on the data type of the column."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Filtering by Text, Number and Date
- **Status:** accepted as F134, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R135 · Filter Rows: Basic and Advanced
- **Claim:** The Filter Rows dialog box has a Basic mode for up to two rules and an Advanced mode for more.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "Use Basic mode to enter or update up two operators and values."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Filtering by Text, Number and Date
- **Status:** accepted as F135, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R136 · Keep Top Rows
- **Claim:** Home, Keep Rows, Keep Top Rows keeps the number of rows you type, counting from the top.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "Select Home Keep Rows Keep Top Rows ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Keeping the Top Rows
- **Status:** accepted as F136, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R137 · Keep Bottom Rows
- **Claim:** Home, Keep Rows, Keep Bottom Rows keeps the number of rows you type, counting from the bottom.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "Select Home Keep Rows Keep Bottom Rows ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Keeping the Top Rows
- **Status:** accepted as F137, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R138 · Keep Range of Rows
- **Claim:** Home, Keep Rows, Keep Range of Rows keeps a block of rows from a first row for a number of rows, which suits a report with a fixed layout.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "Select Home Keep Rows Keep Range of Rows ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Keeping the Top Rows
- **Status:** accepted as F138, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R139 · Keep top rows when the data is a fixed size
- **Claim:** Microsoft's example keeps the top seven rows of a report that always has seven rows of data followed by comments.
- **Source:** Microsoft Learn, "Filter a table by row position": https://learn.microsoft.com/en-us/power-query/filter-row-position
- **Quote:** "This report always contains seven rows of data"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Keeping the Top Rows
- **Status:** accepted as F139, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R140 · Sort from the heading arrow
- **Claim:** To sort, click the arrow next to a column heading and choose Sort Ascending or Sort Descending.
- **Source:** Microsoft Support, "Sort data (Power Query)": https://support.microsoft.com/en-us/excel/sort-data-power-query
- **Quote:** "In the drop-down menu, select Sort Ascending or Sort Descending ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Sorting Inside a Query
- **Status:** accepted as F140, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R141 · What ascending and descending mean
- **Claim:** Ascending puts text A to Z, numbers smallest first and dates oldest first; descending does the opposite.
- **Source:** Microsoft Support, "Sort data (Power Query)": https://support.microsoft.com/en-us/excel/sort-data-power-query
- **Quote:** "Ascending order (text is A-Z, number is smallest to largest, and date is oldest to newest)."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Sorting Inside a Query
- **Status:** accepted as F141, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R142 · Sorting several columns follows the click order
- **Claim:** When you sort by several columns, the order you choose them in decides which sort comes first.
- **Source:** Microsoft Support, "Sort data (Power Query)": https://support.microsoft.com/en-us/excel/sort-data-power-query
- **Quote:** "the order or hierarchy of the sorting is based on the order that you select the columns"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Sorting Inside a Query
- **Status:** accepted as F142, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R143 · A sort is a Sorted rows step
- **Claim:** Sorting adds a step called Sorted rows to Applied Steps, and an arrow on the heading shows the column is sorted.
- **Source:** Microsoft Learn, "Sort columns": https://learn.microsoft.com/en-us/power-query/sort-columns
- **Quote:** "This action creates a new step in the Applied steps section named Sorted rows ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Sorting Inside a Query
- **Status:** accepted as F143, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R144 · Errors come from steps like changing the kind
- **Claim:** Errors in cells usually come from a step, such as changing a column to Number when some cells can't become numbers.
- **Source:** Microsoft Support, "Remove or keep rows with errors (Power Query)": https://support.microsoft.com/en-us/excel/remove-or-keep-rows-with-errors-power-query
- **Quote:** "such as changing the type of a column to Number that results in errors for some cells"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding and Removing Errors
- **Status:** accepted as F144, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R145 · Home, Remove Rows, Remove Errors
- **Claim:** Home, Remove Rows, Remove Errors removes rows with an error; it covers every column unless you select particular columns first.
- **Source:** Microsoft Support, "Remove or keep rows with errors (Power Query)": https://support.microsoft.com/en-us/excel/remove-or-keep-rows-with-errors-power-query
- **Quote:** "Select Home Remove Rows Remove Errors ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding and Removing Errors
- **Status:** accepted as F145, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R146 · Removing errors doesn't fix the source
- **Claim:** Removing errors in a query doesn't remove or fix them in the original data.
- **Source:** Microsoft Support, "Remove or keep rows with errors (Power Query)": https://support.microsoft.com/en-us/excel/remove-or-keep-rows-with-errors-power-query
- **Quote:** "Removing errors from a query doesn't remove or fix errors in the external data source."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding and Removing Errors
- **Status:** accepted as F146, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R147 · Keep a copy that keeps the errors
- **Claim:** Microsoft suggests copying the query and keeping the error rows in the copy, so you can see which rows had problems.
- **Source:** Microsoft Support, "Remove or keep rows with errors (Power Query)": https://support.microsoft.com/en-us/excel/remove-or-keep-rows-with-errors-power-query
- **Quote:** "it's a good idea to keep errors (by copying the query) as an auditing tool"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding and Removing Errors
- **Status:** accepted as F147, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R148 · Keep Rows, Keep Errors
- **Claim:** Home, Keep Rows, Keep Errors shows only the rows that have errors, which is useful for checking them even before you fix anything.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Quote:** "On the Home tab, in the Reduce rows group, select Keep rows . From the drop-down menu, select Keep errors ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding and Removing Errors
- **Status:** accepted as F148, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R149 · Replace Errors with a value
- **Claim:** Instead of removing them, Transform, Replace Values, Replace Errors puts a value of your choice in place of each error.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Quote:** "On the Transform tab, in the Any column group, select Replace values . From the drop-down menu, select Replace errors ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Finding and Removing Errors
- **Status:** accepted as F149, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R150 · Add Column, Index Column starts at 0
- **Claim:** Add Column, Index Column numbers the rows starting at 0 unless you choose From 1, or Custom for your own start and step.
- **Source:** Microsoft Support, "Add an index column (Power Query)": https://support.microsoft.com/en-us/excel/add-an-index-column-power-query
- **Quote:** "The default behavior is to start numbering the first row at 0."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding an Index Column
- **Status:** accepted as F150, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R151 · Uses of an index column
- **Claim:** Microsoft lists uses for an index column including keeping the original row order and checking the result after sorting or filtering.
- **Source:** Microsoft Support, "Add an index column (Power Query)": https://support.microsoft.com/en-us/excel/add-an-index-column-power-query
- **Quote:** "it can help you verify query results after sorting or filtering"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding an Index Column
- **Status:** accepted as F151, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R152 · The new column is called Index
- **Claim:** The new column is named Index and added at the end of the table, and you can rename or move it.
- **Source:** Microsoft Support, "Add an index column (Power Query)": https://support.microsoft.com/en-us/excel/add-an-index-column-power-query
- **Quote:** "A column named Index is added to the end of the query."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding an Index Column
- **Status:** accepted as F152, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R153 · Index from 1
- **Claim:** Selecting the arrow on Index Column and choosing From 1 starts the numbering at 1.
- **Source:** Microsoft Support, "Add an index column (Power Query)": https://support.microsoft.com/en-us/excel/add-an-index-column-power-query
- **Quote:** "If you select the arrow and select From 1 , you can start numbering the rows at 1."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding an Index Column
- **Status:** accepted as F153, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R154 · Home, Split Column, By Delimiter
- **Claim:** To split a text column at a character such as a comma or a dash, choose Home, Split Column, By Delimiter, and pick or type the delimiter.
- **Source:** Microsoft Support, "Split a column of text (Power Query)": https://support.microsoft.com/en-us/excel/split-a-column-of-text-power-query
- **Quote:** "Select Home Split Column By Delimiter . The Split a column by delimiter dialog box appears."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Splitting a Column at a Delimiter
- **Status:** accepted as F154, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R155 · Split at the left-most, right-most or each
- **Claim:** You choose whether to split at the left-most delimiter, the right-most one, or each occurrence; three delimiters split each time give four columns.
- **Source:** Microsoft Support, "Split a column of text (Power Query)": https://support.microsoft.com/en-us/excel/split-a-column-of-text-power-query
- **Quote:** "For example, if you have three delimiters, you end up with four columns."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Splitting a Column at a Delimiter
- **Status:** accepted as F155, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R156 · New columns are named with .1, .2
- **Claim:** The new columns take the original column's name with a full stop and a number, such as Name.1 and Name.2, and you can rename them.
- **Source:** Microsoft Support, "Split a column of text (Power Query)": https://support.microsoft.com/en-us/excel/split-a-column-of-text-power-query
- **Quote:** "the name of the new columns contains the same name as the original column with a suffix of a period (.) and a number"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Splitting a Column at a Delimiter; Splitting a Column by Length
- **Status:** accepted as F156, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R157 · Split copies, not the original
- **Claim:** To avoid refresh errors, Microsoft advises splitting or merging copies of the original columns rather than the originals.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Quote:** "Split copies of the original column, not the original column."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Splitting a Column at a Delimiter; Merging Columns Into One
- **Status:** accepted as F157, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R158 · Split by Number of Characters
- **Claim:** Home, Split Column, By Number of Characters splits text after a set number of characters, once from the left, once from the right, or repeatedly.
- **Source:** Microsoft Support, "Split a column of text (Power Query)": https://support.microsoft.com/en-us/excel/split-a-column-of-text-power-query
- **Quote:** "Select Home Split Column By Number of Characters ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Splitting a Column by Length
- **Status:** accepted as F158, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R159 · Repeatedly: 25 characters by 5 makes five columns
- **Claim:** With Repeatedly, a 25-character value split every 5 characters becomes five columns of 5 characters each.
- **Source:** Microsoft Support, "Split a column of text (Power Query)": https://support.microsoft.com/en-us/excel/split-a-column-of-text-power-query
- **Quote:** "you end up with five new columns, each with 5 characters"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Splitting a Column by Length
- **Status:** accepted as F159, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R160 · Split by Positions
- **Claim:** Split Column, By Positions splits at the character positions you list, for codes whose parts are different lengths.
- **Source:** Microsoft Support, "Split a column of text (Power Query)": https://support.microsoft.com/en-us/excel/split-a-column-of-text-power-query
- **Quote:** "You can split a column by specifying fixed numeric positions of characters."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Splitting a Column by Length
- **Status:** accepted as F160, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R161 · Extract: before, after or between a delimiter
- **Claim:** The Extract menu offers Length, First Characters, Last Characters, Range, Text before Delimiter, Text after Delimiter and Text between Delimiters; on the Transform tab it changes the column, on Add Column it adds a new one.
- **Source:** Microsoft Support, "Add a column based on a data type (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-based-on-a-data-type-power-query
- **Quote:** "Text before Delimiter Text after Delimiter Text between Delimiters"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Pulling Out Text Before or After
- **Status:** accepted as F161, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R162 · Transform, Merge Columns with a separator
- **Claim:** Select two or more columns and choose Transform, Merge Columns, then pick or type a separator to go between the values.
- **Source:** Microsoft Support, "Merge columns (Power Query)": https://support.microsoft.com/en-us/excel/merge-columns-power-query
- **Quote:** "specify a separator to insert between each merged column"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Merging Columns Into One
- **Status:** accepted as F162, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R163 · The click order sets the order
- **Claim:** The order you select the columns in is the order their values appear in the merged column.
- **Source:** Microsoft Support, "Merge columns (Power Query)": https://support.microsoft.com/en-us/excel/merge-columns-power-query
- **Quote:** "The order of selection sets the order of the merged values."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Merging Columns Into One
- **Status:** accepted as F163, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R164 · Merge Columns replaces the originals
- **Claim:** Merging on the Transform tab replaces the chosen columns with one column called Merged; Microsoft suggests keeping the originals and making a new column instead, to avoid refresh errors later.
- **Source:** Microsoft Support, "Merge columns (Power Query)": https://support.microsoft.com/en-us/excel/merge-columns-power-query
- **Quote:** "the selected columns are turned into one column called Merged"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Merging Columns Into One
- **Status:** accepted as F164, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R165 · Only text columns merge
- **Claim:** Only columns of the Text kind can be merged, so change other columns to Text first.
- **Source:** Microsoft Support, "Merge columns (Power Query)": https://support.microsoft.com/en-us/excel/merge-columns-power-query
- **Quote:** "You can only merge columns of a Text data type."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Merging Columns Into One
- **Status:** accepted as F165, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R166 · & joins values, as in Excel
- **Claim:** In a custom column formula, the & sign joins values together, the same way it does in Excel.
- **Source:** Microsoft Support, "Merge columns (Power Query)": https://support.microsoft.com/en-us/excel/merge-columns-power-query
- **Quote:** "The ampersand (&) operator is used to combine values in Power Query in the same way as in Excel."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Merging Columns Into One; Adding a Custom Column
- **Status:** accepted as F166, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R167 · Column From Examples
- **Claim:** Add Column, Column From Examples lets you type the result you want in a new column and Power Query works out the steps; it's for when you know the result but not the commands.
- **Source:** Microsoft Support, "Add a column from an example (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-from-an-example-power-query
- **Quote:** "This feature is useful when you know the result you want in your new column, but you're not sure which transformations to use."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Column From Examples
- **Status:** accepted as F167, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R168 · From All Columns or From Selection
- **Claim:** Column From Examples can work from all columns or only from the columns you've selected; type an example and press Ctrl+Enter to see it filled in.
- **Source:** Microsoft Support, "Add a column from an example (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-from-an-example-power-query
- **Quote:** "Enter a sample value for the new column data you want, and then press Ctrl + Enter."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Column From Examples
- **Status:** accepted as F168, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R169 · Examples are checked on the top 100 rows
- **Claim:** Column From Examples bases its guess on the top 100 rows of the preview, so check the result on the rest of the data.
- **Source:** Microsoft Support, "Add a column from an example (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-from-an-example-power-query
- **Quote:** "Adding a column from examples is based on the top 100 rows of Data Preview."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Column From Examples
- **Status:** accepted as F169, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R170 · You may need several tries
- **Claim:** Microsoft says you sometimes need to give several examples before you get the result you want.
- **Source:** Microsoft Support, "Add a column from an example (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-from-an-example-power-query
- **Quote:** "Sometimes, you need to iterate a few times to get the results you want."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Column From Examples
- **Status:** accepted as F170, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R171 · The formula shows above the preview
- **Claim:** When Power Query finds a rule that fits your examples, it fills the other rows and shows the formula above the preview, and selecting OK adds a step.
- **Source:** Microsoft Learn, "Add a column from examples": https://learn.microsoft.com/en-us/power-query/column-from-example
- **Quote:** "When Power Query finds a matching transformation, it fills the remaining rows with the transformation results."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Column From Examples
- **Status:** accepted as F171, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R172 · Add Column, Custom Column
- **Claim:** Add Column, Custom Column opens a box where you name the new column and write its formula, inserting columns from the Available Columns list.
- **Source:** Microsoft Support, "Add a custom column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-custom-column-power-query
- **Quote:** "Insert a column into the Custom Column Formula box by selecting a column from the Available Columns list, and then selecting Insert ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Custom Column
- **Status:** accepted as F172, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R173 · Column names go in square brackets
- **Claim:** In a custom column formula, column names go in square brackets, as in [UnitPrice] * [Quantity] to multiply two columns.
- **Source:** Microsoft Support, "Add a custom column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-custom-column-power-query
- **Quote:** "Creates a column with the result of multiplying two table columns."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Custom Column
- **Status:** accepted as F173, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R174 · The formula uses M, not sheet formulas
- **Claim:** A custom column's formula is written in the Power Query M formula language, not as an Excel worksheet formula.
- **Source:** Microsoft Learn, "Add a custom column": https://learn.microsoft.com/en-us/power-query/add-custom-column
- **Quote:** "you can create your own custom column using the Power Query M formula language"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Custom Column
- **Status:** accepted as F174, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R175 · M is case-sensitive
- **Claim:** The M language is case-sensitive, so capitals in names must match exactly.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/en-us/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Quote:** "M is a case-sensitive language."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Custom Column; Reading the Code Behind a Step
- **Status:** accepted as F175, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R176 · Set the kind of data after a custom column
- **Claim:** After adding a custom column, check its kind of data; if the heading shows the Any icon, set the kind you want.
- **Source:** Microsoft Support, "Add a custom column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-custom-column-power-query
- **Quote:** "Once you add a custom column, make sure it has an appropriate data type."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Custom Column
- **Status:** accepted as F176, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R177 · Add Column, Conditional Column
- **Claim:** Add Column, Conditional Column builds an if-then-else rule from boxes (column, operator, value, output), so you don't write the formula yourself.
- **Source:** Microsoft Support, "Add a conditional column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-conditional-column-power-query
- **Quote:** "if condition then expression else expression"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Conditional Column
- **Status:** accepted as F177, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R178 · Add Clause and a final Else
- **Claim:** Add Clause adds more rules, and you can give a final Else value for rows that match none of them.
- **Source:** Microsoft Support, "Add a conditional column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-conditional-column-power-query
- **Quote:** "Optionally, add a final else expression."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Conditional Column
- **Status:** accepted as F178, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R179 · Rules are tested top to bottom
- **Claim:** The rules in a conditional column are tested in order, from top to bottom.
- **Source:** Microsoft Learn, "Add a conditional column": https://learn.microsoft.com/en-us/power-query/add-conditional-column
- **Quote:** "Each conditional clause is tested on the order shown in the dialog box, from top to bottom."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Conditional Column
- **Status:** accepted as F179, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R180 · A conditional column has no kind of data yet
- **Claim:** A new conditional column doesn't have a kind of data set, so you set it yourself afterwards.
- **Source:** Microsoft Support, "Add a conditional column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-conditional-column-power-query
- **Quote:** "By default, a conditional column doesn’t have a data type automatically defined."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Adding a Conditional Column
- **Status:** accepted as F180, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R181 · Add Column, Date, Month, Name of Month
- **Claim:** Add Column, Date, Month, Name of Month adds a column with the month's name from a date column.
- **Source:** Microsoft Support, "Add a column based on a data type (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-based-on-a-data-type-power-query
- **Quote:** "Select Add Column Date Month Name of Month ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Pulling Year and Month From a Date
- **Status:** accepted as F181, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R182 · Year, Month, Quarter and more
- **Claim:** The Add Column, Date menu includes Year, Month, Name of Month, Quarter of Year and Week of Year, among others.
- **Source:** Microsoft Support, "Add a column based on a data type (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-based-on-a-data-type-power-query
- **Quote:** "Select Add Column Date Week Week of Year ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Pulling Year and Month From a Date
- **Status:** accepted as F182, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R183 · Month as a number from 1 to 12
- **Claim:** Date.Month gives the month as a number from 1 to 12, such as 4 for April, rather than its name.
- **Source:** Microsoft Support, "Add a custom column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-custom-column-power-query
- **Quote:** "displays the month as a number from 1 to 12, such as 4 for April"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Pulling Year and Month From a Date
- **Status:** accepted as F183, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R184 · Unpivot puts similar values in one column
- **Claim:** Unpivoting, sometimes called flattening, turns columns such as months into rows so that all the similar values sit in one column, the shape a chart or report needs.
- **Source:** Microsoft Support, "Unpivot columns (Power Query)": https://support.microsoft.com/en-us/excel/unpivot-columns-power-query
- **Quote:** "sometimes called flattening the data, to put it in a normalized or columnar format so that all similar values are in one column"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Unpivoting Columns Into Rows
- **Status:** accepted as F184, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R185 · Transform, Unpivot Columns
- **Claim:** Select the columns to turn into rows and choose Transform, Unpivot Columns.
- **Source:** Microsoft Support, "Unpivot columns (Power Query)": https://support.microsoft.com/en-us/excel/unpivot-columns-power-query
- **Quote:** "Select Transform Unpivot Columns ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Unpivoting Columns Into Rows
- **Status:** accepted as F185, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R186 · The result is Attribute and Value
- **Claim:** Unpivoting always makes two columns: Attribute, holding the old column headings, and Value, holding the numbers that were under them.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/en-us/power-query/unpivot-column
- **Quote:** "Power Query always creates the attribute-value pair by using two columns"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Unpivoting Columns Into Rows
- **Status:** accepted as F186, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R187 · Unpivot Other Columns picks up new months
- **Claim:** Unpivot Other Columns unpivots every column you didn't select, so columns added to the source later are unpivoted on refresh too.
- **Source:** Microsoft Support, "Unpivot columns (Power Query)": https://support.microsoft.com/en-us/excel/unpivot-columns-power-query
- **Quote:** "New columns added during a refresh operation are also unpivoted."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Unpivoting Columns Into Rows
- **Status:** accepted as F187, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R188 · Unpivot Only Selected Columns
- **Claim:** Unpivot Only Selected Columns keeps the unpivot to the columns you chose, even if the source gains columns later.
- **Source:** Microsoft Support, "Unpivot columns (Power Query)": https://support.microsoft.com/en-us/excel/unpivot-columns-power-query
- **Quote:** "Select Transform Unpivot Only Selected Columns ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Unpivoting Columns Into Rows
- **Status:** accepted as F188, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R189 · Transform, Pivot Column
- **Claim:** Select the column whose values should become headings, choose Transform, Pivot Column, and pick the Values Column that fills the grid.
- **Source:** Microsoft Support, "Pivot columns (Power Query)": https://support.microsoft.com/en-us/excel/pivot-columns-power-query
- **Quote:** "This column's unique values become the new columns and column headers."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Pivoting Rows Into Columns
- **Status:** accepted as F189, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R190 · Pivot sums or counts where several rows meet
- **Claim:** Under Advanced options you choose how values that meet in one cell are combined: Don't aggregate, Count (all), Count (not blank), Minimum, Maximum, Median, Sum or Average.
- **Source:** Microsoft Support, "Pivot columns (Power Query)": https://support.microsoft.com/en-us/excel/pivot-columns-power-query
- **Quote:** "The available options are: Don't aggregate , Count (all) , Count (not blank) , Minimum , Maximum , Median , Sum , and Average ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Pivoting Rows Into Columns
- **Status:** accepted as F190, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R191 · Don't aggregate fails with several values
- **Claim:** With Don't aggregate, Power Query shows an error when more than one value meets in a cell, and that can start happening only after a later refresh changes the data.
- **Source:** Microsoft Support, "Pivot columns (Power Query)": https://support.microsoft.com/en-us/excel/pivot-columns-power-query
- **Quote:** "There were too many elements in the enumeration to complete the operation."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Pivoting Rows Into Columns
- **Status:** accepted as F191, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R192 · Transpose turns the table 90 degrees
- **Claim:** Transform, Transpose turns rows into columns and columns into rows.
- **Source:** Microsoft Learn, "Transpose a table": https://learn.microsoft.com/en-us/power-query/transpose-table
- **Quote:** "rotates your table 90 degrees, turning your rows into columns and your columns into rows"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Transposing a Table
- **Status:** accepted as F192, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R193 · Transpose loses the headings
- **Claim:** Transposing keeps only the table's contents, so the old headings are lost and the new columns are called Column1, Column2 and so on; you then promote the first row to headings.
- **Source:** Microsoft Learn, "Transpose a table": https://learn.microsoft.com/en-us/power-query/transpose-table
- **Quote:** "Only the contents of the table are transposed during the transpose operation; the column headers of the initial table are lost."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Transposing a Table
- **Status:** accepted as F193, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R194 · Home, Group By
- **Claim:** Home, Group By collapses rows with the same value into one row; Advanced lets you group by more than one column.
- **Source:** Microsoft Support, "Group rows of data (Power Query)": https://support.microsoft.com/en-us/excel/group-rows-of-data-power-query
- **Quote:** "In the Group by dialog box, select Advanced to select more than one column to group by."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Grouping and Summarising Rows
- **Status:** accepted as F194, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R195 · Group By operations
- **Claim:** For each group you can work out Sum, Average, Median, Min, Max, Count Rows or Count Distinct Rows.
- **Source:** Microsoft Support, "Group rows of data (Power Query)": https://support.microsoft.com/en-us/excel/group-rows-of-data-power-query
- **Quote:** "The aggregations available are Sum , Average , Median , Min , Max , Count Rows , and Count Distinct Rows ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Grouping and Summarising Rows
- **Status:** accepted as F195, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R196 · Group By is on Home and Transform
- **Claim:** Group By is on the Home tab and also on the Transform tab.
- **Source:** Microsoft Learn, "Grouping or summarizing rows": https://learn.microsoft.com/en-us/power-query/group-by
- **Quote:** "On the Transform tab, in the Table group."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Grouping and Summarising Rows
- **Status:** accepted as F196, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R197 · Append adds rows; merge joins on a column
- **Claim:** Append adds the rows of one table under another; to bring tables together by matching values in a column, you use Merge instead.
- **Source:** Microsoft Support, "Append queries (Power Query)": https://support.microsoft.com/en-us/excel/append-queries-power-query
- **Quote:** "Append combines rows from multiple tables. To combine tables based on matching column values, use Merge."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Stacking or Joining: Which Do You Need
- **Status:** accepted as F197, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R198 · Two ways to combine queries
- **Claim:** Power Query combines queries in two ways: Merge, which joins two queries on a shared column, and Append, which puts all the rows of one query after the rows of another.
- **Source:** Microsoft Support, "Combine multiple queries (Power Query)": https://support.microsoft.com/en-us/excel/combine-multiple-queries-power-query
- **Quote:** "Creates a new query that contains all rows from a first query followed by all rows from a second query."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Stacking or Joining: Which Do You Need
- **Status:** accepted as F198, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R199 · Home, Append Queries
- **Claim:** Home, Append Queries adds another table's rows to the current query; Append Queries as New puts the result in a new query instead.
- **Source:** Microsoft Support, "Append queries (Power Query)": https://support.microsoft.com/en-us/excel/append-queries-power-query
- **Quote:** "To do an intermediate append, select the arrow next to the command, and then select Append Queries as New ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Appending Tables One Under Another
- **Status:** accepted as F199, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R200 · Append matches columns by name
- **Claim:** Append lines up columns by their headings, not their position, and a column missing from one table is filled with null for that table's rows.
- **Source:** Microsoft Support, "Append queries (Power Query)": https://support.microsoft.com/en-us/excel/append-queries-power-query
- **Quote:** "The append operation is based on the names of the column headers in both tables, and not their relative column position."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Appending Tables One Under Another
- **Status:** accepted as F200, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R201 · Two tables, or three or more
- **Claim:** The Append dialog box has Two tables, and Three or more tables for adding a longer list in the order you set.
- **Source:** Microsoft Support, "Append queries (Power Query)": https://support.microsoft.com/en-us/excel/append-queries-power-query
- **Quote:** "Select Three or more tables . From the Available tables box, add the tables you want to append to the Tables to append ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Appending Tables One Under Another
- **Status:** accepted as F201, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R202 · Home, Merge Queries
- **Claim:** Home, Merge Queries joins another table to the current query; Merge Queries as New puts the result in a new query.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Quote:** "To do an inline merge, select Home Merge Queries ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Merging Tables Side by Side
- **Status:** accepted as F202, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R203 · Pick the matching column in each table
- **Claim:** In the Merge dialog box you pick the first table and its matching column, then the second table and its matching column; the matching columns must be the same kind of data.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Quote:** "Matching columns must be the same data type, such as Text or Number ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Merging Tables Side by Side
- **Status:** accepted as F203, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R204 · The dialog shows how many rows match
- **Claim:** After you pick the columns, the Merge dialog box shows how many rows match, so you can check before selecting OK.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Quote:** "Power Query displays the number of matches from a top set of rows."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Merging Tables Side by Side; Checking a Combined Result
- **Status:** accepted as F204, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R205 · Expand the new column to bring in fields
- **Claim:** A merge adds one column holding the matching rows from the second table; the expand icon on its heading lets you choose which of its columns to bring in.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Quote:** "In the Expand drop-down box, select or clear the columns to display the results you want."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Merging Tables Side by Side
- **Status:** accepted as F205, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R206 · Untick the prefix option
- **Claim:** When expanding, Microsoft's example leaves Use original column name as prefix unticked, so the new column keeps its plain name.
- **Source:** Microsoft Learn, "Left outer join": https://learn.microsoft.com/en-us/power-query/merge-queries-left-outer
- **Quote:** "Don't select the Use original column name as prefix check box."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Merging Tables Side by Side; Looking Up a Value With a Merge
- **Status:** accepted as F206, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R207 · The join kinds
- **Claim:** The join kinds are: left outer (all rows of the first table, matches from the second), right outer, full outer (all rows of both), inner (only matching rows), left anti and right anti (only rows with no match).
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/en-us/power-query/merge-queries-overview
- **Quote:** "All rows from the left table, matching rows from the right table"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** The Join Kinds in Plain Words
- **Status:** accepted as F207, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R208 · Inner keeps only matches
- **Claim:** An inner join brings in only the rows that match in both tables.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Quote:** "Brings in only matching rows from both the primary and related tables."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** The Join Kinds in Plain Words
- **Status:** accepted as F208, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R209 · Left outer keeps every first-table row
- **Claim:** A left outer join keeps every row of the first table and brings in the matching rows from the second.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Quote:** "Keeps all the rows from the primary table and brings in any matching rows from the related table."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** The Join Kinds in Plain Words
- **Status:** accepted as F209, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R210 · Left anti shows rows with no match
- **Claim:** A left anti join brings in only the rows of the first table that have no match in the second, which is a way to find rows that didn't match.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Quote:** "Brings in only rows from the primary table that don't have any matching rows from the related table."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** The Join Kinds in Plain Words; Checking a Combined Result
- **Status:** accepted as F210, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R211 · Support says the default is inner
- **Claim:** Microsoft Support says the default join in Excel's Merge dialog box is an inner join. (Check this against the dialog box in current Excel before printing it.)
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Quote:** "The default join operation is an inner join"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** The Join Kinds in Plain Words
- **Status:** new
- **Verified:** 2026-10-15, quote found on the page

---

## R212 · No match gives null
- **Claim:** In a left outer join, a row of the first table with no match in the second gets null in the new column.
- **Source:** Microsoft Learn, "Left outer join": https://learn.microsoft.com/en-us/power-query/merge-queries-left-outer
- **Quote:** "If there are no matches between the left and right tables, a null value is the result of the merge for that row."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** The Join Kinds in Plain Words; Looking Up a Value With a Merge
- **Status:** accepted as F211, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R213 · Merge brings in a related table's columns
- **Claim:** Merging adds the rows of the related table that match each row, and expanding brings its columns, such as a category, into the main table.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Quote:** "An Expand operation adds columns from a related table into a primary table."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Looking Up a Value With a Merge
- **Status:** accepted as F212, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R214 · Learn's lookup example
- **Claim:** Microsoft's left outer join example adds each sale's country name from a Countries table by matching on the country's ID, which works like a lookup.
- **Source:** Microsoft Learn, "Left outer join": https://learn.microsoft.com/en-us/power-query/merge-queries-left-outer
- **Quote:** "where the name of the country appears as a new Country column in the Sales table"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Looking Up a Value With a Merge
- **Status:** accepted as F213, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R215 · Duplicate copies a query
- **Claim:** Duplicate makes a copy of a query with (2) added to its name, and later changes to the original don't affect the copy.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Quote:** "Subsequent changes to the original query won’t affect the new query."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Duplicating or Referencing a Query
- **Status:** accepted as F214, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R216 · Reference starts from another query's result
- **Claim:** Reference makes a new query that starts from another query's steps, so changes to the original's output do flow through to it.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Quote:** "Subsequent changes to the original query will affect the new query if the output is changed."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Duplicating or Referencing a Query
- **Status:** accepted as F215, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R217 · Right-click a query for Duplicate or Reference
- **Claim:** Duplicate and Reference are on the right-click menu of a query in Queries & Connections or in the editor's Queries pane.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Quote:** "Creates a new query that uses the steps of a previous query without having to duplicate the query."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Duplicating or Referencing a Query
- **Status:** accepted as F216, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R218 · Split a long query with references
- **Claim:** Microsoft suggests splitting a long query into smaller queries that reference each other, to make it easier to follow.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/en-us/power-query/best-practices
- **Quote:** "Split a large Power Query query into smaller referenced queries"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Duplicating or Referencing a Query
- **Status:** accepted as F217, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R219 · Status bar and Count Rows to check
- **Claim:** To check how many rows a combined query has, Transform, Count Rows gives the actual row count.
- **Source:** Microsoft Support, "Profile data to view statistics (Power Query)": https://support.microsoft.com/en-us/excel/profile-data-to-view-statistics-power-query
- **Quote:** "Often, you want to see the number of rows returned after you get data."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Checking a Combined Result
- **Status:** accepted as F218, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R220 · Inner join's match message
- **Claim:** Microsoft points to the message at the bottom of the Merge dialog box, which says how many rows match, as the key to understanding the result.
- **Source:** Microsoft Learn, "Inner join": https://learn.microsoft.com/en-us/power-query/merge-queries-inner
- **Quote:** "This message is crucial to understanding the result that you get from this operation."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Checking a Combined Result
- **Status:** accepted as F219, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R221 · Query, Refresh on the sheet
- **Claim:** To refresh one query's result, select a cell in it and choose Query, Refresh on the ribbon; the sheet and the query are both brought up to date from the source.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Quote:** "The worksheet and the query are refreshed from the external data source and the Power Query cache."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** accepted as F220, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R222 · Refresh All and its shortcuts
- **Claim:** Data, Refresh All (Ctrl+Alt+F5) refreshes everything in the workbook, and Esc stops a refresh. (For refreshing less than the whole workbook, the page gives Alt+F5 in its table and Ctrl+F5 in a note; check in Excel.)
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Quote:** "To stop a refresh, press Esc . To refresh a worksheet, press Ctrl + F5 . To refresh a workbook, press Ctrl + Alt + F5 ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** new
- **Verified:** 2026-10-15, quote found on the page

---

## R223 · Refreshing in the editor doesn't update the sheet
- **Claim:** Refresh Preview inside the Power Query Editor updates the preview but not the result on the worksheet.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Quote:** "But this refresh operation does not update the query in the worksheet or Data Model."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** accepted as F221, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R224 · An open source file isn't refreshed until saved
- **Claim:** If the source workbook, text or CSV file is open, changes in it aren't picked up by a refresh until the file has been saved, and an open file may be locked.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Quote:** "any changes to the file are not included in the refresh until the file has been saved"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** accepted as F222, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R225 · Edit the right sheet when refreshing a table
- **Claim:** When a query reads a table in the same workbook, make your changes on the sheet with the original table, not the sheet with the loaded result; Microsoft suggests naming the sheets so the two are easy to tell apart.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Quote:** "make sure you have selected the correct worksheet and not the worksheet that contains the loaded query"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** accepted as F223, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R226 · Refresh data when opening the file
- **Claim:** In Queries & Connections, right-click the query and choose Properties; on the Usage tab, under Refresh control, tick Refresh data when opening the file.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Quote:** "on the Usage tab, under Refresh control , select the Refresh data when opening the file check box"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing When the File Opens
- **Status:** accepted as F224, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R227 · Refresh every set number of minutes
- **Claim:** The same Usage tab has a Refresh every box for refreshing automatically every set number of minutes.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Quote:** "Select the Refresh every check box, and then enter the number of minutes between each refresh operation."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing When the File Opens
- **Status:** accepted as F225, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R228 · Big sources take longer to refresh
- **Claim:** Refreshing from a large data source can take longer than you expect, and Microsoft suggests a background refresh so you can keep working.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Quote:** "If your workbook is connected to a large data source, refreshing it might take a little longer than you expect."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing When the File Opens
- **Status:** accepted as F226, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R229 · No background refresh for the Data Model
- **Claim:** A query that loads to the Data Model can't be refreshed in the background.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Quote:** "you can't run a query for any connection type that retrieves data for the Data Model"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing When the File Opens
- **Status:** accepted as F227, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R230 · View, Query Dependencies
- **Claim:** In the Power Query Editor, View, Query Dependencies draws which queries feed which, and Layout at the bottom changes the diagram's direction.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Quote:** "To see a visual representation of the relationships in the Query Dependencies dialog box, select View Query Dependencies ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** How Queries Depend on Each Other
- **Status:** accepted as F228, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R231 · A referenced query follows its original
- **Claim:** Changes to a query flow down to any query that references it.
- **Source:** Microsoft Learn, "Using the Queries pane": https://learn.microsoft.com/en-us/power-query/queries-pane
- **Quote:** "any changes on the original query will transfer down to the referenced query"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** How Queries Depend on Each Other
- **Status:** accepted as F229, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R232 · Tell the owners of a source you rely on it
- **Claim:** If another team manages your data source, Microsoft advises making sure they know you depend on it, so they avoid changes that break your queries.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Quote:** "they need to be aware of your dependency on them"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** How Queries Depend on Each Other
- **Status:** accepted as F230, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R233 · Rename a step
- **Claim:** To rename a step, right-click it in Applied Steps and choose Rename, then type the new name.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Quote:** "To rename a step, right-click the step and select Rename ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Naming Steps and Queries Clearly
- **Status:** accepted as F231, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R234 · Step Properties: name and description
- **Claim:** Right-click a step and choose Properties to change its name and add a description; a step with a description shows a small icon you can hover over.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Quote:** "To edit the step, right-click the step and select Properties ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Naming Steps and Queries Clearly
- **Status:** accepted as F232, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R235 · Rename a query
- **Claim:** Rename on a query's right-click menu changes the query's name.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Quote:** "Rename Changes the query name."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Naming Steps and Queries Clearly
- **Status:** accepted as F233, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R236 · Group queries into folders
- **Claim:** Move To Group puts queries into named groups, such as Budget or Marketing, to keep many queries in order.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Quote:** "Use groups to organize many queries into categories."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Naming Steps and Queries Clearly
- **Status:** accepted as F234, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R237 · Edit Settings with the gear icon
- **Claim:** Edit Settings on a step's right-click menu, or the gear icon beside it, reopens that step's settings; it's greyed out for steps with no settings.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Quote:** "If no settings are available, this option is grayed out in the step menu."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Editing or Deleting an Earlier Step
- **Status:** accepted as F235, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R238 · Changing an earlier step can affect later ones
- **Claim:** Changing an earlier step in Applied Steps can affect the steps after it, so refresh the preview to check your fix.
- **Source:** Microsoft Support, "Rename a column (Power Query)": https://support.microsoft.com/en-us/excel/rename-a-column-power-query
- **Quote:** "Whenever you change a previous step under Applied Steps in the Query Settings pane, subsequent steps might also be affected."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Editing or Deleting an Earlier Step
- **Status:** accepted as F236, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R239 · Delete Until End
- **Claim:** Delete Until End on a step's right-click menu removes that step and every step after it.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Quote:** "This action deletes the selected step and all the subsequent steps."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Editing or Deleting an Earlier Step
- **Status:** accepted as F237, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R240 · Insert step after and move steps
- **Claim:** You can add a step in the middle with Insert step after, and move steps with Move before, Move after, or by dragging.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Quote:** "To insert a new intermediate step, right-click on a step and select Insert step after ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Editing or Deleting an Earlier Step
- **Status:** accepted as F238, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R241 · Experiment on a copy
- **Claim:** If you're not sure a change is safe, Microsoft suggests copying the query and trying it there, deleting the step if it doesn't work.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Quote:** "If the command doesn't work, just delete the step you created and try again."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Editing or Deleting an Earlier Step
- **Status:** accepted as F239, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R242 · Step errors stop the load
- **Claim:** An error in a step stops the query from loading and shows the error in a yellow bar.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Quote:** "A step-level error prevents the query from loading and displays the error components in a yellow pane."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** When a Step Shows an Error
- **Status:** accepted as F240, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R243 · Read the reason, message and detail
- **Claim:** Microsoft recommends reading the error's reason, message and detail to understand what went wrong.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Quote:** "we recommend that you take a close look at the error reason, error message, and error detail to understand what's causing the error"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** When a Step Shows an Error
- **Status:** accepted as F241, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R244 · Errors show on a yellow background
- **Claim:** To find the cause, open the query and look at each step's errors, which Power Query shows on a yellow background.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Quote:** "All errors are displayed with a yellow background for easy identification."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** When a Step Shows an Error
- **Status:** accepted as F242, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R245 · Go To Error
- **Claim:** The yellow message box has Go To Error, which takes you to the step that failed.
- **Source:** Microsoft Support, "Rename a column (Power Query)": https://support.microsoft.com/en-us/excel/rename-a-column-power-query
- **Quote:** "select Go To Error in the yellow message box"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** When a Step Shows an Error; When a Heading Was Renamed
- **Status:** accepted as F243, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R246 · The column of the table wasn't found
- **Claim:** The error saying a column of the table wasn't found usually means a step refers to a column name that's no longer there.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Quote:** "This error is commonly triggered when a step makes a direct reference to a column name that doesn't exist in the query."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** When a Heading Was Renamed
- **Status:** accepted as F244, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R247 · Remove the rename step if the source already fixed it
- **Claim:** In Microsoft's example the source file's heading was changed to the name the query used to give it, so deleting the rename step fixes the error.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Quote:** "you can just remove the step that renames the column"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** When a Heading Was Renamed
- **Status:** accepted as F245, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R248 · Renamed source headings cause refresh problems
- **Claim:** Changing table or column names in the source almost always causes problems on refresh, because queries rely on those names in nearly every step.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Quote:** "Queries rely on table and column names to shape data in almost every step."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** When a Heading Was Renamed
- **Status:** accepted as F246, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R249 · Can't find the source
- **Claim:** The DataSource.NotFound error usually means the source can't be reached, for example because it was moved somewhere else.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Quote:** "the source was moved to a different place"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** When the File Has Moved
- **Status:** accepted as F247, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R250 · Data Source Settings, Change Source
- **Claim:** Data, Get Data, Data Source Settings lists the workbook's data sources, with a Change Source button to point a query at the file's new location.
- **Source:** Microsoft Support, "Manage data source settings and permissions (Power Query)": https://support.microsoft.com/en-us/excel/manage-data-source-settings-and-permissions-power-query
- **Quote:** "This is the default option and it also displays the Change source button at the bottom."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** When the File Has Moved
- **Status:** accepted as F248, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R251 · Mac: Change File Path
- **Claim:** On a Mac, Data, the arrow next to Get Data, Data Source Settings, then Change File Path points the query at the new location.
- **Source:** Microsoft Support, "Import and shape data in Excel for Mac (Power Query)": https://support.microsoft.com/en-us/excel/import-and-shape-data-in-excel-for-mac-power-query
- **Quote:** "Select a connection, and then select Change File Path ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** When the File Has Moved
- **Status:** accepted as F249, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R252 · Moved files are a common refresh error
- **Claim:** A file that has been moved is one of the common causes of a refresh error, and a common message says the file couldn't be found.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Quote:** "The file you're trying to access could not be found."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** When the File Has Moved
- **Status:** accepted as F250, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R253 · Parameters can hold a file path
- **Claim:** A Power Query parameter can be used in any step, including to hold a file path or a server name.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Quote:** "parameters can be used to specify such things as a file path or a server name"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Using a Parameter for the File Path
- **Status:** accepted as F251, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R254 · Home, Manage Parameters, New Parameter
- **Claim:** To make a parameter, open the Power Query Editor and choose Home, Manage Parameters, New Parameter.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Quote:** "Select Home Manage Parameters New Parameter ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Using a Parameter for the File Path
- **Status:** accepted as F252, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R255 · A parameter is saved as its own query
- **Claim:** A parameter is saved in its own small query, separate from the queries that use it, and you change its value instead of editing each query.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Quote:** "Parameters are saved in a simple parameter query, but are separate from the data queries they are used in."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Using a Parameter for the File Path
- **Status:** accepted as F253, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R256 · A parameter for a folder that moves
- **Claim:** Microsoft's example uses a parameter for the folder a folder query reads, so it can be switched between two folders.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Quote:** "You can use a parameter in a query as a substitute value for the different folder."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Using a Parameter for the File Path
- **Status:** accepted as F254, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R257 · Parameters future-proof a location
- **Claim:** Microsoft suggests query parameters as a way to cope when a data location changes, such as a folder path, file name or web address.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Quote:** "Use query parameters to mitigate changes to, for example, a data location."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Using a Parameter for the File Path
- **Status:** accepted as F255, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R258 · Replace may stop working after refresh
- **Claim:** A Replace Values step may stop doing what you meant if the value it looks for changes or disappears in the source.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Quote:** "the Replace command may not work as originally intended"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Practice: Breaking and Fixing a Query
- **Status:** accepted as F256, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R259 · Load to a PivotTable from the load options
- **Claim:** Load to lets you send a query's result to a table, a PivotTable or PivotChart, a new or existing sheet, or only a connection, and you can also add it to the Data Model.
- **Source:** Microsoft Support, "Import or export text (.txt or .csv) files": https://support.microsoft.com/en-us/excel/get-started/import-or-export-text-txt-or-csv-files
- **Quote:** "Select Load to if you want to load the data to a table, PivotTable/PivotChart, an existing/new Excel worksheet, or simply create a connection."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Loading a Query Into a PivotTable
- **Status:** accepted as F257, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R260 · Power Query then PivotTables
- **Claim:** Microsoft describes Power Query as the recommended way to bring data in, so you can then explore it in PivotTables and PivotCharts.
- **Source:** Microsoft Support, "How Power Query and Power Pivot work together": https://support.microsoft.com/en-us/excel/how-power-query-and-power-pivot-work-together
- **Quote:** "Power Query is the recommended experience for importing data."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Loading a Query Into a PivotTable
- **Status:** accepted as F258, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R261 · Refreshing a PivotTable built on a query
- **Claim:** To refresh a PivotTable, select anywhere in it to show the PivotTable Analyze tab, then choose Refresh or Refresh All.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Quote:** "Select the anywhere in the PivotTable to show the PivotTable Analyze tab in the ribbon."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Loading a Query Into a PivotTable
- **Status:** accepted as F259, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R262 · The Data Model holds tables inside the workbook
- **Claim:** A Data Model brings several tables together inside an Excel workbook and supplies the data PivotTables and PivotCharts use.
- **Source:** Microsoft Support, "Create a Data Model in Excel": https://support.microsoft.com/en-us/excel/create-a-data-model-in-excel
- **Quote:** "A Data Model allows you to integrate data from multiple tables, effectively building a relational data source inside an Excel workbook."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Loading to the Data Model
- **Status:** accepted as F260, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R263 · Tick Add this data to the Data Model
- **Claim:** To load to the Data Model, choose Close & Load To and tick Add this data to the Data Model in the Import Data dialog box.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Quote:** "In the Import Data dialog box, select Add this data to the Data Model."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Loading to the Data Model
- **Status:** accepted as F261, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R264 · The Data Model is used through the Field List
- **Claim:** You usually work with the Data Model through the PivotTable Field List, where it shows up as a set of tables.
- **Source:** Microsoft Support, "Create a Data Model in Excel": https://support.microsoft.com/en-us/excel/create-a-data-model-in-excel
- **Quote:** "A Data Model is visualized as a collection of tables in a Field List"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Loading to the Data Model
- **Status:** accepted as F262, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R265 · Data Model: tables, not plain ranges
- **Claim:** Microsoft says your data should be in tables, not plain cell ranges, so it can be loaded into the Data Model and related correctly.
- **Source:** Microsoft Support, "Create a Data Model in Excel": https://support.microsoft.com/en-us/excel/create-a-data-model-in-excel
- **Quote:** "Your data should be in tables (not just cell ranges) so it can be loaded and related correctly."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Loading to the Data Model
- **Status:** accepted as F263, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R266 · Power Pivot works on the Data Model
- **Claim:** Power Query gets data into worksheets or the Data Model, and Power Pivot is where you build on the Data Model, for example with relationships between tables.
- **Source:** Microsoft Support, "How Power Query and Power Pivot work together": https://support.microsoft.com/en-us/excel/how-power-query-and-power-pivot-work-together
- **Quote:** "In short, with Power Query you get your data into Excel, either in worksheets or the Excel Data Model."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Loading to the Data Model
- **Status:** accepted as F264, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R267 · Everything in a query is written in M
- **Claim:** Power Query's language is called M, and everything a query does is written in M behind the scenes.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
- **Quote:** "Anything that happens in the query is ultimately written in M."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Reading the Code Behind a Step
- **Status:** accepted as F265, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R268 · Each step's formula is in the formula bar
- **Claim:** Each action in the Power Query Editor shows its formula in the formula bar, which you turn on with View, Formula Bar. (This page is about Power BI Desktop, which uses the same editor.)
- **Source:** Microsoft Learn, "Perform common query tasks in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-common-query-tasks
- **Quote:** "To view the formula bar, go to the View tab of the ribbon, and then select Formula Bar ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Reading the Code Behind a Step
- **Status:** accepted as F266, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R269 · See a whole long formula with the arrow
- **Claim:** The arrow at the right of the formula bar opens it out to show the whole formula.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Quote:** "Select the arrow on the right side of the formula bar to display the whole formula."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Reading the Code Behind a Step
- **Status:** accepted as F267, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R270 · Changed Type's formula
- **Claim:** The automatic Changed Type step shows a formula that lists each column with its kind of data, using Table.TransformColumnTypes.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Quote:** "Converts the values from the Any data type to a data type based on the inspection of the values from each column."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Reading the Code Behind a Step
- **Status:** accepted as F268, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R271 · View, Advanced Editor
- **Claim:** View, Advanced Editor opens a window with the whole query as code; Done or Cancel closes it.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Quote:** "To open the advanced editor, select the View tab on the ribbon, and then select Advanced Editor ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Opening the Advanced Editor
- **Status:** accepted as F269, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R272 · Close with Cancel to change nothing
- **Claim:** You can edit code in the Advanced Editor, and the window closes with the Done or Cancel button.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Quote:** "To close the window, select the Done or Cancel button."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Opening the Advanced Editor
- **Status:** accepted as F270, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R273 · Advanced Editor is also on Home
- **Claim:** In Excel's Power Query Editor, the Advanced Editor is also on the Home tab.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Quote:** "select Home Advanced Editor"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Opening the Advanced Editor
- **Status:** accepted as F271, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R274 · Steps can be changed in the Advanced Editor
- **Claim:** Each change you make is recorded as a step, and in the Advanced Editor you can change those steps or write your own in M.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Quote:** "You can even modify and write your own steps using the Power Query M Language in the Advanced Editor."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Opening the Advanced Editor
- **Status:** accepted as F272, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R275 · Step names appear in the code
- **Claim:** In the code, each step is named and builds on the step before it by referring to that name.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/en-us/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Quote:** "Each query formula step builds upon a previous step by referring to a step by its variable name."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Opening the Advanced Editor; Reading the Code Behind a Step
- **Status:** accepted as F273, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R276 · Avoid big changes to original columns
- **Claim:** Microsoft's rule of thumb against refresh errors is to avoid big changes to the original columns and to work on a copy of a column instead.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Quote:** "Avoid making significant changes to the original columns."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Mistakes Almost Everyone Makes
- **Status:** accepted as F274, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R277 · The automatic kind-of-data steps
- **Claim:** Microsoft notes that the two steps Power Query adds by itself, Promoted Headers and Changed Type, are convenient but that sometimes you'll want to control them yourself.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Quote:** "there may be times when you want to explicitly control this behavior to prevent inadvertent refresh errors"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Mistakes Almost Everyone Makes
- **Status:** accepted as F275, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R278 · Power Query keeps its own cached copy
- **Claim:** Power Query keeps a local cached copy of the source data and doesn't refresh it by itself; a message saying the preview may be days old means it's out of date.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Quote:** "Power Query caches the external data locally to help improve performance."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Mistakes Almost Everyone Makes; Refreshing a Query
- **Status:** accepted as F276, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R279 · Table.NestedJoin defaults to left outer
- **Claim:** Table.NestedJoin, the M function Power Query uses for a merge, does a left outer join when no join kind is given.
- **Source:** Microsoft Learn, "Table.NestedJoin": https://learn.microsoft.com/en-us/powerquery-m/table-nestedjoin
- **Quote:** "By default, a left outer join is performed if a joinKind is not specified."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** The Join Kinds in Plain Words
- **Status:** accepted as F277, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R280 · Power BI tutorial: Left Outer is the default
- **Claim:** Microsoft's Power BI Desktop tutorial on merging tells the reader to keep the default join kind, Left Outer (all from first, matching from second).
- **Source:** Microsoft Learn, "Shape and combine data in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-shape-and-combine-data
- **Quote:** "Use the default join type: Left Outer (all from first, matching from second)"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** The Join Kinds in Plain Words
- **Status:** accepted as F278, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R281 · Learn calls left outer the default join kind
- **Claim:** A Microsoft Learn article on Power Query merges calls left outer the default join kind in the Merge dialog.
- **Source:** Microsoft Learn, "Optimize Power Query when expanding table columns": https://learn.microsoft.com/en-us/power-query/optimize-expanding-table-columns
- **Quote:** "You'll likely want to use the default join kind (left outer) for this kind of data."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** The Join Kinds in Plain Words
- **Status:** accepted as F279, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R282 · Merges are Table.NestedJoin
- **Claim:** Microsoft names Table.NestedJoin as the function behind a merge in Power Query.
- **Source:** Microsoft Learn, "Common authoring issues in Power Query": https://learn.microsoft.com/en-us/power-query/common-issues
- **Quote:** "merges (such as Table.NestedJoin )"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** The Join Kinds in Plain Words
- **Status:** new
- **Verified:** 2026-10-15, quote found on the page

---

## R283 · Ctrl+F5 restores the window
- **Claim:** In the function-key table of Excel's keyboard shortcuts, Ctrl+F5 restores the size of the selected workbook window; it is not listed there as a refresh.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Ctrl+F5: restores the window size of the selected workbook window."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** new
- **Verified:** 2026-10-15, quote found on the page

---

## R284 · Shortcut list also gives Ctrl+F5 as refresh
- **Claim:** The same keyboard shortcuts page, in its section on refreshing external data, gives Ctrl+F5 for refreshing the current worksheet and Ctrl+Alt+F5 for the whole workbook, so Microsoft's own pages disagree about Ctrl+F5.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Refresh data in the current worksheet. Ctrl+F5 Refresh all data in the workbook. Ctrl+Alt+F5"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** new
- **Verified:** 2026-10-15, quote found on the page

---

## R285 · Excel for the web: Alt+F5 refreshes
- **Claim:** In Excel for the web, Alt+F5 refreshes external data and Ctrl+Alt+F5 refreshes all external data.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Refresh external data. Alt+F5 Refresh all external data. Ctrl+Alt+F5"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** new
- **Verified:** 2026-10-15, quote found on the page

---

## R286 · Refresh one query from the ribbon
- **Claim:** To refresh only the selected data from the ribbon, choose Data, the arrow under Refresh All, then Refresh.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Quote:** "click the arrow under Refresh All , and then click Refresh ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** accepted as F280, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R287 · Keep range of rows counts from row 1
- **Claim:** In Microsoft Learn's Keep range of rows example, entering 6 as the First row removes the rows above row 6 and keeps 8 rows.
- **Source:** Microsoft Learn, "Filter a table by row position": https://learn.microsoft.com/en-us/power-query/filter-row-position
- **Quote:** "Any rows above the First row that you defined (row 6) are removed."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Keeping the Top Rows
- **Status:** accepted as F281, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R288 · Support page also counts from 1
- **Claim:** The Support page that says the first data row is row zero also says that entering 2 as the first row to remove keeps row one and removes row two, which counts from one.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "If you enter 2, the first row is kept but the second row is removed."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Keeping the Top Rows
- **Status:** new
- **Verified:** 2026-10-15, quote found on the page

---

## R289 · Support: first data row is row zero
- **Claim:** Microsoft Support says that when you give a range of rows, the first data row is row zero, and suggests adding an index column to see row positions first.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Quote:** "the first data row in a table is row zero (0), not row one (1)."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Keeping the Top Rows
- **Status:** new
- **Verified:** 2026-10-15, quote found on the page

---

## R290 · Format, Trim under Transform
- **Claim:** Leading and trailing spaces can be removed in the Power Query Editor with Format, Trim on the Transform tab.
- **Source:** Microsoft Learn, "Data types in Power BI": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-data-types
- **Quote:** "Format Trim under Transform , to remove the spaces in Power Query Editor."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Trimming Stray Spaces
- **Status:** accepted as F282, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R291 · Later steps may not keep the sort
- **Claim:** Power Query does not guarantee that a sort survives later steps that group rows, merge queries or remove duplicates.
- **Source:** Microsoft Learn, "Common authoring issues in Power Query": https://learn.microsoft.com/en-us/power-query/common-issues
- **Quote:** "sort order isn't guaranteed to be preserved through aggregations"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Sorting Inside a Query
- **Status:** accepted as F283, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R292 · Sort after the other steps
- **Claim:** Microsoft's first suggested fix is to sort after the step that could change the order.
- **Source:** Microsoft Learn, "Common authoring issues in Power Query": https://learn.microsoft.com/en-us/power-query/common-issues
- **Quote:** "Perform a sort after applying the downstream operation."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Sorting Inside a Query
- **Status:** accepted as F284, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R293 · One row for each matching pair
- **Claim:** An inner join gives one row for each pair of matching rows, so a key that appears twice in the second table gives two rows for one row of the first.
- **Source:** Microsoft Learn, "JoinKind.Type": https://learn.microsoft.com/en-us/powerquery-m/joinkind-type
- **Quote:** "contains a row for each pair of rows from the specified tables that were determined to match"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Looking Up a Value With a Merge
- **Status:** accepted as F285, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R294 · Expanding can add rows
- **Claim:** Expanding a merged column turns each nested table into rows and columns, so a nested table with several rows becomes several rows.
- **Source:** Microsoft Learn, "Table.ExpandTableColumn": https://learn.microsoft.com/en-us/powerquery-m/table-expandtablecolumn
- **Quote:** "into multiple rows and columns"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Looking Up a Value With a Merge
- **Status:** accepted as F286, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R295 · First visit asks how to sign in
- **Claim:** The first time Power Query connects to a web site, it asks for a sign-in method; Anonymous is for a page that needs no credentials.
- **Source:** Microsoft Learn, "Power Query Web connector": https://learn.microsoft.com/en-us/power-query/connectors/web/web
- **Quote:** "Anonymous : Select this authentication method if the web page doesn't require any credentials."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing a Table From a Web Page
- **Status:** accepted as F287, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R296 · Changing pages cause refresh errors
- **Claim:** A web page that loads its content as it goes can make a refresh fail now and then with an error that a column was not found.
- **Source:** Microsoft Learn, "Troubleshooting the Power Query Web connector": https://learn.microsoft.com/en-us/power-query/connectors/web/web-troubleshoot
- **Quote:** "the column 'Foo' of the table wasn't found"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing a Table From a Web Page
- **Status:** accepted as F288, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R297 · Query commands are on a right-click menu
- **Claim:** The query commands, Refresh among them, appear on the right-click menu of a query on the Queries tab of the Queries & Connections pane.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Quote:** "listed in the order they are displayed on their respective context menus of the Queries tab"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** accepted as F289, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R298 · Refresh in Queries & Connections
- **Claim:** Refresh in the Queries & Connections pane brings in up-to-date data from the source, and is only offered on that pane, not in the editor.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Quote:** "Refresh Brings in up-to-date data from external data sources. Only available on the Queries tab of the Queries & Connections pane."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** accepted as F290, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R299 · Mac: right-click the table, Refresh
- **Claim:** In Excel for Mac, to refresh one query, right-click its table on the sheet and choose Refresh.
- **Source:** Microsoft Support, "Import and shape data in Excel for Mac (Power Query)": https://support.microsoft.com/en-us/excel/import-and-shape-data-in-excel-for-mac-power-query
- **Quote:** "right click a query table on a sheet, and then select Refresh"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** accepted as F291, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R300 · Esc stops a refresh
- **Claim:** Pressing Esc stops a refresh that is running.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Quote:** "Stop a refresh operation. Esc"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** accepted as F292, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R301 · Ctrl+Alt+F5 or Refresh All updates everything
- **Claim:** Ctrl+Alt+F5, or Data, Refresh All, updates all the data in the workbook.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Quote:** "Update all data in the workbook Press CTRL+ALT+F5 , or on the Data tab, in the Connections group, click Refresh All ."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Refreshing a Query
- **Status:** accepted as F293, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R302 · US: copyright does not protect facts
- **Claim:** In the United States, copyright does not protect facts themselves, only original works of authorship.
- **Source:** U.S. Copyright Office, "What Does Copyright Protect? (FAQ)": https://www.copyright.gov/help/faq/faq-protect.html
- **Quote:** "Copyright does not protect facts"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing a Table From a Web Page
- **Status:** new
- **Verified:** 2026-10-15, quote found on the page

---

## R303 · UK: database right
- **Claim:** In the UK, a database can carry its own "database right" when substantial investment went into obtaining, verifying or presenting its contents, separate from copyright.
- **Source:** legislation.gov.uk, "The Copyright and Rights in Databases Regulations 1997, regulation 13": https://www.legislation.gov.uk/uksi/1997/3032/regulation/13
- **Quote:** "subsists, in accordance with this Part, in a database if there has been a substantial investment in obtaining, verifying or presenting the contents"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Importing a Table From a Web Page
- **Status:** new
- **Verified:** 2026-10-15, quote found on the page

---

## R304 · List sheet rows and total
- **Claim:** The List sheet of Corner Shop export.xlsx has 240 sales rows under one heading row, worth 6325 in all.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records list rows: 240 and total_amount: 6325, replayed in Python on 2026-10-15.
- **Kind:** measurement
- **Retrieved:** 2026-10-15
- **For:** Practice: Your First Query
- **Status:** accepted as F294, 2026-10-15
- **Verified:** 2026-10-15, no link: measurement, so it is yours to vouch for

---

## R305 · Three sources, same rows
- **Claim:** The List sheet, Corner Shop sales.csv and the 12 files in the Monthly folder each give 240 sales rows worth 6325.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records rows: 240 and total_amount: 6325 for list, csv and monthly (files: 12), replayed in Python on 2026-10-15.
- **Kind:** measurement
- **Retrieved:** 2026-10-15
- **For:** Practice: Bringing Data In
- **Status:** accepted as F295, 2026-10-15
- **Verified:** 2026-10-15, no link: measurement, so it is yours to vouch for

---

## R306 · North rows and total
- **Claim:** Filtered to North, the clean sales list has 107 rows worth 2756.
- **Source:** My own work: datasets/excel-beginner/answers.json records rows_per_region North: 107 and amount_by_region North: 2756, the same 240 sales, checked on 2026-10-15.
- **Kind:** measurement
- **Retrieved:** 2026-10-15
- **For:** Practice: Narrowing the List
- **Status:** accepted as F296, 2026-10-15
- **Verified:** 2026-10-15, no link: measurement, so it is yours to vouch for

---

## R307 · Wide report unpivots to 48 rows
- **Claim:** Unpivoting the Wide sheet (4 regions, 12 month columns) gives 48 rows worth 6325, and January 2025 totals 451.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records wide rows_after_unpivot: 48, total_amount: 6325 and amount_by_month Jan: 451, replayed in Python and in Excel's Power Query engine on 2026-10-15.
- **Kind:** measurement
- **Retrieved:** 2026-10-15
- **For:** Practice: Reshaping a Report
- **Status:** accepted as F297, 2026-10-15
- **Verified:** 2026-10-15, no link: measurement, so it is yours to vouch for

---

## R308 · January and February appended
- **Claim:** Appending the January (16 rows) and February (15 rows) files gives 31 rows worth 826.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records jan_feb_with_products january_rows: 16, february_rows: 15, appended_rows: 31, appended_amount: 826, replayed in Python on 2026-10-15.
- **Kind:** measurement
- **Retrieved:** 2026-10-15
- **For:** Practice: Combining Two Lists
- **Status:** accepted as F298, 2026-10-15
- **Verified:** 2026-10-15, no link: measurement, so it is yours to vouch for

---

## R309 · Merging with Products
- **Claim:** Merging those 31 rows with the Products sheet keeps 31 rows with a left outer join, 6 of them Plant with no category; an inner join keeps 25 rows worth 571.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records left_outer_rows: 31, left_outer_rows_with_no_category: 6, inner_rows: 25, inner_amount: 571, replayed in Python on 2026-10-15.
- **Kind:** measurement
- **Retrieved:** 2026-10-15
- **For:** Practice: Combining Two Lists
- **Status:** accepted as F299, 2026-10-15
- **Verified:** 2026-10-15, no link: measurement, so it is yours to vouch for

---

## R310 · Messy folder cleans to 240 rows
- **Claim:** Combining the 12 files in Monthly messy, after removing 2 top rows and the Total rows, gives 240 rows worth 6325; keeping the Total rows gives 252 rows and 12650.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records monthly_messy rows_after_cleaning: 240, total_after_cleaning: 6325, rows_if_total_rows_are_kept: 252, amount_if_total_rows_are_kept: 12650, replayed in Python and in Excel's Power Query engine on 2026-10-15.
- **Kind:** measurement
- **Retrieved:** 2026-10-15
- **For:** Practice: Monthly Messy Files
- **Status:** accepted as F300, 2026-10-15
- **Verified:** 2026-10-15, no link: measurement, so it is yours to vouch for

---

## R311 · Report sheet cleans to 150 rows
- **Claim:** The Report sheet has 20 product rows once the titles, subtotals, blank rows and Grand total are removed, and unpivoting the months gives 150 rows worth 6325.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records report rows_after_removing_junk: 20, rows_after_unpivot: 150, grand_total: 6325, replayed in Python on 2026-10-15.
- **Kind:** measurement
- **Retrieved:** 2026-10-15
- **For:** Practice: Someone Else's Report
- **Status:** accepted as F301, 2026-10-15
- **Verified:** 2026-10-15, no link: measurement, so it is yours to vouch for

---

## R312 · Year-end CSV cleans to 240 rows
- **Claim:** Year-end export.csv has 243 sale lines, 3 of them repeats (S0039, S0056, S0067), and cleans to 240 rows worth 6325, North 2756, South 1256, East 839, West 1474.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records year_end_csv sale_lines_with_duplicates: 243, rows_after_cleaning: 240, total_after_cleaning: 6325, replayed in Python on 2026-10-15; the semicolon split was checked in Excel's Power Query engine.
- **Kind:** measurement
- **Retrieved:** 2026-10-15
- **For:** Practice: Messy File to PivotTable
- **Status:** accepted as F302, 2026-10-15
- **Verified:** 2026-10-15, no link: measurement, so it is yours to vouch for

---

## R313 · Power Query is also in Power BI Desktop
- **Claim:** The desktop version of Power Query is in Excel and in Power BI Desktop.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
- **Quote:** "Power Query Desktop : Available in desktop products such as Excel and Power BI Desktop."
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Where to Go After Power Query
- **Status:** accepted as F303, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R314 · Same editor online and on the desktop
- **Claim:** The online and desktop versions of Power Query share the same core editor and transformations, though connectors and other options differ by product.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
- **Quote:** "They share the core editor and transformation experience"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Where to Go After Power Query
- **Status:** accepted as F304, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R315 · Power BI can refresh on a schedule
- **Claim:** Queries can be refreshed by hand, on a schedule in products such as Power BI, or by code through the Excel object model.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
- **Quote:** "by using scheduled refresh capabilities in specific products such as Power BI, or programmatically by using the Excel object model"
- **Kind:** reference
- **Retrieved:** 2026-10-15
- **For:** Where to Go After Power Query
- **Status:** accepted as F305, 2026-10-15
- **Verified:** 2026-10-15, quote found on the page

---

## R316 · Whole Number is a kind of data
- **Claim:** Whole Number is one of the kinds of data in Power Query, for numbers with no decimal part; the list also has Decimal number, Text and Date.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Quote:** "Whole Number A 64-bit (eight-byte) integer value."
- **Kind:** reference
- **Retrieved:** 2026-10-19
- **For:** Numbers That Arrive as Text
- **Status:** accepted as F306, 2026-10-19
- **Verified:** 2026-10-19, quote found on the page

---

## R317 · Day-first dates: English (United Kingdom)
- **Claim:** In Microsoft's example of day/month/year dates read wrongly as month/day/year, the locale to pick in the Change Type with Locale dialog box is English (United Kingdom).
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/en-us/power-query/data-types
- **Quote:** "which in this case needs to be English (United Kingdom)"
- **Kind:** reference
- **Retrieved:** 2026-10-19
- **For:** Dates That Arrive as Text
- **Status:** accepted as F307, 2026-10-19
- **Verified:** 2026-10-19, quote found on the page

---
