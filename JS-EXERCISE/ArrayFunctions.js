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

//***MAP***
//1. Get array of all names
const returnName = (array) => {
    return array.map((item) => item.name);
}
console.log(returnName(characters));
//2. Get array of all heights
const returnHeight = (array) => {
    return array.map((item) => item.height);
}
console.log(returnHeight(characters));
//3. Get array of objects with just name and height properties
const returnObj = (array) => {
    return array.map((item) => {
        return{
            name: item.name,
            height: item.height
        };
    });
}
console.log(returnObj(characters));
//4. Get array of all first names
const returnFirstName = (array) => {
    return array.map((item) => item.name.split(' ')[0]);
}
console.log(returnFirstName(characters));


//***REDUCE***
//1. Get total mass of all characters
const returnTotalMass = (array) => {
    return array.reduce((sum, item) => {
        return sum + item.mass;
    }, 0); // Initialize the accumulator to 0
};
console.log(returnTotalMass(characters)); // Output: Total mass of all characters


//***FILTER***
//1. Get characters with mass greater than 100
const returnTotalMassGT100 = (array) => {
    return array.filter((item) => item.mass > 100);
}
console.log(returnTotalMassGT100(characters));
//2. Get characters with height less than 200
const returnHeightLT200 = (array) => {
    return array.filter((item) => item.height < 200);
}
console.log(returnHeightLT200(characters));
//3. Get all male characters
const returnMale = (array) => {
    return array.filter((item) => item.gender === 'male');
}
console.log(returnMale(characters));
//4. Get all female characters
const returnFemale = (array) => {
    return array.filter((item) => item.gender === 'female');
}
console.log(returnFemale(characters));


//***SORT***
//1. Sort by mass
//a. ascending
const sortMassAsc = (array) => {
    return array.sort((a, b) => a.mass - b.mass);
}
console.log(sortMassAsc(characters));
//b. descending
const sortMassDesc = (array) => {
    return array.sort((a, b) => b.mass - a.mass);
}
console.log(sortMassDesc(characters));
//2. Sort by height
//a. ascending
const sortHeightAsc = (array) => {
    return array.sort((a,b) => a.height - b.height);
}
console.log(sortHeightAsc(characters));
//b. descending
const sortHeightDesc = (array) => {
    return array.sort((a,b) => b.height - a.height);
}
console.log(sortHeightDesc(characters));
//3. Sort by name
//a. ascending
const sortNameAsc = (array) => {
    return array.sort((a,b) => a.name.localeCompare(b.name));
} 
console.log(sortNameAsc(characters));
//b. descending
const sortNameDesc = (array) => {
    return array.sort((a,b) => b.name.localeCompare(a.name));
} 
console.log(sortNameDesc(characters));
//4. Sort by gender
//a. ascending
const sortGenderAsc = (array) => {
    return array.sort((a, b) => a.gender.localeCompare(b.gender));
}
console.log(sortGenderAsc(characters));
//b. descending
const sortGenderDesc = (array) => {
    return array.sort((a, b) => b.gender.localeCompare(a.gender));
}
console.log(sortGenderDesc(characters));
