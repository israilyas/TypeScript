class Person{
    name: string;
    age: number ;
    hobbies: string[];

    constructor(names:string,age:number,hobbies:string[]){
        this.name = names;
        this.age  = age;
        this.hobbies = hobbies;

    }
}

const person1 = new Person("Isra",18,["Writing","Freelancing","Coding"]);
const person2 = new Person("Asra",18,["Writing","Freelancing","Coding"]);
console.log(person1)
console.log(person2)