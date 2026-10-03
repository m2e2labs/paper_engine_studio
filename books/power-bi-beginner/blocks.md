# Blocks

The backlog. One entry per page you intend to write, in any order. The `/block` skill
reads this to know what a page is about before it drafts anything, so the more honest
these lines are, the less you have to fix later.

Nothing here is printed. The page gets written from it.

Keep the five lines. Four map onto the page, and the fifth keeps it honest:

- **What** becomes the explainer.
- **Use when** decides whether the page is even worth writing.
- **Action** becomes the box at the bottom of the page.
- **Band** tells the skill whether to draw a diagram or generate a photo.
- **Facts** lists the ids from `FACTS.md` this page is allowed to state, like `F1, F4`.
  Write `none` if the page prints no figure, name, study or story. A page may only say
  what its facts say, so a page with a number on it and `none` here is a page to fix.

You never write a status here. A title with no page yet is *planned*; once the page
exists it is a *draft* until a person approves it in the Studio. The Studio's Plan tab
shows all of it side by side.

---

## Part 1 · Meet Power BI

#### What Power BI Actually Is
Overview · diagram
- **What:** Power BI is three things wearing one name: Desktop (where you build), the
  Service (where you publish and share), and Mobile (where you check it on your phone).
  A beginner opens Desktop first and never touches the other two until later.
- **Use when:** the reader has heard the name "Power BI" and doesn't yet know what part
  of it they're supposed to open. **Skip when:** they've already installed Desktop.
- **Action:** "Before you do anything else, write down which of the three you actually
  need this week. For almost every beginner, that's Desktop."
- **Band:** diagram (three boxes: Desktop, Service, Mobile, one arrow showing a report
  moving from Desktop to the Service to a phone)
- **Facts:** F1, F2

#### Installing Power BI Desktop
Setup · screenshot
- **What:** Power BI Desktop is a free Windows app. You get it from the Microsoft Store
  or as a direct download, and it updates itself roughly once a month.
- **Use when:** the reader has never had Power BI open on their machine. **Skip when:**
  it's already installed.
- **Action:** "Install it now, before reading any further. The rest of this book assumes
  it's open on your screen."
- **Band:** screenshot (the Microsoft Store listing or the download page, with a `.pin`
  on the Get/Download button)
- **Facts:** F3, F4, F5

#### A Tour of the Power BI Desktop Window
Interface · screenshot
- **What:** the first three icons down the left edge of the window are the views you'll
  use first: Report, Table, and Model view. A ribbon runs along the top. Panes on the right
  (the Data pane and Visualizations) hold your fields and your visuals.
- **Use when:** the reader has it open for the first time and doesn't know where to
  look. **Skip when:** they can already name the three views.
- **Action:** "Click the Report, Table and Model icons once each, just to see what
  changes. You can't break anything by looking."
- **Band:** screenshot (the Desktop window with `.pin` marks on the three view icons and
  the ribbon)
- **Facts:** F6, F7, F8, F57


#### Practice: First Look
Practice · diagram
- **What:** Open the app, open the file, say which is which. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "Far fewer than 1,179 rows means you opened Sales by month.xlsx, the other workbook. That one is for the Power Query book."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F59, F60

---

## Part 2 · Getting Your Data In

#### Connecting to an Excel Workbook
Power Query · screenshot
- **What:** Get Data, on the Home ribbon, is where you start a connection. Pick Excel
  Workbook, point it at a file, and tick the sheet or table you want.
- **Use when:** the reader's data lives in a spreadsheet, which is true for almost every
  beginner. **Skip when:** connecting to a database instead.
- **Action:** "Open Get Data now and connect your own spreadsheet, even a messy one.
  You'll clean it up in the next lesson."
- **Band:** screenshot (Get Data dialog with `.pin` on Excel Workbook, then the
  Navigator with a table ticked)
- **Facts:** F9, F10

#### The Power Query Editor at a Glance
Power Query · screenshot
- **What:** Power Query is the cleaning room before your data ever reaches a report.
  Every click you make there, it writes down as a step, in order, on the right.
- **Use when:** the reader has just connected a source and lands in this editor for the
  first time. **Skip when:** they already know the applied steps list.
- **Action:** "Find the Applied Steps pane on the right. Click the second-to-last step
  and watch the preview change. That's the whole idea of Power Query."
- **Band:** screenshot (Power Query Editor with `.pin` on Applied Steps)
- **Facts:** F11, F12

