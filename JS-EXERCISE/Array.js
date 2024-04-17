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
//1) function logic
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
let compare = ""; //Output
for(let i = 0; i < food2.length; i++){
    if(food.includes(food2[i])){
        compare += food2[i] + " "; //Concat String 
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

//4) Write a program to reverse an array of integer values.
const revArray = (array) => {
    return array.reverse();
}
console.log(revArray(array));

//5) Write a program to find the second largest array element.
//a) Logic 1 : sort((a,b) => a - b)
const secondLargest = (array) => {
    const sortedArray = array.sort((a,b) => a - b); //Bubble Sort In Ascending
    let secondL = sortedArray[sortedArray.length - 2];
    return secondL;
}
const newArray = [50, 10, 20, 30, 60, 40];
console.log(secondLargest(newArray));
//b) Logic 2 : Bubble Sorting For Ascending Order:
const bubbleSort = (array) => {
    let swap;
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] > array[j]){
                swap = array[i];
                array[i] = array[j];
                array[j] = swap;
            }
        }
    }
    return array[array.length - 2];
}
console.log(bubbleSort(newArray));

//6) Write a JS program to find the sum of the two elements of a given array equal to a given integer. Eg: Sample array: [1,2,4,5,6] Target value: 6.
const checkSum = (array, num) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (num === array[i] + array[j]) {
                return true;
            }
        }
    }
    return false;
}

const checkArray = [1, 2, 4, 5, 6];
console.log(checkSum(checkArray, 6));

// 7) Square and sum the array elements using the arrow function and then find the average of the array.
const sumSquareArray = (array) => {
    let sum = 0;
    for(let i = 0; i < array.length; i++){
        sum += array[i] * array[i]; //Can Use Math.pow function also!
    }
    return sum;
}
console.log(sumSquareArray(checkArray));

// 8) Create a new array whose elements is in uppercase of words present in the original array.
const upperArray = (array) => {
    const newArr = [];
    for(let i = 0; i < array.length; i++){
        newArr.push(array[i].toUpperCase());
    }
    return newArr;
}
const strArr = ["a", "e", "i", "o", "u"];
console.log(upperArray(strArr)); // Output: ["A", "E", "I", "O", "U"]

//9) Write a function Myfunc that takes in an array of numbers and multiply each of the elements by 2.
const Myfunc = (array) => {
    for (let i in array) {
        array[i] = array[i] * 2;
    }
    return array;
}

const numb = [4, 6, 8, 10];
console.log(Myfunc(numb)); // Output: [8, 12, 16, 20]



