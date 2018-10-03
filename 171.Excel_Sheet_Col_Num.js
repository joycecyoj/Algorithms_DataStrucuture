// Given a column title as appear in an Excel sheet, return its corresponding column number.

// For example:
//     A -> 1
//     B -> 2
//     C -> 3
//     ...
//     Z -> 26
//     AA -> 27
//     AB -> 28
//     ...

// Input: "A"; Output: 1
// Input: "AB"; Output: 28
// Input: "ZY"; Output: 701

// AA => 26 * 1 + 1
// AB => 26 * 1 + 2
// BA => 26 * 2 + 1
// ZA => 26 * 26 + 1
// AAB => 704

function titleToNumber(s) {
  let result = 0;
  let codeBase = 'A'.charCodeAt(0); // 65

  for (let i = 0; i < s.length; i++) {
    result = result * 26 + (s.charCodeAt(i) - codeBase + 1);
  }
  return result;
}
