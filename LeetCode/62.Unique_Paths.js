// Medium
// DFS
// A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

// The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

// How many possible unique paths are there?

// Example 1:
// Input: m = 3, n = 2
// Output: 3
// Explanation:
// From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right

// Example 2:
// Input: m = 7, n = 3
// Output: 28


// Time: O(2^n); Space: O(1)
// m = col; n = row
// move right = increase col; move down = increase row
// not good for large input
// always move right first
function uniquePaths(m, n) {
  let count = 0
  move(0,0)
  return count

  function move(c, r) {
    if (c > m-1 || r > n-1) { return }
    if (c === m-1 && r === n-1) {
      count++
      return
    }
      move(c+1, r) // move right
      move(c, r+1) // move down
  }

}

// another way to write:
function uniquePaths(m, n) {
  return move(0,0)

  function move(c, r) {
    if (c > m-1 || r > n-1) {
      return 0
    }
    else if (c === m-1 && r === n-1) {
      return 1
    } else {
      return move(c+1, r) + move(c, r+1)
    }

  }
}

// *** More Optimal Approach - Memoization
// Memoization
// Time: m x n, Space: m x n
function uniquePaths(m, n) {
  let cache = {}
  return move(0, 0, cache)

  function move(c, r, cache) {
    if (c > m-1 || r > n-1) {
      return 0
    } else if (c === m-1 && r === n-1) {
      return 1
    } else if (cache[c+', '+r] > 0) {
      return cache[c+', '+r]
    } else {
      cache[c+', '+r] = move(c+1, r) + move(c, r+1)
      return cache[c+', '+r]
    }
  }
}
