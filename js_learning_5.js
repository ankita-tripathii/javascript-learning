// laxical/ closures example questions---------

function function1 (){
	
const a = 1;


	function function2 (){

	 //console.log(a);	

	}


	return function2();
}

 function1();

                          //global scope
 //--------------------------------------------------------------

 const e = 10;

 function sum (a){

 	return function (b){

 		return function (c){

 			return function (d){

 				return a+b+c+d+e;
 			};
 		};
 	};
 }

//console.log(sum(1)(2)(3)(4));

                           //without anonymous
//--------------------------------------------------------------------------


 const f = 10;

function sum (a){
	return function sum1(b){
		return function sum2 (c){
			return function sum3 (d){
				return a+b+c+d+f;
			};
		};
	};
}

const sum1 = sum(1);
const sum2 = sum1(2);
const sum3 = sum2(3);
const result = sum3(4);

console.log(result);
