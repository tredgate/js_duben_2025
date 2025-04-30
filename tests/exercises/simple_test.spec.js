import { expect } from "chai";

describe("Cvičení: Mocha a Chai.js", () => {
  it("Petr je Petr", () => {
    expect("Petr").to.be.eq("Petr");
  });
});
