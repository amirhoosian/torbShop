export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

export function getCartFromStorage(): CartItem[] {
  // Get cart items from localStorage
  if (typeof window === "undefined") return [];

  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

export function saveCartToStorage(cart: CartItem[]): void {
  // Save cart items to localStorage
  if (typeof window === "undefined") return;

  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(product: any): CartItem[] {
  // Add item to cart or increment quantity if exists
  const cart = getCartFromStorage();
  const existingItemIndex = cart.findIndex((item) => item.id === product.id);

  if (existingItemIndex > -1) {
    cart[existingItemIndex].quantity += 1;
  } else {
    cart.push({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  saveCartToStorage(cart);
  return cart;
}

export function removeFromCart(productId: number): CartItem[] {
  // Remove item from cart
  const cart = getCartFromStorage();
  const updatedCart = cart.filter((item) => item.id !== productId);

  saveCartToStorage(updatedCart);
  return updatedCart;
}

export function updateCartItemQuantity(
  productId: number,
  quantity: number,
): CartItem[] {
  // Update item quantity or remove if quantity is 0
  if (quantity <= 0) {
    return removeFromCart(productId);
  }

  const cart = getCartFromStorage();
  const updatedCart = cart.map((item) =>
    item.id === productId ? { ...item, quantity } : item,
  );

  saveCartToStorage(updatedCart);
  return updatedCart;
}

export function clearCart(): void {
  // Clear all items from cart
  if (typeof window === "undefined") return;

  localStorage.removeItem("cart");
}

export function getCartTotal(): number {
  // Calculate total price of all items in cart
  const cart = getCartFromStorage();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

export function getCartItemsCount(): number {
  // Get total number of items in cart
  const cart = getCartFromStorage();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

export function isItemInCart(productId: number): boolean {
  // Check if item exists in cart
  const cart = getCartFromStorage();
  return cart.some((item) => item.id === productId);
}
