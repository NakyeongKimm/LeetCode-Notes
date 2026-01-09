---
created: 2026-01-09
completed: true
leetcode-index: "21"
link: https://leetcode.com/problems/merge-two-sorted-lists
difficulty: Easy
tags:
  - programming/practice
  - leetcode/problem
---

# Merge Two Sorted Lists

## 📝 Problem Description
You are given the heads of two sorted linked lists `list1` and `list2`.

Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return *the head of the merged linked list*.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)
>
>**Input**: `list1 = [1,2,4], list2 = [1,3,4]`
>**Output**: `[1,1,2,3,4,4]
`

>[!Example]+ Example 2
>**Input**: `list1 = [], list2 = []`
>**Output**: `[]
`

>[!Example]+ Example 3
>**Input**: `list1 = [], list2 = [0]`
>**Output**: `[0]
`

>[!warning]+ Constraints
>- The number of nodes in both lists is in the range `[0, 50]`.
>
>- `-100 <= Node.val <= 100`
>
>- Both `list1` and `list2` are sorted in non-decreasing order.

---

## 💡 Solution 1: use one dummy node and connect
### Approach
- Make a dummy node and link the lists based on the value

### Complexity Analysis
- **Time Complexity**: O(n+m)
	- two lists
- **Space Complexity**: O(1)
	- adding only one dummy node

```python
# Definition for singly-linked list.
# class ListNode(object):
	# def __init__(self, val=0, next=None):
		# self.val = val
		# self.next = next

class Solution(object):
	def mergeTwoLists(self, list1, list2):
	"""
	:type list1: Optional[ListNode]
	:type list2: Optional[ListNode]
	:rtype: Optional[ListNode]
	"""
	
	dummy = ListNode(0) # will not be used later
	current = dummy
	
	while (list1 is not None) and (list2 is not None):
	
		if list1.val >= list2.val:
			current.next = list2
			list2 = list2.next
			current = current.next

		else:
			current.next = list1
			list1 = list1.next
			current = current.next
	
	  
	# linked lists are already connected inside them
	if list1 is not None:
		current.next = list1
	
	if list2 is not None:
		current.next = list2

	return dummy.next
```


---

## 💡 Solution 2: Recursion
### Approach
- Recursive approach by calling the function itself inside the function call
```
list1: 1 → 4 → 7 (n = 3) 
list2: 2 → 3 → 5 → 6 (m = 4)
┌──────────────────────────┐ 
│ merge(1→4→7, 2→3→5→6)    │ ← 1
│ merge(4→7, 2→3→5→6)      │ ← 2 
│ merge(4→7, 3→5→6)        │ ← 3 
│ merge(4→7, 5→6)          │ ← 4 
│ merge(4→7, 6)            │ ← 5 
│ merge(7, 6)              │ ← 6 
│ merge(7, None)           │ ← 7 
└──────────────────────────┘ 7 = n+m in total
```

### Complexity Analysis
- **Time Complexity**: O(n+m)
- **Space Complexity**: O(n+m)
	- recursive calls are stacked.

```python
class Solution:
    def mergeTwoLists(self, l1, l2):
        if l1 is None:
            return l2
        elif l2 is None:
            return l1
        elif l1.val < l2.val:
            l1.next = self.mergeTwoLists(l1.next, l2)
            return l1
        else:
            l2.next = self.mergeTwoLists(l1, l2.next)
            return l2
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Remember that the nodes of linked list are already connected!
- Take advantage of making a dummy node, and make as less dummy nodes as possible.