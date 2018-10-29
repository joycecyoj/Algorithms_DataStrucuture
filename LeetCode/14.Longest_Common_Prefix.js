// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Input: ["flower","flow","flight"]; Output: "fl"
// Input: ["dog","racecar","car"]; Output: ""
// Input: ["a","a","b"]; Output: ""


// Time: O(n^2)

function longestCommonPrefix(strs) {
  let result = strs[0]

  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < strs[i].length; j++) {
      if (strs[i][j] !== result[j]) {
        result = result.slice(0, j)
        break
      }
    }
    result = strs[i].length > result.length ? result : strs[i]
  }
  return result
}
