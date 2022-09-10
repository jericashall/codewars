/*Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

Return as a number.*/

function divCon(x){
    let strs = 0
    let nums = 0
    for(let i = 0; i < x.length; i++) {
      if(typeof x[i] === 'number') {
        nums += x[i]
      } else {
        let numVer = Number(x[i])
        strs += numVer
      }
    }
    return nums - strs
  }

/*tests*/

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Divide and Conquer", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(divCon([9, 3, '7', '3']), 2);
    assert.strictEqual(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
    assert.strictEqual(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 
  })
});