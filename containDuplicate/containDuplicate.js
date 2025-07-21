let nums = [1];
function hasDuplicate() {
  for (let i = 0; i<nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] == nums[i]) {
        return true;
      }
      
    }
  }
  return false
}
console.log(hasDuplicate());