//May 27th - 7 kyu
/* Write a generic function chainer

Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90;*/

function chain(input, fs) {
    let num = input
    for(const func of fs) {
      num = func(num)
    }
    return num
  }

  /* tests */

  describe("Tests", () => {
    it("test", () => {
  function add(x) {
      return x + 10;	
  }
  
  function mult(x) {
      return x * 30;
  }
  
  Test.assertEquals(chain(2, [add, mult]), 360, "Error: chain function does not work");
    });
  });
  
  