"use strict"
let scope = 33;

console.log(typeof scope);
console.log(typeof(scope));

scope = '33';

console.log(typeof scope);

scope = '33abc';

let valueInNumber = Number(scope);
console.log(typeof valueInNumber);

console.log(valueInNumber) // shows NaN

scope = null;

let valueInNum = Number(scope);
console.log(typeof valueInNum);

console.log(valueInNum) // shows 0

let value = 198
let valueInboolean = Boolean(value)
console.log(valueInboolean)