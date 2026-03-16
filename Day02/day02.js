// ============================================================
// 📗 JavaScript for Everyone — Day 2
// Topics: Data Types, Numbers, Math Object, Strings, String Methods
// Run this file with:  node day2.js
// ============================================================


// ────────────────────────────────────────────────
// 1. Primitive Data Types
// ────────────────────────────────────────────────

console.log('--- Primitive Data Types ---')

// Numbers
let myNum = 42
let myFloat = 3.14
console.log(myNum, myFloat) // → 42 3.14

// Strings
let myString = 'JavaScript'
console.log(myString) // → JavaScript

// Booleans
let isTrue = true
let isFalse = false
console.log(isTrue, isFalse) // → true false

// Null
let emptyValue = null
console.log(emptyValue) // → null

// Undefined
let notAssigned
console.log(notAssigned) // → undefined

// Primitive types are IMMUTABLE (cannot be modified)
let word = 'JavaScript'
// word[0] = 'Y'  ← this does NOT work! strings are immutable
console.log(word) // still → JavaScript

// Primitive types are compared BY VALUE
let numOne = 3
let numTwo = 3
console.log(numOne == numTwo) // → true

let js = 'JavaScript'
let py = 'Python'
console.log(js == py) // → false

let lightOn  = true
let lightOff = false
console.log(lightOn == lightOff) // → false


// ────────────────────────────────────────────────
// 2. Non-Primitive Data Types (Objects, Arrays, Functions)
// ────────────────────────────────────────────────

console.log('\n--- Non-Primitive Data Types ---')

// Arrays are MUTABLE
let nums = [1, 2, 3]
nums[0] = 10
console.log(nums)                // → [ 10, 2, 3 ]

// Non-primitives are compared BY REFERENCE (not value)
let arr1 = [1, 2, 3]
let arr2 = [1, 2, 3]
console.log(arr1 == arr2)        // → false  (different references)

let arr3 = arr1
console.log(arr1 == arr3)        // → true   (same reference)


// ────────────────────────────────────────────────
// 3. Numbers & Math Object
// ────────────────────────────────────────────────

console.log('\n--- Numbers & Math Object ---')

let myAge2        = 35
const gravity     = 9.81         // m/s²
let mass          = 72           // kg
const PI          = Math.PI      // 3.141592653589793
const boilingPt   = 100          // °C
const bodyTemp    = 37           // °C

console.log(myAge2, gravity, mass, PI, boilingPt, bodyTemp)

// Math methods
console.log(Math.round(PI))              // → 3   (rounds to nearest)
console.log(Math.round(9.81))            // → 10
console.log(Math.floor(PI))              // → 3   (always rounds down)
console.log(Math.ceil(PI))               // → 4   (always rounds up)
console.log(Math.min(-5, 3, 20, 4, 10)) // → -5  (minimum value)
console.log(Math.max(-5, 3, 20, 4, 10)) // → 20  (maximum value)
console.log(Math.abs(-10))               // → 10  (absolute value)
console.log(Math.sqrt(100))              // → 10  (square root)
console.log(Math.sqrt(2))               // → 1.4142135623730951
console.log(Math.pow(3, 2))              // → 9   (3 squared)
console.log(Math.E)                      // → 2.718...
console.log(Math.log(2))                 // → 0.693...
console.log(Math.log(10))               // → 2.302...

// Random number generator
const randNum = Math.random()            // 0 to 0.999...
console.log('Random (0-1):', randNum)

const numBtnZeroAndTen = randNum * 11
const randomRounded = Math.floor(numBtnZeroAndTen)
console.log('Random (0-10):', randomRounded)


// ────────────────────────────────────────────────
// 4. Strings
// ────────────────────────────────────────────────

console.log('\n--- Strings ---')

let space     = ' '
let firstName = 'Asabeneh'
let lastName  = 'Yetayeh'
let country   = 'Finland'
let city      = 'Helsinki'
let language  = 'JavaScript'
let job       = 'teacher'
let ageStr    = 25

// String Concatenation (old way with +)
let fullName = firstName + space + lastName
console.log(fullName) // → Asabeneh Yetayeh

