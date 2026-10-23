# Blocks

The backlog. One entry per lesson, in book order. The `/block` skill reads this to know what a
lesson is about before it writes anything.

Nothing here is printed. The lesson is written from it, in plain business English (see VOICE.md).

- **What** is the explainer, in everyday words. It's the plan, not a fact: nothing on a page may rest on it alone.
- **Use when** decides whether the lesson is needed.
- **Action** becomes the DO THIS NOW box.
- **Band** is the one picture on the page. Every picture is hand-drawn, never a screenshot.
- **Facts** lists the findings that back the page. Nothing can be written from a finding until
  you accept it in the Studio's Research tab, which gives it an F id. Until then the line says
  what is still missing.

This book is about Excel's Power Query (Get & Transform). It is a different book from the Power BI
book in `books/power-query`: that one is for Power BI Desktop, this one is for Excel, and the lesson
titles here are checked to differ from every other book's so an omnibus can still be built.

Practice pages use the MESSY sample files in `datasets/excel-power-query/` (see its README for which
file serves which part): a sales export with junk rows, stray spaces, text numbers and repeated
sales; tidy and messy monthly folders; a report built for people with months across the top; and a
fresh messy CSV for the last practice. They are made from the same 240 Corner Shop sales, so once
cleaned they match `datasets/excel-beginner/answers.json` (240 rows, 6325). Every figure a practice
page can print is in `datasets/excel-power-query/answers.json`; a new figure goes into `make.py` and
the answers first, then into FACTS.md as a measurement.

Every Action below names a click the author hasn't checked in the current version of Excel.
Check each against the real menu before the page is written.
Parts 1 and 2 were checked by script in Excel 16 (build 20430) on 2026-10-22: the Data tab and
Get Data menus, the editor's tabs and panes, the Close & Load To menu, the right-click Change Type
menu (Using Locale), the Navigator and the Text/CSV preview. Excel names steps in title case
(Renamed Columns), and the Navigator lists sheets alphabetically.

---

## Part 1 · Before you open the editor

#### Cleaning the Same Data Every Week
- **What:** The export arrives with stray spaces, text numbers and junk rows, and you fix it by hand. Next week's export has the same problems. Say what it costs, then say that Power Query records the fixes once and repeats them.
- **Use when:** the reader fixes the same export by hand more than once. **Skip when:** their data arrives clean.
- **Action:** "Open last week's export and list the fixes you made by hand."
- **Band:** diagram (the same three hand fixes repeated week after week, then done once)
- **Facts:** F1, F2, F3

#### What Power Query Does in Excel
- **What:** Power Query is Excel's tool for bringing data in and shaping it, and Excel calls it Get & Transform. It works on a copy, so the original stays as it was. Name its four jobs: connect, transform, combine, load.
- **Use when:** the reader has heard the name and doesn't know what it is. **Skip when:** they already use it.
- **Action:** "Say aloud which of connect, transform, combine and load you do by hand today."
- **Band:** diagram (four stages in a row: connect, transform, combine, load)
- **Facts:** F4, F5, F6, F7, F8, F9

#### Finding Get & Transform on the Ribbon
- **What:** On the Data tab, the Get & Transform Data group holds the buttons that start a query. Say which version of Excel the reader needs and that the Mac menu is named differently.
- **Use when:** the reader can't find the buttons. **Skip when:** they know the Data tab.
- **Action:** "Click the Data tab and find the Get & Transform Data group."
- **Band:** diagram (the Data tab with the Get & Transform Data group marked)
- **Facts:** F10, F11, F12, F13, F14, F15, F16

#### Turning a List Into an Excel Table
- **What:** A query that starts from a sheet reads an Excel table, and a table grows when rows are added. Show the shortcut for making one and how to name it.
- **Use when:** the reader's list is a plain range. **Skip when:** it is already a table.
- **Action:** "Click a cell in the Sales list and press Ctrl+T."
- **Band:** diagram (a plain range turning into a table with a name)
- **Facts:** F17, F18, F19, F20, F21, F22, F24

