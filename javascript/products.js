
// gsap animation
gsap.from(".nlink",{
    stagger:.1,
    y:10,
    duration:3,
    ease:"power4",
    opacity:0
})

document.addEventListener("DOMContentLoaded", function () {
    fetchProducts();
});

let products = [];
let cart = [];

function fetchProducts() {
    products = [
        { id: 1, name: ' Item 1', price: 29.99, image: 'products images/download.jpg' },
        { id: 2, name: ' Item 2', price: 39.99, image: 'products images/blue-sky.jpg' },
        { id: 3, name: ' Item 3', price: 15.99, image: 'products images/pinksky.jpg' },
        { id: 4, name: ' Item 4', price: 30.99, image: 'products images/image.jpg' },
        { id: 5, name: ' Item 5', price: 21.99, image: 'products images/aesthetic idea.jpg' },
        { id: 6, name: ' Item 6', price: 19.99, image: 'products images/pic (1).jpg' },
        { id: 7, name: ' Item 8', price: 23.99, image: 'products images/screen.jpg' },
        { id: 8, name: ' Item 8', price: 38.99, image: 'products images/neon.jpg' },      
        { id: 9, name: ' Item 8', price: 14.99, image: 'products images/pexels.jpg' },
        // Add more product entries as needed
    ];

    displayProducts();
}
function displayProducts() {
    const container = document.getElementById('product-container');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-details">
                <div class="product-title">${product.name}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <button class="addtocart" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;

        container.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = getProductById(productId);

    if (product) {
        cart.push(product);
        updateCart();
    }
}

function getProductById(productId) {
    return products.find(product => product.id === productId);
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const cartTotal = document.getElementById('cart-total');

    cartList.innerHTML = '';

    let total = 0;

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="cart-item-info">
                <img class="cart-item-image" src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                </div>
                <button class="remove-item" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartList.appendChild(li);

        total += item.price;
    });

    cartTotal.textContent = `Total: $${total.toFixed(2)}`;

    openCart(); // Open the cart after adding an item
}

function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        cart.splice(index, 1);
        updateCart();
    }
}

function openCart() {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.style.display = 'block';
}

function closeCart() {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.style.display = 'none';
}

function checkout() {
    // Placeholder - You can replace this with your actual checkout logic
    alert('Checkout functionality is not implemented in this demo.');
}

