function minimumTime(numOfParts, parts) {
  var total = 0;
  var sum = 0;

  parts.sort((a, b) => a - b);

  for (var i = 0; i < numOfParts - 1; i++) {
    parts.sort((a, b) => a - b);

    sum = parts[0] + parts[1];

    total += sum;
    //       console.log('i:', i);
    parts.shift();
    parts.shift();
    parts.unshift(sum);
    //       console.log('parts:', parts);
    //       console.log('total:', total);
  }

  return total;
}

console.log(minimumTime(4, [20, 4, 8, 2])); // 54
