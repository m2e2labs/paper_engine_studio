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

## F1 · Refresh runs every step again
- **Claim:** When a query is refreshed, Power Query runs each of its recorded steps again by itself.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F2 · Queries replace fixing data by hand
- **Claim:** Microsoft says queries replace the need to connect to and shape data by hand in Excel.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F3 · Refresh brings in additions, changes and deletes
- **Claim:** Once data is imported with Power Query, refreshing brings in rows that were added, changed or deleted at the source.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F4 · Power Query is called Get & Transform in Excel
- **Claim:** Excel also calls Power Query Get & Transform; it lets you import or connect to data and then shape it, for example by removing a column or changing a kind of data.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F5 · Four phases: connect, transform, combine, load
- **Claim:** Microsoft describes four phases to using Power Query: Connect, Transform, Combine and Load.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F6 · Transform leaves the original unchanged
- **Claim:** In the Transform phase you shape the data while the original source stays as it was.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F7 · Combine joins data from several sources
- **Claim:** In the Combine phase you bring together data from more than one source into one view.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F8 · Load to a worksheet or the Data Model
- **Claim:** In the Load phase the finished query goes into a worksheet or the Data Model, and it can be refreshed from time to time.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F9 · Available on Windows, Mac and the web
- **Claim:** Power Query is available in Excel for Windows, Excel for Mac and Excel for the web.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F10 · Get & Transform Data group on the Data tab
- **Claim:** In Microsoft 365, the Power Query import tools are in the Get & Transform Data group on the Data tab of the ribbon.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F11 · Excel 2016 and 2019 for Windows have it built in
- **Claim:** Excel 2016 and Excel 2019 for Windows have the same built-in Get & Transform Data experience as Microsoft 365.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F12 · Excel 2010 and 2013 needed an add-in
- **Claim:** In Excel 2010 and 2013 for Windows, Power Query was a separate free add-in with its own Power Query tab on the ribbon.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F13 · No Power Query in Excel 2016 or 2019 for Mac
- **Claim:** Excel 2016 and Excel 2019 for Mac don't support Power Query.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F14 · On a Mac: Data, Get Data (Power Query)
- **Claim:** In Excel for Microsoft 365 for Mac you start from Data, then Get Data (Power Query).
- **Source:** Microsoft Support, "Import and shape data in Excel for Mac (Power Query)": https://support.microsoft.com/en-us/excel/import-and-shape-data-in-excel-for-mac-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F15 · Mac editor needs version 16.69 or later
- **Claim:** On a Mac, the Power Query Editor is available to Microsoft 365 subscribers running Excel for Mac version 16.69 (23010700) or later (as stated on the page on 2026-10-15).
- **Source:** Microsoft Support, "Import and shape data in Excel for Mac (Power Query)": https://support.microsoft.com/en-us/excel/import-and-shape-data-in-excel-for-mac-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F16 · Modern Get Data dialog from version 2510
- **Claim:** Excel for Windows version 2510 introduced a modern Get Data dialog, opened from Get Data on the Data tab, so the reader's screen may look different from older guides.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F17 · Create Table: Ctrl+T or Ctrl+L
- **Claim:** Pressing Ctrl+T (or Ctrl+L) opens the Create Table dialog box in Excel for Windows.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/office/keyboard-shortcuts-in-excel-1798d9d5-842a-42b8-9c99-9b7213f0040f
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F18 · Tick My table has headers
- **Claim:** When you make a table, the Create Table dialog box asks you to confirm the range and to mark whether the table has headers.
- **Source:** Microsoft Support, "Create and format tables": https://support.microsoft.com/en-us/excel/get-started/create-and-format-tables
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F19 · A table grows when you type below it
- **Claim:** Typing in the cell just below a table's last row makes the table grow to include the new row.
- **Source:** Microsoft Support, "Resize a table by adding or removing rows and columns": https://support.microsoft.com/en-us/office/resize-a-table-by-adding-or-removing-rows-and-columns-e65ae4bb-e44b-43f4-ad8b-7d68784f1165
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F20 · Tables get default names Table1, Table2
- **Claim:** Excel gives each new table a default name, Table1, Table2, Table3 and so on, and you can give it a name of your own.
- **Source:** Microsoft Support, "Rename an Excel table": https://support.microsoft.com/en-us/excel/rename-an-excel-table
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F21 · Renaming a table in Table Name
- **Claim:** To rename a table, click in it, find the Table Name box (under Properties on the table's Design tab, or the Table tab on a Mac), and type a new name over the old one.
- **Source:** Microsoft Support, "Rename an Excel table": https://support.microsoft.com/en-us/excel/rename-an-excel-table
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F22 · No spaces in a table name
- **Claim:** A table name can't contain spaces; Microsoft suggests joining the words, or using an underscore or a full stop between them, as in DeptSales or Sales_Tax.
- **Source:** Microsoft Support, "Rename an Excel table": https://support.microsoft.com/en-us/excel/rename-an-excel-table
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F23 · Data, From Table/Range
- **Claim:** To start a query from data on a sheet, select any cell in the data and choose Data, From Table/Range.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F24 · A plain range is turned into a table
- **Claim:** From Table/Range works on an Excel table, a named range or a dynamic array in the same workbook, and a plain range is turned into a table first.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F25 · Header cells become the column names
- **Claim:** If the data has headings and you tick My table has headers, the heading cells become the column names in the query.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F26 · The editor opens when you connect or create a query
- **Claim:** The Power Query Editor is its own window, and it opens when you connect to data, create a new query or load a query.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F27 · Know whether you're in Excel or Power Query
- **Claim:** Microsoft advises knowing at every moment whether you're working in Excel or in the Power Query Editor, because working on the sheet is different from working in Power Query.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F28 · Five parts of the editor window
- **Claim:** Microsoft Learn names five parts of the Power Query editor: the ribbon, the Queries pane, the current view, the Query settings pane and the status bar. (This page covers Power Query in general, not Excel only.)
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F29 · Query settings shows the name and steps
- **Claim:** The Query settings pane shows the selected query's name and its steps.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F30 · Ribbon tabs depend on the product
- **Claim:** The editor's ribbon holds most of the changes you can make, and which tabs it shows depends on the product Power Query is running in.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F31 · Status bar shows rows and columns
- **Claim:** The status bar at the bottom of the editor shows information about the query, including the total number of columns and rows.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F32 · Every change is recorded as a named step
- **Claim:** The Power Query Editor records and names every change you make as a step, and you can see and change each one in Applied Steps in the Query Settings pane.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F33 · A query is a new view of unchanged data
- **Claim:** All the steps together make up the query, which is a new version of the data while the original source stays unchanged.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F34 · Clicking a step shows the data at that point
- **Claim:** Selecting a step in Applied Steps shows the data as it was after that step, so you can see how each step changed it.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F35 · Steps get names like Renamed columns
- **Claim:** Each step gets a name automatically; renaming a column, for example, adds a step called Renamed columns.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F36 · Deleting a step
- **Claim:** To remove a step, right-click it and choose Delete, or select the X beside it.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F37 · Close & Load puts the result on a sheet
- **Claim:** In the Power Query Editor, Home, then Close & Load, loads the query's result to a worksheet.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F38 · One query loads to a new worksheet by default
- **Claim:** By default, a single query loads to a new worksheet, while several queries loaded at the same time go to the Data Model.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F39 · The Query tab shows data came from Power Query
- **Claim:** If you click a cell of data and a Query tab appears on the ribbon, that data was loaded by Power Query.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F40 · Query, Edit reopens the editor
- **Claim:** To change a query that's already on a sheet, select a cell in its data and choose Query, Edit.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F41 · Rename sheet tabs so data and query are clear
- **Claim:** Microsoft suggests renaming sheet tabs so it's clear which sheet holds the original data and which holds the loaded query, for example DataTable and QueryTable.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F42 · Data, Get Data, From File, From Excel Workbook
- **Claim:** To read data from another workbook, choose Data, Get Data, From File, From Excel Workbook, then find the file and select Open.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F43 · Named ranges show up as data sets
- **Claim:** If the other workbook has named ranges, each one is offered by its name as something you can import.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F44 · Data, Get Data, From File, From Text/CSV
- **Claim:** To read a CSV or text file, choose Data, Get Data, From File, From Text/CSV, then find the file and select Open.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F45 · In a CSV, commas separate the values
- **Claim:** In a CSV file, a comma usually separates each value; in a tab-delimited text file, a tab does.
- **Source:** Microsoft Support, "Import or export text (.txt or .csv) files": https://support.microsoft.com/en-us/excel/get-started/import-or-export-text-txt-or-csv-files
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F46 · CSV: separators, names and kinds are detected
- **Claim:** When you import a CSV file, Power Query works out the separator, uses the first row as column names and sets the kind of data for each column by itself.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F47 · Change the delimiter and see it in the preview
- **Claim:** With From Text/CSV you can pick a different separator from the Delimiter list, and the preview shows the effect straight away, before you load anything.
- **Source:** Microsoft Support, "Import or export text (.txt or .csv) files": https://support.microsoft.com/en-us/excel/get-started/import-or-export-text-txt-or-csv-files
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F48 · Load, Load to, or Transform Data
- **Claim:** In the preview window, Load puts the data on a new worksheet, Load to lets you choose where it goes (including only a connection), and Transform Data opens it in Power Query to edit first.
- **Source:** Microsoft Support, "Import or export text (.txt or .csv) files": https://support.microsoft.com/en-us/excel/get-started/import-or-export-text-txt-or-csv-files
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F49 · Kind detection: first 200 rows, whole file, or off
- **Claim:** For a CSV, you can base the detection of each column's kind of data on the first 200 rows or on the whole file, or turn detection off so every column stays as text.
- **Source:** Microsoft Learn, "Power Query Text/CSV connector": https://learn.microsoft.com/en-us/power-query/connectors/text-csv
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F50 · Navigator: list on the left, preview on the right
- **Claim:** The Navigator window lists the items you can import on the left and shows a preview of the selected item on the right.
- **Source:** Microsoft Learn, "Getting data overview": https://learn.microsoft.com/en-us/power-query/get-data-experience
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F51 · Select multiple items in Excel's Navigator
- **Claim:** In Excel, tick Select multiple items at the top left of the Navigator to choose more than one item at a time.
- **Source:** Microsoft Learn, "Getting data overview": https://learn.microsoft.com/en-us/power-query/get-data-experience
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F52 · Navigator: Load or Transform Data
- **Claim:** After choosing items in the Navigator, Load loads them straight away and Transform Data opens them in the Power Query Editor first.
- **Source:** Microsoft Learn, "Power Query Excel connector": https://learn.microsoft.com/en-us/power-query/connectors/excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F53 · Whole sheet or suggested tables
- **Claim:** For a sheet without a single table, the Navigator offers the whole sheet and also suggested tables it spotted in the layout; choosing the whole sheet shows every blank cell as null.
- **Source:** Microsoft Learn, "Power Query Excel connector": https://learn.microsoft.com/en-us/power-query/connectors/excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F54 · A changed sheet may stop refreshing properly
- **Claim:** If a source sheet's layout changes enough, a suggested table might not refresh properly, and importing again with a new suggested table may fix it.
- **Source:** Microsoft Learn, "Power Query Excel connector": https://learn.microsoft.com/en-us/power-query/connectors/excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F55 · Combine a folder of files into one table
- **Claim:** Power Query can combine many files with the same layout, kept in one folder, into a single table; Microsoft's example is combining each month's workbooks that share the same columns.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F56 · Data, Get Data, From File, From Folder
- **Claim:** To start, choose Data, Get Data, From File, From Folder, find the folder, and check the list of files that appears.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F57 · Keep only those files in the folder
- **Claim:** Keep the files to combine in a folder of their own, because every file in the folder (and in any subfolders you select) is included.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F58 · Columns are matched by name, not order
- **Claim:** Each file should have the same column headings, kinds of data and number of columns, but the columns don't have to be in the same order, because they're matched by name.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F59 · Combine & Load or Combine & Transform Data
- **Claim:** The buttons at the bottom of the folder window include Combine & Load, which loads the combined table to a worksheet, and Combine & Transform Data, which opens it in the editor.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F60 · The first file is the sample by default
- **Claim:** Power Query uses one file as the example for the layout, the first file in the list unless you pick another, and you can tick Skip files with errors.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F61 · Helper queries appear
- **Claim:** Combining files creates extra supporting queries in a Helper Queries group, and the final query is named after the folder by default.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F62 · Refresh to pick up each new month
- **Claim:** Once a folder query is set up, refreshing it brings in the results for each new month.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-a-folder-with-multiple-files-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F63 · Data, Get Data, From Other Sources, From Web
- **Claim:** To read a table from a web page, choose Data, Get Data, From Other Sources, From Web, and type the page's address.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F64 · Web View shows the whole page
- **Claim:** The Navigator lists the tables found on the page; if you're not sure which one you want, the Web View tab shows the whole page.
- **Source:** Microsoft Learn, "Power Query Web connector": https://learn.microsoft.com/en-us/power-query/connectors/web/web
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F65 · From Web needs WebView2
- **Claim:** In Excel for Windows, From Web needs the Microsoft Edge WebView2 component installed, and without it Excel shows a message about additional components.
- **Source:** Microsoft Support, "Import data from data sources (Power Query)": https://support.microsoft.com/en-us/excel/import-data-from-data-sources-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F66 · The icon on the heading shows the kind
- **Claim:** In the Power Query Editor, a small icon on the left of each column heading shows the column's kind of data.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F67 · Kinds are guessed from the values
- **Claim:** For Excel, CSV and text files, Power Query guesses each column's kind of data by looking at the values in it.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F68 · Guess based on the first 200 rows, as two steps
- **Claim:** By default the guess is based on the first 200 rows, and Power Query adds it as two steps after Source: Promoted Headers and Changed Type.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F69 · Set the kind from Home, Data Type
- **Claim:** To set a column's kind of data, select the column and choose Home, Data Type, or click the icon on its heading.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F70 · Automatic guesses can cause refresh errors
- **Claim:** Microsoft notes you might not want the automatic kind-of-data steps, because they can cause errors when the data refreshes.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F71 · Date and number options need the right kind
- **Claim:** Microsoft recommends setting the right kind of data on every column, because options such as the date commands and the date filters are greyed out until the column has one.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/en-us/power-query/best-practices
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F72 · Day and month order differ by region
- **Claim:** Different regions write dates differently, some as month/day/year and others as day/month/year, and Power Query reads dates using your computer's regional setting.
- **Source:** Microsoft Support, "Set a locale or region for data (Power Query)": https://support.microsoft.com/en-us/excel/set-a-locale-or-region-for-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F73 · Wrong region gives errors, like month 22
- **Claim:** If dates written day/month/year are read with a month/day/year setting, changing the column to Date gives errors, because there's no month 22.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/en-us/power-query/data-types
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F74 · Change Type, Using Locale
- **Claim:** To read one column with a different region's format, right-click its heading and choose Change Type, Using Locale, then pick the kind of data and the region.
- **Source:** Microsoft Support, "Set a locale or region for data (Power Query)": https://support.microsoft.com/en-us/excel/set-a-locale-or-region-for-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F75 · Set the workbook's region in Query Options
- **Claim:** To change the region for every query in the workbook, choose Data, Get Data, Query Options, then Regional Settings under Current Workbook.
- **Source:** Microsoft Support, "Set a locale or region for data (Power Query)": https://support.microsoft.com/en-us/excel/set-a-locale-or-region-for-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F76 · Text can hold numbers and dates
- **Claim:** Power Query's Text kind covers words, numbers and dates stored as text.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F77 · Values that can't convert become errors
- **Claim:** When you change a column's kind of data, any value that can't be converted, such as NA in a column of whole numbers, shows as an error.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F78 · An Error cell doesn't stop the load
- **Claim:** An error in a single cell doesn't stop the query loading; the cell shows Error, and selecting the space in that cell shows the details under the preview.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F79 · Close & Load To opens the Import Data box
- **Claim:** Choosing Close & Load To, instead of Close & Load, opens the Import Data dialog box so you can choose where this query's result goes.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F80 · Only Create Connection
- **Claim:** The Import Data dialog box has an Only Create Connection option, which keeps the query without putting its result on a sheet.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F81 · Not every query is loaded to a sheet
- **Claim:** Not every query has to be loaded to a worksheet; it can go to the Data Model or be kept as a connection instead.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F82 · Load To can be dimmed the first time
- **Claim:** The first time you make a query in a workbook, Load To may be greyed out; Microsoft's fix is Close & Load, then right-click the query in Queries & Connections and choose Load To.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F83 · Change where a query loads later
- **Claim:** To change where an existing query loads, open Data, Queries & Connections, right-click the query and choose Load To.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F84 · A query feeding another can skip loading
- **Claim:** In Microsoft's worked example, the queries that feed a combined query have their loading turned off, so only the combined result is loaded. (This page covers Power Query in general, not Excel only.)
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F85 · Home, Use First Row As Headers
- **Claim:** To turn the first row into column headings, choose Home, Use First Row As Headers (on the Transform tab in Excel for the web).
- **Source:** Microsoft Support, "Promote or demote rows and column headers (Power Query)": https://support.microsoft.com/en-us/excel/promote-or-demote-rows-and-column-headers-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F86 · Use Headers as First Row undoes it
- **Claim:** The arrow next to Use First Row As Headers has Use Headers as First Row, which moves the headings back down into the data.
- **Source:** Microsoft Support, "Promote or demote rows and column headers (Power Query)": https://support.microsoft.com/en-us/excel/promote-or-demote-rows-and-column-headers-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F87 · Headings are often promoted for you
- **Claim:** When a table is created, Power Query often spots the column headings and promotes them by itself.
- **Source:** Microsoft Support, "Promote or demote rows and column headers (Power Query)": https://support.microsoft.com/en-us/excel/promote-or-demote-rows-and-column-headers-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F88 · The automatic guess isn't always right
- **Claim:** Power Query doesn't always recognise the heading row correctly, which is why you may need to promote headings yourself.
- **Source:** Microsoft Learn, "Promote or demote column headers": https://learn.microsoft.com/en-us/power-query/table-promote-demote-headers
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F89 · Promoted Headers is the same command
- **Claim:** The Promoted Headers step that Power Query adds by itself does the same as the Use First Row as Headers command.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F90 · Home, Remove Rows, Remove Top Rows
- **Claim:** To delete rows at the top, choose Home, Remove Rows, Remove Top Rows, and type how many rows to remove.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F91 · Remove the title rows, then promote
- **Claim:** In Microsoft's example the real headings sit in row 5 under some title rows, so you remove the first four rows and then promote the headings.
- **Source:** Microsoft Learn, "Promote or demote column headers": https://learn.microsoft.com/en-us/power-query/table-promote-demote-headers
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F92 · Remove Bottom Rows for totals and notes
- **Claim:** Remove Rows also has Remove Bottom Rows, which deletes a set number of rows from the end.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F93 · Reports with a fixed layout
- **Claim:** Microsoft's example of a report with a fixed layout has five rows of report header, then the data, then rows of comments, and Keep Range of Rows keeps only the data rows.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F94 · Home, Remove Rows, Remove Blank Rows
- **Claim:** To delete empty rows, choose Home, Remove Rows, Remove Blank Rows; it looks at the whole row, not one column.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F95 · Remove empty from a column's filter arrow
- **Claim:** You can also click a column's filter arrow and choose Remove empty, which removes rows where that column has nothing in it.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F96 · Null or blank means nothing in the cell
- **Claim:** In Power Query, a null or blank value is a cell with nothing in it.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F97 · Select several columns with Ctrl or Shift
- **Claim:** To remove several columns at once, select them with Ctrl+click or Shift+click and choose Home, Remove Columns; they don't have to sit next to each other.
- **Source:** Microsoft Support, "Remove columns (Power Query)": https://support.microsoft.com/en-us/excel/remove-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F98 · Remove Other Columns keeps the selected ones
- **Claim:** Remove Other Columns keeps the columns you selected and removes all the rest.
- **Source:** Microsoft Support, "Remove columns (Power Query)": https://support.microsoft.com/en-us/excel/remove-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F99 · Remove Other Columns drops new columns on refresh
- **Claim:** After Remove Other Columns, a column added to the source later won't come through on refresh, because it counts as one of the other columns; removing columns by name lets new ones through.
- **Source:** Microsoft Support, "Remove columns (Power Query)": https://support.microsoft.com/en-us/excel/remove-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F100 · Choose Columns: tick the ones to keep
- **Claim:** Home, Choose Columns opens a list of every column with a tick box, and you clear the ones you don't want.
- **Source:** Microsoft Learn, "Choose or remove columns": https://learn.microsoft.com/en-us/power-query/choose-remove-columns
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F101 · Transform, Rename, or double-click
- **Claim:** To rename a column, select it and choose Transform, Rename, or double-click its heading, then type the new name.
- **Source:** Microsoft Support, "Rename a column (Power Query)": https://support.microsoft.com/en-us/excel/rename-a-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F102 · One column at a time, names must be unique
- **Claim:** You rename one column at a time, and column names must be unique, so a name that's already used gives an error.
- **Source:** Microsoft Support, "Rename a column (Power Query)": https://support.microsoft.com/en-us/excel/rename-a-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F103 · Renaming doesn't touch the source
- **Claim:** Renaming a column in Power Query doesn't rename the heading in the original data.
- **Source:** Microsoft Support, "Rename a column (Power Query)": https://support.microsoft.com/en-us/excel/rename-a-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F104 · A changed source heading breaks the query
- **Claim:** If someone changes a heading in the source after the query is made, Power Query may not find the column and shows an error saying the column wasn't found.
- **Source:** Microsoft Support, "Rename a column (Power Query)": https://support.microsoft.com/en-us/excel/rename-a-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F105 · The Format menu: Trim, Clean, case
- **Claim:** The Format menu offers lowercase, UPPERCASE, Capitalize Each Word, Trim, Clean, Add Prefix and Add Suffix; on the Add Column tab it adds a new column, and on the Transform tab it changes the column itself.
- **Source:** Microsoft Support, "Add a column based on a data type (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-based-on-a-data-type-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F106 · Changing the original column: take care
- **Claim:** Microsoft warns that changing the original column, rather than adding a new one, can lead to refresh errors you didn't expect.
- **Source:** Microsoft Support, "Add a column based on a data type (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-based-on-a-data-type-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F107 · Trim removes spaces at the start and end
- **Claim:** Trim (the Text.Trim function underneath) removes spaces at the start and end of the text; Microsoft's example keeps the single spaces between the letters.
- **Source:** Microsoft Learn, "Text.Trim": https://learn.microsoft.com/en-us/powerquery-m/text-trim
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F108 · Clean removes hidden control characters
- **Claim:** Clean (the Text.Clean function underneath) removes control characters, such as line feeds, from text.
- **Source:** Microsoft Learn, "Text.Clean": https://learn.microsoft.com/en-us/powerquery-m/text-clean
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F109 · Replace can find a non-breaking space
- **Claim:** Under Advanced options, Replace Values can insert special characters to find, including a tab, a line feed and a non-breaking space.
- **Source:** Microsoft Support, "Replace values (Power Query)": https://support.microsoft.com/en-us/excel/replace-values-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F110 · Power Query is case-sensitive
- **Claim:** The same word can arrive with different capitals, such as Redmond, redmond and REDMOND, and Power Query treats them as different because it's case-sensitive.
- **Source:** Microsoft Learn, "Capitalization in Power Query M": https://learn.microsoft.com/en-us/powerquery-m/m-working-with-case
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F111 · Capitalize Each Word lowers the other letters
- **Claim:** Capitalize Each Word (the Text.Proper function underneath) makes the first letter of each word a capital and every other letter lower case.
- **Source:** Microsoft Learn, "Text.Proper": https://learn.microsoft.com/en-us/powerquery-m/text-proper
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F112 · Add Column, Format, Capitalize Each Word
- **Claim:** Choosing Add Column, Format, Capitalize Each Word adds a new column with the result and leaves the original as it was.
- **Source:** Microsoft Support, "Add a column based on a data type (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-based-on-a-data-type-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F113 · Home or Transform, Replace Values
- **Claim:** To swap one value for another in a column, choose Replace Values on the Home or Transform tab, then fill in Value To Find and Replace With.
- **Source:** Microsoft Support, "Replace values (Power Query)": https://support.microsoft.com/en-us/excel/replace-values-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F114 · Text: part of a cell unless Match entire cell
- **Claim:** In a text column, Replace Values changes the matching text inside each cell unless you tick Match entire cell contents under Advanced options.
- **Source:** Microsoft Support, "Replace values (Power Query)": https://support.microsoft.com/en-us/excel/replace-values-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F115 · Numbers and dates: whole cell only
- **Claim:** In a number, date or true/false column, Replace Values always replaces the whole contents of the cell, and that can't be changed.
- **Source:** Microsoft Support, "Replace values (Power Query)": https://support.microsoft.com/en-us/excel/replace-values-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F116 · Replacing doesn't edit the source
- **Claim:** Replacing values in a query doesn't change the original data.
- **Source:** Microsoft Support, "Replace values (Power Query)": https://support.microsoft.com/en-us/excel/replace-values-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F117 · Home, Remove Rows, Remove Duplicates
- **Claim:** To drop repeated rows, select the column or columns to compare and choose Home, Remove Rows, Remove Duplicates; the columns you select decide what counts as a repeat.
- **Source:** Microsoft Support, "Keep or remove duplicate rows (Power Query)": https://support.microsoft.com/en-us/excel/keep-or-remove-duplicate-rows-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F118 · Keep Duplicates shows the repeats
- **Claim:** Home, Keep Rows, Keep Duplicates does the opposite and shows only the repeated rows, so you can look at them first.
- **Source:** Microsoft Support, "Keep or remove duplicate rows (Power Query)": https://support.microsoft.com/en-us/excel/keep-or-remove-duplicate-rows-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F119 · Duplicates are case-sensitive
- **Claim:** Power Query takes capitals into account when it looks for repeats, so Microsoft suggests making the text all upper or all lower case before removing duplicates.
- **Source:** Microsoft Learn, "Working with duplicate values": https://learn.microsoft.com/en-us/power-query/working-with-duplicates
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F120 · Fill Down copies the value above into nulls
- **Claim:** Fill Down replaces each null in a column with the last value above it that isn't empty; Fill Up works from the bottom.
- **Source:** Microsoft Learn, "Fill values in a column": https://learn.microsoft.com/en-us/power-query/fill-values-column
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F121 · Right-click, Fill Down
- **Claim:** To fill down, right-click the column's heading and choose Fill Down.
- **Source:** Microsoft Learn, "Fill values in a column": https://learn.microsoft.com/en-us/power-query/fill-values-column
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F122 · Empty-looking cells must become null first
- **Claim:** Fill only fills null cells, so cells that only look empty must first be replaced with null using Replace Values, leaving Value to find blank and typing null in Replace with.
- **Source:** Microsoft Learn, "Fill values in a column": https://learn.microsoft.com/en-us/power-query/fill-values-column
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F123 · Count Rows gives the real row count
- **Claim:** Transform, Count Rows returns the actual number of rows in the query, whatever the profiling setting.
- **Source:** Microsoft Support, "Profile data to view statistics (Power Query)": https://support.microsoft.com/en-us/excel/profile-data-to-view-statistics-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F124 · Column quality: valid, error, empty
- **Claim:** Turning on Column Quality on the View tab shows, for each column, the share of values that are valid, errors or empty.
- **Source:** Microsoft Support, "Profile data to view statistics (Power Query)": https://support.microsoft.com/en-us/excel/profile-data-to-view-statistics-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F125 · Profiles cover the first 1,000 rows
- **Claim:** The data profiles are based on the first 1,000 rows unless you switch them to the entire data set in the bottom-left corner of the editor.
- **Source:** Microsoft Support, "Profile data to view statistics (Power Query)": https://support.microsoft.com/en-us/excel/profile-data-to-view-statistics-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F126 · Filter with the arrow on a heading
- **Claim:** To filter in the editor, click the arrow next to a column heading, clear (Select All), tick the values you want and select OK.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F127 · A filtered column shows a filter icon
- **Claim:** A filtered column shows a small filter icon in its heading, and Clear filter on the same arrow removes the filter.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F128 · The filter list shows 1,000 values at first
- **Claim:** The filter list shows only the first 1,000 different values at first; if it says the list may be incomplete, select Load more.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F129 · Filter several columns one after another
- **Claim:** To filter on more than one column, filter the first column and then repeat for each other column.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F130 · Filter early
- **Claim:** Microsoft recommends filtering as early as you can in a query, so that later steps have fewer rows to work through.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/en-us/power-query/best-practices
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F131 · Text Filters menu
- **Claim:** A text column's arrow has Text Filters, with Equals, Does Not Equal, Begins With, Does Not Begin With, Ends With, Does Not End With, Contains and Does Not Contain.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F132 · Number Filters menu
- **Claim:** A number column's arrow has Number Filters, with Equals, Does Not Equal, Greater Than, Greater Than or Equal To, Less Than, Less Than Or Equal To and Between.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F133 · Date/Time Filters menu
- **Claim:** A date column's arrow has Date/Time Filters, with choices such as Before, After, Between, In the Next and In the Previous, plus ready-made Year, Quarter, Month, Week and Day filters.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F134 · The menu depends on the kind of data
- **Claim:** Which filter menu you see depends on the column's kind of data.
- **Source:** Microsoft Learn, "Filter by values in a column": https://learn.microsoft.com/en-us/power-query/filter-values
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F135 · Filter Rows: Basic and Advanced
- **Claim:** The Filter Rows dialog box has a Basic mode for up to two rules and an Advanced mode for more.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F136 · Keep Top Rows
- **Claim:** Home, Keep Rows, Keep Top Rows keeps the number of rows you type, counting from the top.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F137 · Keep Bottom Rows
- **Claim:** Home, Keep Rows, Keep Bottom Rows keeps the number of rows you type, counting from the bottom.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F138 · Keep Range of Rows
- **Claim:** Home, Keep Rows, Keep Range of Rows keeps a block of rows from a first row for a number of rows, which suits a report with a fixed layout.
- **Source:** Microsoft Support, "Filter data (Power Query)": https://support.microsoft.com/en-us/excel/filter-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F139 · Keep top rows when the data is a fixed size
- **Claim:** Microsoft's example keeps the top seven rows of a report that always has seven rows of data followed by comments.
- **Source:** Microsoft Learn, "Filter a table by row position": https://learn.microsoft.com/en-us/power-query/filter-row-position
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F140 · Sort from the heading arrow
- **Claim:** To sort, click the arrow next to a column heading and choose Sort Ascending or Sort Descending.
- **Source:** Microsoft Support, "Sort data (Power Query)": https://support.microsoft.com/en-us/excel/sort-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F141 · What ascending and descending mean
- **Claim:** Ascending puts text A to Z, numbers smallest first and dates oldest first; descending does the opposite.
- **Source:** Microsoft Support, "Sort data (Power Query)": https://support.microsoft.com/en-us/excel/sort-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F142 · Sorting several columns follows the click order
- **Claim:** When you sort by several columns, the order you choose them in decides which sort comes first.
- **Source:** Microsoft Support, "Sort data (Power Query)": https://support.microsoft.com/en-us/excel/sort-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F143 · A sort is a Sorted rows step
- **Claim:** Sorting adds a step called Sorted rows to Applied Steps, and an arrow on the heading shows the column is sorted.
- **Source:** Microsoft Learn, "Sort columns": https://learn.microsoft.com/en-us/power-query/sort-columns
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F144 · Errors come from steps like changing the kind
- **Claim:** Errors in cells usually come from a step, such as changing a column to Number when some cells can't become numbers.
- **Source:** Microsoft Support, "Remove or keep rows with errors (Power Query)": https://support.microsoft.com/en-us/excel/remove-or-keep-rows-with-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F145 · Home, Remove Rows, Remove Errors
- **Claim:** Home, Remove Rows, Remove Errors removes rows with an error; it covers every column unless you select particular columns first.
- **Source:** Microsoft Support, "Remove or keep rows with errors (Power Query)": https://support.microsoft.com/en-us/excel/remove-or-keep-rows-with-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F146 · Removing errors doesn't fix the source
- **Claim:** Removing errors in a query doesn't remove or fix them in the original data.
- **Source:** Microsoft Support, "Remove or keep rows with errors (Power Query)": https://support.microsoft.com/en-us/excel/remove-or-keep-rows-with-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F147 · Keep a copy that keeps the errors
- **Claim:** Microsoft suggests copying the query and keeping the error rows in the copy, so you can see which rows had problems.
- **Source:** Microsoft Support, "Remove or keep rows with errors (Power Query)": https://support.microsoft.com/en-us/excel/remove-or-keep-rows-with-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F148 · Keep Rows, Keep Errors
- **Claim:** Home, Keep Rows, Keep Errors shows only the rows that have errors, which is useful for checking them even before you fix anything.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F149 · Replace Errors with a value
- **Claim:** Instead of removing them, Transform, Replace Values, Replace Errors puts a value of your choice in place of each error.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F150 · Add Column, Index Column starts at 0
- **Claim:** Add Column, Index Column numbers the rows starting at 0 unless you choose From 1, or Custom for your own start and step.
- **Source:** Microsoft Support, "Add an index column (Power Query)": https://support.microsoft.com/en-us/excel/add-an-index-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F151 · Uses of an index column
- **Claim:** Microsoft lists uses for an index column including keeping the original row order and checking the result after sorting or filtering.
- **Source:** Microsoft Support, "Add an index column (Power Query)": https://support.microsoft.com/en-us/excel/add-an-index-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F152 · The new column is called Index
- **Claim:** The new column is named Index and added at the end of the table, and you can rename or move it.
- **Source:** Microsoft Support, "Add an index column (Power Query)": https://support.microsoft.com/en-us/excel/add-an-index-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F153 · Index from 1
- **Claim:** Selecting the arrow on Index Column and choosing From 1 starts the numbering at 1.
- **Source:** Microsoft Support, "Add an index column (Power Query)": https://support.microsoft.com/en-us/excel/add-an-index-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F154 · Home, Split Column, By Delimiter
- **Claim:** To split a text column at a character such as a comma or a dash, choose Home, Split Column, By Delimiter, and pick or type the delimiter.
- **Source:** Microsoft Support, "Split a column of text (Power Query)": https://support.microsoft.com/en-us/excel/split-a-column-of-text-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F155 · Split at the left-most, right-most or each
- **Claim:** You choose whether to split at the left-most delimiter, the right-most one, or each occurrence; three delimiters split each time give four columns.
- **Source:** Microsoft Support, "Split a column of text (Power Query)": https://support.microsoft.com/en-us/excel/split-a-column-of-text-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F156 · New columns are named with .1, .2
- **Claim:** The new columns take the original column's name with a full stop and a number, such as Name.1 and Name.2, and you can rename them.
- **Source:** Microsoft Support, "Split a column of text (Power Query)": https://support.microsoft.com/en-us/excel/split-a-column-of-text-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F157 · Split copies, not the original
- **Claim:** To avoid refresh errors, Microsoft advises splitting or merging copies of the original columns rather than the originals.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F158 · Split by Number of Characters
- **Claim:** Home, Split Column, By Number of Characters splits text after a set number of characters, once from the left, once from the right, or repeatedly.
- **Source:** Microsoft Support, "Split a column of text (Power Query)": https://support.microsoft.com/en-us/excel/split-a-column-of-text-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F159 · Repeatedly: 25 characters by 5 makes five columns
- **Claim:** With Repeatedly, a 25-character value split every 5 characters becomes five columns of 5 characters each.
- **Source:** Microsoft Support, "Split a column of text (Power Query)": https://support.microsoft.com/en-us/excel/split-a-column-of-text-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F160 · Split by Positions
- **Claim:** Split Column, By Positions splits at the character positions you list, for codes whose parts are different lengths.
- **Source:** Microsoft Support, "Split a column of text (Power Query)": https://support.microsoft.com/en-us/excel/split-a-column-of-text-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F161 · Extract: before, after or between a delimiter
- **Claim:** The Extract menu offers Length, First Characters, Last Characters, Range, Text before Delimiter, Text after Delimiter and Text between Delimiters; on the Transform tab it changes the column, on Add Column it adds a new one.
- **Source:** Microsoft Support, "Add a column based on a data type (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-based-on-a-data-type-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F162 · Transform, Merge Columns with a separator
- **Claim:** Select two or more columns and choose Transform, Merge Columns, then pick or type a separator to go between the values.
- **Source:** Microsoft Support, "Merge columns (Power Query)": https://support.microsoft.com/en-us/excel/merge-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F163 · The click order sets the order
- **Claim:** The order you select the columns in is the order their values appear in the merged column.
- **Source:** Microsoft Support, "Merge columns (Power Query)": https://support.microsoft.com/en-us/excel/merge-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F164 · Merge Columns replaces the originals
- **Claim:** Merging on the Transform tab replaces the chosen columns with one column called Merged; Microsoft suggests keeping the originals and making a new column instead, to avoid refresh errors later.
- **Source:** Microsoft Support, "Merge columns (Power Query)": https://support.microsoft.com/en-us/excel/merge-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F165 · Only text columns merge
- **Claim:** Only columns of the Text kind can be merged, so change other columns to Text first.
- **Source:** Microsoft Support, "Merge columns (Power Query)": https://support.microsoft.com/en-us/excel/merge-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F166 · & joins values, as in Excel
- **Claim:** In a custom column formula, the & sign joins values together, the same way it does in Excel.
- **Source:** Microsoft Support, "Merge columns (Power Query)": https://support.microsoft.com/en-us/excel/merge-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F167 · Column From Examples
- **Claim:** Add Column, Column From Examples lets you type the result you want in a new column and Power Query works out the steps; it's for when you know the result but not the commands.
- **Source:** Microsoft Support, "Add a column from an example (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-from-an-example-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F168 · From All Columns or From Selection
- **Claim:** Column From Examples can work from all columns or only from the columns you've selected; type an example and press Ctrl+Enter to see it filled in.
- **Source:** Microsoft Support, "Add a column from an example (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-from-an-example-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F169 · Examples are checked on the top 100 rows
- **Claim:** Column From Examples bases its guess on the top 100 rows of the preview, so check the result on the rest of the data.
- **Source:** Microsoft Support, "Add a column from an example (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-from-an-example-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F170 · You may need several tries
- **Claim:** Microsoft says you sometimes need to give several examples before you get the result you want.
- **Source:** Microsoft Support, "Add a column from an example (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-from-an-example-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F171 · The formula shows above the preview
- **Claim:** When Power Query finds a rule that fits your examples, it fills the other rows and shows the formula above the preview, and selecting OK adds a step.
- **Source:** Microsoft Learn, "Add a column from examples": https://learn.microsoft.com/en-us/power-query/column-from-example
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F172 · Add Column, Custom Column
- **Claim:** Add Column, Custom Column opens a box where you name the new column and write its formula, inserting columns from the Available Columns list.
- **Source:** Microsoft Support, "Add a custom column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-custom-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F173 · Column names go in square brackets
- **Claim:** In a custom column formula, column names go in square brackets, as in [UnitPrice] * [Quantity] to multiply two columns.
- **Source:** Microsoft Support, "Add a custom column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-custom-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F174 · The formula uses M, not sheet formulas
- **Claim:** A custom column's formula is written in the Power Query M formula language, not as an Excel worksheet formula.
- **Source:** Microsoft Learn, "Add a custom column": https://learn.microsoft.com/en-us/power-query/add-custom-column
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F175 · M is case-sensitive
- **Claim:** The M language is case-sensitive, so capitals in names must match exactly.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/en-us/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F176 · Set the kind of data after a custom column
- **Claim:** After adding a custom column, check its kind of data; if the heading shows the Any icon, set the kind you want.
- **Source:** Microsoft Support, "Add a custom column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-custom-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F177 · Add Column, Conditional Column
- **Claim:** Add Column, Conditional Column builds an if-then-else rule from boxes (column, operator, value, output), so you don't write the formula yourself.
- **Source:** Microsoft Support, "Add a conditional column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-conditional-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F178 · Add Clause and a final Else
- **Claim:** Add Clause adds more rules, and you can give a final Else value for rows that match none of them.
- **Source:** Microsoft Support, "Add a conditional column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-conditional-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F179 · Rules are tested top to bottom
- **Claim:** The rules in a conditional column are tested in order, from top to bottom.
- **Source:** Microsoft Learn, "Add a conditional column": https://learn.microsoft.com/en-us/power-query/add-conditional-column
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F180 · A conditional column has no kind of data yet
- **Claim:** A new conditional column doesn't have a kind of data set, so you set it yourself afterwards.
- **Source:** Microsoft Support, "Add a conditional column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-conditional-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F181 · Add Column, Date, Month, Name of Month
- **Claim:** Add Column, Date, Month, Name of Month adds a column with the month's name from a date column.
- **Source:** Microsoft Support, "Add a column based on a data type (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-based-on-a-data-type-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F182 · Year, Month, Quarter and more
- **Claim:** The Add Column, Date menu includes Year, Month, Name of Month, Quarter of Year and Week of Year, among others.
- **Source:** Microsoft Support, "Add a column based on a data type (Power Query)": https://support.microsoft.com/en-us/excel/add-a-column-based-on-a-data-type-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F183 · Month as a number from 1 to 12
- **Claim:** Date.Month gives the month as a number from 1 to 12, such as 4 for April, rather than its name.
- **Source:** Microsoft Support, "Add a custom column (Power Query)": https://support.microsoft.com/en-us/excel/add-a-custom-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F184 · Unpivot puts similar values in one column
- **Claim:** Unpivoting, sometimes called flattening, turns columns such as months into rows so that all the similar values sit in one column, the shape a chart or report needs.
- **Source:** Microsoft Support, "Unpivot columns (Power Query)": https://support.microsoft.com/en-us/excel/unpivot-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F185 · Transform, Unpivot Columns
- **Claim:** Select the columns to turn into rows and choose Transform, Unpivot Columns.
- **Source:** Microsoft Support, "Unpivot columns (Power Query)": https://support.microsoft.com/en-us/excel/unpivot-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F186 · The result is Attribute and Value
- **Claim:** Unpivoting always makes two columns: Attribute, holding the old column headings, and Value, holding the numbers that were under them.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/en-us/power-query/unpivot-column
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F187 · Unpivot Other Columns picks up new months
- **Claim:** Unpivot Other Columns unpivots every column you didn't select, so columns added to the source later are unpivoted on refresh too.
- **Source:** Microsoft Support, "Unpivot columns (Power Query)": https://support.microsoft.com/en-us/excel/unpivot-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F188 · Unpivot Only Selected Columns
- **Claim:** Unpivot Only Selected Columns keeps the unpivot to the columns you chose, even if the source gains columns later.
- **Source:** Microsoft Support, "Unpivot columns (Power Query)": https://support.microsoft.com/en-us/excel/unpivot-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F189 · Transform, Pivot Column
- **Claim:** Select the column whose values should become headings, choose Transform, Pivot Column, and pick the Values Column that fills the grid.
- **Source:** Microsoft Support, "Pivot columns (Power Query)": https://support.microsoft.com/en-us/excel/pivot-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F190 · Pivot sums or counts where several rows meet
- **Claim:** Under Advanced options you choose how values that meet in one cell are combined: Don't aggregate, Count (all), Count (not blank), Minimum, Maximum, Median, Sum or Average.
- **Source:** Microsoft Support, "Pivot columns (Power Query)": https://support.microsoft.com/en-us/excel/pivot-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F191 · Don't aggregate fails with several values
- **Claim:** With Don't aggregate, Power Query shows an error when more than one value meets in a cell, and that can start happening only after a later refresh changes the data.
- **Source:** Microsoft Support, "Pivot columns (Power Query)": https://support.microsoft.com/en-us/excel/pivot-columns-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F192 · Transpose turns the table 90 degrees
- **Claim:** Transform, Transpose turns rows into columns and columns into rows.
- **Source:** Microsoft Learn, "Transpose a table": https://learn.microsoft.com/en-us/power-query/transpose-table
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F193 · Transpose loses the headings
- **Claim:** Transposing keeps only the table's contents, so the old headings are lost and the new columns are called Column1, Column2 and so on; you then promote the first row to headings.
- **Source:** Microsoft Learn, "Transpose a table": https://learn.microsoft.com/en-us/power-query/transpose-table
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F194 · Home, Group By
- **Claim:** Home, Group By collapses rows with the same value into one row; Advanced lets you group by more than one column.
- **Source:** Microsoft Support, "Group rows of data (Power Query)": https://support.microsoft.com/en-us/excel/group-rows-of-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F195 · Group By operations
- **Claim:** For each group you can work out Sum, Average, Median, Min, Max, Count Rows or Count Distinct Rows.
- **Source:** Microsoft Support, "Group rows of data (Power Query)": https://support.microsoft.com/en-us/excel/group-rows-of-data-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F196 · Group By is on Home and Transform
- **Claim:** Group By is on the Home tab and also on the Transform tab.
- **Source:** Microsoft Learn, "Grouping or summarizing rows": https://learn.microsoft.com/en-us/power-query/group-by
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F197 · Append adds rows; merge joins on a column
- **Claim:** Append adds the rows of one table under another; to bring tables together by matching values in a column, you use Merge instead.
- **Source:** Microsoft Support, "Append queries (Power Query)": https://support.microsoft.com/en-us/excel/append-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F198 · Two ways to combine queries
- **Claim:** Power Query combines queries in two ways: Merge, which joins two queries on a shared column, and Append, which puts all the rows of one query after the rows of another.
- **Source:** Microsoft Support, "Combine multiple queries (Power Query)": https://support.microsoft.com/en-us/excel/combine-multiple-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F199 · Home, Append Queries
- **Claim:** Home, Append Queries adds another table's rows to the current query; Append Queries as New puts the result in a new query instead.
- **Source:** Microsoft Support, "Append queries (Power Query)": https://support.microsoft.com/en-us/excel/append-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F200 · Append matches columns by name
- **Claim:** Append lines up columns by their headings, not their position, and a column missing from one table is filled with null for that table's rows.
- **Source:** Microsoft Support, "Append queries (Power Query)": https://support.microsoft.com/en-us/excel/append-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F201 · Two tables, or three or more
- **Claim:** The Append dialog box has Two tables, and Three or more tables for adding a longer list in the order you set.
- **Source:** Microsoft Support, "Append queries (Power Query)": https://support.microsoft.com/en-us/excel/append-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F202 · Home, Merge Queries
- **Claim:** Home, Merge Queries joins another table to the current query; Merge Queries as New puts the result in a new query.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F203 · Pick the matching column in each table
- **Claim:** In the Merge dialog box you pick the first table and its matching column, then the second table and its matching column; the matching columns must be the same kind of data.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F204 · The dialog shows how many rows match
- **Claim:** After you pick the columns, the Merge dialog box shows how many rows match, so you can check before selecting OK.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F205 · Expand the new column to bring in fields
- **Claim:** A merge adds one column holding the matching rows from the second table; the expand icon on its heading lets you choose which of its columns to bring in.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F206 · Untick the prefix option
- **Claim:** When expanding, Microsoft's example leaves Use original column name as prefix unticked, so the new column keeps its plain name.
- **Source:** Microsoft Learn, "Left outer join": https://learn.microsoft.com/en-us/power-query/merge-queries-left-outer
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F207 · The join kinds
- **Claim:** The join kinds are: left outer (all rows of the first table, matches from the second), right outer, full outer (all rows of both), inner (only matching rows), left anti and right anti (only rows with no match).
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/en-us/power-query/merge-queries-overview
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F208 · Inner keeps only matches
- **Claim:** An inner join brings in only the rows that match in both tables.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F209 · Left outer keeps every first-table row
- **Claim:** A left outer join keeps every row of the first table and brings in the matching rows from the second.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F210 · Left anti shows rows with no match
- **Claim:** A left anti join brings in only the rows of the first table that have no match in the second, which is a way to find rows that didn't match.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F211 · No match gives null
- **Claim:** In a left outer join, a row of the first table with no match in the second gets null in the new column.
- **Source:** Microsoft Learn, "Left outer join": https://learn.microsoft.com/en-us/power-query/merge-queries-left-outer
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F212 · Merge brings in a related table's columns
- **Claim:** Merging adds the rows of the related table that match each row, and expanding brings its columns, such as a category, into the main table.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F213 · Learn's lookup example
- **Claim:** Microsoft's left outer join example adds each sale's country name from a Countries table by matching on the country's ID, which works like a lookup.
- **Source:** Microsoft Learn, "Left outer join": https://learn.microsoft.com/en-us/power-query/merge-queries-left-outer
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F214 · Duplicate copies a query
- **Claim:** Duplicate makes a copy of a query with (2) added to its name, and later changes to the original don't affect the copy.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F215 · Reference starts from another query's result
- **Claim:** Reference makes a new query that starts from another query's steps, so changes to the original's output do flow through to it.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F216 · Right-click a query for Duplicate or Reference
- **Claim:** Duplicate and Reference are on the right-click menu of a query in Queries & Connections or in the editor's Queries pane.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F217 · Split a long query with references
- **Claim:** Microsoft suggests splitting a long query into smaller queries that reference each other, to make it easier to follow.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/en-us/power-query/best-practices
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F218 · Status bar and Count Rows to check
- **Claim:** To check how many rows a combined query has, Transform, Count Rows gives the actual row count.
- **Source:** Microsoft Support, "Profile data to view statistics (Power Query)": https://support.microsoft.com/en-us/excel/profile-data-to-view-statistics-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F219 · Inner join's match message
- **Claim:** Microsoft points to the message at the bottom of the Merge dialog box, which says how many rows match, as the key to understanding the result.
- **Source:** Microsoft Learn, "Inner join": https://learn.microsoft.com/en-us/power-query/merge-queries-inner
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F220 · Query, Refresh on the sheet
- **Claim:** To refresh one query's result, select a cell in it and choose Query, Refresh on the ribbon; the sheet and the query are both brought up to date from the source.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F221 · Refreshing in the editor doesn't update the sheet
- **Claim:** Refresh Preview inside the Power Query Editor updates the preview but not the result on the worksheet.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F222 · An open source file isn't refreshed until saved
- **Claim:** If the source workbook, text or CSV file is open, changes in it aren't picked up by a refresh until the file has been saved, and an open file may be locked.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F223 · Edit the right sheet when refreshing a table
- **Claim:** When a query reads a table in the same workbook, make your changes on the sheet with the original table, not the sheet with the loaded result; Microsoft suggests naming the sheets so the two are easy to tell apart.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F224 · Refresh data when opening the file
- **Claim:** In Queries & Connections, right-click the query and choose Properties; on the Usage tab, under Refresh control, tick Refresh data when opening the file.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F225 · Refresh every set number of minutes
- **Claim:** The same Usage tab has a Refresh every box for refreshing automatically every set number of minutes.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F226 · Big sources take longer to refresh
- **Claim:** Refreshing from a large data source can take longer than you expect, and Microsoft suggests a background refresh so you can keep working.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F227 · No background refresh for the Data Model
- **Claim:** A query that loads to the Data Model can't be refreshed in the background.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F228 · View, Query Dependencies
- **Claim:** In the Power Query Editor, View, Query Dependencies draws which queries feed which, and Layout at the bottom changes the diagram's direction.
- **Source:** Microsoft Support, "Merge queries (Power Query)": https://support.microsoft.com/en-us/excel/merge-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F229 · A referenced query follows its original
- **Claim:** Changes to a query flow down to any query that references it.
- **Source:** Microsoft Learn, "Using the Queries pane": https://learn.microsoft.com/en-us/power-query/queries-pane
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F230 · Tell the owners of a source you rely on it
- **Claim:** If another team manages your data source, Microsoft advises making sure they know you depend on it, so they avoid changes that break your queries.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F231 · Rename a step
- **Claim:** To rename a step, right-click it in Applied Steps and choose Rename, then type the new name.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F232 · Step Properties: name and description
- **Claim:** Right-click a step and choose Properties to change its name and add a description; a step with a description shows a small icon you can hover over.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F233 · Rename a query
- **Claim:** Rename on a query's right-click menu changes the query's name.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F234 · Group queries into folders
- **Claim:** Move To Group puts queries into named groups, such as Budget or Marketing, to keep many queries in order.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F235 · Edit Settings with the gear icon
- **Claim:** Edit Settings on a step's right-click menu, or the gear icon beside it, reopens that step's settings; it's greyed out for steps with no settings.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F236 · Changing an earlier step can affect later ones
- **Claim:** Changing an earlier step in Applied Steps can affect the steps after it, so refresh the preview to check your fix.
- **Source:** Microsoft Support, "Rename a column (Power Query)": https://support.microsoft.com/en-us/excel/rename-a-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F237 · Delete Until End
- **Claim:** Delete Until End on a step's right-click menu removes that step and every step after it.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F238 · Insert step after and move steps
- **Claim:** You can add a step in the middle with Insert step after, and move steps with Move before, Move after, or by dragging.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F239 · Experiment on a copy
- **Claim:** If you're not sure a change is safe, Microsoft suggests copying the query and trying it there, deleting the step if it doesn't work.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F240 · Step errors stop the load
- **Claim:** An error in a step stops the query from loading and shows the error in a yellow bar.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F241 · Read the reason, message and detail
- **Claim:** Microsoft recommends reading the error's reason, message and detail to understand what went wrong.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F242 · Errors show on a yellow background
- **Claim:** To find the cause, open the query and look at each step's errors, which Power Query shows on a yellow background.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F243 · Go To Error
- **Claim:** The yellow message box has Go To Error, which takes you to the step that failed.
- **Source:** Microsoft Support, "Rename a column (Power Query)": https://support.microsoft.com/en-us/excel/rename-a-column-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F244 · The column of the table wasn't found
- **Claim:** The error saying a column of the table wasn't found usually means a step refers to a column name that's no longer there.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F245 · Remove the rename step if the source already fixed it
- **Claim:** In Microsoft's example the source file's heading was changed to the name the query used to give it, so deleting the rename step fixes the error.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F246 · Renamed source headings cause refresh problems
- **Claim:** Changing table or column names in the source almost always causes problems on refresh, because queries rely on those names in nearly every step.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F247 · Can't find the source
- **Claim:** The DataSource.NotFound error usually means the source can't be reached, for example because it was moved somewhere else.
- **Source:** Microsoft Learn, "Dealing with errors": https://learn.microsoft.com/en-us/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F248 · Data Source Settings, Change Source
- **Claim:** Data, Get Data, Data Source Settings lists the workbook's data sources, with a Change Source button to point a query at the file's new location.
- **Source:** Microsoft Support, "Manage data source settings and permissions (Power Query)": https://support.microsoft.com/en-us/excel/manage-data-source-settings-and-permissions-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F249 · Mac: Change File Path
- **Claim:** On a Mac, Data, the arrow next to Get Data, Data Source Settings, then Change File Path points the query at the new location.
- **Source:** Microsoft Support, "Import and shape data in Excel for Mac (Power Query)": https://support.microsoft.com/en-us/excel/import-and-shape-data-in-excel-for-mac-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F250 · Moved files are a common refresh error
- **Claim:** A file that has been moved is one of the common causes of a refresh error, and a common message says the file couldn't be found.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F251 · Parameters can hold a file path
- **Claim:** A Power Query parameter can be used in any step, including to hold a file path or a server name.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F252 · Home, Manage Parameters, New Parameter
- **Claim:** To make a parameter, open the Power Query Editor and choose Home, Manage Parameters, New Parameter.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F253 · A parameter is saved as its own query
- **Claim:** A parameter is saved in its own small query, separate from the queries that use it, and you change its value instead of editing each query.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F254 · A parameter for a folder that moves
- **Claim:** Microsoft's example uses a parameter for the folder a folder query reads, so it can be switched between two folders.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F255 · Parameters future-proof a location
- **Claim:** Microsoft suggests query parameters as a way to cope when a data location changes, such as a folder path, file name or web address.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F256 · Replace may stop working after refresh
- **Claim:** A Replace Values step may stop doing what you meant if the value it looks for changes or disappears in the source.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F257 · Load to a PivotTable from the load options
- **Claim:** Load to lets you send a query's result to a table, a PivotTable or PivotChart, a new or existing sheet, or only a connection, and you can also add it to the Data Model.
- **Source:** Microsoft Support, "Import or export text (.txt or .csv) files": https://support.microsoft.com/en-us/excel/get-started/import-or-export-text-txt-or-csv-files
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F258 · Power Query then PivotTables
- **Claim:** Microsoft describes Power Query as the recommended way to bring data in, so you can then explore it in PivotTables and PivotCharts.
- **Source:** Microsoft Support, "How Power Query and Power Pivot work together": https://support.microsoft.com/en-us/excel/how-power-query-and-power-pivot-work-together
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F259 · Refreshing a PivotTable built on a query
- **Claim:** To refresh a PivotTable, select anywhere in it to show the PivotTable Analyze tab, then choose Refresh or Refresh All.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F260 · The Data Model holds tables inside the workbook
- **Claim:** A Data Model brings several tables together inside an Excel workbook and supplies the data PivotTables and PivotCharts use.
- **Source:** Microsoft Support, "Create a Data Model in Excel": https://support.microsoft.com/en-us/excel/create-a-data-model-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F261 · Tick Add this data to the Data Model
- **Claim:** To load to the Data Model, choose Close & Load To and tick Add this data to the Data Model in the Import Data dialog box.
- **Source:** Microsoft Support, "Create, load, or edit a query in Excel (Power Query)": https://support.microsoft.com/en-us/excel/create-load-or-edit-a-query-in-excel-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F262 · The Data Model is used through the Field List
- **Claim:** You usually work with the Data Model through the PivotTable Field List, where it shows up as a set of tables.
- **Source:** Microsoft Support, "Create a Data Model in Excel": https://support.microsoft.com/en-us/excel/create-a-data-model-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F263 · Data Model: tables, not plain ranges
- **Claim:** Microsoft says your data should be in tables, not plain cell ranges, so it can be loaded into the Data Model and related correctly.
- **Source:** Microsoft Support, "Create a Data Model in Excel": https://support.microsoft.com/en-us/excel/create-a-data-model-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F264 · Power Pivot works on the Data Model
- **Claim:** Power Query gets data into worksheets or the Data Model, and Power Pivot is where you build on the Data Model, for example with relationships between tables.
- **Source:** Microsoft Support, "How Power Query and Power Pivot work together": https://support.microsoft.com/en-us/excel/how-power-query-and-power-pivot-work-together
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F265 · Everything in a query is written in M
- **Claim:** Power Query's language is called M, and everything a query does is written in M behind the scenes.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F266 · Each step's formula is in the formula bar
- **Claim:** Each action in the Power Query Editor shows its formula in the formula bar, which you turn on with View, Formula Bar. (This page is about Power BI Desktop, which uses the same editor.)
- **Source:** Microsoft Learn, "Perform common query tasks in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-common-query-tasks
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F267 · See a whole long formula with the arrow
- **Claim:** The arrow at the right of the formula bar opens it out to show the whole formula.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F268 · Changed Type's formula
- **Claim:** The automatic Changed Type step shows a formula that lists each column with its kind of data, using Table.TransformColumnTypes.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F269 · View, Advanced Editor
- **Claim:** View, Advanced Editor opens a window with the whole query as code; Done or Cancel closes it.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F270 · Close with Cancel to change nothing
- **Claim:** You can edit code in the Advanced Editor, and the window closes with the Done or Cancel button.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/en-us/power-query/power-query-ui
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F271 · Advanced Editor is also on Home
- **Claim:** In Excel's Power Query Editor, the Advanced Editor is also on the Home tab.
- **Source:** Microsoft Support, "Create a parameter query (Power Query)": https://support.microsoft.com/en-us/excel/create-a-parameter-query-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F272 · Steps can be changed in the Advanced Editor
- **Claim:** Each change you make is recorded as a step, and in the Advanced Editor you can change those steps or write your own in M.
- **Source:** Microsoft Support, "About Power Query in Excel": https://support.microsoft.com/en-us/excel/about-power-query-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F273 · Step names appear in the code
- **Claim:** In the code, each step is named and builds on the step before it by referring to that name.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/en-us/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F274 · Avoid big changes to original columns
- **Claim:** Microsoft's rule of thumb against refresh errors is to avoid big changes to the original columns and to work on a copy of a column instead.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F275 · The automatic kind-of-data steps
- **Claim:** Microsoft notes that the two steps Power Query adds by itself, Promoted Headers and Changed Type, are convenient but that sometimes you'll want to control them yourself.
- **Source:** Microsoft Support, "Handling data source errors (Power Query)": https://support.microsoft.com/en-us/excel/handling-data-source-errors-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F276 · Power Query keeps its own cached copy
- **Claim:** Power Query keeps a local cached copy of the source data and doesn't refresh it by itself; a message saying the preview may be days old means it's out of date.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F277 · Table.NestedJoin defaults to left outer
- **Claim:** Table.NestedJoin, the M function Power Query uses for a merge, does a left outer join when no join kind is given.
- **Source:** Microsoft Learn, "Table.NestedJoin": https://learn.microsoft.com/en-us/powerquery-m/table-nestedjoin
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F278 · Power BI tutorial: Left Outer is the default
- **Claim:** Microsoft's Power BI Desktop tutorial on merging tells the reader to keep the default join kind, Left Outer (all from first, matching from second).
- **Source:** Microsoft Learn, "Shape and combine data in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-shape-and-combine-data
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F279 · Learn calls left outer the default join kind
- **Claim:** A Microsoft Learn article on Power Query merges calls left outer the default join kind in the Merge dialog.
- **Source:** Microsoft Learn, "Optimize Power Query when expanding table columns": https://learn.microsoft.com/en-us/power-query/optimize-expanding-table-columns
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F280 · Refresh one query from the ribbon
- **Claim:** To refresh only the selected data from the ribbon, choose Data, the arrow under Refresh All, then Refresh.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F281 · Keep range of rows counts from row 1
- **Claim:** In Microsoft Learn's Keep range of rows example, entering 6 as the First row removes the rows above row 6 and keeps 8 rows.
- **Source:** Microsoft Learn, "Filter a table by row position": https://learn.microsoft.com/en-us/power-query/filter-row-position
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F282 · Format, Trim under Transform
- **Claim:** Leading and trailing spaces can be removed in the Power Query Editor with Format, Trim on the Transform tab.
- **Source:** Microsoft Learn, "Data types in Power BI": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-data-types
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F283 · Later steps may not keep the sort
- **Claim:** Power Query does not guarantee that a sort survives later steps that group rows, merge queries or remove duplicates.
- **Source:** Microsoft Learn, "Common authoring issues in Power Query": https://learn.microsoft.com/en-us/power-query/common-issues
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F284 · Sort after the other steps
- **Claim:** Microsoft's first suggested fix is to sort after the step that could change the order.
- **Source:** Microsoft Learn, "Common authoring issues in Power Query": https://learn.microsoft.com/en-us/power-query/common-issues
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F285 · One row for each matching pair
- **Claim:** An inner join gives one row for each pair of matching rows, so a key that appears twice in the second table gives two rows for one row of the first.
- **Source:** Microsoft Learn, "JoinKind.Type": https://learn.microsoft.com/en-us/powerquery-m/joinkind-type
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F286 · Expanding can add rows
- **Claim:** Expanding a merged column turns each nested table into rows and columns, so a nested table with several rows becomes several rows.
- **Source:** Microsoft Learn, "Table.ExpandTableColumn": https://learn.microsoft.com/en-us/powerquery-m/table-expandtablecolumn
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F287 · First visit asks how to sign in
- **Claim:** The first time Power Query connects to a web site, it asks for a sign-in method; Anonymous is for a page that needs no credentials.
- **Source:** Microsoft Learn, "Power Query Web connector": https://learn.microsoft.com/en-us/power-query/connectors/web/web
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F288 · Changing pages cause refresh errors
- **Claim:** A web page that loads its content as it goes can make a refresh fail now and then with an error that a column was not found.
- **Source:** Microsoft Learn, "Troubleshooting the Power Query Web connector": https://learn.microsoft.com/en-us/power-query/connectors/web/web-troubleshoot
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F289 · Query commands are on a right-click menu
- **Claim:** The query commands, Refresh among them, appear on the right-click menu of a query on the Queries tab of the Queries & Connections pane.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F290 · Refresh in Queries & Connections
- **Claim:** Refresh in the Queries & Connections pane brings in up-to-date data from the source, and is only offered on that pane, not in the editor.
- **Source:** Microsoft Support, "Manage queries (Power Query)": https://support.microsoft.com/en-us/excel/manage-queries-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F291 · Mac: right-click the table, Refresh
- **Claim:** In Excel for Mac, to refresh one query, right-click its table on the sheet and choose Refresh.
- **Source:** Microsoft Support, "Import and shape data in Excel for Mac (Power Query)": https://support.microsoft.com/en-us/excel/import-and-shape-data-in-excel-for-mac-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F292 · Esc stops a refresh
- **Claim:** Pressing Esc stops a refresh that is running.
- **Source:** Microsoft Support, "Keyboard shortcuts in Excel": https://support.microsoft.com/en-us/accessibility/excel/keyboard-shortcuts-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F293 · Ctrl+Alt+F5 or Refresh All updates everything
- **Claim:** Ctrl+Alt+F5, or Data, Refresh All, updates all the data in the workbook.
- **Source:** Microsoft Support, "Refresh an external data connection in Excel": https://support.microsoft.com/en-us/excel/refresh-an-external-data-connection-in-excel
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F294 · List sheet rows and total
- **Claim:** The List sheet of Corner Shop export.xlsx has 240 sales rows under one heading row, worth 6325 in all.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records list rows: 240 and total_amount: 6325, replayed in Python on 2026-10-15.
- **Kind:** measurement
- **Checked:** 2026-10-15

---

## F295 · Three sources, same rows
- **Claim:** The List sheet, Corner Shop sales.csv and the 12 files in the Monthly folder each give 240 sales rows worth 6325.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records rows: 240 and total_amount: 6325 for list, csv and monthly (files: 12), replayed in Python on 2026-10-15.
- **Kind:** measurement
- **Checked:** 2026-10-15

---

## F296 · North rows and total
- **Claim:** Filtered to North, the clean sales list has 107 rows worth 2756.
- **Source:** My own work: datasets/excel-beginner/answers.json records rows_per_region North: 107 and amount_by_region North: 2756, the same 240 sales, checked on 2026-10-15.
- **Kind:** measurement
- **Checked:** 2026-10-15

---

## F297 · Wide report unpivots to 48 rows
- **Claim:** Unpivoting the Wide sheet (4 regions, 12 month columns) gives 48 rows worth 6325, and January 2025 totals 451.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records wide rows_after_unpivot: 48, total_amount: 6325 and amount_by_month Jan: 451, replayed in Python and in Excel's Power Query engine on 2026-10-15.
- **Kind:** measurement
- **Checked:** 2026-10-15

---

## F298 · January and February appended
- **Claim:** Appending the January (16 rows) and February (15 rows) files gives 31 rows worth 826.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records jan_feb_with_products january_rows: 16, february_rows: 15, appended_rows: 31, appended_amount: 826, replayed in Python on 2026-10-15.
- **Kind:** measurement
- **Checked:** 2026-10-15

---

## F299 · Merging with Products
- **Claim:** Merging those 31 rows with the Products sheet keeps 31 rows with a left outer join, 6 of them Plant with no category; an inner join keeps 25 rows worth 571.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records left_outer_rows: 31, left_outer_rows_with_no_category: 6, inner_rows: 25, inner_amount: 571, replayed in Python on 2026-10-15.
- **Kind:** measurement
- **Checked:** 2026-10-15

---

## F300 · Messy folder cleans to 240 rows
- **Claim:** Combining the 12 files in Monthly messy, after removing 2 top rows and the Total rows, gives 240 rows worth 6325; keeping the Total rows gives 252 rows and 12650.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records monthly_messy rows_after_cleaning: 240, total_after_cleaning: 6325, rows_if_total_rows_are_kept: 252, amount_if_total_rows_are_kept: 12650, replayed in Python and in Excel's Power Query engine on 2026-10-15.
- **Kind:** measurement
- **Checked:** 2026-10-15

---

## F301 · Report sheet cleans to 150 rows
- **Claim:** The Report sheet has 20 product rows once the titles, subtotals, blank rows and Grand total are removed, and unpivoting the months gives 150 rows worth 6325.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records report rows_after_removing_junk: 20, rows_after_unpivot: 150, grand_total: 6325, replayed in Python on 2026-10-15.
- **Kind:** measurement
- **Checked:** 2026-10-15

---

## F302 · Year-end CSV cleans to 240 rows
- **Claim:** Year-end export.csv has 243 sale lines, 3 of them repeats (S0039, S0056, S0067), and cleans to 240 rows worth 6325, North 2756, South 1256, East 839, West 1474.
- **Source:** My own work: datasets/excel-power-query/make.py writes the file from the 240 beginner sales, and answers.json records year_end_csv sale_lines_with_duplicates: 243, rows_after_cleaning: 240, total_after_cleaning: 6325, replayed in Python on 2026-10-15; the semicolon split was checked in Excel's Power Query engine.
- **Kind:** measurement
- **Checked:** 2026-10-15

---

## F303 · Power Query is also in Power BI Desktop
- **Claim:** The desktop version of Power Query is in Excel and in Power BI Desktop.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F304 · Same editor online and on the desktop
- **Claim:** The online and desktop versions of Power Query share the same core editor and transformations, though connectors and other options differ by product.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F305 · Power BI can refresh on a schedule
- **Claim:** Queries can be refreshed by hand, on a schedule in products such as Power BI, or by code through the Excel object model.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/en-us/power-query/power-query-what-is-power-query
- **Kind:** reference
- **Checked:** 2026-10-15

---

## F306 · Whole Number is a kind of data
- **Claim:** Whole Number is one of the kinds of data in Power Query, for numbers with no decimal part; the list also has Decimal number, Text and Date.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Kind:** reference
- **Checked:** 2026-10-19

---

## F307 · Day-first dates: English (United Kingdom)
- **Claim:** In Microsoft's example of day/month/year dates read wrongly as month/day/year, the locale to pick in the Change Type with Locale dialog box is English (United Kingdom).
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/en-us/power-query/data-types
- **Kind:** reference
- **Checked:** 2026-10-19

---

## F308 · Export sheet opens with the title as heading
- **Claim:** Opened from the Export sheet of Corner Shop export.xlsx, Power Query promotes the title, Corner Shop sales export, as the first column's heading; the real headings sit in the third row of the preview, and the status bar shows 254 rows.
- **Source:** My own work: the Export sheet opened with Get Data, From Excel Workbook and Transform Data in Excel 16 (build 20430), captured by script on 2026-10-22; the same steps replayed in Excel's Power Query engine give 254 rows.
- **Kind:** measurement
- **Checked:** 2026-10-22

---

## F309 · Export sheet cleans to 240 rows
- **Claim:** Cleaning the Export sheet (remove the top 2 rows, use the first row as headers, remove blank rows, remove the bottom row, fill down Region, trim, replace Nrth, capitalise Product, remove the pound sign, change Amount to a number, remove duplicates on Sale ID) gives 240 rows worth 6325: 6 blank rows and 4 repeated sales go, and no errors are left.
- **Source:** My own work: the steps replayed as M in Excel 16's Power Query engine on 2026-10-22, matching answers.json (export rows_after_cleaning 240, total_after_cleaning 6325).
- **Kind:** measurement
- **Checked:** 2026-10-22

---

## F310 · Clean every file in Transform Sample file
- **Claim:** When files in a folder each have extra rows above the headings, you remove them in the Transform Sample file query, and each step there is applied to every file in the folder before they are combined.
- **Source:** Microsoft Learn, "Combine CSV files": https://learn.microsoft.com/power-query/combine-files-csv
- **Kind:** reference
- **Checked:** 2026-10-23

---

## F311 · Check the combined query's last step
- **Claim:** If your changes to the Transform Sample file query change the column names or kinds, check the last step of the combined query: a Changed Type step there can give an error.
- **Source:** Microsoft Learn, "Combine files overview": https://learn.microsoft.com/power-query/combine-files-overview
- **Kind:** reference
- **Checked:** 2026-10-23

---
