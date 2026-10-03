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

**Screenshot bands are hand-drawn.** Where a page would naturally show the Power BI
window, it is still `diagram`: an Excalidraw-style SVG of the pane or the bar, drawn with
the sketch filter, not a capture of the real app. No `figure class="shot"`, nothing in
`images.json`. Same as book one.

You never write a status here. A title with no page yet is *planned*; once the page
exists it is a *draft* until a person approves it in the Studio. The Studio's Plan tab
shows all of it side by side.

The worked model is the same on every page: a `Sales` fact table with `Amount`, `Qty`,
`Price` and `OrderDate`, a `Product` table with `Category`, a `Customer` table, and a
`Date` table.

---

## Part 1 - What DAX Actually Is

#### DAX Is Not Excel, and Not Power Query
Overview · diagram
- **What:** three languages live in one app and beginners mix them up. Power Query's M
  cleans the data on the way in, once, before anyone looks at anything. DAX calculates
  after the data has landed, at the moment a visual asks. Excel formulas point at cells;
  DAX points at whole columns.
- **Use when:** the reader can build a report and keeps typing Excel habits into the DAX
  bar. **Skip when:** they can already say which of the three runs when.
- **Action:** "Open Power Query, look at the Applied Steps list, and close it again.
  Anything you can do in that window is not a DAX job."
- **Band:** diagram (a left-to-right line: the file, then Power Query and M, then the
  model, then DAX, then the visual; the two languages on opposite sides of the model)
- **Facts:** F1, F2, F3, F4, F5

#### Measure, Calculated Column, Calculated Table
Where formulas live · diagram
- **What:** one language, three homes. A calculated column is worked out once per row
  and stored in the file, so it costs space whether anyone looks or not. A measure is
  worked out on demand, for whatever the visual is asking, and stores nothing. A
  calculated table is a whole new table built by a formula. Choosing the wrong one makes
  a file fat, slow, or quietly wrong.
- **Use when:** the reader wants to write a formula and the menu offers them three
  things. **Skip when:** they already pick correctly without thinking.
- **Action:** "Right-click a table in the Data pane and read the three New... options.
  Before you click one, say out loud which you want and why."
- **Band:** diagram (three containers: a new column inside the table, a measure floating
  free above a visual, a whole new table; a small disk icon on the two that store)
- **Facts:** F6, F7, F8, F9

#### Where You Type It: The Formula Bar
Interface · diagram
- **What:** the DAX bar, the suggestion list that appears as you type, the grey tooltip
  naming each argument, Shift+Enter for a new line, and the tick that commits. Learning
  to read the tooltip is worth more than memorising any function.
- **Use when:** the reader is about to write their first formula. **Skip when:** they
  are already comfortable in the bar.
- **Action:** "Type SUM( and then stop. Read the grey line that appears underneath. That
  is the argument list, and it is there for every function you will ever use."
- **Band:** diagram (hand-drawn UI: the formula bar mid-type, the suggestion list open
  under it, a callout on the argument tooltip)
- **Facts:** F10, F11, F12

#### When the Formula Turns Red
Errors · diagram
- **What:** the three errors beginners actually hit. A column without its table name in
  front of it. A measure used where a column is wanted, or the other way round. And a
  blank result, which is not an error at all and needs a different fix.
- **Use when:** the reader has just seen their first red squiggle and stopped.
  **Skip when:** they read DAX errors fluently.
- **Action:** "Break one on purpose. Delete the table name in front of a column in a
  working measure and read exactly what it tells you."
- **Band:** diagram (three strips, each with the message on the left and the one-line
  fix on the right)
- **Facts:** F13, F14, F15, F16, F17, F129, F130, F131


#### Practice: Which Kind
Practice · diagram
- **What:** Write both, break one on purpose, read the red line. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "Line Total a little under 116,922 is right: a few lines have no quantity, so their product is blank while their Amount isn't."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F140, F141

---

## Part 2 - Context, the Idea Everything Rests On

#### Filter Context: The Question the Cell Is Asking
Context · diagram
- **What:** a measure does not have one answer. The visual asks it again in every single
  cell, each time with a different set of filters: this row's category, this slicer's
  year, this page's filter. That set of filters is the filter context. One formula,
  a different question every time.
- **Use when:** the reader's total is right but the rows are wrong, or the rows are right
  and the total is not. **Skip when:** they can already explain why a total is not the
  sum of the rows above it.
- **Action:** "Drop the same measure into a card and into a table by category. One
  formula, two different numbers. Write both down before you turn the page."
- **Band:** diagram (one measure in the middle; three cells around it, each arrow
  carrying a different filter set into it, each returning a different number)
