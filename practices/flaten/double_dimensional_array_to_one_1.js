'use strict';

function double_to_one(collection) {
  let result = [];
  for(let i = 0 ; i< collection.length;i++){
    if(typeof(collection[i]) == "number"){
      result.push(collection[i]);
    }
    
    for(let j = 0 ; j< collection[i].length ; j++){
      result.push(collection[i][j]);
    }
  }
  return result;
  //在这里写入代码
}
var collection = [1, [2], [3, 4]];
console.log(double_to_one(collection));
module.exports = double_to_one;
