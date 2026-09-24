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

## R1 · Power Query is a data preparation engine
- **Claim:** Power Query is a data transformation and data preparation engine, with a graphical interface for getting data from sources and an editor for applying transformations.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/power-query/power-query-what-is-power-query
- **Quote:** "Power Query is a data transformation and data preparation engine."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Power Query Is Not DAX, and Not Excel
- **Status:** accepted as F1, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R2 · M is Power Query's language
- **Claim:** M is the data transformation language of Power Query, and everything a query does is ultimately written in M.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/power-query/power-query-what-is-power-query
- **Quote:** "The M language is the data transformation language of Power Query. Anything that happens in the query is ultimately written in M."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Power Query Is Not DAX, and Not Excel
- **Status:** accepted as F2, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R3 · DAX is a formula expression language
- **Claim:** DAX is a formula expression language, and the same language is used by Analysis Services, Power BI and Power Pivot in Excel.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Quote:** "Data Analysis Expressions (DAX) is a formula expression language used in Analysis Services, Power BI, and Power Pivot in Excel."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Power Query Is Not DAX, and Not Excel
- **Status:** accepted as F3, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R4 · A Power Query custom column runs before the model
- **Claim:** A custom column written in Power Query is defined before the data enters the model, where a DAX calculated column is built on data already in it.
- **Source:** Microsoft Learn, "Use calculation options in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-calculations-options
- **Quote:** "custom columns are defined in Power Query before the data enters the model"
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Power Query Is Not DAX, and Not Excel
- **Status:** accepted as F4, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R5 · A measure is worked out when it is needed
- **Claim:** A DAX measure is calculated when it is needed and responds to what the reader selects in the report, and its results are not precalculated or stored on disk.
- **Source:** Microsoft Learn, "Use calculation options in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-calculations-options
- **Quote:** "Measures are calculated as needed and are responsive to the selections the user makes in the report. The results of measures aren't precalculated or stored on disk."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Power Query Is Not DAX, and Not Excel
- **Status:** accepted as F5, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R6 · DAX works on columns, not cells
- **Claim:** In a tabular model, formulas work only with tables and columns, not with individual cells, ranges or arrays as an Excel worksheet formula does.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Quote:** "Formulas work only with tables and columns, not with individual cells, range references, or arrays."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Power Query Is Not DAX, and Not Excel
- **Status:** accepted as F6, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R7 · Transform data opens the editor
- **Claim:** In Power BI Desktop, the Power Query Editor is opened by selecting Transform data on the Home tab.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Quote:** "To get to Power Query Editor, select Transform data from the Home tab of Power BI Desktop."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** A Tour of the Power Query Editor
- **Status:** accepted as F7, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R8 · The editor has four areas in Power BI Desktop
- **Claim:** The Power BI Desktop documentation describes the Power Query Editor as four areas: the ribbon, the Queries pane, the Table view, and the Query Settings pane.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Quote:** "Each of these four areas are explained later: the ribbon, the Queries pane, the Table view, and the Query Settings pane."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** A Tour of the Power Query Editor
- **Status:** accepted as F8, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R9 · Query Settings holds properties and applied steps
- **Claim:** The Query Settings pane lists the selected query's properties and its applied steps.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Quote:** "The Query Settings pane appears, listing the query's properties and applied steps."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** A Tour of the Power Query Editor
- **Status:** accepted as F9, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R10 · The preview is capped at 1000 rows
- **Claim:** When Power Query imports data it caches up to 1000 rows of preview data for each query, so what the editor shows is a preview rather than the whole table.
- **Source:** Microsoft Learn, "Disable Power Query background refresh": https://learn.microsoft.com/power-bi/guidance/power-query-background-refresh
- **Quote:** "when Power Query imports data, it also caches up to 1000 rows of preview data for each query"
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** A Tour of the Power Query Editor
- **Status:** accepted as F10, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R11 · The Power Query docs count five components
- **Claim:** The cross-product Power Query documentation counts five components of the editor rather than four, adding the status bar to the ribbon, Queries pane, current view and Query settings.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/power-query/power-query-ui
- **Quote:** "The Power Query user interface has five distinct components."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** A Tour of the Power Query Editor
- **Status:** accepted as F11, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R12 · Every transformation shows up as a step
- **Claim:** The Applied steps list is part of the Query settings pane, and any transformation made to the data is shown in it.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/power-query/applied-steps
- **Quote:** "The Applied steps list is part of the Query settings pane in Power Query. Any transformations to your data are displayed in the Applied steps list."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Applied Steps: A Recipe, Not an Edit
- **Status:** accepted as F12, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R13 · Selecting a step shows the data at that step
- **Claim:** Selecting a step in the list shows the result of that step, so the data can be seen as it was at any point in the query.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/power-query/applied-steps
- **Quote:** "Selecting any step displays the results of that particular step, so you can see exactly how your data changes as you add steps to the query."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Applied Steps: A Recipe, Not an Edit
- **Status:** accepted as F13, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R14 · Steps are recorded, and the source is not changed
- **Claim:** Power Query records transformations as query steps and applies them when the query runs, and it does not modify the source data.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/power-query/power-query-what-is-power-query
- **Quote:** "Power Query records transformations as query steps and applies them when the query runs; it doesn't modify the source data."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Applied Steps: A Recipe, Not an Edit
- **Status:** accepted as F14, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R15 · Steps can be renamed, deleted and reordered
- **Claim:** Steps can be renamed, deleted or reordered from the Query Settings pane.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Quote:** "In the Query Settings pane, you can rename steps, delete steps, or reorder the steps as you see fit."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Applied Steps: A Recipe, Not an Edit
- **Status:** accepted as F15, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R16 · Steps run in the order they appear
- **Claim:** Every step of a query runs in the order it appears in the Applied Steps pane.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Quote:** "All query steps are carried out in the order they appear in the Applied Steps pane."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Applied Steps: A Recipe, Not an Edit
- **Status:** accepted as F16, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R17 · Delete until end removes a step and everything after it
- **Claim:** Deleting a step with Delete until end removes the selected step and all the steps that follow it.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/power-query/applied-steps
- **Quote:** "This action deletes the selected step and all the subsequent steps."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Applied Steps: A Recipe, Not an Edit
- **Status:** accepted as F17, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R18 · Close & Apply applies and closes
- **Claim:** Close & Apply applies the changes made in the Power Query Editor and closes it.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Quote:** "This action applies the changes and closes the editor."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Close and Apply: What Loads and What Doesn't
- **Status:** accepted as F18, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R19 · The load command differs by product
- **Claim:** The command that saves and loads the result is Close & Load in Excel, Close & Apply in Power BI Desktop, and Save & close in Power Query Online.
- **Source:** Microsoft Learn, "Power Query get data experience overview": https://learn.microsoft.com/power-query/get-data-experience
- **Quote:** "Close & Load in Excel, Close & Apply in Power BI Desktop, Save & close in Power Query Online"
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Close and Apply: What Loads and What Doesn't
- **Status:** accepted as F19, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R20 · Some queries are only intermediate steps
- **Claim:** Some queries are not worth loading into Power BI Desktop because they are intermediate steps, even though the transformations still need them to work.
- **Source:** Microsoft Learn, "Managing query refresh in Power BI": https://learn.microsoft.com/power-bi/connect-data/refresh-include-in-report-refresh
- **Quote:** "some queries aren't relevant to load into Power BI Desktop because they're intermediate steps, while they're still required for your data transformations to work correctly"
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Close and Apply: What Loads and What Doesn't
- **Status:** accepted as F20, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R21 · Enable load keeps a query out of the model
- **Claim:** A query is kept out of Power BI Desktop by unselecting Enable load in the query's context menu in Power Query Editor, or in its Properties screen.
- **Source:** Microsoft Learn, "Managing query refresh in Power BI": https://learn.microsoft.com/power-bi/connect-data/refresh-include-in-report-refresh
- **Quote:** "Unselect Enable load in the context menu of the query in Power Query Editor"
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Close and Apply: What Loads and What Doesn't
- **Status:** accepted as F21, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R22 · Include in report refresh is a separate setting
- **Claim:** A query can also be left out of the report's refresh by unselecting Include in report refresh, which is a separate setting from Enable load.
- **Source:** Microsoft Learn, "Managing query refresh in Power BI": https://learn.microsoft.com/power-bi/connect-data/refresh-include-in-report-refresh
- **Quote:** "you can exclude queries from being refreshed when the report is refreshed"
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Close and Apply: What Loads and What Doesn't
- **Status:** accepted as F22, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R23 · Connecting to a workbook needs its file path
- **Claim:** To connect to an Excel file, Power Query needs the file path that finds the file.
- **Source:** Microsoft Learn, "Power Query get data experience overview": https://learn.microsoft.com/power-query/get-data-experience
- **Quote:** "when trying to connect to an Excel file, Power Query requires that you use the file path to find the file you want to connect to"
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Connecting to Excel and CSV
- **Status:** accepted as F23, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R24 · A CSV file is not an Excel file
- **Claim:** A CSV file opens in Excel but is not an Excel file, and Power Query has a separate Text/CSV connector for it.
- **Source:** Microsoft Learn, "Excel" connector: https://learn.microsoft.com/power-query/connectors/excel
- **Quote:** "Even though CSV files can be opened in Excel, they're not Excel files. Use the Text/CSV connector instead."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Connecting to Excel and CSV
- **Status:** accepted as F24, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R25 · The navigator suggests tables inside a sheet
- **Claim:** When a workbook does not hold one single table, the Navigator works out a list of suggested tables from the layout of the sheet and offers them alongside the whole sheet.
- **Source:** Microsoft Learn, "Excel" connector: https://learn.microsoft.com/power-query/connectors/excel
- **Quote:** "If you connect to an Excel Workbook that doesn't specifically contain a single table, the Power Query navigator attempts to create a suggested list of tables that you can choose from."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Connecting to Excel and CSV
- **Status:** accepted as F25, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R26 · Choosing the whole sheet fills blank cells with null
- **Claim:** Choosing the entire sheet in the Navigator shows the workbook as it looked in Excel, with every blank cell filled with null.
- **Source:** Microsoft Learn, "Excel" connector: https://learn.microsoft.com/power-query/connectors/excel
- **Quote:** "If you select the entire sheet in the navigator, the workbook is displayed as it appeared in Excel, with all of the blank cells filled with null."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Connecting to Excel and CSV
- **Status:** accepted as F26, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R27 · The Navigator previews the object you select
- **Claim:** The Navigator has a pane of objects on the left and a data preview on the right that shows the object currently selected.
- **Source:** Microsoft Learn, "Power Query get data experience overview": https://learn.microsoft.com/power-query/get-data-experience
- **Quote:** "The data preview pane on the right side of the window shows a preview of the data from the object you selected."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** The Navigator: Choosing What to Load
- **Status:** accepted as F27, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R28 · Load or Transform Data, from the Navigator
- **Claim:** From the Navigator, Load brings the data straight in, and Transform Data opens it in the Power Query Editor instead.
- **Source:** Microsoft Learn, "Excel" connector: https://learn.microsoft.com/power-query/connectors/excel
- **Quote:** "select Load to load the data or Transform Data to continue transforming the data in Power Query Editor"
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** The Navigator: Choosing What to Load
- **Status:** accepted as F28, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R29 · Transform data is always offered as a destination
- **Claim:** Whatever the product, Transform data is always available as a destination, and it loads the data into the Power Query editor for further transformation.
- **Source:** Microsoft Learn, "Power Query get data experience overview": https://learn.microsoft.com/power-query/get-data-experience
- **Quote:** "Transform data is always available and loads the data into the Power Query editor for further transformation."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** The Navigator: Choosing What to Load
- **Status:** accepted as F29, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R30 · The Navigator lists at most 10,000 objects
- **Claim:** The list of objects the Navigator shows is limited to 10,000 items in Power Query Desktop, and that limit does not exist in Power Query Online.
- **Source:** Microsoft Learn, "Power Query get data experience overview": https://learn.microsoft.com/power-query/get-data-experience
- **Quote:** "The list of objects in Power Query Desktop is limited to 10,000 items. This limit doesn't exist in Power Query Online."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** The Navigator: Choosing What to Load
- **Status:** accepted as F30, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R31 · Many files of the same shape become one table
- **Claim:** Power Query can combine multiple files that have the same schema into a single logical table.
- **Source:** Microsoft Learn, "Combine files overview": https://learn.microsoft.com/power-query/combine-files-overview
- **Quote:** "With Power Query, you can combine multiple files that have the same schema into a single logical table."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Get Data from a Folder: Many Files, One Table
- **Status:** accepted as F31, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R32 · A folder connection lists every file, subfolders included
- **Claim:** Selecting a folder shows file information for every file in that folder, and for the files in its subfolders too.
- **Source:** Microsoft Learn, "Folder" connector: https://learn.microsoft.com/power-query/connectors/folder
- **Quote:** "When you select the folder you want to use, file information about all of the files in that folder is displayed. File information about any files in subfolders is also displayed."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Get Data from a Folder: Many Files, One Table
- **Status:** accepted as F32, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R33 · The combined table carries the source file name
- **Claim:** The table that comes out of combining files holds the source file name in its left-most column, with the data from each file in the columns after it.
- **Source:** Microsoft Learn, "Combine CSV files": https://learn.microsoft.com/power-query/combine-files-csv
- **Quote:** "The output query now contains the source file name in the left-most column, along with the data from each of the source files in the remaining columns."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Get Data from a Folder: Many Files, One Table
- **Status:** accepted as F33, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R34 · Every file must share structure and extension
- **Claim:** Combining files only works if every file has the same structure and the same extension.
- **Source:** Microsoft Learn, "Combine CSV files": https://learn.microsoft.com/power-query/combine-files-csv
- **Quote:** "To combine files, it's imperative that they all have the same structure and the same extension."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Get Data from a Folder: Many Files, One Table
- **Status:** accepted as F34, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R35 · Cleaning the sample file cleans every file
- **Claim:** Each transformation added to the Transform Sample file query becomes a function that is applied to every file in the folder before the data is combined.
- **Source:** Microsoft Learn, "Combine CSV files": https://learn.microsoft.com/power-query/combine-files-csv
- **Quote:** "Each transformation is automatically converted to a function inside the Helper queries group that is applied to every file in the folder before combining the data from each file."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Get Data from a Folder: Many Files, One Table
- **Status:** accepted as F35, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R36 · The icon in the header is the column's type
- **Claim:** A column's data type is shown as an icon on the left side of its column heading.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Quote:** "The data type of a column is displayed on the left side of the column heading with an icon that symbolizes the data type."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Data Types: Set Them Early, Set Them Once
- **Status:** accepted as F36, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R37 · The type decides which transformations you are offered
- **Claim:** Power Query offers a different set of transformations and options depending on the data type of the column selected.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Quote:** "Power Query provides a set of contextual transformations and options based on the data type of the column."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Data Types: Set Them Early, Set Them Once
- **Status:** accepted as F37, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R38 · Type detection reads the first 200 rows
- **Claim:** For unstructured sources such as Excel, CSV and text files, automatic detection works out column types and headers by inspecting the first 200 rows of the table.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Quote:** "automatically inspecting and detecting column types and headers based on the first 200 rows of your table"
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Data Types: Set Them Early, Set Them Once
- **Status:** accepted as F38, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R39 · Automatic detection writes two steps for you
- **Claim:** When automatic detection of column types and headers is on, Power Query adds two steps to the query by itself.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Quote:** "When this setting is enabled, Power Query automatically adds two steps to your query"
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Data Types: Set Them Early, Set Them Once
- **Status:** accepted as F39, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R40 · A column with no type set is Any
- **Claim:** Any is the type given to a column that has no explicit data type, and Microsoft recommends always defining column types explicitly for queries over unstructured sources.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Quote:** "We recommend that you always explicitly define the column data types for your queries from unstructured sources."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Data Types: Set Them Early, Set Them Once
- **Status:** accepted as F40, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R41 · A type can be set in four places
- **Claim:** The data type of a column can be set or changed in any of four places in the editor.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Quote:** "You can define or change the data type of a column in any of four places"
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Data Types: Set Them Early, Set Them Once
- **Status:** accepted as F41, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R42 · The wrong locale turns dates into errors
- **Claim:** Setting a date column to the Date type while the locale reads dates the other way round produces error values rather than dates.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Quote:** "When you try setting the data type of the Date column to be Date, you get error values."
- **Kind:** reference
- **Retrieved:** 2026-09-22
- **For:** Data Types: Set Them Early, Set Them Once
- **Status:** accepted as F42, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R43 · Power Query guesses the header row, and misses
- **Claim:** Power Query tries to promote the first row of an unstructured file to column headings by itself, and it does not identify the pattern correctly every time.
- **Source:** Microsoft Learn, "Promote or demote column headers": https://learn.microsoft.com/power-query/table-promote-demote-headers
- **Quote:** "Power Query might not identify the pattern correctly 100 percent of the time"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Promote Headers and Remove the Junk Rows
- **Status:** accepted as F43, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R44 · Remove the junk rows before promoting
- **Claim:** When a file arrives with header rows above the real column names, the top rows have to be removed before the headers can be promoted.
- **Source:** Microsoft Learn, "Promote or demote column headers": https://learn.microsoft.com/power-query/table-promote-demote-headers
- **Quote:** "Before you can promote the headers, you need to remove the first four rows of the table."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Promote Headers and Remove the Junk Rows
- **Status:** accepted as F44, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R45 · Removing top rows leaves the headers in row one
- **Claim:** Removing the top rows leaves the real column headers sitting as the first row of the table, ready to be promoted.
- **Source:** Microsoft Learn, "Promote or demote column headers": https://learn.microsoft.com/power-query/table-promote-demote-headers
- **Quote:** "The result of that operation leaves the headers as the first row of your table."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Promote Headers and Remove the Junk Rows
- **Status:** accepted as F45, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R46 · A repeated value in the promoted row gets a suffix
- **Claim:** Column names have to be unique, so if the row being promoted holds the same text twice, Power Query adds a numeric suffix after a dot to every name that is not unique.
- **Source:** Microsoft Learn, "Promote or demote column headers": https://learn.microsoft.com/power-query/table-promote-demote-headers
- **Quote:** "If the row you want to promote to a header row contains multiple instances of the same text string, Power Query disambiguates the column headings by adding a numeric suffix preceded by a dot to every text string that isn't unique."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Promote Headers and Remove the Junk Rows
- **Status:** accepted as F46, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R47 · Promoting headers is followed by an automatic type step
- **Claim:** After the headers are promoted, Power Query by default detects the data types of the columns and adds a Changed column type step.
- **Source:** Microsoft Learn, "Combine CSV files": https://learn.microsoft.com/power-query/combine-files-csv
- **Quote:** "Power Query by default tries to automatically detect the data types of the columns and add a new Changed column type step"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Promote Headers and Remove the Junk Rows
- **Status:** accepted as F47, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R48 · A fixed report layout is what Remove top rows is for
- **Claim:** Remove top rows exists for reports that always carry the same fixed header block above the data.
- **Source:** Microsoft Learn, "Filter a table by row position": https://learn.microsoft.com/power-query/filter-row-position
- **Quote:** "This report always contains a fixed header from row 1 to row 5 of the table."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Promote Headers and Remove the Junk Rows
- **Status:** accepted as F48, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R49 · Choose columns keeps what you tick
- **Claim:** Choose columns opens a list of every column in the table, where the columns to keep are ticked and the rest are cleared.
- **Source:** Microsoft Learn, "Choose or remove columns": https://learn.microsoft.com/power-query/choose-remove-columns
- **Quote:** "The Choose columns dialog appears, containing all the available columns in your table."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Choosing, Removing and Renaming Columns
- **Status:** accepted as F49, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R50 · Remove other columns is the same move, inverted
- **Claim:** Remove columns takes away the columns selected, and Remove other columns takes away every column except the ones selected.
- **Source:** Microsoft Learn, "Choose or remove columns": https://learn.microsoft.com/power-query/choose-remove-columns
- **Quote:** "Remove other columns: Removes all columns from the table except the selected ones."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Choosing, Removing and Renaming Columns
- **Status:** accepted as F50, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R51 · Queries should be designed to survive source changes
- **Claim:** Microsoft's guidance is to design queries to handle expected changes in the source data so that future refreshes keep succeeding.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Quote:** "Design queries to handle expected changes in the source data so future refreshes continue to succeed."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Choosing, Removing and Renaming Columns
- **Status:** accepted as F51, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R52 · Choose columns is the resilient answer to a changing column list
- **Claim:** In Microsoft's list of transformations that keep a query resilient, the case where the number of columns changes but the query only needs specific ones is answered with Choose columns.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Quote:** "The number of columns changes, but the query only needs specific columns."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Choosing, Removing and Renaming Columns
- **Status:** accepted as F52, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R53 · Column names must be unique
- **Claim:** Power Query requires column names to be unique across the table, and renaming a column to a name already in use raises a Column Name Conflict error.
- **Source:** Microsoft Learn, "Rename columns": https://learn.microsoft.com/power-query/rename-column
- **Quote:** "Power Query requires table column names to be unique across all columns."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Choosing, Removing and Renaming Columns
- **Status:** accepted as F53, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R54 · Three ways to rename a column
- **Claim:** A column can be renamed in three ways: double-clicking the header, right-clicking the column and choosing Rename, or the Rename option on the Transform tab.
- **Source:** Microsoft Learn, "Rename columns": https://learn.microsoft.com/power-query/rename-column
- **Quote:** "There are three ways to rename a column in Power Query."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Choosing, Removing and Renaming Columns
- **Status:** accepted as F54, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R55 · Replace values has two modes
- **Claim:** Replace values either replaces the whole contents of a cell, which is the default for non-text columns, or replaces instances of a text string inside the values, which is the default for text columns.
- **Source:** Microsoft Learn, "Replace values and errors": https://learn.microsoft.com/power-query/replace-values
- **Quote:** "Replace instances of a text string: This mode is the default behavior for text columns."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Replace Values, Trim and Clean
- **Status:** accepted as F55, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R56 · Advanced replace options are text only
- **Claim:** The advanced replace options, including matching the entire cell contents, are only available on columns of the text data type.
- **Source:** Microsoft Learn, "Replace values and errors": https://learn.microsoft.com/power-query/replace-values
- **Quote:** "Advanced options are only available in columns of the text data type."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Replace Values, Trim and Clean
- **Status:** accepted as F56, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R57 · Trim removes leading and trailing whitespace
- **Claim:** Text.Trim, which is what the Trim command writes, removes all the leading and trailing whitespace characters from a value by default.
- **Source:** Microsoft Learn, "Text.Trim": https://learn.microsoft.com/powerquery-m/text-trim
- **Quote:** "By default, all the leading and trailing whitespace characters are removed."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Replace Values, Trim and Clean
- **Status:** accepted as F57, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R58 · Clean removes control characters
- **Claim:** Text.Clean, which is what the Clean command writes, returns the value with all its control characters removed.
- **Source:** Microsoft Learn, "Text.Clean": https://learn.microsoft.com/powerquery-m/text-clean
- **Quote:** "Returns a text value with all control characters of text removed."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Replace Values, Trim and Clean
- **Status:** accepted as F58, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R59 · Replacing with nothing deletes a text string
- **Claim:** Leaving the Replace with box empty removes the text string being searched for from every row of the column.
- **Source:** Microsoft Learn, "Replace values and errors": https://learn.microsoft.com/power-query/replace-values
- **Quote:** "enter the text string Category Name: (followed by a space) in the Value to find box, leave the Replace with box empty"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Replace Values, Trim and Clean
- **Status:** accepted as F59, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R60 · The auto filter list shows the column's unique values
- **Claim:** The list in the sort and filter menu is called the auto filter list, and it shows the unique values in the column; values left unticked are ignored by the filter.
- **Source:** Microsoft Learn, "Filter by values in a column": https://learn.microsoft.com/power-query/filter-values
- **Quote:** "The list in the sort and filter menu is called the auto filter list, which shows the unique values in your column."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Filtering Rows: Narrowing Without Deleting
- **Status:** accepted as F60, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R61 · The filter list is capped at 1,000 distinct values
- **Claim:** The auto filter list loads only the top 1,000 distinct values of a column, and when there are more it says the list might be incomplete and offers a Load more link that fetches another 1,000.
- **Source:** Microsoft Learn, "Filter by values in a column": https://learn.microsoft.com/power-query/filter-values
- **Quote:** "When you load the auto filter list, only the top 1,000 distinct values in the column are loaded."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Filtering Rows: Narrowing Without Deleting
- **Status:** accepted as F61, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R62 · Filter early, and the source may do it for you
- **Claim:** Filtering as early as possible cuts the number of rows Power Query processes in later steps, and for connectors that support query folding the filter is pushed back to the data source.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Quote:** "Filter data as early as possible to reduce the number of rows that Power Query processes in later transformations."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Filtering Rows: Narrowing Without Deleting
- **Status:** accepted as F62, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R63 · Basic filtering allows two rules
- **Claim:** The Filter rows dialog has a basic mode that allows up to two filter rules on one column, and an advanced mode that allows as many as needed across every column in the table.
- **Source:** Microsoft Learn, "Filter by values in a column": https://learn.microsoft.com/power-query/filter-values
- **Quote:** "With basic mode, you can implement up to two filter rules based on type-specific filters."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Filtering Rows: Narrowing Without Deleting
- **Status:** accepted as F63, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R64 · Remove empty is two rules, not one
- **Claim:** Remove empty applies two filter rules to a column: the first removes null values and the second removes blank values.
- **Source:** Microsoft Learn, "Filter by values in a column": https://learn.microsoft.com/power-query/filter-values
- **Quote:** "The Remove empty command applies two filter rules to your column. The first rule gets rid of any null values. The second rule gets rid of any blank values."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Filtering Rows: Narrowing Without Deleting
- **Status:** accepted as F64, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R65 · The filters offered follow the column's type
- **Claim:** The filters Power Query offers on a column depend on that column's data type.
- **Source:** Microsoft Learn, "Filter by values in a column": https://learn.microsoft.com/power-query/filter-values
- **Quote:** "Power Query displays a type-specific filter based on the data type of the column."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Filtering Rows: Narrowing Without Deleting
- **Status:** accepted as F65, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R66 · A column can be split into rows, not just columns
- **Claim:** Split Column by Delimiter can split a column into new rows as well as into new columns.
- **Source:** Microsoft Learn, "Split columns by delimiter": https://learn.microsoft.com/power-query/split-columns-delimiter
- **Quote:** "The goal of this example is to split this column into new rows by using the semicolon as the delimiter."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Splitting One Column Into Many
- **Status:** accepted as F66, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R67 · Splitting into rows keeps the columns and adds rows
- **Claim:** Splitting into rows leaves the table with the same number of columns and many more rows, with each value now in its own cell.
- **Source:** Microsoft Learn, "Split columns by delimiter": https://learn.microsoft.com/power-query/split-columns-delimiter
- **Quote:** "The result of that operation gives you a table with the same number of columns, but many more rows because the values inside the cells are now in their own cells."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Splitting One Column Into Many
- **Status:** accepted as F67, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R68 · Split columns are named after the original
- **Claim:** Columns created by a split take the name of the original column with a dot and a number appended for each section.
- **Source:** Microsoft Learn, "Split columns by delimiter": https://learn.microsoft.com/power-query/split-columns-delimiter
- **Quote:** "The name of the new columns contains the same name as the original column. A suffix that includes a dot and a number that represents the split sections of the original column is appended to the name of the new columns."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Splitting One Column Into Many
- **Status:** accepted as F68, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R69 · Split at the first delimiter or at every one
- **Claim:** A split can happen at each occurrence of the delimiter, or only at the left-most one.
- **Source:** Microsoft Learn, "Split columns by delimiter": https://learn.microsoft.com/power-query/split-columns-delimiter
- **Quote:** "Split at: Each occurrence of the delimiter"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Splitting One Column Into Many
- **Status:** accepted as F69, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R70 · Split column sits in three places
- **Claim:** The Split Columns by Delimiter command can be reached from three places in the editor.
- **Source:** Microsoft Learn, "Split columns by delimiter": https://learn.microsoft.com/power-query/split-columns-delimiter
- **Quote:** "You can find the Split Columns: By Delimiter option in three places:"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Splitting One Column Into Many
- **Status:** accepted as F70, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R71 · Merging columns is Table.CombineColumns
- **Claim:** Merging columns combines the columns named into one new column, using a combiner function that supplies the separator.
- **Source:** Microsoft Learn, "Table.CombineColumns": https://learn.microsoft.com/powerquery-m/table-combinecolumns
- **Quote:** "Combines the specified columns into a new column using the specified combiner function."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Merge Columns and the Custom Column
- **Status:** accepted as F71, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R72 · A custom column is for when the built-in commands are not enough
- **Claim:** A custom column is what you write when the add-column commands Power Query provides are not flexible enough, and it is written in the M formula language.
- **Source:** Microsoft Learn, "Add a custom column": https://learn.microsoft.com/power-query/add-custom-column
- **Quote:** "If you need more flexibility for adding new columns than the ones provided out of the box in Power Query, you can create your own custom column using the Power Query M formula language."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Merge Columns and the Custom Column
- **Status:** accepted as F72, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R73 · The dialog has a formula box and the column list
- **Claim:** The Custom column dialog holds a formula box for M and a list of the available columns that can be inserted into it.
- **Source:** Microsoft Learn, "Add a custom column": https://learn.microsoft.com/power-query/add-custom-column
- **Quote:** "A Custom column formula box where you can enter a Power Query M formula"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Merge Columns and the Custom Column
- **Status:** accepted as F73, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R74 · A custom column becomes an Added custom step
- **Claim:** Adding a custom column adds an Added custom step to the Applied steps list, and selecting that step reopens the dialog with the formula in it.
- **Source:** Microsoft Learn, "Add a custom column": https://learn.microsoft.com/power-query/add-custom-column
- **Quote:** "Power Query adds your custom column to the table and adds the Added custom step to the Applied steps list in Query settings."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Merge Columns and the Custom Column
- **Status:** accepted as F74, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R75 · On the desktop the type has to be set afterwards
- **Claim:** In Power Query Desktop the Custom column dialog has no Data type field, so the data type of a custom column has to be set after the column is created.
- **Source:** Microsoft Learn, "Add a custom column": https://learn.microsoft.com/power-query/add-custom-column
- **Quote:** "If you're using Power Query Desktop, the Data type field isn't available in Custom column."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Merge Columns and the Custom Column
- **Status:** accepted as F75, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R76 · Unpivot turns columns into rows
- **Claim:** Unpivot transforms columns into attribute-value pairs, so that columns become rows.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Quote:** "In Power Query, you can transform columns into attribute-value pairs, where columns become rows."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Unpivot: The Fix for a Sheet Built for Humans
- **Status:** accepted as F76, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R77 · Unpivot always produces Attribute and Value
- **Claim:** Unpivot always creates the pair as two columns: Attribute, holding the names of the column headings that were unpivoted, and Value, holding what sat underneath them.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Quote:** "Power Query always creates the attribute-value pair by using two columns:"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Unpivot: The Fix for a Sheet Built for Humans
- **Status:** accepted as F77, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R78 · A matrix of rows and date columns is hard to analyse
- **Claim:** A table where the rows are countries and the columns are dates makes a matrix of values that is hard to analyse in a scalable way.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Quote:** "where country rows and date columns create a matrix of values, it's difficult to analyze the data in a scalable way"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Unpivot: The Fix for a Sheet Built for Humans
- **Status:** accepted as F78, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R79 · There are three unpivot commands
- **Claim:** There are three ways to unpivot columns from a table: Unpivot columns, Unpivot other columns, and Unpivot only selected columns.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Quote:** "There are three ways that you can unpivot columns from a table:"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Unpivot: The Fix for a Sheet Built for Humans
- **Status:** accepted as F79, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R80 · Unpivot columns picks up a new column on refresh
- **Claim:** With Unpivot columns, a column added to the source after the query was built is unpivoted as well when the query refreshes.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Quote:** "This behavior means that any new column that you added to the source table is unpivoted as well."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Unpivot: The Fix for a Sheet Built for Humans
- **Status:** accepted as F80, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R81 · Unpivot other columns is for an unknown number of columns
- **Claim:** Unpivot other columns unpivots every column except the ones selected, which is what makes it the right choice when the number of columns coming from the source is unknown.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Quote:** "This transformation is crucial for queries that have an unknown number of columns. The operation unpivots all columns from your table except the ones that you selected."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Unpivot: The Fix for a Sheet Built for Humans
- **Status:** accepted as F81, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R82 · Unpivot only selected columns ignores a new column
- **Claim:** Unpivot only selected columns applies to the named columns alone, so a column that appears at the source later is left unchanged.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Quote:** "so the column with the header 9/1/2020 remains unchanged"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Unpivot: The Fix for a Sheet Built for Humans
- **Status:** accepted as F82, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R83 · Group by collapses rows by the values in columns
- **Claim:** Group by collapses the values in many rows into a single value, grouping the rows by the values in one or more columns.
- **Source:** Microsoft Learn, "Grouping or summarizing rows": https://learn.microsoft.com/power-query/group-by
- **Quote:** "In Power Query, you can group values in various rows into a single value by grouping the rows according to the values in one or more columns."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Group By: Summarising Before It Loads
- **Status:** accepted as F83, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R84 · Count rows counts the rows in each group
- **Claim:** Count rows is one of the group-by operations, and it gives the total number of rows in each group.
- **Source:** Microsoft Learn, "Grouping or summarizing rows": https://learn.microsoft.com/power-query/group-by
- **Quote:** "Calculates the total number of rows from a given group"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Group By: Summarising Before It Loads
- **Status:** accepted as F84, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R85 · All rows keeps the detail in a table value
- **Claim:** The All rows operation keeps every grouped row inside a table value in each cell, with no aggregation applied.
- **Source:** Microsoft Learn, "Grouping or summarizing rows": https://learn.microsoft.com/power-query/group-by
- **Quote:** "Outputs all grouped rows in a table value with no aggregations"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Group By: Summarising Before It Loads
- **Status:** accepted as F85, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R86 · Group by sits in three places
- **Claim:** The Group by command can be reached from three places in the editor.
- **Source:** Microsoft Learn, "Grouping or summarizing rows": https://learn.microsoft.com/power-query/group-by
- **Quote:** "You can find the Group by button in three places:"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Group By: Summarising Before It Loads
- **Status:** accepted as F86, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R87 · Two group-by operations are online only
- **Claim:** The Count distinct values and Percentile operations are only available in Power Query Online, not on the desktop.
- **Source:** Microsoft Learn, "Grouping or summarizing rows": https://learn.microsoft.com/power-query/group-by
- **Quote:** "The Count distinct values and Percentile operations are only available in Power Query Online."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Group By: Summarising Before It Loads
- **Status:** accepted as F87, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R88 · Expensive operations belong last
- **Claim:** Some operations have to read the whole source before they return anything, so doing them last keeps the preview responsive while the query is being built.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Quote:** "Certain operations require reading the full data source to return any results and are therefore slow to preview."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Group By: Summarising Before It Loads
- **Status:** accepted as F88, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R89 · Append adds the contents of tables to another
- **Claim:** An append creates a single table by adding the contents of one or more tables to another, and gathers the column headers from all of them to make the new table's schema.
- **Source:** Microsoft Learn, "Append queries": https://learn.microsoft.com/power-query/append-queries
- **Quote:** "The append operation creates a single table by adding the contents of one or more tables to another, and aggregates the column headers from the tables to create the schema for the new table."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Append or Merge: Which One You Need; Append: Stacking Tables End to End
- **Status:** accepted as F89, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R90 · Merge joins two tables on matching values
- **Claim:** A merge joins two existing tables together based on matching values from one or more columns.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Quote:** "A merge queries operation joins two existing tables together based on matching values from one or multiple columns."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Append or Merge: Which One You Need; Merge: Joining Side by Side, and the Join Kinds
- **Status:** accepted as F90, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R91 · Append matches names, not positions
- **Claim:** Power Query appends on the names of the column headers found in both tables, not on where those columns sit in each table.
- **Source:** Microsoft Learn, "Append queries": https://learn.microsoft.com/power-query/append-queries
- **Quote:** "Power Query performs the append operation based on the names of the column headers found on both tables, and not based on their relative position in the headers sections of their respective tables."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Append: Stacking Tables End to End
- **Status:** accepted as F91, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R92 · A missing column gives nulls, not an error
- **Claim:** When one appended table lacks a column that another has, the result shows null values in that column rather than failing.
- **Source:** Microsoft Learn, "Append queries": https://learn.microsoft.com/power-query/append-queries
- **Quote:** "If one table doesn't have columns found in another table, null values appear in the corresponding column"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Append: Stacking Tables End to End
- **Status:** accepted as F92, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R93 · Three or more tables append in one step
- **Claim:** The Append dialog has a Two tables mode and a Three or more tables mode that combines any number of queries at once.
- **Source:** Microsoft Learn, "Append queries": https://learn.microsoft.com/power-query/append-queries
- **Quote:** "Three or more tables: Allow an arbitrary number of table queries to be combined."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Append: Stacking Tables End to End
- **Status:** accepted as F93, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R94 · Append queries as new leaves both originals alone
- **Claim:** Append queries adds a step to the current query, while Append queries as new makes a separate query and leaves both original queries unchanged.
- **Source:** Microsoft Learn, "Append queries": https://learn.microsoft.com/power-query/append-queries
- **Quote:** "You now have a new query called Append1 that contains an aggregated table from A and B. Both your table A and table B queries are unchanged."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Append: Stacking Tables End to End
- **Status:** accepted as F94, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R95 · Tables append in the order selected
- **Claim:** The tables are appended in the order in which they are selected, starting with the primary table.
- **Source:** Microsoft Learn, "Append queries": https://learn.microsoft.com/power-query/append-queries
- **Quote:** "The tables are appended in the order in which they're selected"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Append: Stacking Tables End to End
- **Status:** accepted as F95, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R96 · Which table is left and which is right matters
- **Claim:** The first table selected is the left table and the second is the right, and which is which matters a great deal once a join kind is chosen.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Quote:** "The position (left or right) of the tables becomes very important when you select the correct join kind to use."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Merge: Joining Side by Side, and the Join Kinds
- **Status:** accepted as F96, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R97 · Names need not match, but types must
- **Claim:** The columns being joined do not need the same name in both tables, but they do need to be the same data type or the merge may not give correct results.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Quote:** "Column headers don't need to match between tables. However, it's important to note that the columns must be of the same data type, otherwise the merge operation might not yield correct results."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Merge: Joining Side by Side, and the Join Kinds
- **Status:** accepted as F97, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R98 · The merge adds one column you then expand
- **Claim:** A merge adds a single new column named after the right table, holding that table's matching values row by row, which then has to be expanded or aggregated.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Quote:** "a new column is added with the same name as your right table. This column holds the values corresponding to the right table on a row-by-row basis."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Merge: Joining Side by Side, and the Join Kinds
- **Status:** accepted as F98, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R99 · A join kind says how the merge is performed
- **Claim:** A join kind specifies how a merge operation is performed, and Power Query offers left outer, right outer, full outer, inner, left anti and right anti.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Quote:** "A join kind specifies how a merge operation is performed."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Merge: Joining Side by Side, and the Join Kinds
- **Status:** accepted as F99, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R100 · Left outer keeps everything on the left
- **Claim:** A left outer join keeps all rows from the left table and the matching rows from the right one.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Quote:** "All rows from the left table, matching rows from the right table"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Merge: Joining Side by Side, and the Join Kinds
- **Status:** accepted as F100, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R101 · Inner keeps only what matched
- **Claim:** An inner join keeps only the rows that matched in both tables.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Quote:** "Only matching rows from both tables"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Merge: Joining Side by Side, and the Join Kinds
- **Status:** accepted as F101, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R102 · Left anti finds what did not match
- **Claim:** A left anti join brings in only the rows from the left table that have no matching row in the right table, which is how you find what failed to match.
- **Source:** Microsoft Learn, "Left anti join": https://learn.microsoft.com/power-query/merge-queries-left-anti
- **Quote:** "which brings in only rows from the left table that don't have any matching rows from the right table"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Merge: Joining Side by Side, and the Join Kinds
- **Status:** accepted as F102, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R103 · The dialog estimates the matches before you commit
- **Claim:** Once both columns are picked, a message at the bottom of the Merge dialog gives an estimate of how many rows match.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Quote:** "a message appears with an estimated number of matches at the bottom of the dialog box"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Merge: Joining Side by Side, and the Join Kinds
- **Status:** accepted as F103, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R104 · Duplicate makes a copy
- **Claim:** Duplicating a query creates a copy of the query selected.
- **Source:** Microsoft Learn, "Using the Queries pane": https://learn.microsoft.com/power-query/queries-pane
- **Quote:** "Duplicating a query will create a copy of the query you're selecting."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Duplicate or Reference: Two Ways to Branch
- **Status:** accepted as F104, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R105 · Reference points back at the original
- **Claim:** Referencing creates a new query that uses the steps of the previous one without copying them, and any change to the original carries down into the referencing query.
- **Source:** Microsoft Learn, "Using the Queries pane": https://learn.microsoft.com/power-query/queries-pane
- **Quote:** "The new query uses the steps of a previous query without having to duplicate the query. Additionally, any changes on the original query will transfer down to the referenced query."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Duplicate or Reference: Two Ways to Branch
- **Status:** accepted as F105, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R106 · Split a long query into referenced queries
- **Claim:** Microsoft's guidance is to split a large query into smaller referenced queries, because a query with many steps is easier to manage when one query references the next.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Quote:** "Split a large Power Query query into smaller referenced queries to make its transformation phases easier to understand and maintain."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Duplicate or Reference: Two Ways to Branch
- **Status:** accepted as F106, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R107 · Extract Previous splits a query in two
- **Claim:** Right-clicking a step and choosing Extract Previous splits the query into two, with the second query starting from a reference to the first.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Quote:** "This step effectively splits your query into two queries."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Duplicate or Reference: Two Ways to Branch
- **Status:** accepted as F107, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R108 · Folding translates your steps into the source's language
- **Claim:** Query folding translates the M transformations it can into operations the data source itself can perform, so Power Query runs as much of the query as possible at the source and does the rest in its own engine.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Quote:** "Query folding translates supported M transformations into operations that the data source can perform. Power Query tries to run as much of the query as possible at the data source and evaluates any remaining transformations in the Power Query engine."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Query Folding: Letting the Source Do the Work
- **Status:** accepted as F108, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R109 · Folding is usually faster than pulling everything down
- **Claim:** Pushing the work to the source often runs faster than extracting all the data and running every transformation in the Power Query engine.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Quote:** "This operation often provides a faster query execution than extracting all the required data from your data source and running all transforms required in the Power Query engine."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Query Folding: Letting the Source Do the Work
- **Status:** accepted as F109, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R110 · Folding has three possible outcomes
- **Claim:** A query folds fully, partially, or not at all, depending on how it is structured.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Quote:** "Depending on how the query is structured, there could be three possible outcomes to the query folding mechanism:"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Query Folding: Letting the Source Do the Work
- **Status:** accepted as F110, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R111 · Files cannot fold
- **Claim:** Sources with no query engine of their own, such as CSV and Excel files, do not support query folding at all.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Quote:** "Sources without a query engine, such as CSV and Excel files, don't support query folding."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Query Folding: Letting the Source Do the Work
- **Status:** accepted as F111, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R112 · 3.6 million rows versus 10
- **Claim:** In Microsoft's worked example, the versions that did not fully fold pulled more than 3.6 million rows from the database, while the fully folded version asked for 10.
- **Source:** Microsoft Learn, "Query folding examples": https://learn.microsoft.com/power-query/query-folding-examples
- **Quote:** "Power Query had to request over 3.6 million rows from the data source for the no query folding and partial query folding examples. For the full query folding example, it only requested 10 rows."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Query Folding: Letting the Source Do the Work
- **Status:** accepted as F112, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R113 · The unfolded query took 6 minutes 1 second
- **Claim:** In that same worked example, the query that did no folding took an average of 6 minutes and 1 second to process.
- **Source:** Microsoft Learn, "Query folding examples": https://learn.microsoft.com/power-query/query-folding-examples
- **Quote:** "This query took an average of 6 minutes and 1 second to be processed in a standard instance of Power BI dataflows"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Query Folding: Letting the Source Do the Work
- **Status:** accepted as F113, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R114 · The folded query took 31 seconds
- **Claim:** In that same worked example, the fully folded query producing the same 10 rows took an average of 31 seconds to process.
- **Source:** Microsoft Learn, "Query folding examples": https://learn.microsoft.com/power-query/query-folding-examples
- **Quote:** "This query took an average of 31 seconds to be processed in a standard instance of Power BI dataflows"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Query Folding: Letting the Source Do the Work
- **Status:** accepted as F114, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R115 · View Native Query shows what was sent
- **Claim:** View Native Query, or View data source query, shows the request Power Query sends to the data source, and whether it is offered at all depends on the connector.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Quote:** "When available, use View Native Query or View data source query to inspect the request that Power Query sends to the data source. Availability depends on the connector."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Seeing Whether Your Query Folds
- **Status:** accepted as F115, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R116 · Greyed out means you broke folding
- **Claim:** If View Native Query is disabled on a step while you are using a source that normally offers it, you have added a step that stops query folding.
- **Source:** Microsoft Learn, "Query folding examples": https://learn.microsoft.com/power-query/query-folding-examples
- **Quote:** "If this option is disabled for your step, and you're using a source that normally enables it, you created a step that stops query folding."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Seeing Whether Your Query Folds
- **Status:** accepted as F116, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R117 · Folding indicators are online only
- **Claim:** The query folding indicators beside the applied steps are available only in Power Query Online, not in Power Query Desktop.
- **Source:** Microsoft Learn, "Query folding indicators": https://learn.microsoft.com/power-query/step-folding-indicators
- **Quote:** "The query folding indicators feature is available only for Power Query Online."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Seeing Whether Your Query Folds
- **Status:** accepted as F117, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R118 · An indicator judges the whole query up to that step
- **Claim:** A folding indicator next to a step says whether the query as a whole, up to that point, folds, and the state is not sequential.
- **Source:** Microsoft Learn, "Query folding indicators": https://learn.microsoft.com/power-query/step-folding-indicators
- **Quote:** "the query folding indicator next to a step shows whether the query as a whole, up to that point, folds. The diagnostic state isn't sequential."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Seeing Whether Your Query Folds
- **Status:** accepted as F118, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R119 · Not folding means not everything folds
- **Claim:** A not-folding indicator does not mean nothing folds, it means not everything does, and generally everything up to the last folding indicator folds with the remaining operations happening afterwards.
- **Source:** Microsoft Learn, "Query folding indicators": https://learn.microsoft.com/power-query/step-folding-indicators
- **Quote:** "A not-folding indicator doesn't mean that nothing folds. Instead, it means that not everything folds. Generally, everything up to the last folding indicator folds, with more operations happening after."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** The Steps That Stop It Folding
- **Status:** accepted as F119, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R120 · Capitalize each word never folds
- **Claim:** Capitalize each word is an example of a transformation that never folds back to the source.
- **Source:** Microsoft Learn, "Query folding indicators": https://learn.microsoft.com/power-query/step-folding-indicators
- **Quote:** "For example, Capitalize each word never folds."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** The Steps That Stop It Folding
- **Status:** accepted as F120, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R121 · Folding can start again
- **Claim:** Folding does not always stop for good once it breaks: removing the column a non-folding transformation touched can let the optimized plan fold the final step even though an earlier step does not, which shows folding depends on both the order of the steps and the transformations used.
- **Source:** Microsoft Learn, "Query folding indicators": https://learn.microsoft.com/power-query/step-folding-indicators
- **Quote:** "In this uncommon result, the final step folds even though an earlier step doesn't fold"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** The Steps That Stop It Folding
- **Status:** accepted as F121, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R122 · Find the step that breaks it, then move steps earlier
- **Claim:** When not all the steps fold, Microsoft's guidance is to find the step that prevents folding and, where possible, move later steps earlier so they can be folded in.
- **Source:** Microsoft Learn, "Query folding guidance in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/power-query-folding
- **Quote:** "When all steps of a Power Query query can't be folded, discover the step that prevents query folding. When possible, move later steps earlier in sequence so they may be factored into the query folding."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** The Steps That Stop It Folding
- **Status:** accepted as F122, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R123 · The engine may reorder your steps itself
- **Claim:** The Power Query mashup engine may reorder query steps by itself when it generates the source query.
- **Source:** Microsoft Learn, "Query folding guidance in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/power-query-folding
- **Quote:** "the Power Query mashup engine may be smart enough to reorder your query steps when it generates the source query"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** The Steps That Stop It Folding
- **Status:** accepted as F123, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R124 · A step-level error stops the query loading
- **Claim:** A step-level error prevents the query from loading and shows its reason, message and detail in a yellow pane.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Quote:** "A step-level error prevents the query from loading and displays the error components in a yellow pane."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Refresh Errors: Renamed Columns and Moved Files
- **Status:** accepted as F124, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R125 · A missing column is a direct reference that broke
- **Claim:** The error saying the column of the table was not found is triggered when a step refers directly to a column name that no longer exists in the query.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Quote:** "This error is commonly triggered when a step makes a direct reference to a column name that doesn't exist in the query."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Refresh Errors: Renamed Columns and Moved Files
- **Status:** accepted as F125, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R126 · Somebody renamed the column at the source
- **Claim:** Microsoft's worked example of that error is a column renamed by hand in the source file, which leaves the step that renamed it with nothing to find.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Quote:** "But there was a change in the original text file, and it no longer has a column heading with the name Column because it was manually changed to Date."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Refresh Errors: Renamed Columns and Moved Files
- **Status:** accepted as F126, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R127 · DataSource.NotFound covers moved and unreachable files
- **Claim:** DataSource.NotFound happens when the source cannot be reached, the credentials are wrong, or the source was moved somewhere else.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Quote:** "This error commonly occurs when the data source is inaccessible by the user, the user doesn't have the correct credentials to access the data source, or the source was moved to a different place."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Refresh Errors: Renamed Columns and Moved Files
- **Status:** accepted as F127, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R128 · The fix for a moved file is the path
- **Claim:** The fix for a file that has moved is to change the file path the query points at.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Quote:** "You can change the file path of the text file to a path that both users have access to."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Refresh Errors: Renamed Columns and Moved Files
- **Status:** accepted as F128, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R129 · A cell error loads, a step error does not
- **Claim:** A cell-level error does not stop the query loading; it shows the word Error in the cell instead.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Quote:** "A cell-level error doesn't prevent the query from loading, but displays error values as Error in the cell."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Refresh Errors: Renamed Columns and Moved Files
- **Status:** accepted as F129, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R130 · Errors can be removed, replaced or kept
- **Claim:** Power Query offers three ways to handle cell-level errors: remove the rows, replace the errors with a value, or keep only the rows that have them.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Quote:** "Power Query provides a set of functions to handle them either by removing, replacing, or keeping the errors."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Refresh Errors: Renamed Columns and Moved Files
- **Status:** accepted as F130, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R131 · The Advanced Editor shows the code behind the buttons
- **Claim:** The Advanced Editor shows the code that Power Query Editor writes with each step, and lets you write your own in the M formula language.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Quote:** "The Advanced Editor lets you see the code that Power Query Editor is creating with each step."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** The Advanced Editor and Your First Look at M
- **Status:** accepted as F131, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R132 · Open it from the View tab
- **Claim:** The Advanced Editor is opened from the View tab on the ribbon, and the window is closed with Done or Cancel.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/power-query/power-query-ui
- **Quote:** "To open the advanced editor, select the View tab on the ribbon, and then select Advanced Editor."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** The Advanced Editor and Your First Look at M
- **Status:** accepted as F132, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R133 · It tells you whether the code parses
- **Claim:** The Advanced Editor tells you whether the code it is holding is free of syntax errors.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/power-query/power-query-ui
- **Quote:** "The editor indicates if your code is free of syntax errors."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** The Advanced Editor and Your First Look at M
- **Status:** accepted as F133, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R134 · Step names are the names in the code
- **Claim:** Most of the names shown in the Applied steps pane are used as they are in the M script.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Quote:** "Most of the names you find in the Applied steps pane are also used as is in the M script."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** The Advanced Editor and Your First Look at M
- **Status:** accepted as F134, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R135 · Editing in the UI rewrites the code
- **Claim:** Any change made to a query through the Power Query editor updates the M script automatically, so renaming a step renames it in the code as well.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Quote:** "Any changes that you make to your query through the Power Query editor automatically update the M script for your query."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** The Advanced Editor and Your First Look at M
- **Status:** accepted as F135, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R136 · A step name with spaces is a quoted identifier
- **Claim:** A step name containing spaces appears in M wrapped in extra characters as a quoted identifier, which is why the code looks noisier than the step list.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Quote:** "which is categorized as a quoted identifier because of these extra characters"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** The Advanced Editor and Your First Look at M
- **Status:** accepted as F136, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R137 · A query is one let expression
- **Claim:** A query is made of variables, expressions and values wrapped up in a single let expression.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Quote:** "A mashup query is composed of variables, expressions, and values encapsulated by a let expression."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** let and in: How Every Query Is Built
- **Status:** accepted as F137, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R138 · Each step names the step before it
- **Claim:** Each step of a query builds on a previous step by referring to that step by its variable name.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Quote:** "Each query formula step builds upon a previous step by referring to a step by its variable name."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** let and in: How Every Query Is Built
- **Status:** accepted as F138, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R139 · in names the step that gets returned
- **Claim:** The in statement names the step whose result the query returns, and it is generally the last step.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Quote:** "Output a query formula step using the in statement. Generally, the last query step is used as the in final data set result."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** let and in: How Every Query Is Built
- **Status:** accepted as F139, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R140 · M is case sensitive
- **Claim:** M is a case-sensitive language.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Quote:** "M is a case-sensitive language."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** let and in: How Every Query Is Built
- **Status:** accepted as F140, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R141 · Spaces in a name need the hash and quotes
- **Claim:** A variable name can hold spaces only by writing it with the # identifier and the name in quotes.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Quote:** "A variable can contain spaces by using the # identifier with the name in quotes"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** let and in: How Every Query Is Built
- **Status:** accepted as F141, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R142 · A parameter stores a value you reuse
- **Claim:** A parameter is a way to store and manage a single value so that it can be reused.
- **Source:** Microsoft Learn, "Using parameters": https://learn.microsoft.com/power-query/power-query-query-parameters
- **Quote:** "A parameter serves as a way to easily store and manage a value that can be reused."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Parameters: One Place to Change the Path
- **Status:** accepted as F142, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R143 · One place to change instead of many
- **Claim:** Parameters make queries easier to update because the value changes in one place instead of being edited in every query that uses it.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Quote:** "Parameters make queries easier to update because you can change a value in one location instead of editing each query that uses it."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Parameters: One Place to Change the Path
- **Status:** accepted as F143, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R144 · A parameter can feed a connector's own dialog
- **Claim:** A parameter can be used inside a connector's dialog, such as a SQL Server name, so that changing the parameter updates every query that reads it.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Quote:** "If you change your server location, all you need to do is update the parameter for your server name, and your queries are updated."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Parameters: One Place to Change the Path
- **Status:** accepted as F144, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R145 · A parameter can be an argument to a transform
- **Claim:** A parameter can supply the argument for transformations driven from the interface and for data source functions.
- **Source:** Microsoft Learn, "Using parameters": https://learn.microsoft.com/power-query/power-query-query-parameters
- **Quote:** "Changing the argument values for particular transforms and data source functions."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Parameters: One Place to Change the Path
- **Status:** accepted as F145, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R146 · A constant query can become a parameter
- **Claim:** A query whose value is a simple constant, such as a date, some text or a number, can be turned into a parameter with Convert to Parameter.
- **Source:** Microsoft Learn, "Using parameters": https://learn.microsoft.com/power-query/power-query-query-parameters
- **Quote:** "Right-click a query whose value is a simple nonstructured constant, such as a date, text, or number, and then select Convert to Parameter."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Parameters: One Place to Change the Path
- **Status:** accepted as F146, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R147 · Always set the parameter's type
- **Claim:** Microsoft recommends always setting the data type of a parameter.
- **Source:** Microsoft Learn, "Using parameters": https://learn.microsoft.com/power-query/power-query-query-parameters
- **Quote:** "We recommend that you always set up the data type of your parameter."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Parameters: One Place to Change the Path
- **Status:** accepted as F147, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R148 · Changing the value updates the query at once
- **Claim:** Changing a parameter's Current Value updates the queries that read it immediately.
- **Source:** Microsoft Learn, "Using parameters": https://learn.microsoft.com/power-query/power-query-query-parameters
- **Quote:** "your orders query gets updated immediately and shows you only the rows where the Margin is above 30%"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Parameters: One Place to Change the Path
- **Status:** accepted as F148, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R149 · Trailing spaces are trimmed, leading ones are not
- **Claim:** The Power BI engine automatically trims trailing spaces that follow text data, but it does not remove leading spaces that come before it.
- **Source:** Microsoft Learn, "Data types in Power BI": https://learn.microsoft.com/power-bi/connect-data/desktop-data-types
- **Quote:** "The Power BI engine automatically trims any trailing spaces that follow text data, but doesn't remove leading spaces that precede the data."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Replace Values, Trim and Clean
- **Status:** accepted as F149, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R150 · A leading space breaks relationships and visuals
- **Claim:** If leading spaces are not removed, a relationship can fail to be created because duplicate values are detected, or visuals can return unexpected results.
- **Source:** Microsoft Learn, "Data types in Power BI": https://learn.microsoft.com/power-bi/connect-data/desktop-data-types
- **Quote:** "If you don't remove leading spaces, a relationship might fail to create because of duplicate values, or visuals might return unexpected results."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Replace Values, Trim and Clean
- **Status:** accepted as F150, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R151 · Four rows in the table, two rows in the visual
- **Claim:** In Microsoft's worked example, the same customer name entered four times with different leading and trailing spaces loads as four rows, but a visual built on it returns just two.
- **Source:** Microsoft Learn, "Data types in Power BI": https://learn.microsoft.com/power-bi/connect-data/desktop-data-types
- **Quote:** "However, a visual based on this data returns just two rows."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Replace Values, Trim and Clean
- **Status:** accepted as F151, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R152 · Trim is the fix, in Power Query
- **Claim:** Errors of this kind are traced back to leading or trailing spaces and fixed with Text.Trim, or Format then Trim on the Transform tab, in Power Query Editor.
- **Source:** Microsoft Learn, "Data types in Power BI": https://learn.microsoft.com/power-bi/connect-data/desktop-data-types
- **Quote:** "You can trace these errors back to leading or trailing spaces, and resolve them by using Text.Trim, or Format > Trim under Transform, to remove the spaces in Power Query Editor."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Replace Values, Trim and Clean
- **Status:** accepted as F152, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R153 · The model ignores case, Power Query does not
- **Claim:** The engine that stores and queries data in Power BI is case insensitive and treats different capitalisation as the same value, while Power Query is case sensitive, so values that differ only by case get merged on load.
- **Source:** Microsoft Learn, "Data types in Power BI": https://learn.microsoft.com/power-bi/connect-data/desktop-data-types
- **Quote:** "The engine that stores and queries data in Power BI is case insensitive, and treats different capitalization of letters as the same value."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Replace Values, Trim and Clean
- **Status:** accepted as F153, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R154 · Pre-summarised data is the biggest size saving there is
- **Claim:** Loading pre-summarised data is perhaps the most effective technique for reducing the size of a model, with a distinct trade-off in lost detail.
- **Source:** Microsoft Learn, "Data reduction techniques for Import modeling": https://learn.microsoft.com/power-bi/guidance/import-modeling-data-reduction
- **Quote:** "Perhaps the most effective technique to reduce a model size is to load pre-summarized data."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Group By: Summarising Before It Loads
- **Status:** accepted as F154, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R155 · 99% smaller, and the detail is gone
- **Claim:** In Microsoft's example, grouping sales to month level could achieve a possible 99% reduction in model size, after which reporting at day level or at individual order line level is no longer possible.
- **Source:** Microsoft Learn, "Data reduction techniques for Import modeling": https://learn.microsoft.com/power-bi/guidance/import-modeling-data-reduction
- **Quote:** "While it could achieve a possible 99% reduction in model size, reporting at day level or individual order line level is no longer possible."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Group By: Summarising Before It Loads
- **Status:** accepted as F155, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R156 · A smaller model refreshes faster
- **Claim:** Smaller model sizes refresh faster, which means lower latency reporting and less pressure on the source system.
- **Source:** Microsoft Learn, "Data reduction techniques for Import modeling": https://learn.microsoft.com/power-bi/guidance/import-modeling-data-reduction
- **Quote:** "Smaller model sizes achieve faster data refresh, resulting in lower latency reporting, higher semantic model refresh throughput, and less pressure on source system and capacity resources."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Group By: Summarising Before It Loads; Query Folding: Letting the Source Do the Work
- **Status:** accepted as F156, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R157 · Adding a column back later is the easy direction
- **Claim:** It is easier to add columns to a model later than to remove them later, because removing a column can break reports or the model structure.
- **Source:** Microsoft Learn, "Data reduction techniques for Import modeling": https://learn.microsoft.com/power-bi/guidance/import-modeling-data-reduction
- **Quote:** "bear in mind that it's easier to add columns later than it is to remove them later. Removing columns can break reports or the model structure."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Choosing, Removing and Renaming Columns
- **Status:** accepted as F157, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R158 · Rename here, because the report shows these names
- **Claim:** Microsoft's own walkthrough says to rename any column whose meaning is not obvious while still in Power Query, because short, clear column names are what show up in the report later.
- **Source:** Microsoft Learn, "End-to-end: From raw data to a shared Power BI app": https://learn.microsoft.com/power-bi/create-reports/tutorial-end-to-end-power-bi
- **Quote:** "Rename any column whose meaning isn't obvious from its name. Short, clear column names show up in your Power BI report later, so fix them before modeling."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Choosing, Removing and Renaming Columns
- **Status:** accepted as F158, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R159 · Data source settings, then Change Source
- **Claim:** Data source settings is opened from Transform data on the Home tab, and a connection is repointed by picking it from the list and selecting Change Source; Microsoft documents this route for switching a live Analysis Services connection to a different server.
- **Source:** Microsoft Learn, "Connect to Analysis Services tabular data in Power BI Desktop": https://learn.microsoft.com/power-bi/connect-data/desktop-analysis-services-tabular-data
- **Quote:** "In the Data source settings window, select the database from the list, then select the Change Source... button."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Refresh Errors: Renamed Columns and Moved Files
- **Status:** accepted as F159, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R160 · Promoted Headers is the step name in Excel
- **Claim:** In Excel, automatic detection adds a step named Promoted Headers right after Source, which turns the first row into the column headers.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Quote:** "Step: Promoted Headers Promotes the first row of the table to be the column header."
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Promote Headers and Remove the Junk Rows
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R161 · Changed Type is the step name in Excel
- **Claim:** In Excel, the automatic type step is named Changed Type, and it converts each column from Any to a type guessed from its values.
- **Source:** Microsoft Support, "Add or change data types (Power Query)": https://support.microsoft.com/en-us/excel/add-or-change-data-types-power-query
- **Quote:** "Step: Changed Type Converts the values from the Any data type to a data type based on the inspection"
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Applied Steps: A Recipe, Not an Edit
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R162 · Removed Columns is a step name
- **Claim:** In a Power BI Desktop query, removing unneeded columns shows up in Applied Steps as a step named Removed Columns.
- **Source:** Microsoft Learn, "Shape and combine data in Power BI Desktop": https://learn.microsoft.com/power-bi/connect-data/desktop-shape-and-combine-data
- **Quote:** "Removed Columns: Removes unnecessary columns."
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Choosing, Removing and Renaming Columns
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R163 · Removed Other Columns is a step name
- **Claim:** In Microsoft's Excel tutorial, the Remove Other Columns command creates a query step named Removed Other Columns.
- **Source:** Microsoft Support, "Learn to combine multiple data sources (Power Query)": https://support.microsoft.com/en-us/office/learn-to-combine-multiple-data-sources-power-query-70cfe661-5a2a-4d9d-a4fe-586cc7878c7d
- **Quote:** "Remove other columns to only display columns of interest Removed Other Columns"
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Choosing, Removing and Renaming Columns
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R164 · Filtered Rows in Microsoft's sample M
- **Claim:** In the sample M query on Microsoft's "What is Power Query?" page, the row-filter step is named Filtered Rows and uses Table.SelectRows.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/power-query/power-query-what-is-power-query
- **Quote:** "#"Filtered Rows" = Table.SelectRows(#"Expanded Sender"
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Filtering Rows: Narrowing Without Deleting
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R165 · Picking a table in the Navigator makes a Navigation step
- **Claim:** When you pick a table in the Navigator after connecting to an Excel workbook, Power Query adds a step named Navigation to Applied Steps.
- **Source:** Microsoft Support, "Learn to combine multiple data sources (Power Query)": https://support.microsoft.com/en-us/office/learn-to-combine-multiple-data-sources-power-query-70cfe661-5a2a-4d9d-a4fe-586cc7878c7d
- **Quote:** "Right-click the Navigation step, and select Edit Settings. This step was created when you selected the table from the Navigation dialog box."
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** The Advanced Editor and Your First Look at M
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R166 · In the code, the Navigation step has the table's name
- **Claim:** In Microsoft's Excel tutorial, the Changed Type formula refers to the table picked in the Navigator as Products_Table, not by the word Navigation.
- **Source:** Microsoft Support, "Learn to combine multiple data sources (Power Query)": https://support.microsoft.com/en-us/office/learn-to-combine-multiple-data-sources-power-query-70cfe661-5a2a-4d9d-a4fe-586cc7878c7d
- **Quote:** "Table.TransformColumnTypes( Products_Table"
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** The Advanced Editor and Your First Look at M
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R167 · The header icons: 123, 1.2, ABC
- **Claim:** The icon left of a column header shows its type: 123 for whole number, 1.2 for decimal, a calendar for date, and ABC for text.
- **Source:** Microsoft Learn, "End-to-end: From raw data to a shared Power BI app": https://learn.microsoft.com/power-bi/create-reports/tutorial-end-to-end-power-bi
- **Quote:** "123 for whole number, 1.2 for decimal, the calendar icon for date, and ABC for text"
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Data Types: Set Them Early, Set Them Once
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R168 · A folder query is set up once and refreshed
- **Claim:** Microsoft's Excel help describes a folder query as set up once and then refreshed to see each month's results, using monthly budget workbooks as the example.
- **Source:** Microsoft Support, "Import data from a folder with multiple files (Power Query)": https://support.microsoft.com/en-us/office/import-data-from-a-folder-with-multiple-files-power-query-94b8023c-2e66-4f6b-8c78-6a00041c90e4
- **Quote:** "then refresh the data to see results for each month"
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Get Data from a Folder: Many Files, One Table
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R169 · Source is the step that connects
- **Claim:** The Source step is the one that connects to the original data; in Microsoft's Power BI tutorial it is the first step listed.
- **Source:** Microsoft Learn, "Shape and combine data in Power BI Desktop": https://learn.microsoft.com/power-bi/connect-data/desktop-shape-and-combine-data
- **Quote:** "Source: Connects to the original data."
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Connecting to Excel and CSV
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R170 · The Source step holds the file path
- **Claim:** For an Excel workbook, the Source step is created on import and its formula holds the file path inside File.Contents.
- **Source:** Microsoft Support, "Learn to combine multiple data sources (Power Query)": https://support.microsoft.com/en-us/office/learn-to-combine-multiple-data-sources-power-query-70cfe661-5a2a-4d9d-a4fe-586cc7878c7d
- **Quote:** "Excel.Workbook(File.Contents("C:\Products and Orders.xlsx"), null, true)"
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Connecting to Excel and CSV
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R171 · New Parameter, under Manage Parameters
- **Claim:** A parameter can be created with New Parameter from the Manage Parameters dropdown on the Home tab, or with New inside the Manage Parameters window.
- **Source:** Microsoft Learn, "Using parameters": https://learn.microsoft.com/power-query/power-query-query-parameters
- **Quote:** "Select the New Parameter option from the dropdown menu of Manage Parameters in the Home tab."
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Parameters: One Place to Change the Path
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R172 · Append queries is on Home, in Combine
- **Claim:** Append queries is on the Home tab in the Combine group, and its dropdown holds two options.
- **Source:** Microsoft Learn, "Append queries": https://learn.microsoft.com/power-query/append-queries
- **Quote:** "You can find the Append queries command on the Home tab in the Combine group."
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Append or Merge: Which One You Need
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R173 · Merge queries is on Home, in Combine
- **Claim:** Merge queries is on the Home tab in the Combine group, with Merge queries and Merge queries as new in its dropdown.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Quote:** "You can find the Merge queries command on the Home tab, in the Combine group."
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Append or Merge: Which One You Need
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R174 · Duplicate is on the query's menu
- **Claim:** To duplicate a query, open its context menu in the Queries pane and select Duplicate.
- **Source:** Microsoft Learn, "Using the Queries pane": https://learn.microsoft.com/power-query/queries-pane
- **Quote:** "To duplicate your query, open the context pane on the query and select Duplicate."
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Duplicate or Reference: Two Ways to Branch
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R175 · Reference is on the query's menu
- **Claim:** To reference a query, open its context menu in the Queries pane and select Reference.
- **Source:** Microsoft Learn, "Using the Queries pane": https://learn.microsoft.com/power-query/queries-pane
- **Quote:** "To reference your query, open the context pane on the query and select Reference."
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Duplicate or Reference: Two Ways to Branch
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R176 · Data Source Settings has a Change source button
- **Claim:** In Excel, Data Source Settings (Data > Get Data > Data Source Settings) lists the workbook's sources and shows a Change source button.
- **Source:** Microsoft Support, "Manage data source settings and permissions (Power Query)": https://support.microsoft.com/en-us/office/manage-data-source-settings-and-permissions-power-query-9f24a631-f7eb-4729-88dd-6a4921380ca9
- **Quote:** "Data sources in current workbook This is the default option and it also displays the Change source button at the bottom."
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Refresh Errors: Renamed Columns and Moved Files
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R177 · Changing a source reopens its first dialog
- **Claim:** Changing a data source in Data Source Settings opens the same dialog you saw when you first imported the data, for any kind of source.
- **Source:** Microsoft Support, "Manage data source settings and permissions (Power Query)": https://support.microsoft.com/en-us/office/manage-data-source-settings-and-permissions-power-query-9f24a631-f7eb-4729-88dd-6a4921380ca9
- **Quote:** "This is the same dialog box you see when you first imported the data. Each kind of data source has a different dialog box."
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** Refresh Errors: Renamed Columns and Moved Files
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---

## R178 · The Advanced Editor is on the Home tab too
- **Claim:** Besides the View tab, the Advanced Editor can be opened from the Query group on the Home tab.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Quote:** "You can also select Advanced Editor from the Query group in the Home tab."
- **Kind:** reference
- **Retrieved:** 2026-09-24
- **For:** The Advanced Editor and Your First Look at M
- **Status:** new
- **Verified:** 2026-09-24, quote found on the page

---
