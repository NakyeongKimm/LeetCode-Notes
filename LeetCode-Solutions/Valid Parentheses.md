---
created: 2026-02-18
completed: true
leetcode-index: "20"
link: https://leetcode.com/problems/valid-parentheses
difficulty: Easy
tags:
  - leetcode/problem
---

# Valid Parentheses

## 📝 Problem Description
Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:

	
1. Open brackets must be closed by the same type of brackets.
	
2. Open brackets must be closed in the correct order.
	
3. Every close bracket has a corresponding open bracket of the same type.

 

>[!Example]+ Example 1
>**Input**: `s = "()"`
>**Output**: `true`

>[!Example]+ Example 2
>**Input**: `s = "()[]{}"`
>**Output**: `true`

>[!Example]+ Example 3
>**Input**: `s = "(]"`
>**Output**: `false`

>[!Example]+ Example 4
>**Input**: `s = "([])"`
>**Output**: `true`

>[!Example]+ Example 5
>**Input**: `s = "([)]"`
>**Output**: `false`

>[!warning]+ Constraints
>- `1 <= s.length <= 10^4`
>
>- `s` consists of parentheses only `'()[]{}'`.

---

## 💡 Solution 1: stack with matching
### Approach
- make a list for stack and matching for the closed brackets to pop

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution:

	def isValid(self, s: str) -> bool:
	
		stack = []

		matching = {
			")": "(",			
			"}": "{",
			"]": "["
		}
		
		  
		
		for char in s:
			if char in matching:			
				if stack and stack[-1] == matching[char]:
					stack.pop()
				else:
					return False
			
			else:		
				stack.append(char)
		
		  
		
		if stack:
			return False
		else:	
			return True
```



---

## 📓 Hints & Reflections
>[!Hint]- Hint 1
>Use a stack of characters.

>[!Hint]- Hint 2
>When you encounter an opening bracket, push it to the top of the stack.

>[!Hint]- Hint 3
>When you encounter a closing bracket, check if the top of the stack was the opening for it. If yes, pop it from the stack. Otherwise, return false.

### Reflections
- append and pop