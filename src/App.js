import React, { useState } from 'react';
import { CartProvider } from './CartContext';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header      from './Header';
import ProductList from './ProductList';
import Cart        from './Cart';
import About       from './About';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  return (
    <CartProvider>
      <Router>
        <Header toggleCart={toggleCart} />
        <main style={{ padding: 20 }}>
          {isCartOpen && <Cart isOpen={isCartOpen} />}  {/* only show cart when toggled */}

          <Routes>
            <Route path="/"        element={<ProductList />} />
            <Route path="/about"   element={<About />} />
            <Route path="*"        element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}
