// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Input: [2,2,1]; Output: 1
// Input: [4,1,2,1,2]; Output: 4

function singleNumber(nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in nums) {
      hash[nums[i]]++;
    } else {
      hash[nums[i]] = 1;
    }
  }

  for (key in hash) {
    if (hash[key] < 2) {
      return parseInt(key);
    }
  }
}
