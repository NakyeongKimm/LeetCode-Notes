---
platform: StrataScratch
created: 2026-01-05
link: https://platform.stratascratch.com/coding/9917-average-salaries?code_type=1
difficulty: Easy
tags:
  - SQL
---

# Average Salaries

## 📝 Problem Description
Compare each employee's salary with the average salary of the corresponding department. Output the department, first name, and salary of employees along with the average salary of that department.

---

## 💡 SQL Solution
### Approach
- get average salary by department using partition
### Complexity Analysis
- **Time Complexity**: $O(n \log n)$
	- include sorting
- **Space Complexity**: $O(n)$

```sql
SELECT department, first_name, salary, 
    AVG(salary) OVER (PARTITION BY department) AS avg_salary
FROM employee;
```

--- 
## 📓Reflections
- Over: a window function that adds statistics, preserving every row