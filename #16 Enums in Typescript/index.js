// Enum
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var user1 = {
    name: "isra",
    email: "isra@gmail.com",
    password: "123qwe",
    role: Roles.admin
};
var user2 = {
    name: "sawera",
    email: "qureshi@gmail.com",
    password: "123qureshi",
    role: Roles.user
};
var isAdmin = function (user) {
    var name = user.name, email = user.email, role = user.role;
    return role === "admin" ? "".concat(name, " is allow to edit the website.") : "".concat(name, " is not allow to edit the website.");
};
console.log(isAdmin(user1));
console.log(isAdmin(user2));
