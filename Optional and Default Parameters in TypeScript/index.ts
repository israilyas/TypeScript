//  

function greet(name:string,id:number){
    return `Welcome ${name}, and your id is ${id}!`
}

console.log(greet("ISRA",2))

// Default Parameter
function greet1(name:string,id:number = 5){
    return `Welcome ${name}, and your id is ${id}!`
}

console.log(greet1("ISRA in Greet1"))

// Optional Parameter
function greet2(name:string,id?:number){
    if(id){
    return `Welcome ${name}, and your id is ${id}!`;
    }
    else{
    return `Welcome ${name}!`
    }
}

console.log(greet2("ISRA in Greet2 without ID"))
console.log(greet2("ISRA in Greet2 with ID"),245)