- **Facts:** F18, F19, F20, F21

#### Row Context: What a Calculated Column Sees
Context · diagram
- **What:** a calculated column walks the table one row at a time. On each row it can see
  every value in that row and nothing else, unless you ask for more. That is why SUM in a
  calculated column gives you the same grand total on every single row, which looks
  broken and is not.
- **Use when:** the reader's calculated column is identical all the way down.
  **Skip when:** they can already say what a row context is.
- **Action:** "Add a calculated column of = SUM(Sales[Amount]) and look down it. Same
  number, every row. Now delete it."
- **Band:** diagram (a cursor sitting on one row, that row lit, every other row greyed
  out behind it)
- **Facts:** F22, F23, F24

#### CALCULATE: Changing the Question
Context · diagram
- **What:** CALCULATE takes an expression and a list of filters, and works the expression
  out with those filters applied on top of, or instead of, the ones already there. It is
  the only function in the language that can change the filter context. Almost everything
  clever in DAX is CALCULATE underneath.
- **Use when:** the reader needs "sales, but only ..." without touching the visual.
  **Skip when:** a plain SUM already answers the question.
- **Action:** "Split a table by Colour with your total in it. Add the total again, wrapped
  in CALCULATE with Colour = \"Blue\". That column stops moving: it shows Blue on every
  row."
- **Band:** diagram (a funnel labelled CALCULATE: the incoming filter set at the top,
  the filters it adds, the narrower set that reaches the sum at the bottom)
- **Facts:** F25, F26, F27

#### Context Transition: The Thing Nobody Explains
Context · diagram
- **What:** put CALCULATE inside a row context and the current row quietly becomes a
  filter. That is the whole trick, and it is why a measure behaves one way inside SUMX
  and another way outside it, and why wrapping something in CALCULATE can move a number
  you were not touching. Every measure has an invisible CALCULATE around it, which is
  why this happens whether you typed it or not.
- **Use when:** a measure used inside an iterator gives a number the reader cannot
  explain. **Skip when:** they are still on their first measure.
- **Action:** "In a calculated column, write the same calculation twice: once bare, once
  wrapped in CALCULATE. Compare the two columns."
- **Band:** diagram (a single row being lifted out of the table and turned into a filter
  card, which then feeds the measure)
- **Facts:** F28, F29, F30


#### Practice: Context
Practice · diagram
- **What:** One measure, many cells, and a column that refuses to change. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "No blank row means the Products relationship is missing. A Blue Sales that moves per row means the filter went on Sales, not Products[Colour]."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F140, F142

---

## Part 3 - The Everyday Functions

#### SUM, AVERAGE, MIN and MAX
Functions · diagram
- **What:** four aggregators that take one column and hand back one number. Written the
  same way, each of them. They skip blanks, and they only ever see the rows the filter
  context left them.
- **Use when:** the reader's first real measures. **Skip when:** they have these down.
- **Action:** "Write all four over the same column, in one table visual. Four lines, four
  different stories about the same data."
- **Band:** diagram (one column of values, four arrows out of it into four result cards)
- **Facts:** F31, F32, F33

#### Counting Things Without Getting It Wrong
Functions · diagram
- **What:** COUNT counts numbers in a column. COUNTA counts anything that is not blank.
  COUNTROWS counts rows whatever is in them. DISTINCTCOUNT counts different values. They
  agree on tidy data and disagree on real data, and picking the wrong one is the most
  common quiet mistake in a beginner's report, because nothing errors.
- **Use when:** any "how many" question. **Skip when:** never; this page earns its place.
- **Action:** "Put all four over the same table. If the four numbers do not match, you
  have just learned something about your data."
- **Band:** diagram (a small table with blanks and repeated values, four count results
  beside it, each with a line pointing at what it counted)
- **Facts:** F34, F36, F37, F38, F39, F40, F41

#### DIVIDE, and the One Time the Slash Is Fine
Functions · diagram
- **What:** dividing by a blank with a slash does not hand back a blank: the cell shows
  Infinity instead (NaN for zero over a blank), and it ships. DIVIDE hands back a blank instead, and takes a
  third argument for what to show when it cannot divide. The slash is fine in the one
  case where the denominator is a constant, because then it cannot fail.
- **Use when:** any ratio, margin, rate, share or per-unit figure. **Skip when:** the
  denominator can never be zero or blank, which is rarer than the reader thinks.
- **Action:** "Find a measure of yours with a / in it. Rewrite it with DIVIDE. That is
  the whole task."
- **Band:** diagram (the same division written two ways, SUM(Sales[Amount]) over
  SUM(Sales[Qty]): the slash leading to Infinity in the cell; DIVIDE leading to a
  blank that the visual drops)
