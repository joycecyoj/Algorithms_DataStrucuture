// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


// Two-Pass Hash Table - Time: O(n); Space: O(n)
// ie: {number: index}
function twoSum(nums, target) {
  let hash = {}

  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = i
  }

  for (let j = 0; j < nums.length; j++) {
    let complement = target - nums[i]
    if (complement in hash && hash[complement] !== j) {
      return [j, hash[complement]]
    }
  }
}

// Nested Loop - Time: O(n^2); Space: O(1)
function twoSumWithLoop(nums, target) {
  let result = []

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push(i, j)    // Or return [i, j]
      }
    }
  }
  return result
}

