---
created: 2026-03-01
completed: true
leetcode-index: "49"
link: https://leetcode.com/problems/group-anagrams
difficulty: Medium
tags:
  - leetcode/problem
---

# Group Anagrams

## 📝 Problem Description
Given an array of strings `strs`, group the <span data-keyword="anagram">anagrams</span> together. You can return the answer in any order.

 

>[!Example]+ Example 1
>**Input**: `strs = ["eat","tea","tan","ate","nat","bat"]`
>**Output**: `[["bat"],["nat","tan"],["ate","eat","tea"]]`
>**Explanation**:
>- There is no string in strs that can be rearranged to form `"bat"`. 	 - The strings `"nat"` and `"tan"` are anagrams as they can be rearranged to form each other. 	 - The strings `"ate"`, `"eat"`, and `"tea"` are anagrams as they can be rearranged to form each other.   

>[!Example]+ Example 2
>**Input**: `strs = [""]`
>**Output**: `[[""]]`

>[!Example]+ Example 3
>**Input**: `strs = ["a"]`
>**Output**: `[["a"]]`

>[!warning]+ Constraints
>- `1 <= strs.length <= 10^4`
>
>- `0 <= strs[i].length <= 100`
>
>- `strs[i]` consists of lowercase English letters.

---

## 💡 Solution 1: Use defaultdict
### Approach
- Use defaultdict to save possible anagrams that shares a single, sorted key

### Complexity Analysis
- **Time Complexity**: O(Nklogk)
- **Space Complexity**: O(Nk)

```python
from collections import defaultdict

class Solution:
	def groupAnagrams(self, strs: List[str]) -> List[List[str]]:

		hashmap = defaultdict(list)
	
		for word in strs:
			key = ''.join(sorted(word))
			hashmap[key].append(word)

		return list(hashmap.values())
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-