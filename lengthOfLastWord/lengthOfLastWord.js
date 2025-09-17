'use strict';

const str = 'a';
const lengthOfLastWord = function (s) {
  let count = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    if (
      s[i].codePointAt(0) === 32 &&
      i != s.length - 1 &&
      s[i + 1].codePointAt(0) !== 32
    ) {
      return count;
    } else if (s[i].codePointAt(0) !== 32) {
      count++;
    }
  }
  return count;
};

console.log(lengthOfLastWord(str));
