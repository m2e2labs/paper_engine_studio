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

## R1 · DAX is a formula expression language
- **Claim:** DAX is a formula expression language, and the same language is used by Power BI, Analysis Services and Power Pivot in Excel.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Quote:** "Data Analysis Expressions (DAX) is a formula expression language used in Analysis Services, Power BI, and Power Pivot in Excel."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** DAX Is Not Excel, and Not Power Query
- **Status:** accepted as F1, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R2 · DAX references columns, not cells
- **Claim:** A DAX function takes a column or a table as its reference, where an Excel function like VLOOKUP takes a cell or a range of cells.
- **Source:** Microsoft Learn, "Learn DAX basics in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-quickstart-learn-dax-basics
- **Quote:** "DAX functions take a column or a table as a reference."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** DAX Is Not Excel, and Not Power Query
- **Status:** accepted as F2, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R3 · M is Power Query's language
- **Claim:** M is the data transformation language of Power Query, and every transformation done in a query is ultimately written in M.
- **Source:** Microsoft Learn, "What is Power Query?": https://learn.microsoft.com/power-query/power-query-what-is-power-query
- **Quote:** "The M language is the data transformation language of Power Query."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** DAX Is Not Excel, and Not Power Query
- **Status:** accepted as F3, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R4 · One formula per row in Excel, one formula for the column in Power BI
- **Claim:** In Excel a table can hold a different formula on every row, while one DAX calculated column formula produces a result for every row of the table.
- **Source:** Microsoft Learn, "Create calculated columns in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-calculated-columns
- **Quote:** "In Excel, you can have a different formula for each row in a table."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** DAX Is Not Excel, and Not Power Query
- **Status:** accepted as F4, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R5 · Calculated columns are built on data already loaded
- **Claim:** A calculated column is based on data already loaded into the model, unlike a custom column added in Power Query Editor as part of the query.
- **Source:** Microsoft Learn, "Create calculated columns in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-calculated-columns
- **Quote:** "already loaded into the model"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** DAX Is Not Excel, and Not Power Query
- **Status:** accepted as F5, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R6 · A calculated column is computed per row and stored
- **Claim:** A calculated column works out a value for every row as soon as the formula is entered, and those values are then stored in the in-memory data model.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Quote:** "values are calculated for each row as soon as the formula is entered. Values are then stored in the in-memory data model"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Measure, Calculated Column, Calculated Table
- **Status:** accepted as F6, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R7 · A measure has no result without context
- **Claim:** A measure has no result of its own: it cannot be worked out at all until something provides the context to evaluate it in.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Quote:** "the result of a measure cannot be determined without context"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Measure, Calculated Column, Calculated Table
- **Status:** accepted as F7, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R8 · A calculated table is derived by a formula
- **Claim:** A calculated table is built by a DAX formula out of other tables already in the same model, rather than loaded from a data source.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Quote:** "A calculated table is a computed object, based on a formula expression, derived from all or part of other tables in the same model."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Measure, Calculated Column, Calculated Table
- **Status:** accepted as F8, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R9 · Calculated column values are recalculated only on refresh or reload
- **Claim:** A calculated column's stored values are recalculated only when the table or a related table is refreshed, or when the model is unloaded and loaded again.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Quote:** "Column values are only recalculated if the table or any related table is processed (refresh) or the model is unloaded from memory"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Measure, Calculated Column, Calculated Table
- **Status:** accepted as F9, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R10 · Where New measure lives on the ribbon
- **Claim:** A new measure can be created from the Calculations group on the Home tab of the Power BI Desktop ribbon, as well as from a table's menu in the Fields pane.
- **Source:** Microsoft Learn, "Tutorial: Create your own measures in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-tutorial-create-measures
- **Quote:** "in the Calculations group on the Home tab of the Power BI Desktop ribbon"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Where You Type It: The Formula Bar
- **Status:** accepted as F10, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R11 · The suggestion list filters as you type
- **Claim:** As you type a function name into the DAX formula bar, a drop-down list appears showing the DAX functions that begin with the letters typed so far.
- **Source:** Microsoft Learn, "Tutorial: Create your own measures in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-tutorial-create-measures
- **Quote:** "a drop-down suggestion list appears, showing all the DAX functions, beginning with the letters you type"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Where You Type It: The Formula Bar
- **Status:** accepted as F11, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R12 · Shift+Enter inserts a line below
- **Claim:** In the Power BI Desktop formula editor, Shift+Enter inserts a new line below the current one, which is how a measure is broken across several lines.
- **Source:** Microsoft Learn, "Formula editor in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-formula-editor
- **Quote:** "Insert line below"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Where You Type It: The Formula Bar
- **Status:** accepted as F12, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R13 · A fully qualified column name is table then column in brackets
- **Claim:** A fully qualified column name is the table name followed by the column name in square brackets.
- **Source:** Microsoft Learn, "DAX syntax": https://learn.microsoft.com/dax/dax-syntax-reference
- **Quote:** "name of a column is the table name, followed by the column name in square brackets"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** When the Formula Turns Red
- **Status:** accepted as F13, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R14 · Always fully qualify column references
- **Claim:** Microsoft's recommendation is to always write column references fully qualified, with the table name in front.
- **Source:** Microsoft Learn, "Column and measure references": https://learn.microsoft.com/dax/best-practices/dax-column-measure-references
- **Quote:** "Always use fully qualified column references"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** When the Formula Turns Red
- **Status:** accepted as F14, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R15 · Never fully qualify measure references
- **Claim:** Microsoft's recommendation is to never write a measure reference fully qualified, so measure references carry no table name.
- **Source:** Microsoft Learn, "Column and measure references": https://learn.microsoft.com/dax/best-practices/dax-column-measure-references
- **Quote:** "Never use fully qualified measure references"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** When the Formula Turns Red
- **Status:** accepted as F15, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R16 · Why not to qualify a measure: the home table can change
- **Claim:** Leaving measure references unqualified means a formula keeps working even after the measure's home table property is changed.
- **Source:** Microsoft Learn, "Column and measure references": https://learn.microsoft.com/dax/best-practices/dax-column-measure-references
- **Quote:** "Expressions will continue to work, even when you change a measure home table property."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** When the Formula Turns Red
- **Status:** accepted as F16, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R17 · Ambiguity is flagged with a red squiggle
- **Claim:** Where Power BI finds a column reference ambiguous, it marks the formula with a red squiggly line and an error message.
- **Source:** Microsoft Learn, "Column and measure references": https://learn.microsoft.com/dax/best-practices/dax-column-measure-references
- **Quote:** "a red squiggly and error message will alert you"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** When the Formula Turns Red
- **Status:** accepted as F17, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R18 · A separate query runs for every cell
- **Claim:** A separate query is run for every cell of a result, so one measure is evaluated many times over, once per cell.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Quote:** "Regardless of the client, a separate query is run for each cell in the results."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Filter Context: The Question the Cell Is Asking
- **Status:** accepted as F18, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R19 · What filter context is
- **Claim:** Filter context is what measures are evaluated in, and it is made of the filters applied directly to model columns plus the filters carried across model relationships.
- **Source:** Microsoft Learn, "DAX glossary": https://learn.microsoft.com/dax/dax-glossary
- **Quote:** "Filter context is used to evaluate measures, and it represents filters applied directly to model columns and filters propagated by model relationships."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Filter Context: The Question the Cell Is Asking
- **Status:** accepted as F19, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R20 · What changes the context in a report
- **Claim:** In a report the context is changed by filtering, by adding or removing fields, and by using slicers.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Quote:** "In a report, context is changed by filtering, adding or removing fields, and using slicers."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Filter Context: The Question the Cell Is Asking
- **Status:** accepted as F20, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R21 · Filter context applies on top of row context
- **Claim:** Filter context does not replace row context. It applies in addition to it.
- **Source:** Microsoft Learn, "Learn DAX basics in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-quickstart-learn-dax-basics
- **Quote:** "rather, it applies in addition to row context"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Filter Context: The Question the Cell Is Asking
- **Status:** accepted as F21, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R22 · What row context is used for
- **Claim:** Row context is what calculated column formulas are evaluated in, and it is also what table iterator functions use for their expressions.
- **Source:** Microsoft Learn, "DAX glossary": https://learn.microsoft.com/dax/dax-glossary
- **Quote:** "and is used to evaluate calculated column formulas and expressions used by table iterators"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Row Context: What a Calculated Column Sees
- **Status:** accepted as F22, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R23 · Row context is every column of the current row
- **Claim:** The row context of a calculated column formula is the values of all the columns in the row it is currently on.
- **Source:** Microsoft Learn, "DAX overview": https://learn.microsoft.com/dax/dax-overview
- **Quote:** "the row context for that formula includes the values from all columns in the current row"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Row Context: What a Calculated Column Sees
- **Status:** accepted as F23, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R24 · An aggregation in a calculated column is the same on every row
- **Claim:** Summing a column inside a calculated column gives the same result on every row of the table, because the whole table is in context each time.
- **Source:** Microsoft Learn, "DAX in tabular models": https://learn.microsoft.com/analysis-services/tabular-models/understanding-dax-in-tabular-models-ssas-tabular
- **Quote:** "the results for the formula will be the same for the entire table"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Row Context: What a Calculated Column Sees
- **Status:** accepted as F24, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R25 · What CALCULATE does
- **Claim:** CALCULATE evaluates an expression in a modified filter context.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Quote:** "Evaluates an expression in a modified filter context."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** CALCULATE: Changing the Question
- **Status:** accepted as F25, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R26 · A CALCULATE filter on a new column is added
- **Claim:** If the columns a CALCULATE filter names are not already in the filter context, that filter is added to it.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Quote:** "new filters are added to the filter context to evaluate the expression"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** CALCULATE: Changing the Question
- **Status:** accepted as F26, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R27 · A CALCULATE filter on a filtered column overwrites
- **Claim:** If the columns a CALCULATE filter names are already in the filter context, the existing filters on them are overwritten rather than combined.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Quote:** "the existing filters are overwritten by the new filters to evaluate the CALCULATE expression"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** CALCULATE: Changing the Question
- **Status:** accepted as F27, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R28 · CALCULATE transitions row context to filter context
- **Claim:** CALCULATE used with no filter arguments at all still does something: it turns the row context it is sitting in into a filter context.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Quote:** "It transitions row context to filter context."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Context Transition: The Thing Nobody Explains
- **Status:** accepted as F28, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R29 · Context transition is automatic for a model measure
- **Claim:** Using a model measure inside a row context performs the context transition automatically, without anyone writing CALCULATE.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Quote:** "When you use a model measure in row context, context transition is automatic."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Context Transition: The Thing Nobody Explains
- **Status:** accepted as F29, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R30 · Where context transition is needed
- **Claim:** The transition is needed when an expression that summarizes model data has to be evaluated in a row context, such as in a calculated column or inside an iterator.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Quote:** "This scenario can happen in a calculated column formula or when an expression in an iterator function is evaluated."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Context Transition: The Thing Nobody Explains
- **Status:** accepted as F30, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R31 · What an aggregation function does
- **Claim:** An aggregation function works out one value, such as a count, a sum, an average, a minimum or a maximum, over all the rows of a column or a table.
- **Source:** Microsoft Learn, "Aggregation functions": https://learn.microsoft.com/dax/aggregation-functions-dax
- **Quote:** "Aggregation functions calculate a (scalar) value such as count, sum, average, minimum, or maximum for all rows in a column or table"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** SUM, AVERAGE, MIN and MAX
- **Status:** accepted as F31, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R32 · SUM adds a column
- **Claim:** SUM adds up all the numbers in one column.
- **Source:** Microsoft Learn, "SUM": https://learn.microsoft.com/dax/sum-function-dax
- **Quote:** "Adds all the numbers in a column."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** SUM, AVERAGE, MIN and MAX
- **Status:** accepted as F32, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R33 · MAX works on a column or two expressions
- **Claim:** MAX gives back the largest number in a column, or the larger of two scalar expressions.
- **Source:** Microsoft Learn, "Aggregation functions": https://learn.microsoft.com/dax/aggregation-functions-dax
- **Quote:** "Returns the largest numeric value in a column, or between two scalar expressions."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** SUM, AVERAGE, MIN and MAX
- **Status:** accepted as F33, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R34 · COUNT skips blanks and refuses Booleans
- **Claim:** COUNT counts the rows of a column that hold a value rather than a blank, and it will not take true or false values at all.
- **Source:** Microsoft Learn, "Aggregation functions": https://learn.microsoft.com/dax/aggregation-functions-dax
- **Quote:** "Counts the number of rows in the specified column that contain non-blank values. Does not support Boolean values."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Counting Things Without Getting It Wrong
- **Status:** accepted as F35, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R35 · COUNTA takes Booleans
- **Claim:** COUNTA counts the same non-blank rows as COUNT, but it does accept true and false values.
- **Source:** Microsoft Learn, "Aggregation functions": https://learn.microsoft.com/dax/aggregation-functions-dax
- **Quote:** "Counts the number of rows in the specified column that contain non-blank values. Supports Boolean values."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Counting Things Without Getting It Wrong
- **Status:** accepted as F36, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R36 · COUNT skips blank values
- **Claim:** Blank values are skipped by COUNT, so a column full of gaps counts lower than the number of rows.
- **Source:** Microsoft Learn, "COUNT": https://learn.microsoft.com/dax/count-function-dax
- **Quote:** "Blank values are skipped."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Counting Things Without Getting It Wrong
- **Status:** accepted as F37, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R37 · DISTINCTCOUNT counts the blank
- **Claim:** DISTINCTCOUNT treats BLANK as one of the distinct values it counts.
- **Source:** Microsoft Learn, "DISTINCTCOUNT": https://learn.microsoft.com/dax/distinctcount-function-dax
- **Quote:** "DISTINCTCOUNT function counts the BLANK value."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Counting Things Without Getting It Wrong
- **Status:** accepted as F38, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R38 · Use COUNTROWS to count rows
- **Claim:** Microsoft recommends always using COUNTROWS when the intention is to count the rows of a table.
- **Source:** Microsoft Learn, "Use COUNTROWS instead of COUNT": https://learn.microsoft.com/dax/best-practices/dax-countrows
- **Quote:** "recommended you always use the COUNTROWS function"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Counting Things Without Getting It Wrong
- **Status:** accepted as F39, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R39 · Why COUNTROWS beats COUNT
- **Claim:** COUNTROWS is more efficient than COUNT and performs better.
- **Source:** Microsoft Learn, "Use COUNTROWS instead of COUNT": https://learn.microsoft.com/dax/best-practices/dax-countrows
- **Quote:** "more efficient, and so it will perform better"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Counting Things Without Getting It Wrong
- **Status:** accepted as F40, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R40 · Distinct counts do not add up
- **Claim:** Distinct count totals are not additive: the grand total is not the sum of the values above it, and that is correct behaviour rather than a bug.
- **Source:** Microsoft Learn, "DISTINCTCOUNT": https://learn.microsoft.com/dax/distinctcount-function-dax
- **Quote:** "Distinct count totals are not additive. The Grand Total is not the sum of the values in each category."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Counting Things Without Getting It Wrong
- **Status:** accepted as F41, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R41 · What DIVIDE does
- **Claim:** DIVIDE performs a division and hands back either an alternate result or BLANK when it is asked to divide by zero.
- **Source:** Microsoft Learn, "DIVIDE": https://learn.microsoft.com/dax/divide-function-dax
- **Quote:** "Performs division and returns alternate result or BLANK() on division by 0."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** DIVIDE, and Why Never the Slash
- **Status:** accepted as F42, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R42 · DIVIDE returns BLANK by default
- **Claim:** With no alternate result supplied, DIVIDE returns BLANK when the denominator is zero or blank.
- **Source:** Microsoft Learn, "DIVIDE function vs. divide operator (/)": https://learn.microsoft.com/dax/best-practices/dax-divide-function-operator
- **Quote:** "If an alternate result is not passed in, and the denominator is zero or BLANK, the function returns BLANK."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** DIVIDE, and Why Never the Slash
- **Status:** accepted as F43, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R43 · Use DIVIDE when the denominator could be zero or blank
- **Claim:** Microsoft recommends the DIVIDE function whenever the denominator is an expression that could come back zero or blank.
- **Source:** Microsoft Learn, "DIVIDE function vs. divide operator (/)": https://learn.microsoft.com/dax/best-practices/dax-divide-function-operator
- **Quote:** "recommended that you use the DIVIDE function whenever the denominator is an expression that"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** DIVIDE, and Why Never the Slash
- **Status:** accepted as F44, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R44 · Use the slash when the denominator is a constant
- **Claim:** Where the denominator is a constant value, Microsoft recommends the divide operator instead, because the division cannot fail and the expression avoids an unnecessary test.
- **Source:** Microsoft Learn, "DIVIDE function vs. divide operator (/)": https://learn.microsoft.com/dax/best-practices/dax-divide-function-operator
- **Quote:** "In the case that the denominator is a constant value, we recommend that you use the divide operator."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** DIVIDE, and Why Never the Slash
- **Status:** accepted as F45, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R45 · Testing for divide by zero is expensive
- **Claim:** Checking for division by zero costs real time, which is why DIVIDE is better optimised for it than writing the test yourself with IF.
- **Source:** Microsoft Learn, "DIVIDE function vs. divide operator (/)": https://learn.microsoft.com/dax/best-practices/dax-divide-function-operator
- **Quote:** "The performance gain is significant since checking for division by zero is expensive."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** DIVIDE, and Why Never the Slash
- **Status:** accepted as F46, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R46 · BLANK is usually the better answer for a measure
- **Claim:** Returning BLANK is usually the better design for a measure, because visuals drop groupings whose summarisation is blank and so show only the groups that have data.
- **Source:** Microsoft Learn, "DIVIDE function vs. divide operator (/)": https://learn.microsoft.com/dax/best-practices/dax-divide-function-operator
- **Quote:** "eliminate groupings when summarizations are BLANK"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** DIVIDE, and Why Never the Slash
- **Status:** accepted as F47, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R47 · SWITCH replaces nested IFs
- **Claim:** SWITCH exists in part to save you from writing multiple nested IF statements.
- **Source:** Microsoft Learn, "SWITCH": https://learn.microsoft.com/dax/switch-function-dax
- **Quote:** "This function can be used to avoid having multiple nested IF statements."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** IF and SWITCH
- **Status:** accepted as F48, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R48 · SWITCH with TRUE
- **Claim:** Setting the first argument of SWITCH to TRUE is a common use of the function, and it is how ranges and bands are handled.
- **Source:** Microsoft Learn, "SWITCH": https://learn.microsoft.com/dax/switch-function-dax
- **Quote:** "A common use of this function is to set the first parameter to TRUE."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** IF and SWITCH
- **Status:** accepted as F49, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R49 · Order of SWITCH conditions matters
- **Claim:** The order the conditions are written in matters, because the first one that matches wins and the rest are never looked at.
- **Source:** Microsoft Learn, "SWITCH": https://learn.microsoft.com/dax/switch-function-dax
- **Quote:** "The order of conditions matters."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** IF and SWITCH
- **Status:** accepted as F50, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R50 · SWITCH results must share a data type
- **Claim:** Every result in a SWITCH, including the fallback, has to be the same data type.
- **Source:** Microsoft Learn, "SWITCH": https://learn.microsoft.com/dax/switch-function-dax
- **Quote:** "must be of the same data type"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** IF and SWITCH
- **Status:** accepted as F51, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R51 · IF with no false value returns BLANK
- **Claim:** Leave the third argument off an IF and it returns BLANK when the test is false.
- **Source:** Microsoft Learn, "IF": https://learn.microsoft.com/dax/if-function-dax
- **Quote:** "If omitted, BLANK is returned."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** IF and SWITCH
- **Status:** accepted as F52, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R52 · Microsoft suggests SWITCH over nested IFs
- **Claim:** Microsoft's own guidance is that once you are nesting IF functions, SWITCH is likely the better option.
- **Source:** Microsoft Learn, "IF": https://learn.microsoft.com/dax/if-function-dax
- **Quote:** "When you need to nest multiple IF functions"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** IF and SWITCH
- **Status:** accepted as F53, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R53 · What an iterator function is
- **Claim:** An iterator is a DAX function that walks every row of a table and works out a given expression once for each of them.
- **Source:** Microsoft Learn, "DAX glossary": https://learn.microsoft.com/dax/dax-glossary
- **Quote:** "A DAX function that enumerates all rows of a given table and evaluate a given expression for each row."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** What an Iterator Actually Does
- **Status:** accepted as F54, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R54 · Why iterators exist
- **Claim:** Iterators give you control over how a calculation summarises the data, rather than accepting what a plain aggregation does.
- **Source:** Microsoft Learn, "DAX glossary": https://learn.microsoft.com/dax/dax-glossary
- **Quote:** "It provides flexibility and control over how model calculations summarize data."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** What an Iterator Actually Does
- **Status:** accepted as F55, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R55 · What SUMX does
- **Claim:** SUMX returns the sum of an expression worked out once for each row of a table.
- **Source:** Microsoft Learn, "SUMX": https://learn.microsoft.com/dax/sumx-function-dax
- **Quote:** "Returns the sum of an expression evaluated for each row in a table."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** SUMX vs SUM: When You Need the X
- **Status:** accepted as F56, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R56 · SUM is for a column that already exists
- **Claim:** SUM simply adds the numbers already sitting in a column.
- **Source:** Microsoft Learn, "SUM": https://learn.microsoft.com/dax/sum-function-dax
- **Quote:** "Adds all the numbers in a column."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** SUMX vs SUM: When You Need the X
- **Status:** accepted as F57, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R57 · Reach for SUMX when you need to filter or shape first
- **Claim:** When the values being summed need filtering or working out first, SUMX is the function to use instead of SUM.
- **Source:** Microsoft Learn, "SUM": https://learn.microsoft.com/dax/sum-function-dax
- **Quote:** "If you want to filter the values that you are summing, you can use the SUMX function"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** SUMX vs SUM: When You Need the X
- **Status:** accepted as F58, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R58 · SUMX ignores blanks, text and logicals
- **Claim:** SUMX counts only the numbers: blanks, true or false values and text are all ignored.
- **Source:** Microsoft Learn, "SUMX": https://learn.microsoft.com/dax/sumx-function-dax
- **Quote:** "Only the numbers in the column are counted. Blanks, logical values, and text are ignored."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** SUMX vs SUM: When You Need the X
- **Status:** accepted as F59, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R59 · What AVERAGEX does
- **Claim:** AVERAGEX works out the arithmetic mean of a set of expressions evaluated over a table.
- **Source:** Microsoft Learn, "AVERAGEX": https://learn.microsoft.com/dax/averagex-function-dax
- **Quote:** "Calculates the average (arithmetic mean) of a set of expressions evaluated over a table."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** AVERAGEX, MAXX and the Rest of the Family
- **Status:** accepted as F60, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R60 · The X family shape: table first, expression second
- **Claim:** Every X function has the same shape: a table as the first argument, an expression as the second.
- **Source:** Microsoft Learn, "AVERAGEX": https://learn.microsoft.com/dax/averagex-function-dax
- **Quote:** "the function takes a table as its first argument, and an expression as the second argument"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** AVERAGEX, MAXX and the Rest of the Family
- **Status:** accepted as F61, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R61 · What MAXX does
- **Claim:** MAXX evaluates an expression for each row of a table and returns the largest number it found.
- **Source:** Microsoft Learn, "Aggregation functions": https://learn.microsoft.com/dax/aggregation-functions-dax
- **Quote:** "Evaluates an expression for each row of a table and returns the largest numeric value."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** AVERAGEX, MAXX and the Rest of the Family
- **Status:** accepted as F62, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R62 · What MINX does
- **Claim:** MINX returns the smallest number that comes out of evaluating an expression for each row of a table.
- **Source:** Microsoft Learn, "Aggregation functions": https://learn.microsoft.com/dax/aggregation-functions-dax
- **Quote:** "Returns the smallest numeric value that results from evaluating an expression for each row of a table."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** AVERAGEX, MAXX and the Rest of the Family
- **Status:** accepted as F63, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R63 · RELATED follows a many-to-one relationship
- **Claim:** RELATED follows a relationship that already exists, from the many side to the one side, and fetches the value out of the column you named.
- **Source:** Microsoft Learn, "RELATED": https://learn.microsoft.com/dax/related-function-dax
- **Quote:** "the function follows an existing many-to-one relationship to fetch the value from the specified column in the related table"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** RELATED: Reaching Across a Relationship
- **Status:** accepted as F64, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R64 · No relationship, no RELATED
- **Claim:** RELATED cannot invent a connection. Where no relationship exists, you have to create one first.
- **Source:** Microsoft Learn, "RELATED": https://learn.microsoft.com/dax/related-function-dax
- **Quote:** "If a relationship does not exist, you must create a relationship."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** RELATED: Reaching Across a Relationship
- **Status:** accepted as F65, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R65 · RELATED needs a row context
- **Claim:** RELATED only works where there is a row context, which means inside a calculated column or nested in a function that scans a table.
- **Source:** Microsoft Learn, "RELATED": https://learn.microsoft.com/dax/related-function-dax
- **Quote:** "The RELATED function needs a row context; therefore, it can only be used in calculated column expression"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** RELATED: Reaching Across a Relationship
- **Status:** accepted as F66, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R66 · RELATED ignores filters when it looks up
- **Claim:** When RELATED does its lookup it looks at every value in the other table, whatever filters happen to be applied.
- **Source:** Microsoft Learn, "RELATED": https://learn.microsoft.com/dax/related-function-dax
- **Quote:** "it examines all values in the specified table regardless of any filters that may have been applied"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** RELATED: Reaching Across a Relationship
- **Status:** accepted as F67, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R67 · FILTER returns a table
- **Claim:** FILTER hands back a table: a subset of the table it was given.
- **Source:** Microsoft Learn, "FILTER": https://learn.microsoft.com/dax/filter-function-dax
- **Quote:** "Returns a table that represents a subset of another table or expression."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** FILTER Returns a Table, Not a Yes or No
- **Status:** accepted as F68, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R68 · FILTER never stands alone
- **Claim:** FILTER is never used on its own. It only appears inside another function that wants a table as an argument.
- **Source:** Microsoft Learn, "FILTER": https://learn.microsoft.com/dax/filter-function-dax
- **Quote:** "FILTER is not used independently, but as a function that is embedded in other functions that require a table as an argument."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** FILTER Returns a Table, Not a Yes or No
- **Status:** accepted as F69, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R69 · Prefer a Boolean filter argument
- **Claim:** For best performance Microsoft recommends passing plain Boolean expressions as filter arguments wherever that is possible.
- **Source:** Microsoft Learn, "Avoid using FILTER as a filter argument": https://learn.microsoft.com/dax/best-practices/dax-avoid-avoid-filter-as-filter-argument
- **Quote:** "recommended you use Boolean expressions as filter arguments, whenever possible"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** FILTER Returns a Table, Not a Yes or No
- **Status:** accepted as F70, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R70 · FILTER only when necessary
- **Claim:** FILTER should be kept for the cases that need it, such as a comparison involving a measure or another column.
- **Source:** Microsoft Learn, "Avoid using FILTER as a filter argument": https://learn.microsoft.com/dax/best-practices/dax-avoid-avoid-filter-as-filter-argument
- **Quote:** "the FILTER function should only be used when necessary"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** FILTER Returns a Table, Not a Yes or No
- **Status:** accepted as F71, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R71 · A measure cannot be used in a Boolean filter argument
- **Claim:** A measure cannot appear in a Boolean expression used as a filter argument, which is exactly when FILTER becomes necessary.
- **Source:** Microsoft Learn, "Avoid using FILTER as a filter argument": https://learn.microsoft.com/dax/best-practices/dax-avoid-avoid-filter-as-filter-argument
- **Quote:** "It's not possible to use a measure in a Boolean expression when it's used as a filter argument."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** FILTER Returns a Table, Not a Yes or No
- **Status:** accepted as F72, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R72 · What ALL does
- **Claim:** ALL returns every row of a table, or every value of a column, ignoring whatever filters had been applied.
- **Source:** Microsoft Learn, "ALL": https://learn.microsoft.com/dax/all-function-dax
- **Quote:** "Returns all the rows in a table, or all the values in a column, ignoring any filters that might have been applied."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** ALL: Taking a Filter Off on Purpose
- **Status:** accepted as F73, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R73 · What ALL is for
- **Claim:** ALL is there for clearing filters and building a calculation across all the rows of a table.
- **Source:** Microsoft Learn, "ALL": https://learn.microsoft.com/dax/all-function-dax
- **Quote:** "This function is useful for clearing filters and creating calculations on all the rows in a table."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** ALL: Taking a Filter Off on Purpose
- **Status:** accepted as F74, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R74 · ALL on a column leaves other filters alone
- **Claim:** Naming columns rather than the whole table removes the filters on those columns only, and every other filter on the table still applies.
- **Source:** Microsoft Learn, "ALLEXCEPT": https://learn.microsoft.com/dax/allexcept-function-dax
- **Quote:** "Removes all filters from the specified columns in the table; all other filters on other columns in the table still apply."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** ALL: Taking a Filter Off on Purpose
- **Status:** accepted as F75, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R75 · Microsoft prefers REMOVEFILTERS for removing filters
- **Claim:** Where the tool supports REMOVEFILTERS, Microsoft says to use that rather than ALL for the job of removing filters.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Quote:** "If your tool supports the REMOVEFILTERS function, use it to remove filters."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** ALL: Taking a Filter Off on Purpose
- **Status:** accepted as F76, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R76 · Ratio to total is what ALL on a table is for
- **Claim:** Removing the filters from a whole table is what you do when you want a ratio of one aggregated value to the total.
- **Source:** Microsoft Learn, "ALLEXCEPT": https://learn.microsoft.com/dax/allexcept-function-dax
- **Quote:** "want to create a calculation that creates a ratio of an aggregated value to the total value"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Percent of Total, the Pattern You'll Reuse Forever
- **Status:** accepted as F77, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R77 · The denominator removes the filter
- **Claim:** In the percent of total pattern it is the denominator that strips the filter off, so the numerator keeps the row's filters and the denominator does not.
- **Source:** Microsoft Learn, "ALL": https://learn.microsoft.com/dax/all-function-dax
- **Quote:** "you use the function, ALL(Column), to remove the filter on ProductCategoryName"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Percent of Total, the Pattern You'll Reuse Forever
- **Status:** accepted as F78, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R78 · Microsoft's own percent of total example
- **Claim:** Microsoft's own worked example of the pattern divides a sum by the same sum with the filters removed, to produce a ratio of sales over sales for all channels.
- **Source:** Microsoft Learn, "CALCULATE": https://learn.microsoft.com/dax/calculate-function-dax
- **Quote:** "produces a ratio of sales over sales for all sales channels"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Percent of Total, the Pattern You'll Reuse Forever
- **Status:** accepted as F79, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R79 · What SELECTEDVALUE does
- **Claim:** SELECTEDVALUE gives back the value when the column has been filtered down to exactly one, and otherwise gives back the alternate result.
- **Source:** Microsoft Learn, "SELECTEDVALUE": https://learn.microsoft.com/dax/selectedvalue-function-dax
- **Quote:** "Returns the value when the context for columnName has been filtered down to one distinct value only. Otherwise returns alternateResult."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** VALUES and SELECTEDVALUE: Reading the Slicer
- **Status:** accepted as F80, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R80 · SELECTEDVALUE falls back to BLANK
- **Claim:** Leave the second argument off and the fallback is BLANK.
- **Source:** Microsoft Learn, "SELECTEDVALUE": https://learn.microsoft.com/dax/selectedvalue-function-dax
- **Quote:** "When not provided, the default value is BLANK()."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** VALUES and SELECTEDVALUE: Reading the Slicer
- **Status:** accepted as F81, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R81 · SELECTEDVALUE is the recommended replacement for the old pattern
- **Claim:** SELECTEDVALUE achieves the same outcome as the older IF, HASONEVALUE and VALUES pattern, more efficiently and more elegantly.
- **Source:** Microsoft Learn, "Use SELECTEDVALUE instead of VALUES": https://learn.microsoft.com/dax/best-practices/dax-selectedvalue
- **Quote:** "It achieves the same outcome as the pattern described in this article, yet more efficiently and elegantly."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** VALUES and SELECTEDVALUE: Reading the Slicer
- **Status:** accepted as F82, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R82 · Why the old pattern needed defending
- **Claim:** Comparing a table of several rows against a single value raises an error, which is why the older pattern had to test for one value first.
- **Source:** Microsoft Learn, "Use SELECTEDVALUE instead of VALUES": https://learn.microsoft.com/dax/best-practices/dax-selectedvalue
- **Quote:** "Comparing a table of multiple rows to a scalar value results in an error."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** VALUES and SELECTEDVALUE: Reading the Slicer
- **Status:** accepted as F83, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R83 · What VALUES returns
- **Claim:** Given a column, VALUES returns a one-column table of the distinct values in it, duplicates removed.
- **Source:** Microsoft Learn, "VALUES": https://learn.microsoft.com/dax/values-function-dax
- **Quote:** "returns a one-column table that contains the distinct values from the specified column"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** VALUES and SELECTEDVALUE: Reading the Slicer
- **Status:** accepted as F84, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R84 · Time intelligence needs a date table
- **Claim:** To use the DAX time intelligence functions at all, the model has to have at least one date table.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Quote:** "your data model must have at least one"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Why Every Model Needs a Date Table
- **Status:** accepted as F85, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R85 · A date table is one row per date
- **Claim:** A date table stores one row per date, and it exists to let you filter and group by periods like years, quarters and months.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Quote:** "It stores one row per date"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Why Every Model Needs a Date Table
- **Status:** accepted as F86, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R86 · The date column cannot contain blanks
- **Claim:** The date column of a date table must not contain BLANKs.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Quote:** "The date column must not contain BLANKs."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Why Every Model Needs a Date Table
- **Status:** accepted as F87, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R87 · The date column cannot skip a day
- **Claim:** The date column must not have any missing dates.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Quote:** "The date column must not have any missing dates."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Why Every Model Needs a Date Table
- **Status:** accepted as F88, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R88 · The date column must span whole years
- **Claim:** The date column has to span full years, though a year need not be January to December.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Quote:** "The date column must span full years."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Why Every Model Needs a Date Table
- **Status:** accepted as F89, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R89 · A gap in the dates throws an error
- **Claim:** With the classic time intelligence functions, a gap between the first and last date is not tolerated: an error is thrown.
- **Source:** Microsoft Learn, "Implement time-based calculations in Power BI": https://learn.microsoft.com/power-bi/transform-model/desktop-time-intelligence
- **Quote:** "If there are any missing dates between the first and last dates, an error is thrown."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Why Every Model Needs a Date Table
- **Status:** accepted as F90, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R90 · Power BI validates a marked date table
- **Claim:** When you mark your own date table, Power BI checks that the column holds unique values, no nulls, and contiguous dates from beginning to end.
- **Source:** Microsoft Learn, "Set and use date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-date-tables
- **Quote:** "Contains contiguous date values (from beginning to end)."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Why Every Model Needs a Date Table
- **Status:** accepted as F91, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R91 · What CALENDAR returns
- **Claim:** CALENDAR returns a table of one column, holding a contiguous run of dates.
- **Source:** Microsoft Learn, "CALENDAR": https://learn.microsoft.com/dax/calendar-function-dax
- **Quote:** "that contains a contiguous set of dates"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Building One with CALENDAR
- **Status:** accepted as F92, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R92 · CALENDAR takes a start and an end
- **Claim:** You give CALENDAR a start date and an end date, and both of those dates are included in what comes back.
- **Source:** Microsoft Learn, "CALENDAR": https://learn.microsoft.com/dax/calendar-function-dax
- **Quote:** "The range of dates is from the specified start date to the specified end date, inclusive of those two dates."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Building One with CALENDAR
- **Status:** accepted as F93, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R93 · CALENDARAUTO covers the model and guarantees full years
- **Claim:** CALENDARAUTO covers every date in the model, and it guarantees full years of dates, which is what a marked date table requires.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Quote:** "it ensures that full years of dates are returned and so meets the requirement for a marked date table"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Building One with CALENDAR
- **Status:** accepted as F94, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R94 · Extend the date table with calculated columns
- **Claim:** Once the date spine exists you add calculated columns to it for the filtering and grouping you actually need.
- **Source:** Microsoft Learn, "Design guidance for date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/guidance/model-date-tables
- **Quote:** "You can then extend the calculated table with calculated columns to support your date interval filtering and grouping requirements."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Building One with CALENDAR
- **Status:** accepted as F95, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R95 · What TOTALYTD does
- **Claim:** TOTALYTD works out the year-to-date value of an expression in whatever context it finds itself.
- **Source:** Microsoft Learn, "TOTALYTD": https://learn.microsoft.com/dax/totalytd-function-dax
- **Quote:** "Evaluates the year-to-date value of the"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Year to Date with TOTALYTD
- **Status:** accepted as F96, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R96 · TOTALYTD assumes 31 December unless told otherwise
- **Claim:** TOTALYTD takes an optional year-end date, and without one it assumes the year ends on 31 December.
- **Source:** Microsoft Learn, "TOTALYTD": https://learn.microsoft.com/dax/totalytd-function-dax
- **Quote:** "A literal string with a date that defines the year-end date. The default is December 31."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Year to Date with TOTALYTD
- **Status:** accepted as F97, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R97 · How every time intelligence function works
- **Claim:** Every time intelligence function gets its result the same way: by modifying the filter context for date filters.
- **Source:** Microsoft Learn, "DAX glossary": https://learn.microsoft.com/dax/dax-glossary
- **Quote:** "Each time intelligence function achieves its result by modifying the filter context for date filters."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Year to Date with TOTALYTD
- **Status:** accepted as F98, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R98 · What SAMEPERIODLASTYEAR does
- **Claim:** SAMEPERIODLASTYEAR returns the dates of the current selection shifted one year back in time.
- **Source:** Microsoft Learn, "SAMEPERIODLASTYEAR": https://learn.microsoft.com/dax/sameperiodlastyear-function-dax
- **Quote:** "returns a table that contains a column of dates shifted one year back in time from the dates in the specified"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Last Year, Last Month: SAMEPERIODLASTYEAR and DATEADD
- **Status:** accepted as F99, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R99 · SAMEPERIODLASTYEAR is DATEADD in disguise
- **Claim:** SAMEPERIODLASTYEAR returns exactly the dates that DATEADD with a shift of minus one year would return.
- **Source:** Microsoft Learn, "SAMEPERIODLASTYEAR": https://learn.microsoft.com/dax/sameperiodlastyear-function-dax
- **Quote:** "The dates returned are the same as the dates returned by this equivalent formula"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Last Year, Last Month: SAMEPERIODLASTYEAR and DATEADD
- **Status:** accepted as F100, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R100 · Month-end behaves specially
- **Claim:** Where the selection takes in the last two days of a month, SAMEPERIODLASTYEAR runs the shifted range on to the end of that month.
- **Source:** Microsoft Learn, "SAMEPERIODLASTYEAR": https://learn.microsoft.com/dax/sameperiodlastyear-function-dax
- **Quote:** "This behavior only happens when last two days of month are included in the selection."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Last Year, Last Month: SAMEPERIODLASTYEAR and DATEADD
- **Status:** accepted as F101, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R101 · What VAR does
- **Claim:** VAR stores the result of an expression under a name, which can then be handed to other expressions.
- **Source:** Microsoft Learn, "VAR": https://learn.microsoft.com/dax/var-dax
- **Quote:** "Stores the result of an expression as a named variable, which you can then pass as an argument to other measure expressions."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** VAR and RETURN: Naming the Middle Step
- **Status:** accepted as F102, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R102 · A variable is fixed once calculated
- **Claim:** Once a variable has been worked out its value is fixed, even where the variable is referenced again in another expression.
- **Source:** Microsoft Learn, "VAR": https://learn.microsoft.com/dax/var-dax
- **Quote:** "even if you reference the variable in another expression."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** VAR and RETURN: Naming the Middle Step
- **Status:** accepted as F103, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R103 · What variables buy you
- **Claim:** Variables improve performance, reliability and readability, and cut down complexity.
- **Source:** Microsoft Learn, "Use variables to improve your DAX formulas": https://learn.microsoft.com/dax/best-practices/dax-variables
- **Quote:** "Variables can improve performance, reliability, readability, and reduce complexity."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** VAR and RETURN: Naming the Middle Step
- **Status:** accepted as F104, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R104 · A repeated expression is evaluated twice
- **Claim:** Writing the same expression twice in one formula makes Power BI work it out twice, which is simply wasted time.
- **Source:** Microsoft Learn, "Use variables to improve your DAX formulas": https://learn.microsoft.com/dax/best-practices/dax-variables
- **Quote:** "This formula is inefficient, as it requires Power BI to evaluate the same expression twice."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** VAR and RETURN: Naming the Middle Step
- **Status:** accepted as F105, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R105 · Microsoft's worked example halved the query time
- **Claim:** In Microsoft's own year-over-year example, pulling the repeated expression into a variable produced the same result in about half the query time.
- **Source:** Microsoft Learn, "Use variables to improve your DAX formulas": https://learn.microsoft.com/dax/best-practices/dax-variables
- **Quote:** "does so in about half the query time"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** VAR and RETURN: Naming the Middle Step
- **Status:** accepted as F106, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R106 · Variables are evaluated outside the RETURN filters
- **Claim:** A variable is always worked out outside whatever filters the RETURN expression goes on to apply.
- **Source:** Microsoft Learn, "Use variables to improve your DAX formulas": https://learn.microsoft.com/dax/best-practices/dax-variables
- **Quote:** "Variables are always evaluated outside the filters your RETURN expression applies."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** VAR and RETURN: Naming the Middle Step
- **Status:** accepted as F107, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R107 · Variable names are restricted
- **Claim:** A variable name takes letters, digits and a double underscore prefix, and no other special characters at all.
- **Source:** Microsoft Learn, "VAR": https://learn.microsoft.com/dax/var-dax
- **Quote:** "No other special characters are supported."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** VAR and RETURN: Naming the Middle Step
- **Status:** accepted as F108, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R108 · Debugging by returning a variable
- **Claim:** To check what a variable actually holds, you temporarily change the RETURN expression so it outputs that variable instead.
- **Source:** Microsoft Learn, "Use variables to improve your DAX formulas": https://learn.microsoft.com/dax/best-practices/dax-variables
- **Quote:** "To test an expression assigned to a variable, you temporarily rewrite the RETURN expression to output the variable."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Formatting a Formula So Future You Can Read It
- **Status:** accepted as F109, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R109 · Commenting out keeps the real expression handy
- **Claim:** Commenting out the intended RETURN expression rather than deleting it means you can put it back the moment the debugging is done.
- **Source:** Microsoft Learn, "Use variables to improve your DAX formulas": https://learn.microsoft.com/dax/best-practices/dax-variables
- **Quote:** "This technique allows you to easily revert it back once your debugging is complete."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Formatting a Formula So Future You Can Read It
- **Status:** accepted as F110, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R110 · A measure belongs to the model, not a table
- **Claim:** A measure is a model-level object, so its names have to be unique across the whole model rather than within one table.
- **Source:** Microsoft Learn, "Column and measure references": https://learn.microsoft.com/dax/best-practices/dax-column-measure-references
- **Quote:** "A measure is a model-level object."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Where to Keep Your Measures
- **Status:** accepted as F111, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R111 · The home table is cosmetic
- **Claim:** The table a measure appears under in the Fields pane is set for cosmetic reasons, and you can change it.
- **Source:** Microsoft Learn, "Column and measure references": https://learn.microsoft.com/dax/best-practices/dax-column-measure-references
- **Quote:** "This association is set for cosmetic reasons"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Where to Keep Your Measures
- **Status:** accepted as F112, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R112 · A measures-only table sits at the top
- **Claim:** A table that holds nothing but measures always appears at the top of the Data pane.
- **Source:** Microsoft Learn, "Create measures for data analysis in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-measures
- **Quote:** "You can create a special table that contains only measures. That table always appears at the top of the"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Where to Keep Your Measures
- **Status:** accepted as F113, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R113 · Hide the column, not the table
- **Claim:** To make the measures table work you hide its one placeholder column, but not the table itself.
- **Source:** Microsoft Learn, "Create measures for data analysis in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-measures
- **Quote:** "Hide the column of that table, but not the table itself."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Where to Keep Your Measures
- **Status:** accepted as F114, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R114 · Display folders group fields
- **Claim:** Fields in a table can be grouped into display folders, named in the Properties pane.
- **Source:** Microsoft Learn, "Create measures for data analysis in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-measures
- **Quote:** "enter a name for a new folder"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Where to Keep Your Measures
- **Status:** accepted as F115, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R115 · Subfolders use a backslash
- **Claim:** A backslash in the display folder name creates a subfolder.
- **Source:** Microsoft Learn, "Create measures for data analysis in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-measures
- **Quote:** "You can create subfolders by using a backslash character."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Where to Keep Your Measures
- **Status:** accepted as F116, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R116 · Measures get a default name
- **Claim:** Every new measure arrives with a default name, and it keeps it unless you rename it there and then.
- **Source:** Microsoft Learn, "Tutorial: Create your own measures in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-tutorial-create-measures
- **Quote:** "By default, each new measure is named"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Mistakes Almost Every Beginner Makes in DAX
- **Status:** accepted as F117, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R117 · Auto date/time creates hidden tables
- **Claim:** Power BI generates its automatic date handling by creating hidden tables in the model on your behalf.
- **Source:** Microsoft Learn, "Set and use date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-date-tables
- **Quote:** "Power BI Desktop generates this data by creating hidden tables on your behalf"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Mistakes Almost Every Beginner Makes in DAX
- **Status:** accepted as F118, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R118 · Marking a date table removes the built-in one
- **Claim:** Marking your own table as the date table removes the automatically created one, and anything you had already built on it stops working properly.
- **Source:** Microsoft Learn, "Set and use date tables in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-date-tables
- **Quote:** "when you mark a table as a date table, Power BI Desktop removes the built-in (automatically created) date table"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Mistakes Almost Every Beginner Makes in DAX
- **Status:** accepted as F119, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R119 · Sorting month names needs a month number column
- **Claim:** To sort a column of month names into calendar order you need a second column holding a number for each month.
- **Source:** Microsoft Learn, "Sort one column by another column in Power BI": https://learn.microsoft.com/power-bi/create-reports/desktop-sort-by-column
- **Quote:** "to sort a column of month names correctly, you need a column that contains a number for each month"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Building One with CALENDAR
- **Status:** accepted as F120, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R120 · A text column defaults to alphabetical order
- **Claim:** Put a text column on an axis or in a slicer and Power BI orders it alphabetically by default, which is why months come out wrong.
- **Source:** Microsoft Learn, "Tips and tricks for creating reports in Power BI Desktop": https://learn.microsoft.com/power-bi/create-reports/desktop-tips-and-tricks-for-creating-reports
- **Quote:** "the default order is alphabetical"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Building One with CALENDAR
- **Status:** accepted as F121, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R121 · What alphabetical months actually look like
- **Claim:** Sorted alphabetically, the months of the year come out April, August, December, February.
- **Source:** Microsoft Learn, "Sort one column by another column in Power BI": https://learn.microsoft.com/power-bi/create-reports/desktop-sort-by-column
- **Quote:** "the months are sorted alphabetically: April, August, December, February"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Building One with CALENDAR
- **Status:** accepted as F122, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R122 · Where Sort by Column lives
- **Claim:** You select the column you want sorted, then choose Sort by Column and pick the field to sort it by.
- **Source:** Microsoft Learn, "Sort one column by another column in Power BI": https://learn.microsoft.com/power-bi/create-reports/desktop-sort-by-column
- **Quote:** "and then select the field you want to sort the other field by"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Building One with CALENDAR
- **Status:** accepted as F123, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R123 · Both columns must share a granularity
- **Claim:** Sort by Column only works where the two columns are at the same level of detail.
- **Source:** Microsoft Learn, "Sort one column by another column in Power BI": https://learn.microsoft.com/power-bi/create-reports/desktop-sort-by-column
- **Quote:** "Both columns must be at the same level of granularity."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Building One with CALENDAR
- **Status:** accepted as F124, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R124 · The sort-by column must be unique per value
- **Claim:** Each value in the column being sorted has to map to exactly one value in the sort-by column, or Power BI refuses the sort.
- **Source:** Microsoft Learn, "Sort one column by another column in Power BI": https://learn.microsoft.com/power-bi/create-reports/desktop-sort-by-column
- **Quote:** "The sort-by column must contain unique values for each value in the sorted column."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Building One with CALENDAR
- **Status:** accepted as F125, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R125 · What RELATEDTABLE does
- **Claim:** RELATEDTABLE changes the context the data is filtered in, and works the expression out in that new context.
- **Source:** Microsoft Learn, "RELATEDTABLE": https://learn.microsoft.com/dax/relatedtable-function-dax
- **Quote:** "The RELATEDTABLE function changes the context in which the data is filtered, and evaluates the expression in the new context that you specify."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** RELATED: Reaching Across a Relationship
- **Status:** accepted as F126, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R126 · RELATEDTABLE is CALCULATETABLE underneath
- **Claim:** RELATEDTABLE is a shortcut for CALCULATETABLE with no logical expression given.
- **Source:** Microsoft Learn, "RELATEDTABLE": https://learn.microsoft.com/dax/relatedtable-function-dax
- **Quote:** "This function is a shortcut for CALCULATETABLE function with no logical expression."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** RELATED: Reaching Across a Relationship
- **Status:** accepted as F127, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R127 · RELATEDTABLE fetches rows from the many side
- **Claim:** Where RELATED reaches to the one side of a relationship for a value, RELATEDTABLE reaches the other way and returns rows from the many side.
- **Source:** Microsoft Learn, "Model relationships in Power BI Desktop": https://learn.microsoft.com/power-bi/transform-model/desktop-relationships-understand
- **Quote:** "Retrieve a table of rows from"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** RELATED: Reaching Across a Relationship
- **Status:** accepted as F128, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R128 · A blank is a value DAX uses
- **Claim:** A blank is a value in DAX, not a failure. DAX uses blanks both for database nulls and for empty cells that came in from Excel.
- **Source:** Microsoft Learn, "BLANK": https://learn.microsoft.com/dax/blank-function-dax
- **Quote:** "DAX uses blanks for both database nulls and for blank cells in Excel."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** When the Formula Turns Red
- **Status:** accepted as F129, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R129 · A blank is not a null
- **Claim:** A blank is not the same thing as a null, even though DAX represents a null with one.
- **Source:** Microsoft Learn, "BLANK": https://learn.microsoft.com/dax/blank-function-dax
- **Quote:** "Blanks are not equivalent to nulls."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** When the Formula Turns Red
- **Status:** accepted as F130, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R130 · Blanks are what cause most errors
- **Claim:** Most errors that turn up while a formula is being evaluated come from unexpected blanks or zeros, or a data type that would not convert.
- **Source:** Microsoft Learn, "Appropriate use of error functions": https://learn.microsoft.com/dax/best-practices/dax-error-functions
- **Quote:** "Most evaluation-time errors are due to unexpected BLANKs or zero values, or invalid data type conversion."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** When the Formula Turns Red
- **Status:** accepted as F131, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R131 · Formatting DAX is a documented best practice
- **Claim:** Microsoft states plainly that formatting your DAX is a best practice and that it improves readability.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Quote:** "Formatting your DAX query is considered to be a best practice and improves the DAX query readability."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Formatting a Formula So Future You Can Read It
- **Status:** accepted as F132, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R132 · What Power BI's own formatter does
- **Claim:** Power BI's own formatter indents with tabs, puts DAX function names into capitals, and breaks the formula across extra lines.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Quote:** "The query is indented with tabs. DAX functions are changed to UPPERCASE, and extra lines are added."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Formatting a Formula So Future You Can Read It
- **Status:** accepted as F133, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R133 · Indentation buys you collapsing
- **Claim:** The indentation is not only for reading: it lets you collapse and expand sections of a long formula.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Quote:** "The formatting also indents in such a way that you can collapse and expand sections of the query."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Formatting a Formula So Future You Can Read It
- **Status:** accepted as F134, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R134 · The Format shortcut
- **Claim:** SHIFT+ALT+F formats the current query.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Quote:** "use SHIFT+ALT+F to format the current query"
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Formatting a Formula So Future You Can Read It
- **Status:** accepted as F135, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R135 · Commented lines are ignored when it runs
- **Claim:** A commented line is skipped entirely when the DAX is run, which is what makes commenting out a safe way to test.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Quote:** "This action comments out the lines. When the DAX query is run, those lines are ignored."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Formatting a Formula So Future You Can Read It
- **Status:** accepted as F136, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R136 · Ctrl+/ toggles a comment
- **Claim:** CTRL+/ toggles a line between commented and uncommented.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Quote:** "You can also use CTRL+/ to toggle between comment and uncomment."
- **Kind:** reference
- **Retrieved:** 2026-09-20
- **For:** Formatting a Formula So Future You Can Read It
- **Status:** accepted as F137, 2026-09-20
- **Verified:** 2026-09-20, quote found on the page

