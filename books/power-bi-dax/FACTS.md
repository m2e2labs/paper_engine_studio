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

## F1 · DAX is a formula expression language
- **Claim:** DAX is a formula expression language, and the same language is used by Power BI, Analysis Services and Power Pivot in Excel.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F2 · DAX references columns, not cells
- **Claim:** A DAX function takes a column or a table as its reference, where an Excel function like VLOOKUP takes a cell or a range of cells.
- **Source:** Microsoft Learn, "Learn DAX basics in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-quickstart-learn-dax-basics
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F3 · M is Power Query's language
- **Claim:** M is the data transformation language of Power Query, and every transformation done in a query is ultimately written in M.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/power-query/power-query-what-is-power-query
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F4 · One formula per row in Excel, one formula for the column in Power BI
- **Claim:** In Excel a table can hold a different formula on every row, while one DAX calculated column formula produces a result for every row of the table.
- **Source:** Microsoft Learn, "Create calculated columns in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-calculated-columns
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F5 · Calculated columns are built on data already loaded
- **Claim:** A calculated column is based on data already loaded into the model, unlike a custom column added in Power Query Editor as part of the query.
- **Source:** Microsoft Learn, "Create calculated columns in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-calculated-columns
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F6 · A calculated column is computed per row and stored
- **Claim:** A calculated column works out a value for every row as soon as the formula is entered, and those values are then stored in the in-memory data model.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F7 · A measure has no result without context
- **Claim:** A measure has no result of its own: it cannot be worked out at all until something provides the context to evaluate it in.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F8 · A calculated table is derived by a formula
- **Claim:** A calculated table is built by a DAX formula out of other tables already in the same model, rather than loaded from a data source.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F9 · Calculated column values are recalculated only on refresh or reload
- **Claim:** A calculated column's stored values are recalculated only when the table or a related table is refreshed, or when the model is unloaded and loaded again.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F10 · Where New measure lives on the ribbon
- **Claim:** A new measure can be created from the Calculations group on the Home tab of the Power BI Desktop ribbon, as well as from a table's menu in the Fields pane.
- **Source:** Microsoft Learn, "Tutorial: Create your own measures in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-tutorial-create-measures
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F11 · The suggestion list filters as you type
- **Claim:** As you type a function name into the DAX formula bar, a drop-down list appears showing the DAX functions that begin with the letters typed so far.
- **Source:** Microsoft Learn, "Tutorial: Create your own measures in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-tutorial-create-measures
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F12 · Shift+Enter inserts a line below
- **Claim:** In the Power BI Desktop formula editor, Shift+Enter inserts a new line below the current one, which is how a measure is broken across several lines.
- **Source:** Microsoft Learn, "Formula editor in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-formula-editor
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F13 · A fully qualified column name is table then column in brackets
- **Claim:** A fully qualified column name is the table name followed by the column name in square brackets.
- **Source:** Microsoft Learn, "DAX syntax": https://learn.microsoft.com/dax/dax-syntax-reference
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F14 · Always fully qualify column references
- **Claim:** Microsoft's recommendation is to always write column references fully qualified, with the table name in front.
- **Source:** Microsoft Learn, "Column and measure references": https://learn.microsoft.com/dax/best-practices/dax-column-measure-references
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F15 · Never fully qualify measure references
- **Claim:** Microsoft's recommendation is to never write a measure reference fully qualified, so measure references carry no table name.
- **Source:** Microsoft Learn, "Column and measure references": https://learn.microsoft.com/dax/best-practices/dax-column-measure-references
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F16 · Why not to qualify a measure: the home table can change
- **Claim:** Leaving measure references unqualified means a formula keeps working even after the measure's home table property is changed.
- **Source:** Microsoft Learn, "Column and measure references": https://learn.microsoft.com/dax/best-practices/dax-column-measure-references
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F17 · Ambiguity is flagged with a red squiggle
- **Claim:** Where Power BI finds a column reference ambiguous, it marks the formula with a red squiggly line and an error message.
- **Source:** Microsoft Learn, "Column and measure references": https://learn.microsoft.com/dax/best-practices/dax-column-measure-references
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F18 · A separate query runs for every cell
- **Claim:** A separate query is run for every cell of a result, so one measure is evaluated many times over, once per cell.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F19 · What filter context is
- **Claim:** Filter context is what measures are evaluated in, and it is made of the filters applied directly to model columns plus the filters carried across model relationships.
- **Source:** Microsoft Learn, "DAX glossary": https://learn.microsoft.com/dax/dax-glossary
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F20 · What changes the context in a report
- **Claim:** In a report the context is changed by filtering, by adding or removing fields, and by using slicers.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F21 · Filter context applies on top of row context
- **Claim:** Filter context does not replace row context. It applies in addition to it.
- **Source:** Microsoft Learn, "Learn DAX basics in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-quickstart-learn-dax-basics
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F22 · What row context is used for
- **Claim:** Row context is what calculated column formulas are evaluated in, and it is also what table iterator functions use for their expressions.
- **Source:** Microsoft Learn, "DAX glossary": https://learn.microsoft.com/dax/dax-glossary
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F23 · Row context is every column of the current row
- **Claim:** The row context of a calculated column formula is the values of all the columns in the row it is currently on.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F24 · An aggregation in a calculated column is the same on every row
- **Claim:** Summing a column inside a calculated column gives the same result on every row of the table, because the whole table is in context each time.
- **Source:** Microsoft Learn, "DAX in tabular models": https://learn.microsoft.com/analysis-services/tabular-models/understanding-dax-in-tabular-models-ssas-tabular
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F25 · What CALCULATE does
- **Claim:** CALCULATE evaluates an expression in a modified filter context.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F26 · A CALCULATE filter on a new column is added
- **Claim:** If the columns a CALCULATE filter names are not already in the filter context, that filter is added to it.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F27 · A CALCULATE filter on a filtered column overwrites
- **Claim:** If the columns a CALCULATE filter names are already in the filter context, the existing filters on them are overwritten rather than combined.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F28 · CALCULATE transitions row context to filter context
- **Claim:** CALCULATE used with no filter arguments at all still does something: it turns the row context it is sitting in into a filter context.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F29 · Context transition is automatic for a model measure
- **Claim:** Using a model measure inside a row context performs the context transition automatically, without anyone writing CALCULATE.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F30 · Where context transition is needed
- **Claim:** The transition is needed when an expression that summarizes model data has to be evaluated in a row context, such as in a calculated column or inside an iterator.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F31 · What an aggregation function does
- **Claim:** An aggregation function works out one value, such as a count, a sum, an average, a minimum or a maximum, over all the rows of a column or a table.
- **Source:** Microsoft Learn, "Aggregation functions": https://learn.microsoft.com/dax/aggregation-functions-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F32 · SUM adds a column
- **Claim:** SUM adds up all the numbers in one column.
- **Source:** Microsoft Learn, "SUM": https://learn.microsoft.com/dax/sum-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F33 · MAX works on a column or two expressions
- **Claim:** MAX gives back the largest number in a column, or the larger of two scalar expressions.
- **Source:** Microsoft Learn, "Aggregation functions": https://learn.microsoft.com/dax/aggregation-functions-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F34 · COUNT skips blanks and refuses Booleans
- **Claim:** COUNT counts the rows of a column that hold a value rather than a blank, and it will not take true or false values at all.
- **Source:** Microsoft Learn, "Aggregation functions": https://learn.microsoft.com/dax/aggregation-functions-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F36 · COUNTA takes Booleans
- **Claim:** COUNTA counts the same non-blank rows as COUNT, but it does accept true and false values.
- **Source:** Microsoft Learn, "Aggregation functions": https://learn.microsoft.com/dax/aggregation-functions-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F37 · COUNT skips blank values
- **Claim:** Blank values are skipped by COUNT, so a column full of gaps counts lower than the number of rows.
- **Source:** Microsoft Learn, "COUNT": https://learn.microsoft.com/dax/count-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F38 · DISTINCTCOUNT counts the blank
- **Claim:** DISTINCTCOUNT treats BLANK as one of the distinct values it counts.
- **Source:** Microsoft Learn, "DISTINCTCOUNT": https://learn.microsoft.com/dax/distinctcount-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F39 · Use COUNTROWS to count rows
- **Claim:** Microsoft recommends always using COUNTROWS when the intention is to count the rows of a table.
- **Source:** Microsoft Learn, "Use COUNTROWS instead of COUNT": https://learn.microsoft.com/dax/best-practices/dax-countrows
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F40 · Why COUNTROWS beats COUNT
- **Claim:** COUNTROWS is more efficient than COUNT and performs better.
- **Source:** Microsoft Learn, "Use COUNTROWS instead of COUNT": https://learn.microsoft.com/dax/best-practices/dax-countrows
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F41 · Distinct counts do not add up
- **Claim:** Distinct count totals are not additive: the grand total is not the sum of the values above it, and that is correct behaviour rather than a bug.
- **Source:** Microsoft Learn, "DISTINCTCOUNT": https://learn.microsoft.com/dax/distinctcount-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F42 · What DIVIDE does
- **Claim:** DIVIDE performs a division and hands back either an alternate result or BLANK when it is asked to divide by zero.
- **Source:** Microsoft Learn, "DIVIDE": https://learn.microsoft.com/dax/divide-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F43 · DIVIDE returns BLANK by default
- **Claim:** With no alternate result supplied, DIVIDE returns BLANK when the denominator is zero or blank.
- **Source:** Microsoft Learn, "DIVIDE function vs. divide operator (/)": https://learn.microsoft.com/dax/best-practices/dax-divide-function-operator
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F44 · Use DIVIDE when the denominator could be zero or blank
- **Claim:** Microsoft recommends the DIVIDE function whenever the denominator is an expression that could come back zero or blank.
- **Source:** Microsoft Learn, "DIVIDE function vs. divide operator (/)": https://learn.microsoft.com/dax/best-practices/dax-divide-function-operator
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F45 · Use the slash when the denominator is a constant
- **Claim:** Where the denominator is a constant value, Microsoft recommends the divide operator instead, because the division cannot fail and the expression avoids an unnecessary test.
- **Source:** Microsoft Learn, "DIVIDE function vs. divide operator (/)": https://learn.microsoft.com/dax/best-practices/dax-divide-function-operator
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F46 · Testing for divide by zero is expensive
- **Claim:** Checking for division by zero costs real time, which is why DIVIDE is better optimised for it than writing the test yourself with IF.
- **Source:** Microsoft Learn, "DIVIDE function vs. divide operator (/)": https://learn.microsoft.com/dax/best-practices/dax-divide-function-operator
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F47 · BLANK is usually the better answer for a measure
- **Claim:** Returning BLANK is usually the better design for a measure, because visuals drop groupings whose summarisation is blank and so show only the groups that have data.
- **Source:** Microsoft Learn, "DIVIDE function vs. divide operator (/)": https://learn.microsoft.com/dax/best-practices/dax-divide-function-operator
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F48 · SWITCH replaces nested IFs
- **Claim:** SWITCH exists in part to save you from writing multiple nested IF statements.
- **Source:** Microsoft Learn, "SWITCH": https://learn.microsoft.com/dax/switch-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F49 · SWITCH with TRUE
- **Claim:** Setting the first argument of SWITCH to TRUE is a common use of the function, and it is how ranges and bands are handled.
- **Source:** Microsoft Learn, "SWITCH": https://learn.microsoft.com/dax/switch-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F50 · Order of SWITCH conditions matters
- **Claim:** The order the conditions are written in matters, because the first one that matches wins and the rest are never looked at.
- **Source:** Microsoft Learn, "SWITCH": https://learn.microsoft.com/dax/switch-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F51 · SWITCH results must share a data type
- **Claim:** Every result in a SWITCH, including the fallback, has to be the same data type.
- **Source:** Microsoft Learn, "SWITCH": https://learn.microsoft.com/dax/switch-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F52 · IF with no false value returns BLANK
- **Claim:** Leave the third argument off an IF and it returns BLANK when the test is false.
- **Source:** Microsoft Learn, "IF": https://learn.microsoft.com/dax/if-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F53 · Microsoft suggests SWITCH over nested IFs
- **Claim:** Microsoft's own guidance is that once you are nesting IF functions, SWITCH is likely the better option.
- **Source:** Microsoft Learn, "IF": https://learn.microsoft.com/dax/if-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F54 · What an iterator function is
- **Claim:** An iterator is a DAX function that walks every row of a table and works out a given expression once for each of them.
- **Source:** Microsoft Learn, "DAX glossary": https://learn.microsoft.com/dax/dax-glossary
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F55 · Why iterators exist
- **Claim:** Iterators give you control over how a calculation summarises the data, rather than accepting what a plain aggregation does.
- **Source:** Microsoft Learn, "DAX glossary": https://learn.microsoft.com/dax/dax-glossary
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F56 · What SUMX does
- **Claim:** SUMX returns the sum of an expression worked out once for each row of a table.
- **Source:** Microsoft Learn, "SUMX": https://learn.microsoft.com/dax/sumx-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F57 · SUM is for a column that already exists
- **Claim:** SUM simply adds the numbers already sitting in a column.
- **Source:** Microsoft Learn, "SUM": https://learn.microsoft.com/dax/sum-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F58 · Reach for SUMX when you need to filter or shape first
- **Claim:** When the values being summed need filtering or working out first, SUMX is the function to use instead of SUM.
- **Source:** Microsoft Learn, "SUM": https://learn.microsoft.com/dax/sum-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F59 · SUMX ignores blanks, text and logicals
- **Claim:** SUMX counts only the numbers: blanks, true or false values and text are all ignored.
- **Source:** Microsoft Learn, "SUMX": https://learn.microsoft.com/dax/sumx-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F60 · What AVERAGEX does
- **Claim:** AVERAGEX works out the arithmetic mean of a set of expressions evaluated over a table.
- **Source:** Microsoft Learn, "AVERAGEX": https://learn.microsoft.com/dax/averagex-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F61 · The X family shape: table first, expression second
- **Claim:** Every X function has the same shape: a table as the first argument, an expression as the second.
- **Source:** Microsoft Learn, "AVERAGEX": https://learn.microsoft.com/dax/averagex-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F62 · What MAXX does
- **Claim:** MAXX evaluates an expression for each row of a table and returns the largest number it found.
- **Source:** Microsoft Learn, "Aggregation functions": https://learn.microsoft.com/dax/aggregation-functions-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F63 · What MINX does
- **Claim:** MINX returns the smallest number that comes out of evaluating an expression for each row of a table.
- **Source:** Microsoft Learn, "Aggregation functions": https://learn.microsoft.com/dax/aggregation-functions-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F64 · RELATED follows a many-to-one relationship
- **Claim:** RELATED follows a relationship that already exists, from the many side to the one side, and fetches the value out of the column you named.
- **Source:** Microsoft Learn, "RELATED": https://learn.microsoft.com/dax/related-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F65 · No relationship, no RELATED
- **Claim:** RELATED cannot invent a connection. Where no relationship exists, you have to create one first.
- **Source:** Microsoft Learn, "RELATED": https://learn.microsoft.com/dax/related-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F66 · RELATED needs a row context
- **Claim:** RELATED only works where there is a row context, which means inside a calculated column or nested in a function that scans a table.
- **Source:** Microsoft Learn, "RELATED": https://learn.microsoft.com/dax/related-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F67 · RELATED ignores filters when it looks up
- **Claim:** When RELATED does its lookup it looks at every value in the other table, whatever filters happen to be applied.
- **Source:** Microsoft Learn, "RELATED": https://learn.microsoft.com/dax/related-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F68 · FILTER returns a table
- **Claim:** FILTER hands back a table: a subset of the table it was given.
- **Source:** Microsoft Learn, "FILTER": https://learn.microsoft.com/dax/filter-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F69 · FILTER never stands alone
- **Claim:** FILTER is never used on its own. It only appears inside another function that wants a table as an argument.
- **Source:** Microsoft Learn, "FILTER": https://learn.microsoft.com/dax/filter-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F70 · Prefer a Boolean filter argument
- **Claim:** For best performance Microsoft recommends passing plain Boolean expressions as filter arguments wherever that is possible.
- **Source:** Microsoft Learn, "Avoid using FILTER as a filter argument": https://learn.microsoft.com/dax/best-practices/dax-avoid-avoid-filter-as-filter-argument
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F71 · FILTER only when necessary
- **Claim:** FILTER should be kept for the cases that need it, such as a comparison involving a measure or another column.
- **Source:** Microsoft Learn, "Avoid using FILTER as a filter argument": https://learn.microsoft.com/dax/best-practices/dax-avoid-avoid-filter-as-filter-argument
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F72 · A measure cannot be used in a Boolean filter argument
- **Claim:** A measure cannot appear in a Boolean expression used as a filter argument, which is exactly when FILTER becomes necessary.
- **Source:** Microsoft Learn, "Avoid using FILTER as a filter argument": https://learn.microsoft.com/dax/best-practices/dax-avoid-avoid-filter-as-filter-argument
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F73 · What ALL does
- **Claim:** ALL returns every row of a table, or every value of a column, ignoring whatever filters had been applied.
- **Source:** Microsoft Learn, "ALL": https://learn.microsoft.com/dax/all-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F74 · What ALL is for
- **Claim:** ALL is there for clearing filters and building a calculation across all the rows of a table.
- **Source:** Microsoft Learn, "ALL": https://learn.microsoft.com/dax/all-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F75 · ALL on a column leaves other filters alone
- **Claim:** Naming columns rather than the whole table removes the filters on those columns only, and every other filter on the table still applies.
- **Source:** Microsoft Learn, "ALLEXCEPT": https://learn.microsoft.com/dax/allexcept-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F76 · Microsoft prefers REMOVEFILTERS for removing filters
- **Claim:** Where the tool supports REMOVEFILTERS, Microsoft says to use that rather than ALL for the job of removing filters.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F77 · Ratio to total is what ALL on a table is for
- **Claim:** Removing the filters from a whole table is what you do when you want a ratio of one aggregated value to the total.
- **Source:** Microsoft Learn, "ALLEXCEPT": https://learn.microsoft.com/dax/allexcept-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F78 · The denominator removes the filter
- **Claim:** In the percent of total pattern it is the denominator that strips the filter off, so the numerator keeps the row's filters and the denominator does not.
- **Source:** Microsoft Learn, "ALL": https://learn.microsoft.com/dax/all-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F79 · Microsoft's own percent of total example
- **Claim:** Microsoft's own worked example of the pattern divides a sum by the same sum with the filters removed, to produce a ratio of sales over sales for all channels.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F80 · What SELECTEDVALUE does
- **Claim:** SELECTEDVALUE gives back the value when the column has been filtered down to exactly one, and otherwise gives back the alternate result.
- **Source:** Microsoft Learn, "SELECTEDVALUE": https://learn.microsoft.com/dax/selectedvalue-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F81 · SELECTEDVALUE falls back to BLANK
- **Claim:** Leave the second argument off and the fallback is BLANK.
- **Source:** Microsoft Learn, "SELECTEDVALUE": https://learn.microsoft.com/dax/selectedvalue-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F82 · SELECTEDVALUE is the recommended replacement for the old pattern
- **Claim:** SELECTEDVALUE achieves the same outcome as the older IF, HASONEVALUE and VALUES pattern, more efficiently and more elegantly.
- **Source:** Microsoft Learn, "Use SELECTEDVALUE instead of VALUES": https://learn.microsoft.com/dax/best-practices/dax-selectedvalue
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F83 · Why the old pattern needed defending
- **Claim:** Comparing a table of several rows against a single value raises an error, which is why the older pattern had to test for one value first.
- **Source:** Microsoft Learn, "Use SELECTEDVALUE instead of VALUES": https://learn.microsoft.com/dax/best-practices/dax-selectedvalue
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F84 · What VALUES returns
- **Claim:** Given a column, VALUES returns a one-column table of the distinct values in it, duplicates removed.
- **Source:** Microsoft Learn, "VALUES": https://learn.microsoft.com/dax/values-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F85 · Time intelligence needs a date table
- **Claim:** To use the DAX time intelligence functions at all, the model has to have at least one date table.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F86 · A date table is one row per date
- **Claim:** A date table stores one row per date, and it exists to let you filter and group by periods like years, quarters and months.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F87 · The date column cannot contain blanks
- **Claim:** The date column of a date table must not contain BLANKs.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F88 · The date column cannot skip a day
- **Claim:** The date column must not have any missing dates.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F89 · The date column must span whole years
- **Claim:** The date column has to span full years, though a year need not be January to December.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F90 · A gap in the dates throws an error
- **Claim:** With the classic time intelligence functions, a gap between the first and last date is not tolerated: an error is thrown.
- **Source:** Microsoft Learn, "Implement time-based calculations in Power BI": https://learn.microsoft.com/power-bi/transform-model/desktop-time-intelligence
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F91 · Power BI validates a marked date table
- **Claim:** When you mark your own date table, Power BI checks that the column holds unique values, no nulls, and contiguous dates from beginning to end.
- **Source:** Microsoft Learn, "Set and use date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-date-tables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F92 · What CALENDAR returns
- **Claim:** CALENDAR returns a table of one column, holding a contiguous run of dates.
- **Source:** Microsoft Learn, "CALENDAR": https://learn.microsoft.com/dax/calendar-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F93 · CALENDAR takes a start and an end
- **Claim:** You give CALENDAR a start date and an end date, and both of those dates are included in what comes back.
- **Source:** Microsoft Learn, "CALENDAR": https://learn.microsoft.com/dax/calendar-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F94 · CALENDARAUTO covers the model and guarantees full years
- **Claim:** CALENDARAUTO covers every date in the model, and it guarantees full years of dates, which is what a marked date table requires.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F95 · Extend the date table with calculated columns
- **Claim:** Once the date spine exists you add calculated columns to it for the filtering and grouping you actually need.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F96 · What TOTALYTD does
- **Claim:** TOTALYTD works out the year-to-date value of an expression in whatever context it finds itself.
- **Source:** Microsoft Learn, "TOTALYTD": https://learn.microsoft.com/dax/totalytd-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F97 · TOTALYTD assumes 31 December unless told otherwise
- **Claim:** TOTALYTD takes an optional year-end date, and without one it assumes the year ends on 31 December.
- **Source:** Microsoft Learn, "TOTALYTD": https://learn.microsoft.com/dax/totalytd-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F98 · How every time intelligence function works
- **Claim:** Every time intelligence function gets its result the same way: by modifying the filter context for date filters.
- **Source:** Microsoft Learn, "DAX glossary": https://learn.microsoft.com/dax/dax-glossary
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F99 · What SAMEPERIODLASTYEAR does
- **Claim:** SAMEPERIODLASTYEAR returns the dates of the current selection shifted one year back in time.
- **Source:** Microsoft Learn, "SAMEPERIODLASTYEAR": https://learn.microsoft.com/dax/sameperiodlastyear-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F100 · SAMEPERIODLASTYEAR is DATEADD in disguise
- **Claim:** SAMEPERIODLASTYEAR returns exactly the dates that DATEADD with a shift of minus one year would return.
- **Source:** Microsoft Learn, "SAMEPERIODLASTYEAR": https://learn.microsoft.com/dax/sameperiodlastyear-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F101 · Month-end behaves specially
- **Claim:** Where the selection takes in the last two days of a month, SAMEPERIODLASTYEAR runs the shifted range on to the end of that month.
- **Source:** Microsoft Learn, "SAMEPERIODLASTYEAR": https://learn.microsoft.com/dax/sameperiodlastyear-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F102 · What VAR does
- **Claim:** VAR stores the result of an expression under a name, which can then be handed to other expressions.
- **Source:** Microsoft Learn, "VAR": https://learn.microsoft.com/dax/var-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F103 · A variable is fixed once calculated
- **Claim:** Once a variable has been worked out its value is fixed, even where the variable is referenced again in another expression.
- **Source:** Microsoft Learn, "VAR": https://learn.microsoft.com/dax/var-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F104 · What variables buy you
- **Claim:** Variables improve performance, reliability and readability, and cut down complexity.
- **Source:** Microsoft Learn, "Use variables to improve your DAX formulas": https://learn.microsoft.com/dax/best-practices/dax-variables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F105 · A repeated expression is evaluated twice
- **Claim:** Writing the same expression twice in one formula makes Power BI work it out twice, which is simply wasted time.
- **Source:** Microsoft Learn, "Use variables to improve your DAX formulas": https://learn.microsoft.com/dax/best-practices/dax-variables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F106 · Microsoft's worked example halved the query time
- **Claim:** In Microsoft's own year-over-year example, pulling the repeated expression into a variable produced the same result in about half the query time.
- **Source:** Microsoft Learn, "Use variables to improve your DAX formulas": https://learn.microsoft.com/dax/best-practices/dax-variables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F107 · Variables are evaluated outside the RETURN filters
- **Claim:** A variable is always worked out outside whatever filters the RETURN expression goes on to apply.
- **Source:** Microsoft Learn, "Use variables to improve your DAX formulas": https://learn.microsoft.com/dax/best-practices/dax-variables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F108 · Variable names are restricted
- **Claim:** A variable name takes letters, digits and a double underscore prefix, and no other special characters at all.
- **Source:** Microsoft Learn, "VAR": https://learn.microsoft.com/dax/var-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F109 · Debugging by returning a variable
- **Claim:** To check what a variable actually holds, you temporarily change the RETURN expression so it outputs that variable instead.
- **Source:** Microsoft Learn, "Use variables to improve your DAX formulas": https://learn.microsoft.com/dax/best-practices/dax-variables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F110 · Commenting out keeps the real expression handy
- **Claim:** Commenting out the intended RETURN expression rather than deleting it means you can put it back the moment the debugging is done.
- **Source:** Microsoft Learn, "Use variables to improve your DAX formulas": https://learn.microsoft.com/dax/best-practices/dax-variables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F111 · A measure belongs to the model, not a table
- **Claim:** A measure is a model-level object, so its names have to be unique across the whole model rather than within one table.
- **Source:** Microsoft Learn, "Column and measure references": https://learn.microsoft.com/dax/best-practices/dax-column-measure-references
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F112 · The home table is cosmetic
- **Claim:** The table a measure appears under in the Fields pane is set for cosmetic reasons, and you can change it.
- **Source:** Microsoft Learn, "Column and measure references": https://learn.microsoft.com/dax/best-practices/dax-column-measure-references
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F113 · A measures-only table sits at the top
- **Claim:** A table that holds nothing but measures always appears at the top of the Data pane.
- **Source:** Microsoft Learn, "Create measures for data analysis in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-measures
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F114 · Hide the column, not the table
- **Claim:** To make the measures table work you hide its one placeholder column, but not the table itself.
- **Source:** Microsoft Learn, "Create measures for data analysis in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-measures
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F115 · Display folders group fields
- **Claim:** Fields in a table can be grouped into display folders, named in the Properties pane.
- **Source:** Microsoft Learn, "Create measures for data analysis in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-measures
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F116 · Subfolders use a backslash
- **Claim:** A backslash in the display folder name creates a subfolder.
- **Source:** Microsoft Learn, "Create measures for data analysis in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-measures
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F117 · Measures get a default name
- **Claim:** Every new measure arrives with a default name, and it keeps it unless you rename it there and then.
- **Source:** Microsoft Learn, "Tutorial: Create your own measures in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-tutorial-create-measures
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F118 · Auto date/time creates hidden tables
- **Claim:** Power BI generates its automatic date handling by creating hidden tables in the model on your behalf.
- **Source:** Microsoft Learn, "Set and use date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-date-tables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F119 · Marking a date table removes the built-in one
- **Claim:** Marking your own table as the date table removes the automatically created one, and anything you had already built on it stops working properly.
- **Source:** Microsoft Learn, "Set and use date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-date-tables
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F120 · Sorting month names needs a month number column
- **Claim:** To sort a column of month names into calendar order you need a second column holding a number for each month.
- **Source:** Microsoft Learn, "Sort one column by another column in Power BI": https://learn.microsoft.com/power-bi/create-reports/desktop-sort-by-column
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F121 · A text column defaults to alphabetical order
- **Claim:** Put a text column on an axis or in a slicer and Power BI orders it alphabetically by default, which is why months come out wrong.
- **Source:** Microsoft Learn, "Tips and tricks for creating reports in Power BI Desktop": https://learn.microsoft.com/power-bi/create-reports/desktop-tips-and-tricks-for-creating-reports
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F122 · What alphabetical months actually look like
- **Claim:** Sorted alphabetically, the months of the year come out April, August, December, February.
- **Source:** Microsoft Learn, "Sort one column by another column in Power BI": https://learn.microsoft.com/power-bi/create-reports/desktop-sort-by-column
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F123 · Where Sort by Column lives
- **Claim:** You select the column you want sorted, then choose Sort by Column and pick the field to sort it by.
- **Source:** Microsoft Learn, "Sort one column by another column in Power BI": https://learn.microsoft.com/power-bi/create-reports/desktop-sort-by-column
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F124 · Both columns must share a granularity
- **Claim:** Sort by Column only works where the two columns are at the same level of detail.
- **Source:** Microsoft Learn, "Sort one column by another column in Power BI": https://learn.microsoft.com/power-bi/create-reports/desktop-sort-by-column
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F125 · The sort-by column must be unique per value
- **Claim:** Each value in the column being sorted has to map to exactly one value in the sort-by column, or Power BI refuses the sort.
- **Source:** Microsoft Learn, "Sort one column by another column in Power BI": https://learn.microsoft.com/power-bi/create-reports/desktop-sort-by-column
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F126 · What RELATEDTABLE does
- **Claim:** RELATEDTABLE changes the context the data is filtered in, and works the expression out in that new context.
- **Source:** Microsoft Learn, "RELATEDTABLE": https://learn.microsoft.com/dax/relatedtable-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F127 · RELATEDTABLE is CALCULATETABLE underneath
- **Claim:** RELATEDTABLE is a shortcut for CALCULATETABLE with no logical expression given.
- **Source:** Microsoft Learn, "RELATEDTABLE": https://learn.microsoft.com/dax/relatedtable-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F128 · RELATEDTABLE fetches rows from the many side
- **Claim:** Where RELATED reaches to the one side of a relationship for a value, RELATEDTABLE reaches the other way and returns rows from the many side.
- **Source:** Microsoft Learn, "Model relationships in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-relationships-understand
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F129 · A blank is a value DAX uses
- **Claim:** A blank is a value in DAX, not a failure. DAX uses blanks both for database nulls and for empty cells that came in from Excel.
- **Source:** Microsoft Learn, "BLANK": https://learn.microsoft.com/dax/blank-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F130 · A blank is not a null
- **Claim:** A blank is not the same thing as a null, even though DAX represents a null with one.
- **Source:** Microsoft Learn, "BLANK": https://learn.microsoft.com/dax/blank-function-dax
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F131 · Blanks are what cause most errors
- **Claim:** Most errors that turn up while a formula is being evaluated come from unexpected blanks or zeros, or a data type that would not convert.
- **Source:** Microsoft Learn, "Appropriate use of error functions": https://learn.microsoft.com/dax/best-practices/dax-error-functions
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F132 · Formatting DAX is a documented best practice
- **Claim:** Microsoft states plainly that formatting your DAX query is considered a best practice and that it improves readability.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F133 · What Power BI's own formatter does
- **Claim:** In DAX query view, Power BI's own formatter indents the query with tabs, puts DAX function names into capitals, and adds extra lines.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F134 · Indentation buys you collapsing
- **Claim:** The indentation is not only for reading: it lets you collapse and expand sections of the query.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F135 · The Format shortcut
- **Claim:** In DAX query view, SHIFT+ALT+F formats the current query.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F136 · Commented lines are ignored when it runs
- **Claim:** A commented line is skipped entirely when the DAX is run, which is what makes commenting out a safe way to test.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Kind:** reference
- **Checked:** 2026-09-20

