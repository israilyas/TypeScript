class Person {

    // No need to write this
    // public name:string;
    // public age:number;
    // protected hobbies : string[];

    // If We Use the Access modifiers with properties as argument to constructor then no need to write properties outside of the constructor in the class
    constructor(
    public name:string,
    public age:number,
    protected hobbies : string[]
    ){
        // No need to write this.property = property

    }
    introduce(){
        return `Hello, I'm ${this.name} and I'm ${this.age} years old. I like ${this.hobbies.join("'")}`
    }
}

class Students extends Person {
    constructor(
        public name:string,
        public age:number,
        protected hobbies : string[],public grade:number
    ){
        super( name, age,
            hobbies);  
}
  
    introduceS(){
       return `${super.introduce()}, I study in ${this.grade} grade.`
    }
}

const student1 = new Students("ISRA",18,["Coding"],10)