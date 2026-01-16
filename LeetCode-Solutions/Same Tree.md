---
created: 2026-01-15
completed: true
leetcode-index: "100"
link: https://leetcode.com/problems/same-tree
difficulty: Easy
tags:
  - programming/practice
  - leetcode/problem
---

# Same Tree

## 📝 Problem Description
Given the roots of two binary trees `p` and `q`, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2020/12/20/ex1.jpg)
>
>**Input**: `p = [1,2,3], q = [1,2,3]`
>**Output**: `true
`

>[!Example]+ Example 2
>![](https://assets.leetcode.com/uploads/2020/12/20/ex2.jpg)
>
>**Input**: `p = [1,2], q = [1,null,2]`
>**Output**: `false
`

>[!Example]+ Example 3
>![](https://assets.leetcode.com/uploads/2020/12/20/ex3.jpg)
>
>**Input**: `p = [1,2,1], q = [1,1,2]`
>**Output**: `false
`

>[!warning]+ Constraints
>- The number of nodes in both trees is in the range `[0, 100]`.
>
>- `-10^4 <= Node.val <= 10^4`

---

## 💡 Solution 1: BFS
### Approach
- Check every node at each level based on BFS approach

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(H)

```python
# Definition for a binary tree node.
# class TreeNode(object):
	# def __init__(self, val=0, left=None, right=None):
		# self.val = val
		# self.left = left
		# self.right = right

from collections import deque

class Solution(object):
	def isSameTree(self, p, q):
	"""
	:type p: Optional[TreeNode]
	:type q: Optional[TreeNode]
	:rtype: bool
	"""

		queue = deque([(p, q)])
		
		while queue:
			node1, node2 = queue.popleft()
			
			# both are None	
			if not node1 and not node2:
				continue
			
			# if only one of them is None or the value is not identical
			if not node1 or not node2 or node1.val != node2.val:
				return False
			
			queue.append((node1.left, node2.left))
			queue.append((node1.right, node2.right))
		
		return True
```


---

## 💡 Solution 2: DFS (recursion)
### Approach
- Recursive DFS, checking current node and left/right nodes 

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(H)

```python
class Solution(object):
	def isSameTree(self, p, q):
		"""
		:type p: Optional[TreeNode]
		:type q: Optional[TreeNode]
		:rtype: bool
		"""
	
		if not p and not q:
			return True
		
		if not p or not q or p.val != q.val:
			return False
		
		return self.isSameTree(p.left, q.left) and self.isSameTree(p.right, q.right)
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- While time complexity is the same, visiting every node, space complexity varies, BFS depending on width and DFS depending on height.
- Usually, DFS is better than BFS with binary tree problems, as O(H) < O(W) in most cases, and due to the simplicity of the code.