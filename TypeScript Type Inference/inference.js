// Infer ==>  Assume
var myName = "ISRA"; // The compiler infers the type string for the variable name.
var age = 20; // The compiler infers the type number for the variable age.
var isValid = true; // The compiler infers  the type boolean for the variable isValid.
// ==== Home Work Questions...====
// 1. Declare a variable message and initialize it with  the value "Hello, TypeScript1". Infer the type of message ussing type inference.
var message = "Hello, TypeScript!";
// message = 89; error
// 2. Write a function calculateArea that takes length and  width parameters f type number and return their product. Infer the return type of the function using type inference.
function calculateArea(length, width) {
    return length * width;
}
console.log(calculateArea(4, 6));
console.log(calculateArea(10, 7));
console.log(typeof (calculateArea(10, 7)));
