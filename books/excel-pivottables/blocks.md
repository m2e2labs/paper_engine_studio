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

Practice pages use the sample file `datasets/excel-beginner/Corner Shop sales.xlsx` (sheets Sales,
Products, Targets and Staff), the same one book 1 uses. It has 240 sales across one year, four
regions and five products, so every lesson here can use it. Two things it can't give you: it has
no Category column on the Sales sheet (that sits on Products), and only one year, so 'compared with
last year' lessons aren't possible. If the author wants a richer file, `make.py` writes it. Its
figures are in `datasets/excel-beginner/answers.json`; any new figure a practice page prints
has to be added there first.

Every Action below names a click the author hasn't checked in the current version of Excel.
Check each against the real menu before the page is written.

---

## Part 1 · Before you build one

#### Why PivotTables Exist
- **What:** You can answer 'how much by region?' with a SUMIF per region. Then someone asks about product, then month, and you're writing formulas all afternoon. A PivotTable answers all of them from one place.
- **Use when:** the reader has only ever summarised with SUMIF or by hand. **Skip when:** they already build PivotTables.
- **Action:** "On the Sales sheet, click cell A1. Look at the seven headings in row 1 and say which three you'd want totals by."
- **Band:** diagram (one list of rows, three different summaries coming out of it)
- **Facts:** F1

#### Data a PivotTable Can Read
- **What:** A PivotTable needs one heading per column, one kind of thing per column and no blank rows or columns in the middle. Say what 'one row per sale' means and why it matters.
- **Use when:** the reader's own data has gaps, merged cells or a title above the headings. **Skip when:** their data already sits in a clean list.
- **Action:** "Scroll the Sales sheet to row 241 and check there's no blank row anywhere between row 1 and the last sale."
- **Band:** diagram (a clean list beside a messy one, with the problems marked)
- **Facts:** F2, F3

#### Tidying a List Before You Pivot
- **What:** Fix the three things that trip a PivotTable up before you start: a blank row, a merged heading, two kinds of thing in one column.
- **Use when:** the reader's list came from someone else or from a download. **Skip when:** their list is already tidy.
- **Action:** "On the Sales sheet, look for a blank row or a merged cell in A1:G241 and fix any you find."
- **Band:** diagram (a messy list with three problems circled, the same list tidied)
- **Facts:** F4, F5, F6

#### Inserting Your First PivotTable
- **What:** Click one cell in the data, choose Insert, then PivotTable, and let Excel put it on a new sheet. The first result is empty on purpose.
- **Use when:** the reader has a clean list and has never inserted one. **Skip when:** they have done it before.
- **Action:** "Click cell A1 on the Sales sheet, choose Insert, then PivotTable, and click OK."
- **Band:** diagram (the Insert tab, the dialog and the empty PivotTable on a new sheet)
- **Facts:** F7, F8

#### Where the PivotTable Goes
- **What:** Excel asks where to put it. A new sheet keeps it out of the way of your data; the same sheet puts it beside the data and risks the two colliding as the data grows.
- **Use when:** the reader reaches the Insert dialog and isn't sure which option to choose. **Skip when:** they always use a new sheet.
- **Action:** "Insert a PivotTable from the Sales sheet and choose New Worksheet, then rename the new sheet Report."
- **Band:** diagram (data and PivotTable on two sheets, then on one sheet colliding)
- **Facts:** F9

#### The Field List and Its Four Boxes
- **What:** The field list holds every heading from your data. Four boxes sit under it: Filters, Columns, Rows and Values. Where you drop a heading decides what the PivotTable does with it.
- **Use when:** the reader has an empty PivotTable and doesn't know what to do next. **Skip when:** they already drag fields without thinking.
- **Action:** "Tick Region in the field list. Then drag Amount into the Values box."
- **Band:** diagram (the field list with arrows from each heading to one of the four boxes)
- **Facts:** F10, F11, F12, F13, F14, F15, F17

