// This is the boilerplate code given for you
// You can modify this code
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

 let cart = JSON.parse(sessionStorage.getItem('cart')) || [];


// DOM elements
const productList = document.getElementById("product-list");
let cartList = document.getElementById("cart-list");
const clearList = document.getElementById("clear-cart-btn");

// Render product list
function renderProducts() {
  products.forEach((product) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.name} - $${product.price} <button class="add-to-cart-btn" onclick="addToCart(${product.id})" data-id="${product.id}">Add to Cart</button>`;
    productList.appendChild(li);
  });
}

// Render cart list
function renderCart() {
	cartList.innerHTML = "";	
	cart.forEach((list)=>{
		const listItem = document.createElement("li");
		listItem.innerHTML = `${list.name} - $${list.price} <button onclick="removeFromCart(${list.id})">Remove Item</button>`;
		cartList.appendChild(listItem);
	});	
}

// Add item to cart
function addToCart(productId) {
	products.forEach((product)=>{
		if(product.id === productId){
			 cart.push(product);
		     sessionStorage.setItem('cart', JSON.stringify(cart));
		}
	});
	renderCart();
}


// Remove item from cart
	console.log(cart);
function removeFromCart(productId) {
  	
	const indexToRemove = cart.findIndex(product => product.id === productId);
	if (indexToRemove !== -1) {
	  cart.splice(indexToRemove, 1);
	}
	
	sessionStorage.setItem('cart', JSON.stringify(cart));
	renderCart();
}

clearList.addEventListener("click",clearCart);

// Clear cart
function clearCart() {
	sessionStorage.clear();
	cartList.innerHTML = "";
	cart = [];
}

// Initial render
renderProducts();
renderCart();
