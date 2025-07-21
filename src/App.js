import React, { useState } from 'react';
import { CartProvider } from './CartContext';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(prev => !prev);

  return (
    <CartProvider>
      <Header toggleCart={toggleCart} />
      <main style={{ padding: 20 }}>
        <ProductList />
        <Cart isOpen={isCartOpen} />
      </main>
    </CartProvider>
  );
}
