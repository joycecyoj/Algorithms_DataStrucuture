// Given a binary tree, return all root-to-leaf paths.
// Note: A leaf is a node with no children.

// Example:
// Input: [1,2,3,null,5]

//    1
//  /   \
// 2     3
//  \
//   5

// Output: ["1->2->5", "1->3"]
// Explanation: All root-to-leaf paths are: 1->2->5, 1->3

// Input: [1,2]; Output: ["1->2"]
// Input: []; Output:[]
// Input: [1]; Output:["1"]

// Time: O(2^n); Space: O(n)
function binaryTreePaths(root) {
  let final = [];
  getPath(root, '');
  return final;

  function getPath(root, str) {
    if (root === null) {
      return;
    } else {
      str += root.val;
    }

    if (!root.left && !root.right) {
      final.push(str);
    } else {
      str += '->';
    }

    if (root.left) {
      getPath(root.left, str);
    }
    if (root.right) {
      getPath(root.right, str);
    }
  }
}

// Approach:
// 1 - if root is null, exit; if not null, append root's val to str
// 2 - if root has children, append "->"
// 3 - if root has no children, push str to final
// 4 - if root has left, run getPath on left
// 5 - if root has right, run getPath on right
