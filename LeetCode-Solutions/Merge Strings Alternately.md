---
created: 2026-03-21
completed: true
leetcode-index: "1768"
link: https://leetcode.com/problems/merge-strings-alternately
difficulty: Easy
tags:
  - leetcode/problem
---

# Merge Strings Alternately

## 📝 Problem Description
You are given two strings `word1` and `word2`. Merge the strings by adding letters in alternating order, starting with `word1`. If a string is longer than the other, append the additional letters onto the end of the merged string.


Return *the merged string.*


 

>[!Example]+ Example 1
>**Input**: `word1 = "abc", word2 = "pqr"`
>**Output**: `"apbqcr"`
>**Explanation**:
>The merged string will be merged as so:
 word1:  a   b   c
 word2:    p   q   r
 merged: a p b q c r
 

>[!Example]+ Example 2
>**Input**: `word1 = "ab", word2 = "pqrs"`
>**Output**: `"apbqrs"`
>**Explanation**:
>Notice that as word2 is longer, "rs" is appended to the end.
 word1:  a   b 
 word2:    p   q   r   s
 merged: a p b q   r   s
 

>[!Example]+ Example 3
>**Input**: `word1 = "abcd", word2 = "pq"`
>**Output**: `"apbqcd"`
>**Explanation**:
>Notice that as word1 is longer, "cd" is appended to the end.
 word1:  a   b   c   d
 word2:    p   q 
 merged: a p b q c   d
 

>[!warning]+ Constraints
>- `1 <= word1.length, word2.length <= 100`
>
>- `word1` and `word2` consist of lowercase English letters.

---

## 💡 Solution 1: Simple if and for loops
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O(N+M)
- **Space Complexity**: O(N+M)

```python
class Solution: 
	def mergeAlternately(self, word1: str, word2: str) -> str: 
		if not word1 and not word2: 
			return "" res = [] 
			
		if len(word1) == len(word2): 
			for i in range(len(word1)): 
				res.append(word1[i]) 
				res.append(word2[i]) 
		
		if len(word1) < len(word2): 
			for i in range(len(word1)): 
				res.append(word1[i]) 
				res.append(word2[i]) 
			for j in range(len(word1), len(word2)): 
				res.append(word2[j]) 
				
		if len(word1) > len(word2): 
			for i in range(len(word2)): 
				res.append(word1[i]) 
				res.append(word2[i]) 
			for j in range(len(word2), len(word1)): 
				res.append(word1[j]) 
				
		return "".join(res)
```


---

## 💡 Solution 2: Better Readability
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O(N+M)
- **Space Complexity**: O(N+M)

```python
class Solution:
	def mergeAlternately(self, word1: str, word2: str) -> str:

		if not word1 and not word2:	
			return ""
		
		res = []

		min_len = min(len(word1), len(word2))
		
		for i in range(min_len):
			res.append(word1[i])
			res.append(word2[i])
		
		# either of these will be empty
		# so no need to use if
		res.append(word2[min_len:])
		res.append(word1[min_len:])
		
		return "".join(res)
```

---
## 💡 Solution 3: Pointers
### Approach
- Use two pointers for each string

### Complexity Analysis
- **Time Complexity**: O(N+M)
- **Space Complexity**: O(N+M)

```python
class Solution:
	def mergeAlternately(self, word1: str, word2: str) -> str:

		i, j = 0, 0

		res = []

		while i < len(word1) or j < len(word2):
			if i < len(word1):
				res.append(word1[i])
				i += 1

			if j < len(word2):
				res.append(word2[j])
				j += 1

		return "".join(res)
```

---

## 📓 Hints & Reflections
>[!Hint]- Hint 1
>Use two pointers, one pointer for each string. Alternately choose the character from each pointer, and move the pointer upwards.

### Reflections
-