document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    const cartItemCount = document.querySelector('.cart span');
    const cartItemList = document.querySelector('.cart-tems'); // Fixed class here
    const cartTotal = document.querySelector('.cart-total');
    const cartIcon = document.querySelector('.cart');
    const sidebar = document.getElementById('sidebar'); // Fixed here

    let cartItems = [];
    let totalAmount = 0;

    addToCartButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const itemName = document.querySelectorAll('.product-box h3')[index].textContent;
            const itemPriceText = document.querySelectorAll('.price')[index].textContent.trim();
            
            // Remove the currency symbol and spaces, parse as float
            const itemPrice = parseFloat(itemPriceText.replace(/[^\d.-]/g, ''));

            // Ensure itemPrice is a valid number
            if (isNaN(itemPrice)) {
                console.error('Invalid price:', itemPriceText);
                return;
            }

            const item = {
                name: itemName,
                price: itemPrice,
                quantity: 1
            };

            const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
            if (existingItem) {
                existingItem.quantity++;
            } else {
                cartItems.push(item);
            }

            totalAmount += itemPrice; // Add the price to totalAmount
            updateCartUI();
        });
    });

    function updateCartUI() {
        updateCartItemCount(cartItems.length);
        updateCartItemList();
        updateCartTotal();
    }

    function updateCartItemCount(count) {
        cartItemCount.textContent = count;
    }

    function updateCartItemList() {
        cartItemList.innerHTML = '';
        cartItems.forEach(item => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item', 'individual-cart-item');
            cartItem.innerHTML = `
                <span>(${item.quantity}x) ${item.name}</span>
                <span class="cart-item-price">${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-btn" data-index="${cartItems.indexOf(item)}"><i class="fa-solid fa-times"></i></button>
            `;
            cartItemList.append(cartItem);
        });
        const removeButtons = document.querySelectorAll('.remove-btn');
        removeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.dataset.index;
                removeItemFromCart(index);
            });
        });
    }

    function removeItemFromCart(index) {
        const removeItem = cartItems.splice(index, 1)[0];
        totalAmount -= removeItem.price * removeItem.quantity;
        updateCartUI();
    }

    function updateCartTotal() {
        cartTotal.textContent = `रू${totalAmount.toFixed(2)}`;
    }

    cartIcon.addEventListener('click', () => {
        sidebar.classList.toggle('open');
    });

    const closeButton = document.querySelector('.sidebar-close');
    closeButton.addEventListener('click', () => {
        sidebar.classList.remove('open');
    });
});