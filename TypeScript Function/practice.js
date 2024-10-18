//  WAF  call isPalindrom that takes as a parameter and returns true if the string is a palindrome (reads the same forward and backward), and false otherwise.
function isPalindrom(pal) {
    var myPalin = pal.split('').reverse().join("");
    return myPalin === pal;
}
console.log(isPalindrom("isra"));
console.log(isPalindrom("rar"));
console.log(isPalindrom("10301"));
