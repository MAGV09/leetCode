'use strict';
/*
Make the letters into an array
Sort the array
Compare each element of the array
If the letters match each other return true
Otherwise return false
s = "racecar", t = "carrace"
*/
<<<<<<< HEAD
// let s = 'jar';
// let t = 'jam';
=======
let s = 'jar';
let t = 'jam';
>>>>>>> d200b1601421fd80a5b5eaa82829b2a19e7fa0f0
// function isAnagram(s, t) {
//   let s1 = s.split('').sort();
//   let t1 = t.split('').sort();

//   for (let i = 0; i <= s1.length - 1; i++) {
//     if (s1[i] != t1[i]) {
//         console.log(s1[i],t1[i]);
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isAnagram(s, t));

  function isAnagram(s, t) {
          if (s.length !== t.length) return false;
  const map = new Map();
  for (const char of s) {
    if (map.has(char)) {
      map.set(char, map.get(char) + 1);
    } else {
      map.set(char, 1);
    }
  }
  for (const char of t) {
    if (!map.has(char)) return false;

    map.set(char, map.get(char) - 1);
    if (map.get(char) <0) return false;
  }
  return true
    }