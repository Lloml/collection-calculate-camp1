function collect_same_elements(collection_a, collection_b) {
  let result = [];
  result = collection_a.filter(v => collection_b[0].includes(v));
  return result;
}

module.exports = collect_same_elements;
