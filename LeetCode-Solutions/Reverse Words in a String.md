---
created: 2026-02-11
completed: true
leetcode-index: "151"
link: https://leetcode.com/problems/reverse-words-in-a-string
difficulty: Medium
tags:
  - leetcode/problem
---

# Reverse Words in a String

## 📝 Problem Description
Given an input string `s`, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in `s` will be separated by at least one space.

Return *a string of the words in reverse order concatenated by a single space.*

<b>Note</b> that `s` may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

 

>[!Example]+ Example 1
>**Input**: `s = "the sky is blue"`
>**Output**: `"blue is sky the"
`

>[!Example]+ Example 2
>**Input**: `s = "  hello world  "`
>**Output**: `"world hello"`
>**Explanation**:
>Your reversed string should not contain leading or trailing spaces. 

>[!Example]+ Example 3
>**Input**: `s = "a good   example"`
>**Output**: `"example good a"`
>**Explanation**:
>You need to reduce multiple spaces between two words to a single space in the reversed string. 

>[!warning]+ Constraints
>- `1 <= s.length <= 10^4`
>
>- `s` contains English letters (upper-case and lower-case), digits, and spaces `' '`.
>
>- There is at least one word in `s`.
>
>
>
>
>
>
>
>
><b data-stringify-type="bold">

**Follow up**: If the string data type is mutable in your language, can you solve it in-place with O(1)` extra space?

---

## 💡 Solution 1: split and join
### Approach
- split and join in reversed order using built-in functions

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution:
	def reverseWords(self, s: str) -> str:
		
		words = s.split()
		
		return " ".join(reversed(words))
```


---


## 📓 Hints & Reflections
No hints available.

### Reflections
-