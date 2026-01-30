---
created: 2026-01-25
completed: true
leetcode-index: "36"
link: https://leetcode.com/problems/valid-sudoku
difficulty: Medium
tags:
  - leetcode/problem
  - leetcode/matrix
---

# Valid Sudoku

## 📝 Problem Description
Determine if a `9 x 9` Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

	
1. Each row must contain the digits `1-9` without repetition.
	
2. Each column must contain the digits `1-9` without repetition.
	
3. Each of the nine `3 x 3` sub-boxes of the grid must contain the digits `1-9` without repetition.

Note:

	
- A Sudoku board (partially filled) could be valid but is not necessarily solvable.
	
- Only the filled cells need to be validated according to the mentioned rules.

 

>[!Example]+ Example 1
>![](https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png)
>
>**Input**: `board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]`
>**Output**: `true
`

>[!Example]+ Example 2
>**Input**: `board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]`
>**Output**: `false`
>**Explanation**:
>Same as Example 1, except with the 5 in the top left corner being modified to 8. Since there are two 8's in the top left 3x3 sub-box, it is invalid. 

>[!warning]+ Constraints
>- `board.length == 9`
>
>- `board[i].length == 9`
>
>- `board[i][j]` is a digit `1-9` or `'.'`.

---

## 💡 Solution 1: Check each row, col and box
### Approach
- Based on two indices, check each row, col and box
- Calculate the index of specific value using i and j - Should consider the bigger indices

### Complexity Analysis
- **Time Complexity**: O($N^2$)
- **Space Complexity**: O(N)

```python
class Solution(object):
	def isValidSudoku(self, board):
		"""
		:type board: List[List[str]]
		:rtype: bool
		"""
		
		row_seen = set()
		col_seen = set()
		box_seen = set()
		
		  
		
		for i in range(0, 9):
			for j in range(0, 9):
				
				# row
				row = board[i][j]
				if row != ".":
					if row in row_seen:
						return False
					else:
						row_seen.add(row)
					
				# col
				col = board[j][i]
				if col != ".":
					if col in col_seen:
						return False
					else:
						col_seen.add(col)
				
				# box
				box = board[(i//3)*3+j//3][(i%3)*3+j%3]
				if box != ".":
					if box in box_seen:
						return False
					else:
						box_seen.add(box)
					
			row_seen = set()
			col_seen = set()
			box_seen = set()
		
		return True
```


---

## 💡 Solution 2: Based on one value, check each sets
### Approach
- Based on each value, check if it is included in any of 27 sets (9 sets each)
- calculate the box index with i and j

### Complexity Analysis
- **Time Complexity**: O(1)
- **Space Complexity**: O(1)

```python
class Solution(object):
	def isValidSudoku(self, board):
		rows = [set() for _ in range(9)]
		cols = [set() for _ in range(9)]
		boxes = [set() for _ in range(9)]
		
		for i in range(9):
			for j in range(9):	
				num = board[i][j]
				
				if num != ".":
					box_idx = (i // 3) * 3 + (j // 3)
				
					# check repetition
					if num in rows[i] or num in cols[j] or num in boxes[box_idx]:				
						return False
				
				# add to the list
				rows[i].add(num)
				cols[j].add(num)
				boxes[box_idx].add(num)
				
		return True
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Because Sudoku has a fixed number of values, 81, if we check the value only once (like solution 2), both time and space complexity is O(1).
- When making a variable or index, consider the biggest possible cases to deal with edge cases.