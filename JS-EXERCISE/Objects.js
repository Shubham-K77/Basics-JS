//1) CRUD OPERATIONS WITH OBJECTS
//a) CREATE OBJECT USING CONST IDENTIFIER = {}
const car = {
    brandName: "Lamborghini",
    modelName: "Huracan",
    manufacturedDate: 2004,
    isRunning: true,
    owner: {
        a: "Raktim Shrestha",
        b: "Aashish Neupane"
    },
    returnData: function() {
        return this.brandName + " " + this.modelName + " " + this.manufacturedDate + " " + this.isRunning;
    }
};

//b) READ THE DATA/ACCESS THEM
console.log(car.owner.a); //FOR KEY/VALUE PAIRS
alert(car.returnData()); // FOR ACCESSING THE FUNCTIONS USE OBJECT.FUNCTION () Outputs: Lamborghini Huracan 2004 true

//c) UPDATE THE DATA
car.modelName = "Aventedor";
console.log(car.modelName);
car.price = 1000000; //IF NOT AVAILABLE THIS WILL CREATE THE VARIABLE
console.log(car); 

const teacher = {
    name: "raktim",
    dob: 2012,
    age: function(){
        return 2024 - this.dob;
    },
    old: () => {
        return 2024 - teacher.dob; 
    }
};

alert(teacher.age()); //12
alert(teacher.old()); //NaN

// Q) 5 Write a program which can return a boolean if value is present in the range with given start and end values in an object
// // Example
/* let range = {
    start: 10,
    end: 50,
    };
    
    5 in range; // false
    25 in range; // true */

let range = {
    start: 10,
    end: 50,
    check: function(num) {
        if(num >= this.start && num <= this.end){
            return true;
        }
        else{
            return false;
        }
    }
};
console.log(range.check(44));