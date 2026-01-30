---
created: 2026-01-09
completed: true
leetcode-index: "2"
link: https://leetcode.com/problems/add-two-numbers
difficulty: Medium
tags:
  - leetcode/problem
  - leetcode/linked-list
---

# Add Two Numbers

## 📝 Problem Description
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2020/10/02/addtwonumber1.jpg)
>
>**Input**: `l1 = [2,4,3], l2 = [5,6,4]`
>**Output**: `[7,0,8]`
>**Explanation**:
>342 + 465 = 807. 

>[!Example]+ Example 2
>**Input**: `l1 = [0], l2 = [0]`
>**Output**: `[0]
`

>[!Example]+ Example 3
>**Input**: `l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]`
>**Output**: `[8,9,9,9,0,0,0,1]
`

>[!warning]+ Constraints
>- The number of nodes in each linked list is in the range `[1, 100]`.
>
>- `0 <= Node.val <= 9`
>
>- It is guaranteed that the list represents a number that does not have leading zeros.

---

## 💡 Solution 1: (Name)
### Approach
- Use a single while loop and use quotient and remainder to add up
- make 2 variables, val1 and val2, to handle the cases when one list is shorter than the other

### Complexity Analysis
- **Time Complexity**: O(max(m, n))
- **Space Complexity**: O(max(m, n))

```python
# Definition for singly-linked list.
# class ListNode(object):
	# def __init__(self, val=0, next=None):
		# self.val = val
		# self.next = next

	class Solution(object):
		def addTwoNumbers(self, l1, l2):
		"""
		:type l1: Optional[ListNode]
		:type l2: Optional[ListNode]
		:rtype: Optional[ListNode]
		"""
	
			dummy = ListNode(0)
			carry = 0
			current = dummy
			
			while l1 or l2 or carry: #consider carry here
				# to handle NONE
				val1 = l1.val if l1 else 0
				val2 = l2.val if l2 else 0
			
				total = val1 + val2 + carry	
				saved, rem = divmod(total, 10)
				current.next = ListNode(rem)
				current = current.next
				
				# move only if there's next node
				
				if l1:			
					l1 = l1.next
				if l2:
					l2 = l2.next
			
			return dummy.next
```

---

## 📓 Hints & Reflections
No hints available.

### Reflections
- There may be a solution converting each list into a number and adding up, which would be inefficient.
- Be aware of exceptions, such as different lengths or carry remaining after the two lists are ended.