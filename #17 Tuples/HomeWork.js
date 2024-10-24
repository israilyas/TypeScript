// #1.  You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:
// Product name :string
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.
var product1 = ["Product1", 25999, 40];
var product2 = ["Product2", 55999, 90];
var showProductInfo = function (product) {
    var pName = product[0], price = product[1], noInStock = product[2];
    return "Product = ".concat(pName, ", Price = ").concat(price, ", Total Items In Stock = ").concat(noInStock);
};
var grades = [
    ['Math', 85],
    ['English', 78],
    ['Science', 92]
];
var total = 0;
var calAvgGrade = function (grades) {
    // const [subName,grade] = grades;
    for (var i = 0; i < grades.length; i++) {
        total += grades[i][1];
    }
    return "Average Grade is ".concat(total / grades.length);
};
var cities = [
    ['Karachi', 27, 'Hot'],
    ['Islamabad', 15, 'cold'],
    ['Lahore', 17, 'cold'],
];
var displayWeather = function (cities) {
    for (var i = 0; i < cities.length; i++) {
        console.log("City = ".concat(cities[i][0], ", Temperature = ").concat(cities[i][1], ", Weather Condition = ").concat(cities[i][2], "}"));
    }
};
console.log(displayWeather(cities));
