---
created: 2026-01-23
completed: true
leetcode-index: "56"
link: https://leetcode.com/problems/merge-intervals
difficulty: Medium
tags:
  - programming/practice
  - leetcode/problem
---

# Merge Intervals

## 📝 Problem Description
Given an array of `intervals` where `intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]`, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.

 

>[!Example]+ Example 1
>**Input**: `intervals = [[1,3],[2,6],[8,10],[15,18]]`
>**Output**: `[[1,6],[8,10],[15,18]]`
>**Explanation**:
>Since intervals [1,3] and [2,6] overlap, merge them into [1,6]. 

>[!Example]+ Example 2
>**Input**: `intervals = [[1,4],[4,5]]`
>**Output**: `[[1,5]]`
>**Explanation**:
>Intervals [1,4] and [4,5] are considered overlapping. 

>[!Example]+ Example 3
>**Input**: `intervals = [[4,7],[1,4]]`
>**Output**: `[[1,7]]`
>**Explanation**:
>Intervals [1,4] and [4,7] are considered overlapping. 

>[!warning]+ Constraints
>- `1 <= intervals.length <= 10^4`
>
>- `intervals[i].length == 2`
>
>- `0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10^4`

---

## 💡 Solution 1: Sort and Merge
### Approach
- sort first and update the ranges based on values. 

### Complexity Analysis
- **Time Complexity**: O(NlogN)
- **Space Complexity**: O(N)

```python
class Solution(object):
	def merge(self, intervals):
		"""
		:type intervals: List[List[int]]
		:rtype: List[List[int]]
		"""
		
		if not intervals:	
			return []
		
		intervals.sort()
		res = []
		start = intervals[0][0]
		end = intervals[0][1]
		
		for i in range(1, len(intervals)):
			if end >= intervals[i][0]:
				end = max(end, intervals[i][1])
		
		else:
			res.append([start, end])
			start = intervals[i][0]	
			end = intervals[i][1]
		
		res.append([start, end])
		
		return res
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- For this problem, there is no better solution to replace sorting.