// src/Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCart } from './CartContext';

export default function Header({ toggleCart }) {
  const { cart } = useCart();
  const totalQty = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <header style={styles.header}>
      <nav>
        <NavLink to="/"      style={styles.link} end>Home</NavLink>
        <NavLink to="/products" style={styles.link}>Products</NavLink>
        <NavLink to="/about" style={styles.link}>About</NavLink>
      </nav>
      <span onClick={toggleCart} style={styles.cart}>🛒 {totalQty}</span>
    </header>
  );
}

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', background: '#007bff', padding: '12px 20px', color: '#fff' },
  link:   ({ isActive }) => ({
    marginRight: '16px',
    color: '#fff',
    fontWeight: isActive ? 'bold' : 'normal',
    textDecoration: 'none'
  }),
  cart: { cursor: 'pointer' }
};
