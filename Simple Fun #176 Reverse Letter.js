//March 23rd - 7 kyu

/*Given a string str, reverse it omitting all non-alphabetic characters.

Example
For str = "krishan", the output should be "nahsirk".

For str = "ultr53o?n", the output should be "nortlu".*/


function reverseLetter(str) {
    let backwards = '';
    //reverse the string
    for(let i = str.length-1; i >= 0; i--) backwards += str[i];
    //regex to replace anything that isn't lowercase a-z with an empty string
    return backwards.replace(/[^a-z]/gi, '')
  }