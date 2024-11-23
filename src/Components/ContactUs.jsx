import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate form
    let errors = { name: '', email: '', message: '' };
    if (!formData.name) errors.name = 'Full Name is required.';
    if (!formData.email) errors.email = 'Email is required.';
    if (!formData.message) errors.message = 'Message is required.';

    setFormErrors(errors);

    // Check if there are no errors
    if (!errors.name && !errors.email && !errors.message) {
      setIsSubmitted(true);
    }
  };

  // Navigate to home page after 1 minute (60,000 ms) of showing the thank you message
  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        navigate('/'); // Navigate to home page
      }, 10000); // 1 minute (60,000 ms)

      return () => clearTimeout(timer); // Clean up timer if the component unmounts
    }
  }, [isSubmitted, navigate]);

  return (
    <div
      id="contact"
      className={`flex items-center justify-center min-h-screen ${
        isSubmitted ? 'bg-black' : 'bg-gray-100'
      } relative`}
    >
      {/* Background Image with Blur and Overlay */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-blur bg-opacity-5">

        </div>

      {/* Form Content */}
      <div className="relative z-10 w-full max-w-md p-8 bg-white rounded-lg shadow-lg mt-10">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">Contact Us</h2>

            {/* Name Field */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm">{formErrors.name}</p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              {formErrors.email && (
                <p className="text-red-500 text-sm">{formErrors.email}</p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-2 border border-gray-300 rounded mt-1"
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm">{formErrors.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded mt-4 hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        ) : (
          <div className="text-center text-black font-bold">
            <h2 className="text-3xl font-bold mb-4">Thank you!</h2>
            <p className="text-lg">We will get back to you soon.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
