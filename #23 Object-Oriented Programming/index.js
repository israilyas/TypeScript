var Person = /** @class */ (function () {
    function Person(name, age, hobbies) {
        this.name = name;
        this.age = age;
        this.hobbies = hobbies;
    }
    return Person;
}());
var person1 = new Person("Isra", 18, ["Writing", "Freelancing", "Coding"]);
var person2 = new Person("Asra", 18, ["Writing", "Freelancing", "Coding"]);
console.log(person1);
console.log(person2);
