const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);
console.log(balance.toString().length);
console.log(balance.length);
const balance2 = new Number(158.737585) 
console.log(balance2.toFixed(3));
console.log(balance2.toPrecision(3));
console.log(balance2.toPrecision(2));
console.log(balance2.toPrecision(4));
const hundred = new Number(10000000000)
console.log(hundred.toLocaleString());
console.log(hundred.toLocaleString('en-IN'));


// ********************************MATHS***********************************************

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.9));
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.sqrt(100));
console.log(Math.random()); /*always between 0 and 1 */
console.log(Math.random()*10 +1);
console.log(Math.floor(Math.random()*10 +1));
// (Math.random() * (max - min + 1)) + min
// formula for getting range of no. from min to max





