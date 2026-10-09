# Corner Shop sales: the sample workbook

The practice file for **Excel for Absolute Beginners**. It is one small made-up shop and one
year of sales (2025). The data is clean on purpose, so a beginner meets each feature without
having to clean anything first.

## Files

| File | What it is |
|---|---|
| `Corner Shop sales.xlsx` | The workbook the lessons use. |
| `answers.json` | Every figure the practice pages print, so each one can be checked. |
| `make.py` | Writes both files above. One seed, so the output never changes. |

To rebuild both files, run `python datasets/excel-beginner/make.py`. It needs `openpyxl`.

## The four sheets

| Sheet | Cells | What is in it |
|---|---|---|
| Sales | A1:G241 | One row per sale: Date, Region, Salesperson, Product, Quantity, Unit price, Amount. 240 sales, in rows 2 to 241. |
| Products | A1:C6 | Product, Category, Unit price. Five products. |
| Targets | A1:B5 | Region, Target. Four regions. |
| Staff | A1:C6 | Name, Region, Start date. Five people. |

## Key figures

These come from `answers.json`.

- Total Amount on the Sales sheet: 6325.
- Amount by region: East 839, North 2756, South 1256, West 1474.
- Rows by region: East 36, North 107, South 43, West 54.
- Amount by product: Bag 2124, Mug 1288, Notebook 534, Pen 294, Plant 2085.
- First sale 2025-01-03, last sale 2025-12-29.

If you change `make.py`, run it again and check every figure printed in the book against the new
`answers.json`.
