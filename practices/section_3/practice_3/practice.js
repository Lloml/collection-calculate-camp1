var count_same_elements = require("../../../practices/section_2/practice_2/practice");
function create_updated_collection(collection_a, object_b) {
  collection_a = count_same_elements(collection_a);
  let result = collection_a;
  for (let i = 0; i < collection_a.length; i++) {
    for (let j = 0; j < object_b.value.length; j++) {
      if (collection_a[i].key == object_b.value[j]) {
        if (collection_a[i].count >= 3) {
          collection_a[i].count -= parseInt(collection_a[i].count / 3);
        }
      }
    }
  }
  return result;
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
  "d", "d", "d", "d", "d"
];
console.log(count_same_elements(collection_a));
module.exports = create_updated_collection;
