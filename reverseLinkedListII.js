var reverseBetween = function(head, m, n) {
  var index = 1;
  var prevIndex = m - 1;
  var before;
  var last;
  var current = head;
  var prev = null;
  var next;

  while (current) {
    if (prevIndex === index) {
      before = current;
    }

    if (index >= m && index <= n) {
      next = current.next;
      if (index === m) {
        last = current;
      }

      current.next = prev;
      prev = current;
      current = next;

      if (index === n) {
        break;
      }
    } else {
      current = current.next;
    }
    index++;
  }

  if (before) {
    before.next = prev;
  }
  last.next = next;

  return m === 1 ? prev : head;
};
