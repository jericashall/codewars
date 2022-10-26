/*In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

See test cases for more examples.

Good luck!*/

function solve(arr) {
    const optionsPerArray = []
    for(let i = 0; i < arr.length; i++) {
      let uniqueElements = new Set()
      let uniqueCount = 0
      for(let j = 0; j < arr[i].length; j++) {
        if (!uniqueElements.has(arr[i][j])) {
          uniqueCount += 1
          uniqueElements.add(arr[i][j])
        }
      }
      optionsPerArray.push(uniqueCount)
    }
    return optionsPerArray.reduce((product, x) => product * x, 1)
  };