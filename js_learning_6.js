let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

// let newArr = [...arr1, ...arr2];

//let newArr = arr1.concat(arr2);

//arr1.push(arr2);

//console.log (arr1);


                                   //map
//-------------------------------------------------------------------

arr3= new Array (1,2,3,4,5);

function square(n){
	return n*2;
}

let new_arr3 = arr3.map(square);
//console.log(new_arr3);

                                  //filter
//----------------------------------------------------------------------

arr4 = new Array (2,4,6,7,9,3);

function divided_by_two(n){
	return n % 2 == 0;
}

// let new_arr4 = arr4.filter();
//console.log(new_arr4);

                                 //reducer
//----------------------------------------------------------------------

arr5 = new Array (1,2,3,4,5);

function product (a,b){
	return a*b;
}

let new_arr5 = arr5.reduce(product);
// console.log(new_arr5);


                                  //slice
//------------------------------------------------------------------------

let fruits1 = ['apple', 'banana', 'orange', 'grapes', 'kiwi']

let new_fruits = fruits1.slice(2,4);  //(starting index, ending index)

//console.log(new_fruits);

                                 //splice
//-------------------------------------------------------------------------

let cars = ['volvo', 'bmw', 'innova', 'breeza', 'dzire']

let new_cars = cars.splice(2, 2, 'swift'); //(index, howmeny, add)

//console.log(cars);

                                 //split
//-----------------------------------------------------------------------------

let text = "my name is ankita tripathi";

let new_text = text.split(" ", 3); //(seperator, limit)

//console.log(new_text);


//----------------------------------------------------------------------------

for (let i = 0; i<=10; i++){
	//console.log(i);
}