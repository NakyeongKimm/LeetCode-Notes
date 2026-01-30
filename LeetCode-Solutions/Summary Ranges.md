---
created: 2026-01-23
completed: true
leetcode-index: "228"
link: https://leetcode.com/problems/summary-ranges
difficulty: Easy
tags:
  - leetcode/problem
  - leetcode/intervals
---

# Summary Ranges

## 📝 Problem Description
You are given a sorted unique integer array `nums`.

A range `[a,b]` is the set of all integers from `a` to `b` (inclusive).

Return *the smallest sorted list of ranges that cover all the numbers in the array exactly*. That is, each element of `nums` is covered by exactly one of the ranges, and there is no integer `x` such that `x` is in one of the ranges but not in `nums`.

Each range `[a,b]` in the list should be output as:

	
- `"a->b"` if `a != b`
	
- `"a"` if `a == b`

 

>[!Example]+ Example 1
>**Input**: `nums = [0,1,2,4,5,7]`
>**Output**: `["0->2","4->5","7"]`
>**Explanation**:
>The ranges are: [0,2] --> "0->2" [4,5] --> "4->5" [7,7] --> "7" 

>[!Example]+ Example 2
>**Input**: `nums = [0,2,3,4,6,8,9]`
>**Output**: `["0","2->4","6","8->9"]`
>**Explanation**:
>The ranges are: [0,0] --> "0" [2,4] --> "2->4" [6,6] --> "6" [8,9] --> "8->9" 

>[!warning]+ Constraints
>- `0 <= nums.length <= 20`
>
>- `-2^31 <= nums[i] <= 2^31 - 1`
>
>- All the values of `nums` are unique.
>
>- `nums` is sorted in ascending order.

---

## 💡 Solution 1: Two pointers
### Approach
- Use two pointers, start and end, to track the continuity of the list.

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(1)

```python
class Solution(object):
	def summaryRanges(self, nums):
	"""
	:type nums: List[int]
	:rtype: List[str]
	"""
	
		if not nums:
			return list()
		
		idx = 0
		res = []
		start = nums[idx]
		
		while idx < len(nums)-1:		
			if nums[idx]+1 == nums[idx+1]:
				idx += 1
			
			else:
			
				if start == nums[idx]:
					res.append(str(start))
			
				else:
					res.append(str(start) + "->" + str(nums[idx]))
			
				idx += 1
				start = nums[idx]

		if start == nums[idx]:
			res.append(str(start))
		
		else:
			res.append(str(start) + "->" + str(nums[idx])
		
		return res
```


---

## 💡 Solution 2: Remove repetitiveness of Solution 1
### Approach
- Remove repeated parts with better indexing

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(1)

```python
class Solution(object):

	def summaryRanges(self, nums):
	
		if not nums:
			return []
		
		res = []
		start = 0
		
		for i in range(len(nums)):
			if i == len(nums) - 1 or nums[i] + 1 != nums[i + 1]:
		
				if start == i:
					res.append(str(nums[start]))
		
				else:
					res.append(str(nums[start]) + "->" + str(nums[i]))
		
				start = i + 1
		
		return res
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Don't Repeat Yourself (DRY)