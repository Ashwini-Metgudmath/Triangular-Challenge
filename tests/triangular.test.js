const { findTriangleType } = require("../src/triangular.js");
const chai = require("chai");
const expect = chai.expect;

describe("Triangular tests", () => {
    it("return invalid input", () => {
        expect(findTriangleType()).to.be.equal("Enter positive, valid length for sides");
    });
    it("return not a triangle", () => {
        expect(findTriangleType(2, 5, 1)).to.be.equal("Cannot form a triangle");
    });
    it("return equilateral type", () => {
        expect(findTriangleType(3, 3, 3)).to.be.equal("Equilateral triangle");
    });
    it("return Isosceles type", () => {
        expect(findTriangleType(3, 3, 6)).to.be.equal("Isosceles triangle");
    });
    it("return Scalence type", () => {
        expect(findTriangleType(1, 2, 3)).to.be.equal("Scalence triangle");
    });
    
});