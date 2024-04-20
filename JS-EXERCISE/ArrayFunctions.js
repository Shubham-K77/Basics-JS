//1) DATA SET FOR PRACTICE:
const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP*** Keyword: All
/*
The map() function in JavaScript is a method that operates on arrays and is used to transform each element of the array by applying a provided function to it. It creates a new array containing the results of calling the provided function on every element in the original array. 
*/
//1. Get array of all names
const allNames = (array) => {
    return array.map((item) => item.name);
}
console.log(allNames(characters));
//2. Get array of all heights
const allHeights = (array) => {
    return array.map((item) => item.height);
}
console.log(allHeights(characters));
//3. Get array of objects with just name and height properties
const nameAndHeight = (array) => {
    return array.map((item) => {
        return {
            name: item.name,
            height: item.height
        }
    });
}
console.log(nameAndHeight(characters));
//4. Get array of all first names
const firstNames = (array) => {
    return array.map((item) => item.name.split(" ")[0]);
}
console.log(firstNames(characters));

//***REDUCE*** Keyword: return Sum
/*
The reduce() method in JavaScript is used to reduce an array to a single value, based on the logic provided in a callback function. It iterates over each element of the array and applies the callback function to accumulate a result. The result could be of any type: a number, a string, an object, or even another array.
*/
//1. Get total mass of all characters
const totalMass = (array) => {
    return array.reduce((sum, item) => {return sum + item.mass}, 0);
}
console.log(totalMass(characters));
//2. Get total height of all characters
const totalHeights = (array) => {
    return array.reduce((sum, item) => {return sum + item.height}, 0);
}
console.log(totalHeights(characters));
//3. Get total number of characters by eye color
const totalEyeColor = (array) => {
    return array.reduce((result, item) => {
        if(result[item.eye_color]){
            result[item.eye_color]++;
        }
        else{
            result[item.eye_color] = 1;
        }
        return result;
    }, {});
}
console.log(totalEyeColor(characters));
//4. Get total number of characters in all the character names
//Output = {Anakin Skywalker: 22, Luke Skywalker: 18, ...}
const countCharacters = (array) => {
    return array.reduce((result, item) => {
        let characterName = item.name;
        result[characterName] = item.name.length;
        return result; 
    }, {});
};
console.log(countCharacters(characters));

//***FILTER*** Keyword: Conditions
/* 
The filter() function in JavaScript is used to create a new array with elements that pass a certain condition. It iterates over each element of the array and applies a callback function to determine whether the element should be included in the resulting array. The callback function returns true to include the element in the new array or false to exclude it.
*/
//1. Get characters with mass greater than 100
const massGt100 = (array) => {
    return array.filter((item) => item.mass > 100);
}
console.log(massGt100(characters));
//2. Get characters with height less than 200
const heightLt200 = (array) => {
    return array.filter((item) => item.height < 200);
}
console.log(heightLt200(characters));
//3. Get all male characters
const allMale = (array) => {
    return array.filter((item) => item.gender === 'male');
}
console.log(allMale(characters));
//4. Get all female characters
const allFemale = (array) => {
    return array.filter((item) => item.gender === 'female');
}
console.log(allFemale(characters));

//***SORT*** //Keyword: Ascending, Descending
/* 
The sort() method in JavaScript is used to sort the elements of an array in place and returns the sorted array. It arranges the elements of the array according to the return value of the sorting function provided or based on their string Unicode code points by default.
*/
//Comparison Function Logic: a-b => suppose a = 10, b = 5 then a -b => 5 [+ve] Then [5,10] ascending sorting again if b-a => -5 [-ve] Then [10, 5] descending sorting
// If +ve => [b,a]
// If -ve => [a,b]
//If 0 => [a,b]
//1. Sort by mass
const ascMass = (array) => {
    return array.sort((a,b) => a.mass - b.mass);
}
console.log(ascMass(characters));
//2. Sort by height
const ascHeight = (array) => {
    return array.sort((a,b) => a.height - b.height);
}
console.log(ascHeight(characters));
//3. Sort by name
const descName = (array) => {
    return array.sort((a,b) => b.name.localeCompare(a.name));
}
console.log(descName(characters));
//4. Sort by gender
const ascGender = (array) => {
    return array.sort((a,b) => b.gender.localeCompare(a.gender));
}
console.log(ascGender(characters));

//***EVERY*** //Keyword: every condition
/* 
The every() method tests whether all elements in the array pass the test implemented by the provided function. It iterates over each element of the array and applies the provided function to each element. If the function returns true for all elements, every() returns true; otherwise, it returns false.
*/
//1. Does every character have blue eyes?
const blueEyes = (array) => {
    return array.every((item) => item.eye_color === 'blue');
}
console.log(blueEyes(characters));
//2. Does every character have mass more than 40?
const massGT400 = (array) => {
    return array.every((item) => item.mass > 400);
}
console.log(massGT400(characters));
//3. Is every character shorter than 200?
const heightLT200 = (array) => {
    return array.every((item) => item.height < 200);
}
console.log(heightLT200(characters));
//4. Is every character male?
const isEveryMale = (array) => {
    return array.every((item) => item.gender === 'male');
}
console.log(isEveryMale(characters));

//***SOME*** //Keyword: atleast
/* 
The some() method tests whether at least one element in the array passes the test implemented by the provided function. It iterates over each element of the array and applies the provided function to each element. If the function returns true for at least one element, some() returns true; otherwise, it returns false.
*/
//1. Is there at least one male character?
const oneMale = (array) => {
    return array.some((item) => item.gender === 'male');
}
console.log(oneMale(characters));
//2. Is there at least one character with blue eyes?
const oneBlueEyes = (array) => {
    return array.some((item) => item.eye_color === 'blue');
}
console.log(oneBlueEyes(characters));
//3. Is there at least one character taller than 210?
const oneHeightGT210 = (array) => {
    return array.some((item) => item.height > 210);
}
console.log(oneHeightGT210(characters));
//4. Is there at least one character that has mass less than 50?
const oneMassLT50 = (array) => {
    return array.some((item) => item.mass < 50);
}
console.log(oneMassLT50(characters));