---

## F137 · Ctrl+/ toggles a comment
- **Claim:** In DAX query view, CTRL+/ toggles a line between commented and uncommented.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F138 · The slash returns Infinity or NaN, not an error
- **Claim:** In DAX the divide operator does not return an error on a zero or blank denominator: 5/BLANK returns Infinity, 0/BLANK returns NaN and BLANK/BLANK returns BLANK, where Excel returns an error for all three.
- **Source:** Microsoft Learn, "Data types in Power BI": https://learn.microsoft.com/power-bi/connect-data/desktop-data-types
- **Kind:** reference
- **Checked:** 2026-09-23

---

## F139 · Opening a measure in DAX query view
- **Claim:** Right-clicking a measure and choosing Quick queries, then Define and evaluate, opens it in DAX query view with its formula in a DEFINE statement you can modify.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Kind:** reference
- **Checked:** 2026-09-23

---

<!-- No facts yet. Nothing has been researched for this book.

     Findings go into RESEARCH.md first:
       node engine/tools/research.mjs books/power-bi-dax --add ...
     and only you move one in here, in the Studio's Research tab or with --accept.

     Copy the shape below for a fact you already know and can source yourself.

## F1 - <Short label>
- **Claim:**
- **Source:**
- **Kind:** reference | experience | measurement | quote
- **Checked:** YYYY-MM-DD
-->
