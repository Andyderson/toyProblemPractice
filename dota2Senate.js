/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
  debugger;
  var split = senate.split("");

  for (var i = 0; i < split.length; i++) {
    var indexD = split.indexOf("D"); // 1
    var indexR = split.indexOf("R"); // 0

    var indexD1 = split.indexOf("D", i + 1); // 1
    var indexR1 = split.indexOf("R", i + 1); // -1

    if (indexD === -1 && indexD1 === -1) {
      return "Radiant";
    }

    if (indexR === -1 && indexR1 === -1) {
      return "Dire";
    }

    if (split[i] === "R" && indexD1 !== -1) {
      split.splice(indexD1, 1);
    }

    if (split[i] === "D" && indexR1 !== -1) {
      split.splice(indexR1, 1);
    }

    if (i === split.length - 1 && split[i] === "R" && indexD !== -1) {
      split.splice(indexD, 1);
    }

    if (i === split.length - 1 && split[i] === "D" && indexR !== -1) {
      split.splice(indexR, 1);
    }

    if (split.length === 1) {
      if (split[0] === "R") {
        return "Radiant";
      } else {
        return "Dire";
      }
    }

    var indexD = split.indexOf("D"); // 1
    var indexR = split.indexOf("R"); // 0

    var indexD1 = split.indexOf("D", i + 1); // 1
    var indexR1 = split.indexOf("R", i + 1); // -1

    if (indexD === -1 && indexD1 === -1) {
      return "Radiant";
    }

    if (indexR === -1 && indexR1 === -1) {
      return "Dire";
    }
  }
};

console.log(predictPartyVictory("RD")); //"Radiant"
console.log(predictPartyVictory("RDD")); //"Dire"
console.log(predictPartyVictory("DDRR")); //"Dire"
