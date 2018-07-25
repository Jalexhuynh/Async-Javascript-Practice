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