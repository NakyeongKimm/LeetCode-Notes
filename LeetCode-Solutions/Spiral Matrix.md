---
created: 2026-01-26
completed: true
leetcode-index: "54"
link: https://leetcode.com/problems/spiral-matrix
difficulty: Medium
tags:
  - programming/practice
  - leetcode/problem
---

# Spiral Matrix

## 📝 Problem Description
Given an `m x n` `matrix`, return *all elements of the* `matrix` *in spiral order*.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2020/11/13/spiral1.jpg)
>
>**Input**: `matrix = [[1,2,3],[4,5,6],[7,8,9]]`
>**Output**: `[1,2,3,6,9,8,7,4,5]
`

>[!Example]+ Example 2
>![](https://assets.leetcode.com/uploads/2020/11/13/spiral.jpg)
>
>**Input**: `matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]`
>**Output**: `[1,2,3,4,8,12,11,10,9,5,6,7]
`

>[!warning]+ Constraints
>- `m == matrix.length`
>
>- `n == matrix[i].length`
>
>- `1 <= m, n <= 10`
>
>- `-100 <= matrix[i][j] <= 100`

---

## 💡 Solution 1: Based on boundaries
### Approach
- Spirally add values, with changes on top, bottom, left, and right indices
- First, write simulation code and make it into pseudo code.

### Complexity Analysis
- **Time Complexity**: O($M*N$))
- **Space Complexity**: O(1)
	- 4 variables: top, bottom, left, right

```python
class Solution(object):
	def spiralOrder(self, matrix):
		"""
		:type matrix: List[List[int]]
		:rtype: List[int]
		"""
		
		if not matrix:
			return []
		
		res = []
		
		top = 0
		bottom = len(matrix)-1
		left = 0
		right = len(matrix[0])-1

		while top <= bottom and left <= right:
			for col in range(left, right+1):
				res.append(matrix[top][col])
			
			for row in range(top+1, bottom+1):
				res.append(matrix[row][right])

			if top != bottom:
				for col in range(right-1, left-1, -1):
					res.append(matrix[bottom][col])
			
			if left != right:		
				for row in range(bottom-1, top, -1):	
					res.append(matrix[row][left])

			top += 1
			bottom -= 1
			right -= 1
			left += 1
		
		return res
```


---

## 💡 Solution 2: Change direction with conditions
### Approach
- trace values, changing directions under three conditions:
	- when col index goes out of range
	- when row index goes out of range
	- when we already visited the value
- change direction using (direction + 1) % 4 so that we can only get direction from range 0-3

### Complexity Analysis
- **Time Complexity**: O($M*N$)
- **Space Complexity**: O($M*N$)
	- because of visited list

```python
class Solution(object):
	def spiralOrder(self, matrix):
		if not matrix:
			return []
	
		m, n = len(matrix), len(matrix[0])
		visited = [[False] * n for _ in range(m)]
		# right, down, left, up
		directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]

		res = []	
		r = c = direction = 0
		
		for _ in range(m * n):
			res.append(matrix[r][c])
			visited[r][c] = True
			
			# next direction
			nr = r + directions[direction][0]
			nc = c + directions[direction][1]
			
			# if out of range or already visited
			# change direction
			if not (0 <= nr < m and 0 <= nc < n and not visited[nr][nc]):
				direction = (direction + 1) % 4
				nr = r + directions[direction][0]
				nc = c + directions[direction][1]
				r, c = nr, nc
		
		return res
```

---

## 📓 Hints & Reflections
>[!Hint]- Hint 1
>Well for some problems, the best way really is to come up with some algorithms for simulation. Basically, you need to simulate what the problem asks us to do.

>[!Hint]- Hint 2
>We go boundary by boundary and move inwards. That is the essential operation. First row, last column, last row, first column, and then we move inwards by 1 and repeat. That's all. That is all the simulation that we need.

>[!Hint]- Hint 3
>Think about when you want to switch the progress on one of the indexes. If you progress on i out of [i, j], you'll shift in the same column. Similarly, by changing values for j, you'd be shifting in the same row.
>Also, keep track of the end of a boundary so that you can move inwards and then keep repeating. It's always best to simulate edge cases like a single column or a single row to see if anything breaks or not.

### Reflections
- simulation matters in such matrix problems