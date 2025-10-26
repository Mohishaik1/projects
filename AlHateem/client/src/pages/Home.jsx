import { Link } from "react-router-dom";
import { useState } from "react";
import ImageSlider from "../components/ImageSlider";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Register } from "./index";

// Import local images
import kaaba1 from "../assets/Images/HeroImages/Kabaa 1.jpg";
import kaaba2 from "../assets/Images/HeroImages/Kaaba 2.jpg";
import kaaba3 from "../assets/Images/HeroImages/Kaaba 3.jpg";
import madina1 from "../assets/Images/HeroImages/Madina 1.jpg";
import madina3 from "../assets/Images/HeroImages/Madina 3.jpg";

// Local videos
import hero from "../assets/videos/hero.mp4";

function Home() {
  // Mobile menu state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Local images for the slider, can be changed if needed.
  const sliderImages = [
    {
      src: kaaba1,
      alt: "Kaaba at day",
      caption: "Sacred Journey to Mecca",
      description:
        "Experience the spiritual journey of Hajj and Umrah with Al-Hateem",
    },
    {
      src: kaaba2,
      alt: "Kaaba view",
      caption: "The Holy Kaaba",
      description:
        "The most sacred site in Islam, the direction of prayer for Muslims worldwide",
    },
    {
      src: madina1,
      alt: "Prophet's Mosque",
      caption: "Visit the Prophet's Mosque",
      description: "Pay your respects at the Prophet's Mosque in Medina",
    },
    // {
    //   src: madina2,
    //   alt: "Medina Mosque",
    //   caption: "Beautiful Medina",
    //   description: "Experience the peace and tranquility of the Prophet's city"
    // },
    {
      src: kaaba3,
      alt: "Kaaba architecture",
      caption: "Islamic Heritage",
      description: "Discover the beautiful Islamic architecture and heritage",
    },
    {
      src: madina3,
      alt: "Medina landscape",
      caption: "Spiritual Journey",
      description: "Embark on a journey of faith and spiritual growth",
    },
  ];

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        @keyframes sparkle {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
      `}</style>
      
      <div className="min-h-screen bg-white font-extrabold">
        {/* Modern Navigation */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-white-200 opacity-80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 via-emerald-400 to-green-700 rounded-lg flex items-center justify-center animate-pulse shadow-lg shadow-green-500/50">
                  <span className="text-white font-bold text-lg">AH</span>
                </div>
              </div>
              <div className="ml-3 relative">
                <h1 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-400 via-yellow-400 to-green-600 drop-shadow-sm"
                    style={{
                      backgroundSize: '200% auto',
                      animation: 'shimmer 3s linear infinite'
                    }}>
                  Al-Hateem Haj-Umrah
                </h1>
                {/* Sparkle effect */}
                <span className="absolute top-0 left-0 w-full h-full pointer-events-none"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.8) 50%, transparent 100%)',
                        backgroundSize: '200% 100%',
                        animation: 'shimmer 2s ease-in-out infinite',
                        mixBlendMode: 'overlay'
                      }}>
                </span>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link
                  to="/"
                  className="text-black-700 hover:text-green-600 hover:bg-black px-3 py-2 rounded-md text-sm font-extrabold transition-colors duration-200"
                >
                  Home
                </Link>
                <Link
                  to="/packages"
                  className="text-black-700 hover:text-green-600 hover:bg-black px-3 py-2 rounded-md text-sm font-extrabold transition-colors duration-200"
                >
                  Packages
                </Link>
                <Link
                  to="/contact"
                  className="text-black-700 hover:text-green-600 hover:bg-black px-3 py-2 rounded-md text-sm font-extrabold transition-colors duration-200"
                >
                  Contact
                </Link>
                <Link
                  to="/login"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 shadow-md hover:shadow-lg"
                >
                  Admin Login
                </Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-green-600 focus:outline-none focus:text-green-600"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
                <Link
                  to="/"
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/packages"
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Packages
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-700 hover:text-green-600 block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
                <Link
                  to="/login"
                  className="bg-green-600 hover:bg-green-700 text-white block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 mt-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Admin Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section with Image Slider */}
      <section className="relative">
        <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <ImageSlider
            images={sliderImages}
            autoPlay={true}
            interval={5000}
          />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Experience The Journey Of a Lifetime
              <span className="text-4xl ml-2">💫</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Embark on a spiritual journey to the holy lands of Mecca and Medina with our expertly crafted Hajj and Umrah packages. We provide comprehensive services to make your pilgrimage comfortable and meaningful.
            </p>
          </div>

          {/* Video Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="aspect-video">
                <video 
                  src={hero} 
                  controls 
                  controlsList="nodownload noplaybackrate"
                  disablePictureInPicture
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full h-full object-cover"
                  poster={kaaba1}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Al-Hateem?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive services to make your spiritual journey comfortable and memorable
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Expert Guidance</h2>
              <p className="text-gray-600 leading-relaxed">
                Our experienced Islamic scholars and Hajj guides accompany you throughout your journey, ensuring proper rituals and spiritual fulfillment. We provide comprehensive guidance for all Hajj and Umrah rites.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Accommodation</h3>
              <p className="text-gray-600 leading-relaxed">
                Comfortable hotels near the holy sites with modern amenities, ensuring your rest and comfort during the pilgrimage.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">24/7 Support</h3>
              <p className="text-gray-600 leading-relaxed">
                Round-the-clock assistance and support throughout your journey, ensuring peace of mind for you and your family.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Begin Your Spiritual Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of pilgrims who have trusted Al-Hateem for their Hajj and Umrah journeys
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/packages"
              className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              View Packages
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-green-600 to-green-700 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">AH</span>
                </div>
                <h3 className="text-xl font-bold">Al-Hateem Haj-Umrah</h3>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Your trusted partner for Hajj and Umrah journeys. We provide comprehensive services to make your spiritual journey comfortable and meaningful.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
                <li><Link to="/packages" className="text-gray-400 hover:text-white transition-colors">Packages</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
                {/* <li><Link to="/register" className="text-gray-400 hover:text-white transition-colors">Book Now</Link></li> */}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 alhateem.vja@gmail.com</p>
                <p>📞 +91 9908667187</p>
                <p>📍 Vijayawada, Andhra Pradesh</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Al-Hateem Haj-Umrah. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default Home;
