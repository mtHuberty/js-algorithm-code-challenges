const test = require('../testy')

function printFibNums(n) {
  console.log(`Fibbin with ${n}`);

  // fib(n) = fib(n - 1) + fib(n - 2)
   
  function fibRec(n) {
    if (n === 0) {
      return 0
    }
    if (n === 1 || n === 2) {
      return 1
    }

    return fibRec(n - 1) + fibRec(n - 2)
  }

  return fibRec(n)
}

// test(printFibNums, [3], '1 1 2')
// test(printFibNums, [4], '1 1 2 3')
test(printFibNums, [5], '1 1 2 3 5')
// test(printFibNums, [10], '1 1 2 3 5 8 13 21 34 55')