var findDisappearedNumbers = function(nums) {
  var map = {};

  for (let i = 1; i < nums.length + 1; i++) {
    map[i] = 1;
  }

  nums.forEach(ele => {
    delete map[ele];
  });

  return Object.keys(map);
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])); //[5, 6]
