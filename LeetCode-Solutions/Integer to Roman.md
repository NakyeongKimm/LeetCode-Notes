---
created: 2026-01-08
completed: true
leetcode-index: "12"
link: https://leetcode.com/problems/integer-to-roman
difficulty: Medium
tags:
  - leetcode/problem
---

# Integer to Roman

## 📝 Problem Description
Seven different symbols represent Roman numerals with the following values:

<table>
	<thead>
		<tr>
			<th>Symbol</th>
			<th>Value</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>I</td>
			<td>1</td>
		</tr>
		<tr>
			<td>V</td>
			<td>5</td>
		</tr>
		<tr>
			<td>X</td>
			<td>10</td>
		</tr>
		<tr>
			<td>L</td>
			<td>50</td>
		</tr>
		<tr>
			<td>C</td>
			<td>100</td>
		</tr>
		<tr>
			<td>D</td>
			<td>500</td>
		</tr>
		<tr>
			<td>M</td>
			<td>1000</td>
		</tr>
	</tbody>
</table>

Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

	
- If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
	
- If the value starts with 4 or 9 use the subtractive form representing one symbol subtracted from the following symbol, for example, 4 is 1 (`I`) less than 5 (`V`): `IV` and 9 is 1 (`I`) less than 10 (`X`): `IX`. Only the following subtractive forms are used: 4 (`IV`), 9 (`IX`), 40 (`XL`), 90 (`XC`), 400 (`CD`) and 900 (`CM`).
	
- Only powers of 10 (`I`, `X`, `C`, `M`) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (`V`), 50 (`L`), or 500 (`D`) multiple times. If you need to append a symbol 4 times use the subtractive form.

Given an integer, convert it to a Roman numeral.

 

>[!Example]+ Example 1
>**Input**: `num = 3749`
>**Output**: `"MMMDCCXLIX"`
>**Explanation**:
>` 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)  700 = DCC as 500 (D) + 100 (C) + 100 (C)   40 = XL as 10 (X) less of 50 (L)    9 = IX as 1 (I) less of 10 (X) Note: 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places ` 

>[!Example]+ Example 2
>**Input**: `num = 58`
>**Output**: `"LVIII"`
>**Explanation**:
>` 50 = L  8 = VIII ` 

>[!Example]+ Example 3
>**Input**: `num = 1994`
>**Output**: `"MCMXCIV"`
>**Explanation**:
>` 1000 = M  900 = CM   90 = XC    4 = IV ` 

>[!warning]+ Constraints
>- `1 <= num <= 3999`

---

## 💡 Solution 1: Greedy
### Approach
- Make a fixed list with all possible variables 
	- Use tuple-list instead of dictionary because order matters here
	- List numbers in descending orders to use divmod function

### Complexity Analysis
- **Time Complexity**: O(1)
	- usually O(N^2) when using str += but this time, it's O(1) or O(N) due to the small input and output size
- **Space Complexity**: O(1)

```python
int2rom = [
		(1000, 'M'),
		(900, 'CM'),
		(500, 'D'),
		(400, 'CD'),
		(100, 'C'),
		(90, 'XC'),
		(50, 'L'),
		(40, 'XL'),
		(10, 'X'),
		(9, 'IX'),
		(5, 'V'),
		(4, 'IV'),
		(1, 'I')
		]

  

class Solution(object):
	
	def intToRoman(self, num):
	
	"""
	:type num: int
	:rtype: str
	"""
	
	res = ""
	
	for val, sym in int2rom:
		# when to end
		if num == 0: break
		# {quotient, remainder}
		cnt, num = divmod(num, val)	
		res += sym * cnt
	
	return res
```


---
## 💡 Solution 2: Replace adding str with list join
### Approach
- Replace str += part with list join to improve time complexity

### Complexity Analysis
- **Time Complexity**: O(1)
- **Space Complexity**: O(N)

```python
int2rom = [
	(1000, 'M'), 
	(900, 'CM'), 
	(500, 'D'), 
	(400, 'CD'), 
	(100, 'C'), 
	(90, 'XC'), 
	(50, 'L'), 
	(40, 'XL'), 
	(10, 'X'), 
	(9, 'IX'), 
	(5, 'V'), 
	(4, 'IV'), 
	(1, 'I') 
	] 

class Solution(object): 
	def intToRoman(self, num): 
	""" 
	:type num: int 
	:rtype: str 
	""" 
	res = [] # Use list for O(1) append instead of string concatenation 
	
	for val, sym in int2rom: 
		if num == 0: break 
		cnt, num = divmod(num, val) 
		
		if cnt: 
		# Only append if count > 0 
		res.append(sym * cnt) 
		
	return ''.join(res) # Single join operation at the end
```


---

## 💡 Solution 3: Possible Trick
### Approach
- Make 4 arrays and look up 4 times

### Complexity Analysis
- **Time Complexity**: O(1)
- **Space Complexity**: O(1)

```python
class Solution:
    def intToRoman(self, num: int) -> str:
        thousands = ["", "M", "MM", "MMM"]
        hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"]
        tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]
        ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"]
        return (
            thousands[num // 1000]
            + hundreds[num % 1000 // 100]
            + tens[num % 100 // 10]
            + ones[num % 10]
        )
```


---

## 📓 Hints & Reflections
No hints available.

### Reflections
- divmod(dividend, divisor) -> (quotient, remainder)
- Consider which data structure to use: list, dictionary, tuple, etc.