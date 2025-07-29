import React from 'react';
import './Cart.css';

const Cart = ({ cartItems }) => {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-clean">
      <p className="cart-title">Your Cart</p>
      {cartItems.length === 0 ? (
        <p className="empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-lines">
            {cartItems.map((item, index) => (
              <p key={index}>• {item.name} - ${item.price.toFixed(2)}</p>
            ))}
            <br />
            <p className="total">Total: ${total.toFixed(2)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
