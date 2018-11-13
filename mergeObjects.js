var mergeObjects = function() {
  var results = {};

  var merge = function(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        results[prop] = obj[prop];
      }
    }
  };

  for (var i = 0; i < arguments.length; i++) {
    merge(arguments[i]);
  }

  return results;
};

var car = {
  color: "red",
  type: "Volvo"
};

var van = {
  hue: "green",
  make: "Ford"
};

var newObj = mergeObjects(car, van);
newObj;
