//  
function greet(name, id) {
    return "Welcome ".concat(name, ", and your id is ").concat(id, "!");
}
console.log(greet("ISRA", 2));
// Default Parameter
function greet1(name, id) {
    if (id === void 0) { id = 5; }
    return "Welcome ".concat(name, ", and your id is ").concat(id, "!");
}
console.log(greet1("ISRA in Greet1"));
// Optional Parameter
function greet2(name, id) {
    if (id) {
        return "Welcome ".concat(name, ", and your id is ").concat(id, "!");
    }
    else {
        return "Welcome ".concat(name, "!");
    }
}
console.log(greet2("ISRA in Greet2 without ID"));
console.log(greet2("ISRA in Greet2 with ID"), 245);
