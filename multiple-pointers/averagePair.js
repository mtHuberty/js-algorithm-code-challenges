// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

// Sample Input:


const test = require('../testy')

function averagePair(arr, target) {
    let i = 0;
    let j = arr.length - 1;
    
    while (i < j) {
        const avg = (arr[i] + arr[j]) / 2
        if (avg === target) {
            return true
        } else if (avg > target) {
            j--
        } else {
            i++
        }
    }
    return false
}

test(averagePair, [[1,2,3], 2.5], true) // true
test(averagePair, [[1,2,2,3,3,4,5,6,7,8,9,10], 3], true) // true
test(averagePair, [[1,3,3,5,6,7,10,12,19], 8], true) // true
test(averagePair, [[-1,0,3,4,5,6], 4.1], false) // false
test(averagePair, [[], 4], false) // false