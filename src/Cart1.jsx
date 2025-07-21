import React from 'react';

export default function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? <p>Cart is empty</p> :
        <ul>
          {cart.map((item, idx) => (
            <li key={idx}>
              {item.name} - ₹{item.price}
              <button onClick={() => removeFromCart(idx)}>Remove</button>
            </li>
          ))}
        </ul>
      }
      {cart.length > 0 && <div className="total">Total: ₹{total}</div>}
    </div>
  );
}
