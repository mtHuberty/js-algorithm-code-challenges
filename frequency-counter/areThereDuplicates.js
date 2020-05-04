// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:

// areThereDuplicates(1, 2, 3) // false
// areThereDuplicates(1, 2, 2) // true 
// areThereDuplicates('a', 'b', 'c', 'a') // true 
// Restrictions:

// Time - O(n)

// Space - O(n)

const test = require('../testy')

function areThereDuplicates(...args) {
  const hashmap = {}
  for (let arg of args) {
    if (hashmap.hasOwnProperty(arg)) {
      return true
    }
    hashmap[arg] = true
    console.log(hashmap)
  }
  return false
}

test(areThereDuplicates, [1,2,3], false)
test(areThereDuplicates, [1,2,2], true)
test(areThereDuplicates, ['a','b','c','d','c'], true)
// test(areThereDuplicates, [{},{test:'test'},'f','d','c'], false)
