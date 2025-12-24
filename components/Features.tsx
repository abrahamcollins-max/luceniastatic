import React, { useRef, useState } from 'react';
import { Cloud, Shield, Globe, ArrowRight } from 'lucide-react';

interface FeatureItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
}

interface FeatureCardProps {
  feature: FeatureItem;
  idx: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, idx }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div 
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`group relative p-10 border-r border-b border-slate-200 hover:bg-slate-50 transition-colors duration-200 cursor-pointer h-72 flex flex-col justify-between overflow-hidden`}
    >
      {/* Inner Border */}
      <div className="absolute inset-0 border border-white/50 pointer-events-none z-10"></div>
      
      {/* Spotlight Gradient */}
      <div 
          className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
          style={{
              background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(200,200,220,0.15), transparent 40%)`,
              opacity: opacity,
          }}
      />

      <div className="relative z-10">
        <div className="w-10 h-10 rounded-sm bg-slate-100 flex items-center justify-center mb-6 border border-slate-200 shadow-sm transition-all duration-500 ease-out group-hover:scale-110 group-hover:bg-white group-hover:shadow-md group-hover:border-lucenia-200/50">
          {feature.icon}
        </div>
        
        <div className="transition-transform duration-300 ease-out group-hover:-translate-y-1">
            <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight group-hover:text-lucenia-900 transition-colors duration-300">{feature.title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-600 transition-colors duration-300">
                {feature.subtitle}
            </p>
        </div>
      </div>
      
      <div className="relative z-10 flex items-center text-xs font-bold uppercase tracking-wider text-slate-900 mt-8 group-hover:text-lucenia-700 transition-all duration-300 group-hover:translate-x-1">
        <span>{feature.description}</span>
        <ArrowRight className="h-3.5 w-3.5 ml-2 transform group-hover:translate-x-1 transition-transform" />
      </div>
    </div>
  );
}

const Features: React.FC = () => {
  const features: FeatureItem[] = [
    {
      title: "Hybrid Cloud Freedom",
      subtitle: "The only self-hosted replacement for Elasticsearch & OpenSearch.",
      description: "Deploy Anywhere",
      icon: <Cloud className="h-5 w-5 text-slate-900" />,
    },
    {
      title: "Zero-Risk Intelligence",
      subtitle: "Conversational AI inside your walls. No leaks, full custody.",
      description: "Secure AI",
      icon: <Shield className="h-5 w-5 text-slate-900" />,
    },
    {
      title: "Geospatial Context",
      subtitle: "Privacy-aware AI that understands 'where' without exposing 'who'.",
      description: "Spatial Search",
      icon: <Globe className="h-5 w-5 text-slate-900" />,
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-slate-200" id="product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
           <div className="max-w-2xl">
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">01 — Platform</span>
              <h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Engineered for the Modern Stack</h2>
              <p className="text-slate-500 text-lg font-light">Built on Lucene. Optimized for vectors. Hardened for enterprise.</p>
           </div>
           <div className="hidden md:block h-px flex-1 bg-slate-200 mx-8 mb-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-l border-slate-200 shadow-sm">
          {features.map((feature, idx) => (
            <FeatureCard key={idx} feature={feature} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;