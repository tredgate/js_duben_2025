//hooks_tests.spec.js
import { expect } from "chai";
import { Calculator } from "../src/calculator/calculator.js";

describe("Testy Calculator s Hooks", () => {
  let calculator;

  beforeEach(() => {
    console.log("Běžím před každým testem v tomto describe");
    calculator = new Calculator();
  });

  it("add(3, 1) = 4", () => {
    const result = calculator.add(3, 1);
    expect(result).to.eq(4);
  });

  it("add(8, 2) = 10", () => {
    expect(calculator.add(8, 2)).to.eq(10);
  });

  it("subtract(8, 2) = 6", () => {
    expect(calculator.subtract(8, 2)).to.eq(6);
  });

  it("multiply(2, 7) = 14", () => {
    expect(calculator.multiply(2, 7)).to.eq(14);
  });

  it("divide(9, 3) = 3", () => {
    expect(calculator.divide(9, 3)).to.eq(3);
  });
});
