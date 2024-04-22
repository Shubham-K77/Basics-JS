//Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 34223
const reverseNumber = (num) => {
    num = num.toString();
    num = num.split('').reverse().join('');
    return num = parseInt(num);
}
console.log(reverseNumber(32243));

//Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. Example string : 'The quick brown fox' Expected Output : 5
const vowelCounter = (word) => {
    const vowels = ['a','e','i','o','u'];
    word = word.toLowerCase().split('');
    return word.reduce((count, item) => {
        if(vowels.includes(item)){
            count++;
        }
        return count;
    }, 0);
}
console.log(vowelCounter('The quick brown fox'));

//Write a js function that convert full name to proper case Eg: raktim kumar shrestha => Raktim Kumar Shrestha
const properCase = (word) => {
    word = word.split(' '); //Convert Into Array
    word = word.map((item) => item.charAt(0).toUpperCase() + item.slice(1));
    return word = word.join(' ');
}
console.log(properCase("raktim kumar shrestha")); //Expected Output: Raktim Kumar Shrestha

//Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
const primeChecker = (num) => {
    let flag = true;
    if(num <= 1){
        flag = "Not Prime || Not Composite";
    }
    for(i=2; i<num; i++){
        if(num % i === 0){
            flag = false;
        }
    }
    return flag;
}
console.log(primeChecker(9)); //false

// Write a JavaScript function to get the number of occurrences of each letter in a specified string.
const occurChecker = (word) => {
    word = word.toLowerCase().split(''); //Convert Into Array
    return word.reduce((answer, item) => {
        if(answer[item]){
            answer[item]++;
        }
        else{
            answer[item] = 1;
        }
        return answer;
    }, {});
}
console.log(occurChecker("SHUBHAM"));

// Write a JavaScript function to find the first not repeated character. Sample arguments : 'abacddbec' Expected output : 'e'
const word = occurChecker("abacddbec");
for(const letter in word){
    if(word[letter] === 1){
        console.log(letter + " : " + word[letter]);
    }
}

// Write a implicit js function that formats the number in following format. 10000 => 10,000 1000000 =>10,000,000
const thousandPattern = (num) => {
    num = num.toString().split('').reverse();
    for(let i = 3; i < num.length; i += 4){
        num.splice(i, 0, ",");
    }
    return num.reverse().join('');
}
console.log(thousandPattern(10000000));

// Write a function findSquare() returns the square of the input number which is passed as an argument in the function call.
const findSquare = (num) => {
    return Math.pow(num, 2);
}
console.log(findSquare(88));

// Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output. Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"]) Expected output : "United States of America"
const largestCountry = (list) => {
    const object = list.reduce((object, item) => {
        object[item] = item.length;
        return object;
    }, {});
    let maxCount = 0;
    let maxCountry;
    for(const lett in object){
        if(object[lett] > maxCount){
            maxCount = object[lett];
            maxCountry = lett;
        }
    }
    return {country: maxCountry, count: maxCount};
}
console.log(largestCountry(["Australia", "Germany", "United States of America", "United Kingdom of Great Britain and Northern Ireland"]));