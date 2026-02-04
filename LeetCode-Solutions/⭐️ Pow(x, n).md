---
created: "2026-02-03"
completed: false
leetcode-index: "50"
link: "https://leetcode.com/problems/powx-n"
difficulty: "Medium"
tags:
  - leetcode/problem
---

# Pow(x, n)

## 📝 Problem Description
Implement <a href="http://www.cplusplus.com/reference/valarray/pow/" target="_blank">pow(x, n)</a>, which calculates `x` raised to the power `n` (i.e., `x^n`).

 

>[!Example]+ Example 1
>**Input**: `x = 2.00000, n = 10`
>**Output**: `1024.00000
`

>[!Example]+ Example 2
>**Input**: `x = 2.10000, n = 3`
>**Output**: `9.26100
`

>[!Example]+ Example 3
>**Input**: `x = 2.00000, n = -2`
>**Output**: `0.25000`
>**Explanation**:
>2^-2 = 1/2^2 = 1/4 = 0.25 

>[!warning]+ Constraints
>- `-100.0 < x < 100.0`
>
>- `-2^31 <= n <= 2^31-1`
>
>- `n` is an integer.
>
>- Either `x` is not zero or `n > 0`.
>
>- `-10^4 <= x^n <= 10^4`

---

## 💡 Solution 1:  Repeat for n/2 times
### Approach
- When n is negative, change x and n so that we can use the same logic for both positive and negative n.
- Repeat n/2 times using result and current variables based on odd and even

### Complexity Analysis
- **Time Complexity**: O(LogN)
- **Space Complexity**: O(1)

```python
class Solution: 
	def myPow(self, x: float, n: int) -> float: 
		if n < 0: 
			x = 1/x 
			n = -n 
			
		result = 1 
		current = x 
		
		while n > 0: 
			if n % 2 == 1: 
			result *= current 
			n -= 1 
			
		current *= current 
		n //= 2 
			
		return result
```


---

## 💡 Solution 2: Recursive
### Approach
- Do the same task with solution 1 but make and use recursive function.
- Set the base line with n=0 for the recursion, regarding the fact that $x^0 = 1$

### Complexity Analysis
- **Time Complexity**: O(logN)
- **Space Complexity**: O(logN)

```python
class Solution(object): 
	def myPow(self, x: float, n: int) -> float: 
		if n < 0: 
			x = 1/x 
			n = -n 
			
		def power(x, n): 
			if n == 0: 
				return 1 
			
			half = power(x, n//2) 
			if n % 2 == 0: 
				return half * half 
			else: 
				return half * half * x 
				
		return power(x, n)
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-