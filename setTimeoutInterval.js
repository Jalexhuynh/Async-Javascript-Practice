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

// EXAMPLE 1.2: Simple example with anonymous function
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