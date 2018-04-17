'use strict';
function rank_by_two_large_one_small(collection){
  collection.sort(function(a,b){
    return a-b;
  })
  for(let i = 0,len = collection.length;i<len;i=i+3){
    if(i+3 < len){
      let k = collection[i];
      collection[i] = collection[i + 1];
      collection[i + 1] = collection[i + 2];
      collection[i + 2] = k;
    }
  }
  return collection;
  //这里写代码。。。
}
module.exports = rank_by_two_large_one_small;