#### Reading Row Labels and Grand Totals
- **What:** Say what each part of a finished PivotTable is: the row labels, the column labels, the values, the grand total row and the grand total column.
- **Use when:** the reader has built one and can't yet read it. **Skip when:** they read PivotTables already.
- **Action:** "In your Region PivotTable, find the Grand Total and check it against the total of the Amount column on the Sales sheet."
- **Band:** diagram (a small PivotTable with each part labelled)
- **Facts:** F12, F13, F14, F18, F19

#### Excel's Recommended PivotTables
- **What:** Excel offers some ready-made PivotTables for your data. Useful for a first look, and a fair way to see what's possible; say what to check before trusting one.
- **Use when:** the reader wants a starting point or wants to see ideas. **Skip when:** they know what they want to build.
- **Action:** "Click a cell in the Sales data and choose Insert, then Recommended PivotTables."
- **Band:** diagram (the dialog with several previews, one picked)
- **Facts:** F20, F21, F22

#### Practice: Your First PivotTable
- **What:** Build amount by region from the Corner Shop sales, then check it against the total you already know from the first book.
- **Use when:** always, at the end of the part. **Skip when:** never.
- **Action:** "Build Amount by Region on a new sheet and check that the grand total matches the Sales sheet total."
- **Band:** diagram (the finished table beside the four figures to check)
- **Facts:** F7, F9, F15, F18, F19

## Part 2 · Rows, columns and values

#### Putting Fields in Rows
- **What:** Each different item in a field becomes one row, and the values are worked out for each one. Moving a field out of Rows takes its rows away again, and your data isn't touched.
- **Use when:** the reader can insert a PivotTable but the layout isn't what they pictured. **Skip when:** they already shape rows with confidence.
- **Action:** "Drag Product into Rows, then drag it back out."
- **Band:** diagram (list rows collapsing into one row per product)
- **Facts:** F8, F13, F15, F23

#### Moving and Removing Fields
- **What:** Drag a field from one box to another to change the view; drag it out to remove it. The data is never touched, so there's nothing to break.
- **Use when:** the reader is afraid of 'ruining' the PivotTable. **Skip when:** they already move fields freely.
- **Action:** "Drag Region from Rows to Columns and back again."
- **Band:** diagram (one field moving between boxes, the table redrawing)
- **Facts:** F8, F23, F24, F25

#### Values: Choosing What Gets Added Up
- **What:** The Values box is where the numbers go. Say what Excel does by default, and how to check which calculation a field is using.
- **Use when:** the reader sees 'Count of Amount' where they expected a total. **Skip when:** they already set the calculation themselves.
- **Action:** "Drag Quantity into Values as well and read the label Excel gives it."
- **Band:** diagram (two value fields side by side, each with its calculation named)
- **Facts:** F14, F18, F26, F44

#### Changing the Calculation
- **What:** The same field can be added up, counted, averaged, or the largest or smallest found. Right-click a value to switch.
- **Use when:** the reader wants an average sale, not a total. **Skip when:** a total is what they need.
- **Action:** "Right-click an Amount value, choose Summarise Values By, then Average."
- **Band:** diagram (the same four numbers shown as sum, count, average and max)
- **Facts:** F27, F28, F29, F30, F31, F32

#### Putting Two Values Side by Side
- **What:** Add Amount and Quantity together, or the same field twice with two different calculations. They appear as two columns.
- **Use when:** the reader wants totals and counts in one table. **Skip when:** one value is enough.
- **Action:** "Drag Amount into Values a second time and set the second to Count."
- **Band:** diagram (a table with two value columns, each labelled by its calculation)
- **Facts:** F33, F34

#### Spreading a Field Across Columns
- **What:** Drop a field into Columns and each item becomes a column heading. Region down the side and Product across the top gives a two-way table from one drag.
- **Use when:** the reader wants to compare two things at once. **Skip when:** they only need one list.
- **Action:** "Drag Product into Columns with Region still in Rows."
- **Band:** diagram (rows and columns crossing to make a grid of totals)
- **Facts:** F12, F13, F19, F35

#### Stacking Two Fields in Rows
- **What:** Put a second field under the first in Rows and each region splits into its products, with a subtotal for each region.
- **Use when:** the reader wants detail inside each group. **Skip when:** one level of grouping is enough.
- **Action:** "Drag Product into Rows under Region and look for the subtotal rows."
- **Band:** diagram (regions nesting products, subtotals highlighted)
- **Facts:** F19, F36, F37, F38

