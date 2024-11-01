// Example: Math operations Utility - creating class to perform various math operations
var MathOperations = /** @class */ (function () {
    function MathOperations() {
    }
    MathOperations.add = function (num1, num2) {
        return num1 + num2;
    };
    MathOperations.subs = function (num1, num2) {
        return num1 - num2;
    };
    MathOperations.mul = function (num1, num2) {
        return num1 * num2;
    };
    MathOperations.div = function (num1, num2) {
        return num1 / num2;
    };
    MathOperations.mod = function (num1, num2) {
        return num1 % num2;
    };
    MathOperations.PI = Math.PI;
    return MathOperations;
}());
console.log(MathOperations.PI);
console.log("Add .. ", MathOperations.add(5, 10));
console.log("Subtract .. ", MathOperations.subs(15, 10));
console.log("Multiplication .. ", MathOperations.mul(5, 10));
console.log("Division .. ", MathOperations.div(10, 5));
console.log("Modulus .. ", MathOperations.mod(10, 5));
