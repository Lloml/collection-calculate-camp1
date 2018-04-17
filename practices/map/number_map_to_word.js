'use strict';
var number_map_to_word = function(collection){
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    let k = collection[i] - 1;
    if (collection[i] <= 25) {
      result.push(String.fromCharCode(97 + k));
    } else {
      result.push(String.fromCharCode(96 + k / 26) + String.fromCharCode(97 + k % 26))
    }
  }
  return result;
};

module.exports = number_map_to_word;
