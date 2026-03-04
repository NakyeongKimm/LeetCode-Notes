---
created: 2026-03-04
completed: true
leetcode-index: "637"
link: https://leetcode.com/problems/average-of-levels-in-binary-tree
difficulty: Easy
tags:
  - leetcode/problem
---

# Average of Levels in Binary Tree

## 📝 Problem Description
Given the `root` of a binary tree, return *the average value of the nodes on each level in the form of an array*. Answers within `10^-5` of the actual answer will be accepted.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2021/03/09/avg1-tree.jpg)
>
>**Input**: `root = [3,9,20,null,null,15,7]`
>**Output**: `[3.00000,14.50000,11.00000]`
>**Explanation**:
>The average value of nodes on level 0 is 3, on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11]. 

>[!Example]+ Example 2
>![](https://assets.leetcode.com/uploads/2021/03/09/avg2-tree.jpg)
>
>**Input**: `root = [3,9,20,15,7]`
>**Output**: `[3.00000,14.50000,11.00000]
`

>[!warning]+ Constraints
>- The number of nodes in the tree is in the range `[1, 10^4]`.
>
>- `-2^31 <= Node.val <= 2^31 - 1`

---

## 💡 Solution 1: BFS
### Approach
- Use deque to use leftpop and conduct breadth-first search

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(M)

```python
# Definition for a binary tree node.
# class TreeNode:
	# def __init__(self, val=0, left=None, right=None):
		# self.val = val
		# self.left = left
		# self.right = right

from collections import deque

class Solution:
	def averageOfLevels(self, root: Optional[TreeNode]) -> List[float]:

		result = []
		queue = deque([root])
		

		while queue:
			level_size = len(queue)
			level_sum = 0

		for _ in range(level_size):
			node = queue.popleft()
			level_sum += node.val
		
			if node.left:
				queue.append(node.left)
			
			if node.right:		
				queue.append(node.right)
		
			result.append(level_sum / level_size)
		
		return result
```


---

## 💡 Solution 2: DFS
### Approach
- If approaching the level for the first time, append a new list.
- If approaching the level after that, add the node value to the sum and 1 to the count.

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(W)

```python
class Solution:
	def averageOfLevels(self, root):

		level_sum = []
		
		def dfs(node, level):
		
			if not node:
				return
			
			# seeing this level for the first time
			if level == len(level_sum):
				level_sum.append([node.val, 1])
			
			else:
				level_sum[level][0] += node.val	
				level_sum[level][1] += 1
			
			dfs(node.left, level + 1)
			dfs(node.right, level + 1)
		
		dfs(root, 0)
		
		return [s / c for s, c in level_sum]
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- If the tree is deep and narrow -> BFS is better. (memory-wise, space-complexity)
- If the tree is wide and shallow -> DFS is better. (memory-wise, space-complexity)