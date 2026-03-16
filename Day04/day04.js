// ============================================================
// 📒 JavaScript for Everyone — Day 4
// Topics: Arithmetic Operators, Logical Operators, Conditionals
// Run: node day4.js
// ============================================================


// ────────────────────────────────────────────────
// 1. Arithmetic Operators
// ────────────────────────────────────────────────

console.log('=== Arithmetic Operators ===')

let numOne = 4
let numTwo = 3

let sum       = numOne + numTwo   // 7
let diff      = numOne - numTwo   // 1
let mult      = numOne * numTwo   // 12
let div       = numOne / numTwo   // 1.333...
let remainder = numOne % numTwo   // 1

console.log(sum, diff, mult, div, remainder) // → 7 1 12 1.333... 1

// Arithmetic in real-world formulas
const PI           = 3.14
const radius       = 100      // meters
const gravity      = 9.81     // m/s²
const mass         = 72       // kg
const boilingPoint = 100      // °C
const bodyTemp     = 37       // °C

const areaOfCircle = PI * radius * radius
console.log('Area of circle:', areaOfCircle)   // 31400

const weight = mass * gravity
console.log('Weight (Newtons):', weight)       // 706.32

console.log(
  `The boiling point of water is ${boilingPoint} oC.\nHuman body temperature is ${bodyTemp} oC.\nThe gravity of earth is ${gravity} m/s2.`
)

// Increment / Decrement
let count = 0
count++
console.log('After ++:', count)   // 1
count--
console.log('After --:', count)   // 0


// ────────────────────────────────────────────────
// 2. Logical Operators: &&, ||, !
// ────────────────────────────────────────────────

console.log('\n=== Logical Operators ===')

// && (AND) — both must be true
const checkAnd1 = 4 > 3 && 10 > 5    // true && true  → true
const checkAnd2 = 4 > 3 && 10 < 5    // true && false → false
const checkAnd3 = 4 < 3 && 10 < 5    // false && false→ false
console.log(checkAnd1, checkAnd2, checkAnd3)

// || (OR) — at least one must be true
const checkOr1 = 4 > 3 || 10 > 5    // true  → true
const checkOr2 = 4 > 3 || 10 < 5    // true  → true
const checkOr3 = 4 < 3 || 10 < 5    // false → false
console.log(checkOr1, checkOr2, checkOr3)

// ! (NOT) — flips boolean
let isLightOn  = true
let isLightOff = !isLightOn    // false
let isMarried  = !false        // true
console.log(isLightOn, isLightOff, isMarried)


// ────────────────────────────────────────────────
// 3. Conditionals: if, if-else, if-else if-else
// ────────────────────────────────────────────────

console.log('\n=== Conditionals ===')

// Simple if
let isRaining = true
if (isRaining) {
  console.log('Remember to take your rain coat.')
}

// if - else
let weather = 'sunny'
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else {
  console.log('No need for a rain coat.')
}

// if - else if - else
if (weather === 'rainy') {
  console.log('You need a rain coat.')
} else if (weather === 'cloudy') {
  console.log('It might be cold, you need a jacket.')
} else if (weather === 'sunny') {
  console.log('Go out freely.')      // ← this runs
} else {
  console.log('No need for rain coat.')
}


// ────────────────────────────────────────────────
// 4. Switch Statement
// ────────────────────────────────────────────────

console.log('\n=== Switch ===')

let day = 'monday'
switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
    break
}


// ────────────────────────────────────────────────
// 5. Ternary Operator
// ────────────────────────────────────────────────

console.log('\n=== Ternary Operator ===')

let rain = true
rain
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

// Short form
let temp = 30
let message = temp > 25 ? 'Hot day!' : 'Cool day!'
console.log(message)


// ────────────────────────────────────────────────
// 🏋️ Exercises — Day 4
// ────────────────────────────────────────────────

console.log('\n=== Exercises ===')

// Exercise 1: Age check (simulate prompt input)
const userAge = 20
if (userAge >= 18) {
  console.log('You are old enough to drive.')
} else {
  console.log(`You are left with ${18 - userAge} years to drive.`)
}

// Exercise 2: a vs b
let a = 4
let b = 3
if (a > b) {
  console.log(`${a} is greater than ${b}`)
} else {
  console.log(`${a} is less than ${b}`)
}

// Exercise 3: Grading system
function getGrade(score) {
  if (score >= 80 && score <= 100) return 'A'
  else if (score >= 70 && score < 80) return 'B'
  else if (score >= 60 && score < 70) return 'C'
  else if (score >= 50 && score < 60) return 'D'
  else return 'F'
}
console.log('Score 85 →', getGrade(85))   // A
console.log('Score 72 →', getGrade(72))   // B
console.log('Score 63 →', getGrade(63))   // C
console.log('Score 55 →', getGrade(55))   // D
console.log('Score 40 →', getGrade(40))   // F

// Exercise 4: Season checker
function getSeason(month) {
  month = month.toLowerCase()
  if (['september', 'october', 'november'].includes(month))  return 'Autumn'
  else if (['december', 'january', 'february'].includes(month)) return 'Winter'
  else if (['march', 'april', 'may'].includes(month)) return 'Spring'
  else if (['june', 'july', 'august'].includes(month)) return 'Summer'
  else return 'Invalid month'
}
console.log('October →', getSeason('October')) // Autumn
console.log('January →', getSeason('January')) // Winter
console.log('April →', getSeason('April')) // Spring
console.log('July →', getSeason('July')) // Summer
