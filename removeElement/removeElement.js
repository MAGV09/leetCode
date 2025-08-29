'use strict';

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === val) {
//     nums.splice(i, 1);
//     i--;
//   }
// }
// const k = nums.length;
// return k;

const nums = [3, 2, 2, 3];
const removeElement = function (nums, val) {
  const filteredArr = nums.filter((item) => item !== val);
  for(let i=0;i<filteredArr.length;i++){
    nums[i]= filteredArr[i]
  }
  return filteredArr.length;
};
console.log(removeElement(nums, 3));

