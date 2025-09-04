'use strict';

/*
create a map
fill the map with the array element and increase the count if the element already exist else add it to the map
return the element that has thhe biggest count
*/
const majorityElement = function (nums) {
  const map = new Map();
  for (const num of nums) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
  }
  for(const [item,val] of map){
    if(val>nums.length/2){
        return item
    }
  }
};
const nums = [3,2,3];

console.log(majorityElement(nums));
