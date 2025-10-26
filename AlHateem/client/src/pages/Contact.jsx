import { useState } from 'react';
import axios from 'axios';

const Contact = () => {
  const [contactData, setContactData] = useState({
    fName: '',
    phone: '',
    city: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const onChangeHandler = (e) => {
    try {
    setContactData({
      ...contactData,
      [e.target.name]: e.target.value
      });
  } catch (error) {
      console.log(error);
  }
  };

  const onSubmitHandler = async (e) => {
  try {
    e.preventDefault();
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      const { data } = await axios.post('http://localhost:5500/api/user/contact', contactData);
    console.log(data);
      
      setSubmitStatus('success');
      setContactData({ fName: '', phone: '', city: '' });
      
      setTimeout(() => setSubmitStatus(null), 5000);
  } catch (error) {
      console.log(error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-blue-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Have questions about our Hajj and Umrah packages? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        {/* Contact Form Card */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:shadow-3xl">
          <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-2">Contact Our Team</h2>
            <p className="text-green-100">Fill in the form below and we'll get back to you shortly</p>
          </div>

          <form onSubmit={onSubmitHandler} className="p-8 md:p-12 space-y-8">
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg animate-fade-in">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-green-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-green-800 font-semibold">Thank you! Your message has been sent successfully.</p>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg animate-fade-in">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-red-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-red-800 font-semibold">Oops! Something went wrong. Please try again.</p>
                </div>
              </div>
            )}

            {/* Full Name Field */}
            <div className="relative">
              <label htmlFor="fName" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                Full Name
              </label>
              <input
                type="text"
                id="fName"
                name="fName"
                value={contactData.fName}
                onChange={onChangeHandler}
                required
                placeholder="Enter your full name"
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-gray-700 placeholder-gray-400 hover:border-green-300"
              />
            </div>

            {/* Phone Field */}
            <div className="relative">
              <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={contactData.phone}
                onChange={onChangeHandler}
                required
                placeholder="Enter your phone number"
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-gray-700 placeholder-gray-400 hover:border-green-300"
              />
            </div>

            {/* City Field */}
            <div className="relative">
              <label htmlFor="city" className="block text-sm font-bold text-gray-700 mb-2 flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                City
              </label>
              <input
                type="text"
                id="city"
                name="city"
                value={contactData.city}
                onChange={onChangeHandler}
                required
                placeholder="Enter your city"
                className="w-full px-5 py-4 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-300 text-gray-700 placeholder-gray-400 hover:border-green-300"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-3 ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </>
              )}
            </button>
        </form>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Email</h3>
            <p className="text-gray-600 text-sm">alhateem.vja@gmail.com</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Phone</h3>
            <p className="text-gray-600 text-sm">+91 9908667187</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-800 mb-2">Location</h3>
            <p className="text-gray-600 text-sm">Vijayawada, Andhra Pradesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;