// two ways to declare object
// 1. constructor 2. litrals
// constructor produces singleton ,litrals doesn't
//  no difference in performance 

// Litral way 
const mysym = Symbol("key")

const jsUser = {
    name  : "Tanu",
    // mysym : "mykey",  for symbol  as key we hav to use square brackets 
    [mysym] : "mykey",
    "occupation":"Developer",
    email : "tanu@gmail.com" ,
    age   : 20,
    location : "sultanpur",
    isLoggedin : true ,
    LastLoggedinDates : [5,7,13,18],
    greet : function () {
        console.log(`${this.name} just logged in by id ${this.email} her age is ${this.age}`); 
    }
}
// by default system process keys as string!!!

// 2 ways to access object

console.log(jsUser.age);
console.log(jsUser["name"]);
// "occupation " is only accessed   by square brackets
console.log(jsUser['occupation']);

// console.log(typeof jsUser.mysym); 
// rong syntax

// console.log(jsUser[mysym]);
// console.log( typeof jsUser[mysym]);

// to overwrite objects
jsUser.email = "yadav@gmail.com";
// Object.freeze(jsUser)
jsUser.email = "dev@gmail.com";
// console.log(jsUser);


jsUser.greetings = function () {
    console.log(`Hello js user : ${this.name}`); 
}

jsUser.greetings();
console.log(jsUser.greetings());
jsUser.greet()




