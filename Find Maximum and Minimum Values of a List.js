// March 15th - 8 kyu
/* Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.*/

let min = function(list){
    let minVal = list[0];
    for(let i = 0; i < list.length; i++) {
    if (list[i] < minVal){
        minVal = list[i];
     }
    }
    list.unshift(minVal);
    return list[0];
}

let max = function(list){
    let maxVal = list[0];
    for(let i = 0; i < list.length; i++) {
    if (list[i] > maxVal){
        maxVal = list[i];
     }
    }
    list.unshift(maxVal);
    return list[0];
}
