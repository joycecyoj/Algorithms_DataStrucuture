// Write a program to find the node at which the intersection of two singly linked lists begins.

// For example, the following two linked lists:

// A:          a1 → a2
//                    ↘
//                      c1 → c2 → c3
//                    ↗
// B:     b1 → b2 → b3
// begin to intersect at node c1.

// Notes:
// If the two linked lists have no intersection at all, return null.
// The linked lists must retain their original structure after the function returns.
// You may assume there are no cycles anywhere in the entire linked structure.
// Your code should preferably run in O(n) time and use only O(1) memory.

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/*
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

// Two Pointer
// Time: O(n); Space: O(1)
function getIntersectionNode(headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }

  let currA = headA;
  let currB = headB;

  while (currA && currB && currA !== currB) {
    currA = currA.next;
    currB = currB.next;

    if (currA === currB) {
      return currA;
    }

    if (!currA) {
      currA = headB;
    } else if (!currB) {
      currB = headA;
    }
  }
  return headA;
}

// Approach: when run out of nodes on one list, redirect to the beginning of the other. traverse until find matching node

// Hash Table
// Time: O(n + m) => O(n); Space: O(n)
function getIntersectionNode(headA, headB) {
  let hash = {};
  while (headA) {
    hash[headA.val] = 1;
    headA = headA.next;
  }

  while (headB) {
    if (headB.val in hash) {
      return headB;
    } else {
      headB = headB.next;
    }
  }
  return null;
}

// Nested Loop - for each node in headA, traverse headB to find match
// Time: O(n^2); Space: O(1)
function getIntersectionNode(headA, headB) {
  if (headA === null || headB === null) {
    return null;
  }

  while (headA) {
    let currB = headB;

    while (currB) {
      if (headA.val === currB.val) {
        return headA;
      } else {
        currB = currB.next;
      }
    }
    headA = headA.next;
  }
  return null;
}
