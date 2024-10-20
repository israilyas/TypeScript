const numbers:number[] = [1,2,3,4,5,6,7,8,9,12,15]

// ===== Map =====

// 1. Doubling Each Number

const doubleArr:number[] = numbers.map((curVal:number) => 2*curVal)
// console.log("Original Array",numbers)
// console.log("Double Array",doubleArr)

// 2. Converting numbers to string
const strArr:string[] = numbers.map((curVal:number) => curVal.toString())

// console.log(strArr)

// ===== Filter =====

// 1. Multiple of 3
const Multiple3:number[] = numbers.filter((curVal:number) => (curVal%3 ===0))

// console.log(Multiple3)

// 2.  Filter Even numbers
const evenArr:number[] = numbers.filter((curVal:number) => curVal%2 === 0)
// console.log(evenArr)

// 3. Filter numbers greater than 3
const greaterThan3 = numbers.filter((curVal:number) => curVal > 3)
console.log(greaterThan3)
