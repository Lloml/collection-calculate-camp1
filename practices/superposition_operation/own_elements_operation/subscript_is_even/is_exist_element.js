'use strict';
var is_exist_element = function(collection,element){
    let result;
    let tmp = [];
    for(let i = 0;i<collection.length;i++){
        if(i%2 == 0){
            tmp.push(collection[i])
        }
    }
    if(tmp.indexOf(element) == -1){
        return false;
    }else{
        return true;
    }


};
module.exports = is_exist_element;
