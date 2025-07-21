'use strict';
/*
find each index that has zero in nums1
replace that index with element of nums2
store that in nums1
sort nums1
*/
let nums1 = [1, 2, 3, 10, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;
function merge(nums1, m, nums2, n) {
  for (let i = 0; i <  n; i++) {
    let index = nums1.findIndex(x=>x==0)
    if(index !=-1){
        nums1[index] = nums2[i] 
    }
   
  }
  nums1.sort((a,b)=>a-b)
  
}
merge(nums1,m,nums2,n)