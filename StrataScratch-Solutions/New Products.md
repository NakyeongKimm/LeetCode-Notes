---
platform: StrataScratch
created: "2026-01-09"
link: "https://platform.stratascratch.com/coding/10318-new-products?code_type=1"
difficulty: "See Website"
tags: [SQL]
---

# New Products

## 📝 Problem Description
(Paste the problem description here)

---

## 💡 SQL Solution 1: Use Case When
### Approach
- Create a CTE to generate a table with the year (2019 or 2020), company name, and the count of models for each company that year.
- Then, write a main query that gets net_products by subtracting the values created in CTE.
- Use SUM(CASE WHEN) for a single scan (conditional aggregation)
### Complexity Analysis
- **Time Complexity**: $O(n)$
- **Space Complexity**: $O(k)$ where k = number of companies * 2

```sql
WITH car_count AS (SELECT year, company_name, COUNT(DISTINCT product_name) AS num_product
FROM car_launches
GROUP BY year, company_name)
SELECT company_name, SUM(CASE WHEN year = 2020 THEN num_product ELSE 0 END) - SUM(CASE WHEN year=2019 THEN num_product ELSE 0 END) AS net_products 
FROM car_count
GROUP BY company_name
ORDER BY company_name;
```

---
## 💡 SQL Solution 2: Use FILTER WHERE
### Approach
- Do the same work with solution 1 but replace SUM(CASE WHEN) with FILTER. 
- FILTER is only available in a few DBMS, including PostgreSQL and slightly faster as it doesn't have 'THEN ~ ELSE ~' process.
### Complexity Analysis
- **Time Complexity**: $O( n)$
- **Space Complexity**: $O(k)$ where k = number of companies * 2

```sql
WITH car_count AS (SELECT year, company_name, COUNT(DISTINCT product_name) AS num_product
FROM car_launches
GROUP BY year, company_name)
SELECT company_name, SUM(num_product) FILTER (WHERE year=2020) - SUM(num_product) FILTER (WHERE year=2019) AS net_products 
FROM car_count
GROUP BY company_name
ORDER BY company_name;
```
---
## 💡 SQL Solution 3: Additional - using two CTEs
### Approach
- Make two CTEs, one for one year data, and subtract the count of each in the main query.
- It scans the table twice, creates two CTEs, so can be inefficient when the data size increases.
### Complexity Analysis
- **Time Complexity**: $O(n \log n)$
- **Space Complexity**: $O(n)$ -- Need two CTEs

```sql
WITH brands_2020 AS (
    SELECT company_name, 
           product_name AS brand_2020
    FROM car_launches
    WHERE YEAR = 2020
),
brands_2019 AS (
    SELECT company_name, 
           product_name AS brand_2019
    FROM car_launches
    WHERE YEAR = 2019
)

SELECT a.company_name,
       (COUNT(DISTINCT a.brand_2020) - COUNT(DISTINCT b.brand_2019)) AS net_products
FROM brands_2020 a
FULL OUTER JOIN brands_2019 b ON a.company_name = b.company_name
GROUP BY a.company_name
ORDER BY a.company_name;
```

--- 
## 📓Reflections
- 