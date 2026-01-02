---
created: 2026-01-02
completed: true
leetcode-index: 55
link: https://leetcode.com/problems/jump-game
difficulty: Medium
tags:
  - leetcode/array
  - leetcode/dynamic-programming
  - leetcode/greedy
  - programming/practice
  - leetcode/problem
---
# Jump Game

## 📝 Problem Description
You are given an integer array `nums`. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return `true`* if you can reach the last index, or *`false`* otherwise*.

 

>[!Example]+ Example 1
>**Input**: `nums = [2,3,1,1,4]`
>**Output**: `true`
>**Explanation**:
>Jump 1 step from index 0 to 1, then 3 steps to the last index. 

>[!Example]+ Example 2
>**Input**: `nums = [3,2,1,0,4]`
>**Output**: `false`
>**Explanation**:
>You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index. 

>[!warning]+ Constraints
>- `1 <= nums.length <= 10^4`
>
>- `0 <= nums[i] <= 10^5`

---

## 💡 Solution 1: Last Index
### Approach
- Compare the last index and the maximum possible reach, which is simply the sum of the index and the value.

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(1)

```python
class Solution(object):

def canJump(self, nums):

	"""
	
	:type nums: List[int]
	
	:rtype: bool
	
	"""
	
	max_reach = 0
	
	n = len(nums)
	
	  
	
	for i in range(0, n):
	
		if i > max_reach: return False
	
		max_reach = max(max_reach, i + nums[i])
	
		if max_reach >= n-1: return True
	
	return False
```


---

## 💡 Solution 2: Clear Solution 1
### Approach
- Clear solution 1
- Set a list of length 1 as an exception, with an error case happening with [0]

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(1)

```python
```python
class Solution(object):
    def canJump(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        n = len(nums)
        if n == 1:
            return True  # already at the last index

        max_reach = 0          # farthest index reachable so far
        last = n - 1           # target index

        for i in range(0, n):
            if i > max_reach:
                return False   # cannot even step on this index
            max_reach = max(max_reach, i + nums[i])  # extend reachable range
            if max_reach >= last:
                return True    # last index is reachable

        return False           # safety; loop will normally return earlier

```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Think the problem in the simplest way
- Think of exceptions!! 