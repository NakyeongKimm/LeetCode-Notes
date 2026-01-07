---
created: 2026-01-06
completed: true
leetcode-index: "380"
link: https://leetcode.com/problems/insert-delete-getrandom-o1
difficulty: Medium
tags:
  - programming/practice
  - leetcode/problem
---

# Insert Delete GetRandom O(1)

## 📝 Problem Description
Implement the `RandomizedSet` class:

	
- `RandomizedSet()` Initializes the `RandomizedSet` object.
	
- `bool insert(int val)` Inserts an item `val` into the set if not present. Returns `true` if the item was not present, `false` otherwise.
	
- `bool remove(int val)` Removes an item `val` from the set if present. Returns `true` if the item was present, `false` otherwise.
	
- `int getRandom()` Returns a random element from the current set of elements (it's guaranteed that at least one element exists when this method is called). Each element must have the <b>same probability</b> of being returned.

You must implement the functions of the class such that each function works in average `O(1)` time complexity.

 

>[!Example]+ Example 1

>[!warning]+ Constraints
>- `-2^31 <= val <= 2^31 - 1`
>
>- At most `2 * ``10^5` calls will be made to `insert`, `remove`, and `getRandom`.
>
>- There will be at least one element in the data structure when `getRandom` is called.

---

## 💡 Solution 1: dict + list to maintain O(1) complexity
### Approach
- Need both dict and list to meet the conditions to maintain O(1) complexity, implementing insert, remove and getRandom.
- insert: need dict to use idx
- remove: need both dict and list
	- dict to use idx
	- list to actually remove the element using pop function
- getRandom: need list to use random.choice

### Complexity Analysis
- **Time Complexity**: O(1)
- **Space Complexity**: O(N)

```python
import random


class RandomizedSet(object):

	def __init__(self):
		self.nums = [] # List for O(1) random access
		self.num_to_idx = {} # Dict maps value -> index for O(1) lookup and removal
	
	def insert(self, val):
	
		if val in self.num_to_idx: # O(1) check via dict
			return False

		self.nums.append(val)
		self.num_to_idx[val] = len(self.nums)-1 # Store index position

		return True


def remove(self, val):
	if val not in self.num_to_idx: # O(1) check via dict
		return False
	
	idx = self.num_to_idx[val] # O(1) index retrieval (key reason for dict)
	last_val = self.nums[-1]

	# Swap-and-pop: move last to deleted position
	
	self.nums[idx] = last_val
	self.num_to_idx[last_val] = idx # Update moved element's index
	
	self.nums.pop() # O(1) removal from end
	del self.num_to_idx[val]
	
	return True
  

def getRandom(self):
	return random.choice(self.nums) # Requires list (not set)
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- When explicitly required to maintain O(1) complexity, we need different data types to conduct what is required in the question: insert, remove, and getRandom.
	- random.choice(list) - O(1)
	- list[idx] - O(1)
	- dict[val] (look up by key) - O(1)