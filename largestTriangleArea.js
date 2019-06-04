var largestTriangleArea = function(points) {
  let maxArea = 0;

  for (let i = 0; i < points.length; i++) {
    for (let j = 1; j < points.length; j++) {
      for (let k = 2; k < points.length; k++) {
        if (i !== j && i !== k && j !== k) {
          maxArea = Math.max(area(points[i], points[j], points[k]), maxArea);
        }
      }
    }
  }

  return maxArea;
};

var area = function([x1, y1], [x2, y2], [x3, y3]) {
  return Math.abs((x2 - x1) * (y3 - y1) - (x3 - x1) * (y2 - y1)) / 2;
};
