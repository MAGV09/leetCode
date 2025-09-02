'use strict';

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] === val) {
//     nums.splice(i, 1);
//     i--;
//   }
// }
// const k = nums.length;
// return k;

const nums = [0,1,2,2,3,0,4,2];
// const removeElement = function (nums, val) {
//   const filteredArr = nums.filter((item) => item !== val);
//   for(let i=0;i<filteredArr.length;i++){
//     nums[i]= filteredArr[i]
//   }
//   return filteredArr.length;
// };
// console.log(removeElement(nums, 3));

//intialize 2 pointers one at the start od the arr and one at the end.
//if the element at the 1st pointer is equal to val then replace it with element at the 2nd pointer
//increment 1st pointer and decrement 2nd pointer
//if the element at the 1st pointer isn't equal to val increment only
//if the element at the 2nd pointer is equal to val decrement it.
//when 1st pointer and 2nd pointer equal each other end.
function removeElement(nums, val) {
  let j = nums.length - 1;
  for (let i = 0; i < nums.length; ) {
    if (nums[j] === val) {
      j--;
    }
    if (nums[i] === val && nums[j] !== val) {
      [nums[i],nums[j]]=[nums[j],nums[i]]
      
    } else if (nums[i] !== val && nums[j] != val) {
      i++;
    }
    if (i === j) {
      break;
    }
  }
  return j+1;
}
console.log(removeElement(nums,2));