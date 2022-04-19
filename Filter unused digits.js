// April 18th - 7kyu
/* Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"
Note: the digits in the resulting string should be sorted.*/

function unusedDigits() {
    let args = Array.prototype.slice.call(arguments).join('');
    let unused = '';
    for(let i = 0; i < 10; i ++) {
      if (!args.includes(i)) {
        unused += i;
      }
    }
    return unused;
  }