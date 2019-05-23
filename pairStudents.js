// Sample Input:
// student_course_pairs = [
//     ["58", "Software Design"],
//     ["58", "Linear Algebra"],
//     ["94", "Art History"],
//     ["94", "Operating Systems"],
//     ["17", "Software Design"],
//     ["58", "Mechanics"],
//     ["58", "Economics"],
//     ["17", "Linear Algebra"],
//     ["17", "Political Science"],
//     ["94", "Economics"]
// ]

var pairStudents = array => {
  var results = {};
  var map = {};

  for (let i = 0; i < array.length; i++) {
    if (!map[array[i][0]]) {
      map[array[i][0]] = [];
      map[array[i][0]].push(array[i][1]);
    } else {
      map[array[i][0]].push(array[i][1]);
    }
  }

  var classes = Object.values(map);
  var students = Object.keys(map);

  var pairs = [];
  var sharedClasses = [];

  for (let j = 0; j < classes.length; j++) {
    for (let k = j + 1; k < classes.length; k++) {
      pairs.push(Number(students[j]), Number(students[k]));
      for (let l = 0; l < classes[j].length; l++) {
        if (classes[k].includes(classes[j][l])) {
          sharedClasses.push(classes[j][l]);
        }
      }

      var stringified = JSON.stringify(pairs);
      results[stringified] = sharedClasses;
      sharedClasses = [];
      pairs = [];
    }
  }
  return results;
};

pairStudents([
  ["58", "Software Design"],
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"]
]);

// find_pairs(student_course_pairs) =>
// {
//     [58, 17]: ["Software Design", "Linear Algebra"]
//     [58, 94]: ["Economics"]
//     [17, 94]: []
// }
