'use strict';
function accSub(arg1, arg2) {
  var r1, r2, m, n;
  try { r1 = arg1.toString().split(".")[1].length } catch (e) { r1 = 0 }
  try { r2 = arg2.toString().split(".")[1].length } catch (e) { r2 = 0 }
  m = Math.pow(10, Math.max(r1, r2));
  n = (r1 >= r2) ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}
function spilt_to_zero(number, interval) {
  let result = [number];
  for (; number > 0; ){
    number = accSub(number, interval)
    result.push(Number(number));
  }
  return result;
  //在这里写入代码
}
console.log(spilt_to_zero(0.7,0.3));

module.exports = spilt_to_zero;
