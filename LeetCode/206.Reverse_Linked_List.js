// Reverse a singly linked list.

// Example:
// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

// Definition for singly-linked list
// function ListNode(val) {
//   this.value = val
//   this.next = null
// }

// Time: O(n); Space: O(1)

let reverseList = function(head) {
  let prev = null

  while(head) {
    let next = head.next
    head.next = prev
    prev = head
    head = next
  }
  return prev
}
