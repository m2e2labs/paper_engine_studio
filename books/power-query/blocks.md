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
  Write `none` if the page prints no figure, name, study or story.

**No entry here has a Facts line yet, on purpose.** Nothing has been researched for this
book, so `FACTS.md` is empty and there are no ids to cite. A missing Facts line means
*undecided*, which is the truth right now; writing `none` would mean *decided: this page
states nothing sourceable*, which is a different claim and mostly a false one. Research
fills `RESEARCH.md`, you accept findings into `FACTS.md`, and the Facts line gets written
then, before the page is drafted.

**Screenshot bands are hand-drawn.** This book is about a window full of panes, so more
pages than usual want to show one. Every one of them is still `diagram`: an
Excalidraw-style SVG of the ribbon, the Applied Steps list or a preview grid, drawn with
a sketch filter, not a capture of the real app. No `figure class="shot"`, nothing in
`images.json`. Same as books one and two.

**Every SVG id is suffixed per page** (`pq09`, `sk14`), because ids are document-global
once the book is assembled. See `.claude/skills/block/references/design-rules.md`,
"Inline SVG traps".

You never write a status here. A title with no page yet is *planned*; once the page
exists it is a *draft* until a person approves it in the Studio.

The worked example is the same on every page: a folder of monthly `Sales` spreadsheets,
each with a junk title row, a `Region` column, a `Product` column, twelve month columns
laid out side by side for human reading, and a separate `Products` lookup sheet.

---

## Part 1 - What Power Query Actually Is

#### Power Query Is Not DAX, and Not Excel
Overview · diagram
- **What:** two languages live in Power BI and they run at different times. M runs while
  the data loads and changes the shape of what arrives. DAX runs when someone looks at a
  chart. Excel formulas are neither. Picking the wrong one is the first mistake.
- **Use when:** the reader's first page. **Skip when:** never; it frames the whole book.
- **Action:** "Open your own file and look at Applied Steps. Everything in that list ran
  before a single chart did."
- **Band:** diagram (source file → Power Query, labelled M, while it loads → the model →
  DAX, when someone looks → the chart)
- **Facts:** F1, F2, F3, F4, F5, F6

#### A Tour of the Power Query Editor
Interface · diagram
- **What:** four regions and what each is for: the Queries pane on the left, the preview
  in the middle, the ribbon on top, and Query Settings with Applied Steps on the right.
  The preview is a sample, not the data.
- **Use when:** the reader has just clicked Transform data and does not know where to
  look. **Skip when:** they already work in here daily.
- **Action:** "Open Transform data and name the four regions out loud before you touch
  anything."
- **Band:** diagram (hand-drawn UI: the editor window with its four regions called out)
- **Facts:** F7, F8, F9, F10, F11

#### Applied Steps: A Recipe, Not an Edit
Mechanism · diagram
- **What:** every click becomes a step in a list, and the list is the query. The source
  data is never changed. You can rename, reorder and delete steps, and they always run
  in the order shown. This is the single idea the rest of the book rests on.
- **Use when:** the reader thinks they are editing a spreadsheet. **Skip when:** never.
- **Action:** "Delete a middle step and watch what happens to the ones below it. Then
  undo."
- **Band:** diagram (one source table, a numbered list of steps beside it, each step
  handing its result to the next)
- **Facts:** F12, F13, F14, F15, F16, F17

#### Close and Apply: What Loads and What Doesn't
Mechanism · diagram
- **What:** Close & Apply runs the whole recipe and loads the result into the model.
  Enable load can be turned off for a staging query, which then exists only to feed
  another one. Loading everything you touched is a common beginner mistake.
- **Use when:** the reader has more queries than tables they want. **Skip when:** they
  have one query.
- **Action:** "Right-click a query you only use as an ingredient and untick Enable load.
  Then Close & Apply and count your tables."
- **Band:** diagram (three queries, two flowing into the model and one marked not loaded,
  feeding a sibling instead)
- **Facts:** F18, F19, F20, F21, F22

---

## Part 2 - Getting Data In

#### Connecting to Excel and CSV
Interface · diagram
- **What:** Get data points at a file and opens a connection, not a copy. A CSV is one
  table; a workbook can hold many sheets and named tables, and they are not the same
  thing. The path is stored in the query.
- **Use when:** the reader's first connection. **Skip when:** they connect to a database.
- **Action:** "Connect to a workbook and note where the file path ended up in your first
  step."
- **Band:** diagram (a file on disk, a connection line, and the query holding the path)
- **Facts:** F23, F24, F25, F26

