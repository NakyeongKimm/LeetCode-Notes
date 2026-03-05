---
created: 2026-03-05
completed: true
leetcode-index: "108"
link: https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
difficulty: Easy
tags:
  - leetcode/problem
---

# Convert Sorted Array to Binary Search Tree

## 📝 Problem Description
Given an integer array `nums` where the elements are sorted in ascending order, convert *it to a *<span data-keyword="height-balanced">*height-balanced*</span> *binary search tree*.

 

>[!Example]+ Example 1
>![](https://assets.leetcode.com/uploads/2021/02/18/btree1.jpg)
>
>**Input**: `nums = [-10,-3,0,5,9]`
>**Output**: `[0,-3,9,-10,null,5]`
>**Explanation**:
>[0,-10,5,null,-3,null,9] is also accepted: ![](https://assets.leetcode.com/uploads/2021/02/18/btree2.jpg) 

>[!Example]+ Example 2
>![](https://assets.leetcode.com/uploads/2021/02/18/btree.jpg)
>
>**Input**: `nums = [1,3]`
>**Output**: `[3,1]`
>**Explanation**:
>[1,null,3] and [3,1] are both height-balanced BSTs. 

>[!warning]+ Constraints
>- `1 <= nums.length <= 10^4`
>
>- `-10^4 <= nums[i] <= 10^4`
>
>- `nums` is sorted in a strictly increasing order.

---

## 💡 Solution 1: Recursive tree making
### Approach
- Because the numbers are already sorted and the goal is to make a BSF with same/1 diff sub-tree depths, make a helper function that calculates the index for the root and make sub-trees.

### Complexity Analysis
- **Time Complexity**: O(N)
- **Space Complexity**: O(logN)

```python
# Definition for a binary tree node.
# class TreeNode:
	# def __init__(self, val=0, left=None, right=None):
		# self.val = val
		# self.left = left
		# self.right = right

class Solution:
	def sortedArrayToBST(self, nums: List[int]) -> Optional[TreeNode]:

		# helper function for recursion
		def helper(left, right):
			if left > right:			
				return
			
			mid = (left + right) // 2
			node = TreeNode(nums[mid])
			
			node.left = helper(left, mid-1)
			node.right = helper(mid+1, right)
			
			return node

		return helper(0, len(nums)-1)
```


---


---

## 📓 Hints & Reflections
No hints available.

### Reflections
-