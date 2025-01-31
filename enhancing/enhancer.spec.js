const enhancer = require("./enhancer.js");
// test away!
describe("enhancer.js", () => {
  describe("repair()", () => {
    it("restores durability to 100", () => {
      const item = { name: "item one", durability: 130, enhancement: 20 };
      expect(enhancer.repair(item).durability).toBe(100);
      expect(enhancer.repair(item).durability).toBe(100);
      expect(enhancer.repair(item).enhancement).toBe(20)
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
    it("increase in enhancement does not affect durability", () => {
      const item = { enhancement: 15, durability: 80 };
      expect(enhancer.succeed(item).enhancement).toBe(16);
      expect(enhancer.succeed(item).durability).toBe(80);
      //   expect(enhancer.succeed(item).durability).toBe(81) // this test fails because the expected output is 80, not 81
    });
  })
  describe('fail()', () => {
      it('if enhancement is less that 15, durability decreases by 5', () => {
          const item = { enhancement: 12, durability: 80}
          expect(enhancer.fail(item).durability).toBe(75)
      })
      it('if enhancement is greater than 15, durability is decreased by 10', () => {
          const item = { enhancement: 15, durability: 80}
          expect(enhancer.fail(item).durability).toBe(70)
        //   expect(enhancer.fail(item).durability).toBe(80) // test fails because expected output is 80 - 10 - 10 = 60
      })
      it('if enhancement is 16 or greater, enhancement decreased by 1', () => {
          const item = { enhancement: 19}
          expect(enhancer.fail(item).enhancement).toBe(18)
      })
  })
  describe('get()', () => {
      it('if enhancement is 0, the name is unchanged', () => {
          const item = { name: 'name example', enhancement: 0 }
          expect(enhancer.get(item).name).toBe('name example')
      })
      it('if enhancement is greater than 0, return enhancement and name', () => {
          const item = { name: 'name', enhancement: 7} 
          expect(enhancer.get(item).name).toBe('[+7] name')
      })
  })
});
