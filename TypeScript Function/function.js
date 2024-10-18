//==== Function declaration: ====
// you  can declare a function  using the function keyword followed by the function name, a list of parameters enclosed in parentheses, and a return type. 
//  The function body contains the code that will be executed when the function is called
// function great(id:number,Uname:string ){ //Parameter
//     console.log(`Welcome, ${Uname} ${id} to our company `)
// }
// ==== Function Invocation ====
// great(123,"Vinode"); // Argument
// === Arrow Function ====
var great1 = function (id, Uname) {
    console.log("Welcome, ".concat(Uname, " ").concat(id, " to our company "));
};
great1(123, "Vinode"); // Argument
// Return Type in TypeScript:
var great2 = function (id, Uname) { return "Welcome, ".concat(Uname, " ").concat(id, " to our company "); }; // one line function
var great3 = function (id, Uname) {
    return "Welcome, ".concat(Uname, " ").concat(id, " to our company ");
};
var myGreet = great3(23, "Vino");
console.log(myGreet);
