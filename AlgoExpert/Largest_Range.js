// Write a function that takes in an array of integers and returns an array of length 2 representing the largest range of numbers containedin that array. The first number in the output array should be the first number in the range while the second number should be the last number in the range. A range of numbers is defined as a set of numbers that come right after each other in the set of real integers. For instance, the output array [2,6] represents the range [2,3,4,5,6], which is a range of length 5.

// Note that numbers do not need to be ordered or adjacent in teh array in order to form a range. Assume there will only be one largest range.

// input = [1,11,3,0,15,5,2,4,10,7,12,6] // [0,7]
// input = [1] // [1, 1]
// input = [11, -1, -2, -1, -2, 1, 0, 2, 3, 4, 5, 6, 12] // [-2,6]
// inpush = [4,2,1,3] // [1,4]

// Optimal Approach - Time: O(n); Space: O(n)
// Put all integers into hash; loop through arr and check if descending is in hash then check if ascending is in hash (find all consecutive for current element inside hash)
// if consecutive exists, mark as false and push to tempRange then compare tempRange against maxRange to find largest based on length

function largestRange(arr) {
  let tempRange = [];
  let maxRange = [];
  let hash = {};

  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in hash)) {
      hash[arr[i]] = true;
    }
  }

  for (let j = 0; j < arr.length; j++) {
    // check descending in hash
    let down = arr[i] - 1;
    while (down in hash && hash[down] !== false) {
      tempRange = [down].concat(tempRange);
      hash[down] = false;
      down--;
    }

    tempRange.push(arr[j]);

    // check ascending in hash
    let up = arr[j] + 1;
    while (up in hash && hash[up] !== false) {
      tempRange.push(up);
      hash[up] = false;
      up++;
    }

    if (tempRange.length > maxRange.length) {
      maxRange = tempRange;
      tempRange = [];
    } else {
      tempRange = [];
    }
  }

  return [maxRange[0], maxRange[maxRange.length - 1]];
}

// Time: O(nlogn); Space: O(n)
function largestRange(arr) {
  let sortedArr = arr.sort(function(a, b) {
    return a - b;
  });
  let first = sortedArr[0];
  let last = 0;
  let count = 0;
  let hash = {};

  if (arr.length === 1) {
    return [arr[0], arr[0]];
  }

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i + 1] - sortedArr[i] > 2) {
      count++;
      last = sortedArr[i + 1];

      if (!(count in hash)) {
        hash[count] = [first, last];
      }
    } else {
      count = 0;
      first = sortedArr[i + 1];
      continue;
    }
  }

  let tempR = [];
  let temp = 0;
  for (count in hash) {
    if (Number(count) > temp) {
      temp = count;
      tempR = hash[count];
    }
  }
  return tempR;
}
