
import React from 'react';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="mb-4">
              <span className="font-playfair text-xl font-bold text-navy">
                Wright <span className="text-gold">Drilling</span>
              </span>
            </div>
            <p className="text-navy-light/80 text-sm">
              Legacy investments in oil & gas exploration built for generations of prosperity.
            </p>
            <div className="space-y-2 text-sm text-navy-light/80">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold-dark flex-shrink-0 mt-0.5" />
                <span>1234 Oil Ridge Road, Dallas, TX 75201</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold-dark" />
                <span>(214) 555-1234</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold-dark" />
                <span>invest@wrightdrilling.com</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-navy mb-4">Quick Links</h3>
            <ul className="space-y-2 text-navy-light/80 text-sm">
              <li>
                <a href="#what-we-do" className="hover:text-navy transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2" />
                  What We Do
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-navy transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2" />
                  Investment Benefits
                </a>
              </li>
              <li>
                <a href="#calculator" className="hover:text-navy transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2" />
                  ROI Calculator
                </a>
              </li>
              <li>
                <a href="#invest-now" className="hover:text-navy transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2" />
                  How to Invest
                </a>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="font-medium text-navy mb-4">Resources</h3>
            <ul className="space-y-2 text-navy-light/80 text-sm">
              <li>
                <a href="#" className="hover:text-navy transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2" />
                  Oil & Gas Industry Updates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-navy transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2" />
                  Investor Education
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-navy transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2" />
                  Tax Advantage Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-navy transition-colors flex items-center">
                  <ArrowRight className="h-3.5 w-3.5 mr-2" />
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-medium text-navy mb-4">Stay Updated</h3>
            <p className="text-navy-light/80 text-sm mb-4">
              Subscribe to receive investment opportunities and industry insights.
            </p>
            <form className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-navy focus:border-navy"
              />
              <button 
                type="submit" 
                className="w-full px-4 py-2 bg-navy text-white rounded-md text-sm font-medium hover:bg-navy-light transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-sm text-navy-light/70">
            © {currentYear} Wright Drilling & Exploration. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm text-navy-light/70">
            <a href="#" className="hover:text-navy transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-navy transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-navy transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
