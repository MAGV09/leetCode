let arr = [3, 4, 5, 6];
let arr2 = [];
function twoSum(target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target) {
        arr2.push(i, j);
        console.log(arr2);
      }
    }
  }
}
twoSum(10);
