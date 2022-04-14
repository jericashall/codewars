// April 14th - 7 kyu
/*Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

Note that the number will always be non-negative (>= 0).*/

function insertDash(num) {
    let numbers = num.toString().slice().split('')
    for (let i = 0; i < numbers.length; i++) {
      if ((numbers[i] % 2 !== 0 && !Number.isNaN(numbers[i] % 2)) && (numbers[i+1] % 2 !== 0 && !Number.isNaN(numbers[i+1] % 2))) {
        numbers.splice(i+1, 0, '-')
        i--
      }
    }
   return numbers.join('')
 }
 