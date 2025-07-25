import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

const products = [
  {
    id: 'p1',
    title: 'Colors',
    price: 100,
    description: 'A collection of vibrant colors.',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      'https://via.placeholder.com/150/0000FF',
    ],
    reviews: ['Amazing colors!', 'Bright and smooth.'],
  },
  {
    id: 'p2',
    title: 'Black and White Colors',
    price: 50,
    description: 'Classic black and white shades.',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      'https://via.placeholder.com/150/222222',
    ],
    reviews: ['Great combo!', 'Elegant and timeless.'],
  },
  {
    id: 'p3',
    title: 'Yellow and Black Colors',
    price: 70,
    description: 'Bold yellow with contrasting black.',
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    images: [
      'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      'https://via.placeholder.com/150/FFFF00',
    ],
    reviews: ['Stylish colors!', 'Loved the contrast.'],
  },
];

export default function ProductList() {
  const { addToCart } = useCart();

  return (
    <div style={styles.products}>
      {products.map(item => (
        <div key={item.id} style={styles.card}>
          <Link to={`/products/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <img src={item.imageUrl} alt={item.title} style={styles.img} />
            <h3>{item.title}</h3>
          </Link>
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
  card: {
    width: 180,
    border: '1px solid #ddd',
    padding: 12,
    borderRadius: 6,
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease',
  },
  img: { width: '100%', borderRadius: 4, height: 150, objectFit: 'cover' },
  btn: {
    background: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    cursor: 'pointer',
    borderRadius: 4,
    marginTop: 8,
  },
};
