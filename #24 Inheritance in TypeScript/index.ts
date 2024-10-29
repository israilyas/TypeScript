// Common Properties In Parent Class

class Person{
    name:string;
    age:number;
    hobbies:string[];

    constructor(cName,cAge,cHobbies){
        this.name = cName;
        this.age = cAge;
        this.hobbies = cHobbies;
    }

    // Methods
    introduce():string {
        return `Hello, I m ${this.name} and I'm ${this.age} years old. I love ${this.hobbies.join("'")}`;
    }
}

//  Inherit Person Class
class Student extends Person{
    grade:number;
    constructor(name,age,hobbies,cGrade){
        super(name,age,hobbies) // at first line of construcctor
        this.grade = cGrade;
    }

    // Methods
    introduce():string {
        return `${super.introduce} I'm in grade ${this.grade}.`;
    }
}

class Teachers{

}

const person1 = new Person("Isra",18,["Coding"]);
const student1 = new Student("Wania",18,["Watching K-Drama", "Cooking",""],10);

console.log(person1.introduce())
console.log(student1.introduce())