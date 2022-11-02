/*Given a string, return a new string that has transformed based on the input:

Change case of every character, ie. lower case to upper case, upper case to lower case.
Reverse the order of words from the input.
Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"
You may assume the input only contain English alphabet and spaces.*/

function stringTransformer(str) {
    let invertedStr = ''
    for(let i = 0; i < str.length; i++) {
      if(str.charCodeAt(i) >= 97) {
        invertedStr += str[i].toUpperCase()
      } else {
        invertedStr += str[i].toLowerCase()
      }
    }
    const invertedArr = invertedStr.split(' ')
    return invertedArr.reverse().join(' ')
  }