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

// ---------------------------------------------------------------------------//

// Recursive
// Time: O(n)
function isSymmetricRecursive(root) {
  if (!root) return true;
  return isMirror(root.left, root.right);
}

function isMirrorRecursive(left, right) {
  if (left === null && right === null) return true;
  if (left === null || right === null || left.val !== right.val) return false;
  return (
    isMirrorRecursive(left.right, right.left) &&
    isMirrorRecursive(left.left, right.right)
  );
}

// Iterative with Stack
// Time: O(n)
function isSymmetricIterative(root) {
  if (!root) {
    return true;
  }
  return isMirrorIterative(root.left, root.right);
}

function isMirrorIterative(left, right) {
  let s1 = [left];
  let s2 = [right];

  while (s1.length > 0 || s2.length > 0) {
    let n1 = s1.pop();
    let n2 = s2.pop();

    if (!n1 && !n2) continue;
    if (!n1 || !n2 || n1.val !== n2.val) return false;

    s1.push(n1.left);
    s1.push(n1.right);
    s2.push(n2.right);
    s2.push(n2.left);
  }
  return true;
}
