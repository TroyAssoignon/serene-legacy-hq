
import React from 'react';
import { DollarSign, ShieldCheck, BarChart3, Clock } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <section id="what-we-do" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute right-0 bottom-0 w-1/3 h-1/2 bg-gradient-to-tl from-navy/5 to-transparent -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-navy">
              What We Do
            </h2>
            
            <p className="text-lg text-navy-light/90">
              We help our partners build generational wealth in oil & gas by maximizing returns with minimal risk. Our unique approach offers high-percentage ownership for lower capital outlay, ensuring more profit potential for every dollar invested.
            </p>
            
            <p className="text-lg text-navy-light/90">
              With expert guidance, tax advantages, and strong education, we make complex investments simple—so you can focus on building your legacy.
            </p>
            
            <a 
              href="#calculator" 
              className="inline-block px-8 py-3 rounded-md bg-navy text-white font-medium tracking-wide transition-all hover:bg-navy-light hover-lift mt-4"
            >
              Calculate Your Potential
            </a>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <FeatureCard 
              icon={<DollarSign className="h-6 w-6 text-gold" />}
              title="Higher ROI Potential"
              description="Strategic well placements and efficient operations maximize your return on investment."
              delay="0.1s"
            />
            
            <FeatureCard 
              icon={<ShieldCheck className="h-6 w-6 text-gold" />}
              title="Risk Mitigation"
              description="Thorough due diligence and expert geological assessments to reduce investment risk."
              delay="0.2s"
            />
            
            <FeatureCard 
              icon={<BarChart3 className="h-6 w-6 text-gold" />}
              title="Tax Advantages"
              description="Substantial tax benefits available for qualified oil & gas investments."
              delay="0.3s"
            />
            
            <FeatureCard 
              icon={<Clock className="h-6 w-6 text-gold" />}
              title="Long-Term Value"
              description="Create a legacy asset with potential for generational wealth transfer."
              delay="0.4s"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ 
  icon, 
  title, 
  description,
  delay
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  delay: string;
}) => (
  <div 
    className="bg-white rounded-xl shadow-sm card-shadow p-6 border border-gray-100 hover-lift animate-fade-in opacity-0" 
    style={{ animationDelay: delay }}
  >
    <div className="mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-navy mb-2">
      {title}
    </h3>
    <p className="text-navy-light/80 text-sm">
      {description}
    </p>
  </div>
);

export default WhatWeDo;
