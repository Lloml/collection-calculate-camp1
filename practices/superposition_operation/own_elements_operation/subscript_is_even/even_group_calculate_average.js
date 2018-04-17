'use strict';
function getAverage(tmp){
    let result = 0;
    for (var i = 0; i < tmp.length; i++) {
        result += tmp[i];
    }
    if(tmp.length == 0){
        return -1;
    }
    console.log(result);
    return result/tmp.length;
}
var even_group_calculate_average = function(collection){
    let tmp = [],tmp_2 = [];
    let result = [];
    for (let i = 0; i < collection.length; i++) {
        if ((i+1)% 2 == 0) {
            tmp.push(collection[i]);
        }
    }
    console.log(tmp);
    tmp = tmp.filter(v => v%2 == 0)
    if(tmp.length == 0){
        return [0];
    }
    console.log(tmp);
    tmp_2[0] = tmp.filter(v => v>0&&v<=9);
    tmp_2[1] = tmp.filter(v => v>=10 && v<=99);
    tmp_2[2] = tmp.filter(v => v>=100 && v<= 999);
    for(let i = 0;i<3;i++){
        if(tmp_2[i].length != 0){
            console.log(tmp_2[i]);
            result.push(getAverage(tmp_2[i]));
        }
    }
    return result;

};
var collection_a = [1, 2, 3, 4, 5, 6, 12, 454, 324, 21, 45, 644, 34, 56, 345, 570, 8, 4, 14];
var collection_b = [1, 3, 5, 7, 33, 55, 31, 555, 777];
var collection_c = [344, 256, 55, 777, 322, 180];
console.log(even_group_calculate_average(collection_a));
module.exports = even_group_calculate_average;
