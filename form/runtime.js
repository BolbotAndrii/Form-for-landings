document.addEventListener("DOMContentLoaded", () => init());
function init() {
	load('https://code.jquery.com/jquery-3.5.1.js', () => {
		load("form/intlTelInput/js/intlTelInput.js");
		load('form/intlTelInput/js/utils.js');
		load('form/form.js');
		load('form/form-style.css');
		console.log(("%c%s"), "color: red", "runtime.js: ready");
	});
}

function load(url, callback) {

	var type = url.split(".").pop();
	var res = undefined;

	if (type == "js") {
		res = document.createElement("script");
		res.src = url;
		res.async = false;
		if (typeof callback == "function") res.onload = callback;

	} else if (type == "css") {
		res = document.createElement("link");
		res.rel = 'stylesheet';
		res.href = url;
	}

	if (typeof res != "undefined") document.head.appendChild(res);
}