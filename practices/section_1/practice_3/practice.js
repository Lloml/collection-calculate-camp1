function collect_same_elements(collection_a, object_b) {
  let result = [];
  result = collection_a.filter(v => object_b.value.includes(v));
  return result;
}

module.exports = collect_same_elements;
