/*In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
E.g.
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]*/
class ListFilter {
  filterList(arr) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === String(arr[i])) {
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  }
}
module.exports = ListFilter;
