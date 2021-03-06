document.addEventListener("DOMContentLoaded", () => init());
function init() {
	load('https://code.jquery.com/jquery-3.5.1.js', () => {
		load('form/inputmask.js', () => { console.log('loaded')});
		load('form/form-fields.js');
		load('form/phone.js');
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

	fetch('https://get.geojs.io/v1/ip/country.json')
		.then(res => res.json())
		.then((data) => {
			window.lang = data.country.toLowerCase();
		}).catch(err => console.error(err));

	if (typeof res != "undefined") document.head.appendChild(res);
}


