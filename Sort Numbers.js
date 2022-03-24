//March 24th - 7 kyu
/*Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []*/

function solution(nums){
    //if nums is null/undefined or an empty array, it will return an empty array, otherwise it will sort the array from low to high
    return nums === [] || nums === null || nums === undefined ? [] : nums.sort((a,b) => a-b);
  }