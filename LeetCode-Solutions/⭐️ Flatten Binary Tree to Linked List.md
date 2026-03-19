---
created: "2026-03-19"
completed: false
leetcode-index: "114"
link: "https://leetcode.com/problems/flatten-binary-tree-to-linked-list"
difficulty: "Medium"
tags:
  - leetcode/problem
---

# Flatten Binary Tree to Linked List

## 📝 Problem Description
Given the `root` of a binary tree, flatten the tree into a "linked list":

	
- The "linked list" should use the same `TreeNode` class where the `right` child pointer points to the next node in the list and the `left` child pointer is always `null`.
	
- The "linked list" should be in the same order as a <a href="https://en.wikipedia.org/wiki/Tree_traversal#Pre-order,_NLR" target="_blank">pre-order traversal</a> of the binary tree.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2021/01/14/flaten.jpg)
>
>**Input**: `root = [1,2,5,3,4,null,6]`
>**Output**: `[1,null,2,null,3,null,4,null,5,null,6]
`

>[!Example]+ Example 2
>**Input**: `root = []`
>**Output**: `[]
`

>[!Example]+ Example 3
>**Input**: `root = [0]`
>**Output**: `[0]
`

>[!warning]+ Constraints
>- The number of nodes in the tree is in the range `[0, 2000]`.
>
>- `-100 <= Node.val <= 100`
>
>
>
>
>
>
>Follow up: Can you flatten the tree in-place (with `O(1)` extra space)?

---

## 💡 Solution 1: DFS
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(N)

```python
# Definition for a binary tree node.
# class TreeNode:
	# def __init__(self, val=0, left=None, right=None):
		# self.val = val
		# self.left = left
		# self.right = right

class Solution:
	def flatten(self, root: Optional[TreeNode]) -> None:
		"""
		Do not return anything, modify root in-place instead.
		"""

		def dfs(node):
			if not node:
				return None

			left_tail = dfs(node.left)
			right_tail = dfs(node.right)
			
			if node.left:
				left_tail.right = node.right
				node.right = node.left
			
			node.left = None
			
			return right_tail or left_tail or node
			
		dfs(root)
```


---

## 💡 Solution 2: (Name)
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O()
- **Space Complexity**: O()

```python
# Solution 2 Code Here
```


---

## 💡 Solution 3: (Name)
### Approach
- 

### Complexity Analysis
- **Time Complexity**: O()
- **Space Complexity**: O()

```python
# Solution 3 Code Here
```


---

## 📓 Hints & Reflections
>[!Hint]- Hint 1
>If you notice carefully in the flattened tree, each node's right child points to the next node of a pre-order traversal.

### Reflections
-