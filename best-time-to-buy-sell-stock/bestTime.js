'use strict';

/*
intialize pointer i at 0 and intialize pointer k at 1 
initalize variable result = 0
loop through the array
if arr.length <2 return 0
if i>k  set i=k and increment k
else if(prices[k]-prices[i] >result) result = prices[k]-prices[i]
if(result<=0) return 0
else return result
*/
const prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
if(prices.length<2) return 0
let i=0
let k=1
let result =0
while(k<prices.length){
  if(prices[i]>prices[k]){
    i=k
  }
  else if(prices[k]-prices[i] >result){
    result =prices[k]-prices[i]
  }
  k++
}
if(result<=0) return 0
else return result
}

console.log(maxProfit(prices));