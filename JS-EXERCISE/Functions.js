//Types Of Function In JS Important Topic

// 1) Explicit Function: Function Defined With Function Keyword and given a name and envoked using the name of the function. And Has Return Keyword.
function add(a, b){
    return a+b;
}
let ans = add(5,6);
alert('The Sum Of The Numbers : ' + ans);

// 2) Implicit Function: Function Defined Without Using Function Keyword and typically assigned to a variable that returns a certain value without Return Keyword.
const mul = (a,b) => a*b;
alert('The Multiplication Of Numbers: ' + mul(8,9));

// 3) Anonymous Function: Function Assigned To A Variable Or Function Used As A Statement
const divide = function (a, b) {
    return a/b;
};
alert('The Division Of Numbers: ' + divide(10,2));

// 4) IIFE Function: Function That Is Immediately Invoked After Creating
(function (){
    alert('The IIFE FUNCTION BEING EXECUTED!');
})();

// 5) Closure Function: Function That Has A Parent And Child Function Enclosed, Once The Parent Function Is Executed It Will Return The Child Function That Can Utilize The Variable Of The Parent Function To Execute.
function outer(){
    let count = 0;
    return function inner(){
        count++;
        alert(count);
    };
}
const increment = outer();
increment();
increment();

// 6) Pure Function: Function That Yields Similar Result After Each Execution, Meaning The Conditions Are Fixed.
alert('The Multiplication Of The Numbers: ' + mul(8,14));

// 7) CallBack Function: Function that accepts the function call as parameter that executes the operation and uses the output to execute the another function.
function greet(name, callback){
    const message = 'Hello ' + name;
    callback(message);
}
function showMessage(message){
    alert(message);
}
greet("Shubham", showMessage);

// 8) Arrow Function: Used In ES 6+ Utilized To Limit The Expression Of The Function
const square = (num) => num*num;
alert('The Squre Of The Numbers: ' + square(88));