#### Expanding and Collapsing Groups
- **What:** Click the small plus and minus beside an item to show or hide the rows inside it. Good for a report that opens on the headlines.
- **Use when:** the reader has two fields in Rows and wants a shorter view. **Skip when:** they have one field in Rows.
- **Action:** "Collapse every region in your Region and Product table, then open just North."
- **Band:** diagram (a grouped table with one region open and the others closed)
- **Facts:** F39, F40, F41, F42, F43

#### Renaming a Heading in a PivotTable
- **What:** Type over a heading such as 'Sum of Amount' to call it something a reader understands. Say what to do if Excel refuses because the name is already a field.
- **Use when:** the reader wants a report they can hand to someone. **Skip when:** the default headings are fine.
- **Action:** "Click the 'Sum of Amount' heading and type Sales."
- **Band:** diagram (a default heading becoming a plain one)
- **Facts:** F44, F45, F46

#### Formatting Numbers Inside a PivotTable
- **What:** Format the numbers through the value settings, not by formatting the cells, so the format survives a refresh.
- **Use when:** the reader formats the cells and the formatting vanishes on refresh. **Skip when:** they don't need a format.
- **Action:** "Right-click an Amount value, choose Number Format and set it to Number with a thousands separator."
- **Band:** diagram (a cell format lost on refresh versus a value-setting format that stays)
- **Facts:** F47, F48, F49

#### Practice: Amount by Region and Product
- **What:** Build one table that shows Amount for every region and product, then answer three questions from it without a formula.
- **Use when:** always, at the end of the part. **Skip when:** never.
- **Action:** "Build Region in Rows, Product in Columns and Amount in Values, then find the biggest single cell."
- **Band:** diagram (the finished grid with three cells marked)
- **Facts:** F7, F9, F12, F13, F14, F18, F19, F35

## Part 3 · Sorting, filtering and layout

#### Sorting a PivotTable
- **What:** Sort the rows by the numbers rather than by the names, so the best region comes first. A sort sticks when the data changes.
- **Use when:** the reader wants the biggest first. **Skip when:** the order of the names is fine.
- **Action:** "Click any Amount in the Region rows and sort largest to smallest."
- **Band:** diagram (rows reordering by size)
- **Facts:** F50, F51, F52, F53, F54, F55, F56, F57

#### Filtering Rows and Columns
- **What:** The arrow next to Row Labels hides items you don't want to see. The items still count in the grand total unless you say otherwise, and the lesson should say which.
- **Use when:** the reader wants one region or a few products only. **Skip when:** they need every item.
- **Action:** "Open the Row Labels arrow and untick one region."
- **Band:** diagram (a filter menu with one item unticked and the table before and after)
- **Facts:** F58, F59, F60, F61

#### Filtering by Words in a Label
- **What:** Keep only the items whose label begins with, ends with or contains certain letters. Say how this differs from ticking items.
- **Use when:** the reader has many items and wants a family of them. **Skip when:** a few ticks are enough.
- **Action:** "Open the Row Labels arrow, choose Label Filters, and keep products that contain 'o'."
- **Band:** diagram (a list narrowing by a letter test)
- **Facts:** F59, F62

#### Filtering by a Value
- **What:** Keep only the rows whose total is above or below a number you choose, such as regions over 1,000.
- **Use when:** the reader wants to cut out the small ones. **Skip when:** they want every item.
- **Action:** "Apply a Value Filter to Region for Amount greater than 1,000."
- **Band:** diagram (bars with a threshold line, the short ones dropped)
- **Facts:** F63

#### Showing Only the Top Items
- **What:** Keep the top three products by Amount and drop the rest. Say where the setting lives and what happens to the others.
- **Use when:** the reader wants a short league table. **Skip when:** they want every item.
- **Action:** "Filter Product to the top 3 by Amount."
- **Band:** diagram (five products with the top three kept)
- **Facts:** F63, F64, F65, F66, F67

