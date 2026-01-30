---
created: 2026-01-26
completed: true
leetcode-index: "48"
link: https://leetcode.com/problems/rotate-image
difficulty: Medium
tags:
  - leetcode/problem
  - leetcode/matrix
---

# Rotate Image

## 📝 Problem Description
You are given an `n x n` 2D `matrix` representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a>, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2020/08/28/mat1.jpg)
>
>**Input**: `matrix = [[1,2,3],[4,5,6],[7,8,9]]`
>**Output**: `[[7,4,1],[8,5,2],[9,6,3]]
`

>[!Example]+ Example 2
>![](https://assets.leetcode.com/uploads/2020/08/28/mat2.jpg)
>
>**Input**: `matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]`
>**Output**: `[[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
`

>[!warning]+ Constraints
>- `n == matrix.length == matrix[i].length`
>
>- `1 <= n <= 20`
>
>- `-1000 <= matrix[i][j] <= 1000`

---

## 💡 Solution 1: swap based on indices
### Approach
- Transpose the matrix and then swap inside the row

### Complexity Analysis
- **Time Complexity**: O($N^2$)
- **Space Complexity**: O(1)

```python
class Solution(object):
	def rotate(self, matrix):
		"""
		:type matrix: List[List[int]]
		:rtype: None Do not return anything, modify matrix in-place instead
		"""

		n = len(matrix)

		# transpose
		for i in range(n):
			for j in range(i+1, n):
				matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
		
		# swap in a row
		for i in range(n):
			for j in range(n//2):
				matrix[i][j], matrix[i][n-1-j] = matrix[i][n-1-j], matrix[i][j]
```


---

## 💡 Solution 2: Use reverse instead of swapping
### Approach
- Use built-in method

### Complexity Analysis
- **Time Complexity**: O($N^2$)
- **Space Complexity**: O(1)

```python
class Solution(object):
	def rotate(self, matrix):

		n = len(matrix)
		
		# Transpose
		for i in range(n):
			for j in range(i + 1, n):
				matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
		
		# Reverse each row
		for i in range(n):
			matrix[i].reverse()
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-