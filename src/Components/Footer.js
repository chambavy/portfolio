// Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2024  All rights reserved.</p>
                <div className="social-links">
                    <a href="https://github.com/username" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/username/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer">Twitter</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
