// 1. ========== SETTIMEOUT FUNCTION ========== //

// A function that asynchronously invokes a callback
// after a delay in milliseconds.

// EXAMPLE 1.1: Simple Definition
	function callback() {
		console.log("This is the callback!");
	}

	// Delay is 1000 milliseconds, or 1 second.
	var delay = 1000;

	setTimeout(callback, delay);

// EXAMPLE 1.2: Simple anonymous function example
	setTimeout(function() {
		console.log("Runs in approx. 2000ms")
	}, 2000);

// EXAMPLE 1.3: Cancelling setTimeout
	var timerId = setTimeout(function() {
		console.log("This function runs in 30 seconds");
	}, 30000);

	setTimeout(function() {
		console.log("Cancelling the first setTimeout", timerId);
		clearTimeout(timerId);
	}, 2000);

	// Output:
	// "Cancelling the..." after 2 seconds.

// 2. ========== SETINTERVAL FUNCTION ========== //

// A function that continually invokes a callback after
// every X milliseconds, where X is provided to
// setInterval.

// EXAMPLE 2.1: Simple Definition
	function callback() {
		console.log("Callback called continuously");
	}

	// Repeats every 3000 milliseconds, or 3 seconds.
	var repeat = 3000;

	setInterval(callback, repeat);

// EXAMPLE 2.2: Simple anonymous function example
	var num = 0;

	setInterval(function() {
		num++;
		console.log("num: ", num);
	}, 1000);

// EXAMPLE 2.3: Cancelling setInterval
	var num = 0;
	var intervalId = setInterval(function() {
		num++;
		console.log("num: ", num);
		if (num === 3) {
			clearInterval(intervalId);
		}
	}, 1000);

	// Output: 
	// 1... 2... 3. End.

// 3. ========== countDown Assignment ========== //

// Your goal is to implement a function called countDown.  
// The function will accept 1 parameter which is a time 
// in seconds for the count down.  The function should 
// console.log the time remaining every second.  Once the 
// timer gets to 0, the timer should be stopped and you 
// should console.log "Ring Ring Ring!!!".

// Example: countDown(3) should output:
	// Timer: 2
	// Timer : 1
	// Ring Ring Ring!!!

// My Code:
function countdown(number) {
	var num = number;
	var intervalId = setInterval(function() {
		num--;
		max = 0;
		max++;
		console.log("Timer: ", num);
		if (max === num) {
			console.log("Ring Ring Ring!!!")
			clearInterval(intervalId);
		}
	}, 1000);
}

// Intstructor's Code:
function countDown(seconds) {
	var intervalId = setInterval(function() {
		seconds--;
		if (seconds > 0) {
			console.log("Timer:", seconds);
		} else {
			console.log("Ring Ring Ring!!!");
			clearInterval(intervalId);
		}
	}, 1000);
}

