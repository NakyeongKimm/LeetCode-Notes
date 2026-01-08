---
created: 2026-01-07
completed: true
leetcode-index: "58"
link: https://leetcode.com/problems/length-of-last-word
difficulty: Easy
tags:
  - programming/practice
  - leetcode/problem
---

# Length of Last Word

## 📝 Problem Description
Given a string `s` consisting of words and spaces, return *the length of the last word in the string.*

A word is a maximal <span data-keyword="substring-nonempty">substring</span> consisting of non-space characters only.

 

>[!Example]+ Example 1
>**Input**: `s = "Hello World"`
>**Output**: `5`
>**Explanation**:
>The last word is "World" with length 5. 

>[!Example]+ Example 2
>**Input**: `s = "   fly me   to   the moon  "`
>**Output**: `4`
>**Explanation**:
>The last word is "moon" with length 4. 

>[!Example]+ Example 3
>**Input**: `s = "luffy is still joyboy"`
>**Output**: `6`
>**Explanation**:
>The last word is "joyboy" with length 6. 

>[!warning]+ Constraints
>- `1 <= s.length <= 10^4`
>
>- `s` consists of only English letters and spaces `' '`.
>
>- There will be at least one word in `s`.

---

## 💡 Solution 1: while and for loops
### Approach
- Define a variable 'end' to start counting the length of the last word, considering that there can be multiple spaces at the end of the sentence.
- Run a for loop to count the word length that breaks when there's a space.

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(1)

```python
class Solution(object):

	def lengthOfLastWord(self, s):
		
		"""
		:type s: str
		:rtype: int
		"""
		
		end = len(s) -1
		cnt = 0
		
		while s[end] == " ":
			end -= 1  
		
		for i in range(end, -1, -1):
			if s[i] != " ":
				cnt += 1
			else:	
				break
		
		return cnt
```


---

## 💡 Solution 2: use built-in functions
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O(n)
	- both split and strip check all the characters
- **Space Complexity**: O(n)

```python
class Solution(object): def lengthOfLastWord(self, s): 
	""" 
	:type s: str 
	:rtype: int 
	""" 
	# Use built-in strip() and split() for cleaner, equivalent logic 
	return len(s.strip().split()[-1])
```



---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Not about the efficiency, but to check the Python knowledge, think of the solutions that use built-in functions and their complexity.
- string.strip() -> remove the spacing at the front and end of the string (maintain the spacing in the middle of the string) (O(N))
- string.split() -> split the string based on the spacing (O(N))