//Mary 5th - 7 kyu
/* You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2
Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.*/

function nthChar(words){
    return words.map((x, i) => x.charAt(i)).join('')
   }