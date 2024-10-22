var person = {
    name: 'usra', // always use comma  at defing values
    age: 20,
    isStudent: true,
    address: {
        city: 'karachi',
        country: 'pakistan'
    }
};
var person1 = {
    name: 'Humza', // always use comma  at defing values
    age: 20,
    isStudent: false,
    address: {
        city: 'Lahore',
        country: 'Pakistan'
    }
};
var person2 = {
    name: 'Ayesha', // always use comma  at defing values
    age: 23,
    isStudent: false,
    address: {
        city: 'Faisalabad',
        country: 'Pakistan'
    }
};
var product1 = {
    name: "Laptop",
    price: 1000,
    quantity: 5
};
// Calculate Total Price:
//? Given the product from the previous question, write a funnction called calculateTotalPrice that calculates and returns the total price (price * quantity) of the product.
var calculateTotalPrice = function (p) {
    return "".concat(p.name, " costs ").concat(p.price * p.quantity);
};
console.log(calculateTotalPrice(product1));
