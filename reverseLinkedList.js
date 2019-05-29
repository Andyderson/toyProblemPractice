// Input: 1->2->3->4->5->NULL
// Output: 5->4->3->2->1->NULL

var reverseList = function(head) {
  if (!head) {
    return head;
  }

  let first = head;
  let curr = head.next;

  while (curr) {
    head.next = curr.next;
    curr.next = first;
    first = curr;
    curr = head.next;
  }

  return first;
};

var reverseList = head => {
  if (!head || !head.next) {
    return head;
  }

  var newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;
  return newHead;
};
