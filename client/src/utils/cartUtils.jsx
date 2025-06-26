import { toast } from "react-toastify";

const CART_KEY = "my-cart";

// Fatch from cart
export const getCart = () => {
  const stored = localStorage.getItem(CART_KEY);
  return stored ? JSON.parse(stored) : [];
};

// Save cart to local storage

const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

// add Product
export const addToCart = (product) => {
  const cart = getCart();
  const index = cart.findIndex((item) => item.id === product.id);

  if (index > -1) {
    cart[index].quantity += 1;
    toast.info(`Product exist, Increased quantity of ${product.name}`);
  } else {
    cart.push({ ...product, quantity: 1 });
    toast.success(`${product.name} added to cart!`);
  }

  saveCart(cart);
};
// Remove product from cart
export const removeFromCart = (productId) => {
  toast.success(`Product Remove from Cart`);
  const cart = getCart().filter((item) => item.id !== productId);
  saveCart(cart);
};

// Remove all product
export const RemoveAll = () => {
  localStorage.removeItem(CART_KEY);
};

export const incrementProduct = (productId) => {
  const cart = getCart();
  const index = cart.findIndex((item) => item.id === productId);

  if (index > -1) {
    if (cart[index].stock > 0) {
      cart[index].quantity += 1;
      cart[index].stock -= 1;
      toast.info(`Increased quantity of ${cart[index].name}`);
    } else {
      toast.error(`${cart[index].name} is out of stock`);
    }
    saveCart(cart);
  } else {
    toast.warn("Product not found in cart!");
  }
};

export const decrementProduct = (productId) => {
  const cart = getCart();
  const index = cart.findIndex((item) => item.id === productId);

  if (index > -1) {
    if (cart[index].quantity > 1) {
      cart[index].quantity -= 1;
      cart[index].stock += 1;
      toast.info(`Decreased quantity of ${cart[index].name}`);
    }
    saveCart(cart);
  } else {
    toast.warn("Product not found in cart!");
  }
};
