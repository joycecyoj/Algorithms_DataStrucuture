// Given non-empty array of integers, return the k most frequent elements

// Input: [1,1,1,2,2,3], k = 2; Output: [1,2]
// Input: [1,2], k = 2; Output: [1,2]
// Input: [5,1,4,5,3,1,1,6,4,1], k = 3; Output: [1,5,4]

// Time: O(n log n) - sorting; Space: O(n)

function topKFrequent(nums, k) {
  let hash = {};
  let result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] in hash) {
      hash[nums[i]][1]++;
    } else {
      hash[nums[i]] = [nums[i], [1]];
    }
  }

  let sortedCounts = Object.values(hash)
    .sort((a, b) => b[1] - a[1])
    .slice(0, k);

  for (let j = 0; j < sortedCounts.length; j++) {
    result.push(Number(sortedCounts[i][0]));
  }
  return result;
}
