/*Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

All inputs will be valid.*/

function last(x){
    let words = x.split(' ')
    if (words.length === 1) return words
    const str = string => string[string.length-1] || ''
    words.sort((a, b) => str(a).localeCompare(str(b)))
    return words
  }