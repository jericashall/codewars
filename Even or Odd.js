// March 17th - 8 kyu    
/* Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers. */

function even_or_odd(number) {
    // declare variable to hold value
    let divisBy2;
    // if the number is divisible by 2 set the answer to even, otherwise set it to odd
    if (number % 2 === 0) {
      divisBy2 = 'Even';
    } else {
      divisBy2 = 'Odd';
    }
    return divisBy2;
  }
  