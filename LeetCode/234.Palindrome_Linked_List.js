// Given a singly linked list, determine if it is a palindrome.

// Input: 1->2
// Output: false

// Input: 1->2->2->1
// Output: true

// Follow up:
// Could you do it in O(n) time and O(1) space?

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/*
 * @param {ListNode} head
 * @return {boolean}
 */

// Time: O(n)
function isPalindrome(head) {
  let count = 0;
  let isOdd = false;
  let current = head;
  let stack = [];

  while (head) {
    count++;
    head = head.next;
  }
  if (count % 2 !== 0) {
    isOdd = true;
  }
  if (count <= 1) {
    return true;
  }

  let mid = Math.floor(count / 2);
  let index = 0;

  while (current) {
    if (isOdd && index === mid) {
      current = current.next;
      index++;
    }

    if (index < mid) {
      stack.push(current.val);
      index++;
      current = current.next;
    } else if (current.val !== stack.pop()) {
      return false;
    } else {
      current = current.next;
    }
  }
  return true;
}

// Approach:
// 1 - push values to stack until reach midpoint of LL
// 2 - if LL length is odd, then skip mid
// 3 - check node val against top of stack

function isPalindrome(head) {
  let first = '';
  let second = '';

  while (head) {
    first = first + head.val;
    second = head.val + second;
    head = head.next;
  }
  return first === second;
}
