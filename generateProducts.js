import { data } from './data.js';

function generateProducts() {
	const fragemnt = document.createDocumentFragment();

	data.forEach((product) => {
		const item = document.createElement('div');
		item.classList.add('product');
		item.setAttribute('data-id', product.id);
		item.innerHTML = `
    <img src="${product.image}" alt="${product.title}" />
    <div class="product-info">
      <h3>${product.title}</h3>
      <p>Price: ${product.price}</p>
    </div>
		<button ${!product.stock ? 'disabled' : ''}>Add to cart</button>
  `;

		fragemnt.append(item);
	});

	return fragemnt;
}

const salam = 'salam';

// named export
export { generateProducts, salam };

// default export
export default generateProducts;