#### Your First Query From a Table
- **What:** Click inside the table, choose From Table/Range on the Data tab, and the Power Query Editor opens on a copy of the data. Nothing on the sheet changes yet.
- **Use when:** the reader has a table and no query. **Skip when:** they have run one.
- **Action:** "Click inside the Sales table and choose From Table/Range."
- **Band:** diagram (a table on the sheet and the editor window opening on a copy)
- **Facts:** F23, F24, F25, F26, F33

#### Finding Your Way Around the Editor
- **What:** Name the parts of the window the reader will use: the preview of the data, the Query Settings pane with Applied Steps, and the ribbon tabs Home, Transform and Add Column.
- **Use when:** the reader is lost in the window. **Skip when:** they know it.
- **Action:** "Find the Applied Steps list and the Home tab."
- **Band:** diagram (the editor window with its parts labelled)
- **Facts:** F27, F28, F29, F30, F31

#### How Excel Records Your Steps
- **What:** Every change you make is recorded as a named step, and the steps run in order. It is a recipe, not an edit to the original. Say why a step can be removed without losing the data.
- **Use when:** the reader worries they will break the original. **Skip when:** they trust the steps.
- **Action:** "Click each step in Applied Steps and watch the preview change."
- **Band:** diagram (a recipe card of steps applied top to bottom)
- **Facts:** F32, F33, F34, F35, F36

#### Loading the Result to a Sheet
- **What:** Close & Load sends the finished query to a new sheet as a table. Say what loads and what doesn't, and that the result is a new table, not the original.
- **Use when:** the reader has finished their steps and doesn't know how to get the result out. **Skip when:** they know it.
- **Action:** "Choose Close & Load and look at the new sheet."
- **Band:** diagram (the query result arriving on a new sheet as a table)
- **Facts:** F37, F38, F39, F40, F41

#### Practice: Your First Query
- **What:** Run a first query over a small messy list, load it to a sheet, and check the row count against the original.
- **Use when:** always, at the end of the part. **Skip when:** never.
- **Action:** "Make a query from the messy sales table, load it, and compare the row counts."
- **Band:** diagram (the messy list, the loaded result and the row counts to check)
- **Facts:** F31, F123, F294, F17, F23, F36, F37

## Part 2 · Getting data in

#### Importing From Another Workbook
- **What:** Use Get Data, From File, From Workbook to read a sheet or table from a different Excel file, without opening it by hand or copying and pasting.
- **Use when:** the reader's data sits in another workbook. **Skip when:** it is in the same one.
- **Action:** "Import the Sales sheet from a second workbook."
- **Band:** diagram (two workbooks with an arrow into the editor)
- **Facts:** F42, F43

#### Importing a CSV or Text File
- **What:** A CSV is plain text with commas between the values. Get Data, From Text/CSV shows a preview and lets the reader check the separator before loading.
- **Use when:** the reader's export is a CSV. **Skip when:** it is a workbook.
- **Action:** "Import a CSV file and check the preview before you load it."
- **Band:** diagram (a text file with commas becoming columns in a preview)
- **Facts:** F44, F45, F46, F47, F48, F49

#### Choosing What to Load in the Navigator
- **What:** When a file holds several sheets or tables, the Navigator lists them. Pick one to preview it, tick the ones you want, and choose Load or Transform Data.
- **Use when:** the reader's workbook has more than one sheet. **Skip when:** it has one.
- **Action:** "Open the Navigator on a workbook and preview each sheet."
- **Band:** diagram (the Navigator list with one item ticked and its preview)
- **Facts:** F50, F51, F52, F53, F54

#### Many Files in One Folder, One Table
- **What:** Point Get Data at a folder and Excel stacks every file of the same layout into one table. A new file dropped in the folder is picked up when the query refreshes.
- **Use when:** the reader gets one file a month with the same layout. **Skip when:** they have one file.
- **Action:** "Put three files in a folder and combine them from the folder."
- **Band:** diagram (a folder of files stacking into one table)
- **Facts:** F55, F56, F57, F58, F59, F60, F61, F62

#### Importing a Table From a Web Page
- **What:** Get Data, From Web reads a table from a page address. Say what to check: whether the page changes, and the site's terms of use before reusing its data. No legal claims: the law differs by country.
- **Use when:** the reader copies a table from a web page by hand. **Skip when:** no web data.
- **Action:** "Import a table from a web page and look at the preview."
- **Band:** diagram (a web page table arriving in the editor)
- **Facts:** F63, F64, F65, F287, F288

