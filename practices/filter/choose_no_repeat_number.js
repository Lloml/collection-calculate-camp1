'use strict';

function choose_no_repeat_number(collection) {
  var c;
  var result = [];
  var  k = 0;

  for (; collection.length != 0;) {
    k = 0;
    c = collection[0];
    for (var j = 0; j < collection.length; j++) {
      if (collection[j] == c) {
        collection.splice(j, 1);
        j--;
        k = k + 1;
      }

    }
    result[result.length] = c;
  }
  return result;
  //在这里写入代码
}
module.exports = choose_no_repeat_number;
