var oddEvenList = function(head) {
  if (head === null) {
    return head;
  }

  var bankOdd = [];
  var bankEven = [];
  var counter = 0;
  var ptr = head.next;

  while (ptr !== null) {
    if (counter % 2 === 0) {
      bankEven.push(ptr.val);
    } else {
      bankOdd.push(ptr.val);
    }
    ptr = ptr.next;
    counter++;
  }

  ptr = head;

  for (var i = 0; i < bankOdd.length; i++) {
    ptr.next = new ListNode(bankOdd[i]);
    ptr = ptr.next;
  }

  for (var j = 0; j < bankEven.length; j++) {
    ptr.next = new ListNode(bankEven[j]);
    ptr = ptr.next;
  }

  return head;
};
