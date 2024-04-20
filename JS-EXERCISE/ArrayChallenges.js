//Array Value For Questions
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//Write a program to sum values of an array.
const sumArray = (array) => {
    return array.reduce((sum, item) => {
        return sum + item;
    }, 0);
}
console.log(sumArray(numbers));
//Write a program to remove a specific element from an array.
const removeValues = (array, index) => {
    const newArray = array.map((item) => item);
    newArray.splice(index, 1);
    return newArray;
}
console.log(removeValues(numbers, 4));
//Write a program to find the maximum and minimum value of an array
const maxMin = (array) => {
    return {
        max: Math.max(...array),
        min: Math.min(...array)
    };
};
console.log(maxMin(numbers));
//Write a program to reverse an array of integer values.
const reverse = (array) => {
    return array.reverse();
};
console.log(reverse(numbers));
//Write a program to find the second largest element in an array.
const secondLargest = (array) => {
    array.sort((a,b) => a-b); //Ascending Sort
    return array[array.length -2]; //Second largest
    //Length = 10 Index = Starts From 0-9 
}
console.log(secondLargest(numbers));
//Write a Java program to find the sum of the two elements of a given array equal to a given integer. Eg: Sample array: [1,2,4,5,6] Target value: 6.
const checkSumInteger = (array, number) => {
    let flag = false;
    for(let i = 0; i < array.length; i++){
        for(let j = i+1; j < array.length; j++){
            if(array[i] + array[j] === number){
                flag = true;
            }
        }
    }
    return flag;
}
console.log(checkSumInteger(numbers, 40));
// Write a function that converts an array of values from miles to kilometres using the map method. In the end, add the kilometres up in a new variable called "totalDistanceInKilometers" and return this variable.
const mtokm = 1.60934;
const milesToKtm = (array) => {
    array = array.map((item) => item*mtokm);
    return array.reduce((sum, item) => {return sum + item}, 0);
}
console.log(milesToKtm(numbers));
// Square and sum the array elements using the arrow function and then find the average of the array.
const squareAndSum = (array) => {
    const sum = array.reduce((sum, item) => sum + item, 0);
    const squareAndSum = array.reduce((sum, item) => sum + item * item, 0);
    const average = sum / array.length;
    return {
        squareAndSum: squareAndSum,
        average: average
    };
};
console.log(squareAndSum(numbers));
// Create a new array whose elements is in uppercase of words present in the original array.
const firstUpper = (array) => {
    return array.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
}
console.log(firstUpper(["shubham", "saral", "raktim"]));
// Write a function Myfunc that takes in an array of numbers and multiply each of the elements by 2.
const multiplyBy2 = (array) => {
    return array.map((item) => item *2);
}
console.log(multiplyBy2(numbers));
// let food = ['Noodle', 'Pasta', 'Ice-cream'];
// let food = ['Fries', 'Ice-cream', 'Pizza'];
// Compare the 2 arrays and find common food if any.
const commonElement = (array1, array2) => {
    const value = array2.filter((item) => array1.includes(item));
    return value; 
}
console.log(commonElement(['Noodle', 'Pasta', 'Ice-cream'], ['Fries', 'Ice-cream', 'Pizza']));
