var ListFilter = require("../src/list-filtering");

describe("List filtering", () => {
  it("should return only an array of numbers", () => {
    var filter = new ListFilter();
    var arr = ["sss", 3, 7, "9", 1, 2, "aasf", 1, "123", "111", 123, "4", "5"];
    var filteredList = filter.filterList(arr);

    expect(filteredList).toEqual([3, 7, 1, 2, 1, 123]);
  });
});
