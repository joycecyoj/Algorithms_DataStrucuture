// Medium
// Given a 2d grid map of '1's (land) and '0's (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

// Example 1:
// Input:
// 11110
// 11010
// 11000
// 00000
// Output: 1

// Example 2:
// Input:
// 11000
// 11000
// 00100
// 00011
// Output: 3

// Time: O(r*c) => O(n^2); Space: O(1)
var numIslands = function(grid) {
  let count = 0;

  if (!grid.length) {
    return count;
  }

  let rowMax = grid.length;
  let colMax = grid[0].length;

  for (let r = 0; r < rowMax; r++) {
    for (let c = 0; c < colMax; c++) {
      if (grid[r][c] === '1') {
        count++;
        grid[r][c] = 0;
        getIsland(r, c);
      }
    }
  }
  return count;

  function getIsland(r, c) {
    // up
    if (grid[r - 1] && grid[r - 1][c] === '1') {
      grid[r - 1][c] = 0;
      getIsland(r - 1, c);
    }
    // right
    if (grid[r][c + 1] === '1') {
      grid[r][c + 1] = 0;
      getIsland(r, c + 1);
    }
    // down
    if (grid[r + 1] && grid[r + 1][c] === '1') {
      grid[r + 1][c] = 0;
      getIsland(r + 1, c);
    }
    // left
    if (grid[r][c - 1] === '1') {
      grid[r][c - 1] = 0;
      getIsland(r, c - 1);
    }
  }
};
