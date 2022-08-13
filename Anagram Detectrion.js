/*An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"*/

// write the function isAnagram
var isAnagram = function(test, original) {
    let map = new Map();
    if(test.length !== original.length) return false
    test = test.toLowerCase()
    original = original.toLowerCase()
    
    for(let i = 0; i < test.length; i++) {
      if(map.has(test[i])) {
        map.set(test[i], map.get(test[i])+1)
      } else {
        map.set(test[i], 1)
      }
    }
    
    for(let i = 0; i < original.length; i++) {
      if(map.has(original[i])) {
        if(map.get(original[i]) > 1) {
          map.set(original[i], map.get(original[i])-1)
        } else {
          map.delete(original[i])
        }
      } else {
        return false
      }
    }
    
    return true
  };