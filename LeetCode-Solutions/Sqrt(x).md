---
created: 2026-02-01
completed: true
leetcode-index: "69"
link: https://leetcode.com/problems/sqrtx
difficulty: Easy
tags:
  - leetcode/problem
---

# Sqrt(x)

## 📝 Problem Description
Given a non-negative integer `x`, return *the square root of *`x`* rounded down to the nearest integer*. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

	
- For example, do not use `pow(x, 0.5)` in c++ or `x ** 0.5` in python.

 

>[!Example]+ Example 1
>**Input**: `x = 4`
>**Output**: `2`
>**Explanation**:
>The square root of 4 is 2, so we return 2. 

>[!Example]+ Example 2
>**Input**: `x = 8`
>**Output**: `2`
>**Explanation**:
>The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned. 

>[!warning]+ Constraints
>- `0 <= x <= 2^31 - 1`

---

## 💡 Solution 1:  Linear Search
### Approach
- Guess sqrt(x) by a linear search

### Complexity Analysis
- **Time Complexity**: O($\sqrt{x}$)
- **Space Complexity**: O(1)

```python
class Solution: 
	def mySqrt(self, x: int) -> int: 
		a = 0 
		
		while (a+1)*(a+1) <= x: 
			if a*a < x: 
				a += 1 
		
		return a
```


---

## 💡 Solution 2: Binary Search
### Approach
- binary search by calculating mid and moving left or right to the point near mid

### Complexity Analysis
- **Time Complexity**: O($logx$)
- **Space Complexity**: O(1)

```python
class Solution: 
	def mySqrt(self, x: int) -> int: 
		if x < 2: 
			return x 
		
		left, right = 0, x 
		
		while left <= right: 
			mid = (left + right) // 2 
			
			if mid*mid <= x: 
				answer = mid 
				left = mid + 1 
				
			else: 
				right = mid - 1 
			
		return answer
```


---

## 💡 Solution 3: Newton's Method
### Approach
- Newton's method: y_new = y_old - f(y_old) / (2y_old)
- Starting from the very far point, make a guess using the gradient of the tangent line

### Complexity Analysis
- **Time Complexity**: O($log (log x)$)
- **Space Complexity**: O(1)

```python
class Solution: 
	def mySqrt(self, x: int) -> int: 
	
		if x < 2: 
			return x 
		
		y = x // 2 
		
		while y * y > x: 
			y = (y + x // y) // 2 
		
		return y
```


---

## 📓 Hints & Reflections
>[!Hint]- Hint 1
>Try exploring all integers. (Credits: @annujoshi)

>[!Hint]- Hint 2
>Use the sorted property of integers to reduced the search space. (Credits: @annujoshi)

### Reflections
- Get used to binary search first and then, Newton's method for reference.