
function jslearning(){
                                                         //Arrow Function
//---------------------------------------------------------------------------------------------------------------------

let myFunction = (a, b) => a * b;

let result = myFunction(4, 5);
  console.log(result);

 //----------------------------


  hello1 = function(){
  	return "Hello World!";
  }
 
let result1 = hello1();  
console.log(result1);

//-------------------------------

hello2 = ()=>{
	return "Hello ankita!";
}

let result2 = hello2();
console.log(result2);

//------------------------------

hello3 = ()=> "Hello Shweta!";

let result3 = hello3();
console.log(result3);


//------------------------------

hello4 = (value)=> "Hello " + value;

let result4 = hello4("universe");
console.log(result4);

//--------------------------------

hello5 = value => "Hello " + value;

let result5 = hello5("India");
console.log(result5);


}


jslearning();
                                                        //callback function
//------------------------------------------------------------------------------------------------------------------
function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2) {
  let sum = num1 + num2;
  myDisplayer(sum);
}

myCalculator(5, 5);


//----------------------------------------------------

function myDisplayer1(something) {
  console.log(something);
}

function myCalculator1(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator1(5, 5, myDisplayer1);


                                                         //promises
//------------------------------------------------------------------------------------------------------------------------------

function myDisplayer2(some) {
  console.log(some);
}

let myPromise = new Promise(function(myResolve, myReject) {
  let x = 0;

// The producing code (this may take some time)

  if (x == 0) {
    myResolve("OK");
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function(value) {myDisplayer2(value);},
  function(error) {myDisplayer2(error);}
);

                                                               //async/await
//-------------------------------------------------------------------------------------------------------------------------------

//async

function myDisplayer3(some) {
  console.log(some);
}

async function myasyncFunction() {
  return "Hello";
}
        //or
function myasyncFunction1() {
  return Promise.resolve("Hello");
}

myasyncFunction().then(
  function(value) {myDisplayer3(value);},
  function(error) {myDisplayer3(error);}
);

//await

async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  let result= await myPromise;
  console.log(result);
}

myDisplay();