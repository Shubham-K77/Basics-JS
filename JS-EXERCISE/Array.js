//CRUD IN ARRAY

// a) Create An Array In Js
const firstArr = [];
const secondArr = new Array();
const thirdArr = ["Raktim", {college: "Saint Xaviers", class: "PHD"}, "Shubham", [1, 2], function(){
    return "New Student"
}, true];
console.log(firstArr);
console.log(secondArr);
console.log(thirdArr);
// b) Read The Data Of The Array
console.log(thirdArr[1].college);
console.log(thirdArr[4]());
// c) Update The Data
thirdArr[0] = "Shubham.K";
console.log(thirdArr);
// d) Delete The Data
const [c, d, ...test] = thirdArr;
console.log(test);

//Object
const obj = {a: "Raktim", b: "Ram", c: "Shyam"};
const {a,b, ...rest} = obj;
console.log(rest);

const first = [1, 2, 3];
const second = [4, 5, 6];
//result [1,2,3,4,5,6] using spread operator
const result = [...first, ...second];
console.log(result); // [1, 2, 3, 4, 5, 6]

//using for loop
const res = [];
for (let i = 0; i < first.length; i++) {
    res.push(first[i]);
}
for (let i = 0; i < second.length; i++) {
    res.push(second[i]);
}
console.log(res); // [1, 2, 3, 4, 5, 6]

// 1) JS SOLN TO ADD NEW ELEMENT IN THE ARRAY
const num = [1,2];
num.splice(0, 0, 0); // Insert 0 at index 0 First Arg : Delete Count, Second Arg: Delete Data, Third Arg: New Data
console.log(num); //0, 1, 2 Expected Output

//Convert Array To String
const out = num.toString();
console.log(out);

//Convert String To Array
const testString = "1,2";
const arr = testString.split(',');
console.log(arr); // Output: ["1", "2"]

//Q) Sort In Ascending order according to age
const people = [
    {name: "raktim", age: 10}, 
    {name: "sita", age: 20},
    {name: "ram", age: 15}];
people.sort((a,b) => a.age - b.age); //For Ascending a - b because for -ve the value a will be sorted before b, +ve then b is sorted before a and in this case: a => 10 and b => 20 a-b => -ve a is before so ascending if b-a => 10 which will make b before a i.e. descending order.
console.log(people);

//Q) 11 Compare the 2 arrays and find common food if any
let food = ['Noodle', 'Pasta', 'Ice-Cream'];
let food2 = ['Fries', 'Ice-Cream', 'Pizza'];
let common = [];
for(let i = 0; i < food.length; i++){
    for(let j = 0; j < food2.length; j++){
        if(food[i] === food2[j]){
            common.push(food[i]);
        }
    }
}

const output = common.toString();
console.log(output);

//11) Using Includes Method
let compare; //Output
for(let i = 0; i < food2.length; i++){
    if(food.includes(food2[i])){
        compare = food2[i];
    }
}
console.log(compare);


//Arrays Questions In JS

// 1) Write a program to sum values of an array.
const sumNum = () => {
    let sum = 0;
    const numArray = [2, 3, 4, 5, 6];
    for(let i = 0; i < numArray.length; i++){
        sum += numArray[i];
    }
    return sum;
}
console.log(sumNum());

//2) Write a program to remove a specific element from an array.
const removeValue = (array, index) => {
    array.splice(index, 1); //First Argument: index, Second Argument : delete count, Third Argument: Replace Value, Fourth Argument: Replace Value If Delete Count Is More Than 1
    return array;
}
const array = [10, 20, 30 ,40];
console.log(removeValue(array, 2)); //remove the element 30

//3) Write a program to find the maximum and minimum value of an array
const minMax = (array) => {
    let min = Math.min(...array);
    let max = Math.max(...array);
    return {min, max};
}
console.log(minMax(array));

//4) 




