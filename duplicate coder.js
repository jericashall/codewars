/*The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!*/

function duplicateEncode(word){
    word = word.toLowerCase()
    const letterApperances = new Map()
    for(let i = 0; i < word.length; i++) {
      if(letterApperances.has(word[i])) {
        letterApperances.set(word[i], letterApperances.get(word[i])+1)
      } else {
        letterApperances.set(word[i], 1)
      }
    }
  let newString = ''
  for(let i = 0; i < word.length; i++) {
    letterApperances.get(word[i]) > 1 ? newString += ')' :  newString += '('
  }
  return newString
}
