---
created: 2026-01-16
completed: true
leetcode-index: "101"
link: https://leetcode.com/problems/symmetric-tree
difficulty: Easy
tags:
  - leetcode/problem
  - leetcode/binary-tree
---

# Symmetric Tree

## 📝 Problem Description
Given the `root` of a binary tree, *check whether it is a mirror of itself* (i.e., symmetric around its center).

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2021/02/19/symtree1.jpg)
>
>**Input**: `root = [1,2,2,3,4,4,3]`
>**Output**: `true
`

>[!Example]+ Example 2
>![](https://assets.leetcode.com/uploads/2021/02/19/symtree2.jpg)
>
>**Input**: `root = [1,2,2,null,3,null,3]`
>**Output**: `false
`

>[!warning]+ Constraints
>- The number of nodes in the tree is in the range `[1, 1000]`.
>
>- `-100 <= Node.val <= 100`
>
>
>
>
>
>
>Follow up: Could you solve it both recursively and iteratively?

---

## 💡 Solution 1: BFS
### Approach
- save the subtrees and check that the subtrees of them are symmetric

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
# Definition for a binary tree node.
# class TreeNode(object):
	# def __init__(self, val=0, left=None, right=None):
	# self.val = val
	# self.left = left
	# self.right = right

from collections import deque

class Solution(object):
	def isSymmetric(self, root):
	"""
	:type root: Optional[TreeNode]
	:rtype: bool
	"""
		if not root:
			return None
		
		queue = deque([(root.left, root.right)])
		
		while queue:
			node1, node2 = queue.popleft()
		
		# to handle null
		if not node1 and not node2:	
			continue
		
		if not node1 or not node2:	
			return False
		
		if node1.val != node2.val:
			return False
		
		# check if node1.left == node2.right and vice versa
		queue.append([node1.left, node2.right])	
		queue.append([node1.right, node2.left])  
		
		return True
```


---

## 💡 Solution 2: Recursive
### Approach
- Make a function that takes two nodes (initially the same root) and compares them in a mirrored way: check if their values are equal, then recursively compare t1's left with t2's right, and t1's right with t2's left.
- Recursively call the function to check subtrees.

### Complexity Analysis
- **Time Complexity**: O(n)
- **Space Complexity**: O(h)
	- O(logN) when the tree is balanced

```python
class Solution:
    def isSymmetric(self, root):
        return self.isMirror(root, root)

    def isMirror(self, t1, t2):
        if t1 is None and t2 is None:
            return True
        if t1 is None or t2 is None:
            return False
        return (
            (t1.val == t2.val)
            and self.isMirror(t1.right, t2.left)
            and self.isMirror(t1.left, t2.right)
        )
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Recursive approach to use helper function!