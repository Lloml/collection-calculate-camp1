'use strict';

function compute_average(collection) {
  let result = 0;
  for(let i =0 ; i<collection.length ; i++){
    result += collection[i];
  }
  return result / collection.length;
  //在这里写入代码
}

module.exports = compute_average;

