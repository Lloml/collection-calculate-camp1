'use strict';
function get_integer_interval_2(number_a, number_b) {
  var result = [];
  var k=0;
  if(number_a < number_b){
    for(var i = number_a ; i<= number_b;i++){
      if(i % 2 == 0){
        result[k] = i;
        k++;
      }
    }
  }
  
  if(number_a > number_b){
    for (var i = number_a; i >= number_b; i--) {
      if (i % 2 == 0) {
        result[k] = i;
        k++;
      }
    }
  }
  if(number_a == number_b){
    if(number_a % 2 == 0){
      result[k] = number_a;
    }
  }
  
  return result;
  //在这里写入代码
}

module.exports = get_integer_interval_2;
