'use strict';

function double_to_one(collection) {
  let result = [];
  let tmp = [];
  for (let i = 0; i < collection.length; i++) {
    if (typeof (collection[i]) == "number") {
      result.push(collection[i]);
    }

    for (let j = 0; j < collection[i].length; j++) {
      result.push(collection[i][j]);
    }
  }
  for(let i = 0; i< result.length ; i++){
    
      if(tmp.indexOf(result[i]) == -1){
        tmp.push(result[i]);
      }
    
  }
  return tmp ;

  //在这里写入代码
}
var collection = [[1, 2, 3], [5, 2, 1, 4], [2, 1]];
console.log(double_to_one(collection));

module.exports = double_to_one;
