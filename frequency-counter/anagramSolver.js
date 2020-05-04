const test = require('../testy')

function anagramSolver(str1, str2) {
    const counter = {}

    for (let i = 0; i < str1.length; i++) {
        counter[str1[i]] = ++counter[str1[i]] || 1
    }

    for (let i = 0; i < str2.length; i++) {
        counter[str2[i]]--
    }

    for (let key in counter) {
        if (counter[key] !== 0) return false
    }
    return true
}

test(anagramSolver, ['test', 'fak'], true)
test(anagramSolver, ['test', 'derp'], false)
test(anagramSolver, ['fast', 'fats'], true)
test(anagramSolver, ['break', 'brake'], true)
test(anagramSolver, ['doesnotwork', 'test'], false)
test(anagramSolver, ['made', 'dame'], true)
test(anagramSolver, ['race', 'care'], true)