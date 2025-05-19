import React from "react";
import { useNavigate } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import { useCart } from "../contexts/CartContext";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart } = useCart();

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <div className="page-container">
      <Cart
        cartItems={cartItems}
        updateQuantity={updateQuantity}
        removeItem={removeFromCart}
        checkout={handleCheckout}
      />
    </div>
  );
};

export default CartPage;
