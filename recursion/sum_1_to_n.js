const test = require('../testy')

function sumOneToN(n) {
  if (n === 1) {
    return n
  }

  return n + sumOneToN(n - 1)
}

test(sumOneToN, [1], 1)
test(sumOneToN, [2], 3)
test(sumOneToN, [3], 6)
test(sumOneToN, [5], 15)
test(sumOneToN, [6], 21)