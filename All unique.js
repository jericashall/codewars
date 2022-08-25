/*Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.*/

function hasUniqueChars(str){
    let set = new Set()
    for(let i = 0; i < str.length; i++) {
      if(set.has(str[i])) {
        return false
      } else {
        set.add(str[i])
      }
    }
    return true
  }

/*tests*/

describe("Tests", () => {
    it("test", () => {
  Test.assertEquals(hasUniqueChars("  nAa"),false) // because there are two spaces ' '
  Test.assertEquals(hasUniqueChars("abcdef"),true)
  Test.assertEquals(hasUniqueChars("aA"),true) // case - sensitivity
  Test.assertEquals(hasUniqueChars("++-"),false) // because there are two '+'
  
    });
  });