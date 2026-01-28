---
created: 2026-01-28
completed: true
leetcode-index: "167"
link: https://leetcode.com/problems/two-sum-ii-input-array-is-sorted
difficulty: Medium
tags:
  - programming/practice
  - leetcode/problem
---

# Two Sum II - Input Array Is Sorted

## 📝 Problem Description
Given a 1-indexed array of integers `numbers` that is already *sorted in non-decreasing order*, find two numbers such that they add up to a specific `target` number. Let these two numbers be `numbers[index<sub>1</sub>]` and `numbers[index<sub>2</sub>]` where `1 <= index<sub>1</sub> < index<sub>2</sub> <= numbers.length`.

Return* the indices of the two numbers, *`index<sub>1</sub>`* and *`index<sub>2</sub>`*, added by one as an integer array *`[index<sub>1</sub>, index<sub>2</sub>]`* of length 2.*

The tests are generated such that there is exactly one solution. You may not use the same element twice.

Your solution must use only constant extra space.

 

>[!Example]+ Example 1
>**Input**: `numbers = [<u>2</u>,<u>7</u>,11,15], target = 9`
>**Output**: `[1,2]`
>**Explanation**:
>The sum of 2 and 7 is 9. Therefore, index<sub>1</sub> = 1, index<sub>2</sub> = 2. We return [1, 2]. 

>[!Example]+ Example 2
>**Input**: `numbers = [<u>2</u>,3,<u>4</u>], target = 6`
>**Output**: `[1,3]`
>**Explanation**:
>The sum of 2 and 4 is 6. Therefore index<sub>1</sub> = 1, index<sub>2</sub> = 3. We return [1, 3]. 

>[!Example]+ Example 3
>**Input**: `numbers = [<u>-1</u>,<u>0</u>], target = -1`
>**Output**: `[1,2]`
>**Explanation**:
>The sum of -1 and 0 is -1. Therefore index<sub>1</sub> = 1, index<sub>2</sub> = 2. We return [1, 2]. 

>[!warning]+ Constraints
>- `2 <= numbers.length <= 3 * 10^4`
>
>- `-1000 <= numbers[i] <= 1000`
>
>- `numbers` is sorted in non-decreasing order.
>
>- `-1000 <= target <= 1000`
>
>- The tests are generated such that there is exactly one solution.

---

## 💡 Solution 1: (Name)
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O()
- **Space Complexity**: O()

```python
class Solution:
	def twoSum(self, numbers: List[int], target: int) -> List[int]:
		
		p1 = 0
		p2 = len(numbers)-1
		
		while numbers[p1] + numbers[p2] != target:
			if numbers[p1] + numbers[p2] > target:
				p2 -= 1
			elif numbers[p1] + numbers[p2] < target:
				p1 += 1
		
		return (p1+1, p2+1)
```


---


## 📓 Hints & Reflections
No hints available.

### Reflections
-