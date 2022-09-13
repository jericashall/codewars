/*Task:
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"*/

function oddOrEven(array) {
    let sum = array.reduce((acc, x) => acc + x, 0)
    return sum % 2 === 0 ? 'even' : 'odd'
 }