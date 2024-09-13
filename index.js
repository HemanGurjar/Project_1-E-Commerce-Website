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
