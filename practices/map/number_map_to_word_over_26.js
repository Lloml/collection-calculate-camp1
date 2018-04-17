'use strict';
var number_map_to_word_over_26 = function(collection){
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    let k = collection[i] - 1;
    if(collection[i] <= 25){
      result.push(String.fromCharCode(97 + k));
    }else{
      result.push(String.fromCharCode(96 + k / 26) + String.fromCharCode(97 + k % 26))
    }
  }
  return result;
};
var collection_a = [1, 13, 27, 30, 25, 27];
console.log(number_map_to_word_over_26(collection_a));

module.exports = number_map_to_word_over_26;
