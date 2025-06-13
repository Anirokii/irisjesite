
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/*<Link to="/" className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-brand-dark-blue">IRIS</span>
            <span className="text-brand-orange font-semibold">JE vvv</span>
          </Link>*/}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="src\images\irislogo.png"
              alt="IRISJE Logo"
              className="h-10 w-auto"
            />
          </Link>

          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-brand-orange transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-gray-700 hover:text-brand-orange transition-colors">
              Services
            </Link>
            <Link to="/statistics" className="text-gray-700 hover:text-brand-orange transition-colors">
              Statistics
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in-up">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-brand-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-gray-700 hover:text-brand-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/statistics" 
                className="text-gray-700 hover:text-brand-orange transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Statistics
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
