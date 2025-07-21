import React from 'react';

export default function ProductList({ products, addToCart }) {
  return (
    <div className="products">
      {products.map(p => (
        <div key={p.id} className="product-card">
          <h3>{p.title}</h3>
          <img src={p.imageUrl}/>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}
