// 1. ========== INTRO TO PROMISES ========== //

// A promise is an object that represents a task
// that will be completed in the future.

// EXAMPLE 1.1: Promise Definition
	var p1 = new Promise(function(resolve, reject) {
		resolve([1, 2, 3, 4]);
	});

	p1.then(function(arr) {
		console.log("Promise p1 resolved with data:", arr);
	});

	// Outputs: "Promise p1..." + [1, 2, 3, 4]

// EXAMPLE 1.2: Promise Error Handling
	var p1 = new Promise(function(resolve, reject) {
		reject("ERROR");
	});

	p1.then(function(data) {
		console.log("Promise p1 resolved with data:", data);
	}).catch(function(data) {
		console.log("Promise p1 rejected with data:", data);
	});

// EXAMPLE 1.3: Randomly Occurring Errors
	var p1 = new Promise(function(resolve, reject) {
		var num = Math.random();
		if (num < 0.5) {
			resolve(num);
		} else {
			reject(num);
		}
	});

	p1.then(function(result) {
		console.log("Success:", result);
	}).catch(function(error) {
		console.log("Error:", error);
	});