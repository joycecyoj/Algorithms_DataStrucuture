// Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

// For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

//     1
//    / \
//   2   2
//  / \ / \
// 3  4 4  3

// But the following [1,2,2,null,3,null,3] is not:
//     1
//    / \
//   2   2
//    \   \
//    3    3

//Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// Test Cases
// tree1 = [1,2,2,3,4,4,3]
var tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(2);
tree1.left.left = new TreeNode(3);
tree1.left.right = new TreeNode(4);
tree1.right.left = new TreeNode(4);
tree1.right.right = new TreeNode(3);
// console.log(tree1)

// tree2 = [1,2,2,null,3,null,3]
var tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(2);
tree2.left.right = new TreeNode(3);
tree2.right.right = new TreeNode(3);
// console.log(tree2)

// tree3 = []
var tree3 = new TreeNode();

// Recursive
function isSymmetricRecursive(root) {
  if (!root) return true;
  return isMirror(root.left, root.right);
}

function isMirror(left, right) {
  if (left === null && right === null) return true;
  if (left === null || right === null || left.val !== right.val) return false;
  return isMirror(left.right, right.left) && isMirror(left.left, right.right);
}
