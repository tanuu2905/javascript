let myDate = new Date()
console.log(myDate);
console.log(myDate.getHours());
console.log(myDate.getDate());
console.log(myDate.getDay());
console.log(myDate.getMonth()+1);
console.log(myDate.getFullYear());
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toTimeString())


console.log(myDate.toLocaleString())
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString())


console.log(myDate.toJSON());
console.log(myDate.toISOString());

console.log(typeof myDate);

const createmydate = new Date(2025 , 4 , 29 , 6, 34, 30)
console.log(createmydate.toDateString());
console.log(createmydate.toLocaleString());
const createmydate2 = new Date("05-29-2002")
console.log(createmydate2.toLocaleString());

console.log(createmydate2.getTime()) /*result in milliseconds */
const timestamp = Date.now()
console.log(timestamp);  /*result in milliseconds */

// to get in sec divide it by 1000
console.log(Math.floor(timestamp/1000 ));  /*result in seconds */






