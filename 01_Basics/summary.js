//  Primitive ; stack ; call by value 

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n

// Reference heap ; call by refrence

const heros = ["shaktiman", "naagraj", "doga"];

const obj = {
    name : "Tanu",
    age : "22"
}
const func = function myfunc() {
    console.log("first function");
    
    
}
console.log(obj.name);

func()

//  primitive -stack

let mychannel = "xyz"
let mychannel2 = mychannel

mychannel2 = "abc"

// copy of mychannel1 is given to mychannel2 so changes made by mychannel2 will not effect mychannel
console.log(mychannel)
console.log(mychannel2);

//  refrenced - stack


const obj2 = {
    name : "Tanu",
    age : "22"
}

const obj3 = obj2

obj3.name = "vidhi"
// here obj2,3 referencing same memory location


console.log(obj2);
console.log(obj3);





