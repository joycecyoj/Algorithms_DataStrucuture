// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Examples:
// Input: "()"; Output: true
// Input: "()[]{}"; Output: true
// Input: "(]"; Output: false
// Input: "([)]"; Output: false
// Input: "{[]}"; Output: true
// Input: "["; Output: false
// Input: "(])"; Output: false
// Input: ""; Output: true


function isValid(str) {
  let pairs = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }
  let stack = []

  for (let i = 0; i < str.length; i++) {
    if (str[i] in pairs) {
      stack.push(str[i])
    } else if (str[i] === pairs[stack[stack.length - 1]]) {
      stack.pop()
    } else {
      return false
    }
  }

  if (stack.length === 0) {
    return true
  } else {
    return false
  }
}
