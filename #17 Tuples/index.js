// Real life example of using tuples in TypeScript
// Example Usage
var person1 = ["Isra", 18, true];
var person2 = ["Hania", 19, false];
// FUnction to display persons information.
var displaypersonInfo = function (person) {
    var name = person[0], age = person[1], license = person[2];
    return license === true ? "name = ".concat(name, ", age = ").concat(age, ", Drivind License = \"yes") : "name = ".concat(name, ", age = ").concat(age, ", Drivind License = \"NO\"");
};
// To prevent tuple or array from changing you can make them readonly so no one can change them
// person1.push("Hello Coding guys")
console.log(displaypersonInfo(person1));
console.log(displaypersonInfo(person2));
console.log(person1);
