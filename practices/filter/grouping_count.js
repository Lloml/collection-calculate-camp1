'use strict';

function grouping_count(collection) {
  var c;
  let result = {}  ;
  var k = 0;


  for (var i = 0; i < collection.length; i++) {

    if (typeof(result[String(collection[i])]) == 'number'){
      result[String(collection[i])]++;
    }else{
      result[String(collection[i])] = 1;
    }

  }
  return result;
  //在这里写入代码
}

module.exports = grouping_count;
