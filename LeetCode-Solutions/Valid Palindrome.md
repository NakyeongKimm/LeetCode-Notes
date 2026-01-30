---
created: 2026-01-20
completed: true
leetcode-index: "125"
link: https://leetcode.com/problems/valid-palindrome
difficulty: Easy
tags:
  - leetcode/problem
  - leetcode/pointers
---

# Valid Palindrome

## 📝 Problem Description
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string `s`, return `true`* if it is a palindrome, or *`false`* otherwise*.

 

>[!Example]+ Example 1
>**Input**: `s = "A man, a plan, a canal: Panama"`
>**Output**: `true`
>**Explanation**:
>"amanaplanacanalpanama" is a palindrome. 

>[!Example]+ Example 2
>**Input**: `s = "race a car"`
>**Output**: `false`
>**Explanation**:
>"raceacar" is not a palindrome. 

>[!Example]+ Example 3
>**Input**: `s = " "`
>**Output**: `true`
>**Explanation**:
>s is an empty string "" after removing non-alphanumeric characters. Since an empty string reads the same forward and backward, it is a palindrome. 

>[!warning]+ Constraints
>- `1 <= s.length <= 2 * 10^5`
>
>- `s` consists only of printable ASCII characters.

---

## 💡 Solution 1: Compare based on indices
### Approach
- after filtering, compare based on indices

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution(object):

	def isPalindrome(self, s):
	"""
	:type s: str
	:rtype: bool
	"""
	
		if not s:
			return True
		
		s_filtered = ''.join(c.lower() for c in s if c.isalnum())
		
		l = len(s_filtered)
		
		for i in range(l//2):
			if s_filtered[i] != s_filtered[l-i-1]:
				return False
		
		return True
```


---

## 💡 Solution 2: Two Pointers
### Approach
- use two pointers and compare only valid characters

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(1)
	- save only two pointers

```python
class Solution(object):
	def isPalindrome(self, s):
		"""
		:type s: str
		:rtype: bool
		"""
		
		left = 0
		right = len(s) - 1
		
		while left < right:
	
			while left < right and not s[left].isalnum():
				left += 1
			
			while left < right and not s[right].isalnum():		
				right -= 1
			
			if s[left].lower() != s[right].lower():		
				return False
			
			left += 1
			right -= 1
		
		return True
```


---

## 💡 Solution 3: Python Slicing
### Approach
- Compare with reversed string

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution(object):
	def isPalindrome(self, s):
		
		filtered = ''.join(char.lower() for char in s if char.isalnum())

		return filtered == filtered[::-1] 
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Make two pointers using left and right
- python slicing: make reversed string using 
```python
  string[::-1]
```