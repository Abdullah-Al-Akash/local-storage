// Load Local Storage Cart Items:
const displayLocalStorageCart = () => {
        const cart = getCart();
        for (const name in cart) {
                displayProduct(name)
        }
}

const addToCart = () => {
        const nameField = document.getElementById('input-field');
        const name = nameField.value;
        // Display Product in UI
        if (!name) {
                return;
        }
        displayProduct(name);

        // Set Value in Session Storage:
        addProductToCart(name)

        nameField.value = '';
}

const displayProduct = (name) => {
        const products = document.getElementById('products');
        const li = document.createElement('li');
        li.innerText = name;
        products.appendChild(li);
}

const getCart = () => {
        const cart = localStorage.getItem('cart');
        let cartObj;
        if (cart) {
                cartObj = JSON.parse(cart);
        }
        else {
                cartObj = {};
        }
        return cartObj;
}

const addProductToCart = (name) => {
        const cart = getCart();
        if (cart[name]) {
                cart[name] = cart[name] + 1;
        }
        else {
                cart[name] = 1;
        }
        const cartStringified = JSON.stringify(cart);
        localStorage.setItem('cart', cartStringified);
}
// Call Display Cart Function for show Local Storage's Items:
displayLocalStorageCart();

// Place Order:
const placeOrder = () => {
        document.getElementById('products').textContent = '';
        localStorage.removeItem('cart');
}