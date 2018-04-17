'use strict';

function compute_chain_median(collection) {
  let tmp = [];
  let result;
  for(let i = 0 ;i < collection.length ;i++){
   
    if (collection[i].charCodeAt(0) >= 48 && collection[i].charCodeAt(0) <= 57){
      console.log(collection[i]);
      if(collection[i+1]>='0'&&collection[i+1]<='9'){
        tmp.push(Number(collection[i]+collection[i+1]));
        i++;
      }else{
        tmp.push(Number(collection[i]));
      }
    }
  }
  console.log(tmp);
  tmp = tmp.sort(function(a,b){
    return a - b;
  });
  console.log(tmp);
  if (tmp.length % 2 == 0)
  {
    result = (tmp[tmp.length / 2]  + tmp[tmp.length/2-1])/2;
  }else{
    result = tmp[tmp.length/2-0.5];
  }
  return result;
  //在这里写入代码
}
var chain = '1->4->6->2->3->10->9->8->11->20->19->30'
console.log(compute_chain_median(chain));
module.exports = compute_chain_median;
