var mergeTwoLists = function(l1, l2) {
  return [...l1, ...l2].sort((a, b) => a - b);
};

mergeTwoLists([1, 2, 4], [1, 3, 4]); //[1, 1, 2, 3, 4, 4]
