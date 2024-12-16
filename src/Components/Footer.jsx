import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 px-4 w-full">
      {/* Row 1: Policies and Information Links */}
      <div className="flex justify-around flex-wrap text-sm mb-2">
        <a href="/privacy-policy" className="hover:underline">Privacy Policy</a>
        <a href="/cookies-policy" className="hover:underline">Cookies Policy</a>
        <a href="/terms-conditions" className="hover:underline">Terms & Conditions</a>
        <a href="/return-refund" className="hover:underline">Return & Refund Policy</a>
        <a href="/shipping-policy" className="hover:underline">Shipping Policy</a>
        <a href="/contact" className="hover:underline">Contact Us</a>
        <a href="/about" className="hover:underline">About Us</a>
      </div>

      {/* Row 2: Additional Information */}
      <div className="flex justify-center items-center text-xs mb-2">
        <span className="mx-2">PAYMENT METHODS: Visa, MasterCard, PayPal</span>
        <span className="mx-2">BUY WITH CONFIDENCE</span>
        <span className="mx-2">OUR DELIVERY PARTNERS: FedEx, UPS, DHL</span>
      </div>

      {/* Row 3: Copyright */}
      <div className="text-center text-xs">
        &copy; 2024 mensfashionn.com - All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
