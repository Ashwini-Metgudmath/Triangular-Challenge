const { findTriangleType } = require("../src/triangular.js");
const chai = require("chai");
const expect = chai.expect;

describe("Triangular tests", () => {
  it("returns invalid for negative input", () => {
    expect(findTriangleType(-1, -2, -3)).to.be.equal(
      "Cannot enter negative or zero values"
    );
  });
  it("returns invalid for zero input", () => {
    expect(findTriangleType()).to.be.equal("Enter input values");
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
