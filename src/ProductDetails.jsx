import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';

const DUMMY_PRODUCTS = [
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


export default function ProductDetails() {
  const { productId } = useParams();
  const product = DUMMY_PRODUCTS.find(p => p.id === productId);

  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <p><strong>Price:</strong> ₹{product.price}</p>
      <p>{product.description}</p>

      <div className="image-gallery">
        {product.images.map((url, index) => (
          <img key={index} src={url} alt={`img-${index}`} className="zoom-img" />
        ))}
      </div>

      <div className="reviews">
        <h3>Customer Reviews</h3>
        <ul>
          {product.reviews.map((rev, i) => (
            <li key={i}>⭐ {rev}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
