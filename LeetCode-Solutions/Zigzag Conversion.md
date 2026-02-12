---
created: 2026-02-12
completed: true
leetcode-index: "6"
link: https://leetcode.com/problems/zigzag-conversion
difficulty: Medium
tags:
  - leetcode/problem
---

# Zigzag Conversion

## 📝 Problem Description
The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

`
P   A   H   N
A P L S I I G
Y   I   R
`

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

`
string convert(string s, int numRows);
`

 

>[!Example]+ Example 1
>**Input**: `s = "PAYPALISHIRING", numRows = 3`
>**Output**: `"PAHNAPLSIIGYIR"
`

>[!Example]+ Example 2
>**Input**: `s = "PAYPALISHIRING", numRows = 4`
>**Output**: `"PINALSIGYAHRPI"`
>**Explanation**:
>P     I    N A   L S  I G Y A   H R P     I 

>[!Example]+ Example 3
>**Input**: `s = "A", numRows = 1`
>**Output**: `"A"
`

>[!warning]+ Constraints
>- `1 <= s.length <= 1000`
>
>- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
>
>- `1 <= numRows <= 1000`

---

## 💡 Solution 1: Find a cycle and add characters based on patterns
### Approach
- Find patterns, which is cycle and mid-cycle, and add characters following that patterns

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution:
	def convert(self, s: str, numRows: int) -> str:
	
		if numRows == 1 or numRows >= len(s):
			return s
			
		rows = []
		cycle = 2 * numRows - 2
		
		for row in range(numRows):	
			idx = row
	
			while idx < len(s):
				rows.append(s[idx])
		
			if row != 0 and row != numRows - 1:
				mid_idx = idx + cycle - 2 * row
			
				if mid_idx < len(s):
					rows.append(s[mid_idx])
	
				idx += cycle
	
		return ''.join(rows)


	# Pattern visualization for reference:
	# numRows = 3:
	# 0 4 8
	# 1 3 5 7 9
	# 2 6 10
	
	# numRows = 4:
	# 0 6 12
	# 1 5 7 11 13
	# 2 4 8 10 14 16
	# 3 9 15
```


---

## 💡 Solution 2: Go through string with direction changes
### Approach
- Make 3 lists (if numRows=3) and go through the given string, add the number to the corresponding list following the directions.

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution:
	def convert(self, s: str, numRows: int) -> str:
		
		if numRows == 1 or numRows >= len(s):
			return s
		
		rows = [[] for _ in range(numRows)]
		current_row = 0
		going_down = False
		
		for char in s:
			rows[current_row].append(char)
		
			if current_row == 0 or current_row == numRows - 1:
				going_down = not going_down
		
			current_row += 1 if going_down else -1	  
		
		return ''.join([''.join(row) for row in rows])
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