'use strict';
var even_asc_odd_desc = function(collection){
    let result=[];  
    let tmp_1 =[];
    let tmp_2 =[];
    tmp_1 = collection.filter(v => v%2 == 0);
    tmp_2 = collection.filter(v => v%2 != 0);
    tmp_1.sort(function(a,b){
        return a - b;
    });
    tmp_2.sort(function (a, b) {
        return b - a;
    });
    return result = tmp_1.concat(tmp_2);

};
module.exports = even_asc_odd_desc;
