---
created: 2026-03-01
completed: true
leetcode-index: "530"
link: https://leetcode.com/problems/minimum-absolute-difference-in-bst
difficulty: Easy
tags:
  - leetcode/problem
---

# Minimum Absolute Difference in BST

## 📝 Problem Description
Given the `root` of a Binary Search Tree (BST), return *the minimum absolute difference between the values of any two different nodes in the tree*.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2021/02/05/bst1.jpg)
>
>**Input**: `root = [4,2,6,1,3]`
>**Output**: `1
`

>[!Example]+ Example 2
>![](https://assets.leetcode.com/uploads/2021/02/05/bst2.jpg)
>
>**Input**: `root = [1,0,48,null,null,12,49]`
>**Output**: `1
`

>[!warning]+ Constraints
>- The number of nodes in the tree is in the range `[2, 10^4]`.
>
>- `0 <= Node.val <= 10^5`
>
>
>
>
>
>
>
>
>Note: This question is the same as 783: <a href="https://leetcode.com/problems/minimum-distance-between-bst-nodes/" target="_blank">https://leetcode.com/problems/minimum-distance-between-bst-nodes/</a>

---

## 💡 Solution 1: BST 
### Approach
- BST is sorted if we follow left-current-right order because its left node is always smaller than the current one and its right node is always bigger than it.

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
	def getMinimumDifference(self, root: Optional[TreeNode]) -> int:
		values = [] 
		
		def dfs(node):
			if node is None:
				return
			
			dfs(node.left)
			values.append(node.val)
			dfs(node.right)
		
		dfs(root)

		# In BST, left is always smaller than the current
		# and right is always bigger than the current
		# values.sort()
		
		min_diff = 100000
		for i in range(1, len(values)):	
			min_diff = min(min_diff, (values[i]-values[i-1]))
		
		return min_diff
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-