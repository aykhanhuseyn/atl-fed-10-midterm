let cardIcon = document.querySelector('#card-icon');
let cartt = document.querySelector('.cart');
let closeCart = document.querySelector('.cart-close');

cardIcon.onclick = () => {
    cartt.classList.add('active');
}

closeCart.onclick = () => {
    cartt.classList.remove('active');
}