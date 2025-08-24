'use strict';
// let arr = [3, 4, 5, 6];
// let arr2 = [];
// function twoSum(target) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] == target) {
//         arr2.push(i, j);
//         console.log(arr2);
//       }
//     }
//   }
// }
// twoSum(10);

let nums = [3, 4, 6, 5];
function twoSum(target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }
  for (let i = 0; i < nums.length; i++) {
    let j = map.get(target - nums[i]);
    if (nums[i] + nums[j] === target && i !== j) {
      return [i, j];
    }
  }
}
console.log(twoSum(7));
