import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

        {/* Left Section - IEEE Logo & About */}
        <div className="text-left space-y-3">
          <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer">
            <img src="/ieee-logo.svg" alt="IEEE Logo" className="h-12 mb-3" />
          </a>
          <p className="text-sm leading-relaxed">
            IEEE Student Branch, MIT Bengaluru — Inspiring innovation and technology for a better future.
          </p>
          <p className="text-sm">
            📍 4HGR+26X, BSF Campus, Yelahanka Airforce Base, Bengaluru, Manchenahalli, Karnataka 560064
          </p>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="text-center space-y-3">
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
            <li><a href="/events" className="hover:text-white transition">Events</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Right Section - Social Links */}
        <div className="text-right space-y-3">
          <h4 className="text-lg font-semibold text-white">Follow Us</h4>
          <div className="flex justify-end space-x-4 text-xl">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400 transition">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="mailto:ieee@mitb.ac.in" className="hover:text-yellow-400 transition">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; 2025 IEEE MIT Bengaluru. All rights reserved. | Made with ❤️ by <a href='https://www.linkedin.com/in/adityasinha2006/' className="hover:text-amber-50" target="_blank" rel="noopener noreferrer">Aditya Sinha</a>.
      </div>
    </footer>
  );
}
