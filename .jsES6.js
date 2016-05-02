//ES3 - 5 Variable
var ada = 'ada';
var ada1 = 12314;

for(var i = 0; i < 10; i++){
  // Do something
}

console.log(i); // 10

//ES6
let code = 'ada';
for(let i = 0; i < 10; i++){
  // Do something
}
console.log(i) // undefined

const PI = 3.1425;
const isPi = (input) => {
  return input === PI
}

// ES5 Fucntion
// Hoisting

hoist()

function hoist() {
  // Do something
}

const noHoist = function () {
  // Something
}

//ES6
// Arrow function
const isEven = (input) => input%2 === 0
// Transpiled
const isEven = function(input) {
  return input%2 === 0;
}

//ES6 Class
class AppleMint {
  constructor() {

  }

  methodN() {

  }
}

// ES6 Import - Export
export const c = '3x10^8';
export const fn = () => { console.log('Ada')};
import { c, fn } from 'speedOfLight.js';

export default class AppleMint {
  constructor() {
    // anythings
  }
}

import AppleMint from 'speedOfLight.js';

// ES6
const obj = { name: 'ada', text: 'Hello, Kick', any: true };

let name = obj.name, // 'ada'
    text = obj.text; // 'Hello, Kick'

let { name, text } = obj;
console.log(name) // 'ada'
console.log(text) /// 'Hello, Kick'
