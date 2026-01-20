---
created: 2026-01-20
completed: true
leetcode-index: "392"
link: https://leetcode.com/problems/is-subsequence
difficulty: Easy
tags:
  - programming/practice
  - leetcode/problem
---

# Is Subsequence

## 📝 Problem Description
Given two strings `s` and `t`, return `true`* if *`s`* is a subsequence of *`t`*, or *`false`* otherwise*.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., `"ace"` is a subsequence of `"<u>a</u>b<u>c</u>d<u>e</u>"` while `"aec"` is not).

 

>[!Example]+ Example 1
>**Input**: `s = "abc", t = "ahbgdc"`
>**Output**: `true
`

>[!Example]+ Example 2
>**Input**: `s = "axc", t = "ahbgdc"`
>**Output**: `false
`

>[!warning]+ Constraints
>- `0 <= s.length <= 100`
>
>- `0 <= t.length <= 10^4`
>
>- `s` and `t` consist only of lowercase English letters.
>
>
>
>
>
>
>Follow up: Suppose there are lots of incoming `s`, say `s<sub>1</sub>, s<sub>2</sub>, ..., s<sub>k</sub>` where `k >= 10^9`, and you want to check one by one to see if `t` has its subsequence. In this scenario, how would you change your code?

---

## 💡 Solution 1: Two pointers
### Approach
- Two pointers: one for s and one for t(for loop in the solution)

### Complexity Analysis
- **Time Complexity**: O(N)
	- where N = length of t at max
- **Space Complexity**: O(1)
	- Use only one pointer

```python
class Solution(object):
	def isSubsequence(self, s, t):
	"""
	:type s: str
	:type t: str
	:rtype: bool
	"""
		
		if not s:
			return True
		
		i = 0
  
		
		for char in t:
			p_s = s[i]
		
			if p_s == char:
				i = i+1
		
			if i >= len(s):
				return True
		
		return False
	

```

---

## 💡 Solution 2: If there are multiple s inputs - Dictionary + Binary Search
### Approach
- This is for a follow-up question asking about dealing with multiple s inputs at the same time
- Use defaultdict and bisect:
	- defaultdict to save the index of each character in t
	- bisect to do binary search based on characters in s

### Complexity Analysis
- **Time Complexity**: O(T + S * logT)
	- binary search: log T
- **Space Complexity**: O(T)
	- save as defaultdict

```python
from collections import defaultdict
import bisect

class Solution(object):

	def isSubsequence(self, s, t):
	
		if not s:
			return True
		
		positions = defaultdict(list)
		
		for i, char in enumerate(t):
			positions[char].append(i)
		
		current_pos = -1
		
		for char in s:
			if char not in positions:		
				return False
			
			indices = positions[char]
			
			i = bisect.bisect_right(indices, current_pos)
			
			# when couldn't find
			if i == len(indices):
				return False
			
			current_pos = indices[i]
		
		return True
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- defaultdict and bisect make follow-up instances effective 