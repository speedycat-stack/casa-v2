import React, { createContext, useState, useContext, useEffect } from "react";

// Create the cart context
const CartContext = createContext();

// Custom hook to use the cart context
export const useCart = () => useContext(CartContext);

// Cart provider component
export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error("Error loading cart from localStorage:", error);
      return [];
    }
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  // Add item to cart
  const addToCart = (product) => {
    setCartItems((currentCart) => {
      const existingItemIndex = currentCart.findIndex(
        (item) => item.id === product.id
      );

      if (existingItemIndex !== -1) {
        // Item exists, update quantity
        const updatedCart = [...currentCart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          quantity: (updatedCart[existingItemIndex].quantity || 1) + 1,
        };
        return updatedCart;
      } else {
        // Item doesn't exist, add new item with quantity 1
        return [...currentCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Update item quantity in cart
  const updateQuantity = (productId, newQuantity) => {
    setCartItems((currentCart) => {
      if (newQuantity <= 0) {
        return removeFromCart(productId);
      }

      return currentCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  // Remove item from cart
  const removeFromCart = (productId) => {
    setCartItems((currentCart) =>
      currentCart.filter((item) => item.id !== productId)
    );
  };

  // Clear the entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Calculate cart total
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * (item.quantity || 1),
      0
    );
  };

  // Calculate cart items count
  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + (item.quantity || 1), 0);
  };

  // Context value to be provided
  const value = {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContext;
