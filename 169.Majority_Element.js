// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Input: [3,2,3]; Output: 3
// Input: [2,2,1,1,1,2,2]; Output: 2

function majorityElement(nums) {
  let hash = {};
  let majority = Math.floor(nums.length / 2);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }

  for (key in hash) {
    if (hash[key] > majority) {
      return parsesInt(key);
    }
  }
}
