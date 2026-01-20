---
created: 2026-01-20
completed: true
leetcode-index: "125"
link: https://leetcode.com/problems/valid-palindrome
difficulty: Easy
tags:
  - programming/practice
  - leetcode/problem
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

## 💡 Solution 1: Filter and 
### Approach
- 

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

## 💡 Solution 2: (Name)
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O()
- **Space Complexity**: O()

```python
# Solution 2 Code Here
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