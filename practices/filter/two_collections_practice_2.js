'use strict';

function intersection(collection_a,collection_b){
  var result = [];
  var k = 0;
  for (var i = 0; i < collection_a.length; i++) {
    for (var j = 0; j < collection_b.length; j++) {
      if (collection_a[i] == collection_b[j]) {
        result[k] = collection_a[i];
        k++;
      }
    }
  }
  return result;
}

function union(collection_a,collection_b){
  var result = collection_a;
  var k = 0, length = collection_a.length;
  for (var i = 0; i < collection_b.length; i++) {
    k = 0;
    for (var j = 0; j < length; j++) {
      if (collection_b[i] != collection_a[j]) {
        k++;
      }
      if (k == length) {
        result[result.length] = collection_b[i]
      }
    }
  }
  return result;
}
Array.prototype.indexOf = function (val) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == val) return i;
  }
  return -1;
};

Array.prototype.remove = function (val) {
  var index = this.indexOf(val);
  if (index > -1) {
    this.splice(index, 1);
  }
};
function choose_no_common_elements(collection_a, collection_b) {
  var result = [];
  var union_ab = union(collection_a,collection_b);
  var intersection_ab = intersection(collection_a,collection_b);
  for(var i = 0 ; i<intersection_ab.length;i++){
    union_ab.remove(intersection_ab[i]);
  }
  return union_ab;
  //在这里写入代码
}

module.exports = choose_no_common_elements;
