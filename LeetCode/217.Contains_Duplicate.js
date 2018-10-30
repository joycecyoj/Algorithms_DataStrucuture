// Given an array of integers, find if the array contains any duplicates.

// Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

// Input: [1,2,3,1]; Output: true
// Input: [1,2,3,4]; Output: false
// Input: [1,1,1,3,3,4,3,2,4,2]; Output: true

// Time: O(n log n); Space: O(n)
function containsDuplicates(nums) {
  let sortedNums = nums.sort();

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] === sortedNums[i + 1]) {
      return true;
    }
  }
  return false;
}

// Time: O(n); Space: O(n)
function containsDuplicatesWithHash(nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in nums) {
      return true;
    } else {
      hash[nums[i]] = 1;
    }
  }
  return false;
}
