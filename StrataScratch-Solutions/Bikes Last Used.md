---
platform: StrataScratch
created: 2026-01-03
link: https://platform.stratascratch.com/coding/10176-bikes-last-used?code_type=1
difficulty: Easy
tags:
  - SQL
---

# Bikes Last Used

## 📝 Problem Description
Find the last time each bike was in use. Output both the bike number and the date-timestamp of the bike's last use (i.e., the date-time the bike was returned). Order the results by bikes that were most recently used.

---

## 💡 SQL Solution
### Approach
- Focus on the end_time to find the last used bikes
- partition by bike_number and sort by end_time, then pick the one with latest timestamp.

### Complexity Analysis
- **Time Complexity**: $O(n \log n)$
- **Space Complexity**: $O(n)$

```sql
SELECT bike_number, end_time AS last_used
FROM (SELECT *, 
ROW_NUMBER() OVER (PARTITION BY bike_number ORDER BY end_time DESC) AS rn 
FROM dc_bikeshare_q1_2012) b
WHERE rn = 1
ORDER BY last_used DESC;
```

--- 
## 📓Reflections
- biggest timestamp means the latest
- get used to using ROW_NUMBER() OVER (PARTITION BY) grammar