// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Input: haystack = "hello", needle = "ll"; Output: 2
// Input: haystack = "aaaaa", needle = "bba"; Output: -1

// Nested Loop - Time: O(n^2); Space: O(1)
function strStr(haystack, needle) {
  if (needle.length === 0) return 0;

  for (let i = 0; i < haystack.length; i++) {
    for (let j = 0; j < needle.length; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
      if (j === needle.length) {
        return i;
      }
    }
  }
  return -1;
}

// Using slice - Time: O(n^2); Space: O(n^2)
function strStr(haystack, needle) {
  if (needle.length === 0) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i, needle.length + i) === needle) {
      return i;
    }
  }
  return -1;
}

// Using startsWith  - Time: O(n^2); Space: O(n^2)
function strStr(haystack, needle) {
  if (needle.length === 0) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack.slice(i).startsWith(needle)) {
      return i;
    }
  }
  return -1;
}
