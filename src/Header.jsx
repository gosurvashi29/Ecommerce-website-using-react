import React from 'react';

export default function Header({ count }) {
  return (
    <header className="header">
      <h1>My Store</h1>
      <div className="cart-info">Cart: {count}</div>
    </header>
  );
}
