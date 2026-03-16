// ============================================================
// JavaScript for Everyone — Day 13
// Topics: Regular Expressions (RegEx)
// Run: node day13.js
// ============================================================


// ────────────────────────────────────────────────
// 1. Creating a RegEx Pattern
// ────────────────────────────────────────────────

console.log('=== Creating RegEx Patterns ===')

// Method 1: RegExp constructor
let pattern1 = new RegExp('love')
let pattern2 = new RegExp('love', 'gi')   // g=global, i=case-insensitive
console.log(pattern1)   // /love/
console.log(pattern2)   // /love/gi

// Method 2: Literal syntax (preferred)
let pattern3 = /love/gi
console.log(pattern3)   // /love/gi


// ────────────────────────────────────────────────
// 2. RegEx Methods
// ────────────────────────────────────────────────

console.log('\n=== RegEx Methods ===')

// .test() — returns true/false
const str1   = 'I love JavaScript'
const pTest  = /love/
console.log(pTest.test(str1))    // true
console.log(/Python/.test(str1)) // false

// .match() — returns array of matches or null
const str2 = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(str2.match(/love/))    // first match object
console.log(str2.match(/love/g))   // ['love','love','love']

// .search() — returns index of first match, or -1
console.log(str2.search(/love/))   // 2

// .replace() — replace matched substrings
const txt = 'Python is the most beautiful language. I recommend python for beginners.'
console.log(txt.replace(/Python/,    'JavaScript'))  // only first
console.log(txt.replace(/Python/gi,  'JavaScript'))  // all, case-insensitive

// Remove all % signs
const dirty = '%I a%m te%%a%%che%r%'
console.log(dirty.replace(/%/g, ''))   // I am teacher


// ────────────────────────────────────────────────
// 3. Square Bracket [ ]
// ────────────────────────────────────────────────

console.log('\n=== Square Bracket [ ] ===')

const fruitTxt = 'Apple and banana are fruits. An old cliche says an apple a day keeps the doctor away.'

// [Aa] = either A or a
console.log(fruitTxt.match(/[Aa]pple/g))
// ['Apple','apple']

console.log(fruitTxt.match(/[Aa]pple|[Bb]anana/g))
// ['Apple','banana','apple']


// ────────────────────────────────────────────────
// 4. Escape Character \d
// ────────────────────────────────────────────────

console.log('\n=== Escape Character \\d ===')

const dateTxt = 'This regular expression example was made in January 12, 2020.'

console.log(dateTxt.match(/\d/g))   // individual digits
// ['1','2','2','0','2','0']

console.log(dateTxt.match(/\d+/g))  // full numbers (+= one or more)
// ['12','2020']


// ────────────────────────────────────────────────
// 5. Period (.) — any character except newline
// ────────────────────────────────────────────────

console.log('\n=== Period (.) ===')

const fruitStr = 'Apple and banana are fruits'
console.log(fruitStr.match(/[a]./g))    // 'a' followed by any char
// ['an','an','an','a ','ar']

console.log(fruitStr.match(/[a].+/g))   // 'a' then one or more chars
// ['and banana are fruits']


// ────────────────────────────────────────────────
// 6. Zero or more (*), Zero or one (?)
// ────────────────────────────────────────────────

console.log('\n=== * and ? ===')

// * = zero or more
console.log(fruitStr.match(/[a].*/g))
// ['and banana are fruits']

// ? = optional (zero or one)
const emailTxt = 'I am not sure if there is a convention how to write e-mail. Some write email others Email or E-mail.'
console.log(emailTxt.match(/[Ee]-?mail/g))
// ['e-mail','email','Email','E-mail']


// ────────────────────────────────────────────────
// 7. Quantifiers { }
// ────────────────────────────────────────────────

console.log('\n=== Quantifiers { } ===')

const numTxt = 'This regular expression example was made in December 6, 2019.'
console.log(numTxt.match(/\d{4}/g))    // exactly 4 digits  → ['2019']
console.log(numTxt.match(/\d{1,4}/g))  // 1 to 4 digits     → ['6','2019']


// ────────────────────────────────────────────────
// 8. Caret ^ (starts with / negation)
// ────────────────────────────────────────────────

console.log('\n=== Caret ^ ===')

const sent = 'This regular expression example was made in December 6, 2019.'
console.log(sent.match(/^This/))        // starts with 'This' → ['This']

// ^ inside [ ] means NOT
console.log(sent.match(/[^A-Za-z,. ]+/g))  // not letters/comma/period/space
// ['6','2019']


// ────────────────────────────────────────────────
// 9. Exact Match — ^ and $
// ────────────────────────────────────────────────

console.log('\n=== Exact Match ^ and $ ===')

const namePattern = /^[A-Z][a-z]{3,12}$/   // starts with capital, then 3-12 lowercase
console.log(namePattern.test('Asabeneh'))   // true
console.log(namePattern.test('akash'))      // false (no capital start)
console.log(namePattern.test('Jo'))         // false (too short)


// ────────────────────────────────────────────────
// 🏋️ Exercises — Day 13
// ────────────────────────────────────────────────

console.log('\n=== Exercises ===')

// 1. Validate an email address pattern
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
console.log('Valid email:', emailPattern.test('test@example.com'))  // true
console.log('Invalid email:', emailPattern.test('not-an-email'))    // false

// 2. Extract all numbers from a string
const mixed = 'The price is 200 dollars and 50 cents, total 250'
console.log('Numbers:', mixed.match(/\d+/g))  // ['200','50','250']

// 3. Check if string starts with capital letter
const cap = /^[A-Z]/
console.log('Starts capital:', cap.test('Hello'))   // true
console.log('Starts capital:', cap.test('hello'))   // false

// 4. Count how many times 'because' appears
const sentence = 'You cannot end a sentence with because because because is a conjunction'
const becauseMatches = sentence.match(/because/g)
console.log('because count:', becauseMatches.length)   // 3

// 5. Clean up text with % signs
const messyText = '%I a%m a %te%acher% an%d I lo%ve t%each%ing.'
console.log('Cleaned:', messyText.replace(/%/g, ''))
// I am a teacher and I love teaching.

// 6. Extract only 4-digit years from text
const historyText = 'JavaScript was created in 1995. React was released in 2013. Node.js in 2009.'
console.log('Years:', historyText.match(/\d{4}/g))   // ['1995','2013','2009']
