import React from 'react';
import { useCart } from './CartContext';

const products = [
  { title: 'Colors', price: 100, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png' },
  { title: 'Black and white Colors', price: 50, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png' },
  { title: 'Yellow and Black Colors', price: 70, imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png' },
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div style={styles.products}>
      {products.map(item => (
        <div key={item.title} style={styles.card}>
          <img src={item.imageUrl} alt={item.title} style={styles.img} />
          <h3>{item.title}</h3>
          <p>₹{item.price}</p>
          <button style={styles.btn} onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

const styles = {
  products: { display: 'flex', gap: 20, flexWrap: 'wrap', marginTop: 20 },
  card: { width: 180, border: '1px solid #ddd', padding: 12, borderRadius: 6, textAlign: 'center' },
  img: { width: '100%', borderRadius: 4 },
  btn: { background: '#007bff', color: '#fff', border: 'none', padding: '6px 12px', cursor: 'pointer', borderRadius: 4, marginTop: 8 },
};
