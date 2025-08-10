import React from 'react';
import './components_css/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        {/* Left Section */}
        <div className="footer-section about">
          <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
            <img src="/ieee-logo.svg" alt="IEEE Logo" className="footer-logo" />
          </a>
          <p>
            IEEE Student Branch, MIT Bengaluru — Inspiring innovation and technology for a better future.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:ieee@mitb.ac.in" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="footer-bottom">
        <span>&copy; 2025 IEEE MIT Bengaluru. All rights reserved.</span>
        <span className="divider"> | </span>
        <span>Made with <span role="img" aria-label="love">❤️</span> by the IEEE Student Branch Team.</span>
      </div>
    </footer>
  );
}
