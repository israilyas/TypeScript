// Example: Math operations Utility - creating class to perform various math operations

class MathOperations {
    public static PI = Math.PI

    public static add(num1:number,num2:number){
        return num1 + num2;
    }
    public static subs(num1:number,num2:number){
        return num1 - num2;
    }
    public static mul(num1:number,num2:number){
        return num1 * num2;
    }
    public static div(num1:number,num2:number){
        return num1 / num2;
    }
    public static mod(num1:number,num2:number){
        return num1 % num2;
    }
}

console.log(MathOperations.PI)
console.log("Add .. ", MathOperations.add(5,10))
console.log("Subtract .. ", MathOperations.subs(15,10))
console.log("Multiplication .. ", MathOperations.mul(5,10))
console.log("Division .. ", MathOperations.div(10,5))
console.log("Modulus .. ", MathOperations.mod(10,5))