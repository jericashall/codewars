/*Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.*/

function correctTail(bod, tail){
  
    const sub = bod[bod.length-1]
    
    return sub === tail
  }

/*tests*/

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(correctTail("Fox", "x"), true);
    assert.strictEqual(correctTail("Rhino", "o"), true);
    assert.strictEqual(correctTail("Meerkat", "t"), true);   
  })
})