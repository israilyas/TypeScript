//  === Unknown Type ===

//  The unknown type is a safer alternative to any beacause it still enforces type checking and type safety;
// variable of type unknown can hold values of any type, but  you must perform type checks or type assertions before using those in specific ways.

let myNum:unknown = 10;
myNum = "ten";
myNum = true;

// ==== type checking  ====

// if(typeof(myNum) === "number"){
//     console.log(myNum + 5)
// }
// else if(typeof(myNum) === "string"){
//     console.log(myNum)
// }
// else{
//     console.log(myNum)
// }

// ==== Type Safety ======
// type safety we could perfom methods for that type it is available or not .


// Home Work

async function fetchData():Promise<unknown> {
    const response = await fetch('https://api.example.com/data')
    const data = await response.json();
    return data;
}

async function processData() {
    const response = await fetchData();

    if (typeof response === 'object') {
        console.log(response)
        // Perform operation on the responce object
    }
}