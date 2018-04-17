'use strict';

function average_uneven(collection) {
  let result = 0;
  collection = collection.filter(v => v % 2 == 1);

  for (let i = 0; i < collection.length; i++) {
    result += collection[i];
  }
  return result/collection.length;

  //在这里写入代码
}

module.exports = average_uneven;
