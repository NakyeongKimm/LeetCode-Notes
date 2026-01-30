---
created: 2026-01-03
completed: true
leetcode-index: 383
link: https://leetcode.com/problems/ransom-note
difficulty: Easy
tags:
  - leetcode/hash-table
  - leetcode/string
  - leetcode/counting
  - leetcode/problem
---
# Ransom Note

## 📝 Problem Description
Given two strings `ransomNote` and `magazine`, return `true`* if *`ransomNote`* can be constructed by using the letters from *`magazine`* and *`false`* otherwise*.

Each letter in `magazine` can only be used once in `ransomNote`.

 

>[!Example]+ Example 1
>**Input**: `ransomNote = "a", magazine = "b"`
>**Output**: `false
`

>[!Example]+ Example 2
>**Input**: `ransomNote = "aa", magazine = "ab"`
>**Output**: `false
`

>[!Example]+ Example 3
>**Input**: `ransomNote = "aa", magazine = "aab"`
>**Output**: `true
`

>[!warning]+ Constraints
>- `1 <= ransomNote.length, magazine.length <= 10^5`
>
>- `ransomNote` and `magazine` consist of lowercase English letters.

---

## 💡 Solution 1: Use Counter
### Approach
- Return False if it's apparent with the length of the strings that ransomNote cannot be made with magazine.
- Create two counters to compare and loop through r_count by subtracting the counts from m_count.

### Complexity Analysis
- **Time Complexity**: O(N+M)
	- using two counters and loop through r_count
- **Space Complexity**: O(N+M)
	- using two counters

```python
# Solution 1 Code Here
from collections import Counter

  
class Solution(object):
	def canConstruct(self, ransomNote, magazine):
	"""
	:type ransomNote: str
	:type magazine: str
	:rtype: bool
	"""
	
	# Check if there are enough letters
	r_n = len(ransomNote)
	m_n = len(magazine)
	
	if r_n > m_n: return False
	
	r_count = Counter(ransomNote)
	m_count = Counter(magazine)
	
	# if ransomNote requires more letters than magazine has
	for item, count in r_count.items():
		# subtract count
		m_count[item] -= count
		if m_count[item] < 0: return False
	
	return True
```


---

## 💡 Solution 2: Improve space complexity
### Approach
- For better space complexity, tried using only one counter object.

### Complexity Analysis
- **Time Complexity**: O(N+M)
- **Space Complexity**: O(N)
	- only using one counter

```python
from collections import Counter

class Solution(object):

	def canConstruct(self, ransomNote, magazine):
	"""
	:type ransomNote: str
	:type magazine: str
	:rtype: bool
	"""
	
	# Early exit: can't construct if ransomNote is longer
	if len(ransomNote) > len(magazine):
		return False
	
	# Count characters only in magazine
	m_count = Counter(magazine)
	
	# Check if magazine has enough of each character needed
	for char in ransomNote:
		# Character not available or exhausted
		if m_count[char] <= 0:
			return False	
		m_count[char] -= 1 # Use one occurrence
		
	return True
```


---

## 💡 Solution 3: Write the solution with dict
### Approach
- write the same solution using Python standard dictionary

### Complexity Analysis
- **Time Complexity**: O(N+M)
- **Space Complexity**: O(M)

```python
class Solution(object):

	def canConstruct(self, ransomNote, magazine):
	"""
	:type ransomNote: str
	:type magazine: str
	:rtype: bool
	"""
	
	# Early exit: can't construct if ransomNote is longer
	if len(ransomNote) > len(magazine):
		return False
		
	m_count = {}
	for char in magazine:
		if char in m_count:
			m_count[char] += 1
		else:
			m_count[char] = 1

	# Check if magazine has enough of each character needed
	for char in ransomNote:
		# Character not available or exhausted
		if char not in m_count or m_count[char] <= 0:
			return Flase	
		m_count[char] -= 1 # Use one occurrence
		
	return True
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Consider using few Counter objects for better space complexity