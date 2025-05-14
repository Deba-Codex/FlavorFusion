import React from 'react';
import { teamMembers } from '../data/teamMembers';
import { Award, Clock, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-secondary mb-4">
            About FlavorFusion
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-gray-700">
            We are passionate about creating memorable culinary experiences for all your special occasions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-display font-bold text-secondary mb-4">
              Our Culinary Journey
            </h3>
            <p className="text-gray-700 mb-4">
              Founded in 2015, FlavorFusion began with a simple mission: to create exceptional catering experiences that delight the senses and exceed expectations. Our founder, Chef Antonio Romano, brought his passion for culinary excellence from the finest restaurants in Europe to create a catering service that combines traditional techniques with modern innovation.
            </p>
            <p className="text-gray-700 mb-6">
              Today, our team of talented chefs and event specialists work together to craft personalized menus and flawless service for events of all sizes – from intimate gatherings to grand celebrations.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-2">
                  <Award className="h-8 w-8 text-highlight" />
                </div>
                <h4 className="font-bold text-secondary">Premium Quality</h4>
                <p className="text-sm text-gray-600">Only the finest ingredients</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-2">
                  <Clock className="h-8 w-8 text-highlight" />
                </div>
                <h4 className="font-bold text-secondary">Punctuality</h4>
                <p className="text-sm text-gray-600">Always on time service</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                <div className="flex justify-center mb-2">
                  <ThumbsUp className="h-8 w-8 text-highlight" />
                </div>
                <h4 className="font-bold text-secondary">Satisfaction</h4>
                <p className="text-sm text-gray-600">100% customer satisfaction</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <img 
              src="https://images.pexels.com/photos/2544829/pexels-photo-2544829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Chef preparing food"
              className="rounded-lg shadow-md h-64 w-full object-cover transform translate-y-4"
            />
            <img 
              src="https://images.pexels.com/photos/5718073/pexels-photo-5718073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Catering setup"
              className="rounded-lg shadow-md h-64 w-full object-cover transform -translate-y-4"
            />
            <img 
              src="https://images.pexels.com/photos/5931075/pexels-photo-5931075.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Food preparation"
              className="rounded-lg shadow-md h-64 w-full object-cover transform -translate-y-4"
            />
            <img 
              src="https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Elegant table setting"
              className="rounded-lg shadow-md h-64 w-full object-cover transform translate-y-4"
            />
          </div>
        </div>
        
        <h3 className="text-2xl font-display font-bold text-secondary mb-6 text-center">
          Meet Our Team
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map(member => (
            <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-5">
                <h4 className="text-xl font-semibold text-secondary mb-1">
                  {member.name}
                </h4>
                <p className="text-accent font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;