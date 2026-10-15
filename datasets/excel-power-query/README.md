# The messy sample files for Excel Power Query for Absolute Beginners

The same 240 Corner Shop sales as *Excel for Absolute Beginners*, written the way data really
arrives. `make.py` reads them from `datasets/excel-beginner/Corner Shop sales.xlsx`, so once a
file is cleaned it gives the same figures as that book: **240 rows, 6325 in all**, East 839,
North 2756, South 1256, West 1474.

## Files

| File or folder | What it is | For |
|---|---|---|
| `Corner Shop export.xlsx`, sheet **Export** | The messy export (see below) | Part 3 lessons and practice, the error lesson in Part 4 |
| … sheet **List** | A plain list from A1, real dates and numbers, 10 Regions with a trailing space, 10 products in lower case | Part 1: the first query and its practice |
| … sheet **Products** | Product, Category, Unit price. **Plant is missing** and **Candle is never sold**, on purpose | Part 6: merges and join kinds |
| … sheet **Staff list** | Team (`North - Ada Okafor`), Staff code (`NOR2019AO`: region, start year, initials), First name, Last name | Part 5: split, extract, merge |
| … sheet **Targets sideways** | Regions across the top, targets underneath | Part 5: transpose |
| `Corner Shop sales.csv` | The 240 sales as a CSV, dates as `dd/mm/yyyy` text | Part 2: CSV lesson and practice |
| `Monthly/` | 12 tidy workbooks, `Sales 2025-01.xlsx` to `Sales 2025-12.xlsx`, headings in row 1, sheet `Sales` | Part 2 folder lesson and practice, Part 6 append (January and February) |
| `Monthly messy/` | The same 12 months, each with a title row and a blank row above the headings, a `Total` row at the bottom, and 2 Regions with a leading space | Part 8: Monthly Messy Files |
| `Sales by month report.xlsx`, sheet **Wide** | One row per region, a column per month headed `Jan 2025` to `Dec 2025` | Part 5: unpivot and its practice |
| … sheet **Report** | Built for a person: two title rows, a region named once per block, a subtotal and a blank row after each region, a Grand total, months `Jan` to `Dec`, empty where nothing sold | Part 8: Someone Else's Report |
| `Year-end export.csv` | A fresh messy file: semicolons, three lines above the headings (padded with semicolons), Region in mixed capitals, a pound sign on every Amount, three sales twice, a `Total` line | Part 8: Messy File to PivotTable |
| `answers.json` | Every figure a practice page can print | All practice pages |

The book's first lessons (Ctrl+T, From Table/Range, importing from another workbook) use the
beginner workbook itself, `datasets/excel-beginner/Corner Shop sales.xlsx`.

## The dirt in the Export sheet

- A title, an "Exported" line and a blank row above the headings, which are in **row 4**.
- Headings to rename or drop: `Sale date`, `Qty`, `Till`, `Exported by`.
- Dates are **text, day first** (`03/01/2025`), so they need Change Type, Using Locale, for
  a UK date order if Excel's region reads month first.
- **Region is empty when it repeats the row above** (71 cells), so it needs Fill Down. Do it
  *after* Remove Blank Rows: filled-down blank rows are no longer blank and won't be removed.
- 12 Regions have a stray space, and 3 say `Nrth`.
- 18 Products have the wrong capitals (`MUG`, `notebook`).
- Amount is text, and 6 amounts carry a `£`, which turn into errors when the column becomes
  a number. Replace `£` with nothing first. Removing the errors instead loses 6 sales worth 178
  (234 rows, 6147).
- 4 sales are exported twice (Sale IDs S0075, S0200, S0229, S0237), 5 blank rows sit in the
  data, and the sheet ends with a blank row and `End of export, 244 rows`.

## Regenerating

```bash
python datasets/excel-power-query/make.py
```

It needs `openpyxl`, uses one seed (23) and writes the same files every time. If the beginner
workbook changes, `make.py` stops with an error rather than write files that don't match.

## Checked in Excel

On 2026-10-15 the files were run through Excel's own Power Query engine (Excel 16, build
20430, en-US) with M queries driven from a script, not through the editor's buttons:

- **Wide:** unpivoting and changing `Jan 2025` to the Date kind gives 48 rows, the first of
  each month from 2025-01-01 to 2025-12-01, no errors, 6325 in all.
- **Year-end export.csv:** read with a semicolon delimiter it has 8 columns; after removing
  3 top rows and promoting headings there are 244 rows, and the first Amount reads `£72`.
  The byte order mark wins over the encoding setting, so `£` reads correctly either way.
  The lines above the headings are padded with semicolons on purpose: unpadded, `Csv.Document`
  took its column count from the first line and read the whole file as one column.
- **Monthly messy/:** 12 files; removing 2 top rows, promoting headings, combining and
  dropping the `Total` rows gives 240 rows and 6325, with the region totals above once
  Region is trimmed.

- **Delimiter detection:** `Binary.InferContentType` on the CSV, Power Query's own file
  analysis, reports `text/csv`, encoding 65001 (UTF-8), and of the delimiters it tries only
  the semicolon splits the file (8 columns; comma and tab give 1).

Not tested: the From Text/CSV dialog itself, and anything else that depends on the editor's
buttons rather than the M they write.
