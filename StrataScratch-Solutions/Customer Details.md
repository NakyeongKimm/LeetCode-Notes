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
- Join two tables based on id. Use 'Left Join' to preserve thge details of each customer
### Complexity Analysis
- **Time Complexity**: $O(n \log n)$
- **Space Complexity**: $O(n)$

```sql
SELECT c.first_name, c.last_name, c.city, o.order_details
FROM customers c
LEFT JOIN orders o
ON c.id = o.cust_id
ORDER BY c.first_name ASC, o.order_details ASC
```

--- 
## 📓Reflections
- 