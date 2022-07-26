/*Given a string and a pattern (string) where asterisks represent wildcards, determine if the string matches the pattern. Input: "Oh happy day" (string), "O*app*" (pattern) Output: true*/


function isMatch(s, p) {
    let wildcard = false
    let wildIndex = 0

    for(let i = 0; i < s.length; i++) {
        if(s[i] === p[wildIndex]) {
            wildIndex +=1
            continue
        }
        if(p[wildIndex] === '*') {
            wildcard = true
        }
        if(wildcard === true) {
            if(s[i] === p[wildIndex+1]) {
                wildcard = false
                wildIndex += 1
            }
        } else if (s[i] !== p[wildIndex]) {
            return false
        }
    }
    return true
}

console.log(isMatch('Oh happy day', 'O*app*'))