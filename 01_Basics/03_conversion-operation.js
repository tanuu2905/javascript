let name = "Tanu"
let namevalue = Number(name)
let namecheck = Boolean(name)
// console.log(namecheck);  /*true*/
// console.log(namevalue);  /*NaN*/

let name2 = "33"
let namevalue2 = Number(name2)
let namecheck2 = Boolean(name2)
// console.log(namecheck2);   /*true*/
// console.log(namevalue2);  /*33*/

let name3 = "33ws"
let namevalue3 = Number(name3)
// console.log(namevalue3);  /*NaN*/

let name4 = ""
let namecheck4 = Boolean(name4)
// console.log(namecheck4);  /*false*/ 
let namestring4 = String(name4)
// console.log(namestring4);  /*  */

let name5 ;
let namecheck5 = Boolean(name5)
// console.log(namecheck5);    /*false*/
let namestring5 = String(name5)
// console.log(namestring5); /*undefined*/

let name6 = false 
let namevalue6 = Number(name6)
// console.log(namevalue6);   /*0*/

let namestring6 = String(name6)
// console.log(namestring6); /*false*/


// *********************************************

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log( (3 + 4) * 5 % 3);

console.log(+true);
console.log(+"");
