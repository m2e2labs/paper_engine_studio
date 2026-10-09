# Blocks

The backlog. One entry per lesson, in book order. The `/block` skill reads this to know what a
lesson is about before it writes anything.

Nothing here is printed. The lesson is written from it, in plain business English (see VOICE.md).

- **What** is the explainer, in everyday words.
- **Use when** decides whether the lesson is needed.
- **Action** becomes the DO THIS NOW box.
- **Band** is the one picture on the page. Every picture is hand-drawn, never a screenshot.
- **Facts** lists the findings that back the page. Nothing can be written from a finding until
  you accept it in the Studio's Research tab, which gives it an F id. Until then the line says
  what is still missing.

Practice pages use the sample file `datasets/excel-beginner/Corner Shop sales.xlsx`
(sheets Sales, Products, Targets and Staff). Its figures are in `datasets/excel-beginner/answers.json`.

---

## Part 1 · Meet Excel

#### What Excel Is For
- **What:** Excel is a grid of boxes called cells. Each cell can hold a number, some text or a formula. It works well for simple sums and for tracking almost any kind of information. Once your data is in rows and columns, Excel can add it up, sort and filter it, and build charts from it.
- **Use when:** the reader has only used Excel as a blank page for typing. **Skip when:** they already build sheets with formulas.
- **Action:** "Type 25 in cell A1 and press Enter. Then type Milk in cell B1 and press Enter."
- **Band:** diagram (a grid of cells, with a number, a word and a formula each marked)
- **Facts:** F45, F46, F47

#### Workbooks, Sheets and Cells
- **What:** The workbook is the file you save. It holds sheets, which are the pages you switch between using the tabs at the bottom. Each cell has an address made from its column letter and row number, such as B2.
- **Use when:** the reader does not know what a sheet is or where a cell address comes from. **Skip when:** they already name cells this way.
- **Action:** "Click cell B2 and type 7. Then click the plus at the bottom of the workbook to add a second sheet."
- **Band:** diagram (a workbook with three sheet tabs, and one cell highlighted with its address, B2)
- **Facts:** F31, F44, F48, F49, F62.

