
import React from 'react';
import { Calendar, RefreshCw, Clock, FileCheck, Landmark, TrendingUp } from 'lucide-react';

const RoyaltiesBenefits = () => {
  return (
    <section id="benefits" className="py-20 bg-navy text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-navy-light/20 via-transparent to-transparent opacity-70 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Investors Choose Wright Drilling
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Our approach to oil & gas investments delivers a comprehensive suite of benefits designed for long-term wealth building.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <BenefitCard 
            icon={<Calendar className="h-6 w-6" />}
            title="Monthly Royalty Disbursements"
            description="Receive regular monthly income from your producing wells, creating reliable cash flow."
            delay="0.1s"
          />
          
          <BenefitCard 
            icon={<RefreshCw className="h-6 w-6" />}
            title="Residual Income Potential"
            description="Enjoy ongoing returns for the productive life of the well, which can span decades."
            delay="0.2s"
          />
          
          <BenefitCard 
            icon={<Clock className="h-6 w-6" />}
            title="Oil & Gas Well Longevity"
            description="Investments that can provide returns for 20+ years with proper management and technology."
            delay="0.3s"
          />
          
          <BenefitCard 
            icon={<FileCheck className="h-6 w-6" />}
            title="Direct Ownership"
            description="Own a transferable asset that can be passed down to future generations as part of your legacy."
            delay="0.4s"
          />
          
          <BenefitCard 
            icon={<Landmark className="h-6 w-6" />}
            title="Substantial Tax Benefits"
            description="Take advantage of significant tax deductions available to qualified oil & gas investors."
            delay="0.5s"
          />
          
          <BenefitCard 
            icon={<TrendingUp className="h-6 w-6" />}
            title="Strong ROI Potential"
            description="Benefit from the historically strong return potential of strategic oil & gas investments."
            delay="0.6s"
          />
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#invest-now" 
            id="invest-now"
            className="inline-block px-8 py-3 rounded-md bg-gold text-navy-dark font-medium tracking-wide transition-all hover:bg-gold-light hover-lift animate-fade-in"
          >
            How to Invest With Us
          </a>
        </div>
      </div>
    </section>
  );
};

const BenefitCard = ({ 
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
    className="bg-navy-light/20 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover-lift animate-fade-in opacity-0" 
    style={{ animationDelay: delay }}
  >
    <div className="bg-gold/10 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-gold">
      {icon}
    </div>
    <h3 className="text-lg font-semibold mb-3">
      {title}
    </h3>
    <p className="text-white/70 text-sm">
      {description}
    </p>
  </div>
);

export default RoyaltiesBenefits;
