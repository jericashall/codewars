// April 2nd  - 8 kyu
/*Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string*/

function fakeBin(x){
    let arr = x.split('')
    arr.forEach((x, i) => x < 5 ? arr[i] = 0 : arr[i] = 1)
    return arr.join('')
  }