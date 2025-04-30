import { expect } from "chai";
import { Calculator } from "../src/calculator/calculator.js";

describe("Testy Calculator", () => {
  it("add(3, 1) = 4", () => {
    const calculator = new Calculator();
    const result = calculator.add(3, 1);
    expect(result).to.eq(4);
  });

  it("add(8, 2) = 10", () => {
    const calculator = new Calculator();
    expect(calculator.add(8, 2)).to.eq(10);
  });

  it("subtract(8, 2) = 6", () => {
    const calculator = new Calculator();
    expect(calculator.subtract(8, 2)).to.eq(6);
  });

  it("multiply(2, 7) = 14", () => {
    const calculator = new Calculator();
    expect(calculator.multiply(2, 7)).to.eq(14);
  });

  it("divide(9, 3) = 3", () => {
    const calculator = new Calculator();
    expect(calculator.divide(9, 3)).to.eq(3);
  });
});
