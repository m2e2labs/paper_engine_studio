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

`node engine/tools/preflight.mjs books/<slug>` compares every figure printed on a page
with the facts that page cites, and tells you which ones it cannot trace.

---

## F1 · Two Main Components
- **Claim:** Power BI is built from two main pieces: Desktop, the app where you build reports, and the online Service, where you publish and share them.
- **Source:** Microsoft Learn, "What is Power BI?": https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F2 · Mobile App Exists Too
- **Claim:** On top of Desktop and the Service, there is also a Power BI mobile app so you can check your reports from your phone.
- **Source:** Microsoft Learn, "What is Power BI?": https://learn.microsoft.com/en-us/power-bi/fundamentals/power-bi-overview
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F3 · Desktop Is Free
- **Claim:** Power BI Desktop doesn't cost anything to download.
- **Source:** Microsoft Learn, "Download Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/fundamentals/desktop-get-the-desktop
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F4 · Two Ways To Install
- **Claim:** You can get Power BI Desktop two ways: install it as an app from the Microsoft Store, or download it directly as its own installer file from Microsoft.
- **Source:** Microsoft Learn, "Download Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/fundamentals/desktop-get-the-desktop
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F5 · Monthly Updates
- **Claim:** Microsoft ships an updated version of Power BI Desktop about once a month.
- **Source:** Microsoft Learn, "Download Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/fundamentals/desktop-get-the-desktop
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F6 · Three View Icons
- **Claim:** You switch between the Report, Data, and Model views using icons that run down the left edge of the window.
- **Source:** Microsoft Learn, "Report View in Power BI Desktop: Create Reports": https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-report-view
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F7 · Ribbon Across The Top
- **Claim:** The ribbon that runs across the top of the window holds tabs like Home, Insert, and Modeling with your everyday tools.
- **Source:** Microsoft Learn, "Get started with Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/fundamentals/desktop-getting-started
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F8 · Fields Pane On The Right
- **Claim:** The Fields pane sits on the right side of the window and lists the tables and fields from your data so you can drag them onto the page.
- **Source:** Microsoft Learn, "Get started with Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/fundamentals/desktop-getting-started
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F9 · Get Data On The Home Ribbon
- **Claim:** To connect to data in Power BI Desktop, you select Get data on the Home ribbon, and the Get Data window opens with the sources you can connect to.
- **Source:** Microsoft Learn, "Quickstart: Connect to data in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-quickstart-connect-to-data
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F10 · Navigator Checkboxes
- **Claim:** Once you point Power BI at your Excel file, it opens a Navigator window where you tick the checkbox next to each sheet or table you want to bring in.
- **Source:** Microsoft Learn, "Quickstart: Connect to data in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-quickstart-connect-to-data
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F11 · Steps Get Written Down
- **Claim:** Every change you make in Power Query gets written down as a step in the Applied Steps list.
- **Source:** Microsoft Learn, "Applied Steps": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F12 · Click A Step To Rewind
- **Claim:** Clicking any step in that list jumps the preview back to show your data exactly as it looked at that point in the process.
- **Source:** Microsoft Learn, "Applied Steps": https://learn.microsoft.com/en-us/power-query/applied-steps
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F13 · Data Type Guessed On Load
- **Claim:** When Power BI loads your data, it automatically tries to guess the right data type for every column, and that guess isn't always the one you actually need.
- **Source:** Microsoft Learn, "Data types in Power BI": https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-types
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F14 · Set The Type Yourself
- **Claim:** You can set a column's data type yourself in the Power Query Editor by selecting the column and choosing Data Type on the ribbon.
- **Source:** Microsoft Learn, "Data types in Power BI": https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-data-types
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F15 · Right-Click To Remove A Column
- **Claim:** To get rid of a column, you can right-click its header and choose Remove Columns from the menu that pops up.
- **Source:** Microsoft Learn, "Choose or remove columns": https://learn.microsoft.com/en-us/power-query/choose-remove-columns
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F16 · Remove Top Rows Command
- **Claim:** There is also a Remove Top Rows command that cuts off a fixed number of rows from the beginning of a table, which is perfect for junk header rows.
- **Source:** Microsoft Learn, "Filter a table by row position": https://learn.microsoft.com/en-us/power-query/filter-row-position
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F17 · Append Stacks Rows
- **Claim:** Append glues tables together by stacking their rows into one longer table, lining columns up by name.
- **Source:** Microsoft Learn, "Append Queries": https://learn.microsoft.com/en-us/power-query/append-queries
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F18 · Merge Joins On A Shared Column
- **Claim:** Merge lines two tables up side by side, matching their rows based on values in one or more shared columns.
- **Source:** Microsoft Learn, "Merge Queries Overview": https://learn.microsoft.com/en-us/power-query/merge-queries-overview
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F19 · Model View Draws The Shape
- **Claim:** Model view draws a picture of every table in your model along with the relationship lines connecting them.
- **Source:** Microsoft Learn, "Model view in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationship-view
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F20 · Hover To See The Columns
- **Claim:** If you hover your mouse over the connecting line between two tables in Model view, it highlights exactly which columns the relationship is built on.
- **Source:** Microsoft Learn, "Model view in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-relationship-view
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F21 · Fact Tables Store Events
- **Claim:** A fact table stores the events that happened, things like sales orders, stock balances, or exchange rates, with one row per event.
- **Source:** Microsoft Learn, "Understand star schema and the importance for Power BI": https://learn.microsoft.com/en-us/power-bi/guidance/star-schema
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F22 · Dimension Tables Filter And Group
- **Claim:** Dimension tables hold the describing details you use to slice and group your facts, like product names or dates.
- **Source:** Microsoft Learn, "Understand star schema and the importance for Power BI": https://learn.microsoft.com/en-us/power-bi/guidance/star-schema
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F23 · Drag One Column Onto Another
- **Claim:** To build a relationship by hand, you drag a column from one table in Model view and drop it onto the matching column in another table.
- **Source:** Microsoft Learn, "Create and Manage Relationships in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-create-and-manage-relationships
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F24 · Relationships Can Build Themselves
- **Claim:** Power BI often creates these relationships for you automatically the moment you load two related tables, just by matching up column names.
- **Source:** Microsoft Learn, "Create and Manage Relationships in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-create-and-manage-relationships
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F25 · Calculated Column Gets Stored
- **Claim:** A calculated column is worked out once for each row when your data refreshes, and that result gets saved inside the model, which makes your file bigger.
- **Source:** Microsoft Learn, "Use Calculation Options in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-calculations-options
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F26 · Measures Recalculate Live
- **Claim:** A measure recalculates on the spot based on whatever filters and slicers are active on screen right now.
- **Source:** Microsoft Learn, "Use Calculation Options in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-calculations-options
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F27 · Measures Are Never Stored
- **Claim:** A measure's result is never saved anywhere; it's just worked out fresh each time it's needed.
- **Source:** Microsoft Learn, "Use Calculation Options in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-calculations-options
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F28 · DAX Is A Formula Language
- **Claim:** DAX is the formula language that Power BI (and a couple of related Microsoft tools) uses, and its formulas are built from functions, operators, and values that do the actual calculating.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/en-us/dax/dax-overview
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F29 · Formulas Start With An Equals Sign
- **Claim:** Just like in Excel, every DAX formula you write starts with an equals sign.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/en-us/dax/dax-overview
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F30 · SUM Adds Up A Column
- **Claim:** The SUM function's whole job is to add up every number in one column.
- **Source:** Microsoft Learn, "SUM function (DAX)": https://learn.microsoft.com/en-us/dax/sum-function-dax
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F31 · SUM Names The Table Then The Column
- **Claim:** A working SUM measure is written by naming the table first and then the column in square brackets, like SUM(Sales[Amt]).
- **Source:** Microsoft Learn, "SUM function (DAX)": https://learn.microsoft.com/en-us/dax/sum-function-dax
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F32 · CALCULATE Changes The Filter Context
- **Claim:** CALCULATE takes a calculation and reruns it under a different set of filters than what's normally in place.
- **Source:** Microsoft Learn, "CALCULATE function (DAX)": https://learn.microsoft.com/en-us/dax/calculate-function-dax
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F33 · CALCULATE Adds A Filter Or Overwrites One
- **Claim:** A CALCULATE filter is added to the filters already in place, unless that column is already filtered, in which case your new filter overwrites the old one on that column instead of piling on top of it.
- **Source:** Microsoft Learn, "CALCULATE function (DAX)": https://learn.microsoft.com/en-us/dax/calculate-function-dax
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F34 · SUMX Works Row By Row Then Totals
- **Claim:** SUMX goes through a table one row at a time, works out a value for each row, and then adds all of those up.
- **Source:** Microsoft Learn, "SUMX function (DAX)": https://learn.microsoft.com/en-us/dax/sumx-function-dax
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F35 · AVERAGEX Averages Row By Row Results
- **Claim:** AVERAGEX does that same row-by-row calculation as SUMX, but averages the results instead of adding them together.
- **Source:** Microsoft Learn, "AVERAGEX function (DAX)": https://learn.microsoft.com/en-us/dax/averagex-function-dax
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F36 · COUNTROWS Counts Rows, Not Values
- **Claim:** COUNTROWS just counts how many rows are in a table (or in whatever's left after a filter), rather than summing any column.
- **Source:** Microsoft Learn, "COUNTROWS function (DAX)": https://learn.microsoft.com/en-us/dax/countrows-function-dax
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F37 · DIVIDE Returns A Blank On Zero
- **Claim:** DIVIDE does the division for you, and if the bottom number is zero, it returns a blank, or an alternate result you choose.
- **Source:** Microsoft Learn, "DIVIDE function (DAX)": https://learn.microsoft.com/en-us/dax/divide-function-dax
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F38 · RELATED Reaches Across A Relationship
- **Claim:** RELATED fetches a value from another table by following a relationship you've already built between the two tables.
- **Source:** Microsoft Learn, "RELATED function (DAX)": https://learn.microsoft.com/en-us/dax/related-function-dax
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F39 · Bar And Column Charts Compare Categories
- **Claim:** Bar and column charts are Power BI's go-to visual for comparing specific values against each other across different categories.
- **Source:** Microsoft Learn, "Overview of visualizations in Power BI": https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualizations-overview
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F40 · Line Charts Show Change Over Time
- **Claim:** Line charts are built to show the overall shape of a value over time, which makes them the right pick for trends.
- **Source:** Microsoft Learn, "Overview of visualizations in Power BI": https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualizations-overview
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F41 · Cards Highlight One Number
- **Claim:** A card visual is meant to put one single fact or number front and center.
- **Source:** Microsoft Learn, "Overview of visualizations in Power BI": https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualizations-overview
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F42 · A Column Chart Needs An X-Axis Field And A Y-Axis Measure
- **Claim:** To get a column chart on the page, you need at minimum one data field on the X-axis and one measure on the Y-axis.
- **Source:** Microsoft Learn, "Create and use column charts in Power BI": https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-column-charts
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F43 · A Slicer Filters From The Canvas
- **Claim:** A slicer is a filtering control that lives right on the report page itself, instead of being tucked away in a menu.
- **Source:** Microsoft Learn, "Overview of slicers in Power BI": https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-slicers
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F44 · Slicers Filter Every Other Visual By Default
- **Claim:** By default, dropping a slicer onto a page makes it filter every other visual on that page automatically.
- **Source:** Microsoft Learn, "Overview of slicers in Power BI": https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-slicers
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F45 · The Paint Roller Icon Opens Formatting
- **Claim:** You get to a visual's formatting options by clicking the paint roller icon in the Visualizations pane.
- **Source:** Microsoft Learn, "Format pane General tab overview": https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-format-pane-overview
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F46 · One Toggle Controls The Whole Title
- **Claim:** There's a single on/off toggle that controls whether a chart's title section shows at all.
- **Source:** Microsoft Learn, "Format pane General tab overview": https://learn.microsoft.com/en-us/power-bi/visuals/power-bi-visualization-format-pane-overview
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F47 · Publish Lives On The Home Ribbon
- **Claim:** You publish a report to the Power BI Service either from File > Publish > Publish to Power BI, or by clicking the Publish button right on the Home ribbon.
- **Source:** Microsoft Learn, "Publish from Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-upload-desktop-files
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F48 · Publishing Sends Your Model To A Workspace
- **Claim:** Publishing takes the data model behind your report and uploads it into a workspace in the Power BI Service.
- **Source:** Microsoft Learn, "Publish from Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/create-reports/desktop-upload-desktop-files
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F49 · Share By Typing In Names Or Emails
- **Claim:** To share a report with specific people, you just type in their names or email addresses and Power BI sends them access directly.
- **Source:** Microsoft Learn, "Share and Collaborate on Power BI Reports and Dashboards": https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-share-dashboards
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F50 · External Recipients See It In Their Own Browser Window
- **Claim:** When you share with people outside your organization, once they sign in they see the shared report in its own browser window, not in the usual Power BI portal.
- **Source:** Microsoft Learn, "Share and Collaborate on Power BI Reports and Dashboards": https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-share-dashboards
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F51 · Scheduled Refresh Runs On A Frequency And Time You Set
- **Claim:** Turning on scheduled refresh means you pick how often and at what times you want the data pulled in, and Power BI handles the rest on that schedule.
- **Source:** Microsoft Learn, "Configure scheduled refresh": https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh
- **Kind:** reference
- **Checked:** 2026-09-19

---

## F52 · Pro Licenses Cap Refresh At Eight Times A Day
- **Claim:** If you're on a Power BI Pro license, a semantic model can only be scheduled to refresh up to eight times a day.
- **Source:** Microsoft Learn, "Configure scheduled refresh": https://learn.microsoft.com/en-us/power-bi/connect-data/refresh-scheduled-refresh
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F53 · Sharing Needs A Pro Or PPU Licence
- **Claim:** To share a report from the Power BI Service, you need a Power BI Pro or Premium Per User (PPU) licence, unless the content is in a Premium capacity.
- **Source:** Microsoft Learn, "Share and collaborate on Power BI reports and dashboards": https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-share-dashboards
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F54 · Recipients Need A Licence Too
- **Claim:** The people you share a report with also need a Power BI Pro or PPU licence, unless the content is in a Premium or Fabric capacity.
- **Source:** Microsoft Learn, "Share and collaborate on Power BI reports and dashboards": https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-share-dashboards
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F55 · A Local File May Need A Gateway To Refresh
- **Claim:** If your source file is saved on a local drive or a drive in your organization, you might need an on-premises data gateway before the Power BI Service can refresh the semantic model, and that computer must be running during the refresh.
- **Source:** Microsoft Learn, "Data sources for the Power BI service": https://learn.microsoft.com/en-us/power-bi/connect-data/service-get-data
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F56 · Files On OneDrive Or SharePoint Stay Up To Date
- **Claim:** If you save your files on OneDrive for work or school or on a SharePoint team site, the semantic model and reports built on them stay up to date without a gateway.
- **Source:** Microsoft Learn, "Data sources for the Power BI service": https://learn.microsoft.com/en-us/power-bi/connect-data/service-get-data
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F57 · The Views Are Report, Table And Model
- **Claim:** Power BI Desktop's first three views are Report, Table and Model view, reached from icons along the left side of the window; the view once called Data view is now Table view.
- **Source:** Microsoft Learn, "Query overview in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-query-overview
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F58 · The Fields Pane Is Now The Data Pane
- **Claim:** The pane on the right that lists your tables and fields, once called the Fields pane, is called the Data pane in current releases of Power BI Desktop.
- **Source:** Microsoft Learn, "Use the Field list in Power BI Desktop": https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-field-list
- **Kind:** reference
- **Checked:** 2026-09-23

---

---

## F59 · The Sample Files
- **Claim:** The sample files for this series are one made-up bike shop's sales: a Sales folder of 24 monthly workbooks (Sales 2024-01.xlsx to Sales 2025-12.xlsx, each with a title row above the headers), Sales by month.xlsx (a Sales sheet of 20 rows with 12 month columns, Jan to Dec, under a title row, and a Products sheet of 5 products), Sales clean.xlsx (3 sheets: Sales with 7 columns, OrderDate, Region, CustomerID, Product, Qty, Price and Amount, and 1,179 rows; Products; Customers), Customers.csv (20 customers) and Targets.csv.
- **Source:** my own work: the sample files are written by datasets/absolute-beginners/make.py (seed 7) and every figure here is computed by the same script into answers.json, so the files and the answers come from one place
- **Kind:** measurement
- **Checked:** 2026-10-02

---

## F60 · Practice: Meet Power BI
- **Claim:** Sales clean.xlsx has 3 sheets, Sales, Products and Customers; its Sales sheet has 7 columns and 1,179 rows of order lines; Report view is the one with an empty canvas and the Visualizations pane.
- **Source:** my own work: the sample files are written by datasets/absolute-beginners/make.py (seed 7) and every figure here is computed by the same script into answers.json, so the files and the answers come from one place
- **Kind:** measurement
- **Checked:** 2026-10-02

---

## F61 · Practice: Getting the Data In
- **Claim:** Loading Sales clean.xlsx with Sales, Products and Customers ticked gives 3 queries in the Power Query Editor and 3 tables in the Data pane; Qty, Price and Amount are whole numbers and OrderDate is a date.
- **Source:** my own work: the sample files are written by datasets/absolute-beginners/make.py (seed 7) and every figure here is computed by the same script into answers.json, so the files and the answers come from one place
- **Kind:** measurement
- **Checked:** 2026-10-02

---

## F62 · Practice: Shaping the Model
- **Claim:** With Sales clean.xlsx loaded, Sales has 1,179 rows, Products 5 and Customers 20; the model needs 2 relationships, Sales[Product] to Products[Product] and Sales[CustomerID] to Customers[CustomerID].
- **Source:** my own work: the sample files are written by datasets/absolute-beginners/make.py (seed 7) and every figure here is computed by the same script into answers.json, so the files and the answers come from one place
- **Kind:** measurement
- **Checked:** 2026-10-02

---

## F63 · Practice: Your First DAX
- **Claim:** Over Sales clean.xlsx, SUM(Sales[Amount]) is 116,922, CALCULATE of that total with Sales[Region] = "West" is 27,787, COUNTROWS(Sales) is 1,179, and DIVIDE of the total by the row count is 99.17.
- **Source:** my own work: the sample files are written by datasets/absolute-beginners/make.py (seed 7) and every figure here is computed by the same script into answers.json, so the files and the answers come from one place
- **Kind:** measurement
- **Checked:** 2026-10-02

---

## F64 · Practice: Building the Report
- **Claim:** In a column chart of Total Sales by Region the tallest bar is South at 34,335; a slicer on Products[Category] set to Gear brings Total Sales to 28,809, and the slicer also offers a blank for the lamp, which is sold but not on the Products sheet.
- **Source:** my own work: the sample files are written by datasets/absolute-beginners/make.py (seed 7) and every figure here is computed by the same script into answers.json, so the files and the answers come from one place
- **Kind:** measurement
- **Checked:** 2026-10-02

---

## F65 · Practice: The Whole Book
- **Claim:** The finished book-one model has 2 relationships, no table floating on its own, a line-total calculated column that is correctly a column, and a Total Sales card that reads 116,922 with nothing selected.
- **Source:** my own work: the sample files are written by datasets/absolute-beginners/make.py (seed 7) and every figure here is computed by the same script into answers.json, so the files and the answers come from one place
- **Kind:** measurement
- **Checked:** 2026-10-02


<!-- Copy the shape above for your own facts.

## F2 · <Short label>
- **Claim:**
- **Source:**
- **Kind:** reference | experience | measurement | quote
- **Checked:** YYYY-MM-DD
-->
