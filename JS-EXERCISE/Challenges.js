//Write a JavaScript program that prints 'Hello World'.
console.log('Hello World!');
// Write a JavaScript program to set the value of PI.
const pi = 3.14;
const area = (radius) => {
    return pi * radius * radius;
}
console.log(area(2.75));
// Write a JavaScript program to compute the sum of the two given integers. If the two values are the same, then return triple their sum.
let a = prompt('Enter First Number To Find Sum');
let b = prompt('Enter Second Number To Find Sum');
let sum = (a, b) => {
    a = parseInt(a);
    b = parseInt(b);
    return a === b ? 3*(a +b) : a+b;
};
console.log(sum(a,b));
//Write a JavaScript program to check whether a given positive number is a multiple of 3 or 7.
a = prompt('Enter The Number To Check Multiple Of 3 || 7');
let checkMultiple = (num) => {
    num = parseInt(num);
    return num%7 === 0 || num%3 === 0 ? true : false};
console.log(checkMultiple(a));
//Write a JavaScript program to get the current date.
let dt = new Date();
console.log({dt});
//Write a JavaScript program to calculate multiplication and division of two numbers.(use same function to achieve this)
a = prompt('Enter First Number For Mul And Div');
b = prompt('Enter Second Number For Mul And Div');
const mulDiv = (a = 1, b = 1) => {
    a = parseInt(a);
    b = parseInt(b);
    const mul = a * b;
    const div = a / b;
    return {mul, div};
}
console.log(mulDiv(a, b));
/* Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ] */
a = prompt('Enter The Temperature');
b = prompt('Enter Unit c: celsius, f: fahrenheit');
const celFar = (a, unit) => {
    a = parseFloat(a);
    switch (unit){
        case 'c':
            return ((a-32) / 9) * 5;
        case 'f':
            return ((a/5) * 9) + 32;
        default:
            alert('Enter Proper Unit!');
            break;
    }
}
console.log(celFar(a, b));

//Write a JavaScript program to count the number of vowels in a given string.
a = prompt('Enter The Word To Count Vowels');
const vowelCounter = (a) => {
    const vowels = ['a','e','i','o','u'];
    a = a.toLowerCase().split("");
    return a.reduce((count, item) => {
        if(vowels.includes(item)){
            count++;
        }
        return count;
    }, 0);
}
console.log(vowelCounter(a));