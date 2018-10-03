// Given a linked list, determine if it has a cycle in it.
// Follow up: Solve it without using extra space?

// Definition for singly-linked list.
// function ListNode(val) {
//   this.val = val;
//   this.next = null;
// }

// Using Set - T: O(n); S: O(n)
function hasCycleWithSet(head) {
  let nodesVisited = new Set();

  while (head) {
    if (nodesVisited.has(head)) {
      return true;
    } else {
      nodesVisited.add(head);
    }
    head = head.next;
  }
  return false;
}

// Using Two Pointer - T: O(1); S:O(1)
function hasCycleWith2Pointer(head) {
  let slow = head;
  let fast = head;

  if (head === null) {
    return false;
  }

  while (fast && fast.next) {
    slow = head.next;
    fast = head.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
}
