//? let's add one function inside the object. It's more like creating a method in object.
var student1 = {
    name: 'Isra',
    age: 20,
    greet: function (country) { return "Hello my name is ".concat(student1.name, " and i am ").concat(student1.age, "yrs old. I live in ").concat(country); }
};
var student2 = {
    name: 'Sawera',
    age: 19,
    greet: function (country) { return "Hello my name is ".concat(student2.name, " and i am ").concat(student2.age, "yrs old. I live in ").concat(country); }
};
// const introduction:(student1:Student) => string = (student1:Student):string => {
//     const {name, age} = student1;
//     return `Welcome My name is ${name}, I am ${age}yrs old`;
// }
// console.log(introduction(student1))
console.log(student1.greet('Pakistan'));
console.log(student2.greet('Islamabad,  Pakistan.'));
