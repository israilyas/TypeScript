//? Lets consider a real-life example of representing a person's information using TypeScript objects.

// name, age, isStudent, address{ city, country}

const person:{
    Name:string;
    age:number;
    isStudent:boolean;
    address:{ city:string; country:string; }
} = {
    Name :'David',
    age: 40,
    isStudent: true,
    address: {
        city : 'Newyork',
        country: 'USA'
    }
    
}
// TODO Accessing the object data
console.log(person.age)
console.log(person.address.country)
console.log(person)

// TODO Updating object properties
person.address.city = 'Nepal'
console.log(person.address.city)