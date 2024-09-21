let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    totalPrice += productPrice;
    displayCart();
}

function displayCart() {
    const cartItemsDiv = document.getElementById("cart-items");
    const totalPriceSpan = document.getElementById("total-price");
    
    cartItemsDiv.innerHTML = "";
    cart.forEach(item => {
        cartItemsDiv.innerHTML += `<p>${item.name}: $${item.price}</p>`;
    });
    
    totalPriceSpan.textContent = totalPrice;
}
const products = [
    { name: 'Classic T-shirt', price: 20, element: document.querySelector('.product:nth-child(1)') },
    { name: 'Denim Jeans', price: 45, element: document.querySelector('.product:nth-child(2)') },
    { name: 'Leather Jacket', price: 90, element: document.querySelector('.product:nth-child(3)') },
    { name: 'Casual Hoodie', price: 35, element: document.querySelector('.product:nth-child(4)') },
    { name: 'Summer Shorts for Men', price: 55, element: document.querySelector('.product:nth-child(5)') },
    { name: 'Down shoulder t-shirt for Men', price: 25, element: document.querySelector('.product:nth-child(6)') },
    { name: 'Formal Shirt', price: 30, element: document.querySelector('.product:nth-child(7)') },
    { name: 'Men black t-shirt', price: 40, element: document.querySelector('.product:nth-child(8)') },
];

// Function to filter products based on price range
function filterProducts() {
    const priceFilter = document.getElementById('filter-price').value;
    products.forEach(product => {
        product.element.style.display = 'block'; // Show all initially
        if (priceFilter === '0-20' && product.price > 20) {
            product.element.style.display = 'none';
        } else if (priceFilter === '21-50' && (product.price < 21 || product.price > 50)) {
            product.element.style.display = 'none';
        } else if (priceFilter === '51-100' && (product.price < 51 || product.price > 100)) {
            product.element.style.display = 'none';
        }
    });
}

// Function to sort products based on selected criteria
function sortProducts() {
    const sortOption = document.getElementById('sort-options').value;
    const productList = document.querySelector('.product-list');

    let sortedProducts;
    if (sortOption === 'price-asc') {
        sortedProducts = [...products].sort((a, b) => a.price - b.price);
    } else if (sortOption === 'price-desc') {
        sortedProducts = [...products].sort((a, b) => b.price - a.price);
    } else if (sortOption === 'name-asc') {
        sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name-desc') {
        sortedProducts = [...products].sort((a, b) => b.name.localeCompare(a.name));
    } else {
        sortedProducts = products; // Default order
    }

    // Reorder the products in the DOM
    productList.innerHTML = ''; // Clear the list
    sortedProducts.forEach(product => {
        productList.appendChild(product.element); // Re-add products in sorted order
    });
}
document.querySelectorAll('.product img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.2)';
    });
    
    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
    });
});

