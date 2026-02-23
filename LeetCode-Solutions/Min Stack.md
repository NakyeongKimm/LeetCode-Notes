---
created: 2026-02-23
completed: true
leetcode-index: "155"
link: https://leetcode.com/problems/min-stack
difficulty: Medium
tags:
  - leetcode/problem
---

# Min Stack

## 📝 Problem Description
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the `MinStack` class:

	
- `MinStack()` initializes the stack object.
	
- `void push(int val)` pushes the element `val` onto the stack.
	
- `void pop()` removes the element on the top of the stack.
	
- `int top()` gets the top element of the stack.
	
- `int getMin()` retrieves the minimum element in the stack.

You must implement a solution with `O(1)` time complexity for each function.

 

>[!Example]+ Example 1

>[!warning]+ Constraints
>- `-2^31 <= val <= 2^31 - 1`
>
>- Methods `pop`, `top` and `getMin` operations will always be called on non-empty stacks.
>
>- At most `3 * 10^4` calls will be made to `push`, `pop`, `top`, and `getMin`.

---

## 💡 Solution 1: minstack that saves minimum value at that point
### Approach
- Make a stack and also min stack, which will show the minimum value at the same index of the stack.

### Complexity Analysis
- **Time Complexity**: O(1)
- **Space Complexity**: O(N)

```python
class MinStack:
	def __init__(self):
		self.stack = []
		self.min_stack = []
	
	def push(self, val: int) -> None:
		if not self.stack:
			self.min_stack.append(val)
		
		else:		
			self.min_stack.append(min(self.min_stack[-1], val))
			self.stack.append(val)
	
	def pop(self) -> None:
		self.stack.pop()
		self.min_stack.pop()
	
	
	def top(self) -> int:
		if self.stack:
			return self.stack[-1]
		else:	
			return None
	
	  
	
	def getMin(self) -> int:
		if self.min_stack:
			return self.min_stack[-1]
		else:
			return None

  

# Your MinStack object will be instantiated and called as such:

# obj = MinStack()

# obj.push(val)

# obj.pop()

# param_3 = obj.top()

# param_4 = obj.getMin()
```


---

## 📓 Hints & Reflections
>[!Hint]- Hint 1
>Consider each node in the stack having a minimum value. (Credits to @aakarshmadhavan)

### Reflections
-