- **Facts:** F42, F43, F44, F45, F46, F47, F138

#### IF and SWITCH
Functions · diagram
- **What:** IF picks between two results. Nest three of them and nobody can read the
  formula, including the person who wrote it. SWITCH lays the same choices out flat, and
  SWITCH(TRUE(), ...) handles bands and ranges.
- **Use when:** banding, labelling, or a different calculation per case. **Skip when:**
  there is one condition and one result.
- **Action:** "Write a three-band measure with nested IFs. Then write it again with
  SWITCH. Keep the one you would rather meet in six months."
- **Band:** diagram (nested IFs drawn as a staircase running off the edge of the page;
  SWITCH as a flat list of conditions with one result each)
- **Facts:** F48, F49, F50, F51, F52, F53


#### Practice: Functions
Practice · diagram
- **What:** Aggregate, count, divide. Then say why the counts differ. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "COUNT and COUNTROWS agreeing means you counted a column with no blanks. Count Amount: its 3 missing values are the lesson."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F140, F143

---

## Part 4 - Iterators

#### What an Iterator Actually Does
Iterators · diagram
- **What:** an X function takes a table and an expression. It works the expression out
  once per row, holds all those answers, and then aggregates them. Row by row, then
  totalled. That is the whole idea, and every X function is that same shape.
- **Use when:** the maths has to happen per row before anything is added up.
  **Skip when:** a plain aggregator already gives the right answer.
- **Action:** "Read one of your measures out loud as: for each row, do this, then add it
  all up. If that sentence fits, you want an X function."
- **Band:** diagram (a table with a small calculation happening on each row, the per-row
  results stacking up into one total at the bottom)
- **Facts:** F54, F55

#### SUMX vs SUM: When You Need the X
Iterators · diagram
- **What:** SUM(Sales[Amount]) adds a column that already exists. SUMX(Sales,
  Sales[Qty] * Sales[Price]) builds the value first, on each row, then adds those up.
  Summing quantity and multiplying by an average price is the classic wrong answer, and
  it looks plausible enough to ship.
- **Use when:** price times quantity, weighted anything, any per-row maths.
  **Skip when:** the column is already sitting there.
- **Action:** "Work revenue out both ways in the same table: SUM(Qty) * AVERAGE(Price),
  and SUMX. Note which one you would have shipped."
- **Band:** diagram (one table, two routes out of it: multiply-then-add and
  add-then-multiply, ending in two different totals)
- **Facts:** F56, F57, F58, F59

#### AVERAGEX, MAXX and the Rest of the Family
Iterators · diagram
- **What:** SUM, AVERAGE, MIN and MAX each have an X twin, and the X functions all
  follow the same rule: table first, expression second. AVERAGEX over the customer table answers "average per
  customer", which is a different question from "average of the rows", and usually the
  one that was meant.
- **Use when:** per-something averages, biggest per group, counting with a condition.
  **Skip when:** the reader is still in their first week of DAX.
- **Action:** "Write AVERAGEX over your Customer table with a sales measure as the
  expression. That is average per customer, done properly."
- **Band:** diagram (the family in pairs down the page: SUM/SUMX, AVERAGE/AVERAGEX,
  MIN/MINX, MAX/MAXX, COUNT/COUNTX, with the shared shape called out once)
- **Facts:** F60, F61, F62, F63

#### RELATED: Reaching Across a Relationship
Functions · diagram
- **What:** RELATED pulls one value from the one side of a relationship into the row you
  are standing on. RELATEDTABLE goes the other way and hands back rows. Neither invents a
  connection: if there is no relationship in the model, both just fail.
- **Use when:** the value the reader needs lives in the other table. **Skip when:** there
  is no relationship yet, which is a modelling job and comes first.
- **Action:** "In a calculated column on Sales, write = RELATED(Product[Category]). If it
  errors there, check the relationship."
- **Band:** diagram (two tables joined by a relationship line, an arrow hopping from the
  many side to the one side and carrying a value back with it)
- **Facts:** F64, F65, F66, F67, F126, F127, F128


#### Practice: Iterators
Practice · diagram
- **What:** Two revenues, one average per customer, a column that comes back blank. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "RELATED refusing to work means the relationship is missing or backwards. It only walks from the many side, Sales, to the one side, Products."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F140, F144

---

## Part 5 - Filters You Control

#### FILTER Returns a Table, Not a Yes or No
Filters · diagram
- **What:** FILTER does not answer true or false. It hands back a smaller table. That is
  why it lives inside CALCULATE or inside an iterator and never stands on its own, and
  why it is slower than a plain condition and worth avoiding when a plain one will do.
