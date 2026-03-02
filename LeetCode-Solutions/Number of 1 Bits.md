---
created: 2026-03-02
completed: true
leetcode-index: "191"
link: https://leetcode.com/problems/number-of-1-bits
difficulty: Easy
tags:
  - leetcode/problem
---

# Number of 1 Bits

## 📝 Problem Description
Given a positive integer `n`, write a function that returns the number of <span data-keyword="set-bit">set bits</span> in its binary representation (also known as the <a href="http://en.wikipedia.org/wiki/Hamming_weight" target="_blank">Hamming weight</a>).

 

>[!Example]+ Example 1
>**Input**: `n = 11`
>**Output**: `3`
>**Explanation**:
>The input binary string 1011 has a total of three set bits. 

>[!Example]+ Example 2
>**Input**: `n = 128`
>**Output**: `1`
>**Explanation**:
>The input binary string 10000000 has a total of one set bit. 

>[!Example]+ Example 3
>**Input**: `n = 2147483645`
>**Output**: `30`
>**Explanation**:
>The input binary string 1111111111111111111111111111101 has a total of thirty set bits. 

>[!warning]+ Constraints
>- `1 <= n <= 2^31 - 1`
>
>
>
>
>
>
>Follow up: If this function is called many times, how would you optimize it?

---

## 💡 Solution 1: use built-in functions
### Approach
- Use built-in functions bin and count

### Complexity Analysis
- **Time Complexity**: O(1)
- **Space Complexity**: O(1)

```python
class Solution:
	def hammingWeight(self, n: int) -> int:

		bin_n = bin(n)[2:]

		return bin_n.count("1")
```

---
## 💡 Solution 2: latest built-in - bit_count() for python 3.10 and later
### Approach
- Use built-in function bit_count()

### Complexity Analysis
- **Time Complexity**: O(1)
- **Space Complexity**: O(1)

```python
class Solution:
	def hammingWeight(self, n: int) -> int:

		return n.bit_count()
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-