!function(){

	// This is comment
	/**
	 *  This is comment too
	 */

	// This is a variable
	var x;

	// data type

	// Number
	x = 1;
	console.log(typeof x);

	// Int and float both belong to number
	x = 0.01;
	console.log(typeof x);

	// String
	x = "hello javascript";
	console.log(typeof x);
	// Use ' ' or " " is ok
	x = 'hello javascript too';
	console.log(typeof x);

	// Boolean, also true or false
	x = false;
	console.log(typeof x);
	x = true;
	console.log(typeof x);

	// Null is special, means empty object?
	x = null;
	console.log(typeof x);

	// Undefined likes Null, the variable without statement is undefined
	x = undefined;
	console.log(typeof x);
	console.log(typeof y);

	// Object Literal, use {}, a "key-value" set
	var js = {
		name: 'Javascript',
		standard: 'ECMAScript'
	};

	// Use "." or "[]" to fetch object attribute;
	console.log(js.name);
	console.log(js[name]);

	// Add attribute and change
	js.statement = 'Hello';
	console.log(js);
	js.statement = 'Woo! Javascript';
	console.log(js.statement);

	// Object's attribute can be another object
	js.obj = {};
	js.obj.name = 'jsObject';
	console.log(js.obj.name);

	// Even a function
	js.say = function(){
		return this.name;
	}
	console.log(js.say());

	// Array Literal, use [], a "number-value like" set
	var ar = [1,1,2,3,5];
	// Number index start at "0"
	console.log(ar[3]);

	// Object and Array both can use nesting
	var far = {
		'array': [1,1,2,3,5],
		'object': {
			name: 'object',
			'inArray': []
		}
	}

	// Use "length" to get how many elements it has
	console.log(far['array']);
	console.log(far['object']['inArray'].length);

	// Operator
	console.log(1 + 1);
	console.log(10 - 3);
	console.log(2 * 3);
	console.log(10 / 2);
	console.log(far['array'][0] + far['array'][1]);

	// For short
	var count = 0;
	console.log(count ++);
	console.log(count --);
	console.log(count += 2);
	console.log(count -= 3);
	count; // Only a variable can be a expression too

	var x = 3, y = 4;
	console.log( x == 4);
	console.log( x === '3');
	console.log( y >= x);
	console.log( 10 <= 3);
	console.log( x + 1 < y);
	console.log('Hello' == 'World');
	console.log( false == (x > y));

	var l = false;
	console.log((x == 3) && l);
	console.log(l || (y >= 3));
	console.log(!true);

	// Function
	
}();