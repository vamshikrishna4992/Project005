import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">Awan Bongsu</h3>
          <p className="text-sm text-gray-400">
            We provide digital solutions that make your brand stand out.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-xl font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#home" className="hover:underline">Home</a></li>
            <li><a href="#about" className="hover:underline">About</a></li>
            <li><a href="#services" className="hover:underline">Services</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-bold mb-3">Contact Us</h3>
          <p className="text-sm text-gray-400">Email: contact@awanbongsu.com</p>
          <p className="text-sm text-gray-400">Phone: +123 456 7890</p>
          <p className="text-sm text-gray-400">Location: Kuala Lumpur, Malaysia</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Awan Bongsu. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
