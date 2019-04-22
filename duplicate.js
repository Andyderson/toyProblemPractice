var duplicate = function(array) {
  var bank = [];

  for (var i = 0; i < array.length; i++) {
    bank.push(array[i]);
  }
  return array.concat(bank);
};

duplicate([1, 2, 3, 4, 5]); //[1,2,3,4,5,1,2,3,4,5]
