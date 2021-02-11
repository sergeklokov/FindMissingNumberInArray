Find the Missing Number
You are given an array of positive numbers from 1 to n, such that all numbers from 1 to n are present except one number ‘x’. You have to find ‘x’. The input array is not sorted.

For example, let’s look at the below array (see image)


https://www.educative.io/m/find-the-missing-number



linear, O(n), solution that uses the arithmetic series sum formula.

Sum (1 - n) =  n (n + 1) / 2
​​ 

​​Here are the steps to find the missing number.

Find the sum ‘sum_of_elements’ of all the numbers in the array. This would require a linear scan, O(n).
Then find the sum ‘expected_sum’ of first ‘n’ numbers using the arithmetic series sum formula i.e. ( n * (n + 1) ) / 2.
The difference between these i.e. ‘expected_sum - sum_of_elements’, is the missing number in the array.



=====================================================================================
Measuring performance:
https://stackoverflow.com/questions/48768758/measure-process-time-with-node-js

I tried to use performance library and failed:
Install performance package to Node in order to check speed
npm install performance
https://stackoverflow.com/questions/313893/how-to-measure-time-taken-by-a-function-to-execute

