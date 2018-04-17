'use strict';

function choose_even(collection) {
  var result = [];
  for(var i = 0 ; i<collection.length;i++){
    if(collection[i] % 2 == 0){
      result[result.length] = collection[i];
    }
  }
  return result;

  //在这里写入代码
}

module.exports = choose_even;
