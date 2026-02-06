---
created: 2026-02-06
completed: true
leetcode-index: "205"
link: https://leetcode.com/problems/isomorphic-strings
difficulty: Easy
tags:
  - leetcode/problem
---

# Isomorphic Strings

## 📝 Problem Description
Given two strings `s` and `t`, *determine if they are isomorphic*.

Two strings `s` and `t` are isomorphic if the characters in `s` can be replaced to get `t`.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

 

>[!Example]+ Example 1
>**Input**: `s = "egg", t = "add"`
>**Output**: `true`
>**Explanation**:
>The strings `s` and `t` can be made identical by:    	 - Mapping `'e'` to `'a'`. 	 - Mapping `'g'` to `'d'`.   

>[!Example]+ Example 2
>**Input**: `s = "f11", t = "b23"`
>**Output**: `false`
>**Explanation**:
>The strings `s` and `t` can not be made identical as `'1'` needs to be mapped to both `'2'` and `'3'`. 

>[!Example]+ Example 3
>**Input**: `s = "paper", t = "title"`
>**Output**: `true`

>[!warning]+ Constraints
>- `1 <= s.length <= 5 * 10^4`
>
>- `t.length == s.length`
>
>- `s` and `t` consist of any valid ascii character.

---

## 💡 Solution 1: Make a hash map using dict
### Approach
- Make two hash maps to make an injective Isomorphic function

### Complexity Analysis
- **Time Complexity**: O(N)
	- N = len(s)
- **Space Complexity**: O(1)

```python
class Solution:
	def isIsomorphic(self, s: str, t: str) -> bool:
		
		if len(s) != len(t):	
			return False
		
		st_map = {}
		ts_map = {}
		
		for char_s, char_t in zip(s, t):
			if char_s in st_map or char_t in ts_map:
				if st_map.get(char_s) != char_t or ts_map.get(char_t) != char_s:
					return False
		
			else:
				st_map[char_s] = char_t
				ts_map[char_t] = char_s
	
		return True
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-