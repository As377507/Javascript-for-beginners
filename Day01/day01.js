// ============================================================
// 📘 JavaScript for Everyone — Day 1
// Topics: console.log, Comments, Arithmetic, Variables
// Run this file with:  node day1.js
// ============================================================


// ────────────────────────────────────────────────
// 1. console.log — Printing to the console
// ────────────────────────────────────────────────

console.log('Hello, World!')                          // single argument
console.log('Hello', 'World', '!')                    // multiple arguments
console.log('HAPPY', 'NEW', 'YEAR', 2020)
console.log('Welcome', 'to', 30, 'Days', 'Of', 'JavaScript')


// ────────────────────────────────────────────────
// 2. Comments
// ────────────────────────────────────────────────

// This is a single line comment
// let firstName = 'Asabeneh';   <-- this line is commented out (won't run)

/*
  This is a multiline comment.
  let location = 'Helsinki';
  let age = 100;
  let isMarried = true;
  JavaScript skips everything inside here.
*/


// ────────────────────────────────────────────────
// 3. Arithmetic in console.log
// ────────────────────────────────────────────────

console.log('--- Arithmetic ---')
console.log(2 + 3)   // Addition       → 5
console.log(3 - 2)   // Subtraction    → 1
console.log(2 * 3)   // Multiplication → 6
console.log(3 / 2)   // Division       → 1.5
console.log(3 % 2)   // Modulus        → 1  (remainder)
console.log(3 ** 2)  // Exponential    → 9  (3 to the power 2)


// ────────────────────────────────────────────────
// 4. Variables — let, const, var
// ────────────────────────────────────────────────

console.log('--- Variables ---')

// let is used for values that CAN change
let firstName = 'Asabeneh'   // first name of a person
let lastName  = 'Yetayeh'    // last name of a person
let country   = 'Finland'    // country
let city      = 'Helsinki'   // capital city
let age       = 100          // age in years
let isMarried = true

console.log(firstName, lastName, country, city, age, isMarried)
// → Asabeneh Yetayeh Finland Helsinki 100 true

// const is used for values that NEVER change
const gravity      = 9.81   // earth gravity in m/s²
const boilingPoint = 100    // water boiling point in °C
const PI           = 3.14   // geometric constant

console.log(gravity, boilingPoint, PI)
// → 9.81 100 3.14

// Declaring multiple variables in one line
let name = 'Asabeneh',
    job  = 'teacher',
    live = 'Finland'

console.log(name, job, live)
// → Asabeneh teacher Finland


// ────────────────────────────────────────────────
// 5. Valid vs Invalid Variable Names
// ────────────────────────────────────────────────

// ✅ Valid variable names (camelCase is the JS convention)
let myFirstName   = 'John'
let myLastName    = 'Doe'
let isLoggedIn    = false
let num1          = 10
let _privateVar   = 'private'
let $dollarSign   = 100
let year2024      = 2024

console.log('Valid variables:', myFirstName, myLastName, isLoggedIn, num1)

// ❌ The following are INVALID — do NOT uncomment them:
// let first-name = 'bad'   // hyphens not allowed
// let 1_num = 5            // can't start with a number
// let num_#_1 = 3          // special chars not allowed


// ────────────────────────────────────────────────
// 🏋️ Exercises — Day 1
// ────────────────────────────────────────────────

console.log('\n--- Exercises ---')

// Exercise 1: Declare four variables without assigning values
let a
let b
let c
let d
console.log('Unassigned vars:', a, b, c, d)  // → undefined undefined undefined undefined

// Exercise 2: Declare four variables WITH values
let p = 10
let q = 20
let r = 30
let s = 40
console.log('Assigned vars:', p, q, r, s) // → 10 20 30 40

// Exercise 3: Declare personal info in multiple lines
let myFirst   = 'Akash'
let myLast    = 'Sen'
let myStatus  = 'Single'
let myCountry = 'India'
let myAge     = 20
console.log(myFirst, myLast, myStatus, myCountry, myAge) // → Akash Sen Single India 20

// Exercise 4: Declare personal info in a SINGLE line
let myFirst2 = 'Akash', myLast2 = 'Sen', myStatus2 = 'Single', myCountry2 = 'India', myAge2 = 20
console.log(myFirst2, myLast2, myStatus2, myCountry2, myAge2) // → Akash Sen Single India 20

// Exercise 5: myAge and yourAge
let myAge3   = 25
let yourAge  = 30
console.log(`I am ${myAge3} years old.`) // → I am 25 years old.
console.log(`You are ${yourAge} years old.`) // → You are 30 years old.
