'use strict';

function compute_median(collection) {
  let result;
  let tmp = collection;
  tmp = tmp.sort(function (a, b) {
    return a - b;
  });
  console.log(tmp);
  if (tmp.length % 2 == 0) {
    result = (tmp[tmp.length / 2] + tmp[tmp.length / 2 - 1]) / 2;
  } else {
    result = tmp[tmp.length / 2 - 0.5];
  }
  return result;
  //在这里写入代码
}

module.exports = compute_median;


