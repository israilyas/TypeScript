//  WAF  call isPalindrom that takes as a parameter and returns true if the string is a palindrome (reads the same forward and backward), and false otherwise.

function isPalindrom(pal:string):boolean{
    let myPalin = pal.split('').reverse().join("");
    return myPalin === pal;
}

console.log(isPalindrom("isra"));
console.log(isPalindrom("rar"));
console.log(isPalindrom("10301"));

// ==== HomeWork ====

// 1. WAF called calculateAverage thattakes an array of numbers  as  a parameter  and retuurns the average of those numbers.

// 2. WAF called findMaxValue that takes an array of numbers as a parameter and returns the maximum value in the array.