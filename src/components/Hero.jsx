import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative h-screen bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white mb-6"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            Flavors for Every Occasion
          </h1>
          {/* <p className="text-xl text-white mb-8">
            Where Taste Meets Art
          </p> */}
          <p className="text-xl text-white mb-8">
            Exquisite catering services that elevate your special events with unforgettable culinary experiences.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
            <Link 
              to="/menu" 
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-md font-medium transition-colors duration-300"
            >
              Explore Our Menu
            </Link>
            <Link 
              to="/booking" 
              className="px-8 py-3 bg-accent hover:bg-accent-dark text-white rounded-md font-medium transition-colors duration-300"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg 
          viewBox="0 0 1440 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full text-white"
        >
          <path 
            d="M0 50L48 58.3C96 66.7 192 83.3 288 83.3C384 83.3 480 66.7 576 58.3C672 50 768 50 864 58.3C960 66.7 1056 83.3 1152 83.3C1248 83.3 1344 66.7 1392 58.3L1440 50V100H1392C1344 100 1248 100 1152 100C1056 100 960 100 864 100C768 100 672 100 576 100C480 100 384 100 288 100C192 100 96 100 48 100H0V50Z" 
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;