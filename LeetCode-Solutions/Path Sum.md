---
created: 2026-03-01
completed: true
leetcode-index: "112"
link: https://leetcode.com/problems/path-sum
difficulty: Easy
tags:
  - leetcode/problem
---

# Path Sum

## 📝 Problem Description
Given the `root` of a binary tree and an integer `targetSum`, return `true` if the tree has a root-to-leaf path such that adding up all the values along the path equals `targetSum`.

A leaf is a node with no children.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2021/01/18/pathsum1.jpg)
>
>**Input**: `root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22`
>**Output**: `true`
>**Explanation**:
>The root-to-leaf path with the target sum is shown. 

>[!Example]+ Example 2
>![](https://assets.leetcode.com/uploads/2021/01/18/pathsum2.jpg)
>
>**Input**: `root = [1,2,3], targetSum = 5`
>**Output**: `false`
>**Explanation**:
>There are two root-to-leaf paths in the tree: (1 --> 
> 2) : The sum is 3. (1 --> 
> 3) : The sum is 4. There is no root-to-leaf path with sum = 5. 

>[!Example]+ Example 3
>**Input**: `root = [], targetSum = 0`
>**Output**: `false`
>**Explanation**:
>Since the tree is empty, there are no root-to-leaf paths. 

>[!warning]+ Constraints
>- The number of nodes in the tree is in the range `[0, 5000]`.
>
>- `-1000 <= Node.val <= 1000`
>
>- `-1000 <= targetSum <= 1000`

---

## 💡 Solution 1: Find a leaf based on DFS
### Approach
- Add til dfs reaches leaf (no left/right)

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(H)

```python
# Definition for a binary tree node.
# class TreeNode:
	# def __init__(self, val=0, left=None, right=None):
		# self.val = val
		# self.left = left
		# self.right = right

class Solution:
	def hasPathSum(self, root: Optional[TreeNode], targetSum: int) -> bool:
		if not root:	
			return False
	
		return self.dfs(root, 0, targetSum)
		
	def dfs(self, node, current_sum, targetSum):
		
		if not node:
			return False
			
		current_sum += node.val
		
		if not node.left and not node.right:
			return current_sum == targetSum
		
		return self.dfs(node.left, current_sum, targetSum) or self.dfs(node.right, current_sum, targetSum)
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-