console.log("2" <1);
console.log("02" <1);
// js automatically converted string to no.
// differnt datatype comparisons sometimes give unpredictable result
console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
// conparison having null and undefined is unpredictable

// ===  strict check

console.log("2" === 2);
//  both 2's data type is also compared that's why giving false also string is not converted to number in ===
console.log("2" == 2);     /*true*/ 
// coz string converted to no.

