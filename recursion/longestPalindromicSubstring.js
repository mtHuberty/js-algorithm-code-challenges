const test = require('../testy')

function longestPalindromicSubstring(str) {
  let i = 0
  let j = str.length
  
  function rec(str) {

    console.log({str});
    console.log({first: str.charAt(0)});
    console.log({last: str.charAt(str.length - 1)});

    if (str === "" || str.length === 1) {
      return true
    }

    if (str.charAt(0) !== str.charAt(str.length - 1)) {
      return false
    }

    rec(str.substring(1, str.length - 1))
  }

  return rec(str)
}

test(longestPalindromicSubstring, ["aabbbaa"], true)
test(longestPalindromicSubstring, ["booobx"], true)
test(longestPalindromicSubstring, ["alkdsfj"], false)
test(longestPalindromicSubstring, ["slkdfjs"], false)
test(longestPalindromicSubstring, ["o"], true)
