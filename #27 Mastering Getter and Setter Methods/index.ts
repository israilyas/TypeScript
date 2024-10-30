
class Person {

    // No need to write properties here this

    private _age: number;

    // If We Use the Access modifiers with properties as argument to constructor then no need to write properties outside of the constructor in the class
    constructor(
        public name: string,
        protected hobbies: string[]
    ) {
        // No need to write this.property = property

    }


    // Set Method
    public set age(age: number) {
        if (age > 150 || age < 0) {
            throw new Error("Age is not valid")
        }
        else {
            this._age = age;
        }
    }

    // Get Method
    public get age():number {
        if (this._age === undefined) {
            throw new Error("Age is not defined")
        }
       return this._age;
    }



    introduce() {
        return `Hello, I'm ${this.name} and I'm ${this._age} years old. I like ${this.hobbies.join(",")}`
    }
}

class Students extends Person {
    constructor(
        public name: string,
        protected hobbies: string[], public grade: number
    ) {
        super(name,
            hobbies);
    }

    introduceS() {
        return `${super.introduce()}, I study in ${this.grade} grade.`
    }
}

const person = new Person("ISRA", ["Coding", "Writing"])
// person.age (520); // Wrong
person.age = 20;
console.log(person.introduce())
console.log(person.age)
