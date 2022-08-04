/*Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.*/

function findShort(s){
  s = s.split(' ')
  let min = s[0].length
  for(let i = 0; i < s.length; i++) {
    min = Math.min(min, s[i].length)
  }
  return min
}