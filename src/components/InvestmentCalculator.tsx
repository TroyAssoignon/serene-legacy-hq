
import React, { useState, useEffect } from 'react';
import { Info, AlertCircle } from 'lucide-react';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from "@/components/ui/tooltip";
import { Slider } from "@/components/ui/slider";

const InvestmentCalculator = () => {
  const [investmentAmount, setInvestmentAmount] = useState(50000);
  const [yearsHeld, setYearsHeld] = useState(5);
  const [projectedROI, setProjectedROI] = useState(18); // Percentage
  
  const [projectedReturn, setProjectedReturn] = useState(0);
  const [monthlyIncome, setMonthlyIncome] = useState(0);
  
  // Calculate projected returns based on inputs
  useEffect(() => {
    // Simple compound interest calculation (not accounting for complex factors)
    const multiplier = Math.pow(1 + (projectedROI / 100), yearsHeld);
    const totalValue = investmentAmount * multiplier;
    const returnValue = totalValue - investmentAmount;
    
    setProjectedReturn(Math.round(returnValue));
    setMonthlyIncome(Math.round(returnValue / (yearsHeld * 12)));
  }, [investmentAmount, yearsHeld, projectedROI]);
  
  return (
    <section id="calculator" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Investment Calculator
          </h2>
          <p className="text-lg text-navy-light/80 max-w-2xl mx-auto">
            See how your investment could grow over time with Wright Drilling & Exploration.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md card-shadow p-6 md:p-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Input Column */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-medium text-navy">
                      Investment Amount
                    </label>
                    <span className="text-sm text-navy-light font-medium">
                      ${investmentAmount.toLocaleString()}
                    </span>
                  </div>
                  <Slider
                    value={[investmentAmount]}
                    min={10000}
                    max={500000}
                    step={5000}
                    onValueChange={(value) => setInvestmentAmount(value[0])}
                    className="py-2"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <label className="font-medium text-navy">
                      Years Held
                    </label>
                    <span className="text-sm text-navy-light font-medium">
                      {yearsHeld} years
                    </span>
                  </div>
                  <Slider
                    value={[yearsHeld]}
                    min={1}
                    max={20}
                    step={1}
                    onValueChange={(value) => setYearsHeld(value[0])}
                    className="py-2"
                  />
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <label className="font-medium text-navy mr-1.5">
                        Projected ROI
                      </label>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <span className="cursor-help">
                              <Info className="h-4 w-4 text-navy-light" />
                            </span>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="text-xs max-w-xs">
                              Return on Investment is based on historical data and projections. Actual returns may vary based on market conditions.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <span className="text-sm text-navy-light font-medium">
                      {projectedROI}%
                    </span>
                  </div>
                  <Slider
                    value={[projectedROI]}
                    min={5}
                    max={30}
                    step={1}
                    onValueChange={(value) => setProjectedROI(value[0])}
                    className="py-2"
                  />
                </div>
              </div>
              
              {/* Results Column */}
              <div className="flex flex-col justify-center space-y-6">
                <div className="bg-gray-50 rounded-lg p-6 border border-gray-100 space-y-4">
                  <h3 className="text-lg font-medium text-navy text-center">
                    Projected Returns
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-navy-light">Initial Investment:</span>
                      <span className="font-medium text-navy">${investmentAmount.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-navy-light">Potential Return:</span>
                      <span className="font-medium text-gold-dark">${projectedReturn.toLocaleString()}</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-navy-light">Est. Monthly Royalties:</span>
                      <span className="font-medium text-gold-dark">${monthlyIncome.toLocaleString()}/mo</span>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <span className="text-navy-light">Total Value After {yearsHeld} Years:</span>
                      <span className="font-bold text-navy text-lg">${(investmentAmount + projectedReturn).toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <a 
                  href="#invest-now" 
                  className="px-6 py-3 rounded-md bg-navy text-white font-medium tracking-wide transition-all hover:bg-navy-light text-center hover-lift"
                >
                  Get Started Today
                </a>
              </div>
            </div>
            
            {/* Disclaimer */}
            <div className="mt-8 pt-4 border-t border-gray-100">
              <div className="flex items-start space-x-2 text-xs text-gray-500">
                <AlertCircle className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <p>
                  This calculator provides estimated figures based on historical data and projections. 
                  Actual returns may vary based on market conditions, timing, and other factors. 
                  This is not investment advice. Investments in oil and gas involve substantial risk. 
                  Consult with your financial advisor before making investment decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestmentCalculator;
