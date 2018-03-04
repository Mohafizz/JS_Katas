var NonConsecutive = require("../src/first_non-consecutive_number");

describe("Non consecutive", () => {
  test("should return the first number that is not consecutive in an array", () => {
    var nonCensecutive = new NonConsecutive();
    var inputArr = [1, 2, 3, 4, 6, 7, 8];
    var output = nonCensecutive.findFirstNonConsecutiveNumber(inputArr);

    expect(output).toEqual(6);

    var inputArr2 = [-9, -8, -7, -5, -4, -3, -2, -1, 0];
    var output = nonCensecutive.findFirstNonConsecutiveNumber(inputArr2);

    expect(output).toEqual(-5);

    var inputArr3 = [-3, -2];
    var output = nonCensecutive.findFirstNonConsecutiveNumber(inputArr3);

    expect(output).toEqual(null);
  });
});
