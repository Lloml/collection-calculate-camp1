'use strict';
var calculate_median = function(collection){
    let result;
    let tmp = [];
    if(collection.length %2 != 0){
        for(let i = 0 ;i<collection.length ; i++){
            if(i%2 == 0){
                tmp.push(collection[i]);
            }
        }
        
    }else{
        for (let i = 0; i < collection.length; i++) {
            if (i % 2 != 0) {
                tmp.push(collection[i]);
            }
        }
    }
    if (tmp.length % 2 == 0) {
        result = (tmp[tmp.length / 2 - 1] + tmp[tmp.length / 2]) / 2;
    } else {
        result = tmp[tmp.length / 2 - 0.5];
    }
    return result;

};
module.exports = calculate_median;
