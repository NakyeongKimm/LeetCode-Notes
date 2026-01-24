---
created: 2026-01-24
completed: true
leetcode-index: "452"
link: https://leetcode.com/problems/minimum-number-of-arrows-to-burst-balloons
difficulty: Medium
tags:
  - programming/practice
  - leetcode/problem
---

# Minimum Number of Arrows to Burst Balloons

## 📝 Problem Description
There are some spherical balloons taped onto a flat wall that represents the XY-plane. The balloons are represented as a 2D integer array `points` where `points[i] = [x<sub>start</sub>, x<sub>end</sub>]` denotes a balloon whose horizontal diameter stretches between `x<sub>start</sub>` and `x<sub>end</sub>`. You do not know the exact y-coordinates of the balloons.

Arrows can be shot up directly vertically (in the positive y-direction) from different points along the x-axis. A balloon with `x<sub>start</sub>` and `x<sub>end</sub>` is burst by an arrow shot at `x` if `x<sub>start</sub> <= x <= x<sub>end</sub>`. There is no limit to the number of arrows that can be shot. A shot arrow keeps traveling up infinitely, bursting any balloons in its path.

Given the array `points`, return *the minimum number of arrows that must be shot to burst all balloons*.

 

>[!Example]+ Example 1
>**Input**: `points = [[10,16],[2,8],[1,6],[7,12]]`
>**Output**: `2`
>**Explanation**:
>The balloons can be burst by 2 arrows: - Shoot an arrow at x = 6, bursting the balloons [2,8] and [1,6]. - Shoot an arrow at x = 11, bursting the balloons [10,16] and [7,12]. 

>[!Example]+ Example 2
>**Input**: `points = [[1,2],[3,4],[5,6],[7,8]]`
>**Output**: `4`
>**Explanation**:
>One arrow needs to be shot for each balloon for a total of 4 arrows. 

>[!Example]+ Example 3
>**Input**: `points = [[1,2],[2,3],[3,4],[4,5]]`
>**Output**: `2`
>**Explanation**:
>The balloons can be burst by 2 arrows: - Shoot an arrow at x = 2, bursting the balloons [1,2] and [2,3]. - Shoot an arrow at x = 4, bursting the balloons [3,4] and [4,5]. 

>[!warning]+ Constraints
>- `1 <= points.length <= 10^5`
>
>- `points[i].length == 2`
>
>- `-2^31 <= x<sub>start</sub> < x<sub>end</sub> <= 2^31 - 1`

---

## 💡 Solution 1: Greedy Interval Merging
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O(NlogN)
	- sort  - nlogn
	- for loop - n
- **Space Complexity**: O(1)

```python
class Solution(object):
	def findMinArrowShots(self, points):
		"""
		:type points: List[List[int]]
		:rtype: int
		"""
		
		if not points:
			return 0
		
		points.sort()
		end = points[0][1]
		
		n = len(points)
		cnt = 1
		
		for i in range(1, n):
			if end < points[i][0]:
				cnt += 1
				end = points[i][1]
			
			else:
				end = min(end, points[i][1])
		
		return cnt
```


---

## 💡 Solution 2: Sort based on the end point
### Approach
- Because the main point that is used in this problem is end point, if we sort by end point, we don't need to update it every loop. 

### Complexity Analysis
- **Time Complexity**: O(NlogN)
- **Space Complexity**: O(1)

```python
class Solution(object):
	def findMinArrowShots(self, points):
	
		if not points:
			return 0
		
		points.sort(key=lambda x: x[1]) # based on end point
		
		cnt = 1
		end = points[0][1]
		
		for i in range(1, len(points)):
			if points[i][0] > end: # not overlapping
				cnt += 1
				end = points[i][1]
	
		return cnt
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- If we look inside the algorithm, python's timsort uses temporary space, which can cause O(N) space complexity. However, leetcode only analyzed it as O(N) since timsort can be viewed as edits to initial input list.