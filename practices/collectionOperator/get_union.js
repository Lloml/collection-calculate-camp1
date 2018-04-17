'use strict';

function get_union(collection_a, collection_b) {
  var result = collection_a;
  var k = 0, length = collection_a.length;
  for(var i = 0 ;i<collection_b.length ; i++){
    k = 0;
    for(var j = 0 ; j< length ; j++){
      if(collection_b[i] != collection_a[j] ){
        k++;
      }
      if(k == length){
        result[result.length] = collection_b[i]
      }
    }
  }
  return result;
}
module.exports = get_union;

