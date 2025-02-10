let myarr = [3,7,9,5,2]
console.log(myarr);
let myarr2 = new Array(9,5,1,0,4,8)
console.log(myarr2[1]);

// Methods
myarr.push(0);
console.log(myarr)


myarr2.push(2);
console.log(myarr2)
myarr2.pop();
myarr2.pop();
console.log(myarr2)
myarr2.unshift(3) /*time consuming operation,need to shift all prev valuse from starting */
console.log(myarr2)
myarr2.shift()
myarr2.shift()
console.log(myarr2)
myarr2.push(9);
myarr2.push(7);

console.log(myarr2.includes(9));
console.log(myarr2.includes(1));
console.log(myarr2.indexOf(9));
console.log(myarr2.indexOf(0));

const newarray = myarr.join() /*join convert the myarr to string (separated via comma) */
console.log(newarray);
console.log(myarr);

// slice 

  console.log("A", myarr2)
   const slice= myarr2.slice(1,3) /*slice DOESN'T changes the original array feeded to it 
                                      and also  DOESN'T include last range  */
   console.log(slice);
   
  console.log("B", myarr2)

//   splice

console.log("C", myarr2)
   const splice= myarr2.splice(1,3)  /*splice changes the original array feededto it 
                                           and also include last range */
   console.log(splice);
   
  console.log("D", myarr2)








