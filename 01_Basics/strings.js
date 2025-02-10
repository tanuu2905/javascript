const name = "Tanu"
const age = 22

console.log(`My name is ${name} and i am ${age} years old`);
const string = new String("Tanuyadav")
console.log(string[5])
console.log(string.length);
console.log(string.toUpperCase());
console.log(string.charAt(4));
console.log(string.indexOf('a'));
 
const newstring = string.substring(1,5);
console.log(newstring);

const newstring2 = string.slice(3, 8)
console.log(newstring2);

const newstring3 = string.slice(-7, 5)
console.log(newstring3);
const newStringOne = "   Tanu    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "tanuydvgoogle.com"
console.log(url.replace("ydv", "_"));
console.log(url);
console.log(url.includes("goo"));
console.log(url.includes("idli"));
const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.split());
console.log(str.split(" "));
console.log(str.split(" ", 4));
console.log(str.split(''));
console.log(str.split('',4));
const str22=  str.split(" ")
console.log(str22[4]);














