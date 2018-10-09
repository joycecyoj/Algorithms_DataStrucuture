// Write a function that takes a string as input and returns the string reversed.

// Input: "hello"; Output: "olleh"
// Input: "A man, a plan, a canal: Panama"; Output: "amanaP :lanac a ,nalp a ,nam A"

// Time: O(n); Space: O(n)
// Loop
function reverseString(s) {
  let final = '';

  for (let i = s.length - 1; i >= 0; i--) {
    final += s[i];
  }
  return final;
}

// Recursive
function reverseStringRecursive(s) {
  if (s.length === 0) {
    return s;
  } else {
    return s[s.length - 1] + reverseStringRecursive(s.slice(0, s.length - 1));
  }
}
