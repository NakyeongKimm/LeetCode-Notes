---
created: 2026-01-04
completed: true
leetcode-index: "274"
link: https://leetcode.com/problems/h-index
difficulty: Medium
tags:
  - leetcode/problem
---

# H-Index

## 📝 Problem Description
Given an array of integers `citations` where `citations[i]` is the number of citations a researcher received for their `i^th` paper, return *the researcher's h-index*.

According to the <a href="https://en.wikipedia.org/wiki/H-index" target="_blank">definition of h-index on Wikipedia</a>: The h-index is defined as the maximum value of `h` such that the given researcher has published at least `h` papers that have each been cited at least `h` times.

 

>[!Example]+ Example 1
>**Input**: `citations = [3,0,6,1,5]`
>**Output**: `3`
>**Explanation**:
>[3,0,6,1,5] means the researcher has 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations respectively. Since the researcher has 3 papers with at least 3 citations each and the remaining two with no more than 3 citations each, their h-index is 3. 

>[!Example]+ Example 2
>**Input**: `citations = [1,3,1]`
>**Output**: `1
`

>[!warning]+ Constraints
>- `n == citations.length`
>
>- `1 <= n <= 5000`
>
>- `0 <= citations[i] <= 1000`

---

## 💡 Solution 1: Sort
### Approach
- sort the list first
- set h as the minimum between the number of publications and number of citations
- break if the i+1 exceeds the number of citations

### Complexity Analysis
- **Time Complexity**: O(nlogn)
	- sort function causes O(nlogn) time complexity
- **Space Complexity**: O(1)

```python
class Solution(object):
	def hIndex(self, citations):
	"""
	:type citations: List[int]
	:rtype: int
	"""
	
	n = len(citations)
	citations.sort(reverse=True)
	
	h = 0
	
	for i in range(n):
		if i+1 > citations[i]: break
		h = min(i+1, citations[i])
	
	return h
```


---

## 💡 Solution 2: Bucket Counting
### Approach
- Use bucket counting, which is technically making a new list that counts the frequency of the citation numbers
- From the maximum, start comparing paper count and temporary h. Return h when h meets the conditions.

### Complexity Analysis
- **Time Complexity**: O(n)
- **Space Complexity**: O(n)

```python
class Solution(object):

	def hIndex(self, citations):
	"""
	:type citations: List[int]
	:rtype: int
	"""
	
	n = len(citations)
	
	# Counting sort approach: count papers by citation frequency
	# Max h-index is n, so we only need buckets 0 to n
	buckets = [0] * (n + 1)
	
	# Count papers: buckets[i] = number of papers with i citations
	# Papers with > n citations go into bucket[n] (they all satisfy h >= n)
	for c in citations:
		if c >= n:
			buckets[n] += 1
		else:
			buckets[c] += 1
	
	# Traverse from highest citation count to find max h-index
	papers_count = 0
	for h in range(n, -1, -1):
		papers_count += buckets[h] # Accumulate papers with >= h citations
		if papers_count >= h: # Found h papers with >= h citations
			return h
	
	return 0
```


---

## 📓 Hints & Reflections
>[!Hint]- Hint 1
>An easy approach is to sort the array first.

>[!Hint]- Hint 2
>What are the possible values of h-index?

>[!Hint]- Hint 3
>A faster approach is to use extra space.

### Reflections
- 3 Conditions when Bucket Counting can work:
	- Limited range of the numbers (small enough or predictable like ~1000)
	- Frequency and count matter. Order doesn't really matter.
	- Want to make the algorithm faster, as O(n), than O(nlogn)
