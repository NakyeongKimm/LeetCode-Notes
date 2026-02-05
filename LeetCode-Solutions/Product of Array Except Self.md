---
created: 2026-02-05
completed: true
leetcode-index: "238"
link: https://leetcode.com/problems/product-of-array-except-self
difficulty: Medium
tags:
  - leetcode/problem
---

# Product of Array Except Self

## 📝 Problem Description
Given an integer array `nums`, return *an array* `answer` *such that* `answer[i]` *is equal to the product of all the elements of* `nums` *except* `nums[i]`.

The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in `O(n)` time and without using the division operation.

 

>[!Example]+ Example 1
>**Input**: `nums = [1,2,3,4]`
>**Output**: `[24,12,8,6]
`

>[!Example]+ Example 2
>**Input**: `nums = [-1,1,0,-3,3]`
>**Output**: `[0,0,9,0,0]
`

>[!warning]+ Constraints
>- `2 <= nums.length <= 10^5`
>
>- `-30 <= nums[i] <= 30`
>
>- The input is generated such that `answer[i]` is guaranteed to fit in a 32-bit integer.
>
>
>
>
>
>
>
>
>Follow up: Can you solve the problem in `O(1)` extra space complexity? (The output array does not count as extra space for space complexity analysis.)

---

## 💡 Solution 1: Make two lists and multiply them
### Approach
- This problem asks for multiplication except for a value in specific index. This can be calculated by multiplying left products and right products.
	- e.g. Input: [1,2,3,4] / left products: [1, 1, 2, 6] / right products: [24, 12, 4, 1] / output: [24, 12, 8, 6] = [1*24, 1*12, 2*4, 6*1]
- Output the result which is the multiplication of two lists using list comprehension.

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution: 
	def productExceptSelf(self, nums: List[int]) -> List[int]: 
		left = [] 
		right = [] 
		l = 1 
		r = 1 
		
		for i in range(0, len(nums)): 
			left.append(l) 
			right.append(r) 
			l *= nums[i] 
			r *= nums[len(nums) - 1 - i] 
			
		res = [l * r for l, r in zip(left, right[::-1])] 
		
		return res
```


---

## 💡 Solution 2: Improve Solution 1's Space Complexity
### Approach
- Instead of making 3 different lists, make only one list, res, and multiply everything to that.

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(1)

```python
class Solution: 
	def productExceptSelf(self, nums: List[int]) -> List[int]: 
		res = [] 
		l = 1 
		
		for i in range(len(nums)): 
			res.append(l) 
			l *= nums[i] 
			
		r = 1 
		for i in range(len(nums) - 1, -1, -1): 
			res[i] *= r #r *= nums[i] 
			
		return res
```


---

## 📓 Hints & Reflections
>[!Hint]- Hint 1
>Think how you can efficiently utilize prefix and suffix products to calculate the product of all elements except self for each index. Can you pre-compute the prefix and suffix products in linear time to avoid redundant calculations?

>[!Hint]- Hint 2
>Can you minimize additional space usage by reusing memory or modifying the input array to store intermediate results?

### Reflections
-