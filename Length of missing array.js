/*You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!


You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays.*/

function getLengthOfMissingArray(arrayOfArrays) {
    if(!arrayOfArrays) return 0
    let lengths = arrayOfArrays.map(x => x ? x.length : 0)
    lengths.sort((a, b) => a-b)
    if(lengths[0] === 0) return 0
    let missing = 0
  
    for(let i = 0; i < arrayOfArrays.length; i++) {
      if (lengths[i] + 1 !== lengths[i+1]) {
        missing = lengths[i] +1
        break
      } 
    }
    
    return missing
  }
  

/*tests*/

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("KataTests", function(){
  it("Basic Tests", function(){
    assert.strictEqual(getLengthOfMissingArray([ [ 1, 2 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 3);
    assert.strictEqual(getLengthOfMissingArray([ [ 5, 2, 9 ], [ 4, 5, 1, 1 ], [ 1 ], [ 5, 6, 7, 8, 9 ]] ), 2);
    assert.strictEqual(getLengthOfMissingArray([ [ null ], [ null, null, null ] ] ), 2);
    assert.strictEqual(getLengthOfMissingArray([ [ 'a', 'a', 'a' ], [ 'a', 'a' ], [ 'a', 'a', 'a', 'a' ], [ 'a' ], [ 'a', 'a', 'a', 'a', 'a', 'a' ]] ), 5);
      
    assert.strictEqual(getLengthOfMissingArray([ ]), 0);
  });
});