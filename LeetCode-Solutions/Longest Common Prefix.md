---
created: 2026-02-09
completed: true
leetcode-index: "14"
link: https://leetcode.com/problems/longest-common-prefix
difficulty: Easy
tags:
  - leetcode/problem
---

# Longest Common Prefix

## 📝 Problem Description
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

 

>[!Example]+ Example 1
>**Input**: `strs = ["flower","flow","flight"]`
>**Output**: `"fl"
`

>[!Example]+ Example 2
>**Input**: `strs = ["dog","racecar","car"]`
>**Output**: `""`
>**Explanation**:
>There is no common prefix among the input strings. 

>[!warning]+ Constraints
>- `1 <= strs.length <= 200`
>
>- `0 <= strs[i].length <= 200`
>
>- `strs[i]` consists of only lowercase English letters if it is non-empty.

---

## 💡 Solution 1: Compare vertically
### Approach
- By using zip and set, add the prefix if the characters at each index is same.

### Complexity Analysis
- **Time Complexity**: O($M*N$)
	- The number of strings $*$ the length of the shortest
- **Space Complexity**: O(1)

```python
class Solution: 
	def longestCommonPrefix(self, strs: List[str]) -> str: 
		
		res = [] 
		
		for char in zip(*strs): 
			if len(set(char)) == 1: 
				res.append(char[0]) 
			else: 
				break 
				
		return ''.join(res)
```


---

## 💡 Solution 2: Binary Search
### Approach
- Binary search. Find the mid based on the shortest length and if the string[:mid] is the prefix, try longer one. If not, try the shorter one.

### Complexity Analysis
- **Time Complexity**: O( **S × Log(minLen)**)
	- S = m*n
- **Space Complexity**: O(1)

```python
class Solution(object):
		
	def longestCommonPrefix(self, strs: List[str]) -> str:
		
		if not strs:
			return ""
		
		# shortest len is the possible max
		min_len = len(min(strs, key=len))
		low, high = 0, min_len
		
		while low <= high:
		
			mid = (low + high) // 2
			
			# Check if string[:mid] is common prefix
			if self.isCommonPrefix(strs, mid):
				# if yes, find longer one		
				low = mid + 1
		
			else:
				# Find shorter one if the previous one didn't work
				high = mid - 1
				
		return strs[0][:high] 
			
		  
		
	def isCommonPrefix(self, strs, length):
		
		prefix = strs[0][:length] # 첫 문자열에서 length만큼
		# string.startswith - check prefix
		# all - return True if every element is True
		return all(s.startswith(prefix) for s in strs)
```


---

## 💡 Solution 3: Sort and compare the first and the last
### Approach
- Sort the strings, which will be sorted based on dictionary order, and compare the first and last.

### Complexity Analysis
- **Time Complexity**: O($nLogn * m$)
	- nLogn - sorting
	- m - comparison
- **Space Complexity**: O(1)

```python
class Solution(object):
	def longestCommonPrefix(self, strs: List[str]) -> str:
		
		if not strs:
			return ""
		
		strs.sort()
		
		first = strs[0]
		last = strs[-1]
		
		i = 0
		
		while i < len(first) and i < len(last) and first[i] == last[i]:
			i += 1
		
		return first[:i]
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-