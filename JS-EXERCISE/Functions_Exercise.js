// 1) Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 34223
// a) Using Palindrome Logic
const reverse = (num) => {
    let rev = 0;
    let rem;
    while (num !== 0) {
        rem = num % 10;
        rev = rev * 10 + rem;
        num = Math.floor(num / 10);
    }
    return rev;
}
const x = 658;
alert('The reversed number is : ' + reverse(x));
// b) Using String Logic
const reverseNumber = (num) => num.toString().split('').reverse().join('');
alert('The reversed number is : ' + reverseNumber(32243));

// 2)Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. Note : As the letter 'y' can be regarded as both a vowel and a consonant, we do not count 'y' as vowel here. Example string : 'The quick brown fox' Expected Output : 5
const countVowel = (word) => {
    word = word.toLowerCase();
    let vowel = Array('a', 'e', 'i', 'o', 'u');
    let count = 0;
    let i = 0;
    while(i < word.length){
        if(vowel.includes(word[i])){
            count++;
        }
        i++;
    }
    return count;
}
alert('The Number Of Vowels = ' + countVowel("The quick brown fox"));

// 3) Write a JavaScript function that accepts a number as a parameter and checks whether it is prime or not.
const checkPrime = (num) => {
    if(num <= 1)
        return false;
    for(let i = 2; i<num; i++){
        if(num % i === 0)
            return false;
    }
    return true;
}
alert('IS Prime : ' + checkPrime(2));

// 7) Write a function findSquare() returns the square of the input number which is passed as an argument in the function call.
const findSquare = (num) => num*num;
alert('The Square Of The Number Is : ' + findSquare(50));

// 4) Write a JavaScript function to get the number of occurrences of each letter in a specified string.
const countLetter = (word) => {
    const result = {}; //Create An Object To Store The Letter And Occurrence
    for(let i = 0; i<word.length; i++){
        const letter = word[i]; //Get The Current Letter Of The Word
        if(result[letter]){
            result[letter]++; //If The Letter lies in the object increment the value
        }else{
            result[letter] = 1; //If The letter isn't an object key then initialize the value = 1
        }
    }
    return result; //Returns The Object
}

const result = countLetter('Hello World');
for(const letter in result){
    console.log(letter + ' = ' + result[letter]);
}

// 5) Write a JavaScript function to find the first not repeated character. Sample arguments : 'abacddbec' Expected output : 'e'

console.log(' ');

const output = countLetter('abacddbec');
for(const lett in output){
    if(output[lett] === 1){
        console.log(lett + ' = ' + output[lett]);
    }
}

console.log(' ');

//6) Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output. Sample function : Longest_Country_Name(["Australia", "Germany", "United States of America"]) Expected output : "United States of America"
const highestCountry = (arr) => {
    let max = 0;
    let answer;
    for (let i = 0; i < arr.length; i++) {
        let count = arr[i].length;
        if (count > max) {
            max = count;
            answer = arr[i];
        }
    }
    return { country: answer, count: max };
}

const countries = ["Australia", "Germany", "United States of America"];
const results = highestCountry(countries);
alert('The Highest Country = ' + results.country + " & Count = " + results.count);

