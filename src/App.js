import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { CartProvider } from './CartContext';
import Header from './Header';
import ProductList from './ProductList';
import CartPage from './Cart';
import About from './About';
import Home from './Home';
import ContactUs from './ContactUs';
import ProductDetails from './ProductDetails';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const toggleCart = () => setIsCartOpen(prev => !prev);

  return (
    <CartProvider>
      <Router>
        <Header toggleCart={toggleCart} />

        <main style={{ padding: 20 }}>
          {isCartOpen && <CartPage isOpen={isCartOpen} />}

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/products" component={ProductList} />
            <Route path="/products/:productId" component={ProductDetails} />
            <Route path="/contact" component={ContactUs} />
            <Redirect to="/" />
          </Switch>
        </main>
      </Router>
    </CartProvider>
  );
}
