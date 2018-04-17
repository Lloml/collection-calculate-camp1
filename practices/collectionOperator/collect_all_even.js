'use strict';
function collect_all_even(collection) {
  for(var i = 0 ; i<collection.length ; i++){
    if(collection[i] % 2 != 0 ){
      collection.splice(i,1);
      i--;
    }
  }
  return collection;
  //在这里写入代码
}

module.exports = collect_all_even;
