'use strict'

/*
initalize pointer k at 1
initalize i at k+1
if arr[k] === arr[k-1] or arr[k] <arr[k-1]
replace arr[k] with arr[i] as long as arr[1]!=arr[k] then increment i
else
k++
*/
const nums = [1,1,2]
function removeDuplicates(nums){
let k=0
for(let i=k+1;i<nums.length;){
    if(nums[k]===nums.at(k-1) || nums[k]<nums[k-1] ||nums[i]===nums[k]){
        if(nums[k]!==nums[i]){
            nums[k]=nums[i]
            i++
        }
        else{
            i++
        }
    }
    else{
        k++
    }
}
return nums
}
console.log(removeDuplicates(nums));