// ContactPage.js
import React, { useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        title: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data Submitted:', formData);
        // Handle form submission, e.g., send data to server or email
    };

    return (
        <div className="contact-page">
            <h1>Contact Me</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="phone">Phone (Optional)</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" value={formData.title} onChange={handleChange} required />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
                </div>

                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactPage;
