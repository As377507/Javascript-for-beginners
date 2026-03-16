// ============================================================
// JavaScript for Everyone — Day 11
// Topics: JSON — JSON.parse(), JSON.stringify(), reviver, filter
// Run: node day11.js
// ============================================================


// ────────────────────────────────────────────────
// 1. What is JSON?
// ────────────────────────────────────────────────
// JSON = JavaScript Object Notation
// - It is a TEXT (string) format for storing/transporting data
// - Keys MUST be in double quotes  →  "key": value
// - Used heavily when data is sent from a server to a client


// ────────────────────────────────────────────────
// 2. JSON.parse()  — JSON string → JS Object
// ────────────────────────────────────────────────

console.log('=== JSON.parse() ===')

const usersText = `{
  "users": [
    { "firstName": "Asabeneh", "lastName": "Yetayeh", "age": 250, "email": "asab@asb.com" },
    { "firstName": "Alex",     "lastName": "James",   "age": 25,  "email": "alex@alex.com" },
    { "firstName": "Lidiya",   "lastName": "Tekle",   "age": 28,  "email": "lidiya@lidiya.com" }
  ]
}`

const usersObj = JSON.parse(usersText)
console.log(usersObj)
console.log(usersObj.users[0].firstName)   // Asabeneh
console.log(usersObj.users[1].age)         // 25


// ────────────────────────────────────────────────
// 3. JSON.parse() with a Reviver function
//    (transforms specific values during parsing)
// ────────────────────────────────────────────────

console.log('\n=== JSON.parse() with Reviver ===')

const usersObjRevived = JSON.parse(usersText, (key, value) => {
  // Uppercase string values — but NOT the email field
  let newValue = typeof value === 'string' && key !== 'email'
    ? value.toUpperCase()
    : value
  return newValue
})
console.log(usersObjRevived.users[0])
// → { firstName: 'ASABENEH', lastName: 'YETAYEH', age: 250, email: 'asab@asb.com' }


// ────────────────────────────────────────────────
// 4. JSON.stringify()  — JS Object → JSON string
// ────────────────────────────────────────────────

console.log('\n=== JSON.stringify() ===')

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  }
}

// stringify with 4-space indentation (pretty print)
const txt = JSON.stringify(users, undefined, 4)
console.log(txt)


// ────────────────────────────────────────────────
// 5. JSON.stringify() with a Filter Array
//    (only keep specified keys)
// ────────────────────────────────────────────────

console.log('\n=== JSON.stringify() with Filter ===')

const user = {
  firstName: 'Asabeneh',
  lastName:  'Yetayeh',
  country:   'Finland',
  city:      'Helsinki',
  email:     'alex@alex.com',
  skills:    ['HTML', 'CSS', 'JavaScript', 'React', 'Python'],
  age:       250,
  isLoggedIn: false,
  points:    30
}

// Only keep these 5 keys in the output:
const filtered = JSON.stringify(user, ['firstName', 'lastName', 'country', 'city', 'age'], 4)
console.log(filtered)
/*
{
    "firstName": "Asabeneh",
    "lastName": "Yetayeh",
    "country": "Finland",
    "city": "Helsinki",
    "age": 250
}
*/


// ────────────────────────────────────────────────
// 🏋️ Exercises — Day 11
// ────────────────────────────────────────────────

console.log('\n=== Exercises ===')

const skills = ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
let age      = 250
let married  = true

const student = {
  firstName: 'Asabeneh',
  lastName:  'Yetayehe',
  age:       250,
  isMarried: true,
  skills:    ['HTML', 'CSS', 'JS', 'React', 'Node', 'Python']
}

// Exercise 1: Change skills array to JSON
console.log('Skills JSON:', JSON.stringify(skills))
// → ["HTML","CSS","JS","React","Node","Python"]

// Exercise 2: Stringify a number
console.log('Age JSON:', JSON.stringify(age))
// → 250

// Exercise 3: Stringify a boolean
console.log('Married JSON:', JSON.stringify(married))
// → true

// Exercise 4: Stringify the student object
console.log('Student JSON:')
console.log(JSON.stringify(student, undefined, 2))

// Exercise 5: Stringify student with only firstName, lastName, skills
console.log('\nFiltered Student JSON:')
console.log(JSON.stringify(student, ['firstName', 'lastName', 'skills'], 2))

// Bonus: Parse JSON and find the user with the most skills
const txtData = `{
  "Alex": { "skills": ["HTML","CSS","JavaScript"], "points": 30, "isLoggedIn": false },
  "Asab": { "skills": ["HTML","CSS","JavaScript","Redux","MongoDB","Express","React","Node"], "points": 50, "isLoggedIn": false },
  "Brook": { "skills": ["HTML","CSS","JavaScript","React","Redux"], "points": 50, "isLoggedIn": true },
  "John": { "skills": ["HTML","CSS","JavaScript","React","Redux","Node.js"], "points": 50, "isLoggedIn": true }
}`

const parsed = JSON.parse(txtData)

// Count logged-in users
let loggedIn = 0
for (const name in parsed) {
  if (parsed[name].isLoggedIn) loggedIn++
}
console.log('\nLogged in users:', loggedIn)  // 2

// User with most skills
let maxSkills = 0, topUser = ''
for (const name in parsed) {
  if (parsed[name].skills.length > maxSkills) {
    maxSkills = parsed[name].skills.length
    topUser   = name
  }
}
console.log(`User with most skills: ${topUser} (${maxSkills} skills)`)  // Asab (8 skills)
