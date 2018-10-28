// You are attempting to find the index of the first appearance of one string (the needle) inside of another (the haystack).

// indexOf('or', 'hello world'); // should return 7
// indexOf('hello world', 'or'); // should return -1
// indexOf('howdy', 'hello world'); // should return -1
// indexOf('oox', 'ooboxoooxo'); // should return 6


// Time: O(n*m)
function indexOf(needle, haystack) {

  for (let i = 0; i < haystack.length - needle.length; i++) {
    for (let j = 0 ; j < needle.length; j++) {

      if (needle[j] !== haystack[i + j]) {
        break
      }

      if (j === needle.length - 1) {
        return i
      }
    }
  }
  return -1
}
