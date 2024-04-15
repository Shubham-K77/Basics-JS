//* CRUD OPERATIONS WITH OBJECTS
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

//d) DELETE THE DATA
delete car.owner.b; //This will delete the specific data
console.log(car); 

const teacher = {
    name: "raktim",
    dob: 2012,
    age: function(){
        return 2024 - this.dob; //this refers to the dob variable of the class, global scope
    },
    old: () => {
        return 2024 - this.dob; //this refers to the local scope of the variable i.e Arrow Function ES6+ so instead use teacher.dob to access it else the answer returned will be NaN cause number - undefined will return NaN 
    }
};

alert(teacher.age()); //12
alert(teacher.old()); //NaN

// Q) 1.Print (console.log()) value of the property "name" in the given object:
let student = {
    name:"Max",
    age: 27
};
console.log(student.name);

// Q) 2a. Find the value of the price property and if it is greater than 100, discount it by 10%. If that’s not the case, discount it by 7%. b. Update the object with the new property - discount and the corresponding value (7% or 10%) and the new price.
let product = {
    name: null,
    price: null,
    discount: null,
    discountedAmt: null,
    newPrice: null,
    checkPrice: function(name, price){
        this.name = name;
        this.price = price;
        if(this.discount){
            console.log("Already Discounted By: " + this.discount);
        }
        else{
            if(price > 100){
                this.discount = "10%";
                this.discountedAmt = price * 0.10;
                this.newPrice = this.price - this.discountedAmt;
            } else {
                this.discount = "7%";
                this.discountedAmt = price * 0.07;
                this.newPrice = this.price - this.discountedAmt;
            }
        }
    }
};
product.checkPrice("Headphones", 80);
console.log(product);

// Q) 3. Use given object and loop through its properties and if it has property “discount” print “Already discounted by…” and add the value (how much was the discount). In opposite case, do what you did in the previous exercise: check the price, depending on it (if it’s greater or lower than 100) add discount (10% or 7%) and add the property “discount” to the object.
/* 
let prod = {
name: "headphones",
price: 83.7,
discount: "7%",
};

End result should be like this >>

// end result - case 1:
// { name: 'headphones', price: '77.84', discount: '7%' }

// end result - case 2:
// Already discounted by 7%.
*/

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