---
created: 2026-01-30
completed: true
leetcode-index: "15"
link: https://leetcode.com/problems/3sum
difficulty: Medium
tags:
  - leetcode/problem
  - leetcode/pointers
---

# 3Sum

## 📝 Problem Description
Given an integer array nums, return all the triplets `[nums[i], nums[j], nums[k]]` such that `i != j`, `i != k`, and `j != k`, and `nums[i] + nums[j] + nums[k] == 0`.

Notice that the solution set must not contain duplicate triplets.

 

>[!Example]+ Example 1
>**Input**: `nums = [-1,0,1,2,-1,-4]`
>**Output**: `[[-1,-1,2],[-1,0,1]]`
>**Explanation**:
>nums[0] + nums[1] + nums[2] = (-
> 1) + 0 + 1 = 0. nums[1] + nums[2] + nums[4] = 0 + 1 + (-
> 1) = 0. nums[0] + nums[3] + nums[4] = (-
> 1) + 2 + (-
> 1) = 0. The distinct triplets are [-1,0,1] and [-1,-1,2]. Notice that the order of the output and the order of the triplets does not matter. 

>[!Example]+ Example 2
>**Input**: `nums = [0,1,1]`
>**Output**: `[]`
>**Explanation**:
>The only possible triplet does not sum up to 0. 

>[!Example]+ Example 3
>**Input**: `nums = [0,0,0]`
>**Output**: `[[0,0,0]]`
>**Explanation**:
>The only possible triplet sums up to 0. 

>[!warning]+ Constraints
>- `3 <= nums.length <= 3000`
>
>- `-10^5 <= nums[i] <= 10^5`

---

## 💡 Solution 1: sort and two pointers
### Approach
- Using 3 loops cause time limit excess.
- Without sorting and passing duplicates, it causes memory limit excess.
- Therefore, we should sort first and pass duplicates to efficiently solve the problem.

### Complexity Analysis
- **Time Complexity**: O($N^2$)
- **Space Complexity**: O(N)

```python
class Solution:
	def threeSum(self, nums: List[int]) -> List[List[int]]:

		if len(nums) < 3:
			return []

		res = []
		nums.sort()
		
		for i in range(len(nums) - 2):
			
			# for positive number
			if nums[i] > 0:
				break
			
			# pass duplicates
			if i > 0 and nums[i] == nums[i-1]:
				continue
			
			left = i + 1
			right = len(nums) - 1

			while left < right:
				total = nums[i] + nums[left] + nums[right]

				if total == 0:
					res.append([nums[i], nums[left], nums[right]])
				
					# pass duplicates and move to the last duplicate
					while left < right and nums[left] == nums[left + 1]:
						left += 1
					
					# pass duplicates and move to the last duplicate
					while left < right and nums[right] == nums[right - 1]:
						right -= 1
					
					left += 1
					right -= 1
				
				elif total > 0:
					right -= 1
				
				else:
					left += 1
		
		return res
```


---

## 💡 Solution 2: Use 2Sum hashmap on 3Sum
### Approach
- save already seen values in seen as {val: val1_idx}
- complement is the third number that the sum of 2 is looking for to sum up to 0
- if we find the complement in seen and its val1_idx matches the current val1_idx, add to res
- use set to deal with duplicates and return a list comprehension form
### Complexity Analysis
- **Time Complexity**: O($N^2$)
- **Space Complexity**: O(N)

```python
class Solution:

	def threeSum(self, nums: List[int]) -> List[List[int]]:
		
		res = set()
		dups = set()
		seen = {}
		
		for i, val1 in enumerate(nums):
			if val1 not in dups:
				dups.add(val1)
			
				for j, val2 in enumerate(nums[i+1:]):
					complement = -val1 - val2
					
					if complement in seen and seen[complement] == i:
						res.add(tuple(sorted([val1, val2, complement])))
					
					seen[val2] = i
		
		return [list(t) for t in res]
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
>[!Hint]- Hint 1
>So, we essentially need to find three numbers x, y, and z such that they add up to the given value. If we fix one of the numbers say x, we are left with the two-sum problem at hand!

>[!Hint]- Hint 2
>For the two-sum problem, if we fix one of the numbers, say x, we have to scan the entire array to find the next number y, which is value - x where value is the input parameter. Can we change our array somehow so that this search becomes faster?

>[!Hint]- Hint 3
>The second train of thought for two-sum is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?

### Reflections
- While using sort and two pointers already have optimal complexities, knowing the application of 2sum idea on 3sum would be beneficial.