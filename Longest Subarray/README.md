# Longest Subarray
A subarray of array a is defined as a contiguous block of a's elements having
a length that is less than or equal to the length of the array. For example,
the subarrays of array a =[1, 2, 3]are [1], [2], [3], [1, 2], [1, 3], and [1, 2, 3].
Given an integer, k =3, the subarrays having elements that sum to a
number <= k are [1], [2], and [1, 2]. The longest of these subarrays is [1, 2],
which has a length of 2. Given an array, a, determine its longest subarray
that sums to less than or equal to a given value k.

## Function Description
Complete the function maXLengTh in the editor below. The function must
return an integer that represents the length of the longest subarray of a that
sums to a number <= k.
```
maxLength has the following parameter(s):
a[a[0],...a[n- 7]]: an array of integers
k: an integer
```

## Constraints
- 1 <= n <= 10^5
- 1 <= a[i] <= 10^3
- 1 <= k <= 10^9


# Sample Input For Custom Testing
## Sample Input 0
```
3
1
2
3
4
```
## Sample Output 0
2

##  Explanation 0
The subarrays of [1, 2, 3] having elements that sum to a number <=(k = 4)
are [1], [2], [3], and [1, 2]. The longest of these is [1, 2], which has a length
of 2. Return 2 as the answer.
