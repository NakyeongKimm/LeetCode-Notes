---
created: 2026-01-16
completed: true
leetcode-index: "226"
link: https://leetcode.com/problems/invert-binary-tree
difficulty: Easy
tags:
  - programming/practice
  - leetcode/problem
---

# Invert Binary Tree

## 📝 Problem Description
Given the `root` of a binary tree, invert the tree, and return *its root*.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2021/03/14/invert1-tree.jpg)
>
>**Input**: `root = [4,2,7,1,3,6,9]`
>**Output**: `[4,7,2,9,6,3,1]
`

>[!Example]+ Example 2
>![](https://assets.leetcode.com/uploads/2021/03/14/invert2-tree.jpg)
>
>**Input**: `root = [2,1,3]`
>**Output**: `[2,3,1]
`

>[!Example]+ Example 3
>**Input**: `root = []`
>**Output**: `[]
`

>[!warning]+ Constraints
>- The number of nodes in the tree is in the range `[0, 100]`.
>
>- `-100 <= Node.val <= 100`

---

## 💡 Solution 1: BFS
### Approach
- Check nodes each level and swap

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(W)

```python
# Definition for a binary tree node.
# class TreeNode(object):
	# def __init__(self, val=0, left=None, right=None):
		# self.val = val
		# self.left = left
		# self.right = right

from collections import deque

class Solution(object):
	def invertTree(self, root):
	"""
	:type root: Optional[TreeNode]
	:rtype: Optional[TreeNode]
	"""
	
		if not root:
			return root
		
		queue = deque([root])  
		
		while queue:
		
			for _ in range(len(queue)):
				node = queue.popleft()
				# swap left and right
				# subtrees remain the same
				node.left, node.right = node.right, node.left
				
				if node.left:
					queue.append(node.left)
	
				if node.right:		
					queue.append(node.right)
		
		return root
```


---

## 💡 Solution 2: Recursive
### Approach
- Recursively check and swap the left and right nodes of the subtree

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(H)

```python
class Solution:
	def invertTree(self, root):	
		if root:
			root.left, root.right = self.invertTree(root.right), self.invertTree(root.left)
		
		return root
```


---

## 💡 Solution 3: DFS
### Approach
- Same with BFS, just the difference of which node to check first

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(H)

```python
class Solution:
	def invertTree(root):
	
		if not root:	
			return None
		
		stack = [root]
	
		while stack:
			node = stack.pop()
			node.left, node.right = node.right, node.left
		
		if node.left:
			stack.append(node.left)
		
		if node.right:
			stack.append(node.right)
		
		return root
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Get used to BFS and Recursive