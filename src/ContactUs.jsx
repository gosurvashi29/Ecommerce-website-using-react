import React, { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://ecommerce-contact-6b6c1-default-rtdb.firebaseio.com/', {
        method: 'POST',
        body: JSON.stringify(formData),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) throw new Error('Something went wrong!');
      alert('Message sent!');
      setFormData({ name: '', email: '', phone: '' });
    } catch (error) {
      alert('Failed to send message');
    }

    setIsSubmitting(false);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required /><br />
        <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required /><br />
        <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required /><br />
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>
      </form>
    </div>
  );
}
