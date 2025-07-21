import React, { useState } from 'react';

// Hardcoded cart data
const initialCart = [
  { title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png', quantity: 2 },
  { title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png', quantity: 3 },
  { title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png', quantity: 1 }
];
const headerStyle = { display: 'flex', justifyContent: 'space-between', padding: '10px 20px', background: '#007bff', color: '#fff' };
const iconWrapper = { cursor: 'pointer' };
const cartStyle = { padding: '20px', background: '#fff', boxShadow: '0 2px 6px rgba(0,0,0,0.1)', maxWidth: '600px', margin: '20px auto' };
const itemStyle = { display: 'flex', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid #ddd', paddingBottom: '10px' };
const imgStyle = { width: '60px', height: '60px', objectFit: 'cover', marginRight: '15px' };
const btnStyle = { marginLeft: 'auto', padding: '6px 12px', background: '#dc3545', color: '#fff', border: 'none', borderRadius: '4px' };

export default function Cart() {
  const [cart, setCart] = useState(initialCart);
  const [isOpen, setIsOpen] = useState(false);

  const removeItem = index => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <>
      <header style={headerStyle}>
        <h1>My Store</h1>
        <div style={iconWrapper} onClick={() => setIsOpen(!isOpen)}>
          🛒 <span>{cart.length}</span>
        </div>
      </header>

      {isOpen && (
        <div style={cartStyle}>
          {cart.map((item, idx) => (
            <div key={idx} style={itemStyle}>
              <img src={item.imageUrl} alt={item.title} style={imgStyle} />
              <div>
                <h3>{item.title}</h3>
                <p>Qty: {item.quantity}</p>
                <p>Price: ₹{item.price}</p>
              </div>
              <button onClick={() => removeItem(idx)} style={btnStyle}>Remove</button>
            </div>
          ))}
          {cart.length === 0 && <p>Your cart is empty!</p>}
        </div>
      )}
    </>
  );
}
