---
created: 2026-01-19
completed: true
leetcode-index: "202"
link: https://leetcode.com/problems/happy-number
difficulty: Easy
tags:
  - leetcode/problem
  - leetcode/hash-table
---

# Happy Number

## 📝 Problem Description
Write an algorithm to determine if a number `n` is happy.

A happy number is a number defined by the following process:

	
- Starting with any positive integer, replace the number by the sum of the squares of its digits.
	
- Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
	
- Those numbers for which this process ends in 1 are happy.

Return `true` *if* `n` *is a happy number, and* `false` *if not*.

 

>[!Example]+ Example 1
>**Input**: `n = 19`
>**Output**: `true`
>**Explanation**:
>1^2 + 9^2 = 82 8^2 + 2^2 = 68 6^2 + 8^2 = 100 1^2 + 0^2 + 0^2 = 1 

>[!Example]+ Example 2
>**Input**: `n = 2`
>**Output**: `false
`

>[!warning]+ Constraints
>- `1 <= n <= 2^31 - 1`

---

## 💡 Solution 1: Stop Loop with set
### Approach
- update temp and check if the number is happy or not
- stop the loop when it finds the endless cycle

### Complexity Analysis
- **Time Complexity**: O(logN)
- **Space Complexity**: O(logN)

```python
class Solution(object):
	def isHappy(self, n):
		"""
		:type n: int
		:rtype: bool
		"""
	
		temp = 0
		cycle = set()
		num_str = str(n)
		
		while temp != 1:
			temp = 0

			for i in range(len(num_str)):
				temp += int(num_str[i])**2
			
			num_str = str(temp)
			
			if temp in cycle:
				return False
		
			cycle.add(temp)
		
		return True
```


---

## 💡 Solution 2: Floyd's Cycle-Finding Algorithm
### Approach
- Floyd's Cycle-Finding: Fast will catch slow if there is a cycle
- It cannot bypass 1 as 1 will remain

### Complexity Analysis
- **Time Complexity**: O(LogN)
- **Space Complexity**: O(1)
	- It only needs two variables: slow and fast

```python
class Solution(object):
	def isHappy(self, n):
	"""
	:type n: int
	:rtype: bool
	"""
	
		def get_next(number):
			total = 0
			
			while number > 0:
				number, digit = divmod(number, 10)
				total += digit ** 2
			
			return total	  
		
		slow = n
		fast = get_next(n)

		while fast != 1 and slow != fast:
			slow = get_next(slow)
			fast = get_next(get_next(fast))	  
		
		return fast == 1
```

---

## 📓 Hints & Reflections
No hints available.

### Reflections
- While this problem is intended to use hashmap (set), we can consider using Floyd's cycle detection algorithm to optimize the space.