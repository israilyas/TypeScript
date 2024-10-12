// ==== Number Type =====

let myFavNum:number = 5;
let myAge:number = 20;
let pi:number = 3.147;
let myNegVal:number = -5;

// Practice Questions 

// let inValidResult:number = myAge + 'years';
// let inValidResult:number = myAge + '123';

// console.log(inValidResult)

// let computableValue:number = Math.sqrt(16)
// console.log(computableValue)

// let nanValue:number = NaN;
// console.log(nanValue) // It is valid  

// ==== String Type ====

let myFullName= "ISRA ILYAS"
let myFirstName = "ISRA"
let myLastName="ILYAS"

myFullName = myFirstName + myLastName;

console.log(myFullName)

// Todo == String Initialization 
// Declare a variable message of type string and assign it the value "Hello",

let message:string = "Hello"

//todo === Concatenation
// Create two variables firstName and lastName of type string and assign them your  first name and last name respectively. Concatenate the two variables and store the resu;t in a variable called fullname

let firstName:string = "Isra";
let lastName:string = "Ilyas";

let fullName = firstName + lastName;

//todo === String Length
// Declare a variable  sentence of type string and assign it a sentence of your choice. Find the length of the string and store it in a variable callled sentenceLength

let sentence:string = "Hello! I am ISRA"

let sentenceLength = sentence.length
console.log(sentenceLength)

//todo === UpperCase and Lowercase
// Declare a variable text of type string and assign it a sentence of your choice. Convert  the entire  sentence to uppercase and store the result in a  variable called uppercaseText. Then convver the entire sentence into to lowerCase and store the result in a  variable called lowercaseText

let text:string = "Hello, This is typeScript Learning Tutorial"

let textUpperCase = text.toUpperCase()
let textLowerCase = text.toLocaleLowerCase()

console.log(textUpperCase)
console.log(textLowerCase)

// ==== HOME WORK =====

//Todo === Substring
// Declare a variable  longText of type string and assign it a long sentence.Extract the first 10 characters from longText and store them in a variable called shortText.

let longText = "This is long text of type string"
let shortText = longText.substring(0,10)
console.log(shortText)

// Todo === String Comparison
// Declare two variable str1 and str2 of type string and assign them different sentence. COmpare the two string and store the result (true or false) in a variable  called areEqual.

let str1:string = "this is string one"
let str2:string = "This is string two"

let areEual = str1 == str2
console.log(areEual)

// Todo === String Template
// Declare variable product and price of type string and number, respectively. Create string using template literals to display the product and its price is the format "The product {product} is priced at {price} dollars."
let product:string = "J. Perfume";
let price:number = 200;

console.log(`The product ${product} is priced at ${price} dollars.`)