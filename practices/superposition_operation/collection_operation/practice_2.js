'use strict';

function hybrid_operation_to_uneven(collection) {
  let result = [];
  collection = collection.filter(v => v%2 == 1);

  for (let i = 0; i < collection.length; i++) {
    result.push(collection[i] * 3 + 2);
  }
  return result;

  //在这里写入代码
}

module.exports = hybrid_operation_to_uneven;

