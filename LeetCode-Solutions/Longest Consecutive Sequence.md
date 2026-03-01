---
created: 2026-03-01
completed: true
leetcode-index: "128"
link: https://leetcode.com/problems/longest-consecutive-sequence
difficulty: Medium
tags:
  - leetcode/problem
---

# Longest Consecutive Sequence

## 📝 Problem Description
Given an unsorted array of integers `nums`, return *the length of the longest consecutive elements sequence.*

You must write an algorithm that runs in `O(n)` time.

 

>[!Example]+ Example 1
>**Input**: `nums = [100,4,200,1,3,2]`
>**Output**: `4`
>**Explanation**:
>The longest consecutive elements sequence is `[1, 2, 3, 4]`. Therefore its length is 4. 

>[!Example]+ Example 2
>**Input**: `nums = [0,3,7,2,5,8,4,6,0,1]`
>**Output**: `9
`

>[!Example]+ Example 3
>**Input**: `nums = [1,0,1,2]`
>**Output**: `3
`

>[!warning]+ Constraints
>- `0 <= nums.length <= 10^5`
>
>- `-10^9 <= nums[i] <= 10^9`

---

## 💡 Solution 1: Use a set for fast search
### Approach
- using one variable cnt, find num + cnt in set for fast search

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution:
	def longestConsecutive(self, nums: List[int]) -> int:
	
		if not nums:
			return 0
		
		nums_set = set(nums)
		max_cnt = 1
		
		for num in nums_set:
			cnt = 1
		
			if (num - 1) not in nums_set:
				while (num + cnt) in nums_set:	
					cnt += 1
			max_cnt = max(max_cnt, cnt)
		
		return max_cnt
```


---

## 💡 Solution 2: (Name)
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O()
- **Space Complexity**: O()

```python
# Solution 2 Code Here
```


---

## 💡 Solution 3: (Name)
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O()
- **Space Complexity**: O()

```python
# Solution 3 Code Here
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-