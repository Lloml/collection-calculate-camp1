'use strict';

function calculate_elements_sum(collection) {
  let result = 0;
  for(let i = 0;i < collection.length ;i++ ){
    result += collection[i];
  }
  return result;
  //在这里写入代码
}

module.exports = calculate_elements_sum;

