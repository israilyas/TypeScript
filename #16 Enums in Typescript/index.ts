// Enum

enum Roles {
    user = "user",
    admin = "admin"
}

type LoginDetails = {
    name?:string;
    email:string;
    password:string;
    role:Roles
}

const user1:LoginDetails = {
    name:"isra",
    email: "isra@gmail.com",
    password: "123qwe",
    role:Roles.admin
}

const user2:LoginDetails = {
    name:"sawera",
    email: "qureshi@gmail.com",
    password: "123qureshi",
    role:Roles.user
}

const isAdmin = (user:LoginDetails) => {
    const {name,email, role} = user;
    return role === "admin"? `${name} is allow to edit the website.`:`${name} is not allow to edit the website.`
}

console.log(isAdmin(user1))
console.log(isAdmin(user2))