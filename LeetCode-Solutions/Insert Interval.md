---
created: 2026-01-24
completed: true
leetcode-index: "57"
link: https://leetcode.com/problems/insert-interval
difficulty: Medium
tags:
  - programming/practice
  - leetcode/problem
---

# Insert Interval

## 📝 Problem Description
You are given an array of non-overlapping intervals `intervals` where `intervals[i] = [start<sub>i</sub>, end<sub>i</sub>]` represent the start and the end of the `i^th` interval and `intervals` is sorted in ascending order by `start<sub>i</sub>`. You are also given an interval `newInterval = [start, end]` that represents the start and end of another interval.

Insert `newInterval` into `intervals` such that `intervals` is still sorted in ascending order by `start<sub>i</sub>` and `intervals` still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return `intervals`* after the insertion*.

Note that you don't need to modify `intervals` in-place. You can make a new array and return it.

 

>[!Example]+ Example 1
>**Input**: `intervals = [[1,3],[6,9]], newInterval = [2,5]`
>**Output**: `[[1,5],[6,9]]
`

>[!Example]+ Example 2
>**Input**: `intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]`
>**Output**: `[[1,2],[3,10],[12,16]]`
>**Explanation**:
>Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10]. 

>[!warning]+ Constraints
>- `0 <= intervals.length <= 10^4`
>
>- `intervals[i].length == 2`
>
>- `0 <= start<sub>i</sub> <= end<sub>i</sub> <= 10^5`
>
>- `intervals` is sorted by `start<sub>i</sub>` in ascending order.
>
>- `newInterval.length == 2`
>
>- `0 <= start <= end <= 10^5`

---

## 💡 Solution 1: Linear Scans
### Approach
- Define and linearly scan three different ranges

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution(object):
	def insert(self, intervals, newInterval):
		"""
		:type intervals: List[List[int]]
		:type newInterval: List[int]
		:rtype: List[List[int]]
		"""
		
		if not intervals:
			return [newInterval]
		
		res = []
		i = 0
		n = len(intervals)		  
		
		# before new interval
		while i < n and intervals[i][1] < newInterval[0]:
			res.append(intervals[i])
			i += 1
		
		# overlapping range
		while i < n and intervals[i][0] <= newInterval[1]:
			newInterval[0] = min(newInterval[0], intervals[i][0])
			newInterval[1] = max(newInterval[1], intervals[i][1])
			i += 1
			res.append(newInterval)
		
		  
		
		# after new interval
		while i < n:
			res.append(intervals[i])
			i += 1

		return res
```


---

## Minor Improvements
### Approach
- newInterval can be written as follows: 

```python
newInterval = [
	min(newInterval[0], intervals[i][0]),
	max(newInterval[1], intervals[i][1])
]
```


---

## 📓 Hints & Reflections
>[!Hint]- Hint 1
>Intervals Array is sorted. Can you use Binary Search to find the correct position to insert the new Interval.?

>[!Hint]- Hint 2
>Can you try merging the overlapping intervals while inserting the new interval?

>[!Hint]- Hint 3
>This can be done by comparing the end of the last interval with the start of the new interval and vice versa.

### Reflections
- Linear scans can be faster than other complex algorithms