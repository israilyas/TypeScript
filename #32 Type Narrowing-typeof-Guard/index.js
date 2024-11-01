// let myName:string = "ISRA";
// myName = 10;
var favHobbies = function (hobby) {
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map(function (crr) {
            console.log(crr);
        });
    }
    else {
        console.log(hobby);
    }
};
favHobbies("Coding");
favHobbies(["Coding", "Writing"]);
