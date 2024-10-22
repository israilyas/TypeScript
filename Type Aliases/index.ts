type Person = {
    name:string; //  use semicolon while defining type
    age:number;
    isStudent:boolean;
    class?:string; // optional property
    address:{
        city:string;
        country:string;
    }
}

let person:Person = {
    name:'usra', // always use comma  at defing values
    age:20,
    isStudent:true,
    address:{
        city:'karachi',
        country:'pakistan'
    }
}

let person1:Person = {
    name:'Humza', // always use comma  at defing values
    age:20,
    isStudent:false,
    address:{
        city:'Lahore',
        country:'Pakistan'
    }
}
let person2:Person = {
    name:'Ayesha', // always use comma  at defing values
    age:23,
    isStudent:false,
    address:{
        city:'Faisalabad',
        country:'Pakistan'
    }
}



// TODO create a product object:
//  Create a product or type representing a product with properties for name, price, and  quantity. Create a product object with following data:
// Name: "Laptop",
//  Price: 1000,
//  Quantity: 5

type Product = {
    name:string;
    price:number;
    quantity:number;
}

let product1:Product = {
    name: "Laptop",
    price: 1000,
    quantity: 5
}

// Calculate Total Price:
//? Given the product from the previous question, write a funnction called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product.

const calculateTotalPrice = (p:Product)=>{
    return  `${p.name} costs ${p.price * p.quantity}`;
}

console.log(calculateTotalPrice(product1));
