import React, { useState, useEffect } from 'react';
import { testimonials } from '../data/testimonials';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const [newTestimonial, setNewTestimonial] = useState({
    name: '',
    rating: 5,
    comment: ''
  });
  const [submittedTestimonials, setSubmittedTestimonials] = useState([]);
  const [formErrors, setFormErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  // Load testimonials from localStorage
  useEffect(() => {
    const savedTestimonials = localStorage.getItem('userTestimonials');
    if (savedTestimonials) {
      setSubmittedTestimonials(JSON.parse(savedTestimonials));
    }
  }, []);

  // Autoplay functionality
  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        const allTestimonials = [...testimonials, ...submittedTestimonials];
        setActiveIndex((prevIndex) => (prevIndex + 1) % allTestimonials.length);
      }, 5000);
    }

    return () => clearInterval(interval);
  }, [isAutoplay, submittedTestimonials]);

  const handlePrev = () => {
    const allTestimonials = [...testimonials, ...submittedTestimonials];
    setActiveIndex((prevIndex) => (prevIndex - 1 + allTestimonials.length) % allTestimonials.length);
    setIsAutoplay(false);
  };

  const handleNext = () => {
    const allTestimonials = [...testimonials, ...submittedTestimonials];
    setActiveIndex((prevIndex) => (prevIndex + 1) % allTestimonials.length);
    setIsAutoplay(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTestimonial({
      ...newTestimonial,
      [name]: value
    });
  };

  const validateForm = () => {
    const errors = {};
    if (!newTestimonial.name.trim()) {
      errors.name = 'Name is required';
    }
    if (!newTestimonial.comment.trim()) {
      errors.comment = 'Comment is required';
    } else if (newTestimonial.comment.trim().length < 10) {
      errors.comment = 'Comment must be at least 10 characters';
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    
    if (Object.keys(errors).length === 0) {
      const userTestimonial = {
        id: `user-${Date.now()}`,
        ...newTestimonial,
        date: new Date().toISOString().split('T')[0]
      };
      
      const updatedTestimonials = [...submittedTestimonials, userTestimonial];
      setSubmittedTestimonials(updatedTestimonials);
      localStorage.setItem('userTestimonials', JSON.stringify(updatedTestimonials));
      
      setNewTestimonial({
        name: '',
        rating: 5,
        comment: ''
      });
      
      setFormErrors({});
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } else {
      setFormErrors(errors);
    }
  };

  const allTestimonials = [...testimonials, ...submittedTestimonials];
  const currentTestimonial = allTestimonials[activeIndex];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          className={`h-5 w-5 ${i <= rating ? 'text-highlight fill-current' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <section id="testimonials" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
            Client Testimonials
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-700">
            Our clients love the culinary experiences we create. Here's what they have to say about our services.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-white rounded-lg shadow-lg p-8">
            <div className="flex justify-center mb-4">
              {renderStars(currentTestimonial.rating)}
            </div>
            
            <p className="text-gray-700 text-lg italic text-center mb-6">
              "{currentTestimonial.comment}"
            </p>
            
            <div className="flex items-center justify-center">
              {currentTestimonial.image ? (
                <img 
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
              ) : (
                <div className="w-16 h-16 rounded-full bg-primary-light flex items-center justify-center text-white text-xl font-bold mr-4">
                  {currentTestimonial.name.charAt(0)}
                </div>
              )}
              <div>
                <h4 className="text-lg font-semibold text-secondary">
                  {currentTestimonial.name}
                </h4>
                <p className="text-sm text-gray-500">
                  {new Date(currentTestimonial.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            </div>
            
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              >
                <ChevronLeft className="h-6 w-6 text-secondary" />
              </button>
            </div>
            
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
              >
                <ChevronRight className="h-6 w-6 text-secondary" />
              </button>
            </div>
            
            <div className="flex justify-center mt-6">
              {allTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setActiveIndex(index);
                    setIsAutoplay(false);
                  }}
                  className={`mx-1 h-2 w-2 rounded-full transition-colors ${
                    index === activeIndex ? 'bg-accent' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Submit testimonial form */}
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-display font-bold text-secondary mb-6 text-center">
            Share Your Experience
          </h3>
          
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md">
                Thank you for sharing your testimonial!
              </div>
            )}
            
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={newTestimonial.name}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                  formErrors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {formErrors.name && (
                <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
              )}
            </div>
            
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">
                Rating
              </label>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    onClick={() => setNewTestimonial({...newTestimonial, rating})}
                    className="mr-1 focus:outline-none"
                  >
                    <Star 
                      className={`h-6 w-6 ${
                        rating <= newTestimonial.rating 
                          ? 'text-highlight fill-current' 
                          : 'text-gray-300'
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="comment" className="block text-gray-700 font-medium mb-2">
                Your Comment
              </label>
              <textarea
                id="comment"
                name="comment"
                value={newTestimonial.comment}
                onChange={handleInputChange}
                rows="4"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary ${
                  formErrors.comment ? 'border-red-500' : 'border-gray-300'
                }`}
              ></textarea>
              {formErrors.comment && (
                <p className="text-red-500 text-sm mt-1">{formErrors.comment}</p>
              )}
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md font-medium transition-colors"
            >
              Submit Testimonial
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;