#### The Navigator: Choosing What to Load
Interface · diagram
- **What:** the Navigator lists what the source offers and previews each one. Transform
  Data opens the editor; Load skips straight to the model. Choosing Load first is what
  leaves people with a dirty table they then have to fix.
- **Use when:** every new connection. **Skip when:** never.
- **Action:** "Pick Transform Data instead of Load, once. That is the whole habit."
- **Band:** diagram (hand-drawn UI: the Navigator with a sheet ticked, a preview, and the
  two buttons at the bottom)
- **Facts:** F27, F28, F29, F30

#### Get Data from a Folder: Many Files, One Table
Patterns · diagram
- **What:** point at a folder and every file in it becomes rows of one table, with the
  file name available as a column. Add next month's file to the folder and a refresh
  picks it up. This is the first thing that makes Power Query feel worth learning.
- **Use when:** the data arrives as one file per month. **Skip when:** there is one file
  and always will be.
- **Action:** "Put two of your monthly files in one folder, connect to the folder, and
  refresh after dropping in a third."
- **Band:** diagram (a folder of dated files, combining into one table with a source
  column)
- **Facts:** F31, F32, F33, F34, F35

#### Data Types: Set Them Early, Set Them Once
Mechanism · diagram
- **What:** every column has a type and the icon in its header says which. Types decide
  what you can do later, and a wrong type surfaces as an error much further down. Set
  them near the top of the recipe, not the bottom.
- **Use when:** every query. **Skip when:** never.
- **Action:** "Read the icon on each column header of your own query and name the type
  before you look at the menu."
- **Band:** diagram (a header row with a type icon over each column, and the same table
  with one type wrong and an error cell below it)
- **Facts:** F36, F37, F38, F39, F40, F41, F42

---

## Part 3 - Cleaning What Arrived

#### Promote Headers and Remove the Junk Rows
Cleaning · diagram
- **What:** exports arrive with a title row, a blank row, then the real headers. Remove
  the top rows, then promote the header row. In that order, because promoting first
  makes the junk row your column names.
- **Use when:** any export from another system. **Skip when:** the file was built for
  loading.
- **Action:** "Remove Top Rows, then Use First Row as Headers. Check the step order in
  Applied Steps."
- **Band:** diagram (the same sheet twice: junk rows removed then headers promoted,
  versus headers promoted first and the junk row stuck as column names)
- **Facts:** F43, F44, F45, F46, F47, F48

#### Choosing, Removing and Renaming Columns
Cleaning · diagram
- **What:** Choose Columns keeps what you name and is safer than Remove Columns, because
  a new column appearing at the source will not silently join your table. Renaming here
  is what the report will show, so do it once, here.
- **Use when:** every query, early. **Skip when:** you genuinely want whatever arrives.
- **Action:** "Swap a Removed Columns step for a Choose Columns step and imagine the
  source adding a column tomorrow."
- **Band:** diagram (two routes from the same table when a new column appears at source:
  one lets it through, the other does not)
- **Facts:** F49, F50, F51, F52, F53, F54

#### Replace Values, Trim and Clean
Cleaning · diagram
- **What:** trailing spaces, non-printing characters and placeholder text like N/A are
  what make two apparently identical values refuse to match. Trim, Clean and Replace
  Values fix them before they reach a relationship.
- **Use when:** a join or a group-by gives more groups than you expected. **Skip when:**
  the data came from a controlled system.
- **Action:** "Group by a text column of yours. If you see two of the same thing, you
  have found a space."
- **Band:** diagram (two values that look identical, one with a visible trailing space,
  failing to match and then matching after a trim)
- **Facts:** F55, F56, F57, F58, F59

#### Filtering Rows: Narrowing Without Deleting
Cleaning · diagram
- **What:** the filter dropdown writes a step, and the step runs every refresh. It is not
  a view, it is part of the recipe. The list in the dropdown is built from the preview,
  not the whole table, which catches people out.
- **Use when:** you need part of the data. **Skip when:** you need all of it.
- **Action:** "Filter a column, then read the step it wrote in the formula bar."
- **Band:** diagram (a table entering a filter step and a shorter table leaving, with the
  step text shown underneath)
- **Facts:** F60, F61, F62, F63, F64, F65

---

## Part 4 - Reshaping a Table

#### Splitting One Column Into Many
Reshaping · diagram
- **What:** split by delimiter or by number of characters, into columns or into rows.
  Splitting into rows is the one people forget and it is often the one they need.
- **Use when:** one column holds two facts. **Skip when:** each column already holds one.
- **Action:** "Find a column with a comma or a slash in it and split it both ways. Keep
  the one that gives you one fact per cell."
