exports.findTriangleType = (a, b, c) => {
  if (!a || !b || !c) return `Enter positive, valid length for sides`;
  else if (a + b < c || b + c < a || c + a < b) return `Cannot form a triangle`;
  else if (a === b && b === c) return `Equilateral triangle`;
  else if (a === b || b === c || c === a) return `Isosceles triangle`;
  else return `Scalence triangle`;
};

