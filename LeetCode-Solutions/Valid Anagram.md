---
created: 2026-01-01
completed: false
leetcode-index: 242
link: https://leetcode.com/problems/valid-anagram
difficulty: Easy
tags:
  - leetcode/hash-table
  - leetcode/string
  - leetcode/sorting
  - programming/practice
  - leetcode/problem
---
# Valid Anagram

## 📝 Problem Description
Given two strings `s` and `t`, return `true` if `t` is an <span data-keyword="anagram">anagram</span> of `s`, and `false` otherwise.

 

>[!Example]+ Example 1
>**Input**: `s = "anagram", t = "nagaram"`
>**Output**: `true`

>[!Example]+ Example 2
>**Input**: `s = "rat", t = "car"`
>**Output**: `false`

>[!warning]+ Constraints
>- `1 <= s.length, t.length <= 5 * 10^4`
>
>- `s` and `t` consist of lowercase English letters.
>
>
>
>
>
>
>
>
>Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

---

## 💡 Solution 1: Hash
### Approach
- Use Hash map with dictionary

### Complexity Analysis
- **Time Complexity**: O()
- **Space Complexity**: O()

```python
class Solution:

def isAnagram(self, s: str, t: str) -> bool:

if len(s) != len(t): return False

save = {}

for letter in s:

save[letter] = save.get(letter, 0) + 1

  

for char in t:

if char not in save or save[char] == 0:

return False

save[char] -= 1

  

return True
```


---

## 💡 Solution 2: (Name)
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O()
- **Space Complexity**: O()

```python
# Solution 2 Code Here
```


---

## 💡 Solution 3: (Name)
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O()
- **Space Complexity**: O()

```python
# Solution 3 Code Here
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-