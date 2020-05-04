/*

Write a function called sameFrequency. Given two positive integers,
find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

const test = require('../testy')

function sameFrequency(first, second) {
    if (first.length !== second.length) {
        return false
    }
    let hashmap = {}
    const firstArr = first.toString().split("")
    const secondArr = second.toString().split("")

    for (let i = 0; i < firstArr.length; i++) {
        const num = firstArr[i]
        hashmap[num] = ++hashmap[num] || 1
    }

    for (let i = 0; i < secondArr.length; i++) {
        const num = secondArr[i]
        if (hashmap[num]) {
            hashmap[num]--
            if (hashmap[num] === 0) {
                delete hashmap.num
            }
        } else {
            return false
        }
    }
    if (Object.keys(hashmap).length !== 0) {
        return true
    }
    return false
}

test(sameFrequency, [123,123], true)
test(sameFrequency, [123,1223], false)
test(sameFrequency, [123,321], true)
test(sameFrequency, [0,1], false)
test(sameFrequency, [3589578,5879385], true)
