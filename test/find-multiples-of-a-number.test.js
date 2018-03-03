var Multiples = require("../src/find-multiples-of-a-number");

describe("Multiples of number", () => {
  it("should take in an array of value, integer and limit", () => {
    var multiples = new Multiples();
    
    var output = multiples.findMultiples(2, 6);
    expect(output).toEqual([2, 4, 6]);

    var output = multiples.findMultiples(3, 19);
    expect(output).toEqual([3, 6, 9, 12, 15, 18]);
  });
});
