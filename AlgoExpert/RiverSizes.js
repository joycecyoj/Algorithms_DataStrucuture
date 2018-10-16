// Given 2-D array(matrix) of potentially unequal height and width containing only 0s and 1s. Each 0 represents land, and each 1 represents part of a river. A river consists o fany number of 1s that are either horizontally or vertically adjacent (but not diagonally adjacent). The number of adjacent 1s forming a river determine its size. Write a function that returns an array of the sizes fo all rivers represented in the input matrix. Note that these sizes do not need ot be in any particular order.

function riverSizes(matrix) {
  let count = 0;
  let sizes = [];

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      if (matrix[r][c] === 1) {
        count = checkSize(matrix, r, c);
        sizes.push(count);
      }
    }
  }
  return sizes;

  function checkSize(matrix, r, c) {
    let rowMax = matrix.length - 1;
    let colMax = matrix[0].length - 1;
    let size = 0;

    if (r > rowMax || col > colMax || r < 0 || c < 0 || matrix[r][c] === 0) {
      return size;
    }

    matrix[r][c] = 0;

    size =
      1 +
      Number(checkSize(matrix, r - 1, c)) +
      Number(checkSize(matrix, r + 1, c)) +
      Number(checkSize(matrix, r, c - 1)) +
      Number(checkSize(matrix, r, c + 1));
  }
  return size;
}

var testinputs = [
  [1, 0, 0, 0, 0, 0, 1],
  [0, 1, 0, 0, 0, 1, 0],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 0, 1, 1, 1, 0, 0],
  [0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 0, 1, 0],
  [1, 0, 0, 0, 0, 0, 1],
];

console.log(riverSizes(testinputs)); // [1,1,1,1,1,1,1,1,7]
