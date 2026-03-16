// ============================================================
// JavaScript for Everyone — Day 15
// Topics: localStorage, sessionStorage, Cookies
//
// ⚠️  NOTE: localStorage and Cookies are BROWSER APIs.
//     They do NOT exist in Node.js natively.
//     This file SIMULATES them so you can practice the exact
//     same syntax and logic locally.
//     When you open a browser console, all the real APIs
//     work exactly the same way as shown below.
// Run: node day15.js
// ============================================================


// ════════════════════════════════════════════════════════════
// ──── NODE.JS SIMULATION (ignore this block — it just
//      sets up fake localStorage/sessionStorage/document
//      so the practice code below can run in Node.js) ────
// ════════════════════════════════════════════════════════════

class LocalStorageMock {
  constructor() { this._store = {} }
  get length()              { return Object.keys(this._store).length }
  setItem(key, value)       { this._store[key] = String(value) }
  getItem(key)              { return this._store.hasOwnProperty(key) ? this._store[key] : null }
  removeItem(key)           { delete this._store[key] }
  clear()                   { this._store = {} }
  key(index)                { return Object.keys(this._store)[index] || null }
}

const localStorage    = new LocalStorageMock()
const sessionStorage  = new LocalStorageMock()

// Minimal document.cookie simulation
const _cookieStore = {}
const document = {
  get cookie() {
    return Object.entries(_cookieStore)
      .map(([k, v]) => `${k}=${v}`)
      .join('; ')
  },
  set cookie(cookieString) {
    const [pair, ...options] = cookieString.split(';').map(s => s.trim())
    const [key, value] = pair.split('=')
    if (value === '' || options.some(o => o.toLowerCase().startsWith('max-age=0') || o.toLowerCase().includes('expires=thu, 01 jan 1970'))) {
      delete _cookieStore[key.trim()]
    } else {
      _cookieStore[key.trim()] = value
    }
  }
}

// ════════════════════════════════════════════════════════════
// ──── PRACTICE CODE STARTS HERE ────
// ════════════════════════════════════════════════════════════


// ────────────────────────────────────────────────
// 1. localStorage — OVERVIEW
// ────────────────────────────────────────────────
//
// localStorage stores data IN THE BROWSER with NO expiry.
// Data persists even after closing the browser/tab.
//
// 5 Methods:
//   localStorage.setItem(key, value)   → save data
//   localStorage.getItem(key)          → read data
//   localStorage.removeItem(key)       → delete one item
//   localStorage.clear()               → delete ALL items
//   localStorage.key(index)            → get key by index
//   localStorage.length                → number of items


console.log('=== localStorage ===\n')

// ── setItem() ── store a value
localStorage.setItem('firstName', 'Akash')
localStorage.setItem('lastName',  'Sen')
localStorage.setItem('age',       '20')
localStorage.setItem('country',   'India')

// ── getItem() ── read a value (always returns STRING or null)
console.log('firstName:', localStorage.getItem('firstName'))   // Akash
console.log('age:',       localStorage.getItem('age'))         // '20' (string!)
console.log('missing:',   localStorage.getItem('missing'))     // null

// ── length ── number of stored items
console.log('Items stored:', localStorage.length)  // 4

// ── key(index) ── get key name by position
console.log('key(0):', localStorage.key(0))   // firstName

// ── Storing OBJECTS (must JSON.stringify first!) ──
const user = {
  name:    'Akash Sen',
  age:     20,
  skills:  ['JavaScript', 'Node.js', 'MongoDB']
}

// ❌ WRONG — stores "[object Object]"
// localStorage.setItem('user', user)

// ✅ CORRECT — serialize to JSON string first
localStorage.setItem('user', JSON.stringify(user))

// Reading object back — parse back to JS object
const storedUser = JSON.parse(localStorage.getItem('user'))
console.log('\nStored user:',  storedUser)
console.log('User name:',     storedUser.name)
console.log('User skills:',   storedUser.skills)

// ── removeItem() ── delete a single key
localStorage.removeItem('age')
console.log('\nAfter removeItem("age"):', localStorage.getItem('age'))  // null

// ── clear() ── wipe everything
localStorage.clear()
console.log('After clear(), length:', localStorage.length)  // 0


// ────────────────────────────────────────────────
// 2. Practical localStorage Examples
// ────────────────────────────────────────────────

console.log('\n=== Practical localStorage Examples ===\n')

