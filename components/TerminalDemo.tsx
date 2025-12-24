import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const TerminalDemo: React.FC = () => {
  const commandText = 'lucenia query --natural "Does Lucenia support air-gapped deployments?"';
  const [displayedText, setDisplayedText] = useState('');
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => commandText.slice(0, index));
      index++;
      if (index > commandText.length) {
        clearInterval(interval);
        setTimeout(() => setShowResult(true), 600);
      }
    }, 40); // Typing speed

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-3xl mx-auto rounded-sm shadow-2xl overflow-hidden font-mono text-sm border border-slate-700 bg-[#0f172a] backdrop-blur-sm bg-opacity-95">
        {/* Window Header */}
        <div className="bg-[#1e293b] px-4 py-2.5 flex items-center justify-between border-b border-slate-700">
            <div className="flex gap-2 opacity-50">
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-slate-500"></div>
            </div>
            <div className="text-[10px] text-slate-400 font-bold tracking-widest uppercase">lucenia-cli — bash</div>
            <div className="w-10"></div>
        </div>
        
        {/* Terminal Body */}
        <div className="p-6 text-slate-300 h-96 overflow-y-auto relative font-mono leading-relaxed bg-[#0f172a]">
            <div className="grid grid-cols-[30px_1fr] gap-4">
                {/* Line Numbers */}
                <div className="text-slate-600 text-right select-none text-xs leading-6 opacity-50">
                    1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12
                </div>
                
                {/* Content */}
                <div className="space-y-1 text-xs md:text-sm">
                    <div className="flex gap-2 items-center min-h-[24px]">
                        <span className="text-emerald-400 font-bold">➜</span>
                        <span className="text-blue-400 font-bold">~</span>
                        <span className="text-white break-all">
                            {displayedText}
                            <span className="inline-block w-2 h-4 bg-slate-400 align-middle ml-1 animate-pulse"></span>
                        </span>
                    </div>
                    
                    {showResult && (
                      <div className="animate-in fade-in duration-500">
                        <div className="text-slate-500 italic py-2 pl-4 border-l border-slate-700 ml-1">
                            [System] Vectorizing query... <br/>
                            [System] Retrieving context (took 12ms)...
                        </div>
                        
                        <div className="bg-[#1e293b] border border-slate-700 p-4 rounded-sm mt-2 shadow-lg">
                            <div className="text-emerald-400 font-bold mb-2 uppercase text-[10px] tracking-widest">Answer Generated</div>
                            <div className="text-slate-200 leading-relaxed">
                                Yes. Lucenia is designed explicitly for secure, air-gapped environments. 
                                Unlike cloud-native vector databases, it can be deployed as a single binary 
                                or clustered service entirely within your VPC or on-premise hardware without 
                                external dependencies.
                            </div>
                            <div className="mt-3 pt-3 border-t border-slate-700 flex justify-between items-center text-[10px] text-slate-500">
                                <span>Source: docs/architecture/deployment.md</span>
                                <span className="font-bold text-emerald-500">Score: 0.98</span>
                            </div>
                        </div>
                        
                        <div className="flex gap-2 pt-4 items-center">
                            <span className="text-emerald-400 font-bold">➜</span>
                            <span className="text-blue-400 font-bold">~</span>
                        </div>
                      </div>
                    )}
                </div>
            </div>
        </div>
    </div>
  );
};

export default TerminalDemo;