

const cart = [];
const productList = document.getElementById("product-list");

data.forEach(({ id, title, price, content, stock, image }) => {
  productList.innerHTML += `
    <li data-id="${id}" >
      <h3>${title}</h3>
      <image src="${image}" width="300" height="300" />
      <p class="footer">
        <span class="price">${price} manat</span>
        <span class="content" style = "margin-top:40px">${content} </span>
        <span class="stock">${stock} </span>
    
      </p>
      <button>add to cart</button>
    </li>
  `;
});




// productList.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     const id = event.target.parentNode.getAttribute("data-id");
//     cart.push({ [id]: { id, price: 10, count: 1 } });
//   }
// });

const cartKey = document.getElementById("cart-key");

cartKey.addEventListener("click", () => {
  const backdrop = document.getElementById("backdrop");
  const cart = document.getElementById("cart");
  backdrop.classList.add("open");
  cart.classList.add("open");
  const listener = backdrop.addEventListener("click", (event) => {
    event.stopPropagation();

    if (event.target === backdrop) {
      backdrop.classList.remove("open");
      cart.classList.remove("open");

      backdrop.removeEventListener("click", listener);
    }
  });
});
