// Home Work Union:
//?  We want to create a function that formats the value passed to it in a specific way based on its type:
//? If the input is a number, it should add a dollar sign and format it with two decimal  places
//? If the input is a boolean, it should return "Yes" for true and "No" for false.
//? If the input is a string , it should capitalize the first letter.
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
var formatVal = function (val) {
    if (typeof val === "string") {
        return val[0].toUpperCase() + val.slice(1);
    }
    else if (typeof val === "boolean") {
        if (val === true) {
            return "Yes";
        }
        else {
            return "No";
        }
    }
    else if (typeof val === "number") {
        return "$".concat(val.toFixed(2));
    }
    else {
        return "Invalid Input";
    }
};
var AccType;
(function (AccType) {
    AccType["current"] = "current";
    AccType["saving"] = "saving";
    AccType["insurance"] = "insurance";
})(AccType || (AccType = {}));
var user1 = {
    user_id: 1234,
    name: 'Isra Ilyas',
    email: 'example@gmail.com'
};
var user1Acc = {
    acc_id: 987,
    acc_type: AccType.current,
    balance: 1200,
};
var combineUserAndAccount = function (user, account) {
    // const {user_id,name,email} = user;
    // const {acc_id,acc_type,balance} = account;
    return __assign(__assign({}, user), account);
};
console.log(combineUserAndAccount(user1, user1Acc));
