
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "py-2 bg-white/95 backdrop-blur-sm shadow-sm" : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <span className="font-playfair text-xl font-bold text-navy md:text-2xl">
              Wright <span className="text-gold">Drilling</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#what-we-do">What We Do</NavLink>
            <NavLink href="#benefits">Benefits</NavLink>
            <NavLink href="#calculator">Calculator</NavLink>
            <a 
              href="#invest-now" 
              className="px-6 py-2 rounded-md bg-navy text-white font-medium text-sm tracking-wide transition-all hover:bg-navy-light"
            >
              Invest Now
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="flex md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-navy" />
            ) : (
              <Menu className="h-6 w-6 text-navy" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <MobileNavLink href="#what-we-do" onClick={() => setIsMenuOpen(false)}>
              What We Do
            </MobileNavLink>
            <MobileNavLink href="#benefits" onClick={() => setIsMenuOpen(false)}>
              Benefits
            </MobileNavLink>
            <MobileNavLink href="#calculator" onClick={() => setIsMenuOpen(false)}>
              Calculator
            </MobileNavLink>
            <a 
              href="#invest-now" 
              className="px-6 py-3 rounded-md bg-navy text-white font-medium text-center tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              Invest Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

// Desktop Navigation Link
const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-navy-dark/90 font-medium text-sm tracking-wide relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-gold after:transition-all hover:text-navy hover:after:w-full"
  >
    {children}
  </a>
);

// Mobile Navigation Link
const MobileNavLink = ({ 
  href, 
  onClick, 
  children 
}: { 
  href: string; 
  onClick: () => void; 
  children: React.ReactNode 
}) => (
  <a 
    href={href} 
    className="text-navy-dark font-medium py-2 border-b border-gray-100 last:border-0"
    onClick={onClick}
  >
    {children}
  </a>
);

export default Navbar;
