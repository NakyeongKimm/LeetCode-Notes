---
created: 2026-02-03
completed: true
leetcode-index: "67"
link: https://leetcode.com/problems/add-binary
difficulty: Easy
tags:
  - leetcode/problem
---

# Add Binary

## 📝 Problem Description
Given two binary strings `a` and `b`, return *their sum as a binary string*.

 

>[!Example]+ Example 1
>**Input**: `a = "11", b = "1"`
>**Output**: `"100"
`

>[!Example]+ Example 2
>**Input**: `a = "1010", b = "1011"`
>**Output**: `"10101"
`

>[!warning]+ Constraints
>- `1 <= a.length, b.length <= 10^4`
>
>- `a` and `b` consist only of `'0'` or `'1'` characters.
>
>- Each string does not contain leading zeros except for the zero itself.

---

## 💡 Solution 1: Use built-in functions
### Approach
- Use int(n, 2) and bin to deal with binary numbers
- int(n, 2) will understand the number as binary and output decimal

### Complexity Analysis
- **Time Complexity**: O(Max(len(A), len(B)))
- **Space Complexity**: O(Max(len(A), len(B)))

```python
class Solution: 
	def addBinary(self, a: str, b: str) -> str: 
	
		num_a = int(a, 2) 
		num_b = int(b, 2) 
		result = num_a + num_b 
		
		return bin(result)[2:]
```


---

## 💡 Solution 2: Manually iterate from the end
### Approach
- Manually add from the end, dealing with total and carry

### Complexity Analysis
- **Time Complexity**: O(Max(n, m))
- **Space Complexity**: O(Max(n, m))

```python
class Solution:
	def addBinary(self, a: str, b: str) -> str:
	
		result = []
		carry = 0
		
		i, j = len(a) - 1, len(b) - 1
		
		while i >= 0 or j >= 0 or carry:
		
			total = carry
			
			if i >= 0:
				total += int(a[i])
				i -= 1
			
			if j >= 0:
				total += int(b[j])
				j -= 1
			
			result.append(str(total % 2)) # 0 or 1
			carry = total // 2 # carry for the next
		
		return ''.join(reversed(result))
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- built-in binary functions