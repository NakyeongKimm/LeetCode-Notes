---
created: 2026-01-02
completed: true
leetcode-index: 45
link: https://leetcode.com/problems/jump-game-ii
difficulty: Medium
tags:
  - leetcode/array
  - leetcode/dynamic-programming
  - leetcode/greedy
  - programming/practice
  - leetcode/problem
---
# Jump Game II

## 📝 Problem Description
You are given a 0-indexed array of integers `nums` of length `n`. You are initially positioned at index 0.

Each element `nums[i]` represents the maximum length of a forward jump from index `i`. In other words, if you are at index `i`, you can jump to any index `(i + j)` where:

	
- `0 <= j <= nums[i]` and
	
- `i + j < n`

Return *the minimum number of jumps to reach index *`n - 1`. The test cases are generated such that you can reach index `n - 1`.

 

>[!Example]+ Example 1
>**Input**: `nums = [2,3,1,1,4]`
>**Output**: `2`
>**Explanation**:
>The minimum number of jumps to reach the last index is 2. Jump 1 step from index 0 to 1, then 3 steps to the last index. 

>[!Example]+ Example 2
>**Input**: `nums = [2,3,0,1,4]`
>**Output**: `2
`

>[!warning]+ Constraints
>- `1 <= nums.length <= 10^4`
>
>- `0 <= nums[i] <= 1000`
>
>- It's guaranteed that you can reach `nums[n - 1]`.

---

## 💡 Solution 1: (Name)
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

```python
class Solution(object):
    def jump(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        n = len(nums)
        cnt = 0
        current_end = 0
        farthest = 0

        if n == 1: return cnt

        for i in range(0, n-1):
            farthest = max(farthest, i+nums[i])

            if i == current_end:
                cnt += 1
                current_end = farthest

                if current_end >= n-1:
                    return cnt
        
        return cnt 
```


---

## 💡 Solution 2: (Name)
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

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