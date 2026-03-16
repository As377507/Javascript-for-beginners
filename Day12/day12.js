// ============================================================
// JavaScript for Everyone — Day 12
// Topics: Advanced Classes — getter, setter, static methods,
//         Inheritance with method overriding
// Run: node day12.js
// ============================================================


// ────────────────────────────────────────────────
// Full Person Class with getter, setter, static
// ────────────────────────────────────────────────

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName
    this.lastName  = lastName
    this.age       = age
    this.country   = country
    this.city      = city
    this.score     = 0      // initial value
    this.skills    = []     // initial value
  }

  // Regular method
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }

  // getter — access like a property, no ()
  get getScore() {
    return this.score
  }

  get getSkills() {
    return this.skills
  }

  // setter — assign like a property, no ()
  set setScore(score) {
    this.score += score
  }

  set setSkill(skill) {
    this.skills.push(skill)
  }

  // Regular method with full info
  getPersonInfo() {
    const fullName = this.getFullName()
    const skills   = this.skills.length > 0
      ? `He knows ${this.skills.slice(0, -1).join(', ')} and ${this.skills[this.skills.length - 1]}`
      : ''
    return `${fullName} is ${this.age}. He lives ${this.city}, ${this.country}. ${skills}`
  }

  // Static methods — called on the class itself, NOT on instances
  static favoriteSkill() {
    const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
    const index  = Math.floor(Math.random() * skills.length)
    return skills[index]
  }

  static showDateTime() {
    const now     = new Date()
    const year    = now.getFullYear()
    const month   = now.getMonth() + 1
    const date    = now.getDate()
    let   hours   = now.getHours()
    let   minutes = now.getMinutes()
    if (hours   < 10) hours   = '0' + hours
    if (minutes < 10) minutes = '0' + minutes
    return `${date}.${month}.${year} ${hours}:${minutes}`
  }
}


// ────────────────────────────────────────────────
// Using getter and setter
// ────────────────────────────────────────────────

console.log('=== Getter & Setter ===')

const person1 = new Person('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki')
const person2 = new Person('Lidiya',   'Tekle',    28, 'Finland', 'Espoo')
const person3 = new Person('John',     'Doe',       50, 'Mars',   'Mars City')

// Initial values
console.log('Score (initial):', person1.getScore)    // 0
console.log('Skills (initial):', person1.getSkills)  // []

// Use setter (assign like property — no parentheses!)
person1.setScore = 1
person1.setSkill = 'HTML'
person1.setSkill = 'CSS'
person1.setSkill = 'JavaScript'

person2.setScore = 1
person2.setSkill = 'Planning'
person2.setSkill = 'Managing'
person2.setSkill = 'Organizing'

// Use getter
console.log('\nAfter setter:')
console.log('person1 score:', person1.getScore)     // 1
console.log('person2 score:', person2.getScore)     // 1
console.log('person1 skills:', person1.getSkills)   // ['HTML','CSS','JavaScript']
console.log('person2 skills:', person2.getSkills)   // ['Planning','Managing','Organizing']
console.log('person3 skills:', person3.getSkills)   // []


// ────────────────────────────────────────────────
// getPersonInfo method
// ────────────────────────────────────────────────

console.log('\n=== getPersonInfo ===')
console.log(person1.getPersonInfo())
// Asabeneh Yetayeh is 250. He lives Helsinki, Finland. He knows HTML, CSS and JavaScript
console.log(person2.getPersonInfo())
// Lidiya Tekle is 28. He lives Espoo, Finland. He knows Planning, Managing and Organizing
console.log(person3.getPersonInfo())
// John Doe is 50. He lives Mars City, Mars.


// ────────────────────────────────────────────────
// Static methods
// ────────────────────────────────────────────────

console.log('\n=== Static Methods ===')
console.log('Favorite skill:', Person.favoriteSkill())  // random skill
console.log('Current time:',   Person.showDateTime())   // e.g. 17.3.2026 00:48


// ────────────────────────────────────────────────
// Inheritance with method overriding
// ────────────────────────────────────────────────

console.log('\n=== Inheritance (with Override) ===')

class Student extends Person {
  constructor(firstName, lastName, age, country, city, gender) {
    super(firstName, lastName, age, country, city)  // call parent constructor
    this.gender = gender
  }

  saySomething() {
    return 'I am a child of the person class'
  }

  // OVERRIDE getPersonInfo — uses pronoun based on gender
  getPersonInfo() {
    const fullName = this.getFullName()
    const skills   = this.skills.length > 0
      ? `${pronoun} knows ${this.skills.slice(0, -1).join(', ')} and ${this.skills[this.skills.length - 1]}`
      : ''
    const pronoun  = this.gender === 'Male' ? 'He' : 'She'
    const info     = `${fullName} is ${this.age}. ${pronoun} lives in ${this.city}, ${this.country}. ${skills}`
    return info
  }
}

const s1 = new Student('Asabeneh', 'Yetayeh', 250, 'Finland', 'Helsinki', 'Male')
const s2 = new Student('Lidiya',   'Tekle',    28,  'Finland', 'Helsinki', 'Female')

s1.setScore = 1
s1.setSkill = 'HTML'
s1.setSkill = 'CSS'
s1.setSkill = 'JavaScript'

s2.setScore = 1
s2.setSkill = 'Planning'
s2.setSkill = 'Managing'

console.log(s1.saySomething())
console.log(s1.getFullName())
console.log('s1 skills:', s1.getSkills)
console.log('s2 skills:', s2.getSkills)


// ────────────────────────────────────────────────
// More Functional: sort() properly
// ────────────────────────────────────────────────

console.log('\n=== Correct Array sort() ===')

// String sort — works fine
const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log([...products].sort())
// ['Apple','Carrot','Coffee','Honey','Milk','Sugar']

// Number sort — WRONG by default (compares as strings)
const numbers = [9.81, 3.14, 100, 37]
console.log([...numbers].sort())             // [100, 3.14, 37, 9.81]  ← WRONG!

// Number sort — CORRECT with compare function
const sortedAsc  = [...numbers].sort((a, b) => a - b)
const sortedDesc = [...numbers].sort((a, b) => b - a)
console.log('Ascending:', sortedAsc)         // [3.14, 9.81, 37, 100]
console.log('Descending:', sortedDesc)       // [100, 37, 9.81, 3.14]

// Sort array of objects by age
const usersArr = [
  { name: 'Asabeneh', age: 150 },
  { name: 'Brook',    age: 50  },
  { name: 'Eyo',      age: 100 },
  { name: 'Elias',    age: 22  }
]
usersArr.sort((a, b) => a.age - b.age)
console.log('Sorted by age:', usersArr)
// [ {Elias,22}, {Brook,50}, {Eyo,100}, {Asabeneh,150} ]
