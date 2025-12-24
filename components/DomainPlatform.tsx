import React, { useState } from 'react';
import { Shield, Activity, FileText, Cpu, TrendingUp, Sprout, Signal, Map as MapIcon, AlertCircle } from 'lucide-react';

const DomainPlatform: React.FC = () => {
  const tabs = ['Geo', 'Defense', 'Telco', 'Healthcare', 'Legal', 'Manufacturing', 'FinTech', 'Agriculture'];
  const [activeTab, setActiveTab] = useState('Geo');

  // Specific content for each industry
  const contentMap: Record<string, { title: string; description: string; tagline: string }> = {
    Geo: {
      title: "Geospatial data is fundamentally big data",
      description: "Lucenia turns massive, distributed spatial datasets and their supporting attribute data into instant insight. From logistics to smart cities, Lucenia enables real-time spatial data exploration without exposing sensitive data.",
      tagline: "Built for scale, speed, and security — Lucenia is the retrieval fabric for geospatial AI."
    },
    Defense: {
      title: "Mission-critical intelligence at the tactical edge",
      description: "Deploy offline-capable AI search on air-gapped hardware. Lucenia provides warfighters and analysts with instant retrieval of classified directives, asset locations, and threat assessments without cloud dependency.",
      tagline: "Zero-trust architecture for when connectivity is not an option."
    },
    Telco: {
      title: "Network topology analysis in milliseconds",
      description: "Correlate millions of signal events, tower logs, and customer tickets instantly. Lucenia empowers AIOps agents to predict outages and route field technicians with precise geospatial and historical context.",
      tagline: "High-throughput retrieval for the world's most complex networks."
    },
    Healthcare: {
      title: "HIPAA-compliant patient data retrieval",
      description: "Synthesize unstructured clinical notes, lab results, and imaging metadata. Lucenia enables secure RAG pipelines for clinical decision support while enforcing strict attribute-based access controls.",
      tagline: "Securely bridging the gap between medical records and Generative AI."
    },
    Legal: {
      title: "Precision discovery across millions of documents",
      description: "Accelerate case research with semantic search that understands legal precedent. Lucenia isolates privileged information automatically, ensuring that AI assistants never hallucinate or leak confidential client data.",
      tagline: "Defensible, auditable search for the modern firm."
    },
    Manufacturing: {
      title: "Digital twin synchronization and retrieval",
      description: "Index IoT sensor streams and CAD metadata in real-time. Lucenia allows factory AI agents to retrieve maintenance history and part specifications instantly to minimize downtime.",
      tagline: "Industrial-grade performance for Industry 4.0."
    },
    FinTech: {
      title: "Fraud detection with vector-based patterns",
      description: "Identify anomalous transaction patterns across global ledgers. Lucenia's hybrid search combines exact value matching with semantic similarity to flag sophisticated financial crimes in real-time.",
      tagline: "The speed of high-frequency trading applied to compliance search."
    },
    Agriculture: {
      title: "Precision farming driven by data fusion",
      description: "Combine satellite imagery, soil sensor data, and weather patterns. Lucenia helps ag-tech platforms retrieve historical yield data to power predictive models for crop management.",
      tagline: "Cultivating intelligence from distributed field data."
    }
  };

  const renderVisual = () => {
    const baseClasses = "bg-slate-900 rounded-sm shadow-2xl border border-slate-700 aspect-[4/3] relative overflow-hidden group transition-all duration-500";
    
    switch (activeTab) {
      case 'Defense':
        return (
          <div className={baseClasses}>
            {/* Radar Background */}
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(30,58,138,0.2)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-[80%] h-[80%] border border-slate-700 rounded-full opacity-50"></div>
               <div className="w-[60%] h-[60%] border border-slate-700 rounded-full opacity-50 absolute"></div>
               <div className="w-[40%] h-[40%] border border-slate-700 rounded-full opacity-50 absolute"></div>
               <div className="w-full h-0.5 bg-slate-800/50 absolute top-1/2 -translate-y-1/2"></div>
               <div className="h-full w-0.5 bg-slate-800/50 absolute left-1/2 -translate-x-1/2"></div>
               {/* Radar Sweep */}
               <div className="absolute inset-0 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(239,68,68,0.1)_60deg,transparent_60deg)] animate-[spin_4s_linear_infinite] rounded-full w-full h-full opacity-50"></div>
            </div>
            
            {/* Threats */}
            <div className="absolute top-1/3 right-1/4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                <div className="absolute -top-6 -left-2 text-[8px] text-red-400 font-mono bg-slate-900/80 px-1 border border-red-900">UNK-Target</div>
            </div>
            <div className="absolute bottom-1/3 left-1/3">
                 <Shield className="w-4 h-4 text-emerald-500" />
                 <div className="absolute -bottom-5 -left-2 text-[8px] text-emerald-400 font-mono">Friendly-1</div>
            </div>

             {/* UI Overlay */}
             <div className="absolute top-2 left-2 flex flex-col gap-1">
                <div className="text-[9px] text-slate-500 uppercase tracking-widest font-mono">Defcon Status</div>
                <div className="text-xs text-slate-300 font-mono">MONITORING</div>
             </div>
          </div>
        );

      case 'Telco':
        return (
          <div className={baseClasses}>
             {/* Network Grid */}
             <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[length:24px_24px]"></div>
             
             {/* Nodes */}
             <div className="absolute inset-0">
                <svg className="w-full h-full">
                   <line x1="30%" y1="30%" x2="70%" y2="70%" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" />
                   <line x1="70%" y1="30%" x2="30%" y2="70%" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" />
                   <line x1="50%" y1="50%" x2="50%" y2="20%" stroke="#3b82f6" strokeWidth="1" strokeOpacity="0.3" />
                </svg>
                
                <div className="absolute top-[30%] left-[30%] -translate-x-1/2 -translate-y-1/2 p-2 bg-slate-800 border border-blue-500/30 rounded-full">
                    <Signal className="w-4 h-4 text-blue-400" />
                </div>
                <div className="absolute top-[70%] left-[70%] -translate-x-1/2 -translate-y-1/2 p-2 bg-slate-800 border border-blue-500/30 rounded-full">
                    <Signal className="w-4 h-4 text-blue-400" />
                </div>
                <div className="absolute top-[30%] left-[70%] -translate-x-1/2 -translate-y-1/2 p-2 bg-slate-800 border border-blue-500/30 rounded-full">
                    <Signal className="w-4 h-4 text-blue-400" />
                </div>
                <div className="absolute top-[70%] left-[30%] -translate-x-1/2 -translate-y-1/2 p-2 bg-slate-800 border border-slate-600 rounded-full opacity-50">
                    <Signal className="w-4 h-4 text-slate-500" />
                </div>
                
                {/* Outage Alert */}
                <div className="absolute top-[70%] left-[30%] translate-x-4 -translate-y-4">
                     <div className="bg-red-900/80 text-red-200 text-[8px] px-1 py-0.5 rounded border border-red-700 animate-pulse">Packet Loss: 98%</div>
                </div>
             </div>
          </div>
        );

      case 'Healthcare':
        return (
            <div className={baseClasses}>
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:100%_40px]"></div>
                
                {/* EKG Line */}
                <div className="absolute inset-0 flex items-center">
                    <svg className="w-full h-24 overflow-visible">
                        <path d="M0,50 L100,50 L120,20 L140,80 L160,50 L250,50 L270,10 L290,90 L310,50 L400,50" 
                              fill="none" 
                              stroke="#10b981" 
                              strokeWidth="2" 
                              className="drop-shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                        />
                    </svg>
                </div>

                {/* Patient Card */}
                <div className="absolute top-4 right-4 bg-slate-800/90 backdrop-blur border border-slate-600 p-3 rounded-sm w-40">
                    <div className="flex items-center gap-2 mb-2">
                        <Activity className="w-3 h-3 text-emerald-400" />
                        <span className="text-[10px] text-slate-300 font-bold uppercase">Vitals Stream</span>
                    </div>
                    <div className="space-y-1">
                        <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full w-3/4 bg-emerald-500"></div>
                        </div>
                        <div className="h-1.5 w-full bg-slate-700 rounded-full overflow-hidden">
                            <div className="h-full w-1/2 bg-blue-500"></div>
                        </div>
                    </div>
                    <div className="mt-2 text-[8px] text-slate-400 font-mono">ID: 994-A2 • ICU-04</div>
                </div>
            </div>
        );

      case 'Legal':
        return (
            <div className={baseClasses}>
                <div className="absolute inset-0 flex justify-center py-6 px-12 bg-slate-800">
                     <div className="w-full h-full bg-white/5 border border-slate-600/50 p-6 relative shadow-xl">
                        {/* Paper header */}
                        <div className="flex justify-between items-start mb-6">
                             <div className="w-8 h-8 bg-slate-700 rounded-sm"></div>
                             <div className="space-y-1">
                                 <div className="w-20 h-1 bg-slate-600"></div>
                                 <div className="w-16 h-1 bg-slate-600"></div>
                             </div>
                        </div>
                        
                        {/* Redacted Text */}
                        <div className="space-y-2">
                            <div className="w-full h-2 bg-slate-600/50 rounded-sm"></div>
                            <div className="w-3/4 h-2 bg-slate-600/50 rounded-sm"></div>
                            <div className="flex gap-1">
                                <div className="w-1/4 h-2 bg-yellow-500/20 border border-yellow-500/50 rounded-sm"></div>
                                <div className="w-1/2 h-2 bg-slate-900 rounded-sm"></div> {/* Redacted block */}
                            </div>
                            <div className="w-full h-2 bg-slate-600/50 rounded-sm"></div>
                            <div className="w-5/6 h-2 bg-slate-600/50 rounded-sm"></div>
                            <div className="w-2/3 h-2 bg-slate-900 rounded-sm mt-2"></div> {/* Redacted block */}
                        </div>

                        {/* Search Hit Overlay */}
                        <div className="absolute bottom-4 right-4 bg-slate-900 border border-lucenia-500 p-2 rounded-sm shadow-lg flex items-center gap-2">
                            <FileText className="w-3 h-3 text-lucenia-400" />
                            <span className="text-[9px] text-lucenia-100">Match found: "Liability"</span>
                        </div>
                     </div>
                </div>
            </div>
        );

      case 'Manufacturing':
        return (
            <div className={baseClasses}>
                {/* Blueprint Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(#334155_1px,transparent_1px),linear-gradient(90deg,#334155_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)] opacity-20"></div>
                
                {/* Wireframe Box */}
                <div className="absolute inset-0 flex items-center justify-center perspective-1000">
                    <div className="w-24 h-24 border-2 border-orange-500/50 bg-orange-500/5 transform rotate-45 rotate-x-12 relative">
                         <div className="absolute -top-6 -right-6 text-orange-400">
                             <AlertCircle className="w-6 h-6 animate-bounce" />
                         </div>
                    </div>
                </div>
                
                {/* IoT Metrics */}
                <div className="absolute top-4 left-4 space-y-2">
                    <div className="flex items-center gap-2">
                        <Cpu className="w-3 h-3 text-slate-400" />
                        <span className="text-[9px] text-slate-400 font-mono">SENSOR_01: <span className="text-emerald-400">OK</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Cpu className="w-3 h-3 text-slate-400" />
                        <span className="text-[9px] text-slate-400 font-mono">SENSOR_02: <span className="text-orange-400">HEAT_WARN</span></span>
                    </div>
                </div>
            </div>
        );

      case 'FinTech':
        return (
            <div className={baseClasses}>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    {/* Chart Grid */}
                    <div className="absolute inset-0 border-b border-l border-slate-700/50 m-6"></div>
                    
                    {/* Line Chart */}
                    <svg className="w-full h-32 overflow-visible relative z-10" viewBox="0 0 100 50" preserveAspectRatio="none">
                         <polyline 
                            points="0,40 10,35 20,38 30,30 40,32 50,15 60,20 70,10 80,12 90,5 100,2" 
                            fill="none" 
                            stroke="#8b5cf6" 
                            strokeWidth="1"
                            vectorEffect="non-scaling-stroke"
                         />
                         {/* Anomaly Dot */}
                         <circle cx="50" cy="15" r="1.5" fill="#ef4444" className="animate-ping" />
                         <circle cx="50" cy="15" r="1.5" fill="#ef4444" />
                    </svg>

                    {/* Transaction Card */}
                    <div className="absolute top-8 right-8 bg-slate-800 border border-slate-700 p-3 rounded-sm shadow-xl">
                        <div className="flex items-center gap-2 mb-1">
                            <TrendingUp className="w-3 h-3 text-violet-400" />
                            <span className="text-[9px] text-slate-300 font-bold uppercase">Transaction Alert</span>
                        </div>
                        <div className="text-[8px] text-slate-400 font-mono">
                            Amount: $9,240.00<br/>
                            Risk Score: <span className="text-red-400 font-bold">HIGH (0.92)</span>
                        </div>
                    </div>
                </div>
            </div>
        );

      case 'Agriculture':
        return (
             <div className={baseClasses}>
                 {/* Satellite Map bg (reused geo map logic essentially) */}
                 <div className="absolute inset-0 opacity-30 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/USA_location_map.svg/1024px-USA_location_map.svg.png')] bg-cover bg-center grayscale invert sepia-[.5] hue-rotate-[90deg]"></div>
                 
                 {/* Field Grid */}
                 <div className="absolute inset-0 flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-1 rotate-12 opacity-80">
                          <div className="w-10 h-10 bg-green-500/20 border border-green-500/40"></div>
                          <div className="w-10 h-10 bg-green-600/40 border border-green-500/40"></div>
                          <div className="w-10 h-10 bg-yellow-500/30 border border-yellow-500/40 animate-pulse"></div>
                          <div className="w-10 h-10 bg-green-500/20 border border-green-500/40"></div>
                          <div className="w-10 h-10 bg-green-500/30 border border-green-500/40"></div>
                          <div className="w-10 h-10 bg-green-500/20 border border-green-500/40"></div>
                      </div>
                 </div>

                 {/* Sensor Tag */}
                 <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-slate-900/80 p-2 rounded-sm border border-slate-700">
                     <Sprout className="w-4 h-4 text-green-400" />
                     <div className="text-[8px] text-slate-300">
                         <div className="font-bold">Field 4-B</div>
                         <div className="text-yellow-400">Moisture Low</div>
                     </div>
                 </div>
             </div>
        );

      case 'Geo':
      default:
        return (
            <div className={baseClasses}>
                {/* Simulated Map Interface */}
                <div className="absolute inset-0 opacity-40 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/USA_location_map.svg/1024px-USA_location_map.svg.png')] bg-cover bg-center grayscale invert"></div>
                
                {/* UI Overlay */}
                <div className="absolute top-2 right-2 flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-75"></div>
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse delay-150"></div>
                </div>
                
                {/* Data Points with Pulse */}
                <div className="absolute top-1/3 left-1/4 group-hover:scale-125 transition-transform duration-300">
                    <div className="absolute -inset-2 bg-green-400/30 rounded-full animate-ping"></div>
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)] relative z-10 cursor-help" title="Asset: 4421-A"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 group-hover:scale-125 transition-transform duration-300 delay-100">
                        <div className="absolute -inset-2 bg-green-400/30 rounded-full animate-ping delay-75"></div>
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)] relative z-10 cursor-help" title="Asset: 9912-B"></div>
                </div>
                <div className="absolute bottom-1/3 right-1/3 group-hover:scale-125 transition-transform duration-300 delay-200">
                        <div className="absolute -inset-2 bg-green-400/30 rounded-full animate-ping delay-150"></div>
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full shadow-[0_0_8px_rgba(74,222,128,0.8)] relative z-10 cursor-help" title="Asset: 3321-C"></div>
                </div>
                
                {/* Legend */}
                <div className="absolute bottom-2 right-2 bg-slate-800/90 border border-slate-600 p-2 rounded-sm backdrop-blur-sm">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                        <span className="text-[8px] text-slate-300">Active Assets</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                        <span className="text-[8px] text-slate-300">Threats</span>
                    </div>
                </div>
            </div>
        );
    }
  };

  const activeContent = contentMap[activeTab];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Content */}
          <div className="lg:w-5/12">
            <div className="inline-block px-2 py-1 bg-slate-200 rounded-sm text-[10px] font-bold uppercase tracking-widest text-slate-600 mb-6">
              Domain Data Platform
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-8 tracking-tight leading-tight animate-in fade-in duration-300 key={activeContent.title}">
              {activeContent.title}
            </h2>
            
            <p className="text-slate-600 mb-8 text-lg font-light leading-relaxed text-balance animate-in fade-in duration-300 delay-75 key={activeContent.description}">
              {activeContent.description}
            </p>
            
            <div className="h-1 w-20 bg-lucenia-500 rounded-full transition-all duration-300"></div>
          </div>

          {/* Right Content */}
          <div className="lg:w-7/12">
             {/* Tabs */}
             <div className="flex flex-wrap gap-x-6 gap-y-2 border-b border-slate-200 pb-0 mb-8 relative">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`text-sm font-semibold transition-colors duration-200 pb-4 relative ${
                      activeTab === tab 
                        ? 'text-lucenia-600' 
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    {tab}
                    {activeTab === tab && (
                        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-lucenia-600 animate-in fade-in zoom-in duration-200" />
                    )}
                  </button>
                ))}
             </div>

             {/* Tab Content Area */}
             <div className="flex flex-col md:flex-row gap-8 animate-in slide-in-from-bottom-2 fade-in duration-500" key={activeTab}>
                <div className="md:w-1/2">
                   <p className="text-sm font-bold text-slate-900 mb-4">
                     Industry Context
                   </p>
                   <p className="text-sm text-slate-600 leading-relaxed mb-4">
                     {activeTab === 'Geo' ? 'Geospatial data is fundamentally ' : `${activeTab} operations rely on `}
                     <span className="text-lucenia-700">real-time intelligence</span>. Lucenia optimizes retrieval for the specific data structures and security requirements of {activeTab.toLowerCase()} workflows.
                   </p>
                   <p className="text-xs text-slate-500 italic border-l-2 border-lucenia-200 pl-3">
                     {activeContent.tagline}
                   </p>
                   <div className="mt-6 flex items-center gap-2 text-xs font-bold text-lucenia-600 cursor-pointer hover:text-lucenia-800">
                       <MapIcon className="w-3 h-3" />
                       EXPLORE {activeTab.toUpperCase()} USE CASES
                   </div>
                </div>
                
                <div className="md:w-1/2">
                   {renderVisual()}
                </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default DomainPlatform;