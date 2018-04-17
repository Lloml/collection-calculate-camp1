'use strict';

function get_letter_interval_2(number_a, number_b) {
  var result = [];
  var k = 0;
  if(number_a< number_b){
  
    for(var i = number_a-1 ;i <= number_b-1 ;i++){
      if(i <= 25){
        result[k] = String.fromCharCode(97 + i)
      }
      else{
        result[k] = String.fromCharCode(96 + i / 26) + String.fromCharCode(97 + i%26)
    }
    k++;
   }   
}

  if (number_a > number_b) {

    for (var i = number_a-1; i >= number_b-1; i--) {
      if (i <= 25) {
        result[k] = String.fromCharCode(97 + i)
      }
      else {
        result[k] = String.fromCharCode(96 + i / 26) + String.fromCharCode(97 + i % 26)
      }
      k++;
    }   //在这里写入代码
  }
  if(number_a == number_b){
    i = number_a-1;
    if (i <= 25) {
      result[k] = String.fromCharCode(97 + i)
    }
    else {
      result[k] = String.fromCharCode(96 + i / 26) + String.fromCharCode(97 + i % 26)
    }
  }
  return result;
}
console.log(get_letter_interval_2(28,28));
console.log(String.fromCharCode(97));
module.exports = get_letter_interval_2;

