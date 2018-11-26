// input: [1, 1, 2, 1, 3, 1];
// output: 13 timeslots

var schedule = function(array) {
  var timeSlots = array.length;

  for (var i = 0; i < array.length; i++) {
    if (array[i] === array[i + 1]) {
      timeSlots = timeSlots + 3;
      continue;
    }
    if (array[i] === array[i + 2]) {
      timeSlots = timeSlots + 2;
      continue;
    }
    if (array[i] === array[i + 3]) {
      timeSlots = timeSlots + 1;
      continue;
    }
  }

  return timeSlots;
};

schedule([1, 1, 2, 1, 3, 1]); //13
// schedule([1, 1]); //1
