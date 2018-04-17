function collect_same_elements(collection_a, collection_b) {
  let result = [];
  result = collection_a.filter(v => collection_b.includes(v));
  return result;
  //在这里写入代码
}

module.exports = collect_same_elements;
