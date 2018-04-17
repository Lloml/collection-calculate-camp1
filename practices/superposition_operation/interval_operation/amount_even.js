'use strict';

function amount_even(collection) {
  let result = 0;
  collection = collection.filter(v => v % 2 == 0);

  for (let i = 0; i < collection.length; i++) {
    result += collection[i];
  }
  return result;
  //在这里写入代码
}

module.exports = amount_even;
