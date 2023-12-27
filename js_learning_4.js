// function overloading 
// function hoisting

/**
* Display Name
* @param {string} fName First Name
* @param {string} lName Last Name
* The above function will be overwritten by this function.
*/
function displayName(fName, lName="No Name") {
	//return `Hi ${fName} ${lName}`;
	console.log(arguments);

	switch(arguments.length) {
       case 2:
           return `Hi ${fName} ${lName}`;
      default:
          return `Hi ${fName}`;
     }
}


/**
* Display Name
* @param {string} name Name
*/
function displayName(name) {
	return `Hi ${name}`;
}


// Function declarations in JavaScript are hoisted to the top of the enclosing function or global scope.
// The function declaration creates a binding of a new function to a given name.
//console.log(displayName('Ana', "tripathi"));    // 'Hi Ana undefined'


console.log(isNaN(-1.23));
console.log(isNaN('123'));
console.log(isNaN(0/0)); // true
console.log(isNaN(123));
console.log(isNaN("addf")); // true
console.log(isNaN(false));
console.log(isNaN(null));
console.log(isNaN(undefined)); // true
