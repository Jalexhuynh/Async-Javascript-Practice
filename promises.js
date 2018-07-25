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

// 2. ========== ASYNCHRONOUS PROMISES ========== //

// EXAMPLE 2.1 setTimeout with Promise
	var promise = new Promise(function(resolve, reject) {
		setTimeout(function(){
			var randomInt = Math.floor(Math.random() * 10);
			resolve(randomInt);
		}, 4000);
	});

	promise.then(function(data) {
		console.log("Random int passed to resolve:", data);
	});

// 3. ========== PROMISE CHAINING ========== //

// EXAMPLE 3.1 Non-promise example of Nested Callbacks
	var counter = 0;
	setTimeout(function() {
		counter++;
		console.log("Counter:", counter);
		setTimeout(function() {
			counter++;
			console.log("Counter:", counter);
			setTimeout(function() {
				counter++;
				console.log("Counter:", counter);
			}, 3000);
		}, 2000);
	}, 1000);
 
	// 	Disadvantages:
	// 	- Hard to read code
	// 	- Logic is difficult to reason about
	// 	- The code is not modular, lots of duplicates

// EXAMPLE 3.2 Promise Chaining Example

	var promise = new Promise(function(resolve, reject) {
		setTimeout(function() {
			randomInt = Math.floor(Math.random() * 10);
			resolve(randomInt);
		}, 1000);
	});

	promise.then(function(data) {
		console.log("Random int passed to resolve:", data);
		return new Promise(function(resolve, reject) {
			setTimeout(function() {
				resolve(Math.floor(Math.random() * 10));
			}, 2000);
		});
	}).then(function(data) {
		console.log("Second random int passed to resolve:", data);
	});

	// Will output "Random int..." in 3 seconds, then: 
	// Will output "Second random..." in 0.5 seconds after.

// EXAMPLE 3.3 Non-promise Chaining
	var promise = new Promise(function(resolve, reject) {
		resolve(5);
	});

	promise.then(function(data) {
		return data * 2;
	}).then(function(data) {
		return data + 20;
	}).then(function(data) {
		console.log(data);
	});

	// Console.log 30

// EXAMPLE 3.4 Refactoring Example 3.1
	var counter = 0;
	function incCounter() {
		counter++;
		console.log("Counter:", counter);
	}

	function runLater(callback, timeInMs) {
		var p = new Promise(function(resolve, reject) {
			setTimeout(function() {
				var res = callback();
				resolve(res);
			}, timeInMs);
		});
		return p;
	}

	runLater(incCounter, 1000).then(function() {
		return runLater(incCounter, 2000);
	}).then(function() {
		return runLater(incCounter, 3000);
	}).then(function() {
		// Any further code. Final .then not necessary.
	});