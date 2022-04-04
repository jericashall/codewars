// April 4th - 8 kyu
/*Your Task
Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.

Examples
booleans = [True, True, False], operator = "AND"
True AND True -> True
True AND False -> False
return False
booleans = [True, True, False], operator = "OR"
True OR True -> True
True OR False -> True
return True
booleans = [True, True, False], operator = "XOR"
True XOR True -> False
False XOR False -> False
return False*/

function logicalCalc(array, op){
    let yes = 0
    let no = 0
    if (array.length === 1 && array[0] === false) return false
    if (op === 'AND') {
      return array.every(Boolean)
      }
    if (op === 'OR') {
      return array.some(Boolean)
      }
    if (op === 'XOR') {
      array.forEach(x => x === true ? yes += 1 : no += 1)
    }
       return yes === 1 || no === 1
  }