#### Setting the Kind of Data Early
- **What:** Each column has a kind: number, text, date. Power Query guesses, and the reader should check the guess early. Setting it in the editor makes the setting a step.
- **Use when:** the reader's numbers or dates misbehave. **Skip when:** the guesses are right.
- **Action:** "Check the kind of data on every column of the first query."
- **Band:** diagram (column headers each with a small icon for number, text or date)
- **Facts:** F49, F66, F67, F68, F69, F70, F71

#### Dates That Arrive as Text
- **What:** A date that left-aligns or won't sort is text. Change the column's kind to Date, and say what to do when the day and month are the wrong way round.
- **Use when:** the reader's dates won't sort. **Skip when:** their dates are real dates.
- **Action:** "Change the Date column to the Date kind and check it sorts."
- **Band:** diagram (text dates beside real dates, sorted and unsorted)
- **Facts:** F72, F73, F74, F75, F307

#### Numbers That Arrive as Text
- **What:** A number stored as text won't add up. Change the column's kind to a number type and say what happens to values that can't be converted.
- **Use when:** the reader's totals come out as zero. **Skip when:** their numbers are numbers.
- **Action:** "Change the Amount column to a number kind and look for errors."
- **Band:** diagram (text numbers that add up to nothing, then real numbers that do)
- **Facts:** F76, F77, F78, F306

#### Load to a Sheet, or Only Connect
- **What:** A query can load its result to a sheet or stay as a connection only. Say when each fits, and that a connection-only query can feed other queries.
- **Use when:** the reader doesn't need every query's result on a sheet. **Skip when:** every result is needed.
- **Action:** "Choose Close & Load To and pick Only Create Connection."
- **Band:** diagram (one query loading to a sheet and one staying as a connection)
- **Facts:** F48, F79, F80, F81, F82, F83, F84

#### Practice: Bringing Data In
- **What:** Import the same sales data from a workbook, a CSV and a folder, and check all three give the same row count.
- **Use when:** always, at the end of the part. **Skip when:** never.
- **Action:** "Import the three versions and compare their row counts."
- **Band:** diagram (three sources arriving at the same row count)
- **Facts:** F295, F31, F42, F44, F56, F59

## Part 3 · Cleaning what arrived

#### Using the First Row as Headers
- **What:** When the headings arrive as the first row of data, Use First Row as Headers moves them up. Say what a wrong header row looks like.
- **Use when:** the columns are called Column1, Column2. **Skip when:** the headings already arrive.
- **Action:** "Choose Use First Row as Headers on the messy file."
- **Band:** diagram (headings sitting in the first data row, then moved up)
- **Facts:** F85, F86, F87, F88, F89, F91, F308

#### Removing Junk Rows at the Top
- **What:** Reports often start with a title and a blank line. Remove Rows, Remove Top Rows drops a set number of rows from the top.
- **Use when:** the file has a title above the headings. **Skip when:** it starts with headings.
- **Action:** "Remove the top rows above the headings."
- **Band:** diagram (a title block above the headings being removed)
- **Facts:** F90, F91, F92, F93, F308, F309

#### Removing Blank Rows
- **What:** Blank rows break a list. Remove Rows, Remove Blank Rows drops the ones that are completely empty.
- **Use when:** the list has gaps. **Skip when:** no gaps.
- **Action:** "Remove blank rows from the messy list."
- **Band:** diagram (a list with gaps closing up)
- **Facts:** F94, F95, F96, F124

#### Choosing Which Columns to Keep
- **What:** Choose Columns keeps the ones you tick. Remove Columns drops the rest. Keeping a few named columns is safer than removing the others if the layout may change.
- **Use when:** the file has columns the reader never uses. **Skip when:** every column is used.
- **Action:** "Keep only Date, Region, Product and Amount."
- **Band:** diagram (seven columns narrowing to four)
- **Facts:** F97, F98, F99, F100

#### Renaming Columns
- **What:** Double-click a heading to rename it. Say why clear names matter later, in PivotTables and formulas.
- **Use when:** the headings are cryptic. **Skip when:** they are fine.
- **Action:** "Rename a column to a plain name."
- **Band:** diagram (a cryptic heading becoming a plain one)
- **Facts:** F101, F102, F103, F104

