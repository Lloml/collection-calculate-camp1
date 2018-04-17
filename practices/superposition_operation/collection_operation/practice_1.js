'use strict';

function hybrid_operation(collection) {
  let result = 0;

  for (let i = 0; i < collection.length; i++) {
    result += collection[i]*3+2
  }
  return result;

  //在这里写入代码
}

module.exports = hybrid_operation;

