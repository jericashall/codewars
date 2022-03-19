// March 16th - 8 kyu
/*Complete the square sum function so that it squares each number passed into it and then sums the results together.*/

function squareSum(numbers){
    let sum = 0;
    for(let i=0; i < numbers.length; i++) {
      let square = numbers[i]**2;
      sum += square;
    }
    return sum
  }
  