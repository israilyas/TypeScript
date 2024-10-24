// Home Work Union:
//?  We want to create a function that formats the value passed to it in a specific way based on its type:
//? If the input is a number, it should add a dollar sign and format it with two decimal  places
//? If the input is a boolean, it should return "Yes" for true and "No" for false.
//? If the input is a string , it should capitalize the first letter.

let formatVal = (val:string|boolean|number):string|boolean|number =>  {
    if(typeof val === "string"){    
        return val[0].toUpperCase() + val.slice(1);
    }
    else if(typeof val === "boolean"){
        if(val === true){
            return "Yes";
        }
        else{
            return "No";
        }
    }
    else if(typeof val === "number"){
        return `$${val.toFixed(2)}`
    }
    else {
        return "Invalid Input";
    }
}

console.log(formatVal(178))
console.log(formatVal("my name is isra"))
console.log(formatVal(true))
console.log(formatVal(false))

// Question#02

// Combine User and Account Data
// TODO: You are building a user management system, and you have two TypeScript types:

//? User: Represent Basic user information, with the following properties:
// id(number),name(string),email(string)

//? Account:Contains details about the user's account, with  the following properties:
// Acount id (number),account type (string => savings,current,insurance),  balance(number)

//* Your task is to create a function called combineUserAndAccount that takes a User object and an Account object as arguments and returns a new object representing the combined information of theuser and their account.

type User = {
    user_id:number;
    name:string;
    email:string;
}

enum AccType {
    current = "current",
    saving = "saving",
    insurance = "insurance",
}

type Account = {
    acc_id:number;
    acc_type:AccType;
    balance:number;
}

const user1:User = {
    user_id:1234,
    name:'Isra Ilyas',
    email:'example@gmail.com'
}

const user1Acc:Account = {
    acc_id:987,
    acc_type:AccType.current,
    balance:1200,
}

let combineUserAndAccount = (user:User,account:Account) => {
    // const {user_id,name,email} = user;
    // const {acc_id,acc_type,balance} = account;

    return {...user,...account}
}

console.log(combineUserAndAccount(user1,user1Acc));