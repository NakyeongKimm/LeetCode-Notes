---
created: 2026-02-04
completed: true
leetcode-index: "190"
link: https://leetcode.com/problems/reverse-bits
difficulty: Easy
tags:
  - leetcode/problem
---

# Reverse Bits

## 📝 Problem Description
Reverse bits of a given 32 bits signed integer.

 

>[!Example]+ Example 1
>**Input**: `n = 43261596`
>**Output**: `964176192`
>**Explanation**:
><table> 	<tbody> 		<tr> 			<th>Integer</th> 			<th>Binary</th> 		</tr> 		<tr> 			<td>43261596</td> 			<td>00000010100101000001111010011100</td> 		</tr> 		<tr> 			<td>964176192</td> 			<td>00111001011110000010100101000000</td> 		</tr> 	</tbody> </table> 

>[!Example]+ Example 2
>**Input**: `n = 2147483644`
>**Output**: `1073741822`
>**Explanation**:
><table> 	<tbody> 		<tr> 			<th>Integer</th> 			<th>Binary</th> 		</tr> 		<tr> 			<td>2147483644</td> 			<td>01111111111111111111111111111100</td> 		</tr> 		<tr> 			<td>1073741822</td> 			<td>00111111111111111111111111111110</td> 		</tr> 	</tbody> </table> 

>[!warning]+ Constraints
>- `0 <= n <= 2^31 - 2`
>
>- `n` is even.
>
>
>
>
>
>
>
>
>Follow up: If this function is called many times, how would you optimize it?

---

## 💡 Solution 1: use format and int 
### Approach
- Fix the result as 32 bit

### Complexity Analysis
- **Time Complexity**: O(1)
- **Space Complexity**: O(1)

```python
class Solution:

	def reverseBits(self, n: int) -> int:
	
		result = int(format(n, '032b')[::-1], 2)
		
		return result
```


---

## 💡 Solution 2: Deal with multiple calls
### Approach
- If the function is called multiple times, doing same iterations would be a waste. Instead, make a dictionary to save cache.

### Complexity Analysis
- **Time Complexity**: O(1)
- **Space Complexity**: O(1)

```python
class Solution:
	def __init__(self):
		self.cache = {} # in case of multiple calls
	
	def reverseBits(self, n: int) -> int:
		if n in self.cache:
			return self.cache[n]
		
		result = int(format(n, '032b')[::-1], 2)
		self.cache[n] = result
		
		return result
```



---

## 📓 Hints & Reflections
No hints available.

### Reflections
-