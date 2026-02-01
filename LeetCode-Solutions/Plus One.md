---
created: 2026-02-01
completed: true
leetcode-index: "66"
link: https://leetcode.com/problems/plus-one
difficulty: Easy
tags:
  - leetcode/problem
---

# Plus One

## 📝 Problem Description
You are given a large integer represented as an integer array `digits`, where each `digits[i]` is the `i^th` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return *the resulting array of digits*.

 

>[!Example]+ Example 1
>**Input**: `digits = [1,2,3]`
>**Output**: `[1,2,4]`
>**Explanation**:
>The array represents the integer 123. Incrementing by one gives 123 + 1 = 124. Thus, the result should be [1,2,4]. 

>[!Example]+ Example 2
>**Input**: `digits = [4,3,2,1]`
>**Output**: `[4,3,2,2]`
>**Explanation**:
>The array represents the integer 4321. Incrementing by one gives 4321 + 1 = 4322. Thus, the result should be [4,3,2,2]. 

>[!Example]+ Example 3
>**Input**: `digits = [9]`
>**Output**: `[1,0]`
>**Explanation**:
>The array represents the integer 9. Incrementing by one gives 9 + 1 = 10. Thus, the result should be [1,0]. 

>[!warning]+ Constraints
>- `1 <= digits.length <= 100`
>
>- `0 <= digits[i] <= 9`
>
>- `digits` does not contain any leading `0`'s.

---

## 💡 Solution 1
### Approach
- for loop from the end of the list, return when it is complete
- insert 1 to the beginning of the list when it was not returned in the for loop

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(1)

```python
class Solution:
	def plusOne(self, digits: List[int]) -> List[int]:
	
		for i in range(len(digits)-1, -1, -1):
	
			if digits[i] < 9:
				digits[i] += 1
				return digits

			else:
				digits[i] = 0
		
		  
		# when every elemnt is 0
		digits.insert(0, 1)

		return digits
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-