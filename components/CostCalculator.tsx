import React, { useState, useEffect } from 'react';
import { PricingTier } from '../types';
import { Minus, Plus } from 'lucide-react';

const CostCalculator: React.FC = () => {
  const [corpusSize, setCorpusSize] = useState<number>(6.00); // TB
  const [qps, setQps] = useState<number>(1000);
  const [writes, setWrites] = useState<number>(10000);
  const [isAdvancedOpen, setIsAdvancedOpen] = useState(true);
  const [animateBar, setAnimateBar] = useState(false);
  
  useEffect(() => {
      setAnimateBar(true);
  }, []);

  const calculatePricing = (tb: number, qpsVal: number, writesVal: number): PricingTier[] => {
    // Base scale calculation
    const sizeFactor = tb / 6;
    const qpsFactor = 1 + ((qpsVal - 1000) / 25000); // Mild impact from QPS
    const writesFactor = 1 + ((writesVal - 10000) / 100000); // Mild impact from Writes
    
    const scaleFactor = sizeFactor * qpsFactor * writesFactor;
    
    return [
      {
        name: 'Elasticsearch',
        label: 'Legacy',
        cost: Math.round(243323 * scaleFactor),
        infrastructure: Math.round(243323 * scaleFactor), 
        license: 0, 
        color: 'text-rose-700',
        tag: 'bg-rose-100 text-rose-800'
      },
      {
        name: 'OpenSearch',
        label: 'Open Source',
        cost: Math.round(107594 * scaleFactor),
        infrastructure: Math.round(107594 * scaleFactor),
        license: 0, 
        color: 'text-slate-700',
        tag: 'bg-slate-200 text-slate-800'
      },
      {
        name: 'Lucenia',
        label: 'Optimized',
        cost: Math.round(41603 * scaleFactor),
        infrastructure: Math.round(34103 * scaleFactor),
        license: Math.round(7500 * scaleFactor),
        color: 'text-emerald-700',
        tag: 'bg-emerald-100 text-emerald-800'
      }
    ];
  };

  const tiers = calculatePricing(corpusSize, qps, writes);
  const luceniaTier = tiers.find(t => t.name === 'Lucenia')!;
  const elasticTier = tiers.find(t => t.name === 'Elasticsearch')!;
  const savings = elasticTier.cost - luceniaTier.cost;
  
  const maxCost = Math.max(...tiers.map(t => t.cost));

  return (
    <div className="bg-white rounded-sm shadow-sm border border-slate-200 overflow-hidden max-w-6xl mx-auto font-sans">
      <div className="flex flex-col lg:flex-row">
        {/* Controls Panel */}
        <div className="lg:w-1/3 p-10 bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200 relative">
          <div className="absolute inset-0 border border-white/50 pointer-events-none"></div>
          
          <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">TCO Estimator</h3>
          <p className="text-sm text-slate-500 mb-8 leading-relaxed font-mono">
            Estimate the yearly infrastructure cost to make your Enterprise data <span className="font-bold text-slate-900 italic">AI ready</span>.
          </p>

          {/* Corpus Size Slider */}
          <div className="mb-10">
            <div className="inline-block bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-sm mb-2 shadow-sm">
                {corpusSize.toFixed(2)} TB
            </div>
            
            <div className="flex justify-between items-center mb-2">
                 <label className="font-bold text-slate-900 text-sm">Corpus Size <span className="text-slate-400 font-normal">*</span></label>
                 <span className="font-mono text-sm font-bold text-slate-900">{corpusSize.toFixed(2)} TB</span>
            </div>
            
            <div className="relative h-6 flex items-center">
                <input
                    type="range"
                    min="1"
                    max="100"
                    step="0.5"
                    value={corpusSize}
                    onChange={(e) => setCorpusSize(parseFloat(e.target.value))}
                    className="w-full h-1 bg-slate-300 rounded-none appearance-none cursor-pointer accent-slate-900 focus:outline-none"
                />
            </div>
          </div>
          
          {/* Advanced Section */}
          <div className="border border-slate-200 rounded-lg bg-white/50 mb-10 overflow-hidden">
            <button 
                onClick={() => setIsAdvancedOpen(!isAdvancedOpen)}
                className="flex items-center gap-2 w-full px-4 py-3 text-sm font-bold text-slate-900 hover:bg-slate-100/50 transition-colors select-none"
            >
                <div className="bg-slate-200 rounded p-0.5">
                    {isAdvancedOpen ? <Minus className="w-3 h-3 text-slate-600" /> : <Plus className="w-3 h-3 text-slate-600" />}
                </div>
                Advanced
            </button>
            
            {isAdvancedOpen && (
                <div className="px-4 pb-6 pt-2 space-y-8 animate-in slide-in-from-top-2 fade-in duration-300">
                     {/* Slider 1: QPS */}
                     <div>
                        <div className="inline-block bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-sm mb-2 shadow-sm">
                            {qps.toLocaleString()}
                        </div>
                        <div className="flex justify-between items-center mb-2">
                             <label className="font-bold text-slate-900 text-sm">Queries per Second</label>
                             <span className="font-mono text-sm font-bold text-slate-900">{qps.toLocaleString()}</span>
                        </div>
                        <div className="relative h-6 flex items-center">
                            <input 
                                type="range" 
                                min="100" 
                                max="10000" 
                                step="100"
                                value={qps}
                                onChange={(e) => setQps(parseInt(e.target.value))}
                                className="w-full h-1 bg-slate-300 rounded-none appearance-none cursor-pointer accent-slate-900 focus:outline-none" 
                            />
                        </div>
                     </div>
                     
                     {/* Slider 2: Writes */}
                     <div>
                        <div className="inline-block bg-slate-900 text-white text-xs font-bold px-2 py-1 rounded-sm mb-2 shadow-sm">
                            {writes.toLocaleString()} docs/day
                        </div>
                        <div className="flex justify-between items-center mb-2">
                             <label className="font-bold text-slate-900 text-sm">Average Writes per Day</label>
                             <span className="font-mono text-sm font-bold text-slate-900">{writes.toLocaleString()} docs/day</span>
                        </div>
                        <div className="relative h-6 flex items-center">
                            <input 
                                type="range" 
                                min="1000" 
                                max="100000" 
                                step="1000"
                                value={writes}
                                onChange={(e) => setWrites(parseInt(e.target.value))}
                                className="w-full h-1 bg-slate-300 rounded-none appearance-none cursor-pointer accent-slate-900 focus:outline-none" 
                            />
                        </div>
                     </div>
                </div>
            )}
          </div>
          
          <div className="bg-white p-6 rounded-sm border border-slate-200 shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
             <div className="text-[10px] text-slate-400 uppercase font-bold tracking-widest mb-2">Estimated Annual Savings</div>
             <div className="text-3xl font-bold text-emerald-700 tracking-tight font-mono">${savings.toLocaleString()}</div>
             <div className="text-[10px] text-slate-400 mt-2">vs Elasticsearch Managed</div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:w-2/3 p-10 bg-white grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-slate-100">
           {tiers.map((tier) => (
             <div key={tier.name} className={`relative p-6 flex flex-col justify-end ${tier.name === 'Lucenia' ? 'bg-slate-50/50' : 'bg-white'}`}>
                {/* Bar Chart Visualization */}
                <div className="absolute bottom-0 left-0 right-0 bg-slate-50/0 pointer-events-none overflow-hidden h-full z-0 opacity-10">
                    <div 
                        className={`absolute bottom-0 w-full transition-all duration-700 ease-out ${tier.name === 'Lucenia' ? 'bg-emerald-500' : 'bg-slate-400'}`}
                        style={{ height: animateBar ? `${(tier.cost / maxCost) * 100}%` : '0%' }}
                    ></div>
                </div>

                <div className="relative z-10">
                    <div className="flex justify-between items-center mb-8">
                        <h4 className="font-semibold text-slate-900 text-sm">{tier.name}</h4>
                        {tier.name === 'Lucenia' && (
                            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]"></div>
                        )}
                    </div>
                    
                    <div className="mb-6">
                        <div className={`text-2xl font-bold tracking-tight font-mono ${tier.color}`}>${tier.cost.toLocaleString()}</div>
                        <div className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">Total Annual Cost</div>
                    </div>

                    <div className="space-y-3 pt-6 border-t border-slate-100">
                        <div className="flex justify-between text-xs">
                            <span className="text-slate-500 font-medium">Infra</span>
                            <span className="font-mono text-slate-700">${tier.infrastructure.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-slate-500 font-medium">License</span>
                            <span className="font-mono text-slate-700">{tier.license === 0 ? 'Included' : `$${tier.license.toLocaleString()}`}</span>
                        </div>
                    </div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default CostCalculator;