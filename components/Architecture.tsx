import React from 'react';

const Architecture: React.FC = () => {
  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] lg:aspect-[21/9] bg-white rounded-sm border border-slate-200 shadow-sm p-8 lg:p-12 flex items-center justify-center overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-slate [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] pointer-events-none"></div>

      {/* Central Hub */}
      <div className="z-10 bg-white border border-slate-300 rounded-sm p-6 shadow-md text-center w-64 flex flex-col items-center gap-3 relative transition-transform hover:scale-105 duration-300">
        <div className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
        <img src="https://i.ibb.co/ztyZsXN/Asset-15thlucenialogosmall.png" className="h-6 w-auto mb-1" alt="Lucenia" />
        <div>
            <h4 className="font-bold text-slate-900 text-sm tracking-tight">Retrieval Engine</h4>
            <div className="flex gap-2 justify-center mt-2">
                <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-sm border border-slate-200 uppercase tracking-wider font-mono">Core</span>
                <span className="text-[9px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-sm border border-slate-200 uppercase tracking-wider font-mono">v2.4</span>
            </div>
        </div>
      </div>

      {/* Connectors Layer */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        
        {/* Left Side (Clients) */}
        <div className="absolute left-8 lg:left-16 top-1/2 -translate-y-1/2 flex flex-col gap-8">
           {['LLM Agent', 'Analytics UI', 'Geo Dashboard'].map((item, i) => (
               <div key={i} className="bg-white border border-slate-200 px-4 py-2 rounded-sm text-[10px] font-bold uppercase tracking-wider text-slate-600 shadow-sm w-32 text-center z-10">
                   {item}
               </div>
           ))}
        </div>

        {/* Right Side (Data Sources) */}
        <div className="absolute right-8 lg:right-16 top-1/2 -translate-y-1/2 grid grid-cols-2 gap-3">
            {['Postgres', 'SharePoint', 'S3', 'Salesforce'].map((item, i) => (
                <div key={i} className="bg-white border border-slate-200 p-2 rounded-sm text-[9px] font-bold text-slate-700 shadow-sm w-20 text-center flex items-center justify-center h-10 uppercase tracking-wide z-10">
                    {item}
                </div>
            ))}
        </div>
        
        {/* Bottom (Models) */}
        <div className="absolute bottom-6 lg:bottom-10 left-1/2 -translate-x-1/2 flex gap-6">
            {['HuggingFace', 'Vertex AI', 'Bedrock'].map((item, i) => (
                <div key={i} className="bg-slate-800 text-slate-300 px-3 py-1.5 rounded-sm text-[10px] font-mono shadow-sm border border-slate-700 z-10">
                    {item}
                </div>
            ))}
        </div>

        {/* Connecting Lines (SVG) with Animation */}
        <svg className="absolute inset-0 w-full h-full -z-0" stroke="#94a3b8" strokeWidth="1" fill="none">
           {/* Left to Center */}
           <path d="M 18% 35% C 25% 35%, 25% 45%, 35% 50%" className="animate-dash" strokeDasharray="5" /> 
           <path d="M 18% 50% L 35% 50%" className="animate-dash" strokeDasharray="5" /> 
           <path d="M 18% 65% C 25% 65%, 25% 55%, 35% 50%" className="animate-dash" strokeDasharray="5" />
           
           {/* Center to Right */}
           <path d="M 65% 50% C 75% 50%, 75% 40%, 82% 40%" className="animate-dash" strokeDasharray="5" />
           <path d="M 65% 50% C 75% 50%, 75% 60%, 82% 60%" className="animate-dash" strokeDasharray="5" />
           
           {/* Center to Bottom */}
           <path d="M 50% 65% L 50% 80%" strokeDasharray="4 4" />
        </svg>
      </div>
    </div>
  );
};

export default Architecture;