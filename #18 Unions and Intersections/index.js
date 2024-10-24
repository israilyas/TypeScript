var userInput = function (value) {
    if (typeof (value) === "string") {
        return value.toUpperCase();
    }
    else if (typeof (value) === "number") {
        return value * 2;
    }
    else {
        throw new Error('Invalid Input');
    }
};
console.log(userInput(10));
console.log(userInput("isra ilyas"));
console.log(userInput(true));
