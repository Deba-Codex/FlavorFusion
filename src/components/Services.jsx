import React from 'react';
import { Cake, Users, Building2, Home, CheckCircle } from 'lucide-react';

const servicesData = [
  {
    id: 1,
    title: 'Wedding Catering',
    description: 'Make your special day unforgettable with our elegant wedding catering services, from intimate gatherings to grand celebrations.',
    icon: <Cake className="h-10 w-10 text-accent" />,
    benefits: ['Customized menu planning', 'Professional service staff', 'Beautiful presentation', 'Dietary accommodations']
  },
  {
    id: 2,
    title: 'Corporate Events',
    description: 'Impress your clients and colleagues with premium catering options for meetings, conferences, and corporate celebrations.',
    icon: <Building2 className="h-10 w-10 text-accent" />,
    benefits: ['Punctual delivery', 'Easy ordering system', 'Presentation options', 'Budget-friendly packages']
  },
  {
    id: 3,
    title: 'Private Parties',
    description: 'From birthday celebrations to anniversary dinners, our catering services add a touch of culinary excellence to your gatherings.',
    icon: <Users className="h-10 w-10 text-accent" />,
    benefits: ['Personalized menus', 'Flexible serving styles', 'Setup and cleanup', 'Custom themes available']
  },
  {
    id: 4,
    title: 'In-Home Chef Experience',
    description: 'Enjoy restaurant-quality dining in the comfort of your own home with our private chef services.',
    icon: <Home className="h-10 w-10 text-accent" />,
    benefits: ['Grocery shopping', 'Multi-course meals', 'Interactive cooking', 'Kitchen cleanup']
  }
];

const Services = () => {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
            Our Catering Services
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-700">
            We provide exceptional catering services for all types of events, customized to your specific needs and preferences.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-secondary mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;