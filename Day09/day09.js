// ============================================================
// JavaScript for Everyone — Day 9
// Topics: Higher Order Functions, Functional Programming
//         (forEach, map, filter, reduce, every, some, find, findIndex)
// Run: node day9.js
// ============================================================

console.log('=== Callback Functions ===')
const callback = (n) => n ** 2 // → 9
function cube(callback, n) { return callback(n) * n } // → 27
console.log(cube(callback, 3))      // 27

// Returning a function
const higherOrder = n => m => t => 2 * n + 3 * m + t // → 23
console.log(higherOrder(2)(3)(10))  // 23

// forEach with sum
const nums = [1, 2, 3, 4]
let sumVal = 0
nums.forEach(el => { sumVal += el })
console.log('Sum:', sumVal)   // 10

console.log('\n=== Functional Programming ===')
const numbers = [1, 2, 3, 4, 5]
const names   = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const countries = ['Albania','Bolivia','Canada','Denmark','Ethiopia','Finland','Germany','Hungary','Ireland','Japan','Kenya']

// map
const squares = numbers.map(n => n * n)
console.log('Squares:', squares)  // [1,4,9,16,25]
console.log('Uppercase names:', names.map(n => n.toUpperCase()))

// filter
console.log('Contains land:', countries.filter(c => c.includes('land')))  // Finland, Ireland
console.log('Ends with ia:',  countries.filter(c => c.endsWith('ia')))    // Albania, Bolivia, Ethiopia
console.log('5-letter:',      countries.filter(c => c.length === 5))      // Japan, Kenya

const scores = [
  { name: 'Asabeneh', score: 95 },
  { name: 'Mathias',  score: 80 },
  { name: 'Elias',    score: 50 },
  { name: 'Martha',   score: 85 },
  { name: 'John',     score: 100 }
]
console.log('Score > 80:', scores.filter(s => s.score > 80))

// reduce
const total = numbers.reduce((acc, curr) => acc + curr, 0)
console.log('Total:', total)   // 15

// every
console.log('All strings:', names.every(n => typeof n === 'string'))  // true

// some
console.log('Some numbers:', names.some(n => typeof n === 'number'))  // false

// find
console.log('Name > 7 chars:', names.find(n => n.length > 7))         // Asabeneh
console.log('Age < 20:',       [24,22,25,32,35,18].find(a => a < 20)) // 18

// findIndex
console.log('Index > 7 chars:', names.findIndex(n => n.length > 7))   // 0

console.log('\n=== Exercises ===')
const sample = ['Finland','Sweden','Denmark','Norway','Iceland']
console.log('Long (>6):', sample.filter(c => c.length > 6))
console.log('6-letter:',  sample.filter(c => c.length === 6))
console.log('With land:', sample.filter(c => c.includes('land')))
const totalScore = scores.reduce((acc, s) => acc + s.score, 0)
console.log('Total score:', totalScore)
console.log('Avg score:',   (totalScore / scores.length).toFixed(2))
console.log('Starts with F:', sample.find(c => c.startsWith('F')))
