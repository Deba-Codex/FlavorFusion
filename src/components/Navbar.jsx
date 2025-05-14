import React, { useState, useEffect } from 'react';
import { Menu, X, ChefHat } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../assets/Flavor-Fusion.jpg'; 


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm border-b border-gray-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              {/* <ChefHat className="h-8 w-8 text-primary" /> */}
              <img src={Logo} alt="FlavorFusion Logo" className="h-8 w-8 object-contain" />
              <span className="ml-2 text-xl font-display font-bold text-secondary">
                FlavorFusion
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" label="Home" />
              <NavLink to="/menu" label="Menu" />
              <NavLink to="/gallery" label="Gallery" />
              <NavLink to="/about" label="About Us" />
              <NavLink to="/testimonials" label="Testimonials" />
              <NavLink to="/contact" label="Contact" />
              <Link 
                to="/booking" 
                className="px-4 py-2 rounded-md text-white bg-accent hover:bg-accent-dark transition-colors"
              >
                Book Now
              </Link>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink to="/" label="Home" toggleMenu={toggleMenu} />
            <MobileNavLink to="/menu" label="Menu" toggleMenu={toggleMenu} />
            <MobileNavLink to="/gallery" label="Gallery" toggleMenu={toggleMenu} />
            <MobileNavLink to="/about" label="About Us" toggleMenu={toggleMenu} />
            <MobileNavLink to="/testimonials" label="Testimonials" toggleMenu={toggleMenu} />
            <MobileNavLink to="/contact" label="Contact" toggleMenu={toggleMenu} />
            <Link
              to="/booking"
              onClick={toggleMenu}
              className="block px-3 py-2 rounded-md text-white text-center bg-accent hover:bg-accent-dark"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ to, label }) => {
  return (
    <Link
      to={to}
      className="px-3 py-2 rounded-md text-sm font-medium text-secondary hover:text-primary transition-colors"
    >
      {label}
    </Link>
  );
};

const MobileNavLink = ({ to, label, toggleMenu }) => {
  return (
    <Link
      to={to}
      onClick={toggleMenu}
      className="block px-3 py-2 rounded-md text-base font-medium text-secondary hover:text-primary"
    >
      {label}
    </Link>
  );
};

export default Navbar;