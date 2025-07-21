import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Header      from './Header';
import ProductList from './ProductList';
import CartPage    from './Cart';
import About       from './About';
import Home        from './Home';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  return (
    <CartProvider>
      <Router>
        <Header toggleCart={toggleCart} />

        <main style={{ padding: 20 }}>
          {isCartOpen && <CartPage isOpen={isCartOpen} />}

          <Routes>
            <Route path="/"        element={<Home />} />
            <Route path="/about"   element={<About />} />
            <Route path="/products"element={<ProductList />} />
            <Route path="*"        element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </Router>
    </CartProvider>
  );
}
