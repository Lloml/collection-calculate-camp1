'use strict';
var single_element = function(collection){
    let tmp = [];
    for (let i = 0; i < collection.length; i++) {
        if ((i + 1) % 2 == 0) {
            tmp.push(collection[i]);
        }
    }
    for(let i = 0;i<tmp.length;i++){
        if (tmp.indexOf(tmp[i]) != tmp.lastIndexOf(tmp[i])){
            tmp = tmp.filter(v => v!=tmp[i]);
            i = -1;
        }
    }
    return tmp;
};
module.exports = single_element;
