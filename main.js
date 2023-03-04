// import { data } from './data.js';

// named import
// import { generateProducts, salam } from './generateProducts.js';

// default import
import generate from './generateProducts.js';

const products = document.querySelector('.products');

const result = generate();

products.appendChild(result);

document.querySelectorAll('.product button').forEach((button) => {
	button.addEventListener('click', ({ target }) => {
		console.log(target.parentElement.getAttribute('data-id'));
	});
});