#### Trimming Stray Spaces
- **What:** A space before or after a name makes 'North' and 'North ' look like different items. Transform, Format, Trim removes them.
- **Use when:** the same item counts as two. **Skip when:** no stray spaces.
- **Action:** "Trim the Region column."
- **Band:** diagram (two lookalike items merging into one after a trim)
- **Facts:** F105, F106, F107, F108, F109, F282

#### Fixing Capital Letters
- **What:** Transform, Format offers lowercase, UPPERCASE and Capitalize Each Word. Pick one so the same name always looks the same.
- **Use when:** names arrive in mixed capitals. **Skip when:** they are consistent.
- **Action:** "Capitalize each word in the Product column."
- **Band:** diagram (north, NORTH and North becoming one spelling)
- **Facts:** F105, F106, F110, F111, F112, F119

#### Replacing Values
- **What:** Transform, Replace Values swaps one value for another in a column, for example a misspelling for the right word.
- **Use when:** the same item is spelled two ways. **Skip when:** spellings agree.
- **Action:** "Replace one misspelling in the Region column."
- **Band:** diagram (a misspelling swapped for the right word)
- **Facts:** F109, F113, F114, F115, F116, F122

#### Dropping Repeated Rows
- **What:** Remove Duplicates keeps the first row for each repeated value in the columns you select. Say what counts as a duplicate.
- **Use when:** the same row appears twice. **Skip when:** no repeats.
- **Action:** "Select the ID column and remove duplicates."
- **Band:** diagram (repeated rows collapsing to one each)
- **Facts:** F117, F118, F119

#### Filling Down Empty Cells
- **What:** A report that shows a region once and leaves the rows below it empty needs Fill Down so each row has its own value.
- **Use when:** the list has empty cells that should repeat the cell above. **Skip when:** no empty cells.
- **Action:** "Fill down the Region column."
- **Band:** diagram (empty cells filling from the value above)
- **Facts:** F120, F121, F122

#### Practice: A Clean Sales List
- **What:** Take a messy sales export and clean it step by step, then load it and check it against the known totals.
- **Use when:** always, at the end of the part. **Skip when:** never.
- **Action:** "Clean the messy sales list and check its row count and total."
- **Band:** diagram (the messy list, the finished clean list and the totals to check)
- **Facts:** F123, F124, F125, F309, F308

## Part 4 · Choosing the rows you want

#### Filtering Rows in the Editor
- **What:** The arrow on a heading filters the rows, as in a sheet. In a query the filter is a step, so it repeats on refresh.
- **Use when:** the reader wants only some rows. **Skip when:** every row is needed.
- **Action:** "Filter Region to North."
- **Band:** diagram (a column filter keeping some rows)
- **Facts:** F126, F127, F128, F129, F130

#### Filtering by Text, Number and Date
- **What:** Text, Number and Date filters have their own menus, such as Begins With, Greater Than and In the Previous. Say which menu appears for which kind.
- **Use when:** the reader needs more than a tick list. **Skip when:** a tick list is enough.
- **Action:** "Filter Amount to values greater than a number you choose."
- **Band:** diagram (three filter menus matched to three kinds of data)
- **Facts:** F131, F132, F133, F134, F135

#### Keeping the Top Rows
- **What:** Keep Rows offers Keep Top Rows, Keep Bottom Rows and Keep Range of Rows. Say when each is useful.
- **Use when:** the reader wants a sample or the first rows. **Skip when:** no.
- **Action:** "Keep the top rows of the list."
- **Band:** diagram (the top rows kept and the rest dropped)
- **Facts:** F136, F137, F138, F139, F281

#### Sorting Inside a Query
- **What:** Sorting is a step too. Say that a later step can change the order, so sort last if the order matters.
- **Use when:** the reader wants a sorted result. **Skip when:** order doesn't matter.
- **Action:** "Sort Amount largest first."
- **Band:** diagram (a column sorted, then a later step shuffling it)
- **Facts:** F140, F141, F142, F143, F283, F284

