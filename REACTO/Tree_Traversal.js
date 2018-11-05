// Write a series of iterator functions for trees.

// breadthFirst
// depthFirstPreOrder
// depthFirstPostOrder

// Each of these function will take a node of the tree and a callback. The function will iterate through the child nodes, calling the callback function on each of them. The difference between them is the order in which they iterate.

class node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

var a = new node('a');
var b = new node('b');
var c = new node('c');
var d = new node('d');
var e = new node('e');
var f = new node('f');
var g = new node('g');
var h = new node('h');
var i = new node('i');
var j = new node('j');
var k = new node('k');
var l = new node('l');
var m = new node('m');

a.children.push(b, c, d);
b.children.push(e);
e.children.push(k, l);
c.children.push(f, g, h);
h.children.push(m);
d.children.push(i, j);

// callback function
function print(val) {
  console.log(val);
}

// Breadthfirst (level-order)
// iterative using QUEUE
// Time: O(n)

function breadthFirst(node, cb) {
  let queue = [node];

  while (queue.length > 0) {
    let currentNode = queue.shift();
    cb(currentNode.val, cb);
    queue.push(...currentNode.children); // currentNode.children.forEach(child => queue.push(child))
  }
}

breadthFirst(a, print); // A B C D E F G H I J K L M

// DepthFirstPreOrder (go through self and children before sibling, vertical -top down)
// Time: O(n)
// recursive

function depthFirstPreOrder(node, cb) {
  cb(node.val);
  node.children.forEach(child => depthFirstPreOrder(child, cb));
}

depthFirstPreOrder(a, print); // A B E K L C F G H M D I J

// iterative using STACK
function depthFirstPreOrder(node, cb) {
  let stack = [];
}

// DepthFirstPostOrder (go through children first then self, vertical-bottom up)
// Time: O(n)
// recursive

function depthFirstPostOrder(node, cb) {
  node.children.forEach(child => depthFirstPostOrder(child, cb));
  cb(node.val);
}

depthFirstPostOrder(a, print); // K L E B F G M H C I J D A
