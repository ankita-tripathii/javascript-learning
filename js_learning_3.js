

function jslearning(){
                                                //Constructor function
//-----------------------------------------------------------------------------------------------------------

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "English";  //add new property to an existing object
}

// Create 2 Person objects
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");


console.log("my father is " + myFather.nationality +". and my mother age is " + myMother.age);


                                                //deconstructor
//-----------------------------------------------------------------------------------------------------------

//Destructing Arrays

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);

console.log(add, subtract, multiply, divide);



//Destructuring Objects

const vehicleOne = {
  brand: 'Ford',
  model: 'Mustang',
  type: 'car',
  year: 2021, 
  color: 'red',
  registration: {
    city: 'Houston',
    state: 'Texas',
    country: 'USA'
  }
}

myVehicle(vehicleOne)

function myVehicle({ model, color, registration: { state } }) {
  const message = 'My ' + color + ' color ' + model + ' is registered in ' + state + '.';

  console.log(message);
}

                                                             //this
//---------------------------------------------------------------------------------------------------------------------


const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};

let result = person.fullName();
console.log(result);

                                                       //spread operator and rest parameter
//----------------------------------------------------------------------------------------------------------------------

//spread operator and rest parameter have the same syntax which is three dots(…). Even though they have the same syntax they differ in functions.

//spread operator

    var array1 = [10, 20, 30, 40, 50];
    var array2 = [60, 70, 80, 90, 100];
    var array3 = [...array1, ...array2];
    console.log(array3);

    var array4 = [10, 20, 30, 40, 50];
    var array5 = [...array4, 60];
    console.log(array5);


     const obj = {
        firstname: "Divit",
        lastname: "Patidar",
    };
    const obj2 = { ...obj };
    console.log(obj2);


 //rest parameter- The rest parameter is converse to the spread operator. while the spread operator expands elements of an iterable, the rest operator compresses them.
    
   function average(...args) {
        //console.log(args);
       
      var avg =  args.reduce(function (a, b) {
                return a + b;
           }, 0) / args.length;

        return avg;
    }

    console.log("average of numbers is : "
        + average(1, 2, 3, 4, 5));
    console.log("average of numbers is : "
        + average(1, 2, 3));


                                                    //call(), apply(), and bind()
    //----------------------------------------------------------------------------------------------------------------------

    //bind

    let nameObj = { 
    name: "Tony"
} 
  
let PrintName = { 
    name: "steve", 
    sayHi: function () { 
  
        // Here "this" points to nameObj 
        console.log(this.name);  
    } 
} 
  
let HiFun = PrintName.sayHi.bind(nameObj); 
HiFun();


}

jslearning();