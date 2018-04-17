'use strict';

function even_to_letter(collection) {
  let result = [];
  collection = collection.filter(v => v%2 == 0);
  for(let i = 0;i<collection.length;i++){
    result.push(String.fromCharCode(96 + collection[i]))
  }
  return result;

  //在这里写入代码
}

module.exports = even_to_letter;
