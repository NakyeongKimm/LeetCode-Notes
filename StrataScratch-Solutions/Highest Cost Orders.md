---
platform: StrataScratch
created: "2026-01-08"
link: "https://platform.stratascratch.com/coding/9915-highest-cost-orders?code_type=1"
difficulty: "See Website"
tags: [SQL]
---

# Highest Cost Orders

## 📝 Problem Description
Find the customers with the highest daily total order cost between 2019-02-01 and 2019-05-01. If a customer had more than one order on a certain day, sum the order costs on a daily basis. Output each customer's first name, total cost of their items, and the date. If multiple customers tie for the highest daily total on the same date, return all of them.

For simplicity, you can assume that every first name in the dataset is unique.

---

## 💡 SQL Solution
### Approach
- 
### Complexity Analysis
- **Time Complexity**: $O(n \log n)$
	- sorting: group by and rank
- **Space Complexity**: $O(n)$

```sql
WITH daily_total AS (
    SELECT cust_id, order_date, SUM(total_order_cost) AS total_daily_cost
    FROM orders
    WHERE order_date BETWEEN '2019-02-01' AND '2019-05-01' 
    GROUP BY cust_id, order_date
),
ranked_daily_total AS (
    SELECT cust_id, order_date, total_daily_cost,
    RANK() OVER (PARTITION BY order_date
    ORDER BY total_daily_cost DESC) AS rnk
    FROM daily_total
)
SELECT c.first_name, rdt.order_date, rdt.total_daily_cost AS max_cost
FROM ranked_daily_total AS rdt
JOIN customers c ON rdt.cust_id = c.id
WHERE rdt.rnk = 1
ORDER BY rdt.order_date;
```

--- 
## 📓Reflections
- 