#### Finding and Removing Errors
- **What:** A value that can't convert shows Error in its cell. Remove Errors drops those rows; Keep Errors shows only them so the reader can fix the cause.
- **Use when:** the preview shows Error cells. **Skip when:** no errors.
- **Action:** "Find the rows with errors in the Amount column."
- **Band:** diagram (error cells highlighted, then rows removed)
- **Facts:** F144, F145, F146, F147, F148, F149

#### Adding an Index Column
- **What:** Add Column, Index Column numbers the rows from 0 or 1. Say what it is for: a stable row number to check against.
- **Use when:** the reader needs a row number. **Skip when:** no.
- **Action:** "Add an index column starting from 1."
- **Band:** diagram (a list with a new numbered column)
- **Facts:** F150, F151, F152, F153

#### Practice: Narrowing the List
- **What:** Filter the clean list to one region and the top rows, sort it, and check the result against a PivotTable.
- **Use when:** always, at the end of the part. **Skip when:** never.
- **Action:** "Filter, sort and compare against a PivotTable total."
- **Band:** diagram (a filtered list beside the PivotTable that confirms it)
- **Facts:** F296, F123, F126, F136, F140

## Part 5 · Reshaping a table

#### Splitting a Column at a Delimiter
- **What:** A column holding 'North - Ada' splits into two at the dash. Split Column, By Delimiter does it, and the choices are where to split and how many times.
- **Use when:** two facts share one cell. **Skip when:** they don't.
- **Action:** "Split the Customer column at the dash."
- **Band:** diagram (one cell splitting into two columns)
- **Facts:** F154, F155, F156, F157

#### Splitting a Column by Length
- **What:** Split Column, By Number of Characters cuts a fixed-width code into parts.
- **Use when:** codes have a fixed layout. **Skip when:** no.
- **Action:** "Split a code after its first characters."
- **Band:** diagram (a code cut into fixed-width parts)
- **Facts:** F156, F158, F159, F160

#### Pulling Out Text Before or After
- **What:** Transform, Extract keeps text before or after a delimiter, or a number of characters, without splitting the column.
- **Use when:** the reader needs one part of a cell. **Skip when:** no.
- **Action:** "Extract the text before the dash."
- **Band:** diagram (one part of a cell extracted into place)
- **Facts:** F161

#### Merging Columns Into One
- **What:** Select two columns, choose Merge Columns and pick a separator. The result is a new column.
- **Use when:** the reader needs one label from two columns. **Skip when:** no.
- **Action:** "Merge First name and Last name with a space."
- **Band:** diagram (two columns joining into one)
- **Facts:** F157, F162, F163, F164, F165, F166

#### Adding a Column From Examples
- **What:** Add Column, Column From Examples lets the reader type what they want and Excel guesses the rule. Say that the guess should be checked.
- **Use when:** the reader can show the result but not describe the rule. **Skip when:** the rule is simple.
- **Action:** "Type an example in a new column and check Excel's guess."
- **Band:** diagram (two typed examples and the guessed column)
- **Facts:** F167, F168, F169, F170, F171

#### Adding a Custom Column
- **What:** Add Column, Custom Column takes a formula, with the column names in square brackets. It is not an Excel sheet formula: say how it differs.
- **Use when:** the reader needs a calculated column. **Skip when:** no.
- **Action:** "Add a custom column of Quantity times Unit price."
- **Band:** diagram (a new column calculated from two others)
- **Facts:** F166, F172, F173, F174, F175, F176

#### Adding a Conditional Column
- **What:** Add Column, Conditional Column builds if-then-else rules from boxes, without a formula.
- **Use when:** the reader needs a label from a rule. **Skip when:** no.
- **Action:** "Add a column that says Big when Amount is over a value you choose."
- **Band:** diagram (a rule box deciding Big or Small)
- **Facts:** F177, F178, F179, F180

#### Pulling Year and Month From a Date
- **What:** Add Column, Date offers Year, Month, Day and more. Say what each gives and that month comes as a number unless the reader chooses the name.
- **Use when:** the reader needs a month column. **Skip when:** dates are not used.
- **Action:** "Add a Month name column from Date."
- **Band:** diagram (a date column producing year and month columns)
- **Facts:** F181, F182, F183