// Save & retrieve user preferences
function savePreferences(theme, language, fontSize) {
  const prefs = { theme, language, fontSize }
  localStorage.setItem('preferences', JSON.stringify(prefs))
  console.log('Preferences saved:', prefs)
}

function loadPreferences() {
  const raw = localStorage.getItem('preferences')
  if (!raw) return { theme: 'light', language: 'en', fontSize: 16 }  // defaults
  return JSON.parse(raw)
}

savePreferences('dark', 'en', 18)
const prefs = loadPreferences()
console.log('Loaded preferences:', prefs)
// { theme: 'dark', language: 'en', fontSize: 18 }

// Save a shopping cart
const cart = [
  { id: 1, name: 'Laptop',  price: 999, qty: 1 },
  { id: 2, name: 'Mouse',   price: 29,  qty: 2 },
  { id: 3, name: 'Keyboard',price: 79,  qty: 1 }
]
localStorage.setItem('cart', JSON.stringify(cart))

const savedCart   = JSON.parse(localStorage.getItem('cart'))
const totalPrice  = savedCart.reduce((sum, item) => sum + item.price * item.qty, 0)
console.log('\nCart items:', savedCart.length)
console.log('Total price: $' + totalPrice)  // $1136

// Track how many times user visited
localStorage.setItem('visitCount', '0')
function trackVisit() {
  let count = parseInt(localStorage.getItem('visitCount')) || 0
  count++
  localStorage.setItem('visitCount', String(count))
  return count
}
console.log('\nVisit count:', trackVisit())   // 1
console.log('Visit count:', trackVisit())   // 2
console.log('Visit count:', trackVisit())   // 3


// ────────────────────────────────────────────────
// 3. sessionStorage
// ────────────────────────────────────────────────
//
// SAME API as localStorage — but data is CLEARED
// when the browser tab or window is closed.
// Great for temporary, session-only data.

console.log('\n=== sessionStorage ===\n')

sessionStorage.setItem('sessionToken', 'abc123xyz')
sessionStorage.setItem('tempData',     JSON.stringify({ step: 1, completed: false }))

console.log('Session token:', sessionStorage.getItem('sessionToken'))  // abc123xyz
console.log('Temp data:',     JSON.parse(sessionStorage.getItem('tempData')))

sessionStorage.removeItem('sessionToken')
console.log('After remove:', sessionStorage.getItem('sessionToken'))  // null

// Difference Table:
// ┌──────────────────┬─────────────────┬───────────────────┐
// │ Feature          │ localStorage    │ sessionStorage    │
// ├──────────────────┼─────────────────┼───────────────────┤
// │ Expires          │ Never           │ On tab/window close│
// │ Storage limit    │ ~5MB            │ ~5MB              │
// │ Scope            │ All tabs/windows│ Per tab only      │
// │ API              │ Same            │ Same              │
// └──────────────────┴─────────────────┴───────────────────┘


// ────────────────────────────────────────────────
// 4. Cookies
// ────────────────────────────────────────────────
//
// Cookies are NAME=VALUE pairs stored in the browser.
// They CAN be sent to the server with every HTTP request.
// They support an expiry date, path, domain, and secure flag.

console.log('\n=== Cookies ===\n')

// ── Setting a cookie ──
// Syntax: document.cookie = "name=value; expires=DATE; path=/"

// Simple cookie (session — expires when browser closes)
document.cookie = 'username=Akash'
document.cookie = 'city=Kolkata'

console.log('All cookies:', document.cookie)
// username=Akash; city=Kolkata

// Cookie with expiry date (7 days from now)
function setCookie(name, value, daysToExpire) {
  const date = new Date()
  date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000)
  const expires = 'expires=' + date.toUTCString()
  document.cookie = `${name}=${value}; ${expires}; path=/`
  console.log(`Cookie set → ${name}=${value} (expires in ${daysToExpire} days)`)
}

setCookie('theme',    'dark',  7)
setCookie('language', 'en',   30)
setCookie('token',    'xyz123', 1)

// ── Getting a specific cookie ──
function getCookie(name) {
  const cookieStr = document.cookie   // "username=Akash; city=Kolkata; ..."
  const cookies   = cookieStr.split('; ')
  for (const cookie of cookies) {
    const [key, value] = cookie.split('=')
    if (key.trim() === name) return value
  }
  return null   // not found
}

