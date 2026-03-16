// ============================================================
// 📔 JavaScript for Everyone — Day 6
// Topics: Arrays, Array Methods
// Run: node day6.js
// ============================================================


// ────────────────────────────────────────────────
// 1. Arrays — Creating and Accessing
// ────────────────────────────────────────────────

console.log('=== Arrays ===')

const numbers = [0, 3.14, 9.81, 37, 98.6, 100]
console.log(numbers.length)          // 6
console.log(numbers[0])              // 0
console.log(numbers[5])              // 100
console.log(numbers[numbers.length - 1])  // 100 (last item)

const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB']
console.log(webTechs) // → [ 'HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB' ]
console.log(webTechs[0])             // HTML
console.log(webTechs[6])             // MongoDB

const countries = ['Albania', 'Bolivia', 'Canada', 'Denmark', 'Ethiopia', 'Finland', 'Germany', 'Hungary', 'Ireland', 'Japan', 'Kenya']
console.log(countries[0])            // Albania
console.log(countries[10])           // Kenya

const shoppingCart = ['Milk', 'Mango', 'Tomato', 'Potato', 'Avocado', 'Meat', 'Eggs', 'Sugar']
console.log(shoppingCart)
console.log(shoppingCart[0])         // Milk
console.log(shoppingCart[shoppingCart.length - 1])  // Sugar


// ────────────────────────────────────────────────
// 2. Array Methods
// ────────────────────────────────────────────────

console.log('\n=== Array Methods ===')

// Array() constructor
const arr = Array()
console.log(arr)                           // []

const eightEmptyValues = Array(8)
console.log(eightEmptyValues)              // [ <8 empty items> ]

// .fill() — fill with a static value
const eightXvalues = Array(8).fill('X')
console.log(eightXvalues)                  // ['X','X','X','X','X','X','X','X']

// .concat() — merge arrays
const firstList  = [1, 2, 3]
const secondList = [4, 5, 6]
const thirdList  = firstList.concat(secondList)
console.log(thirdList)                     // [1,2,3,4,5,6]

// .length
const nums = [1, 2, 3, 4, 5]
console.log(nums.length)                   // 5

// .indexOf() — first occurrence
console.log(nums.indexOf(5))               // 4
console.log(nums.indexOf(0))               // -1 (not found)

// .lastIndexOf()
const nums2 = [1, 2, 3, 4, 5, 3, 1, 2]
console.log(nums2.lastIndexOf(2))          // 7
console.log(nums2.lastIndexOf(4))          // 3

// .includes()
console.log(nums.includes(5))              // true
console.log(nums.includes(0))              // false

// Array.isArray()
console.log(Array.isArray(nums))           // true
console.log(Array.isArray(100))            // false

// .toString()
console.log(nums.toString())               // 1,2,3,4,5

// .join()
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names.join())                  // Asabeneh,Mathias,Elias,Brook
console.log(names.join(''))                // AsabenehMathiasEliasBrook
console.log(names.join(' '))               // Asabeneh Mathias Elias Brook
console.log(names.join(', '))              // Asabeneh, Mathias, Elias, Brook
console.log(names.join(' # '))             // Asabeneh # Mathias # Elias # Brook

// .slice(start, end) — does NOT include end, does NOT modify original
const nums3 = [1, 2, 3, 4, 5]
console.log(nums3.slice())                 // [1,2,3,4,5] — copy all
console.log(nums3.slice(0))               // [1,2,3,4,5] — copy all
console.log(nums3.slice(1, 4))            // [2,3,4]

// .push() — add to end
const nums4 = [1, 2, 3, 4, 5]
nums4.push(6)
console.log(nums4)                         // [1,2,3,4,5,6]

// .pop() — remove from end
nums4.pop()
console.log(nums4)                         // [1,2,3,4,5]

// .shift() — remove from beginning
const nums5 = [1, 2, 3, 4, 5]
nums5.shift()
console.log(nums5)                         // [2,3,4,5]

// .unshift() — add to beginning
const nums6 = [1, 2, 3, 4, 5]
nums6.unshift(0)
console.log(nums6)                         // [0,1,2,3,4,5]

// .sort() — sorts alphabetically/numerically
const fruits = ['banana', 'apple', 'mango', 'cherry']
fruits.sort()
console.log(fruits)                        // ['apple', 'banana', 'cherry', 'mango']

// .reverse()
const nums7 = [1, 2, 3, 4, 5]
nums7.reverse()
console.log(nums7)                         // [5,4,3,2,1]


// ────────────────────────────────────────────────
// 🏋️ Exercises — Day 6
// ────────────────────────────────────────────────

console.log('\n=== Exercises ===')

// Exercise 1: IT Companies array
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
console.log(itCompanies)
console.log('Count:', itCompanies.length)                    // 7
console.log('First:', itCompanies[0])                        // Facebook
console.log('Middle:', itCompanies[Math.floor(itCompanies.length / 2)])  // Apple
console.log('Last:', itCompanies[itCompanies.length - 1])    // Amazon

// Print each company
itCompanies.forEach(company => console.log(company)) // → Facebook
                                                      // Google
                                                      // Microsoft
                                                      // Apple
                                                      // IBM
                                                      // Oracle
                                                      // Amazon

// Print uppercase
console.log(itCompanies.map(c => c.toUpperCase())) // → [ 'FACEBOOK', 'GOOGLE', 'MICROSOFT', 'APPLE', 'IBM', 'ORACLE', 'AMAZON' ]

// Sentence
const lastCompany = itCompanies[itCompanies.length - 1]
const rest        = itCompanies.slice(0, -1).join(', ')
console.log(`${rest} and ${lastCompany} are big IT companies.`) // → Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon are big IT companies.

// Check if a company exists
const search = 'Google'
console.log(itCompanies.includes(search) ? `${search} exists` : `${search} is not found`) // → Google exists

// Sort
const sorted = [...itCompanies].sort()
console.log('Sorted:', sorted) // → [ 'Amazon', 'Apple', 'Facebook', 'Google', 'IBM', 'Microsoft', 'Oracle' ]

// Reverse without .reverse()
const reversed = [...itCompanies].reverse()
console.log('Reversed:', reversed) // → [ 'Amazon', 'Oracle', 'IBM', 'Apple', 'Microsoft', 'Google', 'Facebook' ]

// Slice operations
console.log('First 3:', itCompanies.slice(0, 3))    // → [ 'Facebook', 'Google', 'Microsoft' ]
console.log('Last 3:', itCompanies.slice(-3)) // → [ 'IBM', 'Oracle', 'Amazon' ]
console.log('Middle:', itCompanies.slice(2, 5)) // → [ 'Microsoft', 'Apple', 'IBM' ]

// Shopping cart exercise
const shoppingCart2 = ['Milk', 'Coffee', 'Tea', 'Honey']
console.log('\nShopping Cart:', shoppingCart2) // → [ 'Milk', 'Coffee', 'Tea', 'Honey' ]
shoppingCart2.push('Meat')     // add
console.log('After push:', shoppingCart2) // → [ 'Milk', 'Coffee', 'Tea', 'Honey', 'Meat' ]
shoppingCart2.pop()            // remove last
console.log('After pop:', shoppingCart2) // → [ 'Milk', 'Coffee', 'Tea', 'Honey' ]
shoppingCart2.shift()          // remove first
console.log('After shift:', shoppingCart2) // → [ 'Coffee', 'Tea', 'Honey' ]
shoppingCart2.unshift('Bread') // add to start
console.log('After unshift:', shoppingCart2) // → [ 'Bread', 'Coffee', 'Tea', 'Honey' ]
