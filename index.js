const chalk = require('chalk')
const moment = require('moment')

let date = moment().format('dddd, MMMM Do YYYY, h:mm:ss a')

let message1 = ''
message1 += 'It is ' + chalk.bold.blue(date) + '.'

let message2 = ''
message2 += 'It is the ' + chalk.bold.hex('#E568FF')(moment().format('DDD') + 'th') + ' day of the year.'

let hours = moment().format('h')
hours = hours * 60 * 60

let minutes = moment().format('mm')
minutes = minutes * 60

let seconds = moment().format('s')
seconds = parseInt(seconds)

let timeTotal = hours + minutes + seconds

// // seconds
let message3 = ''
message3 = 'It is ' + chalk.bold.hex('#56BCBF')(timeTotal) + ' seconds into the day.'

let dst = ''
if (moment().isDST()) {
  dst = 'is'
} else {
  dst = 'is not'
}

let message4 = ''
message4 += 'It ' + chalk.bold.hex('#45BF88')(dst) + ' during Daylight Savings Time.'

let leap = ''
if (moment().isLeapYear()) {
  leap = 'is'
} else {
  leap = 'is not'
}

let message5 = ''
message5 += 'It ' + chalk.bold.hex('#BF4240')(leap) + ' a leap year.'

console.log(message1)
console.log(message2)
console.log(message3)
console.log(message4)
console.log(message5)
