---
created: 2026-03-18
completed: true
leetcode-index: "130"
link: https://leetcode.com/problems/surrounded-regions
difficulty: Medium
tags:
  - leetcode/problem
---

# Surrounded Regions

## 📝 Problem Description
You are given an `m x n` matrix `board` containing letters `'X'` and `'O'`, capture regions that are surrounded:

	
- Connect: A cell is connected to adjacent cells horizontally or vertically.
	
- Region: To form a region connect every `'O'` cell.
	
- Surround: A region is surrounded if none of the `'O'` cells in that region are on the edge of the board. Such regions are completely enclosed by `'X'` cells.

To capture a surrounded region, replace all `'O'`s with `'X'`s in-place within the original board. You do not need to return anything.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg)
>
>**Input**: `board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]`
>**Output**: `[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]`
>**Explanation**:
>![](https://assets.leetcode.com/uploads/2021/02/19/xogrid.jpg)   In the above diagram, the bottom region is not captured because it is on the edge of the board and cannot be surrounded. 

>[!Example]+ Example 2
>**Input**: `board = [["X"]]`
>**Output**: `[["X"]]`

>[!warning]+ Constraints
>- `m == board.length`
>
>- `n == board[i].length`
>
>- `1 <= m, n <= 200`
>
>- `board[i][j]` is `'X'` or `'O'`.

---

## 💡 Solution 1: DFS
### Approach
- To solve this problem, it is better to find the 'O's that will survive: those that are at the edge and those connected to the edge
- DFS will implement DFS search based on the given (r, c), which are at the edge

### Complexity Analysis
- **Time Complexity**: O(M*N)
- **Space Complexity**: O(M*N)

```python
class Solution:
	def solve(self, board: List[List[str]]) -> None:
		"""
		Do not return anything, modify board in-place instead.
		"""
		
		directions = [(0, 1), (1, 0), (-1, 0), (0, -1)]
		def dfs(row, col):
			# check the range of row and col
			if (row >= len(board)) or (col >= len(board[0])) or (row < 0) or (col < 0) or (board[row][col] != 'O'):
				return
			
			# when val = 'O'
			board[row][col] = 'T'
			for dr, dc in directions:		
				dfs(row+dr, col+dc)
		
		rows, cols = len(board), len(board[0])
		
		# first loop: mark survived 'O's to 'T'
		for r in range(rows):	
			for c in range(cols):
				if (r == 0 or r == rows-1 or c == 0 or c == cols-1):
					if board[r][c] == 'O':
						dfs(r, c)
				
		for r in range(rows):		
			for c in range(cols):
				if board[r][c] == 'O':
					board[r][c] = 'X'
				elif board[r][c] == 'T':
					board[r][c] = 'O'
```


---

## 💡 Solution 2: BFS
### Approach
- Same approach with DFS, just a small difference in using queue
- Considering Python's RecursionError limit is 1,000, using queue can be safer as DFS can have 40,000 stacks in the worst case of 200*200 board.

### Complexity Analysis
- **Time Complexity**: O(M*N)
- **Space Complexity**: O(M*N)

```python
from collections import deque

class Solution:
	def solve(self, board: List[List[str]]) -> None:
		"""
		Do not return anything, modify board in-place instead.
		"""
		
		directions = [(0, 1), (1, 0), (-1, 0), (0, -1)]
		
		def bfs(row, col):
			queue = deque([(row, col)])
			board[row][col] = 'T'
			
			while queue:	
				r, c = queue.popleft()			
				for dr, dc in directions:
					nr, nc = r+dr, c+dc
					if 0 <= nr < rows and 0 <= nc < cols and board[nr][nc] == 'O':
						board[nr][nc] = 'T'
						queue.append((nr, nc))
		
		  
		
		rows, cols = len(board), len(board[0])
		
		for r in range(rows):
			for c in range(cols):
				if (r == 0 or r == rows-1 or c == 0 or c == cols-1):
					if board[r][c] == 'O':
						bfs(r, c)
		
		for r in range(rows):
			for c in range(cols):
				if board[r][c] == 'O':
					board[r][c] = 'X'
				elif board[r][c] == 'T':
					board[r][c] = 'O'
```



---

## 📓 Hints & Reflections
No hints available.

### Reflections
-