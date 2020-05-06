const colors = require('colors')

module.exports = function test(testFunc, input, expected) {
    const result = testFunc(...input)
    if(result === expected) {
        console.log(colors.green(`Pass`))
    } else {
        console.log(colors.red(`Fail`))
        console.log(colors.red(`  Input:     ${colors.yellow(...input)}`))
        console.log(colors.red(`  Expected:  ${colors.yellow(JSON.stringify(expected, null, 2))}`))
        console.log(colors.red(`  Got:       ${colors.yellow(JSON.stringify(result, null, 2))}`))
    }
}