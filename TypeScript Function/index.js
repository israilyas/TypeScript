const marvel_heros = ["Thor", "Iron man", "Spider man",["El","Demogorgan",["Mr X"]]]
const dc_heros = ["Superman","Flash","Batman"]

marvel_heros.push(dc_heros);

// console.log(marvel_heros)
// console.log(marvel_heros.flat(2))

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros.push("Witcher"));
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);
// console.log(marvel_heros[3][0]);
// console.log(marvel_heros[3][2]);
// console.log(marvel_heros)

// CONCAT returns new array
const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

const myHero = ["WItcher","Will","El"]

// SPREAD 
const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros);

// Flat()
// flat() is a method that flattens nested arrays, meaning it converts a multi-dimensional array into a single-dimensional array.
// const  another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);

// console.log(Array.isArray(another_array));

// ====Array.From ====
//Purpose: Converts an iterable or array-like object into an array.
// console.log(Array.from([1,2,3,4,5,6]));
// console.log(Array.from({
//     name:"isra",
//     department:"BSCS",
//     sec:"A"
// })); // INTERESTING

console.log(Array.from("ISRA ILYAS"));

let score1 = 100
let score2 = 200
let score3 = 300

// Array.of -> returns a new array from set of element
console.log(Array.of(score1,score2,score3));

