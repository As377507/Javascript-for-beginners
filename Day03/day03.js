// ============================================================
// 📙 JavaScript for Everyone — Day 3
// Topics: More String Methods, Checking Data Types, Type Casting
// Run: node day3.js
// ============================================================


// ────────────────────────────────────────────────
// 1. More String Methods
// ────────────────────────────────────────────────

console.log('=== More String Methods ===')

let string = '30 Days Of JavaScript'

// .includes()
console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false  (case sensitive)
console.log(string.includes('Script'))   // true
console.log(string.includes('script'))   // false
console.log(string.includes('Java'))     // true

// .replace(old, new)
console.log(string.replace('JavaScript', 'Python'))  // 30 Days Of Python
console.log('Finland'.replace('Fin', 'Noman'))       // Nomanland

// .charAt(index)
console.log(string.charAt(0))                        // 3
console.log(string.charAt(string.length - 1))        // t

// .charCodeAt(index)  — returns ASCII code
console.log(string.charCodeAt(3))                    // 68 (D)
console.log(string.charCodeAt(string.length - 1))    // 116 (t)

// .indexOf(substring)  — first occurrence, -1 if not found
console.log(string.indexOf('D'))           // 3
console.log(string.indexOf('Days'))        // 3
console.log(string.indexOf('days'))        // -1
console.log(string.indexOf('a'))           // 4
console.log(string.indexOf('JavaScript'))  // 11

// .lastIndexOf(substring)
let str2 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(str2.lastIndexOf('love'))        // 67
console.log(str2.lastIndexOf('you'))         // 63
console.log(str2.lastIndexOf('JavaScript'))  // 38

// .concat()
console.log('30'.concat(' Days', ' Of', ' JavaScript'))  // 30 Days Of JavaScript
console.log('Fin'.concat('land'))                         // Finland

// .startsWith(substring)
let loveStr = 'Love is the best thing in this world'
console.log(loveStr.startsWith('Love'))    // true
console.log(loveStr.startsWith('love'))    // false
console.log(loveStr.startsWith('world'))   // false
console.log('Finland'.startsWith('Fin'))   // true

// .endsWith(substring)
console.log(loveStr.endsWith('world'))         // true
console.log(loveStr.endsWith('love'))          // false
console.log('Finland'.endsWith('land'))        // true

// .search(substring)
console.log(str2.search('love'))               // 2

// .match() — returns an array of matches
console.log(str2.match('love'))               // first match object
let pattern = /love/gi                        // g = global, i = case-insensitive
console.log(str2.match(pattern))              // ['love', 'love', 'love']

// match numbers from text using regex
let txt = 'In 2019, I run 30 Days of Python. Now, in 2020 I super excited to start this challenge'
console.log(txt.match(/\d+/g))               // ['2019', '30', '2020']

// .repeat(n)
console.log('love'.repeat(5))               // lovelovelovelovelove


// ────────────────────────────────────────────────
// 2. Checking Data Types  (typeof)
// ────────────────────────────────────────────────

console.log('\n=== Checking Data Types (typeof) ===')

let firstName = 'Asabeneh'
let age = 250
let job             // undefined

console.log(typeof 'Asabeneh')   // string
console.log(typeof firstName)    // string
console.log(typeof 10)           // number
console.log(typeof 3.14)         // number
console.log(typeof true)         // boolean
console.log(typeof false)        // boolean
console.log(typeof NaN)          // number  ← NaN is technically a number!
console.log(typeof job)          // undefined
console.log(typeof undefined)    // undefined
console.log(typeof null)         // object  ← known JS quirk!


// ────────────────────────────────────────────────
// 3. Type Casting
// ────────────────────────────────────────────────

console.log('\n=== Type Casting ===')

// String → Integer
let numStr = '10'
console.log(parseInt(numStr))      // 10  (using parseInt)
console.log(Number(numStr))        // 10  (using Number)
console.log(+numStr)               // 10  (using + sign)

// String → Float
let floatStr = '9.81'
console.log(parseFloat(floatStr))  // 9.81
console.log(Number(floatStr))      // 9.81
console.log(+floatStr)             // 9.81

// Float → Integer
let floatNum = 9.81
console.log(parseInt(floatNum))    // 9  (truncates decimal)

// Number → String
let num = 10
console.log(String(num))           // '10'
console.log(num.toString())        // '10'

// Boolean → String
console.log(String(true))          // 'true'
console.log(String(false))         // 'false'


// ────────────────────────────────────────────────
// 4. Booleans, Undefined, Null
// ────────────────────────────────────────────────

console.log('\n=== Booleans, Undefined, Null ===')

let isLightOn  = true
let isRaining  = false
let hungry     = false
let isMarried  = true

console.log(isLightOn, isRaining, hungry, isMarried) // → true false false true

let notDefined
console.log(notDefined) // undefined (declared but no value)

let empty = null
console.log(empty) // null (intentionally empty)


// ────────────────────────────────────────────────
// 🏋️ Exercises — Day 3
// ────────────────────────────────────────────────

console.log('\n=== Exercises ===')

// Exercise 1: String exercises on 'Coding Academy'
let company = 'Coding Academy'
console.log(company)
console.log(company.length)                          // 14
console.log(company.toUpperCase())                   // CODING ACADEMY
console.log(company.toLowerCase())                   // coding academy
console.log(company.substring(0, 6))                 // Coding  (first word)
console.log(company.includes('Academy'))             // true
console.log(company.split(' '))                      // ['Coding', 'Academy']
console.log(company.replace('Coding', 'Microsoft'))  // Microsoft Academy
console.log(company.charAt(10))                      // d
console.log(company.charCodeAt(0))                   // 67 (C)
console.log(company.indexOf('c'))                    // 3  (first c)
console.log(company.lastIndexOf('c'))                // 11 (last c)
console.log(company.startsWith('Coding'))            // true
console.log(company.endsWith('Academy'))             // true
console.log(company.match(/c/gi))                    // ['C', 'c', 'c']
console.log('Coding'.concat(' ', 'Academy'))         // Coding Academy
console.log(company.repeat(3))                       // Coding AcademyCoding AcademyCoding Academy

// Exercise 2: Comparison operators — which are true or false?
console.log('\n--- Comparison Operators ---')
console.log(4 > 3)       // true
console.log(4 >= 3)      // true
console.log(4 < 3)       // false
console.log(4 <= 3)      // false
console.log(4 == 4)      // true
console.log(4 === 4)     // true
console.log(4 != 4)      // false
console.log(4 !== 4)     // false
console.log(4 != '4')    // false  (loose comparison)
console.log(4 == '4')    // true   (loose comparison, coerces type)
console.log(4 === '4')   // false  (strict — different types)

// Exercise 3: Logical operators
console.log('\n--- Logical Operators ---')
console.log(4 > 3 && 10 < 12)    // true  (both true)
console.log(4 > 3 && 10 > 12)    // false (one false)
console.log(4 > 3 || 10 < 12)    // true
console.log(4 > 3 || 10 > 12)    // true  (one true is enough)
console.log(!(4 > 3))            // false
console.log(!(4 < 3))            // true
console.log(!(false))            // true
console.log(!(4 > 3 && 10 < 12)) // false
console.log(!(4 === '4'))         // true