#### Fixing a Column's Data Type
Power Query · screenshot
- **What:** Power BI guesses a data type for every column when it imports it, and the
  guess isn't always the one you need. A date stored as text won't sort right and
  won't let you build a time chart.
- **Use when:** a column's numbers are lining up on the left instead of the right, which
  usually means it's text, not a number. **Skip when:** the types are already correct.
- **Action:** "Click the little type icon in a column header and set it on purpose,
  instead of trusting the guess."
- **Band:** screenshot (column header type icon menu, `.pin` on the icon)
- **Facts:** F13, F14

#### Removing Columns and Rows You Don't Need
Power Query · screenshot
- **What:** Right-click a column header to remove it, or use Remove Top Rows to drop a
  fixed number of junk rows from the top. A smaller table is a faster, clearer model later.
- **Use when:** the source has columns or header rows nobody will ever use. **Skip
  when:** every column already earns its place.
- **Action:** "Remove one column you're sure you'll never chart. It's reversible: the
  step just sits in Applied Steps until you delete it."
- **Band:** screenshot (right-click menu on a column header, `.pin` on Remove Columns)
- **Facts:** F15, F16

#### Combining Two Queries: Append vs Merge
Power Query · diagram
- **What:** Append stacks two tables with the same columns into one longer table.
  Merge lines two tables up side by side, matched on a shared column, like January's
  sales next to January's targets.
- **Use when:** the reader has two related tables and isn't sure which button joins
  them. **Skip when:** there's only one table.
- **Action:** "Ask yourself: am I adding more rows of the same thing, or more columns
  about the same thing? The first is Append. The second is Merge."
- **Band:** diagram (two small tables stacking for Append, two tables lining up
  side by side for Merge)
- **Facts:** F17, F18


#### Practice: Loading Data
Practice · diagram
- **What:** Load the workbook, read the types, remove a column and take it back. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "Numbers lined up on the left mean a type was guessed wrong. Click the icon in the header and set it yourself. A guess is only a guess."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F59, F61

---

## Part 3 · Shaping the Model

#### What a Data Model Is
Modeling · diagram
- **What:** a data model is just your tables plus the lines connecting them. Model view
  draws those lines so you can see the shape of what you've built.
- **Use when:** the reader has more than one table and needs to see how they fit
  together. **Skip when:** the book only ever uses a single table.
- **Action:** "Open Model view now. If you see a table floating with no line to
  anything else, that's a table nothing can filter yet."
- **Band:** diagram (three tables as boxes, lines connecting two of them, one box
  floating alone in red)
- **Facts:** F19, F20

#### Fact Tables and Dimension Tables
Modeling · diagram
- **What:** a fact table holds the events, one row per sale or per order. A dimension
  table holds the describing words: the product names, the store names, the dates. You
  filter the facts by the dimensions.
- **Use when:** the reader has a transactions table and a lookup table and doesn't know
  which is which. **Skip when:** there's only one table in the model.
- **Action:** "Look at your longest table. If each row is one thing that happened, it's
  your fact table. Everything else is probably a dimension."
- **Band:** diagram (a long thin fact table in the middle, three short dimension tables
  around it, lines running from each dimension into the fact table)
- **Facts:** F21, F22

#### Building a Relationship Between Two Tables
Modeling · screenshot
- **What:** in Model view, you drag a field from one table onto the matching field in
  another. That line is what lets a slicer on one table filter a visual built from the
  other.
- **Use when:** two tables share a common column, like a date or a product id, and
  nothing in the report is filtering correctly yet. **Skip when:** the relationship
  already exists.
- **Action:** "Drag the shared column from one table onto the other and let go. A line
  appears the moment it takes."
- **Band:** screenshot (Model view, dragging one field onto another, `.pin` on the
  drop target)
- **Facts:** F23, F24

#### Calculated Column vs Measure
Modeling · diagram
- **What:** a calculated column computes once per row and gets stored in the table,
  taking up memory. A measure computes on the fly, only for whatever's on screen right
  now, and never gets stored.
- **Use when:** the reader is about to write their first DAX formula and needs to pick
  the right kind. **Skip when:** they're only using columns that already exist.
- **Action:** "If the answer changes depending on which filters or slicers are active,
  it's a measure. If it's the same for that row no matter what, it can be a column."
