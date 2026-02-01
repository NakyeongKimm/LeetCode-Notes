---
created: 2026-02-01
completed: true
leetcode-index: "9"
link: https://leetcode.com/problems/palindrome-number
difficulty: Easy
tags:
  - leetcode/problem
---

# Palindrome Number

## 📝 Problem Description
Given an integer `x`, return `true`* if *`x`* is a *<span data-keyword="palindrome-integer">*palindrome*</span>*, and *`false`* otherwise*.

 

>[!Example]+ Example 1
>**Input**: `x = 121`
>**Output**: `true`
>**Explanation**:
>121 reads as 121 from left to right and from right to left. 

>[!Example]+ Example 2
>**Input**: `x = -121`
>**Output**: `false`
>**Explanation**:
>From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome. 

>[!Example]+ Example 3
>**Input**: `x = 10`
>**Output**: `false`
>**Explanation**:
>Reads 01 from right to left. Therefore it is not a palindrome. 

>[!warning]+ Constraints
>- `-2^31 <= x <= 2^31 - 1`
>
>
>
>
>
>
>Follow up: Could you solve it without converting the integer to a string?

---

## 💡 Solution 1: String Slicing
### Approach
- Compare the string of the original number and reversed number and return boolean

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution: 
	def isPalindrome(self, x: int) -> bool: 
		xs = str(x) 
		return (xs == xs[::-1])
```


---

## 💡 Solution 2: Compare with reversed
### Approach
- Two edge cases: negative numbers, numbers that end with 0 (e.g. 10, 1010, etc.)
- compare the first n digits and reversed n digits
	- return in 'or' form to handle both even and odd digit cases

### Complexity Analysis
- **Time Complexity**: O($LogN$)
	- loop for the number of digit times
- **Space Complexity**: O(1)
	- Use three variables: reversed, q, and r

```python
class Solution:

	def isPalindrome(self, x: int) -> bool:
		
		if x < 0 or (x > 0 and x % 10 == 0):
			return False
		
		reversed = 0
		q = x
		
		while q > reversed:
			q, r = divmod(q, 10)
			reversed = reversed * 10 + r
		
		return (q == reversed) or (q == reversed//10)
```


---

## 📓 Hints & Reflections
>[!Hint]- Hint 1
>Beware of overflow when you reverse the integer.

### Reflections
- idea: return in 'or' form to handle both even and odd digit cases