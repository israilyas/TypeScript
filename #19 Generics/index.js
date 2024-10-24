// Generics
function logAndReturn(val) {
    return val;
}
// Using the generic function with different types
var numberResult = logAndReturn(42);
var stringResult = logAndReturn('Hello, TypeScript.');
var boolResult = logAndReturn(true);
// HomeWork 
function add(valone, valtwo) {
    return valone + valtwo;
}
var result1 = add(24, 8);
var result2 = add('hello', 'World');
console.log(result1);
console.log(result2);
