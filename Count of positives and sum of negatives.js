//April 1st - 8 kyu
/*Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

function countPositivesSumNegatives(input) {
    return input == false || input == null ? [] : [input.filter(x => x > 0).length, input.filter(x => x < 0).reduce((sum, x) => sum + x, 0)]
  }