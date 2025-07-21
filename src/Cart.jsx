import React from 'react';
import { useCart } from './CartContext';

export default function Cart({ isOpen }) {
  const { cart, removeFromCart } = useCart();

  if (!isOpen) return null;

  return (
    <div style={styles.container}>
      <h2>Your Cart</h2>
      {cart.length === 0 && <p>Cart is empty!</p>}
      {cart.map(item => (
        <div key={item.title} style={styles.item}>
          <img src={item.imageUrl} alt={item.title} style={styles.img} />
          <div>
            <h4>{item.title}</h4>
            <p>Qty: {item.quantity}</p>
            <p>Price: ₹{item.price}</p>
          </div>
          <button onClick={() => removeFromCart(item.title)} style={styles.btn}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: { position: 'fixed', right: 20, top: 80, background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.2)', width: 300, maxHeight: '70vh', overflowY: 'auto' },
  item: { display: 'flex', alignItems: 'center', marginBottom: 12, borderBottom: '1px solid #ccc', paddingBottom: 12 },
  img: { width: 60, marginRight: 12 },
  btn: { marginLeft: 'auto', background: '#dc3545', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: 4, cursor: 'pointer' },
};
