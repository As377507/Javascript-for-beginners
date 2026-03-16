// ============================================================
// 📓 JavaScript for Everyone — Day 5
// Topics: For Loop, While Loop, Do-While Loop
// Run: node day5.js
// ============================================================


// ────────────────────────────────────────────────
// 1. For Loop
// ────────────────────────────────────────────────

console.log('=== For Loop ===')

// Basic for loop: 0 to 5
for (let i = 0; i <= 5; i++) {
  console.log(i)
}

// Loop with array
const webTechs = ['HTML', 'CSS', 'JavaScript']
for (let i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i])
}

// ────────────────────────────────────────────────
// 2. While Loop
// ────────────────────────────────────────────────

console.log('\n=== While Loop ===')

let i = 0
while (i <= 5) {
  console.log(i)
  i++
}


// ────────────────────────────────────────────────
// 3. Do-While Loop
// ────────────────────────────────────────────────

console.log('\n=== Do-While Loop ===')

let j = 0
do {
  console.log(j)
  j++
} while (j <= 5)


// ────────────────────────────────────────────────
// 🏋️ Exercises — Day 5
// ────────────────────────────────────────────────

console.log('\n=== Exercises ===')

// Exercise 1: 0 to 10 using for
console.log('--- 0 to 10 (for) ---')
for (let i = 0; i <= 10; i++) process.stdout.write(i + ' ')
console.log()

// Exercise 2: 10 to 0 using for
console.log('--- 10 to 0 (for) ---')
for (let i = 10; i >= 0; i--) process.stdout.write(i + ' ')
console.log()

// Exercise 3: Triangle with #
console.log('--- Triangle ---')
for (let i = 1; i <= 7; i++) {
  console.log('#'.repeat(i))
}

// Exercise 4: Iterate array
console.log('--- Array Iteration ---')
const techs = ['HTML', 'CSS', 'JavaScript']
for (let i = 0; i < techs.length; i++) {
  console.log(techs[i])
}

// Exercise 5: Even numbers 0-100
console.log('--- Even numbers (0-100) ---')
let evens = []
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) evens.push(i)
}
console.log(evens)

// Exercise 6: Odd numbers 0-100
console.log('--- Odd numbers (0-100) ---')
let odds = []
for (let i = 0; i <= 100; i++) {
  if (i % 2 !== 0) odds.push(i)
}
console.log(odds)

// Exercise 7: Sum of all numbers 0-100
let total = 0
for (let i = 0; i <= 100; i++) total += i
console.log('Sum of all numbers (0-100):', total)   // 5050

// Exercise 8: Sum of evens and odds (0-100)
let sumEvens = 0
let sumOdds  = 0
for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) sumEvens += i
  else sumOdds  += i
}
console.log('Sum of evens:', sumEvens) // 2550
console.log('Sum of odds:', sumOdds) // 2500
