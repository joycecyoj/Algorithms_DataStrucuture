// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

// Input: [3,0,1]; Output: 2
// Input: [9,6,4,2,3,5,7,0,1]; Output: 8

// Time: O(n); Space: O(1)
// Using Sum of index vs Sum of nums
function missingNumber(nums) {
  let expSum = 0;
  let actSum = 0;

  for (let i = 0; i < nums.length + 1; i++) {
    expSum += i;
  }

  for (let j = 0; j < nums.length; j++) {
    actSum += nums[j];
  }
  return Math.abs(actSum - expSum);
}

// Time: O(n log n); Space: O(n)
// Using Sort
function missingNumberWithSort(nums) {
  let sorted = nums.sort(function(a, b) {
    return a - b;
  });

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] !== i) {
      return i;
    }
  }
}