- **Band:** diagram (one column split two ways: into columns beside each other, and into
  rows underneath)
- **Facts:** F66, F67, F68, F69, F70

#### Merge Columns and the Custom Column
Reshaping · diagram
- **What:** Merge Columns glues values together with a separator. A Custom Column is the
  first place most people meet M, and it is where a calculation belongs when it should
  happen before the data loads rather than after.
- **Use when:** you need a key, a label, or a value the source does not supply.
  **Skip when:** the calculation depends on what the reader filters, which is DAX's job.
- **Action:** "Write one Custom Column, then open the formula bar and read the M it
  produced."
- **Band:** diagram (two columns merging into one, beside a custom column being computed
  from a formula)
- **Facts:** F71, F72, F73, F74, F75

#### Unpivot: The Fix for a Sheet Built for Humans
Reshaping · diagram
- **What:** twelve month columns read well on paper and are useless to a model. Unpivot
  turns those columns into rows of attribute and value. Unpivot Other Columns is the
  version that survives a thirteenth month appearing.
- **Use when:** the column headers are data. **Skip when:** each column is a real field.
- **Action:** "Unpivot your month columns, then add a month to the source and refresh.
  Did it survive?"
- **Band:** diagram (a wide sheet with months across the top becoming a tall table of
  three columns)
- **Facts:** F76, F77, F78, F79, F80, F81, F82

#### Group By: Summarising Before It Loads
Reshaping · diagram
- **What:** Group By collapses rows to one per group with an aggregate beside it. Doing
  it here rather than in DAX means less data loaded and a faster report, at the cost of
  the detail being gone for good.
- **Use when:** nobody needs the individual rows. **Skip when:** somebody might.
- **Action:** "Group your sales by month and compare the row count before and after."
- **Band:** diagram (many rows collapsing into a few, with the row count falling)
- **Facts:** F83, F84, F85, F86, F87, F88

---

## Part 5 - Combining Queries

#### Append or Merge: Which One You Need
Overview · diagram
- **What:** append stacks tables with the same columns on top of each other and makes a
  longer table. Merge joins tables side by side on a shared column and makes a wider one.
  Reaching for the wrong one is the most common combining mistake.
- **Use when:** there is more than one table. **Skip when:** there is one.
- **Action:** "Say out loud whether you want more rows or more columns. That is the
  answer."
- **Band:** diagram (the same two tables combined both ways: longer, and wider)
- **Facts:** F89, F90

#### Append: Stacking Tables End to End
Combining · diagram
- **What:** append matches on column names, not positions, so a renamed column in one
  table produces a column of nulls rather than an error. Three or more tables append in
  one step.
- **Use when:** the same shape arrives repeatedly. **Skip when:** a folder connection
  already does it for you.
- **Action:** "Append two of your monthly tables, then rename a column in one of them and
  look for the nulls."
- **Band:** diagram (two tables stacking, with one mismatched column name producing an
  empty column)
- **Facts:** F89, F91, F92, F93, F94, F95

#### Merge: Joining Side by Side, and the Join Kinds
Combining · diagram
- **What:** merge on a shared column, pick a join kind, then expand the result. Left
  outer keeps everything on the left, inner keeps only matches, and the anti joins are
  how you find what did not match. The expand step is a separate step and is where the
  column count explodes.
- **Use when:** the value you need is in the other table. **Skip when:** a model
  relationship would serve better, which is often.
- **Action:** "Merge with a left anti join first, just to see which rows have no match."
- **Band:** diagram (two tables joined on a key, with the join kinds shown as which rows
  survive)
- **Facts:** F90, F96, F97, F98, F99, F100, F101, F102, F103

#### Duplicate or Reference: Two Ways to Branch
Combining · diagram
- **What:** duplicate copies the steps and the two queries then drift apart. Reference
  starts a new query from the result of the first, so fixing the first fixes both. Most
  people duplicate when they meant to reference.
- **Use when:** two queries start the same way. **Skip when:** they only look similar.
- **Action:** "Reference a cleaned query instead of duplicating it, then change a step in
  the original and watch both."
- **Band:** diagram (one query branching two ways: duplicated steps side by side, versus
  a reference pointing back at the original)
- **Facts:** F104, F105, F106, F107

---

## Part 6 - Why It's Slow, and Why It Breaks

#### Query Folding: Letting the Source Do the Work
Performance · diagram
- **What:** where it can, Power Query translates your steps into the source's own
  language and makes the source do the work. What folds runs on the server; what does
  not is pulled down and run locally. This is the difference between a refresh that
  takes seconds and one that takes an hour.
