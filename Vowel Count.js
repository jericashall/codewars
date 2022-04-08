// April 8th - 7 kyu
/*Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.*/

function getCount(str) {
    let vowelsCount = 0, vowels = ['a', 'e', 'i', 'o', 'u']
    for (let letter of str) if (vowels.includes(letter)) vowelsCount += 1
    return vowelsCount;
}