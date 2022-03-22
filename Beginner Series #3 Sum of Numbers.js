//March 22nd - 7 kyu
/*Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!*/

function getSum(a,b) {
    let sum = 0, min= 0, max = 0;
    a < b ? (min = a, max =b) : (min = b, max =a); 
    for(let i = min; i <= max; i++) sum += i;
    return sum;
  }