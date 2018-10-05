// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

// Examples:
// s = "leetcode"
// return 0.

// s = "loveleetcode",
// return 2.
// Note: You may assume the string contain only lowercase letters.

// Time: O(n); Space: O(n)
function firstUniqChar(str) {
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    if (str[i] in hash) {
      hash[str[i]][1]++;
    } else {
      hash[str[i]] = [i, 1];
    }
  }

  for (key in hash) {
    if (hash[key][1] === 1) {
      return hash[key][0];
    }
  }
  return -1;
}
