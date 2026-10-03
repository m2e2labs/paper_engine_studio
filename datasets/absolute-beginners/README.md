# The sample files for the Absolute Beginners books

One made-up bike shop, two years of sales, written the way data really arrives. Every
practice page in *Power BI for Absolute Beginners*, *Power BI DAX for Absolute Beginners*
and *Power Query for Absolute Beginners* works on these files, and every figure those
pages print is computed from them.

| File | What it is | Used by |
|---|---|---|
| `Sales clean.xlsx` | The data after the cleaning: `Sales` (one row per order line, 1,179 rows), `Products`, `Customers` | the Power BI and DAX books |
| `Sales/Sales 2024-01.xlsx` … `Sales 2025-12.xlsx` | 24 monthly workbooks, each with a title row above the headers | the Power Query book |
| `Sales by month.xlsx` | A sheet laid out for a person to read (a column per month, a title row on top) and a `Products` sheet | the Power Query book |
| `Customers.csv`, `Targets.csv` | The customers as a CSV, and a target per region | the Power Query book |

The dirt is deliberate. A handful of lines have no quantity. Four February 2025 lines
have a space in front of `North`. The lamp is sold but missing from the Products sheet,
and the pump is on the sheet but never sold. The practice pages say where each one is.

## Regenerating

```bash
python datasets/absolute-beginners/make.py
```

`make.py` is deterministic (seed 7). It rewrites every file and `answers.json`, which
holds every figure the practice pages print. The practice pages cite those figures from
each book's `FACTS.md` as measurements with this script as their source, so a change to
the generator is a change to the books: rerun it, then check the facts still match.
