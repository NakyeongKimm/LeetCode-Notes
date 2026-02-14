---
created: 2026-02-14
completed: true
leetcode-index: "290"
link: https://leetcode.com/problems/word-pattern
difficulty: Easy
tags:
  - leetcode/problem
---

# Word Pattern

## 📝 Problem Description
Given a `pattern` and a string `s`, find if `s` follows the same pattern.

Here <b>follow</b> means a full match, such that there is a bijection between a letter in `pattern` and a <b>non-empty</b> word in `s`. Specifically:

	
- Each letter in `pattern` maps to exactly one unique word in `s`.
	
- Each unique word in `s` maps to exactly one letter in `pattern`.
	
- No two letters map to the same word, and no two words map to the same letter.

 

>[!Example]+ Example 1
>**Input**: `pattern = "abba", s = "dog cat cat dog"`
>**Output**: `true`
>**Explanation**:
>The bijection can be established as:    	 - `'a'` maps to `"dog"`. 	 - `'b'` maps to `"cat"`.   

>[!Example]+ Example 2
>**Input**: `pattern = "abba", s = "dog cat cat fish"`
>**Output**: `false`

>[!Example]+ Example 3
>**Input**: `pattern = "aaaa", s = "dog cat cat dog"`
>**Output**: `false`

>[!warning]+ Constraints
>- `1 <= pattern.length <= 300`
>
>- `pattern` contains only lower-case English letters.
>
>- `1 <= s.length <= 3000`
>
>- `s` contains only lowercase English letters and spaces `' '`.
>
>- `s` does not contain any leading or trailing spaces.
>
>- All the words in `s` are separated by a single space.

---

## 💡 Solution 1: Bijective Mapping
### Approach
- Make two dictionaries to bijectively map the patterns and words.

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(M)

```python
class Solution:
	def wordPattern(self, pattern: str, s: str) -> bool:
		words = s.split()
		
		if len(pattern) != len(words):
			return False
		
		matches_ps = {}
		matches_sp = {}
		
		for i in range(len(pattern)):
		
			if pattern[i] in matches_ps:
				if matches_ps[pattern[i]] != words[i]:
					return False
		
			if words[i] in matches_sp:
				if matches_sp[words[i]] != pattern[i]:
					return False
	
			matches_ps[pattern[i]] = words[i]
			matches_sp[words[i]] = pattern[i]
			
		return True
```

---

## 📓 Hints & Reflections
No hints available.

### Reflections
-