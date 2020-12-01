// const fields - json data from form-fielsds.js
// const phone - json data from phones.js

// get target elements
const formContainer = document.getElementsByClassName( 'ETform' );

const createHtmlElement = ( element, attributes, lang ) => {
	const htmlElement = document.createElement( element );
	setElementAtributes( htmlElement, attributes, lang );
	return htmlElement;
}

const setElementAtributes = ( element, attributes, lang ) => {
	for ( let name in attributes ) {
		typeof attributes[name] === 'object' ?
			element.setAttribute(name, attributes[name][lang]) :
			element.setAttribute(name, attributes[name]);	
	}
}

const addElementsToContainer = ( elements, container, lang ) => {
	elements.forEach( item => {
		container.appendChild( createHtmlElement( item.elem, item.attr, lang ) );
	})
}

const createForm = ( elements, lang ) => {
	for ( let i = 0 ; i < elements.length ; i++ ) {
		const form = elements[i].appendChild( createHtmlElement( 'form', { 'action': 'form/post.php', 'method': 'post', 'id': 'ETform-' + i }, lang ) );
		addElementsToContainer( fields, form, lang );
	}
}

createForm( formContainer, window.lang );


// validation form fields
// const validateTextInputs = (elem) => {
// 	elem.value = elem.value.replace(/[0-9]/g, '');
// }


// const validateEmail = (elem) => {
// 	const reg = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
// 	let validate = reg.test(elem.value);
// } 


// send data
let submitBtn = document.querySelectorAll("input[type='submit']");

const enableSubmitBtn = () => {

}


const sendData = ( submit ) => {
	for ( let i = 0 ; i < submit.length ; i++ ) {
		const item = submit[i];
		item.addEventListener('submit', () => { 
				console.log('send') 
			}, false);
	}
}


sendData(submitBtn);

