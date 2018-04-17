'use strict';

function choose_divisible_integer(collection_a, collection_b) {

  let result = [];
  for(let i = 0;i < collection_a.length ; i++){
    for(let j  = 0; j <collection_b.length ; j++){
      if(collection_a[i] % collection_b[j] == 0)
      result.push(collection_a[i])
    }
  }
  return result;
  //在这里写入代码
}
var collection_a = [4, 7, 9, 25, 16, 21, 64, 32, 35, 49];
var collection_b = [2, 3, 5];
console.log(choose_divisible_integer(collection_a,collection_b));

module.exports = choose_divisible_integer;