#### Unpivoting Columns Into Rows
- **What:** A sheet built for people puts months across the top. Unpivot Columns turns them into rows, one value per row, which is the shape a PivotTable reads.
- **Use when:** months or years run across the columns. **Skip when:** the data is already one row per fact.
- **Action:** "Unpivot the month columns of the wide report."
- **Band:** diagram (a wide table turning into a long list)
- **Facts:** F184, F185, F186, F187, F188

#### Pivoting Rows Into Columns
- **What:** Pivot Column does the reverse: the values of one column become headings. Say which column supplies the values and what happens when more than one row fits a cell.
- **Use when:** the reader needs a grid from a list. **Skip when:** a PivotTable will do.
- **Action:** "Pivot Month into columns."
- **Band:** diagram (a long list turning into a grid)
- **Facts:** F189, F190, F191

#### Transposing a Table
- **What:** Transpose swaps rows and columns. Say when it is the right tool and when Unpivot is.
- **Use when:** the table is on its side. **Skip when:** no.
- **Action:** "Transpose a small table and look at the headers."
- **Band:** diagram (a table flipped on its side)
- **Facts:** F192, F193

#### Grouping and Summarising Rows
- **What:** Group By collapses rows to one per item, with a total, a count or an average. It does what a PivotTable does, but as a step.
- **Use when:** the reader wants a summary as a table that refreshes. **Skip when:** a PivotTable is enough.
- **Action:** "Group by Region and sum Amount."
- **Band:** diagram (many rows grouped to one row per region)
- **Facts:** F194, F195, F196

#### Practice: Reshaping a Report
- **What:** Take a wide monthly report, unpivot it, add a month name and group it, then check one total.
- **Use when:** always, at the end of the part. **Skip when:** never.
- **Action:** "Unpivot the wide report, then group it and check one total."
- **Band:** diagram (the wide report, the long list and the grouped result)
- **Facts:** F297

## Part 6 · Combining queries

#### Stacking or Joining: Which Do You Need
- **What:** Append stacks tables with the same columns, one under another. Merge joins tables side by side on a matching column. Show how to tell which.
- **Use when:** the reader has two lists to bring together. **Skip when:** one list.
- **Action:** "Say whether two of your lists need stacking or joining."
- **Band:** diagram (two tables stacked and two tables joined)
- **Facts:** F197, F198

#### Appending Tables One Under Another
- **What:** Home, Append Queries stacks a second table under the first. The columns match by name.
- **Use when:** the reader has one table per month. **Skip when:** one table.
- **Action:** "Append the January and February tables."
- **Band:** diagram (two tables stacked into one)
- **Facts:** F199, F200, F201

#### Merging Tables Side by Side
- **What:** Home, Merge Queries joins on a matching column in each table, so the reader can bring in columns from the second table.
- **Use when:** the reader needs columns from a second table. **Skip when:** no.
- **Action:** "Merge Sales with Products on Product."
- **Band:** diagram (two tables joined on a shared column)
- **Facts:** F202, F203, F204, F205, F206

#### The Join Kinds in Plain Words
- **What:** Left outer keeps every row of the first table. Inner keeps only matches. Name them in plain words, with the effect on the row count.
- **Use when:** the reader doesn't know which join to pick. **Skip when:** they know.
- **Action:** "Try two join kinds and compare the row counts."
- **Band:** diagram (two circles, with a different part kept by each join kind)
- **Facts:** F207, F208, F209, F210, F211, F277, F278, F279

#### Looking Up a Value With a Merge
- **What:** A merge does what XLOOKUP does, for the whole list, and keeps working when the data changes. Show the Products sheet filling in a Category column.
- **Use when:** the reader uses XLOOKUP down a long column. **Skip when:** a few lookups.
- **Action:** "Merge Sales with Products and expand the Category column."
- **Band:** diagram (a Category column arriving from a second table)
- **Facts:** F206, F211, F212, F213, F285, F286

#### Duplicating or Referencing a Query
- **What:** Duplicate copies a query with its steps. Reference starts a new query from the result of an existing one. Say when each fits.
- **Use when:** the reader needs two outputs from one source. **Skip when:** one output.
- **Action:** "Reference a query and add one different step."
- **Band:** diagram (one query branching into two)
- **Facts:** F214, F215, F216, F217

