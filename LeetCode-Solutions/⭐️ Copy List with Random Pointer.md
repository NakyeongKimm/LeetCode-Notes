---
created: 2026-01-10
completed: true
leetcode-index: "138"
link: https://leetcode.com/problems/copy-list-with-random-pointer/
difficulty: Medium
tags:
  - programming/practice
  - leetcode/problem
---

# Copy List with Random Pointer

## 📝 Problem Description
A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.  Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.  For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.  Return the head of the copied linked list.  The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:  val: an integer representing Node.val random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node. Your code will only be given the head of the original linked list.

---

## 💡 Solution 1: Hash Map
### Approach
- Make a hash map that connects old nodes to new nodes and create values, next and random for new nodes based on the information of hash map.

### Complexity Analysis
- **Time Complexity**: O(N)
	- While making a hash map is O(N), looking at it is O(1) so O(N*1)
- **Space Complexity**: O(N)

```python
"""
# Definition for a Node.
class Node:
	def __init__(self, x, next=None, random=None):
		self.val = int(x)
		self.next = next
		self.random = random
"""

class Solution(object):
	def copyRandomList(self, head):
		"""
		:type head: Node
		:rtype: Node
		"""
		
		if head is None:
			return None
		
		old_to_new = {} # create a hash map
		current = head
		
		# first loop to fill the hash 
		while current:
			new_node = Node(current.val)	
			old_to_new[current] = new_node
			current = current.next
		
		# second loop to deep copy
		current = head
			
		while current:
			new_node = old_to_new[current]
		
			if current.next:
				new_node.next = old_to_new[current.next]
			
			if current.random:
				new_node.random = old_to_new[current.random]
				current = current.next  
		
		return old_to_new[head]
```


```python
# remove redundant parts of solution 1

def copyRandomList(self, head):
    if not head:
        return None
    
    old_to_new = {None: None}  # None mapping
    
    current = head
    while current:
		# if there isn't the node
        if current not in old_to_new:
            old_to_new[current] = Node(current.val)
        
        # if current.next exists but not in the hash map
        if current.next and current.next not in old_to_new:
            old_to_new[current.next] = Node(current.next.val)
        old_to_new[current].next = old_to_new.get(current.next)
        
        # if current.random exists but not in the hash map
        if current.random and current.random not in old_to_new:
            old_to_new[current.random] = Node(current.random.val)
        old_to_new[current].random = old_to_new.get(current.random)
        
        current = current.next
    
    return old_to_new[head]
```



---

## 💡 Solution 2: Interweave and Separate
### Approach
- To save space, don't create new hash maps but put a new node between original nodes and separate afterwards.

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(1)

```python

def copyRandomList(self, head):
    if not head:
        return None
    
    # A → B → C  =>  A → A' → B → B' → C → C'
    current = head
    while current:
        new_node = Node(current.val)
        new_node.next = current.next
        current.next = new_node
        current = new_node.next  
    
    # connect random pointer
    current = head
    while current:
        if current.random:
            current.next.random = current.random.next
        current = current.next.next  # only the original
    
    # separate
    current = head
    new_head = head.next
    while current:
        new_node = current.next
        current.next = new_node.next  # back to original
        if new_node.next:
            new_node.next = new_node.next.next
        current = current.next
    
    return new_head
```


---

## 📓 Hints & Reflections

>[!Hint]- Hint 1
Just iterate the linked list and create copies of the nodes on the go. Since a node can be referenced from multiple nodes due to the random pointers, ensure you are not making multiple copies of the same node.

---

>[!Hint]- Hint 2
You may want to use extra space to keep old_node ---> new_node mapping to prevent creating multiple copies of the same node.

---

>[!Hint]- Hint 3
We can avoid using extra space for old_node ---> new_node mapping by tweaking the original linked list. Simply interweave the nodes of the old and copied list. For example: Old List: A --> B --> C --> D InterWeaved List: A --> A' --> B --> B' --> C --> C' --> D --> D'

---

>[!Hint]- Hint 4
The interweaving is done using next pointers and we can make use of interweaved structure to get the correct reference nodes for random pointers.

### Reflections
- Be aware of both solutions, using a hash map and interweaving. Understand and try to use them first!