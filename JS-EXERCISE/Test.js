//1)Test 1: userRole = ['user']
// sysRole = ['admin', 'manager']
// return False
//Condition 2: userRole = ['user', 'Receptionist']
// sysRole = ['admin', 'Receptionist']
// return True
const checkRole = (userRole, sysRole) => {
    return userRole.some((item) => sysRole.includes(item));
};

console.log(checkRole(['user'], ['admin', 'manager'])); // Output: false
console.log(checkRole(['user', 'Receptionist'], ['admin', 'Receptionist'])); // Output: true

//Q2) Real World Pagination
// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const page = 2;
// const limit = 2;
// result = [3,4];
const pageChecker = (array, page, limit) => {
    const startIndex = (page-1) * limit; //Logic = page => 2 then start = (2-1) * 2 => 2
    const endIndex = startIndex + limit; //2+2 = 4
    return array.slice(startIndex, endIndex);
}
console.log(pageChecker([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2, 2));

//Q3) Search and return
// const array = [{ name: "raktim" }, { name: "ram" }, { name: "rita" }];
// if my keyword => "ra" the function must return [{name: "raktim"}, {name: "ram"}]
const search = (array, keyword) => {
    return array.filter((item) => item.name.includes(keyword));
}
console.log(search([{ name: "raktim" }, { name: "ram" }, { name: "rita" }], "ra"));

//Date Object In Js:
//Create
const d = new Date();
console.log(d);
const dt = new Date("2024-04-20");
console.log({dt});
//Update
dt.setMonth(2); //Index Based: Jan = 0, Feb = 1, Mar = 2
console.log(dt);
//Read
console.log(dt.getFullYear());
//MongoDb Format
console.log(dt.toISOString());
//Convert The MongoDb Format To JS
console.log(new Date().toLocaleString()); //Format Received Date Into MongoDb Format