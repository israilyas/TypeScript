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

// console.log(userInput(10))
// console.log(userInput("isra ilyas"))
// console.log(userInput(true))


// Intersection

type Person= {
    name:string;
    age:number;
}

type Employee = {
    emp_id:number;
    department:string;
}

type EmployeeDetails = Person & Employee;
type PersonalDetails = Person | Employee;

const personDetails:PersonalDetails = {
    emp_id:123,
    department:'IT',
    name:'Vinode'
} 

const employee:EmployeeDetails = {
    emp_id:123,
    department:'IT',
    name:'Vinode',
    age:20,
} 

// Practice: Create User Profile
//* You are givin two TypeScript types: User and Mylocation. The user type represents basic user information, while the Mylocation type contains details about the user's location. Create a function called createUserProfile that takes a User object and myLocation object as arguments and prints the user's name and the city they are from.

type User = {
    name: string;
    age:number;
}

type Mylocation = {
    city:string;
    country:string;
}

const user:User = {
    name:"vinode",
    age:29,
}

const locat:Mylocation = {
    city:"NewYork",
    country:"UK",
}



const createUserProfile = (user:User,loc:Mylocation) => {
    const {name,age} = user;
    const {city,country} = loc;
    // return `My name is ${name} and I am living in ${city}, ${country}`;
    return {...user,...loc}
}

console.log(createUserProfile(user,locat));
let completeData =createUserProfile(user,locat);
console.log(completeData);

