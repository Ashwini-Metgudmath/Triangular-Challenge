const { findTriangleType } = require("../src/triangular.js");
const chai = require("chai");
const expect = chai.expect;

describe("Triangular tests", () => {
  it("returns invalid for negative input", () => {
    expect(findTriangleType(-1, -2, -3)).to.be.equal(
      "Invalid input, please enter valid input"
    );
  });
  it("returns invalid for zero input", () => {
    expect(findTriangleType(0, 0, 0)).to.be.equal(
      "Invalid input, please enter valid input"
    );
  });
  it("returns invalid for undefined input", () => {
    expect(findTriangleType(" ")).to.be.equal(
      "Invalid input, please enter valid input"
    );
  });
  it("returns invalid for null input", () => {
    expect(findTriangleType(null)).to.be.equal(
      "Invalid input, please enter valid input"
    );
  });
  it("returns not a triangle", () => {
    expect(findTriangleType(2, 5, 1)).to.be.equal("Cannot form a triangle");
  });
  it("returns equilateral type", () => {
    expect(findTriangleType(3, 3, 3)).to.be.equal("Equilateral triangle");
  });
  it("returns Isosceles type", () => {
    expect(findTriangleType(3, 3, 6)).to.be.equal("Isosceles triangle");
  });
  it("returns Scalence type", () => {
    expect(findTriangleType(1, 2, 3)).to.be.equal("Scalence triangle");
  });
});
