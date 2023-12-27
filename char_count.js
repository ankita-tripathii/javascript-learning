const data = "aabbbbccdeeeffaaassssss tttsssaaaabbbccc";


function check_character_frequency(data1){

	const thirdChar = data1[2];

	//console.log(thirdChar); // print 3rd letter of string

	let frequency_dictionary={};

  	for(i=0; i<data1.length; i++){
	  	const character_at_index = data1[i];

	  	// note the three equal signs so that null won't be equal to undefined
		if( frequency_dictionary[character_at_index] !== undefined ) {

			frequency_dictionary[character_at_index] += 1;
		    // do something
		}else{
			frequency_dictionary[character_at_index] = 1;
		}
  }

	
    const keys = Object.keys(frequency_dictionary); // extract all keys  of a dictinonary
    keys.forEach(function(key){
	    //console.log(key, frequency_dictionary[key]);
	});
	//console.log(keys);





	//console.log("------");

	var dictionary2 = {
	    a:  4, //[1,2,3, 4],
	    b:  9, //[5,6,7]
	};

	//{a: [1,4,9,16], b: [25,36,49]}


	// [a,b]
	var values3 = Object.keys(dictionary2).map(function(key){
	     return dictionary2[key]**2; // Math.pow(num, 2)
	});

	//console.log(values3); // [16, 81]

	
	var values4 = Object.entries(dictionary2).map(function([k, v]){
		//console.log(k , v);
		return v ** 2;

	});

	//console.log(values4);  // [16, 81]


	var values5 = Object.fromEntries(Object.entries(dictionary2).map(function([k, v]){
		//console.log(k , v);
		return [k, v ** 2];

	}));

	//console.log(values5);	// {a:16, b: 81}


	//console.log("------");
	
	// below is mark of 1 candidate in  4 subjects 
	// cutoff is 1.0
	// is the candidate passed ? one has to have greater than cutoff in all subject
	const numbers = [1.5, 0.3, 1.1, 1.7]; // max score 5
	//true,  1.5, 0
	//true, 0.3, 1
	// false, 1.1, 2
	const pass = numbers.reduce(function(accumulator, currentvalue, index){
		return ( currentvalue > 1.0) && accumulator
	}, true);

	//console.log(pass); // accumulator
     

	//2, 0, 1, 2 => 5
    const sumround = numbers.reduce(function(accumulator, currentvalue, index){
		return accumulator + Math.round(currentvalue);
	}, 0);

	//console.log(sumround); // accumulator


	//console.log("+++++++");
    
    // using higer order functions
    // below uses filter with anonymous function, arrow function 
    //const filteredKeys = keys.filter(key => key !== ' '); // map, filter, reduce
    const filteredKeys = keys.filter(function(key) {
    	return key !== ' ';
    });

    //console.log(filteredKeys);

    const Keys = [];


    for(let key in keys){
    	if (keys[key] !== ' '){
            Keys.push(keys[key]);
        }

    }
    //console.log(Keys);
	// add new character in dictionary as key with value 1. +1
	//{}
	//{a:1}
	//{a: 2}
	//{a:2, b:1}

	return frequency_dictionary;
}


console.log(check_character_frequency(data));



// splice
// split
// spread operator
// try catch, throw

function test_array(){
	var array=[1,2,3,4,5];

	var array2 = array.splice(2); // this  updates existing array
	//console.log(array2); // 3,4,5
	//console.log(array);

	var array3=[1,2,3,4,5]
	//console.log(array3.slice(2)); // NO IMPACT ON ORIGINAL
	//console.log(array3);

}


//test_array();


function test_string(argument, split) {
	let array1 = argument.split(split);
	console.log(array1);
}

//test_string("a,b,c,d,e;f;g", /[,;]/); // regular expression

//test_string(" ksajd asjdhsa sajdhsa askjdska askjfdksajd asjdlkasj fdlksajf ".trim(" "), " ");


function multiple_args(...arg) {
	let p = arg;
	console.log(p);

	let arr = [0 , 1, 2];
	arr = [...arr, ...p];  // spread operator
	
	console.log(arr);
}

multiple_args(5,6,7,8,9,10,11);