- **Use when:** the source is a database. **Skip when:** the source is a small file.
- **Action:** "Say which of your steps you think the database could do for you. Then read
  the next page."
- **Band:** diagram (steps splitting into two groups: those pushed down to the source and
  those run locally after the data arrives)
- **Facts:** F108, F109, F110, F111, F112, F113, F114

#### Seeing Whether Your Query Folds
Performance · diagram
- **What:** right-click a step and look for View Native Query. If it is available,
  everything up to that step folded. If it is greyed out, folding stopped at or before
  it. That one menu item is the whole diagnostic.
- **Use when:** a refresh is slow. **Skip when:** the source cannot fold at all.
- **Action:** "Walk down your Applied Steps right-clicking each one. Note the first step
  where View Native Query goes grey."
- **Band:** diagram (hand-drawn UI: the Applied Steps list with the context menu open,
  View Native Query enabled on one step and greyed on the next)
- **Facts:** F115, F116, F117, F118

#### The Steps That Stop It Folding
Performance · diagram
- **What:** some steps have no equivalent in the source's language, so folding stops
  there and everything after it runs locally. Once it stops, it does not start again,
  which is why the order of your steps is a performance decision.
- **Use when:** View Native Query went grey. **Skip when:** the source is a file.
- **Action:** "Move a folding-friendly step above a folding-breaking one and check View
  Native Query again."
- **Band:** diagram (a line of steps with the folding boundary marked, and the same steps
  reordered so more of them fold)
- **Facts:** F119, F120, F121, F122, F123

#### Refresh Errors: Renamed Columns and Moved Files
Errors · diagram
- **What:** the query refers to columns and paths by name. Rename a column at the source,
  or move the file, and the step that named it fails. The error names the step, which is
  most of the diagnosis. Data Source Settings is where a moved path gets fixed.
- **Use when:** a refresh that used to work has stopped. **Skip when:** nothing has
  changed, which is rarer than it sounds.
- **Action:** "Read the step name in the error before you read anything else. Then open
  that step."
- **Band:** diagram (a renamed source column breaking one step, and the error naming that
  step)
- **Facts:** F124, F125, F126, F127, F128, F129, F130

---

## Part 7 - Power Query You Can Live With

#### The Advanced Editor and Your First Look at M
Craft · diagram
- **What:** the Advanced Editor shows the code behind the buttons. Every step in the list
  is a line in it. Reading it is a skill worth having long before writing it is.
- **Use when:** the reader is ready to see what they have been building. **Skip when:**
  they are on their first query.
- **Action:** "Open the Advanced Editor and find the line that matches the step you have
  selected."
- **Band:** diagram (the Applied Steps list beside the M code, with one step and its line
  joined)
- **Facts:** F131, F132, F133, F134, F135, F136

#### let and in: How Every Query Is Built
Craft · diagram
- **What:** a query is one `let` expression: a list of named steps, then `in` and the
  name of the one to return. Each step names the previous one, which is why deleting a
  middle step breaks the chain and why renaming one has to be done everywhere.
- **Use when:** after the Advanced Editor page. **Skip when:** the reader will never open
  the code.
- **Action:** "Rename one step in the code and see how many other places you had to
  change it."
- **Band:** diagram (a let block with each step naming the one above it, the chain drawn
  as arrows, and one link broken)
- **Facts:** F137, F138, F139, F140, F141

#### Parameters: One Place to Change the Path
Craft · diagram
- **What:** a parameter is a named value the queries read instead of a hard-coded one. A
  file path written into nine queries is nine edits when the folder moves; a parameter is
  one. It is also how a query points at test data and then at real data.
- **Use when:** the same value appears in more than one query. **Skip when:** there is
  one query and one path.
- **Action:** "Pull your folder path out into a parameter and point one query at it."
- **Band:** diagram (a path repeated in several queries, versus one parameter feeding
  them all)
- **Facts:** F142, F143, F144, F145, F146, F147, F148

#### Mistakes Almost Every Beginner Makes in Power Query
Review · diagram
- **What:** the short list with its fixes. Clicking Load instead of Transform Data.
  Promoting headers before removing junk rows. Removing columns instead of choosing them.
  Duplicating when they meant reference. Breaking folding at the first step. And doing in
  DAX what belonged here.
- **Use when:** the last page. **Skip when:** never; it is the closer.
- **Action:** "Open your own file and look for two of these. Start with the one that
  costs you time every refresh."
- **Band:** diagram (six small cards, the mistake on one side and its one-line fix on the
  other)
