const test = require('../testy')

const maxSubarraySum = (arr, n) => {
    if (n > arr.length) {
        return null
    }

    let max = -Infinity
    let windowSum = 0

    for (let i = 0; i < arr.length - n + 1; i++) {
        if (i === 0) {
            windowSum = arr.slice(i, i+n).reduce((a, b) => a + b)
        } else {
            windowSum = windowSum - arr[i - 1] + arr[i + n-1]
        }
        if (windowSum > max) {
            max = windowSum
        }
    }
    return max
}

test(maxSubarraySum, [[1,2,3], 2], 5)
test(maxSubarraySum, [[10,2,5,9,1,1,15], 3], 17)
test(maxSubarraySum, [[1,2,3], 5], null)
test(maxSubarraySum, [[-1,2,-3,4,-5,8], 2], 3)