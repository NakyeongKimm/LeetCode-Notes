---
created: 2026-01-29
completed: true
leetcode-index: "11"
link: https://leetcode.com/problems/container-with-most-water
difficulty: Medium
tags:
  - programming/practice
  - leetcode/problem
---

# Container With Most Water

## 📝 Problem Description
You are given an integer array `height` of length `n`. There are `n` vertical lines drawn such that the two endpoints of the `i^th` line are `(i, 0)` and `(i, height[i])`.

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return *the maximum amount of water a container can store*.

Notice that you may not slant the container.

 

>[!Example]+ Example 1
>![](https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg)
>
>**Input**: `height = [1,8,6,2,5,4,8,3,7]`
>**Output**: `49`
>**Explanation**:
>The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49. 

>[!Example]+ Example 2
>**Input**: `height = [1,1]`
>**Output**: `1
`

>[!warning]+ Constraints
>- `n == height.length`
>
>- `2 <= n <= 10^5`
>
>- `0 <= height[i] <= 10^4`

---

## 💡 Solution 1: Two Pointers
### Approach
- Move the pointer that can potentially increase the size of the area.

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(1)

```python
class Solution:
	def maxArea(self, height: List[int]) -> int:
		start = 0
		end = len(height) - 1
		res = 0
		
		while start < end:
			w = end - start
			h = min(height[start], height[end])
			res = max(res, w * h)

			if height[start] <= height[end]:
				start += 1
			else:		
				end -= 1
		
		return res
```


---

## 📓 Hints & Reflections
>[!Hint]- Hint 1
>If you simulate the problem, it will be O(n^2) which is not efficient.

>[!Hint]- Hint 2
>Try to use two-pointers. Set one pointer to the left and one to the right of the array. Always move the pointer that points to the lower line.

>[!Hint]- Hint 3
>How can you calculate the amount of water at each step?

### Reflections
-