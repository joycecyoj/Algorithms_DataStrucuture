// Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Input: [0,1,0,3,12]; Output: [1,3,12,0,0]
// Note:

// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.

// Time: O(n); Space: O(1)
var moveZeroes = function(nums) {
  let zeroCount = 0;

  for (let i = 0; i < nums.length; i ++) {
      if (nums[i] === 0) {
          nums.splice(i, 1)
          zeroCount ++
          i --
      }
  }
  while (zeroCount) {
      nums.push(0)
      zeroCount --
  }
};


function moveZeroes(nums) {
  let i = 0
  let j = 1

  while (j < nums.length) {
      if (nums[i] === 0 && nums[j] !== 0) {
          let tmp = nums[i]
          nums[i] = nums[j]
          nums[j] = tmp
          i++
          j++
      } else if (nums[i] === 0 && nums[j] === 0) {
          j++
      } else {
          i++
          j++
      }
  }
}
