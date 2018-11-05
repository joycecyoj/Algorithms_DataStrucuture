// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Input: "A man, a plan, a canal: Panama"; Output: true
// Input: "race a car"; Output: false
// Input: "a."; Output: true

// Two Pointer - Time: O(n^2) => O(n); Space: O(1)
function isPalindrome(str) {
  str = str.toLowerCase()
  let alphanum = 'abcdefghijklmnopqrstuvwxyz1234567890'

  let i = 0
  let j = str.length - 1
  while (i < j) {
    if (alphanum.indexOf(str[i]) === -1) {
      i++
    } else if (alphanum.indexOf(str[j]) === -1) {
      j--
    } else if (str[i] !== str[j]) {
      return false
  }
  return true
}
