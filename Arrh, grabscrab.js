/*Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

At long last, we need a way to unscramble what these pirates are saying.

Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

For example:

grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )
Should return ["sport", "ports"].

Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

Good luck!*/


function grabscrab(anagram, dictionary) {
    let map = new Map()
    let words = []
    for(let i = 0; i < anagram.length; i++) {
      if(map.has(anagram[i])){
        map.set(anagram[i], map.get(anagram[i])+1)
      } else {
        map.set(anagram[i], 1)
      }
    }
    
    for(let i = 0; i < dictionary.length; i++) {
      let word = dictionary[i]
      let map2 = new Map()
      for(let j = 0; j < word.length; j++) {
        let letter = dictionary[i][j]
        if(map2.has(letter)) {
          map2.set(letter, map2.get(letter)+1)
          if(map2.get(letter) > map.get(letter)) {
            break
          }
        } else if (map.has(letter)) {
          map2.set(letter, 1)        
        } else if (map.has(letter) === false) {
          break
        }
        if (j === word.length - 1) {
          words.push(word)
        }
      }
    }
    
    return words
}

/*tests*/

const {assert} = require("chai");

describe("grabscrab", function() {
  it("should pass sample test cases", function() {
    assert.deepEqual(grabscrab("trisf", ["first"]), ["first"], "Should have found 'first'");
    assert.deepEqual(grabscrab("oob", ["bob", "baobab"]), [], "Should not have found anything");
    assert.deepEqual(grabscrab("ainstuomn", ["mountains", "hills", "mesa"]), ["mountains"], "Should have found 'mountains'");
    assert.deepEqual(grabscrab("oolp", ["donkey", "pool", "horse", "loop"]), ["pool", "loop"], "Should have found 'pool' and 'loop'");
    assert.deepEqual(grabscrab("ortsp", ["sport", "parrot", "ports", "matey"]), ["sport", "ports"], "Should have found 'sport' and 'ports'");
    assert.deepEqual(grabscrab("ourf", ["one","two","three"]), [], "Should not have found anything");
  });
});