// Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

// Example:
// Input: 1->2->4, 1->3->4
// Output: 1->1->2->3->4->4

// Definition for singly-linked list.
// function ListNode(val) {
//   this.val = val;
//   this.next = null;

function mergeTwoLists(l1, l2) {
  let head = new ListNode(0);
  let current = head;

  while (l1 && l2) {
    if (l2.val <= l1.val) {
      current.next = l2;
      l2 = l2.next;
    } else {
      current.next = l1;
      l1 = l1.next;
    }
    current = current.next;
  }
  current.next = l1 || l2;

  return head.next;
}
