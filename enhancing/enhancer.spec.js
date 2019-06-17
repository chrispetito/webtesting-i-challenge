const enhancer = require("./enhancer.js");
// test away!
describe("enhancer.js", () => {
  describe("repair()", () => {
    it("restores durability to 100", () => {
      const item = { name: "item one", durability: 130, enhancement: 3 };
      expect(enhancer.repair({ durability: 100}).durability).toBe(100);
      expect(enhancer.repair({durability: -12}).durability).toBe(100);
    });
  });
});