#### Checking a Combined Result
- **What:** Check the row count and one total after every append or merge. Say what a changed count means.
- **Use when:** the reader has just combined tables. **Skip when:** no.
- **Action:** "Compare the combined row count with the sum of the parts."
- **Band:** diagram (a row-count check before and after a merge)
- **Facts:** F204, F210, F218, F219

#### Practice: Combining Two Lists
- **What:** Append two months of sales, merge in the Products sheet and check the row count and total.
- **Use when:** always, at the end of the part. **Skip when:** never.
- **Action:** "Append, merge and check the row count and total."
- **Band:** diagram (two lists, a lookup table and the finished result)
- **Facts:** F298, F299

## Part 7 · Keeping it working

#### Refreshing a Query
- **What:** New data in the source doesn't appear until the query refreshes. Select a cell in the result and choose Query, Refresh, or right-click the query in Queries & Connections and choose Refresh. Data, Refresh All (Ctrl+Alt+F5) refreshes everything. Give no shortcut for one query: Microsoft's pages disagree about Ctrl+F5 and Alt+F5.
- **Use when:** the reader's result looks out of date. **Skip when:** it is current.
- **Action:** "Add a row to the source and refresh the query."
- **Band:** diagram (a new row in the source arriving after a refresh)
- **Facts:** F220, F221, F222, F223, F276, F280, F289, F290, F291, F292, F293

#### Refreshing When the File Opens
- **What:** In the query's properties the reader can choose to refresh when the file opens. Say what that costs when the data is big.
- **Use when:** someone else opens the file and expects fresh numbers. **Skip when:** no one else.
- **Action:** "Open Query Properties and tick the box for refresh on open."
- **Band:** diagram (opening the file triggering a refresh)
- **Facts:** F224, F225, F226, F227

#### How Queries Depend on Each Other
- **What:** Query Dependencies draws which queries feed which. Say why it matters before deleting or changing one.
- **Use when:** the reader has several queries. **Skip when:** one query.
- **Action:** "Open Query Dependencies on your queries."
- **Band:** diagram (a small dependency map of queries)
- **Facts:** F228, F229, F230

#### Naming Steps and Queries Clearly
- **What:** Rename a step or a query so the next reader can see what it does. A name is cheap and saves an afternoon.
- **Use when:** the query has steps called Changed Type1. **Skip when:** names are clear.
- **Action:** "Rename a query and a step."
- **Band:** diagram (cryptic names beside clear ones)
- **Facts:** F231, F232, F233, F234

#### Editing or Deleting an Earlier Step
- **What:** Click a step to see the data at that point. Delete it, or change it in the gear icon beside it. Say what happens to the steps after it.
- **Use when:** the reader made a mistake earlier in the recipe. **Skip when:** no.
- **Action:** "Change an earlier step and check the later ones still work."
- **Band:** diagram (a recipe with one earlier step changed)
- **Facts:** F235, F236, F237, F238, F239

#### When a Step Shows an Error
- **What:** A step can fail while the earlier ones work. Click each step in turn to find the first one that breaks.
- **Use when:** the query shows an error. **Skip when:** no error.
- **Action:** "Click through the steps to find the first one with an error."
- **Band:** diagram (steps in order with the first failing one marked)
- **Facts:** F240, F241, F242, F243

#### When a Heading Was Renamed
- **What:** If a column's heading changes in the source, the step that uses it can't find it. Fix the step to use the new name.
- **Use when:** a refresh says it can't find a column. **Skip when:** no.
- **Action:** "Rename a source heading, refresh and fix the step."
- **Band:** diagram (a step looking for a heading that has changed)
- **Facts:** F104, F243, F244, F245, F246

#### When the File Has Moved
- **What:** If the file moves, the query can't find it. Change the Source step to point at the new location.
- **Use when:** a refresh says it can't find the file. **Skip when:** the file is where it was.
- **Action:** "Move the source file, refresh and repair the Source step."
- **Band:** diagram (a path pointing at a file that has moved)
- **Facts:** F247, F248, F249, F250

