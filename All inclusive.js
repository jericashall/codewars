//May 12th - 7 kyu
/*Input:

a string strng
an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):

a boolean true if all rotations of strng are included in arr (C returns 1)
false otherwise (C returns 0)
Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true

contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:
Though not correct in a mathematical sense

we will consider that there are no rotations of strng == ""
and for any array arr: contain_all_rots("", arr) --> true*/

function containAllRots(strng, arr) {
    if(strng == false) return true
    let answers = []
    let oldRotation = strng
    for(let i = 0; i < strng.length; i++) {
      let rotation = oldRotation[oldRotation.length-1] + oldRotation.slice(0, oldRotation.length-1)
      answers.push(arr.includes(rotation))
      oldRotation = rotation
    }
      return answers.every(x => x === true)
  }

/* test */

function testing(actual, expected) {
    Test.assertEquals(actual, expected);
}

describe("Basic tests",function() {
it("containAllRots",function() {
    testing(containAllRots("", []), true)
    testing(containAllRots("", ["bsjq", "qbsj"]), true)
    testing(containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]), true)
    testing(containAllRots("XjYABhR", ["TzYxlgfnhf", "yqVAuoLjMLy", "BhRXjYA", "YABhRXj", "hRXjYAB", "jYABhRX", "XjYABhR", "ABhRXjY"]), false)
})})