const fruits:string[] = ["apple", "bnana", "orange","mango"]


// a. Adding elements to an array using push
// const updatedFruits = fruits.push("kiwi");
// console.log(updatedFruits) // Return length of updated array
// console.log(fruits)

// b. Removing last elements from an array using pop

// const updatedFruits1 = fruits.pop();
// console.log(updatedFruits1) // Return removed element of an array
// console.log(fruits)
// fruits.pop();
// console.log(fruits)

// a. Removing first elements of an array using shift
// console.log(fruits.shift())
// console.log(fruits)

// Adding first elements to an array using unshift
// console.log(fruits.unshift("PineApple"))
// console.log(fruits)


// ======= Iteration In Array  ========

const myFavHeros = ["superman","spiderMan","batMan","Witcher","EL","Doctor Strange", "Iron Man"]

// For LOOP
for(let i = 0; i < myFavHeros.length; i++){
    // console.log(i)
    // console.log(myFavHeros[i])
}

// For..Of LOOP  ===>  value ===> iterate over values
for(const hero of myFavHeros){
    // console.log(hero)
}

//  For..in ===> index ==> iterate over indices

for(const index in myFavHeros){
    // console.log(index)
}

// ForEach
// myFavHeros.forEach((currentVal)=>{
//     console.log(currentVal)
// })

myFavHeros.forEach((currentVal) => console.log(currentVal))