const test = require('../testy')

const numPalindrome = (int) => {
  const arr = int.toString().split("")

  const recursiveEndChecker = (stringArray) => {
    if (stringArray.length === 0) {
      return true
    }

    if (stringArray[0] === stringArray[stringArray.length - 1]) {
      const snippedArray = stringArray.slice(1, stringArray.length - 1)
      return recursiveEndChecker(snippedArray)
    }

    return false
  }

  return recursiveEndChecker(arr)
}

test(numPalindrome, [20102], true)
test(numPalindrome, [2019], false)
test(numPalindrome, [0], true)
test(numPalindrome, [123123123123], false)
test(numPalindrome, [9898], false)
test(numPalindrome, [-2002], false)
test(numPalindrome, [122], false)
test(numPalindrome, [Number.MAX_SAFE_INTEGER], false)