console.log('\nGet "theme":', getCookie('theme'))       // dark
console.log('Get "username":', getCookie('username'))   // Akash
console.log('Get "missing":', getCookie('missing'))     // null

// ── Deleting a cookie ──
// Set expiry to the past → browser removes it
function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/`
  console.log(`Cookie "${name}" deleted`)
}

deleteCookie('token')
console.log('After delete, token:', getCookie('token'))   // null

// ── Check all cookies ──
console.log('\nAll cookies now:', document.cookie)


// ────────────────────────────────────────────────
// 5. Cookies vs localStorage comparison
// ────────────────────────────────────────────────

console.log('\n=== Cookies vs localStorage ===\n')

// ┌────────────────┬──────────────────────────┬────────────────────────────┐
// │ Feature        │ localStorage             │ Cookies                    │
// ├────────────────┼──────────────────────────┼────────────────────────────┤
// │ Storage limit  │ ~5MB                     │ ~4KB                       │
// │ Expiry         │ Never (manual clear)     │ Set manually or session    │
// │ Sent to server │ ❌ No                    │ ✅ Yes (every HTTP request) │
// │ Access (JS)    │ ✅ Yes                   │ ✅ Yes (unless httpOnly)   │
// │ Use case       │ User prefs, cart, theme  │ Auth tokens, sessions      │
// └────────────────┴──────────────────────────┴────────────────────────────┘

const comparison = [
  { feature: 'Storage limit', localStorage: '~5MB',           cookies: '~4KB' },
  { feature: 'Expiry',        localStorage: 'Never',          cookies: 'Configurable' },
  { feature: 'Sent to server',localStorage: 'No',             cookies: 'Yes (auto)' },
  { feature: 'JS access',     localStorage: 'Yes',            cookies: 'Yes (unless httpOnly)' },
  { feature: 'Best for',      localStorage: 'UI prefs/cache', cookies: 'Auth tokens/sessions' },
]
console.table(comparison)


// ────────────────────────────────────────────────
// 🏋️ Exercises — Day 15
// ────────────────────────────────────────────────

console.log('\n=== Exercises ===\n')

// Exercise 1: Save & load your profile
localStorage.clear()
const myProfile = { name: 'Akash Sen', age: 20, country: 'India', skills: ['JS', 'Node'] }
localStorage.setItem('profile', JSON.stringify(myProfile))
const profile = JSON.parse(localStorage.getItem('profile'))
console.log('Profile loaded:', profile.name, '|', profile.skills.join(', '))

// Exercise 2: Simple to-do list storage
const todos = [
  { id: 1, task: 'Learn JavaScript', done: true  },
  { id: 2, task: 'Build a project',  done: false },
  { id: 3, task: 'Push to GitHub',   done: false }
]
localStorage.setItem('todos', JSON.stringify(todos))
const savedTodos = JSON.parse(localStorage.getItem('todos'))
console.log('\nTodo List:')
savedTodos.forEach(t => console.log(`  [${t.done ? '✓' : ' '}] ${t.task}`))

// Exercise 3: Cookie-based theme switcher
function setTheme(theme) {
  setCookie('appTheme', theme, 365)
}
function getTheme() {
  return getCookie('appTheme') || 'light'   // default to light
}

setTheme('dark')
console.log('\nApp theme:', getTheme())   // dark

// Exercise 4: Count page views using localStorage
localStorage.setItem('pageViews', '0')
function incrementPageViews() {
  const views = parseInt(localStorage.getItem('pageViews')) + 1
  localStorage.setItem('pageViews', String(views))
  return views
}
console.log('\nPage views:')
for (let i = 0; i < 5; i++) {
  console.log('  Visit', incrementPageViews())
}


// ────────────────────────────────────────────────
// REAL BROWSER CHEAT SHEET
// ────────────────────────────────────────────────
console.log('\n=== 📋 Real Browser Cheat Sheet ===')
console.log(`
// ─── localStorage ───────────────────────────────
localStorage.setItem('key', 'value')         // save
localStorage.getItem('key')                  // read
localStorage.removeItem('key')               // delete one
localStorage.clear()                         // delete all
localStorage.length                          // count

// ─── sessionStorage ─────────────────────────────
// Same API as localStorage — clears on tab close

// ─── Cookies ────────────────────────────────────
document.cookie = "name=value; path=/"
document.cookie = "name=value; expires=DATE; path=/"

// To list all cookies:
console.log(document.cookie)

// To delete a cookie:
document.cookie = "name=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"
`)
