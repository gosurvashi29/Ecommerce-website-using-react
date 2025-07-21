import React from 'react';
import { useCart } from './CartContext';
import { NavLink } from 'react-router-dom';
export default function Header({ toggleCart }) {
  const { cart } = useCart();
  return (
    <header style={styles.header}>
      <h1>My Store</h1>
      <div style={styles.icon} onClick={toggleCart}>
        🛒 {cart.reduce((acc, item) => acc + item.quantity, 0)}
      </div>
      <nav style={styles.nav}>
        <NavLink to="/" style={styles.link} end>Home</NavLink>
        <NavLink to="/about" style={styles.link}>About</NavLink>
      </nav>
    </header>
  );
}

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', padding: '12px 20px', background: '#007bff', color: '#fff' },
  icon: { cursor: 'pointer', fontSize: '1.2rem' },
};


  