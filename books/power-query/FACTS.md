# Facts

Everything this book is allowed to state as true, and where each thing came from.

---

## F1 · Power Query is a data preparation engine
- **Claim:** Power Query is a data transformation and data preparation engine, with a graphical interface for getting data from sources and an editor for applying transformations.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/power-query/power-query-what-is-power-query
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F2 · M is Power Query's language
- **Claim:** M is the data transformation language of Power Query, and everything a query does is ultimately written in M.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/power-query/power-query-what-is-power-query
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F3 · DAX is a formula expression language
- **Claim:** DAX is a formula expression language, and the same language is used by Analysis Services, Power BI and Power Pivot in Excel.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F4 · A Power Query custom column runs before the model
- **Claim:** A custom column written in Power Query is defined before the data enters the model, where a DAX calculated column is built on data already in it.
- **Source:** Microsoft Learn, "Use calculation options in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-calculations-options
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F5 · A measure is worked out when it is needed
- **Claim:** A DAX measure is calculated when it is needed and responds to what the reader selects in the report, and its results are not precalculated or stored on disk.
- **Source:** Microsoft Learn, "Use calculation options in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-calculations-options
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F6 · DAX works on columns, not cells
- **Claim:** In a tabular model, formulas work only with tables and columns, not with individual cells, ranges or arrays as an Excel worksheet formula does.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F7 · Transform data opens the editor
- **Claim:** In Power BI Desktop, the Power Query Editor is opened by selecting Transform data on the Home tab.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F8 · The editor has four areas in Power BI Desktop
- **Claim:** The Power BI Desktop documentation describes the Power Query Editor as four areas: the ribbon, the Queries pane, the Table view, and the Query Settings pane.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F9 · Query Settings holds properties and applied steps
- **Claim:** The Query Settings pane lists the selected query's properties and its applied steps.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F10 · The preview is capped at 1000 rows
- **Claim:** When Power Query imports data it caches up to 1000 rows of preview data for each query, so what the editor shows is a preview rather than the whole table.
- **Source:** Microsoft Learn, "Disable Power Query background refresh": https://learn.microsoft.com/power-bi/guidance/power-query-background-refresh
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F11 · The Power Query docs count five components
- **Claim:** The cross-product Power Query documentation counts five components of the editor rather than four, adding the status bar to the ribbon, Queries pane, current view and Query settings.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/power-query/power-query-ui
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F12 · Every transformation shows up as a step
- **Claim:** The Applied steps list is part of the Query settings pane, and any transformation made to the data is shown in it.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/power-query/applied-steps
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F13 · Selecting a step shows the data at that step
- **Claim:** Selecting a step in the list shows the result of that step, so the data can be seen as it was at any point in the query.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/power-query/applied-steps
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F14 · Steps are recorded, and the source is not changed
- **Claim:** Power Query records transformations as query steps and applies them when the query runs, and it does not modify the source data.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/power-query/power-query-what-is-power-query
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F15 · Steps can be renamed, deleted and reordered
- **Claim:** Steps can be renamed, deleted or reordered from the Query Settings pane.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F16 · Steps run in the order they appear
- **Claim:** Every step of a query runs in the order it appears in the Applied Steps pane.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F17 · Delete until end removes a step and everything after it
- **Claim:** Deleting a step with Delete until end removes the selected step and all the steps that follow it.
- **Source:** Microsoft Learn, "Using the Applied Steps list": https://learn.microsoft.com/power-query/applied-steps
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F18 · Close & Apply applies and closes
- **Claim:** Close & Apply applies the changes made in the Power Query Editor and closes it.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F19 · The load command differs by product
- **Claim:** The command that saves and loads the result is Close & Load in Excel, Close & Apply in Power BI Desktop, and Save & close in Power Query Online.
- **Source:** Microsoft Learn, "Power Query get data experience overview": https://learn.microsoft.com/power-query/get-data-experience
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F20 · Some queries are only intermediate steps
- **Claim:** Some queries are not worth loading into Power BI Desktop because they are intermediate steps, even though the transformations still need them to work.
- **Source:** Microsoft Learn, "Managing query refresh in Power BI": https://learn.microsoft.com/power-bi/connect-data/refresh-include-in-report-refresh
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F21 · Enable load keeps a query out of the model
- **Claim:** A query is kept out of Power BI Desktop by unselecting Enable load in the query's context menu in Power Query Editor, or in its Properties screen.
- **Source:** Microsoft Learn, "Managing query refresh in Power BI": https://learn.microsoft.com/power-bi/connect-data/refresh-include-in-report-refresh
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F22 · Include in report refresh is a separate setting
- **Claim:** A query can also be left out of the report's refresh by unselecting Include in report refresh, which is a separate setting from Enable load.
- **Source:** Microsoft Learn, "Managing query refresh in Power BI": https://learn.microsoft.com/power-bi/connect-data/refresh-include-in-report-refresh
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F23 · Connecting to a workbook needs its file path
- **Claim:** To connect to an Excel file, Power Query needs the file path that finds the file.
- **Source:** Microsoft Learn, "Power Query get data experience overview": https://learn.microsoft.com/power-query/get-data-experience
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F24 · A CSV file is not an Excel file
- **Claim:** A CSV file opens in Excel but is not an Excel file, and Power Query has a separate Text/CSV connector for it.
- **Source:** Microsoft Learn, "Excel" connector: https://learn.microsoft.com/power-query/connectors/excel
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F25 · The navigator suggests tables inside a sheet
- **Claim:** When a workbook does not hold one single table, the Navigator works out a list of suggested tables from the layout of the sheet and offers them alongside the whole sheet.
- **Source:** Microsoft Learn, "Excel" connector: https://learn.microsoft.com/power-query/connectors/excel
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F26 · Choosing the whole sheet fills blank cells with null
- **Claim:** Choosing the entire sheet in the Navigator shows the workbook as it looked in Excel, with every blank cell filled with null.
- **Source:** Microsoft Learn, "Excel" connector: https://learn.microsoft.com/power-query/connectors/excel
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F27 · The Navigator previews the object you select
- **Claim:** The Navigator has a pane of objects on the left and a data preview on the right that shows the object currently selected.
- **Source:** Microsoft Learn, "Power Query get data experience overview": https://learn.microsoft.com/power-query/get-data-experience
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F28 · Load or Transform Data, from the Navigator
- **Claim:** From the Navigator, Load brings the data straight in, and Transform Data opens it in the Power Query Editor instead.
- **Source:** Microsoft Learn, "Excel" connector: https://learn.microsoft.com/power-query/connectors/excel
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F29 · Transform data is always offered as a destination
- **Claim:** Whatever the product, Transform data is always available as a destination, and it loads the data into the Power Query editor for further transformation.
- **Source:** Microsoft Learn, "Power Query get data experience overview": https://learn.microsoft.com/power-query/get-data-experience
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F30 · The Navigator lists at most 10,000 objects
- **Claim:** The list of objects the Navigator shows is limited to 10,000 items in Power Query Desktop, and that limit does not exist in Power Query Online.
- **Source:** Microsoft Learn, "Power Query get data experience overview": https://learn.microsoft.com/power-query/get-data-experience
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F31 · Many files of the same shape become one table
- **Claim:** Power Query can combine multiple files that have the same schema into a single logical table.
- **Source:** Microsoft Learn, "Combine files overview": https://learn.microsoft.com/power-query/combine-files-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F32 · A folder connection lists every file, subfolders included
- **Claim:** Selecting a folder shows file information for every file in that folder, and for the files in its subfolders too.
- **Source:** Microsoft Learn, "Folder" connector: https://learn.microsoft.com/power-query/connectors/folder
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F33 · The combined table carries the source file name
- **Claim:** The table that comes out of combining files holds the source file name in its left-most column, with the data from each file in the columns after it.
- **Source:** Microsoft Learn, "Combine CSV files": https://learn.microsoft.com/power-query/combine-files-csv
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F34 · Every file must share structure and extension
- **Claim:** Combining files only works if every file has the same structure and the same extension.
- **Source:** Microsoft Learn, "Combine CSV files": https://learn.microsoft.com/power-query/combine-files-csv
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F35 · Cleaning the sample file cleans every file
- **Claim:** Each transformation added to the Transform Sample file query becomes a function that is applied to every file in the folder before the data is combined.
- **Source:** Microsoft Learn, "Combine CSV files": https://learn.microsoft.com/power-query/combine-files-csv
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F36 · The icon in the header is the column's type
- **Claim:** A column's data type is shown as an icon on the left side of its column heading.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F37 · The type decides which transformations you are offered
- **Claim:** Power Query offers a different set of transformations and options depending on the data type of the column selected.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F38 · Type detection reads the first 200 rows
- **Claim:** For unstructured sources such as Excel, CSV and text files, automatic detection works out column types and headers by inspecting the first 200 rows of the table.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F39 · Automatic detection writes two steps for you
- **Claim:** When automatic detection of column types and headers is on, Power Query adds two steps to the query by itself.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F40 · A column with no type set is Any
- **Claim:** Any is the type given to a column that has no explicit data type, and Microsoft recommends always defining column types explicitly for queries over unstructured sources.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F41 · A type can be set in four places
- **Claim:** The data type of a column can be set or changed in any of four places in the editor.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F42 · The wrong locale turns dates into errors
- **Claim:** Setting a date column to the Date type while the locale reads dates the other way round produces error values rather than dates.
- **Source:** Microsoft Learn, "Data types in Power Query": https://learn.microsoft.com/power-query/data-types
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F43 · Power Query guesses the header row, and misses
- **Claim:** Power Query tries to promote the first row of an unstructured file to column headings by itself, and it does not identify the pattern correctly every time.
- **Source:** Microsoft Learn, "Promote or demote column headers": https://learn.microsoft.com/power-query/table-promote-demote-headers
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F44 · Remove the junk rows before promoting
- **Claim:** When a file arrives with header rows above the real column names, the top rows have to be removed before the headers can be promoted.
- **Source:** Microsoft Learn, "Promote or demote column headers": https://learn.microsoft.com/power-query/table-promote-demote-headers
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F45 · Removing top rows leaves the headers in row one
- **Claim:** Removing the top rows leaves the real column headers sitting as the first row of the table, ready to be promoted.
- **Source:** Microsoft Learn, "Promote or demote column headers": https://learn.microsoft.com/power-query/table-promote-demote-headers
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F46 · A repeated value in the promoted row gets a suffix
- **Claim:** Column names have to be unique, so if the row being promoted holds the same text twice, Power Query adds a numeric suffix after a dot to every name that is not unique.
- **Source:** Microsoft Learn, "Promote or demote column headers": https://learn.microsoft.com/power-query/table-promote-demote-headers
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F47 · Promoting headers is followed by an automatic type step
- **Claim:** After the headers are promoted, Power Query by default detects the data types of the columns and adds a Changed column type step.
- **Source:** Microsoft Learn, "Combine CSV files": https://learn.microsoft.com/power-query/combine-files-csv
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F48 · A fixed report layout is what Remove top rows is for
- **Claim:** Remove top rows exists for reports that always carry the same fixed header block above the data.
- **Source:** Microsoft Learn, "Filter a table by row position": https://learn.microsoft.com/power-query/filter-row-position
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F49 · Choose columns keeps what you tick
- **Claim:** Choose columns opens a list of every column in the table, where the columns to keep are ticked and the rest are cleared.
- **Source:** Microsoft Learn, "Choose or remove columns": https://learn.microsoft.com/power-query/choose-remove-columns
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F50 · Remove other columns is the same move, inverted
- **Claim:** Remove columns takes away the columns selected, and Remove other columns takes away every column except the ones selected.
- **Source:** Microsoft Learn, "Choose or remove columns": https://learn.microsoft.com/power-query/choose-remove-columns
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F51 · Queries should be designed to survive source changes
- **Claim:** Microsoft's guidance is to design queries to handle expected changes in the source data so that future refreshes keep succeeding.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F52 · Choose columns is the resilient answer to a changing column list
- **Claim:** In Microsoft's list of transformations that keep a query resilient, the case where the number of columns changes but the query only needs specific ones is answered with Choose columns.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F53 · Column names must be unique
- **Claim:** Power Query requires column names to be unique across the table, and renaming a column to a name already in use raises a Column Name Conflict error.
- **Source:** Microsoft Learn, "Rename columns": https://learn.microsoft.com/power-query/rename-column
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F54 · Three ways to rename a column
- **Claim:** A column can be renamed in three ways: double-clicking the header, right-clicking the column and choosing Rename, or the Rename option on the Transform tab.
- **Source:** Microsoft Learn, "Rename columns": https://learn.microsoft.com/power-query/rename-column
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F55 · Replace values has two modes
- **Claim:** Replace values either replaces the whole contents of a cell, which is the default for non-text columns, or replaces instances of a text string inside the values, which is the default for text columns.
- **Source:** Microsoft Learn, "Replace values and errors": https://learn.microsoft.com/power-query/replace-values
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F56 · Advanced replace options are text only
- **Claim:** The advanced replace options, including matching the entire cell contents, are only available on columns of the text data type.
- **Source:** Microsoft Learn, "Replace values and errors": https://learn.microsoft.com/power-query/replace-values
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F57 · Trim removes leading and trailing whitespace
- **Claim:** Text.Trim, which is what the Trim command writes, removes all the leading and trailing whitespace characters from a value by default.
- **Source:** Microsoft Learn, "Text.Trim": https://learn.microsoft.com/powerquery-m/text-trim
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F58 · Clean removes control characters
- **Claim:** Text.Clean, which is what the Clean command writes, returns the value with all its control characters removed.
- **Source:** Microsoft Learn, "Text.Clean": https://learn.microsoft.com/powerquery-m/text-clean
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F59 · Replacing with nothing deletes a text string
- **Claim:** Leaving the Replace with box empty removes the text string being searched for from every row of the column.
- **Source:** Microsoft Learn, "Replace values and errors": https://learn.microsoft.com/power-query/replace-values
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F60 · The auto filter list shows the column's unique values
- **Claim:** The list in the sort and filter menu is called the auto filter list, and it shows the unique values in the column; values left unticked are ignored by the filter.
- **Source:** Microsoft Learn, "Filter by values in a column": https://learn.microsoft.com/power-query/filter-values
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F61 · The filter list is capped at 1,000 distinct values
- **Claim:** The auto filter list loads only the top 1,000 distinct values of a column, and when there are more it says the list might be incomplete and offers a Load more link that fetches another 1,000.
- **Source:** Microsoft Learn, "Filter by values in a column": https://learn.microsoft.com/power-query/filter-values
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F62 · Filter early, and the source may do it for you
- **Claim:** Filtering as early as possible cuts the number of rows Power Query processes in later steps, and for connectors that support query folding the filter is pushed back to the data source.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F63 · Basic filtering allows two rules
- **Claim:** The Filter rows dialog has a basic mode that allows up to two filter rules on one column, and an advanced mode that allows as many as needed across every column in the table.
- **Source:** Microsoft Learn, "Filter by values in a column": https://learn.microsoft.com/power-query/filter-values
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F64 · Remove empty is two rules, not one
- **Claim:** Remove empty applies two filter rules to a column: the first removes null values and the second removes blank values.
- **Source:** Microsoft Learn, "Filter by values in a column": https://learn.microsoft.com/power-query/filter-values
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F65 · The filters offered follow the column's type
- **Claim:** The filters Power Query offers on a column depend on that column's data type.
- **Source:** Microsoft Learn, "Filter by values in a column": https://learn.microsoft.com/power-query/filter-values
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F66 · A column can be split into rows, not just columns
- **Claim:** Split Column by Delimiter can split a column into new rows as well as into new columns.
- **Source:** Microsoft Learn, "Split columns by delimiter": https://learn.microsoft.com/power-query/split-columns-delimiter
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F67 · Splitting into rows keeps the columns and adds rows
- **Claim:** Splitting into rows leaves the table with the same number of columns and many more rows, with each value now in its own cell.
- **Source:** Microsoft Learn, "Split columns by delimiter": https://learn.microsoft.com/power-query/split-columns-delimiter
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F68 · Split columns are named after the original
- **Claim:** Columns created by a split take the name of the original column with a dot and a number appended for each section.
- **Source:** Microsoft Learn, "Split columns by delimiter": https://learn.microsoft.com/power-query/split-columns-delimiter
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F69 · Split at the first delimiter or at every one
- **Claim:** A split can happen at each occurrence of the delimiter, or only at the left-most one.
- **Source:** Microsoft Learn, "Split columns by delimiter": https://learn.microsoft.com/power-query/split-columns-delimiter
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F70 · Split column sits in three places
- **Claim:** The Split Columns by Delimiter command can be reached from three places in the editor.
- **Source:** Microsoft Learn, "Split columns by delimiter": https://learn.microsoft.com/power-query/split-columns-delimiter
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F71 · Merging columns is Table.CombineColumns
- **Claim:** Merging columns combines the columns named into one new column, using a combiner function that supplies the separator.
- **Source:** Microsoft Learn, "Table.CombineColumns": https://learn.microsoft.com/powerquery-m/table-combinecolumns
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F72 · A custom column is for when the built-in commands are not enough
- **Claim:** A custom column is what you write when the add-column commands Power Query provides are not flexible enough, and it is written in the M formula language.
- **Source:** Microsoft Learn, "Add a custom column": https://learn.microsoft.com/power-query/add-custom-column
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F73 · The dialog has a formula box and the column list
- **Claim:** The Custom column dialog holds a formula box for M and a list of the available columns that can be inserted into it.
- **Source:** Microsoft Learn, "Add a custom column": https://learn.microsoft.com/power-query/add-custom-column
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F74 · A custom column becomes an Added custom step
- **Claim:** Adding a custom column adds an Added custom step to the Applied steps list, and selecting that step reopens the dialog with the formula in it.
- **Source:** Microsoft Learn, "Add a custom column": https://learn.microsoft.com/power-query/add-custom-column
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F75 · On the desktop the type has to be set afterwards
- **Claim:** In Power Query Desktop the Custom column dialog has no Data type field, so the data type of a custom column has to be set after the column is created.
- **Source:** Microsoft Learn, "Add a custom column": https://learn.microsoft.com/power-query/add-custom-column
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F76 · Unpivot turns columns into rows
- **Claim:** Unpivot transforms columns into attribute-value pairs, so that columns become rows.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F77 · Unpivot always produces Attribute and Value
- **Claim:** Unpivot always creates the pair as two columns: Attribute, holding the names of the column headings that were unpivoted, and Value, holding what sat underneath them.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F78 · A matrix of rows and date columns is hard to analyse
- **Claim:** A table where the rows are countries and the columns are dates makes a matrix of values that is hard to analyse in a scalable way.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F79 · There are three unpivot commands
- **Claim:** There are three ways to unpivot columns from a table: Unpivot columns, Unpivot other columns, and Unpivot only selected columns.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F80 · Unpivot columns picks up a new column on refresh
- **Claim:** With Unpivot columns, a column added to the source after the query was built is unpivoted as well when the query refreshes.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F81 · Unpivot other columns is for an unknown number of columns
- **Claim:** Unpivot other columns unpivots every column except the ones selected, which is what makes it the right choice when the number of columns coming from the source is unknown.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F82 · Unpivot only selected columns ignores a new column
- **Claim:** Unpivot only selected columns applies to the named columns alone, so a column that appears at the source later is left unchanged.
- **Source:** Microsoft Learn, "Unpivot columns": https://learn.microsoft.com/power-query/unpivot-column
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F83 · Group by collapses rows by the values in columns
- **Claim:** Group by collapses the values in many rows into a single value, grouping the rows by the values in one or more columns.
- **Source:** Microsoft Learn, "Grouping or summarizing rows": https://learn.microsoft.com/power-query/group-by
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F84 · Count rows counts the rows in each group
- **Claim:** Count rows is one of the group-by operations, and it gives the total number of rows in each group.
- **Source:** Microsoft Learn, "Grouping or summarizing rows": https://learn.microsoft.com/power-query/group-by
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F85 · All rows keeps the detail in a table value
- **Claim:** The All rows operation keeps every grouped row inside a table value in each cell, with no aggregation applied.
- **Source:** Microsoft Learn, "Grouping or summarizing rows": https://learn.microsoft.com/power-query/group-by
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F86 · Group by sits in three places
- **Claim:** The Group by command can be reached from three places in the editor.
- **Source:** Microsoft Learn, "Grouping or summarizing rows": https://learn.microsoft.com/power-query/group-by
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F87 · Two group-by operations are online only
- **Claim:** The Count distinct values and Percentile operations are only available in Power Query Online, not on the desktop.
- **Source:** Microsoft Learn, "Grouping or summarizing rows": https://learn.microsoft.com/power-query/group-by
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F88 · Expensive operations belong last
- **Claim:** Some operations have to read the whole source before they return anything, so doing them last keeps the preview responsive while the query is being built.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F89 · Append adds the contents of tables to another
- **Claim:** An append creates a single table by adding the contents of one or more tables to another, and gathers the column headers from all of them to make the new table's schema.
- **Source:** Microsoft Learn, "Append queries": https://learn.microsoft.com/power-query/append-queries
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F90 · Merge joins two tables on matching values
- **Claim:** A merge joins two existing tables together based on matching values from one or more columns.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F91 · Append matches names, not positions
- **Claim:** Power Query appends on the names of the column headers found in both tables, not on where those columns sit in each table.
- **Source:** Microsoft Learn, "Append queries": https://learn.microsoft.com/power-query/append-queries
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F92 · A missing column gives nulls, not an error
- **Claim:** When one appended table lacks a column that another has, the result shows null values in that column rather than failing.
- **Source:** Microsoft Learn, "Append queries": https://learn.microsoft.com/power-query/append-queries
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F93 · Three or more tables append in one step
- **Claim:** The Append dialog has a Two tables mode and a Three or more tables mode that combines any number of queries at once.
- **Source:** Microsoft Learn, "Append queries": https://learn.microsoft.com/power-query/append-queries
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F94 · Append queries as new leaves both originals alone
- **Claim:** Append queries adds a step to the current query, while Append queries as new makes a separate query and leaves both original queries unchanged.
- **Source:** Microsoft Learn, "Append queries": https://learn.microsoft.com/power-query/append-queries
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F95 · Tables append in the order selected
- **Claim:** The tables are appended in the order in which they are selected, starting with the primary table.
- **Source:** Microsoft Learn, "Append queries": https://learn.microsoft.com/power-query/append-queries
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F96 · Which table is left and which is right matters
- **Claim:** The first table selected is the left table and the second is the right, and which is which matters a great deal once a join kind is chosen.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F97 · Names need not match, but types must
- **Claim:** The columns being joined do not need the same name in both tables, but they do need to be the same data type or the merge may not give correct results.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F98 · The merge adds one column you then expand
- **Claim:** A merge adds a single new column named after the right table, holding that table's matching values row by row, which then has to be expanded or aggregated.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F99 · A join kind says how the merge is performed
- **Claim:** A join kind specifies how a merge operation is performed, and Power Query offers left outer, right outer, full outer, inner, left anti and right anti.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F100 · Left outer keeps everything on the left
- **Claim:** A left outer join keeps all rows from the left table and the matching rows from the right one.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F101 · Inner keeps only what matched
- **Claim:** An inner join keeps only the rows that matched in both tables.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F102 · Left anti finds what did not match
- **Claim:** A left anti join brings in only the rows from the left table that have no matching row in the right table, which is how you find what failed to match.
- **Source:** Microsoft Learn, "Left anti join": https://learn.microsoft.com/power-query/merge-queries-left-anti
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F103 · The dialog estimates the matches before you commit
- **Claim:** Once both columns are picked, a message at the bottom of the Merge dialog gives an estimate of how many rows match.
- **Source:** Microsoft Learn, "Merge queries overview": https://learn.microsoft.com/power-query/merge-queries-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F104 · Duplicate makes a copy
- **Claim:** Duplicating a query creates a copy of the query selected.
- **Source:** Microsoft Learn, "Using the Queries pane": https://learn.microsoft.com/power-query/queries-pane
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F105 · Reference points back at the original
- **Claim:** Referencing creates a new query that uses the steps of the previous one without copying them, and any change to the original carries down into the referencing query.
- **Source:** Microsoft Learn, "Using the Queries pane": https://learn.microsoft.com/power-query/queries-pane
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F106 · Split a long query into referenced queries
- **Claim:** Microsoft's guidance is to split a large query into smaller referenced queries, because a query with many steps is easier to manage when one query references the next.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F107 · Extract Previous splits a query in two
- **Claim:** Right-clicking a step and choosing Extract Previous splits the query into two, with the second query starting from a reference to the first.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F108 · Folding translates your steps into the source's language
- **Claim:** Query folding translates the M transformations it can into operations the data source itself can perform, so Power Query runs as much of the query as possible at the source and does the rest in its own engine.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F109 · Folding is usually faster than pulling everything down
- **Claim:** Pushing the work to the source often runs faster than extracting all the data and running every transformation in the Power Query engine.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F110 · Folding has three possible outcomes
- **Claim:** A query folds fully, partially, or not at all, depending on how it is structured.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F111 · Files cannot fold
- **Claim:** Sources with no query engine of their own, such as CSV and Excel files, do not support query folding at all.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F112 · 3.6 million rows versus 10
- **Claim:** In Microsoft's worked example, the versions that did not fully fold pulled more than 3.6 million rows from the database, while the fully folded version asked for 10.
- **Source:** Microsoft Learn, "Query folding examples": https://learn.microsoft.com/power-query/query-folding-examples
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F113 · The unfolded query took 6 minutes 1 second
- **Claim:** In that same worked example, the query that did no folding took an average of 6 minutes and 1 second to process.
- **Source:** Microsoft Learn, "Query folding examples": https://learn.microsoft.com/power-query/query-folding-examples
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F114 · The folded query took 31 seconds
- **Claim:** In that same worked example, the fully folded query producing the same 10 rows took an average of 31 seconds to process.
- **Source:** Microsoft Learn, "Query folding examples": https://learn.microsoft.com/power-query/query-folding-examples
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F115 · View Native Query shows what was sent
- **Claim:** View Native Query, or View data source query, shows the request Power Query sends to the data source, and whether it is offered at all depends on the connector.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F116 · Greyed out means you broke folding
- **Claim:** If View Native Query is disabled on a step while you are using a source that normally offers it, you have added a step that stops query folding.
- **Source:** Microsoft Learn, "Query folding examples": https://learn.microsoft.com/power-query/query-folding-examples
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F117 · Folding indicators are online only
- **Claim:** The query folding indicators beside the applied steps are available only in Power Query Online, not in Power Query Desktop.
- **Source:** Microsoft Learn, "Query folding indicators": https://learn.microsoft.com/power-query/step-folding-indicators
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F118 · An indicator judges the whole query up to that step
- **Claim:** A folding indicator next to a step says whether the query as a whole, up to that point, folds, and the state is not sequential.
- **Source:** Microsoft Learn, "Query folding indicators": https://learn.microsoft.com/power-query/step-folding-indicators
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F119 · Not folding means not everything folds
- **Claim:** A not-folding indicator does not mean nothing folds, it means not everything does, and generally everything up to the last folding indicator folds with the remaining operations happening afterwards.
- **Source:** Microsoft Learn, "Query folding indicators": https://learn.microsoft.com/power-query/step-folding-indicators
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F120 · Capitalize each word never folds
- **Claim:** Capitalize each word is an example of a transformation that never folds back to the source.
- **Source:** Microsoft Learn, "Query folding indicators": https://learn.microsoft.com/power-query/step-folding-indicators
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F121 · Folding can start again
- **Claim:** Folding does not always stop for good once it breaks: removing the column a non-folding transformation touched can let the optimized plan fold the final step even though an earlier step does not, which shows folding depends on both the order of the steps and the transformations used.
- **Source:** Microsoft Learn, "Query folding indicators": https://learn.microsoft.com/power-query/step-folding-indicators
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F122 · Find the step that breaks it, then move steps earlier
- **Claim:** When not all the steps fold, Microsoft's guidance is to find the step that prevents folding and, where possible, move later steps earlier so they can be folded in.
- **Source:** Microsoft Learn, "Query folding guidance in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/power-query-folding
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F123 · The engine may reorder your steps itself
- **Claim:** The Power Query mashup engine may reorder query steps by itself when it generates the source query.
- **Source:** Microsoft Learn, "Query folding guidance in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/power-query-folding
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F124 · A step-level error stops the query loading
- **Claim:** A step-level error prevents the query from loading and shows its reason, message and detail in a yellow pane.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F125 · A missing column is a direct reference that broke
- **Claim:** The error saying the column of the table was not found is triggered when a step refers directly to a column name that no longer exists in the query.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F126 · Somebody renamed the column at the source
- **Claim:** Microsoft's worked example of that error is a column renamed by hand in the source file, which leaves the step that renamed it with nothing to find.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F127 · DataSource.NotFound covers moved and unreachable files
- **Claim:** DataSource.NotFound happens when the source cannot be reached, the credentials are wrong, or the source was moved somewhere else.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F128 · The fix for a moved file is the path
- **Claim:** The fix for a file that has moved is to change the file path the query points at.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F129 · A cell error loads, a step error does not
- **Claim:** A cell-level error does not stop the query loading; it shows the word Error in the cell instead.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F130 · Errors can be removed, replaced or kept
- **Claim:** Power Query offers three ways to handle cell-level errors: remove the rows, replace the errors with a value, or keep only the rows that have them.
- **Source:** Microsoft Learn, "Dealing with errors in Power Query": https://learn.microsoft.com/power-query/dealing-with-errors
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F131 · The Advanced Editor shows the code behind the buttons
- **Claim:** The Advanced Editor shows the code that Power Query Editor writes with each step, and lets you write your own in the M formula language.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-query-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F132 · Open it from the View tab
- **Claim:** The Advanced Editor is opened from the View tab on the ribbon, and the window is closed with Done or Cancel.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/power-query/power-query-ui
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F133 · It tells you whether the code parses
- **Claim:** The Advanced Editor tells you whether the code it is holding is free of syntax errors.
- **Source:** Microsoft Learn, "Use Power Query to transform data": https://learn.microsoft.com/power-query/power-query-ui
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F134 · Step names are the names in the code
- **Claim:** Most of the names shown in the Applied steps pane are used as they are in the M script.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F135 · Editing in the UI rewrites the code
- **Claim:** Any change made to a query through the Power Query editor updates the M script automatically, so renaming a step renames it in the code as well.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F136 · A step name with spaces is a quoted identifier
- **Claim:** A step name containing spaces appears in M wrapped in extra characters as a quoted identifier, which is why the code looks noisier than the step list.
- **Source:** Microsoft Learn, "Overview of query evaluation and query folding in Power Query": https://learn.microsoft.com/power-query/query-folding-basics
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F137 · A query is one let expression
- **Claim:** A query is made of variables, expressions and values wrapped up in a single let expression.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F138 · Each step names the step before it
- **Claim:** Each step of a query builds on a previous step by referring to that step by its variable name.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F139 · in names the step that gets returned
- **Claim:** The in statement names the step whose result the query returns, and it is generally the last step.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F140 · M is case sensitive
- **Claim:** M is a case-sensitive language.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F141 · Spaces in a name need the hash and quotes
- **Claim:** A variable name can hold spaces only by writing it with the # identifier and the name in quotes.
- **Source:** Microsoft Learn, "Quick tour of the Power Query M formula language": https://learn.microsoft.com/powerquery-m/quick-tour-of-the-power-query-m-formula-language
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F142 · A parameter stores a value you reuse
- **Claim:** A parameter is a way to store and manage a single value so that it can be reused.
- **Source:** Microsoft Learn, "Using parameters": https://learn.microsoft.com/power-query/power-query-query-parameters
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F143 · One place to change instead of many
- **Claim:** Parameters make queries easier to update because the value changes in one place instead of being edited in every query that uses it.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F144 · A parameter can feed a connector's own dialog
- **Claim:** A parameter can be used inside a connector's dialog, such as a SQL Server name, so that changing the parameter updates every query that reads it.
- **Source:** Microsoft Learn, "Best practices when working with Power Query": https://learn.microsoft.com/power-query/best-practices
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F145 · A parameter can be an argument to a transform
- **Claim:** A parameter can supply the argument for transformations driven from the interface and for data source functions.
- **Source:** Microsoft Learn, "Using parameters": https://learn.microsoft.com/power-query/power-query-query-parameters
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F146 · A constant query can become a parameter
- **Claim:** A query whose value is a simple constant, such as a date, some text or a number, can be turned into a parameter with Convert to Parameter.
- **Source:** Microsoft Learn, "Using parameters": https://learn.microsoft.com/power-query/power-query-query-parameters
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F147 · Always set the parameter's type
- **Claim:** Microsoft recommends always setting the data type of a parameter.
- **Source:** Microsoft Learn, "Using parameters": https://learn.microsoft.com/power-query/power-query-query-parameters
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F148 · Changing the value updates the query at once
- **Claim:** Changing a parameter's Current Value updates the queries that read it immediately.
- **Source:** Microsoft Learn, "Using parameters": https://learn.microsoft.com/power-query/power-query-query-parameters
- **Kind:** reference
- **Checked:** 2026-09-23

---
