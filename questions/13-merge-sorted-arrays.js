// Given two sorted arrays, merge them into a new sortedArray in linear time

// input
// const arr1 = [1, 2, 3, 4, 5, 6, 6, 7, 8, 9, 23, 23];
// const arr2 = [2, 3, 12, 18, 19, 22, 22, 99];

// output
// [1, 2, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 12, 18, 19, 22, 22, 23, 23, 99]

const mergeSortedArrays = (arr1, arr2) => {
	let result = [];
	let idx1 = 0;
	let idx2 = 0;

	while (idx1 < arr1.length || idx2 < arr2.length) {
		if (arr1[idx1] <= arr2[idx2]) {
			result.push(arr1[idx1]);
			idx1++;
		} else {
			result.push(arr2[idx2]);
			idx2++;
		}
	}

	return result;
};

module.exports = mergeSortedArrays;
