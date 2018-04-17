'use strict';

function compare_collections(collection_a, collection_b) {
  let k = 0;
  for(let i =0 ;i<collection_a.length;i++){
    if(collection_a[i]==collection_b[i]){
      k++;
    }
  }
  if(collection_a.length != collection_b.length)
  {return false;}
  if(k == collection_a.length){
    return true;
  }else{
    return false;
  }
}
var collection_a = [1, 11, 27, 20, 4, 9, 15];
var collection_b = [1, 11, 27, 20, 4, 9,15];
console.log(compare_collections(collection_a,collection_b));
module.exports = compare_collections;


