---
created: 2026-02-17
completed: true
leetcode-index: "219"
link: https://leetcode.com/problems/contains-duplicate-ii
difficulty: Easy
tags:
  - leetcode/problem
---

# Contains Duplicate II

## 📝 Problem Description
Given an integer array `nums` and an integer `k`, return `true` *if there are two distinct indices *`i`* and *`j`* in the array such that *`nums[i] == nums[j]`* and *`abs(i - j) <= k`.

 

>[!Example]+ Example 1
>**Input**: `nums = [1,2,3,1], k = 3`
>**Output**: `true
`

>[!Example]+ Example 2
>**Input**: `nums = [1,0,1,1], k = 1`
>**Output**: `true
`

>[!Example]+ Example 3
>**Input**: `nums = [1,2,3,1,2,3], k = 2`
>**Output**: `false
`

>[!warning]+ Constraints
>- `1 <= nums.length <= 10^5`
>
>- `-10^9 <= nums[i] <= 10^9`
>
>- `0 <= k <= 10^5`

---

## 💡 Solution 1: dictionary with num as a key and index as a value
### Approach
- 2 for loops trigger time limit error, so use dictionary to optimize time complexity

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution:
		
	def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
		
		seen = {}
		
		for i in range(len(nums)):
			if nums[i] in seen:
				if i - seen[nums[i]] <= k:
					return True
		
		seen[nums[i]] = i
		
		return False
```



---

## 📓 Hints & Reflections
No hints available.

### Reflections
-