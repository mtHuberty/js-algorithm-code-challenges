// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks 
// whether the characters in the first string form a subsequence of the characters 
// in the second string. In other words, the function should check whether the characters 
// in the first string appear somewhere in the second string, without their order changing.

const test = require('../testy')

function isSubsequence(str1, str2) {
    if (str1.length > str2.length) {
        return false
    }

    let i = 0
    let j = 0

    while(true) {
        const letter = str2[j]
        const targetLetter = str1[i]
        if (letter === targetLetter) {
            i++; j++
        } else {
            j++
        }
        if (i === str1.length) {
            return true
        } else if (j === str2.length) {
            return false
        }
    }
}

test(isSubsequence, ['hello', 'heavy hallo wlorld'], true); // true
test(isSubsequence, ['hello', 'hello world'], true); // true
test(isSubsequence, ['sing', 'sting'], true); // true
test(isSubsequence, ['abc', 'abracadabra'], true); // true
test(isSubsequence, ['abc', 'acb'], false); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)
