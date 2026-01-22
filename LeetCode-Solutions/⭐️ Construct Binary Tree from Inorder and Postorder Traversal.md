---
created: 2026-01-22
completed: true
leetcode-index: "106"
link: https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal
difficulty: Medium
tags:
  - programming/practice
  - leetcode/problem
---

# Construct Binary Tree from Inorder and Postorder Traversal

## 📝 Problem Description
Given two integer arrays `inorder` and `postorder` where `inorder` is the inorder traversal of a binary tree and `postorder` is the postorder traversal of the same tree, construct and return *the binary tree*.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2021/02/19/tree.jpg)
>
>**Input**: `inorder = [9,3,15,20,7], postorder = [9,15,7,20,3]`
>**Output**: `[3,9,20,null,null,15,7]
`

>[!Example]+ Example 2
>**Input**: `inorder = [-1], postorder = [-1]`
>**Output**: `[-1]
`

>[!warning]+ Constraints
>- `1 <= inorder.length <= 3000`
>
>- `postorder.length == inorder.length`
>
>- `-3000 <= inorder[i], postorder[i] <= 3000`
>
>- `inorder` and `postorder` consist of unique values.
>
>- Each value of `postorder` also appears in `inorder`.
>
>- `inorder` is guaranteed to be the inorder traversal of the tree.
>
>- `postorder` is guaranteed to be the postorder traversal of the tree.

---

## 💡 Solution 1: Recursion
### Approach
- Find root from postorder and slicing point in inorder.
- Divide inorder and postorder based on the slicing point and recursively call the function itself.

### Complexity Analysis
- **Time Complexity**: O($N^2$)
	- index function (N) * list slicing
- **Space Complexity**: O($N^2$)
	- slicing makes copies, which will result in n(n+1)/2 copies $\approx N^2$

```python
# Definition for a binary tree node.
# class TreeNode(object):
	# def __init__(self, val=0, left=None, right=None):
		# self.val = val
		# self.left = left
		# self.right = right

class Solution(object):
	def buildTree(self, inorder, postorder):
	"""
	:type inorder: List[int]
	:type postorder: List[int]
	:rtype: Optional[TreeNode]
	"""
	
	if not inorder:
		return None
	
	root = TreeNode(postorder[-1])
	mid = inorder.index(postorder[-1])
	
	root.left = self.buildTree(inorder[:mid], postorder[:mid])
	root.right = self.buildTree(inorder[mid+1:], postorder[mid:-1])

	return root
```


---

## 💡 Solution 2: Hash Map with Helper Method
### Approach
- Use Hash Map for inorder list for better time complexity

### Complexity Analysis
- **Time Complexity**: O(N)
	- O(1) for N nodes
- **Space Complexity**: O(N)
	- no slicing, just using the original list

```python
class Solution(object):
	def buildTree(self, inorder, postorder):
		self.inorder_map = {val: idx for idx, val in enumerate(inorder)}
		self.post_idx = len(postorder) - 1
		self.postorder = postorder
		
			return self.build(0, len(inorder) - 1)
		
		def build(self, left, right):
		
			if left > right:
				return None
			
			root_val = self.postorder[self.post_idx]
			root = TreeNode(root_val)
			self.post_idx -= 1
			idx = self.inorder_map[root_val]
			root.right = self.build(idx + 1, right)
			root.left = self.build(left, idx - 1)
			
			return root
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Use Hash map for better time complexity
- Avoid using slicing for better space complexity