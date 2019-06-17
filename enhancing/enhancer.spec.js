const enhancer = require("./enhancer.js");
// test away!
describe("enhancer.js", () => {
  describe("repair()", () => {
    it("restores durability to 100", () => {
      const item = { name: "item one", durability: 130, enhancement: 3 };
      expect(enhancer.repair({ durability: 100 }).durability).toBe(100);
      expect(enhancer.repair({ durability: -12 }).durability).toBe(100);
    });
  });
  describe("succeed()", () => {
    it("enhancement increases by one if it is less than 20", () => {
      const item = { enhancement: 0 };
      expect(enhancer.succeed(item).enhancement).toBe(1);
    });
    it("enhancement does not increase if it is equal to 20", () => {
      const item = { enhancement: 20 };
      expect(enhancer.succeed(item).enhancement).toBe(20);
    });
  });
});
