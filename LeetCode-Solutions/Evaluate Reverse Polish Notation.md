---
created: 2026-02-23
completed: true
leetcode-index: "150"
link: https://leetcode.com/problems/evaluate-reverse-polish-notation
difficulty: Medium
tags:
  - leetcode/problem
---

# Evaluate Reverse Polish Notation

## 📝 Problem Description
You are given an array of strings `tokens` that represents an arithmetic expression in a <a href="http://en.wikipedia.org/wiki/Reverse_Polish_notation" target="_blank">Reverse Polish Notation</a>.

Evaluate the expression. Return *an integer that represents the value of the expression*.

Note that:

	
- The valid operators are `'+'`, `'-'`, `'*'`, and `'/'`.
	
- Each operand may be an integer or another expression.
	
- The division between two integers always truncates toward zero.
	
- There will not be any division by zero.
	
- The input represents a valid arithmetic expression in a reverse polish notation.
	
- The answer and all the intermediate calculations can be represented in a 32-bit integer.

 

>[!Example]+ Example 1
>**Input**: `tokens = ["2","1","+","3","*"]`
>**Output**: `9`
>**Explanation**:
>((2 + 
> 1) * 
> 3) = 9 

>[!Example]+ Example 2
>**Input**: `tokens = ["4","13","5","/","+"]`
>**Output**: `6`
>**Explanation**:
>(4 + (13 / 
> 5) ) = 6 

>[!Example]+ Example 3
>**Input**: `tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]`
>**Output**: `22`
>**Explanation**:
>((10 * (6 / ((9 + 
> 3) * -
> 11) )) + 
> 17) + 5 = ((10 * (6 / (12 * -
> 11) )) + 
> 17) + 5 = ((10 * (6 / -
> 132) ) + 
> 17) + 5 = ((10 * 
> 0) + 
> 17) + 5 = (0 + 
> 17) + 5 = 17 + 5 = 22 

>[!warning]+ Constraints
>- `1 <= tokens.length <= 10^4`
>
>- `tokens[i]` is either an operator: `"+"`, `"-"`, `"*"`, or `"/"`, or an integer in the range `[-200, 200]`.

---

## 💡 Solution 1: Use Stack til Operators, Dictionary for Operators
### Approach
- To handle RPN, we should go forward first, and when we meet an operator, we should operate with the last two integers in the stack.

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution:

	def evalRPN(self, tokens: List[str]) -> int:
		
		operations = {
			"+": lambda x, y: x + y,
			"-": lambda x, y: x - y,
			"*": lambda x, y: x * y,
			"/": lambda x, y: int(x / y)
			}
		
		stack = []
		
		for token in tokens:
			if token not in operations:
				stack.append(int(token))
			else:
				a = stack.pop()
				b = stack.pop()
				res = operations[token](b, a)
				stack.append(res)
				
		return stack.pop()
```


---

## 💡 Solution 2: Use if-elif instead of operations dictionary
### Approach
- Replace operations dictionary with if-elif (a bit longer but easy to read)

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution:
	def evalRPN(self, tokens: List[str]) -> int:
		
		stack = []
		
		for token in tokens:
			if token == "+":
				stack.append(stack.pop() + stack.pop())
			
			elif token == "-":
				b, a = stack.pop(), stack.pop()
				stack.append(a - b)
			
			elif token == "*":
				stack.append(stack.pop() * stack.pop())
			
			elif token == "/":
				b, a = stack.pop(), stack.pop()
				stack.append(int(a / b))
			
			else:
				stack.append(int(token))
		
		return stack.pop()
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-