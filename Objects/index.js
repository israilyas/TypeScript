//? Lets consider a real-life example of representing a person's information using TypeScript objects.
// name, age, isStudent, address{ city, country}
var person = {
    Name: 'isra',
    age: 20,
    isStudent: true,
    address: {
        city: 'karachi',
        country: 'Pakistan'
    }
};
// TODO Accessing the object data
console.log(person.age);
console.log(person.address.country);
console.log(person);
