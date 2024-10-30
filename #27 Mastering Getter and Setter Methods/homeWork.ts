// Question #01 : Bank Account Balance
// Create a TypeScriptCLass BankAccount with a private property_balance initialized to 0.
//implement a getter method balance that returns the current balance.

class BankAccount{
    private property_balance:number = 0;

    public set balance(newBalance:number){
        if(newBalance <= 0){
            throw new Error("Account is empty.")
        }
        else{
            this.property_balance = newBalance;
        }
    }

    public get balance():number{
        if(this.property_balance === 0){
            throw new Error("Account is empty.");
        }
        return this.property_balance;
    }
}

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


class Temperature{
    private _celsius = 0;
    
    public get celsius():string{
        return `${this._celsius} C`;
    }

    public set celsius(temp:number){
        this._celsius = temp;
    }
    // In Fahrenheit

    public get fahrenheit():string{
        return `${this._celsius = (this._celsius * (9/5)) +32} F`;
    }

    public set fahrenheit(temp:number){
        this._celsius = (temp - 32 ) + 9/5;
    }
}

const temp1 = new Temperature();
// temp1.celsius = 25;
temp1.fahrenheit = 98.6;
console.log(temp1)
console.log(temp1.celsius)
console.log(temp1.fahrenheit)
// console.log(temp1.fahrenheit)