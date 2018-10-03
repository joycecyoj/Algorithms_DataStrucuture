// Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

// Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

// Example 1:
// [[0,0,1,0,0,0,0,1,0,0,0,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,1,1,0,1,0,0,0,0,0,0,0,0],
//  [0,1,0,0,1,1,0,0,1,0,1,0,0],
//  [0,1,0,0,1,1,0,0,1,1,1,0,0],
//  [0,0,0,0,0,0,0,0,0,0,1,0,0],
//  [0,0,0,0,0,0,0,1,1,1,0,0,0],
//  [0,0,0,0,0,0,0,1,1,0,0,0,0]]
// Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.

// Example 2:
// [[0,0,0,0,0,0,0,0]]
// Given the above grid, return 0.
// Note: The length of each dimension in the given grid does not exceed 50.

function maxAreaOfIsland(grid, row, col) {
  let count = 0;
  let max = 0;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === 1) {
        count = checkSurrounding(row, col);
      }
      if (count > max) {
        max = count;
      }
    }
  }
  return max;

  function checkSurrounding(row, col) {
    let colUpperBound = grid.length - 1;
    let rowUpperBound = grid[0].length - 1;

    if (
      row < 0 ||
      col < 0 ||
      row > rowUpperBound ||
      col > colUpperBound ||
      grid[row][col] === 0
    ) {
      return 0;
    }

    grid[row][col] = 0;
    return (
      1 +
      checkSurrounding(row + 1, col) +
      checkSurrounding(row - 1, col) +
      checkSurrounding(row, col + 1) +
      checkSurrounding(row, col - 1)
    );
  }
}

// Time: O(n*m) = O(n^2); Space: O(1)
