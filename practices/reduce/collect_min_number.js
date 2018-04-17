'use strict';

function collect_min_number(collection) {
  collection.sort();
  return collection[0];
}

module.exports = collect_min_number;

