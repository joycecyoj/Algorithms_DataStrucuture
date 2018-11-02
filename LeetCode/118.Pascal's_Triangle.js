// Given a non-negative integer numRows, generate the first numRows of Pascal's triangle.

// Input: 5
// Output:
// [
//      [1],
//     [1,1],
//    [1,2,1],
//   [1,3,3,1],
//  [1,4,6,4,1]
// ]

// Time: O(n^2)
function generate(numRows) {
  let final = [];

  for (let i = 0; i < numRows; i++) {
    let row = [];

    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        row.push(1);
      } else {
        row.push(final[i - 1][j - 1] + final[i - 1][j]);
      }
    }
    final.push(row);
  }
}
