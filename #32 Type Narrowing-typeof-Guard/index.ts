// let myName:string = "ISRA";
// myName = 10;

const favHobbies = (hobby: string | string[]) => {
    if (typeof hobby === "object" && Array.isArray(hobby)) {
        return hobby.map((crr) => { 
            console.log(crr)
        })
    }
    else {
        console.log(hobby)
    }
}

favHobbies("Coding")
favHobbies(["Coding","Writing"])
