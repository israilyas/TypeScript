// type Stud = {
//     name:string;
//     age:number;
// };

// type studAddr = {
//     city:string;
//     state:string;
// }

// type Data = Stud | studAddr;

// const Biodata:Data = {
//     name:"ISRA",
//     age:15,
//     city:"Karachi",
// }

// console.log(Biodata)

interface Stud  {
    name:string;
    age:number;
};

interface studAddr {
    city:string;
    state:string;
}

interface Data extends Stud , studAddr{}

class Biodata implements Data  {
    constructor(
        public name:string,
        public age:number,
        public city:string,
        public state:string
    ){}
}

const std1 = new Biodata("Isra",18,"Karachi","East Karachi")

console.log(std1)