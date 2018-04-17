'use strict';

function collect_max_number(collection) {
  let a, b;
  collection.sort(function (a, b) {
    return b - a
  });
  return collection[0];
}

module.exports = collect_max_number;
