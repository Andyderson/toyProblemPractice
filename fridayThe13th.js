var fridays = function(year) {
  var count = 0;
  var day = new Date();

  for (var i = 1; i <= 12; i++) {
    day = new Date(year, i, 13);
    if (day.getDay() === 5) {
      count++;
    }
  }
  return count;
};

fridays(2014);