- **Use when:** a condition too complex for a simple CALCULATE filter. **Skip when:**
  column = value covers it, which is faster and clearer.
- **Action:** "Write CALCULATE([Total Sales], FILTER(Sales, Sales[Amount] > 100)). Then say
  out loud what FILTER handed to CALCULATE."
- **Band:** diagram (a table going into FILTER, a shorter table coming out of it, and
  that shorter table being handed on to CALCULATE)
- **Facts:** F68, F69, F70, F71, F72

#### ALL: Taking a Filter Off on Purpose
Filters · diagram
- **What:** ALL ignores the filters on a column or on a whole table, so a measure can see
  the bigger picture while the visual around it stays filtered. It is how a total stays a
  total when everything else is being sliced.
- **Use when:** denominators, rankings, anything compared against everything.
  **Skip when:** the reader wants the visual's filters respected, which is most of the
  time.
- **Action:** "Put CALCULATE([Total Sales], ALL(Sales)) next to your plain total in a table
  by category. Watch one column go flat."
- **Band:** diagram (the visual's filters drawn as a stack of cards, ALL sweeping one
  card off the stack before the measure runs)
- **Facts:** F73, F74, F75, F76

#### Percent of Total, the Pattern You'll Reuse Forever
Patterns · diagram
- **What:** this row's value, divided by the same value with the filters taken off, using
  DIVIDE and ALL. Three lines. Once it clicks, half the patterns in a real report turn
  out to be variations on it.
- **Use when:** any share, mix or contribution question. **Skip when:** the reader has
  not met ALL yet.
- **Action:** "Write it with a VAR for the top and a VAR for the bottom, then read it
  back. It should read like a sentence."
- **Band:** diagram (numerator carrying the row's filters, denominator with the same
  filters struck through, DIVIDE joining the two into one percentage)
- **Facts:** F77, F78, F79

#### SELECTEDVALUE: Reading the Slicer
Filters · diagram
- **What:** SELECTEDVALUE hands back the one value currently selected, or a fallback when
  nothing is selected or several things are. That is how a chart title, or a whole
  calculation, can change with the slicer instead of sitting there stale.
- **Use when:** dynamic titles, or a measure that switches on what the reader picked.
  **Skip when:** nothing on the page is interactive.
- **Action:** "Write a measure that returns SELECTEDVALUE('Date'[Year], \"All years\") and
  drop it into a card above your chart. Then click around the slicer."
- **Band:** diagram (a slicer with one item chosen feeding a card; a second slicer with
  three chosen falling through to the fallback text)
- **Facts:** F80, F81, F82, F83, F84


#### Practice: Filters
Practice · diagram
- **What:** Take a filter off, divide by it, read what the reader picked. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "An All Sales that still moves means ALL was given a column, not the table. Write ALL(Sales) exactly, the whole table named."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F140, F145

---

## Part 6 - Time Intelligence

#### Why Every Model Needs a Date Table
Dates · diagram
- **What:** the time functions need one continuous table of dates, with no gaps, marked
  as the date table. Without one, "last year" does not error. It quietly compares the
  wrong things, or comes back blank, which is worse than an error because it ships.
- **Use when:** before the reader writes a single time function. **Skip when:** they have
  one already and it is marked.
- **Action:** "Open Model view. If you cannot see a table that is nothing but dates, you
  have work to do before the next page."
- **Band:** diagram (a fact table's scattered order dates on one side, a continuous spine
  of every date on the other, a relationship line joining them)
- **Facts:** F85, F86, F87, F88, F89, F90, F91

#### Building One with CALENDAR
Dates · diagram
- **What:** CALENDAR or CALENDARAUTO makes the table in one line, then calculated columns
  add year, month name, month number and quarter. Sorting the month name by the month
  number is the step everyone forgets, and it is why reports show April first.
- **Use when:** there is no date table. **Skip when:** the organisation supplies one, in
  which case use theirs.
- **Action:** "Make the table, add Month Name and Month Number, then set Sort by Column.
  Check that January lands first."
- **Band:** diagram (CALENDAR producing the date spine, the extra columns added one at a
  time beside it, and the sort-by arrow running from name to number)
- **Facts:** F92, F93, F94, F95, F120, F121, F122, F123, F124, F125

#### Year to Date with TOTALYTD
Dates · diagram
- **What:** TOTALYTD adds everything from the first of January up to the latest date in
  the current context. One line, as long as the date table is right. Change the year end
  and it takes an argument for that too.
- **Use when:** running totals inside a year. **Skip when:** there is no proper date
  table yet, in which case go back two pages.
