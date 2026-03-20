---
created: 2026-03-20
completed: true
leetcode-index: "236"
link: https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree
difficulty: Medium
tags:
  - leetcode/problem
---

# Lowest Common Ancestor of a Binary Tree

## 📝 Problem Description
Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the <a href="https://en.wikipedia.org/wiki/Lowest_common_ancestor" target="_blank">definition of LCA on Wikipedia</a>: &ldquo;The lowest common ancestor is defined between two nodes `p` and `q` as the lowest node in `T` that has both `p` and `q` as descendants (where we allow <b>a node to be a descendant of itself</b>).&rdquo;

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)
>
>**Input**: `root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1`
>**Output**: `3`
>**Explanation**:
>The LCA of nodes 5 and 1 is 3. 

>[!Example]+ Example 2
>![](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)
>
>**Input**: `root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4`
>**Output**: `5`
>**Explanation**:
>The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition. 

>[!Example]+ Example 3
>**Input**: `root = [1,2], p = 1, q = 2`
>**Output**: `1
`

>[!warning]+ Constraints
>- The number of nodes in the tree is in the range `[2, 10^5]`.
>
>- `-10^9 <= Node.val <= 10^9`
>
>- All `Node.val` are unique.
>
>- `p != q`
>
>- `p` and `q` will exist in the tree.

---

## 💡 Solution 1: DFS
### Approach
- Be careful with the order of queries

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
# Definition for a binary tree node.
# class TreeNode:
# def __init__(self, x):
# self.val = x
# self.left = None
# self.right = None

class Solution:
	def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
		def dfs(node, p, q):
		
			if not node:		
				return None 
			
			# ask this first so that if it meets the condition,
			# it doesn't need to process more
			if node == p or node == q:
				return node
			
			left = dfs(node.left, p, q)
			right = dfs(node.right, p, q)

			if left and right:		
				return node
			
			if left:
				return left
			
			if right:
				return right
			
			return dfs(root, p, q)
			```

```

---

## 📓 Hints & Reflections
No hints available.

### Reflections
-