#### Using a Parameter for the File Path
- **What:** A parameter is one place to change the path used by the queries. Say what it is and where it lives.
- **Use when:** the same path is used in several queries. **Skip when:** one query.
- **Action:** "Make a parameter for the file path."
- **Band:** diagram (one parameter feeding several queries)
- **Facts:** F251, F252, F253, F254, F255

#### Practice: Breaking and Fixing a Query
- **What:** Break a working query three ways, by renaming a heading, moving the file and adding an unexpected value, and fix each.
- **Use when:** always, at the end of the part. **Skip when:** never.
- **Action:** "Break the query, read the message and fix it."
- **Band:** diagram (the three breaks and the fix for each)
- **Facts:** F256

## Part 8 · Putting it to work

#### Loading a Query Into a PivotTable
- **What:** Close & Load To can build a PivotTable straight from a query. Say why that beats pivoting a pasted copy.
- **Use when:** the reader wants a PivotTable from cleaned data. **Skip when:** they don't use PivotTables.
- **Action:** "Load a query to a PivotTable report."
- **Band:** diagram (a query feeding a PivotTable)
- **Facts:** F257, F258, F259

#### Loading to the Data Model
- **What:** The Data Model holds tables inside the workbook for PivotTables to use. Say what it is, and that it has a tick box when a query loads.
- **Use when:** the reader needs more than one table in a PivotTable. **Skip when:** one table.
- **Action:** "Load a query to the Data Model."
- **Band:** diagram (queries loaded into the Data Model and read by a PivotTable)
- **Facts:** F260, F261, F262, F263, F264

#### Reading the Code Behind a Step
- **What:** Each step is a line of the Power Query language, M. The formula bar shows it. The reader doesn't need to write it, only to read it.
- **Use when:** the reader wants to know what Excel wrote. **Skip when:** they never look.
- **Action:** "Click a step and read its formula bar text."
- **Band:** diagram (a step beside the line of M it wrote)
- **Facts:** F175, F265, F266, F267, F268, F273

#### Opening the Advanced Editor
- **What:** The Advanced Editor shows the whole query as text. Say how to open it and how to look without changing anything.
- **Use when:** the reader wants to see the whole query. **Skip when:** no.
- **Action:** "Open the Advanced Editor and close it without a change."
- **Band:** diagram (a recipe card beside the full text of the query)
- **Facts:** F269, F270, F271, F272, F273

#### Practice: Monthly Messy Files
- **What:** Combine a folder of messy monthly files into one clean table, load it to a PivotTable and check the total.
- **Use when:** always. **Skip when:** never.
- **Action:** "Combine the folder, clean it, load it and check the total."
- **Band:** diagram (a folder of files becoming a PivotTable)
- **Facts:** F300

#### Practice: Someone Else's Report
- **What:** Take a report built for people, with titles, subtotals and months across the top, and turn it into a clean list.
- **Use when:** always. **Skip when:** never.
- **Action:** "Remove the junk, unpivot the months and load the list."
- **Band:** diagram (a report built for people becoming a clean list)
- **Facts:** F301

#### Practice: Messy File to PivotTable
- **What:** Start with a fresh messy file and finish with a refreshing PivotTable, using only what the book has taught, with no steps given.
- **Use when:** always, as the end of the practice. **Skip when:** never.
- **Action:** "Copy the workbook and build the query and PivotTable with no steps given."
- **Band:** diagram (the whole workflow from messy file to PivotTable)
- **Facts:** F302

#### Mistakes Almost Everyone Makes
- **What:** Name the usual slips: loading every query to a sheet, forgetting to refresh, pasting values over a result, and cleaning by hand beside a query.
- **Use when:** the reader is about to trust a result. **Skip when:** never.
- **Action:** "Check your queries against the list of slips."
- **Band:** diagram (four slips, each with its fix)
- **Facts:** F274, F275, F276

#### Where to Go After Power Query
- **What:** What the next skill is. The same Power Query is in Power BI Desktop, with the same editor, and Power BI can refresh on a schedule. Which book to name next is the author's call.
- **Use when:** always, the last page. **Skip when:** never.
- **Action:** "Pick one messy list of your own and decide which steps it needs."
- **Band:** diagram (a messy list becoming a clean one that refreshes)
- **Facts:** F303, F304, F305
