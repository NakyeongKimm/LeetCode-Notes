---
created: 2026-03-25
completed: true
leetcode-index: "345"
link: https://leetcode.com/problems/reverse-vowels-of-a-string
difficulty: Easy
tags:
  - leetcode/problem
---

# Reverse Vowels of a String

## 📝 Problem Description
Given a string `s`, reverse only all the vowels in the string and return it.

The vowels are `'a'`, `'e'`, `'i'`, `'o'`, and `'u'`, and they can appear in both lower and upper cases, more than once.

 

>[!Example]+ Example 1
>**Input**: `s = "IceCreAm"`
>**Output**: `"AceCreIm"`
>**Explanation**:
>The vowels in `s` are `['I', 'e', 'e', 'A']`. On reversing the vowels, s becomes `"AceCreIm"`. 

>[!Example]+ Example 2
>**Input**: `s = "leetcode"`
>**Output**: `"leotcede"`

>[!warning]+ Constraints
>- `1 <= s.length <= 3 * 10^5`
>
>- `s` consist of printable ASCII characters.

---

## 💡 Solution 1: List Matching
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution:
	def reverseVowels(self, s: str) -> str:
		vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
		v_ls = []
		idx_ls = []
		s_ls = list(s)
		
		for idx, char in enumerate(s):
			if char in vowels:
				v_ls.append(char)	
				idx_ls.append(idx)
		
		for idx, char in zip(reversed(idx_ls), v_ls):
			s_ls[idx] = char
		
		return "".join(s_ls)
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-