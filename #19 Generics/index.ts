// Generics

function logAndReturn<T>(val:T):T{
    return val;
}

// Using the generic function with different types
const numberResult = logAndReturn<number>(42);
const stringResult = logAndReturn<string>('Hello, TypeScript.');
const boolResult = logAndReturn<boolean>(true);

// HomeWork 
function add<T>(val1:T,val2:T):T{
    // return val1 + val2;
}

let result1 = add<number>(24,8)
let result2 = add<string>('hello','World')

console.log(result1)
console.log(result2)