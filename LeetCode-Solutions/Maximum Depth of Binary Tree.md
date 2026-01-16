---
created: 2026-01-15
completed: true
leetcode-index: "104"
link: https://leetcode.com/problems/maximum-depth-of-binary-tree
difficulty: Easy
tags:
  - programming/practice
  - leetcode/problem
---

# Maximum Depth of Binary Tree

## 📝 Problem Description
Given the `root` of a binary tree, return *its maximum depth*.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2020/11/26/tmp-tree.jpg)
>
>**Input**: `root = [3,9,20,null,null,15,7]`
>**Output**: `3
`

>[!Example]+ Example 2
>**Input**: `root = [1,null,2]`
>**Output**: `2
`

>[!warning]+ Constraints
>- The number of nodes in the tree is in the range `[0, 10^4]`.
>
>- `-100 <= Node.val <= 100`

---

## 💡 Solution 1: Depth First Search (DFS)
### Approach
- DFS is the safest option when the tree is deep.
- Save (val, depth index) to stack, check the left and right nodes of the last stack using .pop(), and get the maximum length.

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

class Solution(object):
	def maxDepth(self, root):
	"""
	:type root: Optional[TreeNode]
	:rtype: int
	"""
	
		max_depth = 0
		
		if root == None:
			return max_depth  
		
		stack = [(root, 1)]
		
		while stack:
			node, depth = stack.pop()
			max_depth = max(max_depth, depth)
			
			if node.left:	
				stack.append((node.left, depth + 1))
			
			if node.right:
				stack.append((node.right, depth + 1))
		  
		
		return max_depth
```


---

## 💡 Solution 2: Recursion
### Approach
- Count self(1) and add 1 when every left/right node exists in the next level

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
class Solution(object):
	def maxDepth(self, root):
	"""
	:type root: Optional[TreeNode]
	:rtype: int
	"""
		if not root:
			return 0
		return 1 + max(self.maxDepth(root.left), self.maxDepth(root.right))
```


---

## 💡 Solution 3: Breadth-First Search (BFS)
### Approach
- Check all the nodes at every level 

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(W)
	- W = maximum width of widths

```python
from collections import deque

class Solution(object):

	def maxDepth(self, root):
	
		if not root:
			return 0
		
		queue = deque([root])
		depth = 0
		
		while queue:
			depth += 1
		
			for _ in range(len(queue)):
			
				node = queue.popleft() # first one
			
				if node.left:
					queue.append(node.left)
				
				if node.right:
					queue.append(node.right)
			
		return depth
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- DFS uses stack (LIFO) or recursion, whose space complexity is equivalent to the maximum depth of the tree.
- BFS uses queue (FIFO), whose space complexity is equivalent to the maximum width of the tree.
- Time complexity is equal to O(N) no matter what method is chosen, as the maximum depth problem requires visiting every node.