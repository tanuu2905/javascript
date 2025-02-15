function addnumbers(num1,num2) {
    return num1+num2 ;

    console.log("Tanu");  /*unreachable code nothing executed after return after return in a block  */
    
    
}
const result = addnumbers(5,7)
const result2 = addnumbers(5,"7")
const result3 = addnumbers('5',7)
const result4 = addnumbers(5, null)


// console.log(result);    
// console.log(result2);  /*57 */
// console.log(result3);   /*57 */
// console.log(result4);

function usermessage(usermessage ) {
    if(!usermessage)            /*OR usermessage===undefined */
    return `Please enter a valid user name `
    return`${usermessage} just logged in`  
}

const returnmessage = usermessage("Tanu")
const returnmessage1 = usermessage()
const returnmessage2 = usermessage("")
// console.log(returnmessage);
// console.log(returnmessage1);
// console.log(returnmessage2);


function calculatecartprice(...num){   /*here...is rest operator  */
 return num;
}
const total = calculatecartprice(120,345,222,786)
console.log(total);


function calculatecartprice2(val1,val2, ...num){   /*here...is rest operator  */
    return num;
   }
const total2 = calculatecartprice2(120,345,222,786)
console.log(total2);

const user = {
    name : "Tanu",
    price : 200
}
    
 function usergreet(anyobject){
    console.log(`${anyobject.name}  borrowed a book having mrp ${anyobject.price}`)
}
usergreet(user);
usergreet({
    name : "yadav",
    price : 500

})
const arr = [10,20,30]

function userarray(myarr) {
    console.log(myarr[1]);
}
userarray(arr);
userarray([50,60,70]);


 


 