let personInfoOne = fullName + '. I am ' + ageStr + '. I live in ' + country
console.log(personInfoOne) // → Asabeneh Yetayeh. I am 25. I live in Finland

// Template Literals / String Interpolation (modern way with backticks)
let personInfoTwo   = `I am ${fullName}. I am ${ageStr}. I live in ${country}.`
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo) // → I am Asabeneh Yetayeh. I am 25. I live in Finland.
console.log(personInfoThree) // → I am Asabeneh Yetayeh. I live in Helsinki, Finland. I am a teacher. I teach JavaScript.

// Template literal with expression
let x = 2
let y = 3
console.log(`${x} is greater than ${y}: ${x > y}`) // → 2 is greater than 3: false

// Escape Sequences
console.log('I hope everyone is enjoying 30 Days Of JavaScript.\nAre you?') // \n = new line
console.log('Days\tTopics\tExercises') // \t = tab
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('This is a back slash: \\')  // \\ = backslash
console.log('He said: \"Hello, World!\"') // \" = double quote
console.log('She said: \'Seeing is believing\'') // \' = single quote


// ────────────────────────────────────────────────
// 5. String Methods
// ────────────────────────────────────────────────

console.log('\n--- String Methods ---')

let str = 'JavaScript'

// .length
console.log(str.length)                   // → 10
console.log(firstName.length)             // → 8

// Accessing characters by index
console.log(str[0])                       // → J  (first character)
console.log(str[9])                       // → t  (last character)
console.log(str[str.length - 1])          // → t  (last character using length)

// .toUpperCase()
console.log(str.toUpperCase())            // → JAVASCRIPT
console.log(firstName.toUpperCase())      // → ASABENEH

// .toLowerCase()
console.log(str.toLowerCase())            // → javascript
console.log(firstName.toLowerCase())      // → asabeneh

// .substr(startIndex, numberOfChars)
console.log(str.substr(4, 6))            // → Script
console.log('Finland'.substr(3, 4))      // → land

// .substring(startIndex, endIndex)  — endIndex is NOT included
console.log(str.substring(0, 4))         // → Java
console.log(str.substring(4, 10))        // → Script
console.log(str.substring(4))            // → Script

// .split(separator)
let sentence = '30 Days Of JavaScript'
console.log(sentence.split())            // → [ '30 Days Of JavaScript' ]
console.log(sentence.split(' '))         // → [ '30', 'Days', 'Of', 'JavaScript' ]
console.log(firstName.split(''))         // → [ 'A','s','a','b','e','n','e','h' ]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'
console.log(countries.split(', '))        // → [ 'Finland', 'Sweden', 'Norway', 'Denmark', 'and Iceland' ]

// .trim()  — removes whitespace from both ends
let padded = '  30 Days Of JavaScript  '
console.log(padded.trim())               // → '30 Days Of JavaScript'

// .includes(substring)  — returns true/false
console.log(sentence.includes('Days'))   // → true
console.log(sentence.includes('Python')) // → false


// ────────────────────────────────────────────────
// 🏋️ Exercises — Day 2
// ────────────────────────────────────────────────

console.log('\n--- Exercises ---')

// Exercise 1: Check the type of each variable
console.log(typeof 'Akash')      // → string
console.log(typeof 42)           // → number
console.log(typeof true)         // → boolean
console.log(typeof null)         // → object  (this is a known JS quirk!)
console.log(typeof undefined)    // → undefined
console.log(typeof [1, 2, 3])    // → object
console.log(typeof {})           // → object

// Exercise 2: Math with your age
const yourBirthYear = 2004
const currentYear   = 2026
const calculatedAge = currentYear - yourBirthYear
console.log(`You are ${calculatedAge} years old.`)

// Exercise 3: String operations
let sentence2 = 'JavaScript is the most popular programming language'
console.log(sentence2.length)              // length of string → 52
console.log(sentence2.toUpperCase())       // all caps → JAVASCRIPT IS THE MOST POPULAR PROGRAMMING LANGUAGE
console.log(sentence2.includes('popular')) // → true
console.log(sentence2.split(' '))          // words array → [ 'JavaScript', 'is', 'the', 'most', 'popular', 'programming', 'language' ]
console.log(sentence2.replace('JavaScript', 'Python')) // replace word → Python is the most popular programming language
