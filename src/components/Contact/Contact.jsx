import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you ${form.name}, we received your message!`);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Us</h2>
          <p>Welcome to <strong>EV-olution</strong> — your gateway to the future of transportation. We are dedicated to driving the electric vehicle revolution forward by providing the latest insights, reviews, and updates on EV technology, sustainability, and innovation. Whether you're a seasoned EV enthusiast or just starting your journey toward a cleaner, greener lifestyle, our platform offers in-depth resources to help you make informed decisions. From expert guides on charging infrastructure to comparisons of top EV models, EV-olution is here to empower you with knowledge and inspire change for a better tomorrow.</p>
          <div className="info-item">
            <div className="icon">🏠</div>
            <div>
              <h4>Address</h4>
              <p>4671 Sugar Camp Road,<br/>Owatonna, Minnesota,<br/>55060</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">📞</div>
            <div>
              <h4>Phone</h4>
              <p>561-456-2321</p>
            </div>
          </div>
          <div className="info-item">
            <div className="icon">✉️</div>
            <div>
              <h4>Email</h4>
              <p>example@email.com</p>
            </div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send Message</h3>
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Type your Message..." value={form.message} onChange={handleChange} required />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
