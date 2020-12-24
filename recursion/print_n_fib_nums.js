const test = require('../testy')

function printFibNums(n) {
  let str = ''
  function fibRec(n) {
    let result;
    if (n === 0) {
      result = 0
    } else if (n === 1 || n === 2) {
      result = 1
    } else {
      result = fibRec(n - 1) + fibRec(n - 2)
    }
    str += result
    console.log(str);
    return result
  }
  fibRec(n)
  return str
}

// test(fibRec, [3], '1 1 2')
// test(fibRec, [4], '1 1 2 3')
test(printFibNums, [5], '1 1 2 3 5')
// test(fibRec, [10], '1 1 2 3 5 8 13 21 34 55')