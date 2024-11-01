// type Stud = {
//     name:string;
//     age:number;
// };
;
var Biodata = /** @class */ (function () {
    function Biodata(name, age, city, state) {
        this.name = name;
        this.age = age;
        this.city = city;
        this.state = state;
    }
    return Biodata;
}());
var std1 = new Biodata("Isra", 18, "Karachi", "East Karachi");
console.log(std1);
