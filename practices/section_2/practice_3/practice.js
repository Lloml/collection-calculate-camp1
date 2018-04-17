function count_same_elements(collection) {
  let tmp = {};
  let result = [];
  for (let i = 0; i < collection.length; i++) {
    if (typeof (tmp[collection[i]]) != "number") {

      if (collection[i][1] == '-' || collection[i][1] == ':' ) {
        tmp[collection[i][0]] = Number(collection[i][2]);
      } else if (collection[i][1] == '[' ) {

        if ( collection[i].length == 4){
          tmp[collection[i][0]] += Number(collection[i][2]);
        }else{
          tmp[collection[i][0]] += Number(collection[i][2]+collection[i][3])+1;
        }
          
        }else{
          tmp[collection[i]] = 1;
        }

    } else {
        tmp[collection[i]]++;
    }
  }
  for (let i = 0; i < Object.entries(tmp).length; i++) {
    let tmp_entries = Object.entries(tmp);
    let name = tmp_entries[i][0];
    let summary = tmp_entries[i][1];
    let obj = { name, summary };
    result.push(obj);
  }
  return result;
}
console.log('sdfsdf')
module.exports = count_same_elements;
