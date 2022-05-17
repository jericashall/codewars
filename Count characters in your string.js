//May 17th - 6 kyu
/*The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.*/

function count (string) {  
    let charCount = {}
    for(let char of string){
      char in charCount ? charCount[char] += 1 : charCount[char] = 1
    }
   return charCount;
}

/*tests*/
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", () => {
  it("should pass sample tests", () => {
    assert.deepEqual(count("aba"), { a: 2, b: 1 }); 
    assert.deepEqual(count(""), {});    
  });
});

