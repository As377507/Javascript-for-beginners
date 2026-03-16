// ============================================================
// 📕 JavaScript for Everyone — Day 7
// Topics: Functions — Declaration, Expression, Anonymous, Arrow
// Run: node day7.js
// ============================================================


// ────────────────────────────────────────────────
// 1. Function Declaration
// ────────────────────────────────────────────────

console.log('=== Function Declaration ===')

// No parameter
function addTwoNumbers() {
  let numOne = 10
  let numTwo = 20
  let sum    = numOne + numTwo
  console.log(sum)   // 30
}
addTwoNumbers()

// One parameter
function areaOfCircle(r) {
  let area = Math.PI * r * r
  return area
}
console.log(areaOfCircle(10))    // 314.159...

function square(number) {
  return number * number
}
console.log(square(10))          // 100

// Two parameters
function sumTwoNumbers(numOne, numTwo) {
  return numOne + numTwo
}
console.log(sumTwoNumbers(10, 20))   // 30

function printFullName(firstName, lastName) {
  return `${firstName} ${lastName}`
}
console.log(printFullName('Asabeneh', 'Yetayeh'))
console.log(printFullName('Dean', 'Phan'))

// Array as parameter
function sumArrayValues(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum
}
console.log(sumArrayValues([1, 2, 3, 4, 5]))   // 15

// Default parameter
function greet(name = 'World') {
  return `Hello, ${name}!`
}
console.log(greet())           // Hello, World!
console.log(greet('Akash'))   // Hello, Akash!


// ────────────────────────────────────────────────
// 2. Function Expression
// ────────────────────────────────────────────────

console.log('\n=== Function Expression ===')

const squareExpr = function(n) {
  return n * n
}
console.log(squareExpr(4))    // 16


// ────────────────────────────────────────────────
// 3. Anonymous / Self-Invoking Function (IIFE)
// ────────────────────────────────────────────────

console.log('\n=== IIFE (Immediately Invoked) ===')

const x = (function(n) {
  return n * n
})(2)
console.log(x)   // 4


// ────────────────────────────────────────────────
// 4. Arrow Function
// ────────────────────────────────────────────────

console.log('\n=== Arrow Function ===')

// Regular arrow with body
const squareArrow = n => {
  return n * n
}
console.log(squareArrow(5))   // 25

// Implicit return (one-liner)
const cube = n => n * n * n
console.log(cube(3))          // 27

const addTwo = (a, b) => a + b
console.log(addTwo(5, 3))     // 8


// ────────────────────────────────────────────────
// 🏋️ Exercises — Day 7
// ────────────────────────────────────────────────

console.log('\n=== Exercises ===')

// 1. fullName
const fullName = (firstName, lastName) => `${firstName} ${lastName}`
console.log(fullName('Akash', 'Sen'))

// 2. addNumbers
const addNumbers = (a, b) => a + b
console.log(addNumbers(5, 10))   // 15

// 3. Area of rectangle
const areaOfRectangle = (length, width) => length * width
console.log('Area of Rect:', areaOfRectangle(10, 5))   // 50

// 4. Perimeter of rectangle
const perimeterOfRectangle = (length, width) => 2 * (length + width)
console.log('Perimeter of Rect:', perimeterOfRectangle(10, 5))  // 30

// 5. Volume of rectangular prism
const volumeOfRectPrism = (l, w, h) => l * w * h
console.log('Volume:', volumeOfRectPrism(4, 3, 2))   // 24

// 6. Area of circle
const areaOfCircleFn = r => Math.PI * r * r
console.log('Circle area:', areaOfCircleFn(7).toFixed(2))   // 153.94

// 7. Circumference of circle
const circumOfCircle = r => 2 * Math.PI * r
console.log('Circumference:', circumOfCircle(7).toFixed(2))  // 43.98

// 8. Celsius to Fahrenheit
const convertCelsiusToFahrenheit = c => (c * 9/5) + 32
console.log('100°C =', convertCelsiusToFahrenheit(100), '°F')  // 212 °F
console.log('0°C =',   convertCelsiusToFahrenheit(0),   '°F')  // 32 °F

// 9. BMI Calculator
const bmi = (weight, height) => weight / (height * height)
function bmiCategory(weight, height) {
  const b = bmi(weight, height)
  if (b < 18.5)      return `BMI: ${b.toFixed(1)} — Underweight`
  else if (b < 25)   return `BMI: ${b.toFixed(1)} — Normal weight`
  else if (b < 30)   return `BMI: ${b.toFixed(1)} — Overweight`
  else               return `BMI: ${b.toFixed(1)} — Obese`
}
console.log(bmiCategory(72, 1.75))    // Normal weight
console.log(bmiCategory(50, 1.75))    // Underweight
console.log(bmiCategory(95, 1.75))    // Overweight

// 10. Find maximum without Math.max
const findMax = (a, b, c) => {
  if (a >= b && a >= c) return a
  if (b >= a && b >= c) return b
  return c
}
console.log(findMax(0, 10, 5))     // 10
console.log(findMax(0, -10, -2))   // 0

// 11. Sum of any number of arguments (rest params)
const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0)
console.log(sum(1, 2, 3))       // 6
console.log(sum(1, 2, 3, 4))    // 10

// 12. checkSeason
const checkSeason = month => {
  month = month.toLowerCase()
  if (['september','october','november'].includes(month))  return 'Autumn' 
  if (['december','january','february'].includes(month))   return 'Winter'
  if (['march','april','may'].includes(month))             return 'Spring'
  if (['june','july','august'].includes(month))            return 'Summer'
  return 'Unknown'
}
console.log(checkSeason('March'))     // Spring
console.log(checkSeason('December'))  // Winter

// 13. Reverse array without .reverse()
const reverseArray = arr => {
  let reversed = []
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i])
  }
  return reversed
}
console.log(reverseArray([1, 2, 3, 4, 5]))    // [5,4,3,2,1]
console.log(reverseArray(['A', 'B', 'C']))     // ['C','B','A']
