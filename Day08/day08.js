// ============================================================
// 📗 JavaScript for Everyone — Day 8
// Topics: Objects, Object Methods, Date Object
// Run: node day8.js
// ============================================================


// ────────────────────────────────────────────────
// 1. Creating Objects
// ────────────────────────────────────────────────

console.log('=== Objects ===')

// Empty object
const emptyObj = {}
console.log(emptyObj) // → {}

// Object with properties and methods
const person = {
  firstName: 'Asabeneh',
  lastName:  'Yetayeh',
  age:       100,
  location:  'Helsinki',
  skills:    ['HTML', 'CSS', 'JavaScript', 'React', 'Node', 'MongoDB', 'Python', 'D3.js'],
  getFullName: function() {
    return `${this.firstName} ${this.lastName}` // → Asabeneh Yetayeh
  }
}

// Accessing values
console.log(person.firstName)       // Asabeneh
console.log(person.lastName)        // Yetayeh
console.log(person.getFullName())   // Asabeneh Yetayeh
console.log(person['age'])          // 100
console.log(person['location'])     // Helsinki

// Rectangle object with methods
const rectangle = {
  length: 20,
  width:  20,
  getArea: function() {
    return this.length * this.width
  },
  getPerimeter: function() {
    return 2 * (this.length + this.width)
  }
}
console.log('Area:', rectangle.getArea())           // 400
console.log('Perimeter:', rectangle.getPerimeter()) // 80

// Adding new properties dynamically
person.nationality = 'Ethiopian'
person.live        = 'Finland'
console.log(person.nationality)   // Ethiopian


// ────────────────────────────────────────────────
// 2. Object Methods (Object static methods)
// ────────────────────────────────────────────────

console.log('\n=== Object Methods ===')

const personDetailed = {
  name:    'Asabeneh',
  age:     200,
  country: 'Finland',
  skills:  ['HTML', 'CSS', 'JS'],
  address: {
    street: 'Heitamienkatu 16',
    pobox:   2002,
    city:   'Helsinki'
  },
  getPersonInfo: function() {
    return `I am ${this.name} and I live in ${this.country}. I am ${this.age}.`
  }
}

// Object.assign — copy without modifying original
const copyPerson = Object.assign({}, personDetailed)
console.log(copyPerson.name)   // Asabeneh

// Object.keys — get all keys as array
const keys = Object.keys(personDetailed)
console.log(keys)   // ['name','age','country','skills','address','getPersonInfo']

const addressKeys = Object.keys(personDetailed.address)
console.log(addressKeys)  // ['street','pobox','city']

// Object.values — get all values as array
const values = Object.values(copyPerson)
console.log(values) // → [ 'Asabeneh', 200, 'Finland', [ 'HTML', 'CSS', 'JS' ], { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' }, [Function: getPersonInfo] ]

// Object.entries — get [key, value] pairs
const entries = Object.entries(copyPerson)
console.log(entries) // → [ [ 'name', 'Asabeneh' ], [ 'age', 200 ], [ 'country', 'Finland' ], [ 'skills', [ 'HTML', 'CSS', 'JS' ] ], [ 'address', { street: 'Heitamienkatu 16', pobox: 2002, city: 'Helsinki' } ], [ 'getPersonInfo', [Function: getPersonInfo] ] ]

// hasOwnProperty — check if key exists
console.log(copyPerson.hasOwnProperty('name'))    // true
console.log(copyPerson.hasOwnProperty('score'))   // false


// ────────────────────────────────────────────────
// 3. Date Object
// ────────────────────────────────────────────────

console.log('\n=== Date Object ===')

const now     = new Date()
const year    = now.getFullYear()   // e.g. 2026
const month   = now.getMonth() + 1  // 0-indexed, so +1
const date    = now.getDate()       // day of month (1-31)
const hours   = now.getHours()      // 0-23
const minutes = now.getMinutes()    // 0-59

console.log(`${date}/${month}/${year} ${hours}:${minutes}`)


// ────────────────────────────────────────────────
// 🏋️ Exercises — Day 8
// ────────────────────────────────────────────────

console.log('\n=== Exercises ===')

// Exercise 1: Dog object
const dog = {
  name:  'Buddy',
  legs:  4,
  color: 'Brown',
  age:   3,
  bark: function() {
    return 'Woof! Woof!'
  }
}
console.log(dog.name, dog.bark())

// Exercise 2: Your info object
const myInfo = {
  firstName:   'Akash',
  lastName:    'Sen',
  country:     'India',
  city:        'Kolkata',
  age:         20,
  skills:      ['JavaScript', 'Node.js', 'MongoDB'],
  isMarried:   false,
  getFullName: function() {
    return `${this.firstName} ${this.lastName}`
  }
}

console.log(myInfo.getFullName()) // → Akash Sen
console.log(Object.keys(myInfo)) // → [ 'firstName', 'lastName', 'country', 'city', 'age', 'skills', 'isMarried', 'getFullName' ]
console.log(Object.values(myInfo)) // → [ 'Akash', 'Sen', 'India', 'Kolkata', 20, [ 'JavaScript', 'Node.js', 'MongoDB' ], false, [Function: getFullName] ]

// Exercise 3: displayDateTime function
function displayDateTime() {
  const now    = new Date()
  const d      = String(now.getDate()).padStart(2, '0')
  const m      = String(now.getMonth() + 1).padStart(2, '0')
  const y      = now.getFullYear()
  const h      = String(now.getHours()).padStart(2, '0')
  const min    = String(now.getMinutes()).padStart(2, '0')
  return `${d}/${m}/${y} ${h}:${min}` // → 16/03/2026 20:33
}

console.log(displayDateTime())  // e.g. 16/03/2026 20:33
