// const greets:{
//     name:string;
//     age:number;
// } = {
//     name:"ISRA",
//     age:18,
// }
var greets = {
    name: "ISRA",
    age: 18,
    // favMovie:"Anime" // Error
};
var product = {
    Name: "Laptop",
    Price: 1000,
    Quantity: 5
};
var product2 = {
    Name: "PC",
    Price: 500,
    Quantity: 12
};
// Calculate Total prices
function calculateTotalPrice(product) {
    var Price = product.Price, Quantity = product.Quantity;
    return Price * Quantity;
}
console.log(calculateTotalPrice(product));
console.log(calculateTotalPrice(product2));
