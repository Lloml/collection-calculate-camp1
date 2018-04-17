function create_updated_collection(collection_a, object_b) {
  let result = collection_a;
  for (let i = 0; i < collection_a.length; i++) {
    for (let j = 0; j < object_b.value.length; j++) {
      if (collection_a[i].key == object_b.value[j]) {
        if(collection_a[i].count  >= 3 ){
          collection_a[i].count -= parseInt(collection_a[i].count / 3);
        }
      }
    }
  }
  return result;
  //在这里写入代码
}

module.exports = create_updated_collection;
