'use strict';
/*
Make the letters into an array
Sort the array
Compare each element of the array
If the letters match each other return true
Otherwise return false
s = "racecar", t = "carrace"
*/
let s = 'jar';
let t = 'jam';
function isAnagram(s, t) {
  let s1 = s.split('').sort();
  let t1 = t.split('').sort();

  for (let i = 0; i <= s1.length - 1; i++) {
    if (s1[i] != t1[i]) {
        console.log(s1[i],t1[i]);
      return false;
    }
  }
  return true;
}
console.log(isAnagram(s, t));