- **Band:** diagram (a column filling straight down inside a table vs. a measure
  recalculating live next to a chart that's being filtered)
- **Facts:** F25, F26, F27


#### Practice: The Model
Practice · diagram
- **What:** Draw the lines, name the fact table, pick column or measure. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "A line that won't draw means the two columns aren't the same type, or you dropped onto the wrong column. Undo, and drag Product onto Product."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F59, F62

---

## Part 4 · Writing Your First DAX

#### What DAX Actually Is
DAX · diagram
- **What:** DAX is the formula language Power BI uses for measures and calculated
  columns. If you've written a formula in Excel, the shape will feel familiar; it starts
  with an equals sign and calls named functions.
- **Use when:** the reader is about to write their first formula and the word "DAX" is
  still just letters to them. **Skip when:** they already write formulas comfortably.
- **Action:** "In the Data pane, right-click your fact table and choose New measure.
  That empty formula bar is where DAX lives."
- **Band:** diagram (an Excel-style formula next to a DAX formula, matching pieces
  highlighted the same colour)
- **Facts:** F28, F29, F58

#### Your First Measure: A Simple SUM
DAX · screenshot
- **What:** `Total Sales = SUM(Sales[Amount])` adds up one column, across whatever rows
  are currently in view. It's the smallest useful measure there is.
- **Use when:** the reader needs their very first total on a report. **Skip when:**
  they already have working measures.
- **Action:** "Write that exact pattern with your own table and column names: SUM,
  the table, then the column in square brackets."
- **Band:** screenshot (the DAX formula bar with a SUM measure typed in, `.pin` on the
  autocomplete suggestion)
- **Facts:** F30, F31

#### CALCULATE and the Filter Context
DAX · diagram
- **What:** CALCULATE changes the filters a measure sees before it does its sum: it adds
  a filter, or overwrites the one already on that column. It's how you build things like
  `West Sales = CALCULATE([Total Sales], Sales[Region] = "West")` without touching the
  visual itself.
- **Use when:** a measure needs to ignore or override a filter that's normally applied.
  **Skip when:** a plain SUM already answers the question.
- **Action:** "Wrap an existing measure in CALCULATE and add one filter condition, just
  to see the number change."
- **Band:** diagram (a funnel labelled CALCULATE narrowing a wide set of rows down to
  a filtered set before the sum happens)
- **Facts:** F32, F33

#### The Functions Worth Knowing Early
DAX · diagram
- **What:** SUMX and AVERAGEX work row by row, then add up or average the results, as
  in `SUMX(Sales, Sales[Units] * Sales[Price])`. COUNTROWS counts rows instead of summing
  a column. DIVIDE returns a blank, or a value you choose, when the bottom number is zero.
  RELATED pulls a value across a relationship from another table.
- **Use when:** the reader has SUM down and is ready for the next handful of tools.
  **Skip when:** they're still working on their first measure.
- **Action:** "Pick one of them and use it once this week, even in a throwaway
  measure you delete afterward."
- **Band:** diagram (one small labelled card per function, each with a one-line
  icon of what it does)
- **Facts:** F34, F35, F36, F37, F38


#### Practice: First DAX
Practice · diagram
- **What:** A sum, a filter, a count and a divide. Match the numbers. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "A little under 116,922 means Qty times Price was summed, not Amount. A few lines have no quantity, on purpose. Sum the Amount column."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F59, F63

---

## Part 5 · Building the Report

#### Choosing the Right Visual
Visuals · diagram
- **What:** a line chart shows change over time. A bar chart compares separate things.
  A card shows one single number. Say the question first, and it picks the shape.
- **Use when:** the reader has a measure ready and a blank canvas, staring at the
  Visualizations pane. **Skip when:** the visual is already chosen.
- **Action:** "Before dragging anything onto the canvas, say your question out loud.
  'How has it changed' wants a line. 'Which is biggest' wants a bar."
- **Band:** diagram (three small visual icons, line/bar/card, each next to the one
  question it answers best)
- **Facts:** F39, F40, F41

#### Building Your First Bar Chart
Visuals · screenshot
- **What:** click the column chart icon (the upright kind of bar chart) in the
  Visualizations pane, then drag a category field into X-axis and a measure into Y-axis.
  The chart draws itself.
- **Use when:** the reader wants to compare a measure across a handful of categories.
  **Skip when:** the comparison has more than about fifteen categories, which gets
  cramped as bars.
- **Action:** "Build one column chart right now with your own Total Sales measure on
  the Y-axis and any category on the X-axis."
- **Band:** screenshot (Report view, a column chart with `.pin` on the X-axis and
  Y-axis wells in the Visualizations pane)
- **Facts:** F42

#### Slicers: Letting the Reader Filter the Page
Visuals · screenshot
- **What:** a slicer is a visual that filters every other visual on the page instead of
  showing data itself. Drop a date or a category into one and the whole page reacts to
  a click.
- **Use when:** the reader wants people looking at the report to filter it themselves,
  without editing anything. **Skip when:** the page only ever needs one fixed view.
- **Action:** "Add a slicer for whatever field you'd want to filter by first if this
  were someone else's report."
- **Band:** screenshot (a slicer visual on a report page, `.pin` on one of its options
  being clicked)
- **Facts:** F43, F44

#### Formatting a Visual So It's Readable
Visuals · screenshot
- **What:** the paint roller icon in the Visualizations pane opens formatting: titles,
  data labels, colours, axis ranges. A chart with no title and no labels forces the
  reader to guess what they're looking at.
- **Use when:** a visual works but still looks like a rough draft. **Skip when:** it's
  already labelled clearly.
- **Action:** "Turn on data labels and write a real title on the chart you just built.
  Never ship a visual called 'Chart 1'."
- **Band:** screenshot (Format pane open, `.pin` on the paint roller and on the Title
  toggle switched off, the chart beside it showing no title)
- **Facts:** F45, F46


#### Practice: The Report
Practice · diagram
- **What:** One chart, one slicer, one title. Then read the tallest bar. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "Gear not changing the card means the slicer is on Sales[Product], not Products[Category], or the relationship is missing. Check Model view."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F59, F64

---

## Part 6 · Sharing What You Built

#### Publishing a Report to the Power BI Service
Publishing · screenshot
- **What:** the Publish button on the Home ribbon uploads your report from Desktop to
  the Power BI Service, where it lives on the web instead of just on your laptop.
- **Use when:** the report is ready for someone else to see. **Skip when:** it's still a
  personal draft.
- **Action:** "Publish once, even to a workspace only you can see. Publishing early
  means you're not doing it for the first time under pressure."
- **Band:** screenshot (the Publish button on the ribbon, `.pin` on the workspace
  picker dialog)
- **Facts:** F47, F48

#### Sharing a Report With Someone Else
Publishing · screenshot
- **What:** in the Power BI Service, Share sends a link to a specific person or
  group, so they can open the report on the web, in the Service, rather than in
  Desktop.
- **Use when:** someone who doesn't have Power BI Desktop needs to see the report.
  **Skip when:** they'll only ever get a PDF or a screenshot instead.
- **Action:** "Share the published report with one real person and ask them what's
  confusing about it. That answer is worth more than another hour of polishing alone."
- **Band:** screenshot (the Share dialog in the Power BI Service, `.pin` on the
  recipient field)
- **Facts:** F1, F49, F50, F53, F54

#### Scheduling a Data Refresh
Publishing · screenshot
- **What:** a scheduled refresh tells the Power BI Service to reconnect to your source
  and pull new data automatically, so the published report doesn't just freeze at the
  moment you published it.
- **Use when:** the underlying data changes regularly, like a daily export. **Skip
  when:** the data is a one-off snapshot that never updates.
- **Action:** "Set a refresh schedule on your published semantic model, even once a
  day. A report nobody refreshes quietly turns into a wrong answer."
- **Band:** screenshot (semantic model settings page in the Service, `.pin` on the
  Scheduled refresh toggle)
- **Facts:** F51, F52, F55, F56


#### Practice: Publishing
Practice · diagram
- **What:** Publish it, open it in a browser, find the refresh switch. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "A greyed-out Publish button means you're not signed in, or the file isn't saved. Save, sign in at the top right, try again."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F59

---

## Part 7 · Where to Go From Here

#### Mistakes Almost Every Beginner Makes
Overview · diagram
- **What:** the same handful of mistakes come up over and over: no relationships built
  in Model view, a calculated column used where a measure was needed, and a report with
  no title on any chart.
- **Use when:** the reader has finished their first report and wants a gut check before
  sharing it. **Skip when:** they haven't built anything yet.
- **Action:** "Open Model view one more time and check for a floating table with no
  line to anything else. That single check catches the most common mistake in this
  book."
- **Band:** diagram (a short checklist card, three items, a red mark next to the one
  most beginners get wrong)
- **Facts:** none (restates concepts already taught and sourced on earlier pages)


#### Practice: Final Check
Practice · diagram
- **What:** A last look at the file you've built, before you share it. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "Fix the floating table first. A missing relationship makes every visual touching that table quietly wrong, and no error ever says so."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F59, F65

---

<!-- Copy the shape above for your own pages.

#### <Title>
<Category> · <diagram|photo|screenshot>
- **What:**
- **Use when:**  ... **Skip when:**
- **Action:**
- **Band:**
- **Facts:**
-->
