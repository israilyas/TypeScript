class Person {
    public name: string;           // Public property, accessible anywhere
    private age: number;           // Private property, accessible only within this class
    protected address: string;     // Protected property, accessible within this class and subclasses

    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    introduce():string {
        
        return `Hello, I'm ${this.name} and I'm ${this.age} years old. I live in ${this.address}`;
    }
}

class Student extends Person{
    grade:number;
    constructor(name: string, age: number, address: string,grade:number){
        super(name, age, address);
        this.grade = grade
    }

    introduce():string {
        
        return `${super.introduce()},I'm in ${this.grade} grade`;
    }
}