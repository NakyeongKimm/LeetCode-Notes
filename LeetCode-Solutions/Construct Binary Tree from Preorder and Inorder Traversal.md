---
created: 2026-01-21
completed: true
leetcode-index: "105"
link: https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal
difficulty: Medium
tags:
  - programming/practice
  - leetcode/problem
---

# Construct Binary Tree from Preorder and Inorder Traversal

## 📝 Problem Description
Given two integer arrays `preorder` and `inorder` where `preorder` is the preorder traversal of a binary tree and `inorder` is the inorder traversal of the same tree, construct and return *the binary tree*.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)
>
>**Input**: `preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]`
>**Output**: `[3,9,20,null,null,15,7]
`

>[!Example]+ Example 2
>**Input**: `preorder = [-1], inorder = [-1]`
>**Output**: `[-1]
`

>[!warning]+ Constraints
>- `1 <= preorder.length <= 3000`
>
>- `inorder.length == preorder.length`
>
>- `-3000 <= preorder[i], inorder[i] <= 3000`
>
>- `preorder` and `inorder` consist of unique values.
>
>- Each value of `inorder` also appears in `preorder`.
>
>- `preorder` is guaranteed to be the preorder traversal of the tree.
>
>- `inorder` is guaranteed to be the inorder traversal of the tree.

---

## 💡 Solution 1: Recursion
### Approach
- The first element of **preorder array** is **root**
- **inorder array** consists  of **left subtree, root of subtree and right subtree**.

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
	def buildTree(self, preorder, inorder):
	"""
	:type preorder: List[int]
	:type inorder: List[int]
	:rtype: Optional[TreeNode]
	"""
	
		if not preorder:
			return None
		
		root = TreeNode(preorder[0])
		mid = inorder.index(preorder[0])
		
		root.left = self.buildTree(preorder[1:mid+1], inorder[:mid])
		root.right = self.buildTree(preorder[mid+1:], inorder[mid+1:])
		
		return root
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Understand how the two given arrays consist a tree, comparing with the tree and the structures of two arrays.