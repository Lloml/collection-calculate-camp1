'use strict';
var calculate_average = function(collection){
    let result = 0;

    for (let i = 0; i < collection.length; i++) {
        if(collection[i] %2 == 0){
            result += collection[i];
        }
    }
    return result / (collection.length/2);

};
module.exports = calculate_average;
