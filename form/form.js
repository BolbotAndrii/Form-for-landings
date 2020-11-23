const formContainer = document.getElementsByClassName('ETform');

const createHtmlElement = (elem, type, name = '', className, placeHolder = '') => {
	let htmlElement = document.createElement(elem);
	htmlElement.type = type;
	type === 'hidden' ? '' : htmlElement.classList.add(className);
	name !== '' ? htmlElement.name = name : '';
	if ( type === 'submit') {
		htmlElement.value = placeHolder;
		htmlElement.disabled = true;
		htmlElement.removeAttribute(placeHolder);
	}
	return htmlElement;
}

const createForm = (action, method, className, index) => {
	let form = document.createElement('form');
	form.method = method;
	form.action = action;
	form.classList.add(className);
	formContainer[index].appendChild(form);
	// form fields
	const htmlElementList = [
		createHtmlElement('input', 'text', 'first-name', 'first-name', 'Frst Name'),
		createHtmlElement('input', 'text', 'last-name', 'last-name', 'Last Name'),
		createHtmlElement('input', 'email', 'email', 'email', 'Your email'),
		createHtmlElement('input', 'tel', 'phone', 'phone'),
		//hidden fields
		createHtmlElement('input', 'hidden', 'full-phone'),
		createHtmlElement('input', 'hidden', 't1'),
		createHtmlElement('input', 'hidden', 'px'),
		createHtmlElement('input', 'hidden', 'sub1'),
		createHtmlElement('input', 'hidden', 'sub2'),
		createHtmlElement('input', 'hidden', 'country'),
		//submit btn
		createHtmlElement('input', 'submit', '', 'send', 'Send')

	];

	htmlElementList.forEach(el => form.appendChild(el));
}


for (let i = 0; i < formContainer.length; i++) {
	createForm('form/post.php', 'post', 'ETform-' + i, i);
}


$.get("http://ipinfo.io", (data) => {
	window.lang = data.country;
	
}, 'json');

console.log(window.lang);







// const createHtmlElement = (elem, type, name = '', className, placeHolder = '') => {
// 	let htmlElement = document.createElement(elem);
// 	htmlElement.type = type;
// 	type === 'hidden' ? '' : htmlElement.classList.add(className);
// 	name !== '' ? htmlElement.name = name : '';
// 	type === 'submit' ?
// 		htmlElement.value = placeHolder :
// 		htmlElement.removeAttribute(placeHolder);

// 	if (type === 'submit') { htmlElement.disabled = true; }

// 	return htmlElement;
// }

// const createForm = (action, method, className, index) => {
// 	let form = document.createElement('form');
// 	form.method = method;
// 	form.action = action;
// 	form.classList.add(className);
// 	formContainer[index].appendChild(form);
// 	// form fields
// 	const htmlElementList = [
// 		createHtmlElement('input', 'text', 'name', 'first-name', 'Frst Name'),
// 		createHtmlElement('input', 'text', 'name', 'last-name', 'Last Name'),
// 		createHtmlElement('input', 'email', 'name', 'email', 'Your email'),
// 		createHtmlElement('input', 'tel', 'name', 'phone'),
// 		//hidden fields
// 		createHtmlElement('input', 'hidden', 'full-phone'),
// 		createHtmlElement('input', 'hidden', 't1'),
// 		createHtmlElement('input', 'hidden', 'px'),
// 		createHtmlElement('input', 'hidden', 'sub1'),
// 		createHtmlElement('input', 'hidden', 'sub2'),
// 		createHtmlElement('input', 'hidden', 'country'),
// 		//submit btn
// 		createHtmlElement('input', 'submit', '', 'send', 'Send')

// 	];

// 	htmlElementList.forEach(el => form.appendChild(el));
// }



// for (let i = 0; i < formContainer.length; i++) {
// 	createForm('form/post.php', 'post', 'ETform-' + i, i);
// }

// const errorEmptyField = (elem, validate) => {
// 	let valid = false;
// 	elem.value === '' || validate === false ? elem.classList.add('error') : elem.value && elem.classList.remove('error');
// 	!elem.classList.contains('error') ? valid = true : valid = false;
// }

// const validateTextInputs = (elem) => {
// 	elem.value = elem.value.replace(/[0-9]/g, '');
// 	errorEmptyField(elem);
// }

// const validateEmailInputs = (elem) => {
// 	const reg = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
// 	let validate = reg.test(elem.value);
// 	errorEmptyField(elem, validate);
// }


// const validatePhoneInputs = (elem) => {

// }


// let submit = document.querySelectorAll("input[type='submit']");

// for (let i = 0; i < submit.length; i++) {
// 	const item = submit[i];

// 	item.addEventListener('submit', () => { validateTextInputs(item) }, false);

// 	// switch ( item.type ) {
// 	// 	case 'text':
// 	// 		item.addEventListener('keyup', () => { validateTextInputs( item ) }, false);
// 	// 		break;
// 	// 	case 'email':
// 	// 		item.addEventListener('keyup', () => { validateEmailInputs( item ) }, false);
// 	// 		break;
// 	// 	case 'tel':
// 	// 		item.addEventListener('keyup', () => { validatePhoneInputs( item ) }, false);
// 	// 		break;
// 	// }
// }


// $.get("http://ipinfo.io", function (response) {
// 	return response.country;
// }, "jsonp");


// const sendData = () => {

// }

