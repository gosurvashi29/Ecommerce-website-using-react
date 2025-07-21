import React, { useState } from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Cart from './Cart';

export default function App() {
  const [cart, setCart] = useState([]);
  const products = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

},

{

title: 'Blue Color',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

}

]

  const addToCart = product => {
    setCart(prev => [...prev, product]);
  };

  const removeFromCart = index => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header count={cart.length} />
      <div className="main">
        <ProductList products={products} addToCart={addToCart} />
        <Cart cart={cart} removeFromCart={removeFromCart} />
      </div>
    </div>
  );
}
