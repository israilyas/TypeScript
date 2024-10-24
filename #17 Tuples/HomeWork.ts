// #1.  You are building a simple e-commerce application and need to store product information. Define a tuple type called ProductInfo to represent each product, containing the following elements:
// Product name :string
// Price (number)
// Quantity in stock (number)
// Create two product instances using this tuple type and display their information.


type ProductInfo = readonly [string,number,number]

let product1:ProductInfo = ["Product1",25999,40]
let product2:ProductInfo = ["Product2",55999,90]

let showProductInfo = (product:ProductInfo) =>{
    const [pName,price,noInStock] = product;
    
    return `Product = ${pName}, Price = ${price}, Total Items In Stock = ${noInStock}`;
}

console.log(showProductInfo(product1))
console.log(showProductInfo(product2))

//! Question 2:
// You are creating a student management system and want to keep track of student grades for different subjects. Define a tuple type called SubjectGrade to represent a subject and its corresponding grade, containing the following elements:

// Subject name (string)
// Grade (number)
// Create an array of SubjectGrade tuples to store the grades for a student in three different subjects: Math, English, and Science. Calculate and display the average grade for the student.

type SubjectGrade = [string,number]

let grades:SubjectGrade[] = [
    ['Math',85],
    ['English',78],
    ['Science',92]
]

let total = 0;

let calAvgGrade = (grades) => {
    // const [subName,grade] = grades;
    
    for (let i = 0; i < grades.length ;i++){
        total += grades[i][1];
    }

    return `Average Grade is ${total/grades.length}`
}

console.log(calAvgGrade(grades))

//! Question 3:
// You are working on a weather application, and you need to store weather data for different cities. Define a tuple type called WeatherData to represent the weather information, containing the following elements:

// City name (string)
// Temperature in Celsius (number)
// Weather condition (string)
// Create a function called displayWeather that takes an array of WeatherData tuples as input and displays the weather information for each city in a user-friendly format.

type WeatherData = [string,number,string]

let cities:WeatherData[] = [
    ['Karachi',27,'Hot'],
    ['Islamabad',15,'cold'],
    ['Lahore',17,'cold'],
]

let displayWeather = (cities) => {
    for(let i = 0; i < cities.length;i++){
        console.log(`City = ${cities[i][0]}, Temperature = ${cities[i][1]}, Weather Condition = ${cities[i][2]}}`)
    }

}

console.log(displayWeather(cities))