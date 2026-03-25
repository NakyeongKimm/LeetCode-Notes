---
created: 2026-03-25
completed: true
leetcode-index: "1071"
link: https://leetcode.com/problems/greatest-common-divisor-of-strings
difficulty: Easy
tags:
  - leetcode/problem
---

# Greatest Common Divisor of Strings

## 📝 Problem Description
For two strings `s` and `t`, we say "`t` divides `s`" if and only if `s = t + t + t + ... + t + t` (i.e., `t` is concatenated with itself one or more times).

Given two strings `str1` and `str2`, return *the largest string *`x`* such that *`x`* divides both *`str1`* and *`str2`.

 

>[!Example]+ Example 1
>**Input**: `str1 = "ABCABC", str2 = "ABC"`
>**Output**: `"ABC"`

>[!Example]+ Example 2
>**Input**: `str1 = "ABABAB", str2 = "ABAB"`
>**Output**: `"AB"`

>[!Example]+ Example 3
>**Input**: `str1 = "LEET", str2 = "CODE"`
>**Output**: `""`

>[!Example]+ Example 4
>**Input**: `str1 = "AAAAAB", str2 = "AAA"`
>**Output**: `""​​​​​​​`

>[!warning]+ Constraints
>- `1 <= str1.length, str2.length <= 1000`
>
>- `str1` and `str2` consist of English uppercase letters.

---

## 💡 Solution 1: Simply compare i
### Approach
- Simply compare if str1+str2 == str2+str1 because these two would be same if they have common greatest divisors.
- Use .startswith to check 

### Complexity Analysis
- **Time Complexity**: O(N+M)
- **Space Complexity**: O(N+M)

```python
class Solution:
	def gcdOfStrings(self, str1: str, str2: str) -> str:
		if str1+str2 != str2+str1:	
			return ""
	
		if str1 == str2:
			return str1
		
		if len(str1) > len(str2):	
			if not str1.startswith(str2):
				return ""
		
			return self.gcdOfStrings(str1[:len(str1)-len(str2)], str2)
		
		else:	
			if not str2.startswith(str1):
				return ""
		
		return self.gcdOfStrings(str1, str2[:len(str2)-len(str1)])

```



---

## 📓 Hints & Reflections
>[!Hint]- Hint 1
>The greatest common divisor must be a prefix of each string, so we can try all prefixes.

### Reflections
-