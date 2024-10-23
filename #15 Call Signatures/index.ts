//? let's add one function inside the object. It's more like creating a method in object.

type Student = {
    name:string;
    age:number;
    gender?:string;
    greet: (country) => string;
    // (country) : string; //  method not  defined explicitly
}

const student1:Student = {
    name:'Isra',
    age:20,
    greet: (country:string) => `Hello my name is ${student1.name} and i am ${student1.age}yrs old. I live in ${country}`
}
const student2:Student = {
    name:'Sawera',
    age:19,
    greet: (country:string) => `Hello my name is ${student2.name} and i am ${student2.age}yrs old. I live in ${country}`
}

// const introduction:(student1:Student) => string = (student1:Student):string => {
//     const {name, age} = student1;
//     return `Welcome My name is ${name}, I am ${age}yrs old`;
// }

// console.log(introduction(student1))
console.log(student1.greet('Pakistan'))
console.log(student2.greet('Islamabad,  Pakistan.'))
// console.log(student2('Islamabad,  Pakistan.')) // for call signature without name