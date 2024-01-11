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

//-----------------------------------------------------------------------------


input: arr =[1,2,0,4,4,3,0,5,0];
//output: arr[]={1,2,4,4,3,5,0,0,0};

function moveZerosToEnd(arr) {
    // Sort the array
    arr.sort(function(a, b) {
        if (a === 0 && b !== 0) {
            return 1;
        } else if (a !== 0 && b === 0) {
            return -1;
        } else {
            return 0;
        }
    });

    return arr;
}

const output = moveZerosToEnd(arr);
console.log(output);
 
                                    //or
//------------------------------------------------------------------------------------

let inputArr = [1, 2, 0, 4, 4, 3, 0, 5, 0];

function moveZerosinEnd(arr) {
    return new Promise((resolve, reject) => {
        // Initialize an index to keep track of non-zero elements
        let nonZeroIndex = 0;

        // Iterate through the array
        for (let i = 0; i < arr.length; i++) {
            // If the current element is non-zero, move it to the front
            if (arr[i] !== 0) {
                arr[nonZeroIndex++] = arr[i];
            }
        }

        // Fill the remaining positions with zeros
        for (let i = nonZeroIndex; i < arr.length; i++) {
            arr[i] = 0;
        }

        // Resolve the promise with the modified array
        resolve(arr);
    });
}

// Using the promise
moveZerosinEnd(inputArr)
    .then((outputArr) => {
        console.log(outputArr);
    })
    .catch((error) => {
        console.error(error);
    });