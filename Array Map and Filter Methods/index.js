var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 15];
// ===== Map =====
// 1. Doubling Each Number
var doubleArr = numbers.map(function (curVal) { return 2 * curVal; });
// console.log("Original Array",numbers)
// console.log("Double Array",doubleArr)
// 2. Converting numbers to string
var strArr = numbers.map(function (curVal) { return curVal.toString(); });
// console.log(strArr)
// ===== Filter =====
// 1. Multiple of 3
var Multiple3 = numbers.filter(function (curVal) { return (curVal % 3 === 0); });
// console.log(Multiple3)
// 2.  Filter Even numbers
var evenArr = numbers.filter(function (curVal) { return curVal % 2 === 0; });
// console.log(evenArr)
// 3. Filter numbers greater than 3
var greaterThan3 = numbers.filter(function (curVal) { return curVal > 3; });
console.log(greaterThan3);
