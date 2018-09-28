// Given two strings s and t , write a function to determine if t is an anagram of s.

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

function isAnagram(s, t) {
  let sHash = {};
  let tHash = {};

  if (s.length !== t.length) {
    return false;
  }
  if (s === '' && t === '') {
    return false;
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] in sHash) {
      sHash[s[i]]++;
    } else {
      sHash[s[i]] = 1;
    }
  }

  for (let j = 0; j < t.length; j++) {
    if (t[j] in tHash) {
      tHash[t[j]]++;
    } else {
      tHash[t[j]] = 1;
    }
  }

  for (key in sHash) {
    if (sHash[key] !== tHash[key]) {
      return false;
    }
  }
  return true;
}
