exports.findTriangleType = (a, b, c) => {
  if (a > 0 && b > 0 && c > 0) {
    if (a + b < c || b + c < a || c + a < b) return `Cannot form a triangle`;
    else if (a === b && b === c) return `Equilateral triangle`;
    else if (a === b || b === c || c === a) return `Isosceles triangle`;
    else return `Scalence triangle`;
  } else return `Invalid input, please enter valid input`;
};
