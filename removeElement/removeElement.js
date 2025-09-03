'use strict';

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === val) {
//     nums.splice(i, 1);
//     i--;
//   }
// }
// const k = nums.length;
// return k;

const nums = [0, 1, 2, 2, 3, 0, 4, 2];
// const removeElement = function (nums, val) {
//   const filteredArr = nums.filter((item) => item !== val);
//   for(let i=0;i<filteredArr.length;i++){
//     nums[i]= filteredArr[i]
//   }
//   return filteredArr.length;
// };
// console.log(removeElement(nums, 3));

//intialize a pointer k at 0
//loop over the array
//if the the nums[i] != val then nums[k] =nums[i] and increment k

function removeElement(nums, val) {
  let k = 0;
  for (let num of nums) {
    if (num !== val) {
      nums[k] = num;
      k++;
    }
  }
  return k
}
console.log(removeElement(nums, 2));
