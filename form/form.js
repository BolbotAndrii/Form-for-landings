const formContainer = document.getElementsByClassName('ETform');

const createHtmlElement = (data) => {
	let htmlElement = document.createElement(data.elem);
	htmlElement.type = data.type;
	htmlElement.name = data.name;
	data.class !== '' && data.class !== undefined ? htmlElement.classList.add(data.class) : false;
	data.type === 'submit' ? htmlElement.disabled = 'disabled' : '';
	return htmlElement;
}

const createForm = (action, method, className, index, data) => {
	let form = document.createElement('form');
	form.method = method;
	form.action = action;
	form.classList.add(className);
	formContainer[index].appendChild(form);
	data.map(item => {
		form.appendChild(createHtmlElement(item));
	})
}



for (let i = 0; i < formContainer.length; i++) {
	createForm('form/post.php', 'post', 'ETform-' + i, i, fields);
}



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

