// Question #01 : Bank Account Balance
// Create a TypeScriptCLass BankAccount with a private property_balance initialized to 0.
//implement a getter method balance that returns the current balance.
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this._balance = 0;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (newBalance) {
            if (newBalance < 0) {
                throw new Error("Invalid Balance.");
            }
            else {
                this._balance = newBalance;
            }
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
// const  account1 = new BankAccount()
// account1.balance  = -10000;
// console.log(account1)
// console.log(account1.balance)
// Question #02 : Temperature Converter
// Define a TypeScript class Temperature with a private property _celsius set to zero.
// implement a getter method celsius that returns the temperature in celsius.
// implement a setter method celsius that set te temp. in celsius
// Implement a getter method fahrenheit that converts the Celsius to fahrenheit using the formula (c * 9/5) + 32
//  implement a setter method fahrenheit that converts Fahrenheit to Celsius using formula (F - 32) * 9/5 
var Temperature = /** @class */ (function () {
    function Temperature() {
        this._celsius = 0;
    }
    Object.defineProperty(Temperature.prototype, "celsius", {
        get: function () {
            return this._celsius;
        },
        set: function (newCelsius) {
            this._celsius = newCelsius;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Temperature.prototype, "fahrenheit", {
        // In Fahrenheit
        get: function () {
            return (this._celsius * 9) / 5 + 32;
        },
        set: function (newFah) {
            this._celsius = ((newFah - 32) * 5) / 9;
        },
        enumerable: false,
        configurable: true
    });
    return Temperature;
}());
var temp1 = new Temperature();
temp1.celsius = 25;
console.log("In Fahrenheit" + temp1.fahrenheit);
temp1.fahrenheit = 77;
console.log("In Celsius" + temp1.celsius);
// console.log(temp1.fahrenheit)
