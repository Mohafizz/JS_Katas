var NonConsecutive = require("../src/first_non-consecutive_number");

describe("Non consecutive", () => {
  test("should return the first number that is not consecutive in an array", () => {
    var nonCensecutive = new NonConsecutive();
    var inputArr = [1, 2, 3, 4, 6, 7, 8];
    var output = nonCensecutive.findFirstNonConsecutiveNumber(inputArr);

    expect(output).toEqual(4);

    var inputArr2 = [0, -1, -2, -3, -5, -6];
    var output = nonCensecutive.findFirstNonConsecutiveNumber(inputArr2);

    expect(output).toEqual(-3);

    var inputArr3 = [-2, -3];
    var output = nonCensecutive.findFirstNonConsecutiveNumber(inputArr3);

    expect(output).toEqual(null);
  });
});
