'use strict';
var rank_asc = function(collection){
  let a,b;
  collection.sort(function(a,b){
    return b - a
  });
  return collection;
};

module.exports = rank_asc;
