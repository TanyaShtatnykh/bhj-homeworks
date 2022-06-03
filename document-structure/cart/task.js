const quantityBut = [...document.querySelectorAll('.product__quantity-control')];
const cartBut = [...document.querySelectorAll('.product__add')];
let cartProducts = document.querySelector('.cart__products');
let cartProduct = [...document.querySelectorAll('.cart__product')];

quantityBut.forEach((butForChange) => {
    butForChange.addEventListener('click', (e) => {
        let quantityСounter = e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
        let value = Number(quantityСounter.innerText);
        
        if (e.target.classList.contains('product__quantity-control_dec')) {
            (value > 1) ? value-- : value === 1;
        } else {
            value++;
        }
        
        quantityСounter.innerText = value;
    });
});

cartBut.forEach((butForAdd) => {
    butForAdd.addEventListener('click', (event) => {
        const product = event.target.closest('.product');
        const productImage = product.querySelector('.product__image').src;
        const prodId = product.dataset.id;
        const prodQuant = product.querySelector('.product__quantity-value').innerText;
        let cartProd = cartProduct.find(elem => elem.dataset.id == prodId);
        
        cartProducts.insertAdjacentHTML('beforeEnd',
                `<div class="cart__product" data-id="${prodId}">
                    <img class="cart__product-image" src="${productImage}">
                    <div class="cart__product-count">${prodQuant}</div>
                </div>`
            );
        
        if (cartProd) {
            let prodCount = cartProd.querySelector('.cart__product-count').innerText;
            prodCount = Number(prodCount) + Number(prodQuant);
        } 
    });
});
