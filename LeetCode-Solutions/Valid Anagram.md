---
created: 2026-01-01
completed: true
leetcode-index: 242
link: https://leetcode.com/problems/valid-anagram
difficulty: Easy
tags:
  - leetcode/hash-table
  - leetcode/string
  - leetcode/sorting
  - leetcode/problem
---
# Valid Anagram

## 📝 Problem Description
Given two strings `s` and `t`, return `true` if `t` is an <span data-keyword="anagram">anagram</span> of `s`, and `false` otherwise.

 

>[!Example]+ Example 1
>**Input**: `s = "anagram", t = "nagaram"`
>**Output**: `true`

>[!Example]+ Example 2
>**Input**: `s = "rat", t = "car"`
>**Output**: `false`

>[!warning]+ Constraints
>- `1 <= s.length, t.length <= 5 * 10^4`
>
>- `s` and `t` consist of lowercase English letters.
>
>
>
>
>
>
>
>
>Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

---

## 💡 Solution 1: Hash
### Approach
- Use the concept of Hash map with a dictionary

### Complexity Analysis
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

```python
class Solution:
	def isAnagram(self, s: str, t: str) -> bool:
		if len(s) != len(t): return False
		save = {}

		for letter in s:	
			save[letter] = save.get(letter, 0) + 1
		
		  
		
		for char in t:
			if char not in save or save[char] == 0:
				return False
		
			save[char] -= 1
		
		return True
```


---

## 💡 Solution 2: Unicode Integer
### Approach
- First, raise false when the length of two strings don't match
- Use UNICODE integer

### Complexity Analysis
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

```python
# For ASCII

class Solution:

	def isAnagram(self, s: str, t: str) -> bool:
	
		if len(s) != len(t): return False
		
		count = [0] * 26
		
		for char in s:
			count[ord(char) - ord('a')] += 1
		
		for char in t:	
			if count[ord(char) - ord('a')] == 0:
				return False
		
			count[ord(char) - ord('a')] -= 1	  
		
		return True
```


---

## 💡 Solution 3: Counter
### Approach
- Use Counter 

### Complexity Analysis
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

```python
from collections import Counter

class Solution:

	def isAnagram(self, s: str, t: str) -> bool:
	
		if len(s) != len(t):
			return False
	
		return Counter(s) == Counter(t)
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Get used to the function 'ord' and class 'Counter'
	- ord is a built-in function that takes a single character as input and returns its corresponding Unicode integer value.
	- Counter is a class from Python library 'collections' that counts the occurrences of each element in an iterable and returns it as a dictionary-like object.
	