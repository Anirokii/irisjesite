
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-dark-blue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">IRIS Junior Entreprise</h4>
            <p className="text-gray-300 mb-4">
            Your Vision, Our Strategy — To the Next Level.
            </p>
            <div className="flex space-x-4">
              {/* Social Media Icons would go here */}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/statistics" className="text-gray-300 hover:text-brand-orange transition-colors">
                  Statistics
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-brand-orange" />
                <span className="text-gray-300">Soukra km4 3052 - Sfax - Tunisia</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-brand-orange" />
                <span className="text-gray-300">+(216) 50 445 369</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-brand-orange" />
                <span className="text-gray-300">contact.irisje@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} IRISJE. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
