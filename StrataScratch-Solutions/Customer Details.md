---
platform: StrataScratch
created: 2026-01-05
link: https://platform.stratascratch.com/coding/9891-customer-details?code_type=1
difficulty: Easy
tags:
  - SQL
---

# Customer Details

## 📝 Problem Description
Find the details of each customer regardless of whether the customer made an order. Output the customer's first name, last name, and the city along with the order details. Sort records based on the customer's first name and the order details in ascending order.

---

## 💡 SQL Solution
### Approach
- Join two tables based on id. Use 'Left Join' to preserve the details of each customer
### Complexity Analysis
- **Time Complexity**: $O(n \log n)$
	- sorting by using group by (nlogn)
	- join (n)
- **Space Complexity**: $O(n)$
	- n(customers) + m(orders)

```sql
SELECT c.first_name, c.last_name, c.city, o.order_details
FROM customers c
LEFT JOIN orders o
ON c.id = o.cust_id
ORDER BY c.first_name ASC, o.order_details ASC
```

--- 
## 📓Reflections
- Different kinds of Join
	- Inner Join: only include the rows that have records on both tables
	- Left Join: preserve the left table and get the rows from the right table that meet conditions
	- Right Join: preserve the right table and get the rows from the right table that meet conditions
	- Full Join: get all the possible rows
	- Cross Join: make all the possible rows by making new combinations (no ON)