#### One Filter for the Whole Table
- **What:** Drag a field into Filters and a drop-down appears above the table, so you can show one region at a time without changing the layout.
- **Use when:** the reader wants to flip between regions on one table. **Skip when:** they want all regions visible.
- **Action:** "Drag Region into the Filters box and pick South from the drop-down above the table."
- **Band:** diagram (a drop-down above a table changing what's below)
- **Facts:** F11, F68

#### Clearing Filters and Starting Again
- **What:** How to see that a filter is on, and how to clear one filter or all of them. Say what a filtered grand total is a total of.
- **Use when:** the reader can't work out why a number is smaller than expected. **Skip when:** never.
- **Action:** "Clear every filter on your PivotTable and check the grand total returns to 6,325."
- **Band:** diagram (a filter icon on a heading, the table with and without it)
- **Facts:** F70, F71, F72

#### Compact, Outline or Tabular
- **What:** The same PivotTable can print in three layouts. Compact is the default; Tabular puts every field in its own column and reads most like a normal sheet.
- **Use when:** the reader is going to print or share the table. **Skip when:** the default already reads well.
- **Action:** "On the Design tab, choose Report Layout and switch to Show in Tabular Form."
- **Band:** diagram (the same table in the three layouts)
- **Facts:** F73, F74, F75, F76, F77

#### Repeating Labels and Blank Rows
- **What:** Repeat each region's name on every row so the table can be copied and sorted elsewhere, and insert a blank row after each group so a long table breathes.
- **Use when:** the reader needs to copy the table or read a long one. **Skip when:** the default looks fine.
- **Action:** "In Tabular layout, turn on Repeat All Item Labels and add a blank row after each item."
- **Band:** diagram (a table with labels once, then repeated)
- **Facts:** F78, F79

#### Choosing a PivotTable Style
- **What:** The Design tab holds ready-made colours for a PivotTable. Pick one, switch banded rows on or off, and stop there.
- **Use when:** the reader wants a table that looks finished. **Skip when:** never.
- **Action:** "On the Design tab, open the PivotTable Styles gallery and pick a light one."
- **Band:** diagram (the same table in three styles)
- **Facts:** F80, F81, F82, F83

#### Practice: A Tidy Regional Report
- **What:** Turn a rough PivotTable into one you'd hand to someone: sorted, filtered and in a layout that reads.
- **Use when:** always, at the end of the part. **Skip when:** never.
- **Action:** "Sort regions by Amount, keep the top three products and switch to tabular layout."
- **Band:** diagram (before and after of the same table)
- **Facts:** F52, F53, F64, F65, F67, F76, F77

## Part 4 · Grouping

#### Grouping Dates by Month
- **What:** Put Date in Rows and Excel has 240 different days. Group them by month and you get twelve rows. Say what happens if the dates don't group.
- **Use when:** the reader wants a monthly view. **Skip when:** their dates already come as months.
- **Action:** "Drag Date into Rows, then group the dates by Months."
- **Band:** diagram (many dates folding into twelve months)
- **Facts:** F84, F85, F86, F87

#### Grouping Dates by Quarter
- **What:** Choose more than one level at once and the PivotTable lets you open and close each year and quarter.
- **Use when:** the reader has more than one year, or wants a quarterly view. **Skip when:** monthly is enough.
- **Action:** "Group Date by Quarters as well as Months."
- **Band:** diagram (months nesting inside quarters)
- **Facts:** F86, F88

#### Why Dates Won't Group
- **What:** When a date column holds text, or has a blank or a bad date in it, the Group option goes grey or refuses. Find the cause and fix it at the source. Pairs with the first book's dates lessons.
- **Use when:** the reader tries to group dates and nothing happens. **Skip when:** their dates group fine.
- **Action:** "On the Sales sheet, check that Date in A2:A241 is right-aligned (a real date) and not left-aligned (text)."
- **Band:** diagram (a real date and a text date side by side, only one grouping)
- **Facts:** F93, F94

#### Grouping by Every Seven Days
- **What:** Group dates by days with a step of 7 to get a week-by-week view. Say what the first week's start date means.
- **Use when:** the reader wants weekly totals. **Skip when:** months are enough.
- **Action:** "Group Date by Days and set the number of days to 7."
- **Band:** diagram (days folding into weeks)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Grouping Numbers Into Bands
- **What:** Group Amount into steps of 20 and see how many sales fall in each band. A way to see the shape of your numbers.
- **Use when:** the reader wants to know how many sales were small, medium or large. **Skip when:** they don't need bands.
- **Action:** "Put Amount in Rows and group it with a step of 20."
- **Band:** diagram (numbers falling into equal bands)
- **Facts:** F29, F33, F84, F85, F89

#### Grouping Text Items by Hand
- **What:** Select two or three items, such as North and East, and group them under a name you choose.
- **Use when:** the reader wants a custom group the data doesn't have. **Skip when:** the data already has the group.
- **Action:** "Select two regions in the rows and group them."
- **Band:** diagram (two items pulled into a named group)
- **Facts:** F84, F90, F91

#### Ungrouping and Changing a Group
- **What:** Undo a grouping, or regroup with a different step. Nothing in the data changes, only how the PivotTable folds it.
- **Use when:** the reader grouped something the wrong way. **Skip when:** never.
- **Action:** "Ungroup your monthly dates, then group them by Quarters instead."
- **Band:** diagram (grouped then ungrouped rows)
- **Facts:** F8, F84, F86, F92

#### Adding a Helper Column to the Data
- **What:** Some questions need a column the data doesn't have, such as the weekday of each sale. Add it to the source with a formula, then refresh. Uses a lookup or text formula from the first book.
- **Use when:** the reader needs a grouping the PivotTable can't make. **Skip when:** the data already has the column.
- **Action:** "Add a column H to the Sales sheet that gives the weekday of each Date, then refresh the PivotTable."
- **Band:** diagram (a new column added to the source, then appearing in the field list)
- **Facts:** F95, F96, F97, F98, F99, F100, F101

#### Practice: Sales by Month and Quarter
- **What:** Build a monthly and quarterly view of the year, and find the best month.
- **Use when:** always, at the end of the part. **Skip when:** never.
- **Action:** "Group Date by Months and Quarters and find the month with the highest Amount."
- **Band:** diagram (the finished grouped table)
- **Facts:** F52, F84, F86, F88, F92

## Part 5 · Showing values differently

#### Percent of the Grand Total
- **What:** Show each region as a share of everything sold. The numbers underneath don't change; only how they're shown.
- **Use when:** the reader is asked 'what share is North?'. **Skip when:** totals are all they need.
- **Action:** "Right-click an Amount value and choose Show Values As, then % of Grand Total."
- **Band:** diagram (the same figures shown as amounts and as shares)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Percent of a Row or a Column
- **What:** Show each product as a share of its own region, or each region as a share of its own product. Which one you choose answers a different question.
- **Use when:** the reader has a two-way table and wants shares. **Skip when:** a grand-total share is enough.
- **Action:** "Show Values As, then % of Row Total, and read what each row adds up to."
- **Band:** diagram (the same grid with rows adding to 100 and columns adding to 100)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Rank Largest to Smallest
- **What:** Show each region's rank rather than its amount. First place is 1. Say what a tie looks like.
- **Use when:** the reader is asked 'who came first?'. **Skip when:** amounts are enough.
- **Action:** "Show Values As, then Rank Largest to Smallest, based on Region."
- **Band:** diagram (amounts turning into 1, 2, 3, 4)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Running Totals
- **What:** Show the total so far at the end of each month. Say what Excel needs set before it can do this.
- **Use when:** the reader wants to watch a total build up. **Skip when:** single months are enough.
- **Action:** "Show Values As, then Running Total In, based on Date."
- **Band:** diagram (monthly bars with a climbing line)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Change From the Previous Month
- **What:** Show how much each month moved compared with the one before. Say what the first month shows and why.
- **Use when:** the reader is asked 'are we up or down?'. **Skip when:** they have only one period.
- **Action:** "Show Values As, then Difference From, based on the previous month."
- **Band:** diagram (two months, a gap between them and the difference marked)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Percent Change From the Previous Month
- **What:** Show each month's change as a percentage of the month before. The first month has nothing before it, and the lesson should say what is shown instead.
- **Use when:** the reader is asked 'by how much did we grow?'. **Skip when:** the plain difference is enough.
- **Action:** "Show Values As, then % Difference From, based on the previous month."
- **Band:** diagram (two months with a percentage change marked)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Comparing Everything to One Item
- **What:** Pick one item, such as North, as the base and show every other region as a difference from it.
- **Use when:** the reader has a clear benchmark. **Skip when:** no benchmark exists.
- **Action:** "Show Values As, then Difference From, with Region as the field and North as the item."
- **Band:** diagram (bars measured against one reference bar)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Putting Back the Normal View
- **What:** Switch any of these views off and get the plain numbers back with No Calculation.
- **Use when:** the reader got lost in the Show Values As menu. **Skip when:** never.
- **Action:** "Set your changed value back to No Calculation."
- **Band:** diagram (a table returning to plain amounts)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Practice: Who Is Growing
- **What:** Use one PivotTable to answer 'what share is each product?' and 'how did December compare with November?'
- **Use when:** always, at the end of the part. **Skip when:** never.
- **Action:** "Show product share of the grand total, then December's change from November."
- **Band:** diagram (the two answers side by side)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

## Part 6 · Calculations and keeping it right

#### Adding Your Own Calculation: A Calculated Field
- **What:** Make a new field from existing ones, such as Amount divided by Quantity, and use it like any other. Say what a calculated field can't do.
- **Use when:** the reader needs a figure the data doesn't hold. **Skip when:** the data already has it.
- **Action:** "Add a calculated field that works out the average price per item."
- **Band:** diagram (two fields combining into a third)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Counting Each Item Once
- **What:** Count how many different products sold in each region, not how many rows. Research first how Excel does this, as it may need the Data Model.
- **Use when:** the reader is asked 'how many different ...?'. **Skip when:** a plain count is what they want.
- **Action:** "Add a count of different products for each region."
- **Band:** diagram (repeated items collapsing to one each)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Drilling Down to the Rows Behind a Number
- **What:** Double-click a number in the PivotTable and Excel lists the rows that made it. The quickest way to answer 'where did that come from?'
- **Use when:** the reader doesn't trust a figure or is asked to explain it. **Skip when:** never.
- **Action:** "Double-click the North total and look at the new sheet."
- **Band:** diagram (a number opening into its source rows)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### When Your Data Grows Past the PivotTable
- **What:** New rows added under the data aren't in the PivotTable until it's refreshed, and not at all if they fall outside what it reads. Turning the data into a table (the Excel kind, from the first book) fixes the second problem.
- **Use when:** the reader adds rows and the PivotTable looks stale. **Skip when:** their data never changes.
- **Action:** "Add one sale under row 241 and refresh the PivotTable."
- **Band:** diagram (new rows landing inside and outside the source range)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Changing Which Data a PivotTable Reads
- **What:** A PivotTable reads a fixed block of cells. When the list has grown or moved, point it at the right block with Change Data Source. Turning the list into an Excel table avoids the problem.
- **Use when:** the reader's new rows aren't appearing after a refresh. **Skip when:** their data never grows.
- **Action:** "Add a row at the bottom of the Sales sheet and use Change Data Source to include it."
- **Band:** diagram (a data block with new rows outside the PivotTable's reach)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Refreshing Every Time the File Opens
- **What:** Tell the PivotTable to refresh itself when the file opens, so it never shows yesterday's data.
- **Use when:** the reader hands the file to someone who won't remember to refresh. **Skip when:** they refresh by hand.
- **Action:** "In the PivotTable options, tick the option to refresh when opening the file."
- **Band:** diagram (a file opening and the PivotTable updating itself)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Filling Empty Cells With a Zero
- **What:** A combination that never happened shows as a blank. A setting shows a zero or a dash instead, which reads better and doesn't break a chart.
- **Use when:** the reader has blank cells in a two-way table. **Skip when:** there are no gaps.
- **Action:** "In the PivotTable options, set empty cells to show 0."
- **Band:** diagram (a grid with blanks, then with zeros)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Keeping Column Widths When You Refresh
- **What:** A refresh can reset the column widths you set by hand. One setting stops that.
- **Use when:** the reader's careful widths keep snapping back. **Skip when:** never.
- **Action:** "In the PivotTable options, turn off Autofit Column Widths on Update."
- **Band:** diagram (a widened column snapping back, then staying)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Copying a PivotTable as Plain Values
- **What:** Copy the finished numbers to another place as plain values, so they stop being a PivotTable and won't change.
- **Use when:** the reader needs a fixed snapshot to email or paste into a report. **Skip when:** they can send the PivotTable itself.
- **Action:** "Copy your PivotTable and paste it as values in a new sheet."
- **Band:** diagram (a live table beside a frozen copy)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Why a Formula Shows GETPIVOTDATA
- **What:** Click a PivotTable value while writing a formula and Excel writes a GETPIVOTDATA formula for you. Say what it is, why it's useful, and how to turn it off if the reader prefers.
- **Use when:** the reader sees a long formula they didn't type. **Skip when:** they never reference a PivotTable.
- **Action:** "Type = in an empty cell, click a PivotTable total, and read the formula that appears."
- **Band:** diagram (a click on a PivotTable total turning into a formula)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Two PivotTables From One List
- **What:** Build a second PivotTable from the same list for a different question, and say whether it should share anything with the first.
- **Use when:** the reader needs more than one view of the same data. **Skip when:** one view is enough.
- **Action:** "Insert a second PivotTable on a new sheet and put Product in Rows."
- **Band:** diagram (one list feeding two different tables)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### When the Numbers Look Wrong
- **What:** A Count where you wanted a Sum, a blank heading, numbers stored as text, a total that doesn't match the sheet. Name each cause and how to see it.
- **Use when:** the reader's PivotTable doesn't match what they expected. **Skip when:** never.
- **Action:** "Find the Amount calculation and check it says Sum, not Count."
- **Band:** diagram (four symptoms, each linked to its cause)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Practice: Fixing a Broken PivotTable
- **What:** Take a deliberately faulty PivotTable and find the problem in each of four places: a Count, a stale refresh, a text number, an unwanted filter.
- **Use when:** always, at the end of the part. **Skip when:** never.
- **Action:** "Find which of four faults is making the grand total smaller than 6,325."
- **Band:** diagram (four faults in a single table, each marked)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

## Part 7 · From PivotTable to dashboard

#### PivotCharts
- **What:** A chart that is tied to a PivotTable and changes when the table does. Say what 'tied to' means when the reader filters.
- **Use when:** the reader wants a chart that follows their table. **Skip when:** a plain chart is enough.
- **Action:** "Click inside the PivotTable and insert a PivotChart."
- **Band:** diagram (a PivotTable and its chart linked)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Choosing a Chart Type for a PivotChart
- **What:** Columns for comparing items, a line for change over time, a pie for a share of one whole. Pair each with the question it answers. Some chart types can't be used with a PivotTable; check which.
- **Use when:** the reader has inserted a PivotChart and the type is wrong. **Skip when:** the default fits.
- **Action:** "Change the PivotChart of Amount by Region to a column chart, then of Amount by Month to a line chart."
- **Band:** diagram (three questions each matched with a chart type)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Cleaning Up a PivotChart
- **What:** Hide the grey field buttons, add a title and axis labels, and trim the legend so the chart reads on its own.
- **Use when:** the reader's chart looks busy. **Skip when:** never.
- **Action:** "Hide the field buttons on your PivotChart and give it a title."
- **Band:** diagram (a cluttered chart and a clean one)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Slicers
- **What:** Buttons that filter a PivotTable by clicking, so anyone can use it without opening a menu. One slicer can drive more than one PivotTable.
- **Use when:** the reader will hand the file to someone who doesn't use Excel. **Skip when:** only they use it.
- **Action:** "Insert a slicer for Region and click North."
- **Band:** diagram (slicer buttons driving a table and a chart)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Making Slicers Look Right
- **What:** Give a slicer a caption, set how many columns of buttons it shows, change its colour and size, and line it up.
- **Use when:** the reader's slicer takes up half the sheet. **Skip when:** the defaults fit.
- **Action:** "Resize your Region slicer to four columns and one row."
- **Band:** diagram (a tall slicer and a tidy one)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### One Slicer for Two PivotTables
- **What:** Connect a slicer to a second PivotTable, so clicking North changes both. Say what 'connect' means and what happens to a table that isn't connected.
- **Use when:** the reader has a dashboard of more than one table. **Skip when:** they have only one.
- **Action:** "Right-click your Region slicer, choose Report Connections and tick the second PivotTable."
- **Band:** diagram (one slicer driving two tables)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Timelines
- **What:** A slicer made for dates, to pick a month or a quarter by sliding along a bar.
- **Use when:** the reader's data has dates and they want a period picker. **Skip when:** no dates in the data.
- **Action:** "Insert a timeline for Date and choose one quarter."
- **Band:** diagram (a timeline bar selecting a range)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Laying Out a One-Page Dashboard
- **What:** Put a few PivotTables, a chart and a slicer on one sheet, hide the clutter and leave room to breathe.
- **Use when:** the reader wants one page to share. **Skip when:** they only need the tables.
- **Action:** "Create a sheet called Dashboard and place one PivotChart and one slicer on it."
- **Band:** diagram (a one-page layout with its parts labelled)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Printing the Dashboard on One Page
- **What:** Set the print area, the orientation and the fit-to-one-page option so the dashboard prints in one piece. Refers back to the first book's printing part.
- **Use when:** the reader will print or save the dashboard. **Skip when:** it is screen only.
- **Action:** "Set the Dashboard sheet to Landscape and Fit Sheet on One Page."
- **Band:** diagram (a dashboard sized to a printed page)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Checking the Dashboard Before You Send It
- **What:** A short checklist: clear the slicers, refresh, check the grand total against the data, and look for an error value or a blank.
- **Use when:** the reader is about to send the file to someone else. **Skip when:** never.
- **Action:** "Clear every slicer, refresh, and check the total against the Sales sheet."
- **Band:** diagram (a short checklist with four ticks)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Practice: The Corner Shop Dashboard
- **What:** Build a one-page dashboard from the Corner Shop sales: two PivotTables, a chart, a region slicer and a timeline.
- **Use when:** always, the last page of the book. **Skip when:** never.
- **Action:** "Finish the dashboard and click each slicer button to check everything moves together."
- **Band:** diagram (the finished dashboard)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

## Part 8 · Putting it to work

#### Practice: A Report by Salesperson
- **What:** Answer 'who sold what, and when' using the Salesperson column: sorted, filtered to the top three, laid out to hand over.
- **Use when:** always. **Skip when:** never.
- **Action:** "Build Amount by Salesperson and name the best, then show that person's sales by product."
- **Band:** diagram (the finished report with its three answers marked)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Practice: Sales Against Target
- **What:** Put the region totals beside each region's target and show whether each region hit it. Uses the Targets sheet and a lookup from the first book.
- **Use when:** always. **Skip when:** never.
- **Action:** "Next to the Region totals, look up each target and work out whether it was reached."
- **Band:** diagram (totals and targets side by side with a pass or miss each)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Practice: The Whole Job From Scratch
- **What:** Start with a fresh copy of the Sales sheet and finish with a one-page dashboard, using only what the book has taught, with no steps given.
- **Use when:** always, as the end of the book's practice. **Skip when:** never.
- **Action:** "Make a fresh copy of the workbook and build a dashboard with two tables, one chart and one slicer."
- **Band:** diagram (the whole workflow from list to dashboard)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.

#### Where to Go After PivotTables
- **What:** What the next skill is and why: cleaning messy data before it reaches a PivotTable. Points to the next book, if the author wants it named. Only the author can say what comes next.
- **Use when:** always, the last page. **Skip when:** never.
- **Action:** "Pick one real list of your own and decide which three questions a PivotTable could answer from it."
- **Band:** diagram (a messy list becoming a clean one, then a PivotTable)
- **Facts:** none accepted yet. Needs research from Microsoft Support before the page is written.
