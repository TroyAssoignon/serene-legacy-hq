
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-gold/5 to-transparent -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/3 bg-gradient-to-tr from-navy/5 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-gold/10 text-gold-dark text-xs font-medium tracking-wide mb-6 animate-fade-in [animation-delay:0.1s] opacity-0">
            ESTABLISHED TRUST SINCE 1954
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6 animate-fade-in [animation-delay:0.2s] opacity-0">
            Legacy Investments Built for Generations
          </h1>
          
          <p className="text-lg md:text-xl text-navy-light/90 mb-10 max-w-2xl mx-auto text-balance animate-fade-in [animation-delay:0.3s] opacity-0">
            At Wright Drilling & Exploration, we help high-integrity partners prosper through oil & gas investments built to stand the test of time.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 animate-fade-in [animation-delay:0.4s] opacity-0">
            <a 
              href="#invest-now" 
              className="px-8 py-3 rounded-md bg-navy text-white font-medium tracking-wide transition-all hover:bg-navy-light hover-lift flex items-center justify-center"
            >
              Start Investing
              <ChevronRight className="ml-1 h-4 w-4" />
            </a>
            <a 
              href="#calculator" 
              className="px-8 py-3 rounded-md bg-white border border-navy/10 text-navy font-medium tracking-wide transition-all hover:border-navy/30 hover-lift flex items-center justify-center"
            >
              Calculate Returns
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
