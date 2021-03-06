// Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Given nums = [1,1,2],

// Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.

// It doesn't matter what you leave beyond the returned length.

// Example 2:
// Given nums = [0,0,1,1,1,2,2,3,3,4],

// Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

// Time: O(n); Space: O(1)
function removeDuplicates(nums) {
  let compare = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (compare === nums[i]) {
      nums.splice(i, 1);
      i--;
    } else {
      compare = nums[i];
    }
  }
  return nums.length;
}

// note: since we're modifying the arr (splicing), we need to adjust the index back one to account for the elem that was removed or else we will skip an elem in the next interation
