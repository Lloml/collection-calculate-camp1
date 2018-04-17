'use strict';

function average_to_letter(collection) {
  let result = 0 ;
  
  for (let i = 0; i < collection.length; i++) {
    result += collection[i];
  }
  return String.fromCharCode(97+result/collection.length);

  //在这里写入代码
}

module.exports = average_to_letter;

