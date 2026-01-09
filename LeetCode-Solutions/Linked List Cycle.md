---
created: 2026-01-09
completed: true
leetcode-index: "141"
link: https://leetcode.com/problems/linked-list-cycle
difficulty: Easy
tags:
  - programming/practice
  - leetcode/problem
---

# Linked List Cycle

## 📝 Problem Description
Given `head`, the head of a linked list, determine if the linked list has a cycle in it.

There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. Note that `pos` is not passed as a parameter.

Return `true`* if there is a cycle in the linked list*. Otherwise, return `false`.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)
>
>**Input**: `head = [3,2,0,-4], pos = 1`
>**Output**: `true`
>**Explanation**:
>There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed). 

>[!Example]+ Example 2
>![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)
>
>**Input**: `head = [1,2], pos = 0`
>**Output**: `true`
>**Explanation**:
>There is a cycle in the linked list, where the tail connects to the 0th node. 

>[!Example]+ Example 3
>![](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)
>
>**Input**: `head = [1], pos = -1`
>**Output**: `false`
>**Explanation**:
>There is no cycle in the linked list. 

>[!warning]+ Constraints
>- The number of the nodes in the list is in the range `[0, 10^4]`.
>
>- `-10^5 <= Node.val <= 10^5`
>
>- `pos` is `-1` or a valid index in the linked-list.
>
>
>
>
>
>
>
>
>Follow up: Can you solve it using `O(1)` (i.e. constant) memory?

---

## 💡 Solution 1: Check if the pointer goes back to seen nodes
### Approach
- Save seen nodes as a list and check if the next pointer is in seen nodes or not

### Complexity Analysis
- **Time Complexity**: O(N)
	- set is faster than list, which would be O(N^2)
- **Space Complexity**: O(N)

```python
# Definition for singly-linked list. 
# class ListNode(object): 
	# def __init__(self, x): 
		# self.val = x 
		# self.next = None 

class Solution(object): 
	def hasCycle(self, head): 
	""" 
	:type head: ListNode 
	:rtype: bool 
	""" 
	node_seen = set() 
	cur = head 
	
	while cur is not None: 
		if cur in node_seen: 
			return True 
			node_seen.add(cur) 
			cur = cur.next 
	
	return False
```


---

## 💡 Solution 2: Floyd's Cycle Finding Algorithm - Use two pointers, fast and slow
### Approach
- Use two pointers in different speed and check if fast goes to None or fast catches up the slow one.

### Complexity Analysis
- **Time Complexity**: O(N)
	- Faster because it doesn't check the whole list
- **Space Complexity**: O(1)
	- The number of variables is always 2, fast and slow

```python
class Solution(object):
	def hasCycle(self, head):
	"""
	:type head: ListNode
	:rtype: bool
	"""
	
	# exception
	if head is None:
		return False
	
	slow = head
	fast = head.next
	
	while slow != fast:
		if fast is None or fast.next is None:
			return False
	
		slow = slow.next
		fast = fast.next.next # move faster
	
	return True
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Concept of linked list - head = the first node
- When saving a node to the list or set, what is saved is the node, not the value. There can be duplicate values, but each node is unique.