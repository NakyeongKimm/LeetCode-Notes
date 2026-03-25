---
created: 2026-03-25
completed: true
leetcode-index: "605"
link: https://leetcode.com/problems/can-place-flowers
difficulty: Easy
tags:
  - leetcode/problem
---

# Can Place Flowers

## 📝 Problem Description
You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

Given an integer array `flowerbed` containing `0`'s and `1`'s, where `0` means empty and `1` means not empty, and an integer `n`, return `true` *if* `n` *new flowers can be planted in the* `flowerbed` *without violating the no-adjacent-flowers rule and* `false` *otherwise*.

 

>[!Example]+ Example 1
>**Input**: `flowerbed = [1,0,0,0,1], n = 1`
>**Output**: `true
`

>[!Example]+ Example 2
>**Input**: `flowerbed = [1,0,0,0,1], n = 2`
>**Output**: `false
`

>[!warning]+ Constraints
>- `1 <= flowerbed.length <= 2 * 10^4`
>
>- `flowerbed[i]` is `0` or `1`.
>
>- There are no two adjacent flowers in `flowerbed`.
>
>- `0 <= n <= flowerbed.length`

---

## 💡 Solution 1: (Name)
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(1)

```python
class Solution:
	def canPlaceFlowers(self, flowerbed: List[int], n: int) -> bool:
		
		if n == 0:
			return True
		
		i = 0
		f = len(flowerbed)
		
		while n > 0 and i < f:
			left = flowerbed[i-1] if i > 0 else 0
			right = flowerbed[i+1] if i < f-1 else 0
		
		if flowerbed[i] == 0:
			if left == 0 and right == 0:
				n -= 1	
				i += 2
			else:
				i += 1
		
		else:
			i += 2
		
		if n == 0:	
			return True
		
		
		return False
```



---

## 📓 Hints & Reflections
No hints available.

### Reflections
-