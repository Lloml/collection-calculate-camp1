function count_same_elements(collection) {
  let tmp = {};
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    if (typeof (tmp[collection[i]]) != "number") {
      
      if(collection[i][1] == '-'){
        tmp[collection[i][0]] = Number(collection[i][2]);
      } else { tmp[collection[i]] = 1;}
      
    } else {
      tmp[collection[i]]++;
    }
  }
  for (let i = 0; i < Object.entries(tmp).length; i++) {
    let tmp_entries = Object.entries(tmp);
    let key = tmp_entries[i][0];
    let count = tmp_entries[i][1];
    let obj = { key, count };
    result.push(obj);
  }
  return result;
}
var collection = [
  "a", "a", "a",
  "e", "e", "e", "e", "e", "e", "e",
  "h", "h", "h", "h", "h", "h", "h", "h", "h", "h", "h",
  "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t", "t",
  "f", "f", "f", "f", "f", "f", "f", "f", "f",
  "c", "c", "c", "c", "c", "c", "c", "c",
  "g", "g", "g", "g", "g", "g", "g",
  "b", "b", "b", "b", "b", "b",
  "d-5"
];
console.log(count_same_elements(collection));
module.exports = count_same_elements;
