// Real life example of using tuples in TypeScript

//? Let's consider a scenario where you want to represent a person's basic information, including their name, age, and whether they have a driving license. Using a tuple can be  an appropriate choice because these three  elements have a specific order and type.

// Defining a tuple type for person information
type PersonInfo = readonly [string,number,boolean]

// Example Usage
let person1:PersonInfo = ["Isra",18,true]
let person2:PersonInfo = ["Hania",19,false]

// FUnction to display persons information.
let displaypersonInfo = (person:PersonInfo)=>{
    const [name,age,license] = person;

    return  license === true? `name = ${name}, age = ${age}, Drivind License = "yes`:`name = ${name}, age = ${age}, Drivind License = "NO"`;
}

// To prevent tuple or array from changing you can make them readonly so no one can change them
// person1.push("Hello Coding guys")

console.log(displaypersonInfo(person1))
console.log(displaypersonInfo(person2))
console.log(person1)