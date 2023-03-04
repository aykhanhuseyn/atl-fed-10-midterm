const productsEl = document.querySelector(".shop-content");
const cartEl = document.querySelector(".cart-content");
const subTotal =document.querySelector('.total-price') ;
const totalItemsInCart = document.querySelector(".itemnumbers")




function renderProducts() {
    data.forEach((product) => {
      productsEl.innerHTML += `<div class="product-box">
      <img src="${product.image}" alt="" class="product-img">
      <h2 class="product-title">${product.title}</h2>
      <span class="price">$${product.price}</span>
      <button  class="addtocart" onclick="addToCart(${product.id})">Add to Card</button>
  </div>` ;
});
}
renderProducts();

// let cart =  JSON.parse(localStorage.getItem("CART")) || [];
let cart = [];
updateCart();

function addToCart(id) {
    // check if product already exist in cart
    if (cart.some((item) => item.id === id)) {
      alert("Product already in cart!");
    } else {
      const item = data.find((product) => product.id === id);
  
      cart.push({
        ...item,
        numberOfUnits: 1,
      });
    } 
    updateCart();
}

function updateCart() {
  renderCartItems();
  renderSubtotal(); 

  // save cart to local storage
//   localStorage.setItem("CART", JSON.stringify(cart));
}


function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });

  subTotal.innerHTML = `Subtotal (${totalItems} items): $${totalPrice.toFixed(2)}`;
  totalItemsInCart.innerHTML = totalItems;
}

function renderCartItems() {
  cartEl.innerHTML = "";
  cart.forEach((item) => {
    cartEl.innerHTML += `
    <div class="cart-box">
       <div class="cart-img" onclick="removeItemFromCart(${item.id})"> <img src="${item.image}" alt="" class=""> </div>
        <div class="detail-box">
            <div class="cart-product-title">${item.title}</div>
            <div class="cart-price">$${item.price}</div>
            
        </div>
        <div class="units">
                <div class="btn minus" onclick="changeNumberOfUnits('minus', ${item.id})">-</div>
                <div class="number">${item.numberOfUnits}</div>
                <div class="btn plus" onclick="changeNumberOfUnits('plus', ${item.id})">+</div>           
            </div>
    </div>`
  })
  
}
// remove item from cart
function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

function changeNumberOfUnits(action, id) {
  cart = cart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" &&  item.stock===true) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });

  updateCart();
}
