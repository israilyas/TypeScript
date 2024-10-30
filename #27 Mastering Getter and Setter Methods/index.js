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
    // If We Use the Access modifiers with properties as argument to constructor then no need to write properties outside of the constructor in the class
    function Person(name, hobbies) {
        // No need to write this.property = property
        this.name = name;
        this.hobbies = hobbies;
    }
    Object.defineProperty(Person.prototype, "age", {
        // Get Method
        get: function () {
            if (this._age === undefined) {
                throw new Error("Age is not defined");
            }
            return this._age;
        },
        // Set Method
        set: function (age) {
            if (age > 150 || age < 0) {
                throw new Error("Age is not valid");
            }
            else {
                this._age = age;
            }
        },
        enumerable: false,
        configurable: true
    });
    Person.prototype.introduce = function () {
        return "Hello, I'm ".concat(this.name, " and I'm ").concat(this._age, " years old. I like ").concat(this.hobbies.join(","));
    };
    return Person;
}());
var Students = /** @class */ (function (_super) {
    __extends(Students, _super);
    function Students(name, hobbies, grade) {
        var _this = _super.call(this, name, hobbies) || this;
        _this.name = name;
        _this.hobbies = hobbies;
        _this.grade = grade;
        return _this;
    }
    Students.prototype.introduceS = function () {
        return "".concat(_super.prototype.introduce.call(this), ", I study in ").concat(this.grade, " grade.");
    };
    return Students;
}(Person));
var person = new Person("ISRA", ["Coding", "Writing"]);
// person.age (520); // Wrong
person.age = 20;
console.log(person.introduce());
console.log(person.age);