---

## R137 · The slash returns Infinity or NaN, not an error
- **Claim:** In DAX the divide operator does not return an error on a zero or blank denominator: 5/BLANK returns Infinity, 0/BLANK returns NaN and BLANK/BLANK returns BLANK, where Excel returns an error for all three.
- **Source:** Microsoft Learn, "Data types in Power BI": https://learn.microsoft.com/power-bi/connect-data/desktop-data-types
- **Quote:** "The following table summarizes the differences between how DAX and Microsoft Excel formulas handle blanks."
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** DIVIDE, and the One Time the Slash Is Fine
- **Status:** accepted as F138, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---

## R138 · Opening a measure in DAX query view
- **Claim:** Right-clicking a measure and choosing Quick queries, then Define and evaluate, opens it in DAX query view with its formula in a DEFINE statement you can modify.
- **Source:** Microsoft Learn, "Work with DAX query view": https://learn.microsoft.com/power-bi/transform-model/dax-query-view
- **Quote:** "When you right-click a measure and choose Quick queries > Define and evaluate"
- **Kind:** reference
- **Retrieved:** 2026-09-23
- **For:** Formatting a Formula So Future You Can Read It
- **Status:** accepted as F139, 2026-09-23
- **Verified:** 2026-09-23, quote found on the page

---
