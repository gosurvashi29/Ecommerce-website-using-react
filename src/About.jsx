import React from 'react';

export default function About() {
  return (
    <div style={styles.container}>
      <h2>About Us</h2>
      <p>Welcome to My Store! We’re passionate about quality products and awesome customer experience.</p>
      <p>Built with React, React Router, and love. Visit our homepage to shop now!</p>
    </div>
  );
}

const styles = {
  container: { position: 'fixed', right: 20, top: 80, background: '#fff', padding: 20, borderRadius: 8, boxShadow: '0 2px 8px rgba(0,0,0,0.2)', width: 300, maxHeight: '70vh', overflowY: 'auto' },
  item: { display: 'flex', alignItems: 'center', marginBottom: 12, borderBottom: '1px solid #ccc', paddingBottom: 12 },
  img: { width: 60, marginRight: 12 },
  btn: { marginLeft: 'auto', background: '#dc3545', color: '#fff', border: 'none', padding: '4px 8px', borderRadius: 4, cursor: 'pointer' },
};