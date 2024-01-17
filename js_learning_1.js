
let userName = "Ankita"; //global scope

function jslearning(){

                                                     //javaScript Declarations are Hoisted

x= 5;
var x;
console.log(x);

//-------------------------------------
// carname1 = "volvo";
// let carname1;

//console.log(carname1); //ReferenceError

let carname2;
carname2 = "volvo";

console.log(carname2); 

//------------------------------------------------
// carName1 = "Volvo";
// const carName1;

//console.log(carName1);// syntax error


const carName2 = "Volvo"; //function or local scope

console.log(carName2);

//-------------------------------------------------
 console.log(userName); //global scope

 const myName = "Shweta"; //block scope const and let 
 

       
 //console.log(myName); //block scope     username is not define       


                                                                   // Primitive data types and non Primitive
//--------------------------------------------------------------------------------------------------------------------------------------------
//number
let p = 250;
let q = 40.5;
console.log("Value of p=" + p);
console.log("Value of q=" + q);

//string
let str = 'Hello All';
let str1 = "Welcome to my new house";
console.log("Value of str=" + str);
console.log("Value of str1=" + str1);

//undefine
//console.log("Value of t=" + t);

//boolean
//console.log("value of bool=" + bool);

//null
let z = null;
console.log("Value of x=" + z);

//-------------------------------------------------------

//object ---- An object in Javascript is an entity having properties and methods. Everything is an object in javascript.

//Using Constructor Function to define an object:

// Create an empty generic object
//let obj = new Object();

// Create a user defined object
//let mycar = new Car();

//Using Literal notations to define an object:
// An empty object
let square = {};

// Here a and b are keys and
// 20 and 30 are values
let circle = {a: 20, b: 30};


// Creating object with the name person
    let person = {
        firstName: "Luiza",
        lastName: "Shaikh",
    };
 
    // Print the value of object on console
    console.log(person.firstName + "  " + person.lastName);
//--------------------------------------------------------------------------------------

//array -------With the help of an array, we can store more than one element under a single name.

//Ways to declare a single-dimensional array:

// Call it with no arguments
let c = new Array();

// Call it with single numeric argument
let d = new Array(10);

// Explicitly specify two or
// more array elements
let e = new Array(1, 2, 3, "Hello");

console.log("value of c=" + c);
console.log("value of d=" + d);
console.log("value of e=" + e);

                                                                 //comparison operator
//---------------------------------------------------------------------------------------------------------------------------------------

//==   in JavaScript is used for comparing two variables, but it ignores the datatype of variable.

let f = 10;
console.log(f==10);//true
console.log(f=='10');//true
console.log(f==20);//false value is change

//===  is used for comparing two variables, but this operator also checks datatype and compares two values.

let g = 10;
console.log(g===10);//true
console.log(g==='10');//false g is a number not string data type
console.log(g===20);//false  value change


}
jslearning();