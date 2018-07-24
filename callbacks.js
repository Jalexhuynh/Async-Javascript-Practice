// 1. ========== INTRO TO CALLBACK FUNCTIONS ========== //

// Callbacks are functions that are passed as parameters
// in to another function. That function that uses the
// callback is called a higher order function.

// EXAMPLE 1.1: Simple Definition
	function callback() {
		console.log("Coming from callback:");
	}

	function higherOrder(fn) {
		console.log("About to call callback!");

		// Will execute the callback function passed in.
		fn(); 
		console.log("Callback has been invoked!")

		// Output:
		// [	Coming from callback:
		// 		About to call callback!
		// 		Callback as been invoked!
		// ]
	}

// EXAMPLE 1.2: Callback Example 1
	function sendMessage(message, callback) {
		// Will return the callback function with messaged
		// passed into it.
		return callback(message);
	}

	// Will return console.log("Message...")
	sendMessage("Message for console", console.log);

	// Will return alert("Message...")
	sendMessage("Message for alert", alert);

// EXAMPLE 1.3: Callback Example 2
	function greet(name, formatterCallback) {
		return "Hello, " + formatterCallback(name);
	}

	function upperCaseName(name) {
		return name.toUpperCase();
	}

	greet("Tim", upperCaseName);

	// Name will be passed into the formatterCallbackFunction,
	// and then that output will be passed into the higher 
	// order function.

// EXAMPLE 1.4: Callback with Anonymous Function
	function greet(name, formatterCallback) {
		return "Hello, " + formatterCallback(name);
	}

	greet("Tim", function(name) {
		return name.toUpperCase();
	});

	// Removes one step by skipping a function declaration
	// and defines the function as it is passed in
	// to the higher order function.

// 2. ========== FOREACH EXAMPLE ==========//

// EXAMPLE 2.1: Non-Callback Example
	var arr = [1, 2, 3, 4, 5, 6];

	function double(arr) {
		for (var i = 0; i < arr.length; i++) {
			console.log(arr[i] * 2);
		}
	}

	// Will console.log 2, 4, 6, 8, 10, 12.
	double(arr);

// EXAMPLE 2.2: Skeleton of forEach function.

	function forEach(array, callback) {
		for (var i = 0; i < arr.length; i++) {
			callback(array[i], i, array);
		}
	};

	function callback(curElement, curIndex, array) {};

// EXAMPLE 2.3: Refactored with Callback
	var arr = [1, 2, 3, 4, 5, 6];

	forEach(arr, function(number) {
		console.log(number * 2);
	})

// EXAMPLE 2.4: forEach with all parameters.
	var strings = ["my", "forEach", "example"];
	var result = "";

	forEach(strings, function(str, index, array) {

		// Ex: 1st iteration: ("my",      0, strings)
		//     2nd iteration: ("forEach", 1, strings)
		//	   3rd iteration: ("example", 2, strings)
		// 	   Array.length - 1 = 2
		if(array.length - 1 !== index) {
			result += str + " ";
		} else {
			result += str + "!!!";

			// Will output:
			// my forEach example!!!
			console.log(result)
		}
	});