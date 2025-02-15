let a = 1
const b = 2
var c = 3
// console.log(a);
// console.log(b);
// console.log(c);

{  
    let a = 4 
    const b = 5 
    var c = 6

    // console.log("inner block :" + a);
    // console.log("inner block :" + b);
    // console.log("inner block :" + c);
    // block variables should not go outside 

}
    // console.log("outer  block :" + a);
    // console.log("outer  block :" + b);
    // console.log("outer  block :" + c); 

    // Nested scope 

    function one(params) {

        const username = "Tanu"
        function two(params) {
            const website = "youtube"
            console.log(username);
            console.log(username2);
            // child function can access parent variables
        }
        // console.log(website);
           username2 = "yadav"
        two();
        // username2 = "yadav"
       
        
    }
    one();
    if (true) {
        const username = "Tanu"
        if (username ==="Tanu") {
            const website = "github"
            console.log(`${username} ${website}`);
        }
        // console.log(website);
    }
    // console.log(username);

    // ***************************************************
    
    addnum(5)   /*it will not throw error  */

     function addnum(num) {
        return num +1;
        
     }


     total2(5) /*it will throw error  */

      const total2 = function addnum2(num) {
        return num+2
        
     }
     
      



