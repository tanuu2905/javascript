// Immediately Invoked Function Expressions (IIFE) used to 
// immediate invoke of function and protect a block from global pollution

(function DB() {
    // named iife 
    console.log("DB connected "); 
}
)();
// iife dont know where to stop there context so it is very 
// important to put ;  after a iife to let execute iife after it!!!


( (name) => {
    console.log(`heloo ${name}`);
}
)("Tanu")