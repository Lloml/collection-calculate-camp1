'use strict';

function get_integer_interval(number_a, number_b) {
  var result = [];
  var k = 0;
  if (number_a < number_b) {
    for (var i = number_a; i <= number_b; i++) {
      
       result[k] = i;
       k++;
      
    }
  }

  if (number_a > number_b) {
    for (var i = number_a; i >= number_b; i--) {
     
      result[k] = i;
      k++;
      
    }
  }
  if (number_a == number_b) {
    
      result[k] = number_a;
    
  }

  return result;
  //在这里写入代码
}

module.exports = get_integer_interval;

