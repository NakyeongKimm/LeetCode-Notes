---
created: "2026-03-18"
completed: false
leetcode-index: "200"
link: "https://leetcode.com/problems/number-of-islands"
difficulty: "Medium"
tags:
  - leetcode/problem
---

# Number of Islands

## 📝 Problem Description
Given an `m x n` 2D binary grid `grid` which represents a map of `'1'`s (land) and `'0'`s (water), return *the number of islands*.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

>[!Example]+ Example 1
>**Input**: `grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]`
>**Output**: `1
`

>[!Example]+ Example 2
>**Input**: `grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]`
>**Output**: `3
`

>[!warning]+ Constraints
>- `m == grid.length`
>
>- `n == grid[i].length`
>
>- `1 <= m, n <= 300`
>
>- `grid[i][j]` is `'0'` or `'1'`.

---

## 💡 Solution 1: DFS
### Approach
- DFS til it stops by meeting '0'

### Complexity Analysis
- **Time Complexity**: O(M*N)
- **Space Complexity**: O(M*N)

```python
class Solution:

	def numIslands(self, grid: List[List[str]]) -> int:
		
		directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]
		cnt = 0
		
		def dfs(row, col):
			# mark current cell as visited
			grid[row][col] = '0'
			
			for dr, dc in directions:		
				new_row, new_col = row + dr, col + dc
			
			if (0 <= new_row < len(grid)) and (0 <= new_col < len(grid[0])) and (grid[new_row][new_col] == '1'):		
				dfs(new_row, new_col)

		for i in range(len(grid)):
			for j in range(len(grid[0])):
				if grid[i][j] == '1':
					cnt += 1
					dfs(i, j)

		return cnt
```



---

## 📓 Hints & Reflections
No hints available.

### Reflections
-