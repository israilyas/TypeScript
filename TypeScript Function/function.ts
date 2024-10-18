//==== Function declaration: ====
// you  can declare a function  using the function keyword followed by the function name, a list of parameters enclosed in parentheses, and a return type. 
//  The function body contains the code that will be executed when the function is called

// function great(id:number,Uname:string ){ //Parameter
//     console.log(`Welcome, ${Uname} ${id} to our company `)
// }
// ==== Function Invocation ====
// great(123,"Vinode"); // Argument

// === Arrow Function ====

const  great1 = (id:number,Uname:string )=>{ //Parameter
    console.log(`Welcome, ${Uname} ${id} to our company `)
}
great1(123,"Vinode"); // Argument

// Return Type in TypeScript:

const  great2 = (id:number,Uname:string )=> `Welcome, ${Uname} ${id} to our company `; // one line function
const  great3 = (id:number,Uname:string )=> {
    return `Welcome, ${Uname} ${id} to our company `; 
}
let myGreet =  great3(23,"Vino");
console.log(myGreet)