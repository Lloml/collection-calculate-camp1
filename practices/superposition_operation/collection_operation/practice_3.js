'use strict';

function hybrid_operation_to_uneven(collection) {
  let result = 0;
  collection = collection.filter(v => v % 2 == 1);

  for (let i = 0; i < collection.length; i++) {
    result +=collection[i]*3+5;
  }
  return result;

  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

