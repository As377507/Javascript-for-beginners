// ============================================================
// JavaScript for Everyone — Day 14
// Topics: Advanced Functions, Closures, Async & Await,
//         Promises, Error Handling
// Run: node day14.js
// ============================================================


// ────────────────────────────────────────────────
// 1. More Function Exercises from repo
// ────────────────────────────────────────────────

console.log('=== Advanced Functions ===')

// Random hex color generator
function randomHexaNumberGenerator() {
  const letters = '0123456789ABCDEF'
  let color = '#'
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}
console.log('Random Hex:', randomHexaNumberGenerator())  // e.g. '#ee33df'

// Random RGB color generator
function rgbColorGenerator() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}
console.log('Random RGB:', rgbColorGenerator())  // e.g. rgb(125,244,255)

// Generate any number of colors
function generateColors(type, num) {
  const colors = []
  for (let i = 0; i < num; i++) {
    colors.push(type === 'hexa' ? randomHexaNumberGenerator() : rgbColorGenerator())
  }
  return num === 1 ? colors[0] : colors
}
console.log('3 Hex colors:', generateColors('hexa', 3))
console.log('1 RGB color:',  generateColors('rgb',  1))

// 7-character User ID generator
function userIdGenerator() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let id = ''
  for (let i = 0; i < 7; i++) {
    id += chars[Math.floor(Math.random() * chars.length)]
  }
  return id
}
console.log('User ID:', userIdGenerator())   // e.g. '41XTDbE'

// Shuffle array
function shuffleArray(arr) {
  return [...arr].sort(() => Math.random() - 0.5)
}
console.log('Shuffled:', shuffleArray([1, 2, 3, 4, 5]))

// Factorial
function factorial(n) {
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}
console.log('5! =', factorial(5))    // 120
console.log('10! =', factorial(10))  // 3628800

// isPrime
function isPrime(n) {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false
  }
  return true
}
console.log('7 is prime:', isPrime(7))    // true
console.log('10 is prime:', isPrime(10))  // false

// isEmpty — checks if string/array/object is empty
function isEmpty(value) {
  if (typeof value === 'string')  return value.length === 0
  if (Array.isArray(value))       return value.length === 0
  if (typeof value === 'object')  return Object.keys(value).length === 0
  return false
}
console.log('isEmpty(""):',   isEmpty(''))    // true
console.log('isEmpty([]):',   isEmpty([]))    // true
console.log('isEmpty("hi"):', isEmpty('hi'))  // false

// modifyArray — uppercase the 5th item
function modifyArray(arr) {
  if (arr.length < 5) return 'Not Found'
  arr[4] = arr[4].toUpperCase()
  return arr
}
console.log(modifyArray(['Avocado','Tomato','Potato','Mango','Lemon','Carrot']))
// ['Avocado','Tomato','Potato','Mango','LEMON','Carrot']
console.log(modifyArray(['Google','Facebook','Apple','Amazon']))
// 'Not Found'

// sumOfNumbers in range
function sumOfNumbers(n) {
  let sum = 0
  for (let i = 1; i <= n; i++) sum += i
  return sum
}
console.log('Sum 1-10:', sumOfNumbers(10))  // 55

// evensAndOdds
function evensAndOdds(n) {
  let evens = 0, odds = 0
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) evens++
    else             odds++
  }
  console.log(`The number of odds are ${odds}.`)
  console.log(`The number of evens are ${evens}.`)
}
evensAndOdds(100)   // odds: 50, evens: 50


// ────────────────────────────────────────────────
// 2. Closures
// ────────────────────────────────────────────────

console.log('\n=== Closures ===')

// A closure is a function that "remembers" its outer scope
function makeCounter() {
  let count = 0
  return function() {
    count++
    return count
  }
}
const counter = makeCounter()
console.log(counter())   // 1
console.log(counter())   // 2
console.log(counter())   // 3


// ────────────────────────────────────────────────
// 3. Promises
// ────────────────────────────────────────────────

console.log('\n=== Promises ===')

// A Promise is an object that represents a value which may be available now,
// or in the future, or never.

const myPromise = new Promise((resolve, reject) => {
  const success = true
  if (success) {
    resolve('Promise resolved! ✅')
  } else {
    reject('Promise rejected! ❌')
  }
})

myPromise
  .then(result => console.log(result))
  .catch(err   => console.log(err))

// Simulating async with setTimeout
const fetchData = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ name: 'Asabeneh', country: 'Finland' })
  }, 1000)
})

fetchData
  .then(data => console.log('Fetched:', data))
  .catch(err => console.log('Error:', err))


// ────────────────────────────────────────────────
// 4. Async / Await
// ────────────────────────────────────────────────

console.log('\n=== Async / Await ===')

// async makes a function return a Promise
// await pauses execution until the Promise resolves

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

async function greetAfterDelay() {
  console.log('Starting...')
  await delay(500)
  console.log('Hello after 0.5 seconds!')
}

greetAfterDelay()

// Async function with error handling
async function fetchUser() {
  try {
    // Simulate fetching (resolve immediately for Node.js demo)
    const user = await Promise.resolve({ id: 1, name: 'Akash', role: 'developer' })
    console.log('User:', user)
    return user
  } catch (err) {
    console.log('Error:', err)
  }
}

fetchUser()

// Promise.all — run multiple promises in parallel
async function runAll() {
  const [a, b, c] = await Promise.all([
    Promise.resolve(10),
    Promise.resolve(20),
    Promise.resolve(30)
  ])
  console.log('Promise.all results:', a, b, c)  // 10 20 30
}

runAll()


// ────────────────────────────────────────────────
// 5. Error Handling: try/catch/finally
// ────────────────────────────────────────────────

console.log('\n=== Error Handling ===')

function divide(a, b) {
  if (b === 0) throw new Error('Cannot divide by zero!')
  return a / b
}

try {
  console.log(divide(10, 2))    // 5
  console.log(divide(10, 0))    // throws error
} catch (err) {
  console.log('Caught error:', err.message)
} finally {
  console.log('finally always runs')
}
