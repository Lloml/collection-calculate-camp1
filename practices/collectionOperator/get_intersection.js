'use strict';

function get_intersection(collection_b, collection_a) {
  var result = [];
  var k = 0;
  for(var i = 0 ;i < collection_a.length;i++){
    for(var j = 0 ; j< collection_b.length ; j++){
      if(collection_a[i] == collection_b[j]){
        result[k]=collection_a[i];
        k++;
      }
    }
  }
  return result;
}


module.exports = get_intersection;
