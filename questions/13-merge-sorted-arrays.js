// Given two sorted arrays, merge them into a new sortedArray in linear time

// input
// const arr1 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 23, 23];
// const arr2 = [2, 3, 12, 18, 19, 22, 22, 99];

// output
// [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 12, 18, 19, 22, 22, 23, 23, 99]

const mergeSortedArrays = (arr1, arr2) => {
  const count = arr1.length + arr2.length;
  let output = new Array(count).fill();
  output.map((el, i) => {
    if (!arr1.length || arr2[0] <= arr1[0]) {
      return output[i] = arr2.shift();
    }

    if (!arr2.length || arr1[0] <= arr2[0]) {
      return output[i] = arr1.shift();
    }
  });
  return output;
};

module.exports = mergeSortedArrays;
