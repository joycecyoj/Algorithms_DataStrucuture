// Given two arrays, write a function to compute their intersection.

// Input: nums1 = [1,2,2,1], nums2 = [2,2]; Output: [2,2]
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]; Output: [4,9]

// Time: O(n); Space: O(n)
function intersect(nums1, nums2) {
  let hash = {}
  let result = []

  for (let i = 0; i < nums1.length; i++) {
    if (nums1[i] in hash) {
      hash[nums1]++
    } else {
      hash[nums1] = 1
    }
  }

  for (let j = 0; j < nums2.length; j++) {
    if (nums2[j] in hash) {
      hash[nums2[j]]--
      result.push(nums2)
    }
  }
  return result
}
