var colors = function(array) {
  var results = [];

  array.forEach(ele => {
    if (ele.color.includes("i")) {
      results.push(ele.color);
    }
  });

  return results;
};

colors([
  { color: "blue" },
  { color: "red" },
  { color: "white" },
  { color: "indigo" },
  { color: "purple" }
]);
