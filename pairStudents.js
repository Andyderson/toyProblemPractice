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

// Sample Output (pseudocode, in any order)

// find_pairs(student_course_pairs) =>
// {
//     [58, 17]: ["Software Design", "Linear Algebra"]
//     [58, 94]: ["Economics"]
//     [17, 94]: []
// }

const pairStudents = array => {
  let results = {};
  let temp = {};

  for (let i = 0; i < array.length; i++) {
    if (!temp[array[i][0]]) {
      temp[array[i][0]] = [];
      temp[array[i][0]].push(array[i][1]);
    } else {
      temp[array[i][0]].push(array[i][1]);
    }
  }

  let ids = Object.keys(temp);
  let classes = Object.values(temp);

  console.log(ids, classes);

  for (let j = 0; j < classes.length; j++) {
    for (let k = 0; k < classes[j].length; k++) {
      console.log(classes[j][k]);
      for (let l = 0; l < classes[j][k].length; l++) {}
    }
  }
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
