---
created: 2026-03-16
completed: true
leetcode-index: "199"
link: https://leetcode.com/problems/binary-tree-right-side-view
difficulty: Medium
tags:
  - leetcode/problem
---

# Binary Tree Right Side View

## 📝 Problem Description
Given the `root` of a binary tree, imagine yourself standing on the right side of it, return *the values of the nodes you can see ordered from top to bottom*.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2024/11/24/tmpd5jn43fs-1.png)
>
>**Input**: `root = [1,2,3,null,5,null,4]`
>**Output**: `[1,3,4]`
>**Explanation**:
>![](https://assets.leetcode.com/uploads/2024/11/24/tmpd5jn43fs-1.png) 

>[!Example]+ Example 2
>![](https://assets.leetcode.com/uploads/2024/11/24/tmpkpe40xeh-1.png)
>
>**Input**: `root = [1,2,3,4,null,null,null,5]`
>**Output**: `[1,3,4,5]`
>**Explanation**:
>![](https://assets.leetcode.com/uploads/2024/11/24/tmpkpe40xeh-1.png) 

>[!Example]+ Example 3
>**Input**: `root = [1,null,3]`
>**Output**: `[1,3]`

>[!Example]+ Example 4
>**Input**: `root = []`
>**Output**: `[]`

>[!warning]+ Constraints
>- The number of nodes in the tree is in the range `[0, 100]`.
>
>- `-100 <= Node.val <= 100`

---

## 💡 Solution 1: BFS
### Approach
- Use deque instead of list and pop(0) for better complexity

### Complexity Analysis
- **Time Complexity**: O(1)
- **Space Complexity**: O(n)

```python
# Definition for a binary tree node.
# class TreeNode:
# def __init__(self, val=0, left=None, right=None):
# self.val = val
# self.left = left
# self.right = right

from collections import deque


class Solution:
	def rightSideView(self, root: Optional[TreeNode]) -> List[int]:

		if not root:	
			return []
		
		queue = deque([root])
		res = []
		
		while queue:
			level_size = len(queue)
		
			for i in range(level_size):
			
				node = queue.popleft()
			
				if node.left:
					queue.append(node.left)
				
				if node.right:		
					queue.append(node.right)
				
				if i == level_size - 1:
					res.append(node.val)
		
		return res
```



---

## 📓 Hints & Reflections
No hints available.

### Reflections
- Space Complexity for BFS (in tree problem) is always O(N) as the worst case is always O(2/N)