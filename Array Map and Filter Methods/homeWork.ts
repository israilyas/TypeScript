//* Practice questions for map:
//? 1: Given an array of strings representing names, create a new array that contains the uppercase version of each name.
let stringArray:string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
let newStrArr:string[] = stringArray.map((curVal:string) => curVal.toUpperCase());

// console.log(`Previous Version of Array: `, stringArray)
// console.log(`UpperCase Version of Array: `, newStrArr)

//? 2: Given an array of numbers, create a new array that contains the square of each number.

let numbersArray:number[] = [1, 2, 3, 4, 5];
let sqrNumArr:number[] = numbersArray.map((curVal:number) => curVal*curVal)

// console.log("Array: ", numbersArray)
// console.log("Updated Array: ", sqrNumArr)

// * Practice questions for filter:
//? 1: Given an array of strings, create a new array that contains only the strings with a length greater than 4

const names: string[] = ["Alice", "Bob", "Anna", "Andrew", "Alex"];
const filterNames:string[] = names.filter((name:string) => name.length > 4)

// console.log(filterNames)

//? 2: Given an array of strings, filter out the names that start with the letter "A".

const myArray:string[]=["Ayesha", "Wania","Sawera","Ali","Abdul"]

// const startWithA:string[] = myArray.filter((name) => name.startsWith("A"));
// console.log(startWithA)


// Question#1  Average of numbers of Array 

function averageOfNum(array:number[]):number{
    let avg:number = 0;
    for(let i = 0; i < array.length; i++){
        let num = array[i];
        avg += num; 
    }
    return avg/array.length;
}

// console.log(averageOfNum([1,2,3,4,5]))

// Question#2 Max Value From Array

function maxValueArray(numbers:number[]):number{
    let max = numbers[0]
    for(let i = 0; i < numbers.length; i++){
        if(numbers[i]>max){
            max = numbers[i]
        }
    }
    return max;
}

console.log(maxValueArray([4,2,3,6,7,9,1,2,4,12,34,71,89,12,42,53]))


//-------------------------

// Question 1


// var calculateAverage = (numbers:any)=>{
//     let average:number  = 0;
//     average += numbers.map((currentVal:number)=>{
//         currentVal/numbers.length;
//     })
//     return average;

// }

// console.log(calculateAverage([1,2,3,4,5]));
