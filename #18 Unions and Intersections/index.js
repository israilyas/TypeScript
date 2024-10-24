var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
var personDetails = {
    emp_id: 123,
    department: 'IT',
    name: 'Vinode'
};
var employee = {
    emp_id: 123,
    department: 'IT',
    name: 'Vinode',
    age: 20,
};
var user = {
    name: "vinode",
    age: 29,
};
var locat = {
    city: "NewYork",
    country: "UK",
};
var createUserProfile = function (user, loc) {
    var name = user.name, age = user.age;
    var city = loc.city, country = loc.country;
    // return `My name is ${name} and I am living in ${city}, ${country}`;
    return __assign(__assign({}, user), loc);
};
console.log(createUserProfile(user, locat));
var completeData = createUserProfile(user, locat);
console.log(completeData);
