const test = require('../testy')

function minMax(arr) {
  function getMin(arr) {
    if (arr.length === 1) {
      return arr[0]
    }

    if (arr.length === 2) {
      return arr[0] < arr[1] ? arr[0] : arr[1]
    }

    return arr[0] < getMin(arr.slice(1)) ? arr[0] : getMin(arr.slice(1))
  }

  function getMax(arr) {
    if (arr.length === 1) {
      return arr[0]
    }

    if (arr.length === 2) {
      return arr[0] > arr[1] ? arr[0] : arr[1]
    }

    return arr[0] > getMax(arr.slice(1)) ? arr[0] : getMax(arr.slice(1))
  }

  return `Min: ${getMin(arr)}, Max: ${getMax(arr)}`
}

test(minMax, [[1,2,3,4,5]], 'Min: 1, Max: 5')
test(minMax, [[12,22,43,54,5]], 'Min: 5, Max: 54')
test(minMax, [[34,34,34,3434,43]], 'Min: 34, Max: 3434')
test(minMax, [[-2,-3344,4343,7654,-499]], 'Min: -3344, Max: 7654')
test(minMax, [[0]], 'Min: 0, Max: 0')
