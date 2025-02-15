const user = {
    msg : "Tanu",
    greet : function () {
        console.log(` welcome to website  ${this.msg }`);
        console.log(this);  /*will give current context of the scope  */  
    }
}

// user.greet()
user.msg = "yadav"   /*context changed */
// user.greet()
console.log(this);   /*no context globally in node/deno/ bun  environment so will get empty object in code editors
                                  but give window object when executed at browser */

// ***********************************************************************

function chai() {
    const msg = "Tanu"
    // console.log(this);    /*empty object */
    console.log(this.msg);   /*this statement will not work in functions :(( */
}
chai();

// ARROW FUNCTIONSSS

const biscuit =  () => {

    console.log(`First arrow function`);
    const msg = "Tanu"
    console.log(this);   /*empty object */
    console.log(this.msg);   /*this statement will not work in functions :(( */
}
biscuit()

const arrow1 = (num1, num2) => {
 return num1+num2;  /*explicit return  */
}
console.log(arrow1(3,4));


// implicit return
const arrow2 = (num1, num2) =>  (num1+num2)  
   console.log(arrow2(5,5));

const arrow3 = (num1, num2) =>  num1+num2
   console.log(arrow3(2,7));

// if parenthesis is used don't  write return but if curly brakets is used then it is mandatory to write return
                                  