- **Action:** "Put TOTALYTD next to your plain monthly total. December's running total
  should match the year's figure exactly. If it does not, your date table is the suspect."
- **Band:** diagram (twelve monthly bars along the bottom, a second series climbing above
  them as it accumulates)
- **Facts:** F96, F97, F98

#### SAMEPERIODLASTYEAR and DATEADD
Dates · diagram
- **What:** SAMEPERIODLASTYEAR shifts whatever dates are currently selected back one
  year. DATEADD shifts them by any number of days, months, quarters or years. Both hand
  the shifted dates to CALCULATE, which is what actually does the work.
- **Use when:** any comparison against a previous period. **Skip when:** no date table.
- **Action:** "Build the set of three: this year, last year, and the difference. Three
  measures, one table visual, one afternoon's worth of credibility."
- **Band:** diagram (the selected months sliding back one year along a timeline, both
  sets of bars feeding a difference figure)
- **Facts:** F99, F100, F101


#### Practice: Dates
Practice · diagram
- **What:** Build the date table, then ask for June in different ways. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "A blank LY means the table wasn't marked, or the relationship isn't on 'Date'[Date]. A YTD equal to the month means the slicer is on Sales, not Date."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F140, F146

---

## Part 7 - DAX You Can Live With

#### VAR and RETURN: Naming the Middle Step
Craft · diagram
- **What:** a VAR works something out once, gives it a name, and lets you use it as often
  as you like. It makes a formula readable and stops the same expression being calculated
  twice. A VAR is fixed the moment it is declared, which is usually what you want and
  occasionally a surprise.
- **Use when:** any formula with a repeated expression, or more than one idea in it.
  **Skip when:** it is genuinely one line and stays that way.
- **Action:** "Take your longest measure and pull one repeated expression out into a VAR.
  Read it again. It should be shorter and say more."
- **Band:** diagram (the same formula twice: once with an expression repeated in two
  places, once with a VAR named above and used twice below)
- **Facts:** F102, F103, F104, F105, F106, F107, F108

#### Formatting a Formula So Future You Can Read It
Craft · diagram
- **What:** one argument per line, the closing bracket on its own line, indentation that
  shows what is nested inside what, and a comment line at the top saying what the measure
  is for. Shift+Enter is the entire toolkit.
- **Use when:** any measure longer than one line. **Skip when:** there is no such thing
  as a formula too short to format.
- **Action:** "Right-click your ugliest measure, choose Quick queries, then Define and
  evaluate. In DAX query view, press SHIFT+ALT+F." (SHIFT+ALT+F and CTRL+/ are DAX query
  view shortcuts, so the page says so.)
- **Band:** diagram (the same measure twice, with the same filters: one long line, and
  the same thing broken across lines with the nesting visible and the closing bracket on
  its own line)
- **Facts:** F109, F110, F132, F133, F134, F135, F136, F137, F139

#### Where to Keep Your Measures
Craft · diagram
- **What:** an empty table that holds nothing but measures, display folders to group
  them, and a naming habit kept from the first measure. Measures scattered across
  whichever table they happened to be created on is a file nobody else can maintain, and
  that includes the reader in six months.
- **Use when:** the reader is past a dozen measures. **Skip when:** they are still on
  their first three.
- **Action:** "Make an empty table called Measures, move three measures into it, and hide
  the placeholder column."
- **Band:** diagram (hand-drawn UI: the Data pane with a measures table pinned at the
  top, display folders nested under it, a callout on the display folder box)
- **Facts:** F111, F112, F113, F114, F115, F116

#### Mistakes Almost Every Beginner Makes in DAX
Review · diagram
- **What:** the short list, each with its fix. A calculated column where a measure
  belonged. Dividing with a slash. Counting with the wrong COUNT. No date table. Fighting
  the filter context instead of using it. And measures called Measure 3.
- **Use when:** the last page of the book. **Skip when:** never; it is the closer.
- **Action:** "Open your own file and look for two of these. Fix one of them today, not
  next week."
- **Band:** diagram (six small cards, each with the mistake on one side and its one-line
  fix on the other)

- **Facts:** F117, F118, F119, F138

#### Practice: Craft
Practice · diagram
- **What:** Name the middle step, format it, give the measures a home. Three things to do with the sample files at the end of this part, each with the figure or the sign that says it worked.
- **Use when:** the reader has finished the part and has the sample files. **Skip when:** they are reading, not doing.
- **Action:** "A Measures table that won't move to the top still has a visible column. Hide it, then collapse and expand the Data pane."
- **Band:** diagram (three cards: the files to use, the work to do, the check to make)
- **Facts:** F140, F147

---

