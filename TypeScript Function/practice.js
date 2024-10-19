//  WAF  call isPalindrom that takes as a parameter and returns true if the string is a palindrome (reads the same forward and backward), and false otherwise.
function isPalindrom(pal) {
    var myPalin = pal.split('').reverse().join("");
    return myPalin === pal;
}
// console.log(isPalindrom("isra"));
// console.log(isPalindrom("rar"));
// console.log(isPalindrom("10301"));
// ==== HomeWork ====
// 1. WAF called calculateAverage thattakes an array of numbers  as  a parameter  and retuurns the average of those numbers.
function calculateAverage(number) {
    var total = number.reduce(function (accumulator, currentValue) { return accumulator + currentValue; });
    return total / (number.length);
}
var avg = calculateAverage([4, 3, 5]);
// console.log(avg)
// 2. WAF called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.
function findMaxValue(number) {
    var acc = 0;
    var maxV = number.reduce(function (acc, currentValue) {
        if (acc < currentValue) {
            acc = currentValue;
        }
        return acc;
    });
    return maxV;
}
var val = findMaxValue([1, 4, 2, 32, 6, 7, 8, 2, 9]);
console.log(val);
