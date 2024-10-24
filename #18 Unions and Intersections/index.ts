const userInput = (value: string | number):number|string => {
    if(typeof(value) === "string"){
        return value.toUpperCase();
    }
    else if(typeof(value) === "number"){
        return value*2;
    }
    else{
        throw new Error('Invalid Input')
    }
}

console.log(userInput(10))
console.log(userInput("isra ilyas"))
// console.log(userInput(true))

// Home Work Union:

// Intersection

type Person= {
    name:string;
    age:number;
}

type Employee = {
    emp_id:number;
    department:string;
}

// type EmployeeDetails = Person & Employee;
type EmployeeDetails = Person | Employee;

const employee:EmployeeDetails = {
    
} 