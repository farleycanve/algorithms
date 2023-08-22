const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Array 1: ", arr1);

//  Rotate arr1
//solution 1
const rotateArray1 = function (arr1, k) {
  for (let i = 0; i < k; i++) {
    arr1.unshift(arr1.pop());
  }

  return arr1;
};
//solution 1
const rotateArray2 = function (nums, k) {
  // reverse helper function
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
};
