'use strict';

/*
intialize a map with the roman values from 1 to 1000
initalize a variable sum =0
loop through the string and in each iteration map the roman value to it's corrsponding interger value
check if the value of the next number is bigger if so make the current number minus
add the number to sum variable
return sum 
*/

const romanToInt = function (s) {
  const map = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);
  let sum = 0;
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) < map.get(s[i + 1])) {
      sum -= map.get(s[i]);
    } else {
      sum += map.get(s[i]);
    }
  }
  return sum
};
console.log(romanToInt("LVIII"));