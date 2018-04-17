function count_same_elements(collection) {
  let tmp = {};
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    if (typeof (tmp[collection[i]]) != "number") {

      if (collection[i][1] == '-' || collection[i][1] == ':') {
        tmp[collection[i][0]] = Number(collection[i][2]);
      } else if (collection[i][1] == '[') {

        if (collection[i].length == 4) {
          tmp[collection[i][0]] += Number(collection[i][2]);
        } else {
          tmp[collection[i][0]] += Number(collection[i][2] + collection[i][3]) + 1;
        }

      } else {
        tmp[collection[i]] = 1;
      }

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


function create_updated_collection(collection_a, object_b) {
  collection_a = count_same_elements(collection_a);
  for (let i = 0; i < collection_a.length; i++) {
    for (let j = 0; j < object_b.value.length; j++) {
      console.log(collection_a[i].key);
      if (collection_a[i].key == object_b.value[j]) {
        if (collection_a[i].count >= 3) {
          collection_a[i].count -= parseInt(collection_a[i].count / 3);
        }
      }
    }
  }
  return collection_a;
  //在这里写入代码
}
var collection_a = [
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


var object_b = { value: ["a", "d", "e", "f"] };
console.log(create_updated_collection(collection_a,object_b));
module.exports = create_updated_collection;
