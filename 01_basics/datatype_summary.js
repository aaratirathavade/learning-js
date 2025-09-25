// primitive data types
// String , Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123");
const anotherId = Symbol("123")

console.log(id===anotherId);
// console.log(id)
// console.log(anotherId)

// Reference data type/ non primitive
//Array, Objects, Functions

const heros = ['abc', 'pqr', 'xyz']

const myObj = {
    id : 1,
    name : 'def',
    city : 'mumbai'
}

const myFun = function(){
  console.log ('hello');
}