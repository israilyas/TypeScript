// Common Properties In Parent Class
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(cName, cAge, cHobbies) {
        this.name = cName;
        this.age = cAge;
        this.hobbies = cHobbies;
    }
    // Methods
    Person.prototype.introduce = function () {
        return "Hello, I m ".concat(this.name, " and I'm ").concat(this.age, " years old. I love ").concat(this.hobbies.join("'"));
    };
    return Person;
}());
//  Inherit Person Class
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, hobbies, cGrade) {
        var _this = _super.call(this, name, age, hobbies) || this; // at first line of construcctor
        _this.grade = cGrade;
        return _this;
    }
    // Methods
    Student.prototype.introduce = function () {
        return "Hello, I m ".concat(this.name, " and I'm ").concat(this.age, " years old. I'm in grade ").concat(this.grade, ". I love ").concat(this.hobbies.join("'"));
    };
    return Student;
}(Person));
var Teachers = /** @class */ (function () {
    function Teachers() {
    }
    return Teachers;
}());
var person1 = new Person("Isra", 18, ["Coding"]);
var student1 = new Student("Wania", 18, ["Watching K-Drama"], 10);
console.log(person1.introduce());
console.log(student1.introduce());
