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
