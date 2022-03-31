const quantityBut = [...document.querySelectorAll('.product__quantity-control')];
const cartBut = [...document.querySelectorAll('.product__add')];
const allProducts = [...document.querySelectorAll('.product')];
let cartProducts = document.querySelector('.cart__products');
let cartProduct = [...document.querySelectorAll('.cart__product')];

quantityBut.forEach((butForChange) => {
    butForChange.addEventListener('click', quantityChange);
});

function quantityChange(e) {
    let quantityСounter = e.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');
    let value = Number(quantityСounter.innerText);
    
    if (e.target.classList.contains('product__quantity-control_dec')) {
        (value > 1) ? value-- : value === 1;
    } else {
        value++;
    }
    
    quantityСounter.innerText = value;
};

cartBut.forEach((butForAdd) => {
    butForAdd.addEventListener('click', addProduct);
});

function addProduct() {
    allProducts.forEach((prod) => {
        cartProduct.forEach((i) => {
            if (i.dataset.id == prod.dataset.id) {
                i.querySelector('.cart__product-count').innerText =
                Number(i.querySelector('.cart__product-count').innerText) + Number(prod.querySelector('.product__quantity-value').innerText);
                return;
            }
        });

        let productImage = prod.querySelector('.product__image');
        
        cartProducts.insertAdjacentHTML('beforeEnd',
            `<div class="cart__product" data-id="${prod.dataset.id}">
                <img class="cart__product-image" src="${productImage.src}">
                <div class="cart__product-count">${Number(prod.querySelector('.product__quantity-value').innerText)}</div>
            </div>`
        );
    });
};

