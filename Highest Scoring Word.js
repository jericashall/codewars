/*Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.*/


function high(x){
    let words = x.split(' ')
    let highScore = 0
    let word = null
    for(let i = 0; i < words.length; i++) {
      let score = 0
      for(let j = 0; j < words[i].length; j++) {
        let count = words[i].charCodeAt(j) - 96
        score += count
      }
      if (score > highScore) {
        highScore = score
        word = words[i]
      }
    }
    return word
  }

/*tests*/

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(high('man i need a taxi up to ubud'), 'taxi');
    assert.strictEqual(high('what time are we climbing up the volcano'), 'volcano'); 
    assert.strictEqual(high('take me to semynak'), 'semynak');   
    assert.strictEqual(high('aa b'), 'aa');
    assert.strictEqual(high('b aa'), 'b');
    assert.strictEqual(high('bb d'), 'bb');
    assert.strictEqual(high('d bb'), 'd');
    assert.strictEqual(high('aaa b'), 'aaa');
  })
});