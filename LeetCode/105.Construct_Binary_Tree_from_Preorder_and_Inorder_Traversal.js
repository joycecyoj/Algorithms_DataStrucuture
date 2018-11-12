// Medium
// DFS
// Given preorder and inorder traversal of a tree, construct the binary tree.

// Note: You may assume that duplicates do not exist in the tree.

// Example:
// preorder = [3,9,20,15,7]
// inorder = [9,3,15,20,7]
// Return the following binary tree:
//     3
//    / \
//   9  20
//     /  \
//    15   7

// Example:
// preorder = [3,9,4,2,20,15,7]
// inorder = [4,9,2,3,15,20,7]
// Return the following binary tree:
//        3
//       / \
//     9    20
//   /  \  /  \
//  4   2  15   7

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

// Time: O(2^n); Space: O(preOdr + inOdr) => O(2n) => O(n)
function buildTree(preorder, inorder) {
  if (preorder.length === 0) {
    return null;
  }

  let inOrdIdx = inorder.indexOf(preorder[0]);
  let root = new TreeNode(preorder[0]);

  let inOrdLeft = inorder.slice(0, inOrdIdx);
  let inOrdRight = inorfer.slice(inOrdLeft + 1);
  let preOrdLeft = preorder.slice(1, inOrdLeft.length + 1);
  let preOrdRight = preorder.slice(inOrdLeft.length + 1);

  root.left = buildTree(inOrdRight, inOrdLeft);
  root.right = buildTree(preOrdLeft, preOrdRight);

  return root;
}

// Approach:
// preorder - root / left / right (root being always first)
// inorder - left / root / right

// BASE: if preorder is empty, return null
// 1 - find the idx of root in inorder (inOrdIdx)
// 2 - use inOrdIdx to slice inorder into 2 sections:
//     - left: 0, inOrdIdx
//     - right: inOrdIdx + 1
// 3 - use the length of inOrdLeft and inOrdRight to slice preorder into 2 sections:
//     - left: 1, inOrdLeft.length + 1
//     - right: 1 + inOdrLeft.length
// 4 - make new node using 1st elem in preorder (preorder[0])
// 5 - node's left will be recursive call with inOrd sections from step 2
// 6 - node's right will be recursive call with preOrd sections form step 3
// 7 - return root
