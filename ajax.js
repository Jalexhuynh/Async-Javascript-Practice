// 1. ========== INTRO TO AJAX ========== //

// Stands for Asynchronous Javascript & XML
// Typically Asynchronous javascript & JSON currently.

// EXAMPLE 1.1: Example XMLHTTP Request
	var XHR = new XMLHttpRequest();
	XHR.onreadystatechange = function() {
		if (XHR.readyState == 4 && XHR.status == 200) {
			console.log(XHR.responseText);
		}
	};

	XHR.open("GET", "https://api.github.com/zen");
	XHR.send();

// 2. ========== FETCH API ========== //

// EXAMPLE 2.1: Example Fetch Request
	fetch(url)
	.then(function(res) {
		console.log(res);
	})
	.catch(function(error) {
		console.log(error);
	});

// EXAMPLE 2.2: Parsing JSON with Fetch with Options
	fetch(url, {
		method: 'POST',
		body: JSON.stringify({
			name: 'Name',
			login: 'Username'
		})
	})
	.then(function(res) {
		return res.json();
	})
	.then(function(data) {
		console.log(data);
	})
	.catch(function() {
		console.log("Problem!");
	});