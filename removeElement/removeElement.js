'use strict';
const nums = [0,1,2,2,3,0,4,2];
const removeElement = function (nums, val) {
  for(let i=0;i<nums.length;i++){
    if(nums[i]===val){
        nums.splice(i,1)
        i--
    }
  }
  const k = nums.length;
  return nums;
};
console.log(removeElement(nums, 2));
