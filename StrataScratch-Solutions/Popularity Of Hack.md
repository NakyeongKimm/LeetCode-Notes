---
platform: StrataScratch
created: 2026-01-06
link: https://platform.stratascratch.com/coding/10061-popularity-of-hack?code_type=1
difficulty: Easy
tags:
  - SQL
---

# Popularity Of Hack

## 📝 Problem Description
Meta/Facebook has developed a new programing language called Hack.To measure the popularity of Hack they ran a survey with their employees. The survey included data on previous programing familiarity as well as the number of years of experience, age, gender and most importantly satisfaction with Hack. Due to an error location data was not collected, but your supervisor demands a report showing average popularity of Hack by office location. Luckily the user IDs of employees completing the surveys were stored. Based on the above, find the average popularity of the Hack per office location. Output the location along with the average popularity.

---

## 💡 SQL Solution
### Approach
- Join and get average per location using group by
### Complexity Analysis
- **Time Complexity**: $O(n \log n)$
	- group by - sorting
- **Space Complexity**: $O(n)$
	- extra space to save location may be needed

```sql
SELECT e.location, AVG(s.popularity) AS avg_popularity 
FROM facebook_employees e
RIGHT JOIN facebook_hack_survey s
ON e.id = s.employee_id
GROUP BY e.location;
```

--- 
## 📓Reflections
- While my answer is correct, using LEFT JOIN is preferred in the industry. This edit can be done by simply swapping the order of the tables.