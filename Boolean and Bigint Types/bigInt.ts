// -------------------
//    BigInt Type
// -------------------
// It is a built-in type  that allows you to work with numbers that are larger than the range supported by regular number type.
// BigInt leterals are written by appending the n suffix to an  integer literal (eg. 10004n)
// In JS we can't read the whole nubers beyond 2 raise to power 53

// let maxNumber = Number.MAX_SAFE_INTEGER;
// console.log(maxNumber)
let bigNumber:bigint = 9007199254740991n;
console.log(bigNumber)

let  anotherBigNumber = BigInt("9007199254740991")//constructor
console.log(anotherBigNumber)

// Home  Work
let sum = bigNumber + anotherBigNumber;
console.log("Sum" + sum)
let difference = bigNumber - anotherBigNumber;
console.log("Difference = " + difference)
let product = bigNumber * anotherBigNumber;
console.log("Product = " + product)
let division = bigNumber / anotherBigNumber;
console.log("division = " + division)