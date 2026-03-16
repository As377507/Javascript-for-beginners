// ============================================================
// JavaScript for Everyone — Day 10
// Topics: Destructuring, Spread/Rest, Set, Map, Classes, Inheritance
// Run: node day10.js
// ============================================================

// ─── 1. Destructuring Arrays ───
console.log('=== Array Destructuring ===')

const [numOne, numTwo, numThree] = [1, 2, 3]
console.log(numOne, numTwo, numThree)    // 1 2 3

const [firstPerson, secondPerson, thirdPerson, fourthPerson] = ['Asabeneh', 'Brook', 'David', 'John']
console.log(firstPerson, secondPerson, thirdPerson, fourthPerson) // → Asabeneh Brook David John

// Skipping elements
const [e, pi, gravity, bodyTemp, boilingTemp] = [2.72, 3.14, 9.81, 37, 100]
console.log(e, pi, gravity, bodyTemp, boilingTemp) // → 2.72 3.14 9.81 37 100

// Default values
const [first = 'Asabeneh', second, third, fourth = 'John'] = [undefined, 'Brook', 'David']
console.log(first, second, third, fourth)   // Asabeneh Brook David John


// ─── 2. Destructuring Objects ───
console.log('\n=== Object Destructuring ===')

const rectangle = { width: 20, height: 10, area: 200 }
const { width, height, area, perimeter = 60 } = rectangle
console.log(width, height, area, perimeter)  // 20 10 200 60

// Rename while destructuring
const { width: w, height: h, area: a } = rectangle
console.log(w, h, a)  // 20 10 200

// Destructuring as function parameter
const rect = { width: 20, height: 10 }
const calculatePerimeter = ({ width, height }) => 2 * (width + height)
console.log('Perimeter:', calculatePerimeter(rect))  // 60


// ─── 3. Spread and Rest Operator ───
console.log('\n=== Spread & Rest ===')

// Spread: expand array/object
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const combined = [...arr1, ...arr2]
console.log('Spread arrays:', combined)   // [1,2,3,4,5,6]


const x = []
const y = []
const z = [...x, ...y]
console.log('Spread arrays:', z) // []
console.log(typeof z) // object

const obj1 = { a: 1, b: 2, f: 2}
const obj2 = { c: 3, d: 4 }
const mergedObj = { ...obj1, ...obj2 }
console.log('Spread objects:', mergedObj) // {a:1,b:2,f:2,c:3,d:4}

// Rest: gather remaining into array
const sumAll = (...args) => args.reduce((a, b) => a + b, 0)
console.log('Sum rest:', sumAll(1, 2, 3, 4, 5))  // 15


// ─── 4. Set ───
console.log('\n=== Set ===')

const set1 = new Set()
set1.add(10)
set1.add(20)
set1.add(30)
set1.add(20)  // duplicate — ignored
console.log(set1)             // Set { 10, 20, 30 }
console.log(set1.size)        // 3
console.log(set1.has(20))     // true

// Set from array
const languages = ['English', 'Python', 'English', 'French', 'Python']
const uniqueLangs = new Set(languages)
console.log(uniqueLangs)      // Set { 'English', 'Python', 'French' }

// Set operations
const setA = new Set([1, 2, 3, 4, 5])
const setB = new Set([3, 4, 5, 6, 7])

// Union
const union = new Set([...setA, ...setB])
console.log('Union:', union)  // {1,2,3,4,5,6,7}

// Intersection
const intersection = new Set([...setA].filter(el => setB.has(el)))
console.log('Intersection:', intersection)  // {3,4,5}

// Difference
const difference = new Set([...setA].filter(el => !setB.has(el)))
console.log('Difference:', difference)  // {1,2}


// ─── 5. Map ───
console.log('\n=== Map ===')

const map1 = new Map()
map1.set('name', 'Asabeneh')
map1.set('age',  250)
map1.set('country', 'Finland')
console.log(map1)
console.log(map1.get('name'))     // Asabeneh
console.log(map1.has('age'))      // true
console.log(map1.size)            // 3

// Map from array of pairs
const countriesMap = new Map([['FI', 'Finland'], ['SE', 'Sweden'], ['NO', 'Norway']])
console.log(countriesMap)
console.log(countriesMap.get('FI'))  // Finland


// ─── 6. Classes ───
console.log('\n=== Classes ===')

class Person {
  constructor(firstName = 'Asabeneh', lastName = 'Yetayeh', age = 250, country = 'Finland', city = 'Helsinki') {
    this.firstName = firstName
    this.lastName  = lastName
    this.age       = age
    this.country   = country
    this.city      = city
    this.score     = 0
    this.skills    = []
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  get getPersonInfo() {
    return `I am ${this.firstName} ${this.lastName}. I live in ${this.city}, ${this.country}.`
  }

  addSkill(skill) {
    this.skills.push(skill)
  }

  static greet() {
    return 'Hello from the Person class!'
  }
}

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya', 'Tekle', 28, 'Finland', 'Espoo')
const person3 = new Person()   // default values

console.log(person1.getFullName())
console.log(person2.getPersonInfo)
console.log(Person.greet())          // static — called on class, not instance

person1.addSkill('JavaScript')
person1.addSkill('React')
console.log('Skills:', person1.skills)


// ─── 7. Inheritance ───
console.log('\n=== Inheritance ===')

class Student extends Person {
  constructor(firstName, lastName, age, country, city, major) {
    super(firstName, lastName, age, country, city)
    this.major = major
  }
  saySomething() {
    return 'I am a student of ' + this.major
  }
  getStudentInfo() {
    return `${this.getFullName()} — ${this.major} student from ${this.country}`
  }
}

const s1 = new Student('Akash', 'Sen', 20, 'India', 'Kolkata', 'Computer Science')
console.log(s1.getFullName())       // Akash Sen  (inherited)
console.log(s1.saySomething())      // I am a student of Computer Science
console.log(s1.getStudentInfo())    // Akash Sen — Computer Science student from India


// ─── Exercises ───
console.log('\n=== Exercises ===')

// Destructure constants
const constants = [2.72, 3.14, 9.81, 37, 100]
const [eConst, piConst, gravityConst, humanBodyTemp, waterBoilingTemp] = constants
console.log(eConst, piConst, gravityConst, humanBodyTemp, waterBoilingTemp)

// Destructure countries
const countriesDestr = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const [fin, est, sw, den, nor] = countriesDestr
console.log(fin, est, sw, den, nor)

// Set uniqueness
const arr = [1, 2, 2, 3, 4, 4, 5]
const unique = [...new Set(arr)]
console.log('Unique array:', unique)   // [1,2,3,4,5]
