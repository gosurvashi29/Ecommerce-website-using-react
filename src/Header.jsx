import React from 'react';
import { useCart } from './CartContext';

export default function Header({ toggleCart }) {
  const { cart } = useCart();
  return (
    <header style={styles.header}>
      <h1>My Store</h1>
      <div style={styles.icon} onClick={toggleCart}>
        🛒 {cart.reduce((acc, item) => acc + item.quantity, 0)}
      </div>
    </header>
  );
}

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', padding: '12px 20px', background: '#007bff', color: '#fff' },
  icon: { cursor: 'pointer', fontSize: '1.2rem' },
};