#### A Tour of the Excel Window
- **What:** The ribbon across the top has tabs, such as Home and Insert, and each tab groups related buttons. The formula bar shows what is in the selected cell. The Name box sits to the left of the formula bar. The sheet tabs run along the bottom of the workbook.
- **Use when:** the reader opens Excel for the first time. **Skip when:** they know the window.
- **Action:** "Type 5 in cell A1. Click A1 and read it in the formula bar. Then type B2 in the Name box and press Enter."
- **Band:** diagram (hand-drawn close-up of the formula bar and the Name box side by side, the Name box at the left end, with cell A1's contents shown in the formula bar. No ribbon or grid, so the drawing makes no placement claim the sources do not back.)
- **Facts:** F50, F51, F52, F62, F63. Gaps: no source says the formula bar sits below the ribbon, so the drawing's formula bar position is unsourced. No source says the Name box shows the address of the selected cell, so the page does not say it.

#### Moving Around the Sheet
- **What:** Arrow keys move one cell at a time. Ctrl with an arrow key jumps to the edge of a block of data. Ctrl+Home returns to the start of the sheet, and Ctrl+End goes to the last used cell. Enter completes what you typed and selects the cell below.
- **Use when:** the reader scrolls with the mouse to find the bottom of a long list. **Skip when:** never.
- **Action:** "Click cell A1, press Ctrl+End to find the last used cell, then press Ctrl+Home to go back."
- **Band:** diagram (a sheet with arrows showing one step, a jump to the edge, and the trips to the last cell and back to the start)
- **Facts:** F53, F57, F58, F59, F60, F61

#### Adding and Renaming Sheets
- **What:** A new sheet is one click away. Click the New Sheet plus icon at the bottom of the workbook. Double-click a sheet's tab to rename it. Ctrl+Page down moves to the next sheet.
- **Use when:** the reader needs a separate sheet for each month or each team. **Skip when:** never.
- **Action:** "Click the New Sheet plus icon. Double-click the new tab, type Notes and press Enter."
- **Band:** diagram (three sheet tabs, a fourth tab added, and one tab with its new name being typed)
- **Facts:** F54, F55, F56, F64

#### Practice: First Look at the Corner Shop Sales
- **What:** Open Corner Shop sales.xlsx and find its four sheets: Sales, Products, Targets and Staff. Then look at the Sales sheet to see its headings and how many sales it holds.
- **Use when:** the reader is ready to practise on the shared sample file. **Skip when:** never.
- **Action:** "Open Corner Shop sales.xlsx, click the Sales tab, and press Ctrl+End. Note the cell it lands on."
- **Band:** diagram (the four sheet tabs, and the last cell of the Sales sheet called out)
- **Facts:** F65, F66, F67

---

## Part 2 · Typing and moving around

#### Typing Into a Cell
- **What:** Click a cell, type, and press Enter to finish. Enter moves you down to the cell below. Press Tab to finish and move one cell to the right. Press Esc to cancel what you typed before you finish.
- **Use when:** the reader has typed into a sheet only a little, or keeps losing what they typed. **Skip when:** never.
- **Action:** "Click B2, type Pens and press Tab. Type 12 in C2 and press Enter."
- **Band:** diagram (a small grid with three arrows: Enter moves down, Tab moves right, Esc cancels the entry)
- **Facts:** F61, F68, F69, F70.

#### Numbers, Text and Dates
- **What:** Excel decides what kind of thing you typed: a number, text or a date. Type a date and Excel reads it as one. A number stored as text is ignored by SUM, so check the kind before you total a column.
- **Use when:** a number is being treated as text, or a date looks wrong. **Skip when:** never.
- **Action:** "Click a number in a column of your own, press F2, and look at what the cell holds."
- **Band:** diagram (two cells: a typed 2/2 shown as a date, and a number that stays a number, each with its kind labelled)
- **Facts:** F2 (SUM ignores text values), F72 (F2 edits in place), F81 (a typed 2/2 is read as a date) and F82 (the default date format comes from regional settings). Gap: no Microsoft source says how numbers and text line up by default, so this lesson does not mention alignment.

#### Numbers Stored as Text
- **What:** Sometimes a number is stored as text. Excel usually shows an alert next to the cell, a green triangle warning, and SUM ignores text values, so the total comes out short.
- **Use when:** a total is too small, or a column of figures won't add up. **Skip when:** never.
- **Action:** "Select the cells, click the error indicator in the top left corner (or press Alt+Shift+F10), and choose Convert to Number."
- **Band:** diagram (one column: a number flagged with a green triangle, then the same column after Convert to Number, with the triangle gone)
- **Facts:** F2 (SUM ignores text values), F77 (the alert), F78 (Convert to Number), F79 (the green triangle is removed) and F80 (Alt+Shift+F10 opens the error menu).

#### Entering Dates Excel Can Read
- **What:** When you type a date, Excel reads it as a date and shows it in a default date format. That default comes from your regional date and time settings, so the same entry can look different on another computer.
- **Use when:** the reader types dates from a list, or receives a file with dates in it. **Skip when:** never.
- **Action:** "Type 2/2 in cell A3 and press Enter. Excel reads it as a date and shows it in a date format."
- **Band:** diagram (a typed 2/2 shown as a date, with the regional settings marked as the source of the default format)
- **Facts:** F81 (a typed 2/2 is read as a date) and F82 (the default date format comes from regional settings). Gap: the page does not say whether the day or the month comes first, so this lesson does not say it.

#### Selecting Cells
- **What:** Selecting tells Excel which cells the next command works on. Click one cell, or drag across several. Hold Shift and press an arrow key to grow the selection one cell at a time. Ctrl+Space selects a whole column, and Shift+Space selects a whole row.
- **Use when:** the reader needs to format, copy or total several cells at once. **Skip when:** never.
- **Action:** "Click B2, hold Shift and press the Down arrow until B5 is selected."
- **Band:** diagram (a column of cells with the selection shaded, and small arrows showing the Shift and arrow steps)
- **Facts:** F53, F74, F75, F76

#### Editing and Clearing a Cell
- **What:** F2 puts the cursor at the end of the cell's contents, so you can change what is there without retyping it. Delete removes the contents of the selected cells and leaves the formatting in place.
- **Use when:** a cell needs a small change, or its contents must go but its look must stay. **Skip when:** never.
- **Action:** "Click B2, press F2, change the text, and press Enter. Then click C2 and press Delete."
- **Band:** diagram (a cell in edit mode with the cursor at the end, and a cleared cell that keeps its border and fill)
- **Facts:** F72, F73.

#### Undo and Cancel
- **What:** Esc cancels an entry before you finish it. Ctrl+Z undoes the last action you finished.
- **Use when:** the reader types or changes the wrong thing. **Skip when:** never.
- **Action:** "Type Oops in B2 and press Esc. Type 9 in C2 and press Enter, then press Ctrl+Z to undo it."
- **Band:** diagram (three steps in a row: an entry being cancelled with Esc, an entry made, and Ctrl+Z stepping back one action)
- **Facts:** F69, F71

#### Selecting, Copying and Filling
- **What:** Excel can fill the cells below or beside a starting cell for you. Drag the small square at
  the bottom-right corner of the cell. A copy-style fill repeats the values and formatting of your
  starting cells across the cells you fill.
- **Use when:** the reader types the same thing into many cells. **Skip when:** never.
- **Action:** "Type 1 in A1 and 2 in A2. Select both and drag the small square down to A10."
- **Band:** diagram (a column of cells being filled down, with the small square marked)
- **Facts:** F15, F32, F44. Already approved and built; kept as it stands.

#### Practice: Typing and Fixing a Short List
- **What:** Change one price on the Products sheet, check it, and put it back.
- **Use when:** the reader has finished the lessons in this part. **Skip when:** never.
- **Action:** "Open Corner Shop sales.xlsx and click the Products tab. Click any Unit price, press F2, change the number, press Enter, then press Ctrl+Z to put it back."
- **Band:** diagram (the Products sheet headings, one price being edited, and a Ctrl+Z arrow back to the original)
- **Facts:** F65 (the four sheet names, including Products), F71 (Ctrl+Z undoes the last action), F72 (F2 edits in place), F83 (the Products headings).

---

## Part 3 · Making it look right

#### Bold and Fonts
- **What:** Bold makes text heavier, italic slants it, and underline draws a line under it. Select the cell first, then pick the style you want. You can also change the font style, the font size and the text colour from the Home tab.
- **Use when:** a heading or a total needs to stand out from the rest. **Skip when:** never.
- **Action:** "Click any heading cell, choose Bold, then click the arrow next to Font Size and pick a bigger size."
- **Band:** diagram (one cell of plain text, then the same words in bold, in italic, underlined and in a larger size)
- **Facts:** F44, F84, F85, F86, F291

#### Showing Money With Currency
- **What:** Currency shows a number with a money symbol, such as £ or $. Accounting does the same, and it also lines the symbols and decimal points up in a column. Select the cells, then click Accounting Number Format in the Number group on the Home tab. Pressing Ctrl+Shift+$ applies the Currency format instead.
- **Use when:** the numbers are money, such as prices or takings. **Skip when:** the numbers are counts, such as how many sales were made.
- **Action:** "Select a column of prices, then click Accounting Number Format in the Number group on the Home tab."
- **Band:** diagram (a column of plain numbers, and the same column with the money symbols lined up one under another)
- **Facts:** F87, F88, F90

#### Percentages and Decimal Places
- **What:** A percentage shows a number with a percent sign. Be careful: when you apply the percent format to a number already in a cell, Excel multiplies that number by 100. Increase Decimal and Decrease Decimal change how many digits show after the decimal point.
- **Use when:** the reader shows shares, rates or changes. **Skip when:** never.
- **Action:** "Select a column of numbers, click Percent Style in the Number group on the Home tab. If the numbers are now 100 times too big, press Ctrl+Z to undo."
- **Band:** diagram (a column of plain numbers, the same column with percent signs, and a warning mark on the step that multiplies by 100)
- **Facts:** F71, F91, F92, F93. Gap: no source yet says that changing the decimal places leaves the value in the cell unchanged.

#### Changing Column Widths
- **What:** If you can't see all of a cell's contents, change the column width. Drag the boundary on the right side of the column heading to make the column wider or narrower. Double-click that boundary to make the column fit its text. Rows work the same way with the boundary below a row heading.
- **Use when:** the reader can't see all of a cell's contents. **Skip when:** never.
- **Action:** "Double-click the line between two column headings, such as B and C."
- **Band:** diagram (two column headings with the boundary between them, a double-click mark on it, and a dragged edge with an arrow)
- **Facts:** F94, F95, F97

#### Adding Borders
- **What:** A border is a line around a cell or a group of cells. On the Home tab, in the Font group, open the arrow next to Borders and pick a border style. Choose No Border to take the lines off.
- **Use when:** a total or a table needs lines to set it apart from the rest. **Skip when:** never.
- **Action:** "Select a group of cells, open the Borders arrow, and pick a border style. Then choose No Border to remove it."
- **Band:** diagram (a small table with a border added around its total, and the No Border option marked)
- **Facts:** F98, F99, F100

#### Colour in Cells
- **What:** Fill Color shades the background of a cell, and it is in the Font group on the Home tab. Font Color changes the colour of the text. Choose No Fill to take the shading off.
- **Use when:** the reader wants to mark a row or a group of cells so it stands out. **Skip when:** never.
- **Action:** "Select a heading row, open the Fill Color arrow, and pick a colour from Theme Colors or Standard Colors."
- **Band:** diagram (a plain heading row, and the same row with a shaded background and coloured text)
- **Facts:** F101, F102, F103, F104

#### Practice: Making the Sales Sheet Readable
- **What:** The Unit price and Amount columns on the Sales sheet already show money. Make the Date heading bold, and widen the Amount column so you can read every number in it.
- **Use when:** the reader is ready to practise on the shared sample file. **Skip when:** never.
- **Action:** "Open Corner Shop sales.xlsx, click the Sales tab, and double-click the line between the G and H column headings. Then click cell A1 and choose Bold."
- **Band:** diagram (the Sales headings, with the Date heading in bold and the Amount column widened)
- **Facts:** F44, F65, F84, F95, F105

---

## Part 4 · Your first formulas

#### What a Formula Actually Is
- **What:** A formula is something you type into a cell to work out an answer. It starts with an equals sign. The answer appears in the cell, and the formula stays in the formula bar, where you can read it.
- **Use when:** the reader has only typed numbers and words. **Skip when:** they already type formulas.
- **Action:** "Click cell C1, type =A1*B1 and press Enter. Click C1 again and read the formula in the formula bar."
- **Band:** diagram (a cell showing its answer, with the formula =A1*B1 shown in the formula bar above it)
- **Facts:** F1, F44, F51, F106

#### Your First Formula: Adding Two Cells
- **What:** A formula can add two cells. Type the equals sign, click the first cell, type a plus sign, click the second cell, and press Enter. The answer appears in the cell where you typed the formula.
- **Use when:** the reader is about to add two cells. **Skip when:** never.
- **Action:** "In A3 type =A1+A2 and press Enter. Then change A1 and watch A3 change."
- **Band:** diagram (three cells, with arrows showing A1 and A2 feeding A3)
- **Facts:** F1, F31, F44, F107, F108. Gap: no source says a formula that points to cells follows them when they change, so the page doesn't say it. F108 is the basis for the closer.

#### The Symbols in a Formula
- **What:** Excel uses symbols for the four basic sums. The plus sign adds, the minus sign subtracts, the asterisk multiplies and the forward slash divides. A caret raises a number to a power.
- **Use when:** the reader needs a sum that SUM doesn't cover, such as one number divided by another. **Skip when:** never.
- **Action:** "In C1 type =A1*B1 and press Enter. In C2 type =A1/B1 and press Enter. Compare the two answers."
- **Band:** diagram (a short table of the five symbols, each beside the sum it stands for)
- **Facts:** F44, F109, F110, F111, F112, F113

#### Brackets and the Order of Calculation
- **What:** Excel follows a set order. It does multiplication before addition, so a formula with both gives the multiplication first. Brackets change that order: the part inside them is worked out first.
- **Use when:** a formula with plus and times gives an answer you didn't expect. **Skip when:** never.
- **Action:** "In C1 type =(A1+A2)*B1 and press Enter. In C2 type =A1+A2*B1 and compare the two answers."
- **Band:** diagram (one formula with the bracket, the multiplication and the addition shaded in the order Excel works them out)
- **Facts:** F44, F114, F115

#### SUM and AutoSum
- **What:** SUM adds a group of cells in one go, such as =SUM(A2:A10). It ignores text and blank cells, so only the numbers count. AutoSum is the button on the Home tab that types the SUM for you.
- **Use when:** the reader adds up a column by typing each cell. **Skip when:** never.
- **Action:** "Select the cell below a column of numbers, click AutoSum, and press Enter."
- **Band:** diagram (a column of numbers, a SUM over the group, and the total below)
- **Facts:** F2, F7, F33, F34, F116, F117

#### AVERAGE: The Middle of a Group
- **What:** AVERAGE finds the middle of a group of numbers. It adds the numbers and divides by how many there are. It leaves out blank cells and text, but a cell showing zero counts.
- **Use when:** the reader needs more than a total. **Skip when:** never.
- **Action:** "Type =AVERAGE(A1:A5) in a spare cell. Then change one of the numbers in A1 to A5 and watch the average move."
- **Band:** diagram (a column of numbers with a bracket around the group and the average beside it)
- **Facts:** F8, F44, F118, F119

#### MIN and MAX: Smallest and Largest
- **What:** MIN finds the smallest number in a group, and MAX finds the largest. Both skip empty cells and text.
- **Use when:** the reader wants the lowest or highest figure, such as the smallest sale. **Skip when:** never.
- **Action:** "Type =MIN(A1:A5) in one spare cell and =MAX(A1:A5) in the next. Compare the two answers."
- **Band:** diagram (a column of numbers with the smallest and the largest marked)
- **Facts:** F44, F120, F121, F122

#### COUNT: How Many Numbers
- **What:** COUNT tells you how many cells hold a number. It counts only the cells with numbers in them.
- **Use when:** the reader wants to know how many entries are filled in with a number. **Skip when:** never.
- **Action:** "Type =COUNT(A1:A5) in a spare cell. Check the answer against the numbers you can see in A1 to A5."
- **Band:** diagram (a column with some cells holding numbers and some holding words, and the count of the numbers beside it)
- **Facts:** F44, F123

#### ROUND: Fewer Decimal Places
- **What:** ROUND gives a number a set number of decimal places. Excel calculates with the stored value, not the number you see on screen, so the change ROUND makes is the one that counts in a formula.
- **Use when:** a total must show two decimal places, or the reader needs the rounded figure to add up. **Skip when:** never.
- **Action:** "Type =ROUND(A1,1) in a spare cell and press Enter. Compare it with A1."
- **Band:** diagram (a number with a few decimal places, the rounded result beside it, and the stored value marked)
- **Facts:** F44, F124, F125, F126

#### Practice: First Formulas on the Sales Sheet
- **What:** Use SUM, AVERAGE, MIN and MAX on the Amount column of the Sales sheet. The column adds up to a total, and its average has more decimal places than most people need.
- **Use when:** the reader is ready to practise on the shared sample file. **Skip when:** never.
- **Action:** "Open Corner Shop sales.xlsx, click the Sales tab, click an empty cell below the Amount column, and type =SUM(G2:G241). Press Enter and check the total."
- **Band:** diagram (the Amount column with four results beside it: SUM, AVERAGE, MIN and MAX)
- **Facts:** F44, F65, F66, F67, F127, F128, F129

## Part 5 · Cell references

#### Copying Formulas: Relative References
- **What:** A cell reference is relative by default: it is measured from the cell that holds the formula. Copy the formula to another cell and the reference changes with it. Copy =B4*C4 from D4 to D5 and it becomes =B5*C5.
- **Use when:** the reader copies a formula down a column. **Skip when:** never.
- **Action:** "Type 2, 3 and 4 in B1 to B3, and 10, 20 and 30 in C1 to C3. In D1 type =B1*C1, then copy it down to D3. Click D2 and read the formula."
- **Band:** diagram (=B4*C4 in D4 and the copy in D5 reading =B5*C5, with the row number moving)
- **Facts:** F44, F130, F131, F132. Gap: the source says the copy "adjusts to the right by one column", which is its wording, so the page says the row number moves.

#### Locking a Cell With the Dollar Sign
- **What:** When you copy a formula, Excel moves the cell addresses in it. A dollar sign in front of the column or row stops that. Excel can switch a formula between relative and absolute addresses.
- **Use when:** a formula must always point to one fixed cell, such as a rate. **Skip when:** never.
- **Action:** "In C1 type =B1*$F$1 and copy it down to C3. Notice that F1 stays put."
- **Band:** diagram (three formulas in a column, the locked cell $F$1 highlighted in each)
- **Facts:** F16, F31, F42, F43, F44, F133

#### Mixed References: Lock Only the Column or the Row
- **What:** A dollar sign can go in front of just the column or just the row. $B4 fixes the column and C$4 fixes the row. The part with no dollar sign still moves when you copy.
- **Use when:** one formula must be copied both across and down, such as a times table. **Skip when:** never.
- **Action:** "Type 1, 2 and 3 in B1 to D1, and 1, 2 and 3 in A2 to A4. In B2 type =$A2*B$1, then copy it across to D2 and down to D4."
- **Band:** diagram (a grid with column A and row 1 marked as the fixed parts of =$A2*B$1)
- **Facts:** F134, F135, F136

#### Switching Reference Type With F4
- **What:** You don't have to type the dollar signs. Click the cell that holds the formula, select the reference in the formula bar, and press F4 to switch between the reference types.
- **Use when:** the reader needs a dollar sign and doesn't want to type it. **Skip when:** never.
- **Action:** "In C1 type =B1*F1 and press Enter. Click C1, select F1 in the formula bar, then press F4 and watch the dollar signs change."
- **Band:** diagram (a formula in the formula bar with one reference selected and F4 beside it)
- **Facts:** F42, F137. Gap: no source gives the order in which the F4 key steps through the types, so the page doesn't say it.

#### Referring to Another Sheet
- **What:** A formula can use cells on another sheet in the same workbook. Put the sheet name and an exclamation mark in front of the cell reference, as in Targets!B2. A sheet name with spaces or symbols goes in single quotation marks.
- **Use when:** the numbers a formula needs sit on a different sheet. **Skip when:** never.
- **Action:** "On the Sales sheet, click an empty cell and type =, then click the Targets tab and click B2. Press Enter."
- **Band:** diagram (two sheet tabs, Sales and Targets, with a formula on Sales reaching across to a cell on Targets)
- **Facts:** F138, F140, F141, F142

#### Practice: Copying a Formula Down the Sales Sheet
- **What:** Add a column to the Sales sheet that multiplies Quantity by Unit price. Type the formula once and copy it down 240 rows. Every row matches the Amount column, and the new column adds up to the same total.
- **Use when:** the reader is ready to practise on the shared sample file. **Skip when:** never.
- **Action:** "On the Sales sheet, type Check in H1 and =E2*F2 in H2. Copy H2 down to H241 and compare H241 with G241. Then type =SUM(H2:H241) in an empty cell and check it shows 6325."
- **Band:** diagram (columns E, F, G and the new column H, with the formula in H2 and the copy in H241)
- **Facts:** F44, F65, F131, F143, F144

## Part 6 · Decisions and lookups

#### Comparing Two Values
- **What:** A comparison checks two values and answers TRUE or FALSE. The symbols are = for equal to, > for greater than, < for less than, >= for greater than or equal to, <= for less than or equal to, and <> for not equal to.
- **Use when:** the reader wants Excel to check one number against another. **Skip when:** never.
- **Action:** "In A1 type 60 and in B1 type 50. In C1 type =A1>B1 and press Enter. Then change A1 to 40 and watch C1."
- **Band:** diagram (two numbers with a greater-than symbol between them and TRUE as the answer)
- **Facts:** F145, F146, F147

#### IF: Making a Decision in a Cell
- **What:** IF tests a condition and gives one answer if it is true and another if it is false. For example, =IF(A2>B2,"Over Budget","OK"). Text inside a formula goes in quotation marks.
- **Use when:** the reader wants a label that changes with a number. **Skip when:** never.
- **Action:** "In C1 type =IF(A1>B1,"Over","Fine") and press Enter. Change A1 and watch C1 change."
- **Band:** diagram (a yes-or-no test, with the two possible answers)
- **Facts:** F148, F149, F150, F151

#### AND and OR: More Than One Test
- **What:** AND gives TRUE only if every test is true. OR gives TRUE if any test is true. Put either one inside IF to test several conditions instead of just one.
- **Use when:** one test isn't enough to decide. **Skip when:** never.
- **Action:** "In C1 type =AND(A1>1,A1<100) and press Enter. Change A1 to a number outside that range and watch C1."
- **Band:** diagram (two tests feeding AND, which needs both true, and OR, which needs one)
- **Facts:** F152, F153, F154, F155, F156

#### SUMIF: Adding Up Only What Matches
- **What:** SUMIF adds up only the cells that match a condition you set. For example, the total sales for one region. If you leave out the last part, it adds up the cells it checked for a match.
- **Use when:** the reader needs a total for one group. **Skip when:** never.
- **Action:** "On the Sales sheet, type =SUMIF(B:B,"North",G:G). Column B holds the region and column G holds the amount."
- **Band:** diagram (the Region column, the Amount column, and only the North rows added)
- **Facts:** F5, F9, F30. Already approved and built; kept as it stands.

#### COUNTIF: Counting What Matches
- **What:** COUNTIF counts the cells that meet a condition you set. It takes the group of cells to look in, then what to look for: a word, a number, or a comparison such as ">32".
- **Use when:** the reader wants to know how many rows match, not what they add up to. **Skip when:** never.
- **Action:** "On the Sales sheet, type =COUNTIF(G2:G241,">50") in an empty cell and press Enter."
- **Band:** diagram (a column of amounts, those over a threshold marked, and the count beside it)
- **Facts:** F157, F158, F159, F160, F161

#### XLOOKUP: Finding a Value in a List
- **What:** XLOOKUP looks for a value in one column and gives back the answer from the same row in another column, whichever side that column is on. If it finds no match it shows #N/A, unless you give it a message to show instead.
- **Use when:** the reader needs a price, category or name matched to a code or word. **Skip when:** never.
- **Action:** "On the Products sheet, in an empty cell type =XLOOKUP("Bag",A2:A6,B2:B6) and press Enter."
- **Band:** diagram (a short list with Bag found in the first column and its category read from the second)
- **Facts:** F162, F163, F164, F165, F166, F167. Gap: F166 says XLOOKUP is not in Excel 2016 or 2019. The book is written for Microsoft 365, so the page leaves that out unless you want it in.

#### IFERROR: Handling an Error
- **What:** IFERROR shows a message you choose when a formula gives an error, and shows the formula's answer when it doesn't. For example, =IFERROR(A1/B1,"Check B1") when B1 is zero.
- **Use when:** a formula can fail, such as a lookup that finds nothing or a division by zero. **Skip when:** never.
- **Action:** "In A1 type 55 and in B1 type 0. In C1 type =A1/B1 and press Enter, then type =IFERROR(A1/B1,"Check B1") in D1."
- **Band:** diagram (a division by zero error on one side and the chosen message on the other)
- **Facts:** F168, F169, F170, F171

#### Practice: Decisions and a Lookup on the Sales Sheet
- **What:** On the Sales sheet, use IF to label each sale Big or Small, COUNTIF to count the big ones, and XLOOKUP to bring each sale's category in from the Products sheet.
- **Use when:** the reader is ready to practise on the shared sample file. **Skip when:** never.
- **Action:** "On the Sales sheet, in I2 type =IF(G2>50,"Big","Small") and in J2 type =XLOOKUP(D2,Products!$A$2:$A$6,Products!$B$2:$B$6). Copy both down to row 241. Then type =COUNTIF(G2:G241,">50") in an empty cell and check it shows 35."
- **Band:** diagram (one Sales row with its amount labelled Big and its product matched to a category)
- **Facts:** F43, F44, F65, F138, F148, F149, F157, F158, F161, F162, F164, F167, F172

## Part 7 · Dates and text

#### Dates Are Numbers
- **What:** Excel stores a date as a number: the days since January 1, 1900. That is why you can subtract one date from another and get the number of days between them.
- **Use when:** the reader wants to know how long it is between two dates. **Skip when:** never.
- **Action:** "In A1 type =DATE(2025,1,1) and in A2 type =DATE(2025,1,31). In A3 type =A2-A1 and press Enter. The answer is the number of days between the two dates."
- **Band:** diagram (two dates with their serial numbers underneath, and the difference between them as days)
- **Facts:** F173, F174, F175. Gap: no source gives the answer to the page's own example, so the page tells the reader to check it rather than stating it.

#### TODAY: Today's Date
- **What:** TODAY gives the current date. It needs nothing between its brackets, and it shows the right date whenever you open the workbook. Add to it to count forward, as in =TODAY()+5.
- **Use when:** a sheet must always show today's date, or measure from it. **Skip when:** the date must stay fixed.
- **Action:** "In A1 type =TODAY() and press Enter. In B1 type =TODAY()+5 and press Enter."
- **Band:** diagram (a calendar cell showing today, and another five days on)
- **Facts:** F176, F177, F178, F179, F180

#### YEAR, MONTH and DAY
- **What:** YEAR, MONTH and DAY each pull one part out of a date. YEAR gives the year, MONTH gives the month as a number from 1 to 12, and DAY gives the day of the month from 1 to 31.
- **Use when:** the reader needs the year, month or day on its own, to group or label rows. **Skip when:** never.
- **Action:** "In A1 type =DATE(2025,5,23). In B1 type =YEAR(A1), in C1 type =MONTH(A1) and in D1 type =DAY(A1)."
- **Band:** diagram (one date split into its year, month and day)
- **Facts:** F181, F182, F183, F184, F185

#### Joining Text With the Ampersand
- **What:** The ampersand joins text from different cells into one. =A2&" "&B2 joins what's in A2, a space, and what's in B2. CONCAT does the same job.
- **Use when:** a first name and a surname sit in two cells and the reader wants one. **Skip when:** never.
- **Action:** "On the Staff sheet, in an empty cell type =A2&" "&B2 and press Enter."
- **Band:** diagram (two cells of text joined with a space between into one cell)
- **Facts:** F186, F187, F188, F189, F194

#### TRIM: Removing Extra Spaces
- **What:** TRIM removes all spaces from text except single spaces between words. Use it on text that came from another program and has uneven spacing. It doesn't remove a non-breaking space, a kind often found on web pages.
- **Use when:** text from another program has stray spaces. **Skip when:** the text is already clean.
- **Action:** "In A1 type =TRIM(" Sales report ") and press Enter."
- **Band:** diagram (text with extra spaces around it, then the same words with the spaces gone)
- **Facts:** F190, F191, F192, F193

#### Practice: Dates and Text on the Staff Sheet
- **What:** On the Staff sheet, use YEAR to pull the start year out of each start date, and the ampersand to join each name and region into one cell.
- **Use when:** the reader is ready to practise on the shared sample file. **Skip when:** never.
- **Action:** "On the Staff sheet, in D2 type =YEAR(C2) and in E2 type =A2&" - "&B2. Copy both down to the last row."
- **Band:** diagram (a Staff row with its start date, and the year and the joined text beside it)
- **Facts:** F44, F181, F187, F189, F194

## Part 8 · Organising rows

#### Keeping the Headings in View
- **What:** Freeze Panes keeps the rows above, and the columns to the left, of the cell you choose in place while you scroll. Select the cell below the rows you want to keep visible, then use Freeze Panes on the View tab. Unfreeze Panes undoes it.
- **Use when:** the list is longer than the screen and the headings scroll out of sight. **Skip when:** the list fits on one screen.
- **Action:** "On the Sales sheet, click View, then Freeze Panes, then Unfreeze Panes. Click A2, then choose View, Freeze Panes, Freeze Panes. Scroll down and watch the headings stay."
- **Band:** diagram (a sheet scrolled down, with the heading row held at the top)
- **Facts:** F44, F195, F196, F197, F198, F199. Gap: the Windows source gives no Freeze Top Row option, so the page uses Freeze Panes with A2 selected.

#### Sorting Rows
- **What:** Sorting puts your rows in order. You can sort text from A to Z, or numbers and dates from smallest to largest. Sorting moves whole rows, so each row stays together.
- **Use when:** the reader needs a list in order. **Skip when:** never.
- **Action:** "Click any cell in the Amount column. Sort from largest to smallest. Check that each row stayed whole."
- **Band:** diagram (a short list before and after sorting, with a row highlighted to show it moved as one)
- **Facts:** F6, F35. Already approved and built; kept as it stands.

#### Sorting by More Than One Column
- **What:** Sort by one column first, then by a second one inside each group of equal values. For example, by Region, then by Amount. In the Sort box, Add Level adds a column, and the entry higher in the list is sorted first.
- **Use when:** one column has many rows with the same value. **Skip when:** one column is enough.
- **Action:** "On the Sales sheet, click any cell in the data. On the Data tab, click Sort. Sort by Region, click Add Level, then sort by Amount, largest to smallest."
- **Band:** diagram (rows grouped by region, with amounts in order inside each group)
- **Facts:** F30, F200, F201, F202, F203, F204, F205

#### Filtering Rows
- **What:** A filter hides every row except the ones you choose. Nothing is deleted, and you can clear the filter to see everything again.
- **Use when:** the reader wants to see one region or one month. **Skip when:** never.
- **Action:** "Click the filter button on the heading of the Region column. Pick one region, then clear it."
- **Band:** diagram (a heading with a filter button, and the rows that match shown in colour)
- **Facts:** F10, F36. Already approved and built; kept as it stands.

#### Turning Your Data Into a Table
- **What:** An Excel table is a block of data that Excel manages as one unit. It adds filter buttons to the heading row and extends the table when you add a row.
- **Use when:** the reader keeps adding rows to a list. **Skip when:** never.
- **Action:** "Click any cell in your list and press Ctrl+T. Tick 'My table has headers' and click OK."
- **Band:** diagram (a plain list, then the same list with a table style and filter buttons)
- **Facts:** F4, F11, F37. Already approved and built; kept as it stands.

#### Removing Duplicate Rows
- **What:** A duplicate row matches another row exactly, in every column. Remove Duplicates deletes the repeats for good, so copy your data to another sheet first. Filtering for unique values only hides them.
- **Use when:** a list has the same row entered twice. **Skip when:** never.
- **Action:** "Copy the Sales data to a new sheet. Click any cell in it, then on the Data tab click Remove Duplicates. Leave every box ticked and click OK."
- **Band:** diagram (two identical rows, with the second one removed)
- **Facts:** F206, F207, F208, F209, F210, F211. Gap: no source gives the message Excel shows after removing duplicates, so the page doesn't quote one.

#### Practice: Sorting and Filtering the Sales Sheet
- **What:** Sort the Sales sheet by Amount, largest first, then filter the Region column to North.
- **Use when:** the reader is ready to practise on the shared sample file. **Skip when:** never.
- **Action:** "On the Sales sheet, sort by Amount, largest first. Then filter the Region column to North and see how many rows are left."
- **Band:** diagram (the sheet with the largest amounts at the top, then the North rows only)
- **Facts:** F44, F65, F212, F213

## Part 9 · Charts

#### Choosing the Right Chart
- **What:** Match the chart to the question. A column chart compares categories, a line chart shows a trend over time, and a pie chart shows how parts add up to one whole. If you're not sure, Recommended Charts on the Insert tab makes suggestions for your data.
- **Use when:** the reader has numbers and does not know what to draw. **Skip when:** never.
- **Action:** "Select the Region and Target cells on the Targets sheet. Click Insert, then Recommended Charts, and click through the suggestions."
- **Band:** diagram (three small charts, each with the question it answers)
- **Facts:** F38, F44, F214, F215, F216, F217, F233

#### Building Your First Column Chart
- **What:** Select the headings and numbers, then choose a column chart from the Insert tab. Excel draws one column for each group.
- **Use when:** the reader wants to compare totals across groups. **Skip when:** never.
- **Action:** "Select the Region and Amount headings with their rows. Insert a clustered column chart."
- **Band:** diagram (a small table, with the chart it becomes)
- **Facts:** F12, F38. Already approved and built; kept as it stands.

#### Adding Titles to a Chart
- **What:** A chart title and axis titles make a chart easier to understand. Click the chart, then the + sign at its top right, and tick Chart Title. Click the title box and type. Untick Chart Title to remove it. A pie chart has no axes, so it has no axis titles.
- **Use when:** a chart has no title, or its axes aren't labelled. **Skip when:** never.
- **Action:** "Click the chart, click the + sign at its top right, and tick Chart Title. Click the title box and type a title."
- **Band:** diagram (a chart with its title and its two axis titles pointed out)
- **Facts:** F218, F219, F220, F221, F222, F223

#### Line Charts: Trends Over Time
- **What:** A line chart shows how values change over time, such as months or quarters. The categories run evenly along the bottom and the values up the side. Line charts work best with more than one series of data.
- **Use when:** the reader wants to show a trend at equal intervals. **Skip when:** there's only one series (the source suggests a scatter chart instead).
- **Action:** "Type Month, North and South in A1 to C1, then four months and two numbers each below. Select A1 to C5. Click Insert, then Recommended Charts, then All Charts, and pick Line."
- **Band:** diagram (two lines rising and falling across four months)
- **Facts:** F38, F44, F215, F224, F225, F234

#### Pie Charts: Parts of a Whole
- **What:** A pie chart shows how each value contributes to a total, as a share of the whole pie. Use it when you have one data series, no negative values, almost no zeros and no more than seven categories. Data labels show the numbers on the slices.
- **Use when:** the reader wants to show shares of a total. **Skip when:** there are many categories or any negative values.
- **Action:** "Select the Region and Target cells on the Targets sheet. Click Insert, then Recommended Charts, then All Charts, and pick Pie. Click the + sign at the top right of the chart and tick Data Labels."
- **Band:** diagram (a pie with four slices, each labelled with its region)
- **Facts:** F38, F44, F226, F227, F228, F229, F230, F231, F232, F233, F234

#### Practice: Charting the Targets
- **What:** Chart the four regional targets on the Targets sheet: a column chart with a title and data labels.
- **Use when:** the reader is ready to practise on the shared sample file. **Skip when:** never.
- **Action:** "On the Targets sheet, select A1 to B5. Click Insert, then Recommended Charts, and choose a column chart. Add a chart title and data labels."
- **Band:** diagram (the Targets table beside the finished column chart)
- **Facts:** F38, F44, F233

## Part 10 · Summaries

#### Summary Tables: Totals by Group
- **What:** A summary table is a report that adds up your rows by group, for example sales by region. Excel
  calls it a PivotTable. You drag headings into place and Excel builds the totals.
- **Use when:** the reader wants a total for each group without writing SUMIF for each one. **Skip when:** never.
- **Action:** "Insert a summary table from the Sales sheet. Drag Region to Rows and Amount to Values."
- **Band:** diagram (every row going into one summary table, which gives a total per region)
- **Facts:** F3, F39, F40. Already approved and built; kept as it stands.

#### Sum, Count or Average in a Summary Table
- **What:** Numbers in the Values area are added up by default, and text is counted. You can change the calculation to Average, Count, Max or Min, so the same table answers a different question.
- **Use when:** the reader wants an average or a count for each group instead of a total. **Skip when:** the total is what they need.
- **Action:** "In your summary table, right-click a number in the Amount column and choose Value Field Settings. Pick Average, then click OK."
- **Band:** diagram (the same four regions shown as a Sum column and an Average column)
- **Facts:** F235, F236, F237, F238, F239, F240, F241

#### Rows and Columns: A Two-Way Summary
- **What:** The field list has four areas: Filters, Columns, Rows and Values. Fields in Rows run down the left side and fields in Columns run across the top. Put Region in Rows and Product in Columns and the table totals every product in every region.
- **Use when:** the reader wants to compare two groups at once. **Skip when:** one group is enough.
- **Action:** "Drag Product from the field list into the Columns area, with Region still in Rows and Amount in Values."
- **Band:** diagram (a grid with regions down the side, products across the top and totals in the body)
- **Facts:** F242, F243, F244, F245, F246, F247

#### Refreshing a Summary Table
- **What:** A summary table is built from your list. When you change the numbers in the list, select Refresh to update the table. Right-click anywhere in the table and choose Refresh.
- **Use when:** the reader has changed or added rows after building the summary. **Skip when:** nothing in the list has changed.
- **Action:** "Change one Amount on the Sales sheet. Go back to the summary table, right-click it and choose Refresh."
- **Band:** diagram (a changed cell in the list, an arrow marked Refresh, the updated total in the table)
- **Facts:** F248, F249 (gap: no source says the table does not update on its own, so the page must not say so)

#### Practice: A Summary of the Sales Sheet
- **What:** Build a summary table of Amount by Region from the Sales sheet, then draw a chart of it.
- **Use when:** the reader is ready to practise on the shared sample file. **Skip when:** never.
- **Action:** "On the Sales sheet, click a cell in the list and choose Insert, then PivotTable. Put Region in Rows and Amount in Values. Then click a cell in the table and choose Insert, then PivotChart."
- **Band:** diagram (the summary table of four regional totals beside the chart it becomes)
- **Facts:** F3, F39, F40, F241, F250, F251, F252

## Part 11 · Printing and sharing

#### Saving, and Which File Type to Use
- **What:** Save a workbook as .xlsx, the normal Excel file type. Use .xlsm only when the file must keep
  macros, which are saved steps that run automatically.
- **Use when:** the reader saves for the first time or sends a file to someone else. **Skip when:** never.
- **Action:** "Click File, then Save As. Save the workbook as .xlsx and give it a name you will recognise."
- **Band:** diagram (the file-type list, with .xlsx ticked and .xlsm marked for macros only)
- **Facts:** F13, F14, F41. Already approved and built; kept as it stands.

#### Previewing and Printing a Sheet
- **What:** Click File, then Print, and Excel shows a preview of the page with your printing options beside it. Check the preview, choose a printer, and select Print. You can print the active sheets, the entire workbook, or just a selection.
- **Use when:** the reader wants a paper copy. **Skip when:** the reader is only sending the file on.
- **Action:** "Click File, then Print. Look at the preview, then select Print."
- **Band:** diagram (the Print screen: preview on one side, the printer and settings on the other)
- **Facts:** F253, F254, F255, F256, F257, F258, F259, F260

#### Fitting the Sheet on the Page
- **What:** A sheet with many columns can run onto a second page. Switch the orientation to landscape, or set the width to 1 page in Scale to Fit so every column is on one page. Excel shrinks the data to do it, so the printout may be harder to read. The Scale box shows how much.
- **Use when:** a printout cuts the sheet off at the side. **Skip when:** it already fits.
- **Action:** "Click Page Layout, then Orientation, then Landscape. Then in Scale to Fit, set Width to 1 page and Height to Automatic."
- **Band:** diagram (a wide sheet cut across two pages, then fitted onto one landscape page)
- **Facts:** F261, F262, F263, F264, F265, F266, F267

#### Repeating Headings on Every Printed Page
- **What:** When a sheet prints on more than one page, the headings only appear on the first. Print Titles repeats chosen rows at the top of every page. Type $1:$1 in the Rows to repeat at top box to repeat row 1.
- **Use when:** a long list prints on several pages. **Skip when:** the sheet fits on one page.
- **Action:** "On the Sales sheet, click Page Layout, then Print Titles. In the Rows to repeat at top box, type $1:$1."
- **Band:** diagram (two printed pages, each with the heading row at the top)
- **Facts:** F267, F268, F269, F270, F271, F272 (gap: no source says the headings print only on the first page, so the page must not say so)

#### Saving as a PDF to Share
- **What:** A PDF looks the same on most computers, so it suits a sheet you want someone to read or print without changing. Click File, then Save a Copy, and choose PDF in the Save as type list.
- **Use when:** the reader is sending a finished sheet to someone else. **Skip when:** the other person needs to work in the numbers.
- **Action:** "Click File, then Save a Copy. In the Save as type list, choose PDF, and select Save."
- **Band:** diagram (a workbook becoming a PDF, with the Save as type list)
- **Facts:** F273, F274, F275, F276

## Part 12 · Checking your work

#### Reading an Error Message
- **What:** When a formula can't give an answer, Excel shows an error value such as #DIV/0!, #NAME?, #REF! or #VALUE! instead. Each one points at a different cause: dividing by zero or a blank cell, a mistyped name, a cell that no longer exists, or the wrong kind of cell. A small triangle in the corner of a cell marks a possible error.
- **Use when:** a cell shows a # message and the reader doesn't know why. **Skip when:** never.
- **Action:** "Type 55 in A3 and leave B3 empty. In C3 type =A3/B3 and press Enter. Read the message."
- **Band:** diagram (four error values, each with the cause beside it)
- **Facts:** F171, F277, F278, F279, F280, F281, F282, F283, F284, F285, F286, F287 (gap: no source for what the triangle's button does, so the page must not describe it)

#### Showing the Formulas Behind the Numbers
- **What:** A sheet normally shows answers, not the formulas behind them. Show Formulas swaps every answer for its formula so you can read them all at once, and swaps back when you press it again.
- **Use when:** the reader wants to check how a sheet was built. **Skip when:** never.
- **Action:** "Click Formulas, then Show Formulas. Read the formulas, then click Show Formulas again."
- **Band:** diagram (the same few cells shown as results, then as formulas)
- **Facts:** F288, F289 (gap: the source does not say the toggle covers the whole sheet or that formulas do not print, so the page must not say so)

#### Practice: The Final Check
- **What:** Check a total two ways. Add the four regional totals from the summary table, then use SUM on the Amount column of the Sales sheet. The two answers should match.
- **Use when:** the reader has built a summary and wants to trust it. **Skip when:** never.
- **Action:** "Add up the four totals in your summary table. Then on the Sales sheet type =SUM(G2:G241) in a spare cell. Do the two numbers match?"
- **Band:** diagram (the four totals added up beside the SUM of the Amount column, with a tick between them)
- **Facts:** F2, F241, F290

---

## Retired backlog

The old backlog from before the 12-part plan is retired. Nothing in it is waiting to be written.

- What a Formula Actually Is, Your First Formula: Adding Cells, SUM and AutoSum, AVERAGE, MIN, MAX and COUNT, and Practice: First Formulas were all replaced by the ten lessons in Part 4.
- Practice: Final Check was replaced by Practice: The Final Check in Part 12.
- Mistakes Almost Every Beginner Makes is not being written. It was waiting on the author's own experience, and nothing is written from memory. Its three mistakes are covered by approved pages: numbers stored as text (Numbers Stored as Text, Part 2), a formula that doesn't copy the way you expect (Part 5), and a total that is wrong (Practice: The Final Check, Part 12). To bring it back, the author supplies the mistakes in their own words.
