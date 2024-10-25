interface Greet {
    name:string;
    age:number;
}

// const greets:{
//     name:string;
//     age:number;
// } = {
//     name:"ISRA",
//     age:18,
// }

const greets:Greet = 
    {
        name:"ISRA",
        age:18,
        // favMovie:"Anime" // Error
    }

// Create A product Object  
// Define an interface or type representing a product with properties for name, price and quantity. Create product object with the following data:
// Name: "Laptop", 
// Price:1000,
// Quantity: 5

interface Product {
    Name:string;
    Price:number;
    Quantity: number;
}

const product:Product = {
    Name: "Laptop", 
    Price:1000,
    Quantity: 5
}
const product2:Product = {
    Name: "PC", 
    Price:500,
    Quantity: 12
}

// Calculate Total prices

function calculateTotalPrice(product:Product):number{
    const {Price,Quantity} = product;
    return Price*Quantity;
}

console.log(calculateTotalPrice(product))
console.log(calculateTotalPrice(product2))