/* document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the cart items and total price from localStorage
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const totalPrice = localStorage.getItem("totalPrice");

    // Display cart items
    const cartItemsContainer = document.querySelector(".cart-items");
    let itemsHTML = '';
    cartItems.forEach(item => {
        if (item && item.quantity > 0) {
            itemsHTML += `
                <div class="cart-item">
                    <img src="img/${item.images}" alt="${item.name}">
                    <div class="item-details">
                        <div class="item-name">${item.name}</div>
                        <div class="item-quantity">Quantity: ${item.quantity}</div>
                        <div class="item-price">P${item.price.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</div>
                    </div>
                </div>
            `;
        }
    });
    cartItemsContainer.innerHTML = itemsHTML;

    // Display total price
    const totalPriceContainer = document.querySelector(".total-price");
    totalPriceContainer.innerHTML = `<h2>Total: P${parseFloat(totalPrice).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</h2>`;

    // Add functionality to confirm purchase
    document.getElementById("confirmPurchase").addEventListener("click", () => {
        alert("Thank you for your purchase!");
        // Clear the cart after purchase
        localStorage.removeItem("cartItems");
        localStorage.removeItem("totalPrice");
        // Optionally redirect to a thank-you page
        window.location.href = "thankyou.html"; // Replace with your thank you page
    });
}); */