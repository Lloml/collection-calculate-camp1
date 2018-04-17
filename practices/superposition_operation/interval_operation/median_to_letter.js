'use strict';

function median_to_letter(collection) {
  let mid;
  let result;
  let len = collection.length
  if(len%2 == 0){
    mid = (collection[len/2-1]+collection[len/2])/2;
  }else{
    mid = collection[len/2 - 0.5];
  }
  console.log(mid);
  if (mid <= 25) {
    result=(String.fromCharCode(97 + mid));
  } else {
    result=(String.fromCharCode(96 + mid / 26) + String.fromCharCode(97 + mid % 26))
  }
  return result;
}

  //在这里写入代码

var collection = [20, 21, 22, 23, 24, 25, 26, 27, 28, 29,
  30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
  40, 41, 42, 43, 44, 45, 46, 47, 48, 49,
  50, 51, 52, 53];
console.log(median_to_letter(collection));
module.exports = median_to_letter;
