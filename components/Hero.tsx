import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import MagneticButton from './MagneticButton';
import { Copy, ChevronRight, Terminal, Check } from 'lucide-react';

const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [offsetY, setOffsetY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const tiltRef = useRef<HTMLDivElement>(null);
  
  // Typewriter state
  const words = ["Contextual AI", "RAG", "Security", "The Enterprise"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  // Typewriter Logic
  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(50);
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(150);
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000); // Pause at end
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, typingSpeed]);

  const handleCopy = () => {
    navigator.clipboard.writeText("curl -sSL get.lucenia.dev | bash");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
        if (heroRef.current) {
            setOffsetY(window.scrollY * 0.3); // Parallax speed
        }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
      if (!tiltRef.current) return;
      const rect = tiltRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -2; // Max 2deg rotation
      const rotateY = ((x - centerX) / centerX) * 2;

      tiltRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
      if (!tiltRef.current) return;
      tiltRef.current.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
  };

  return (
    <section ref={heroRef} className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-transparent border-b border-slate-200" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {/* Engineered Grid Background with Parallax and Scanning Beam */}
      <div 
        className="absolute inset-0 bg-grid-slate [mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)] pointer-events-none"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-lucenia-400/5 to-transparent h-[50vh] w-full animate-beam opacity-0"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          
          <div className="lg:w-1/2 text-center lg:text-left">
            {/* Status Indicator */}
            <div className="opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white border border-slate-200 shadow-sm mb-8 cursor-default hover:border-lucenia-300 transition-colors">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lucenia-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-lucenia-500"></span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-500 tracking-widest uppercase font-mono">System Online: v2.4.0</span>
                </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-slate-900 mb-6 leading-[1.05] min-h-[3.2em] lg:min-h-[2.2em] opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Search & Retrieval <br/> for 
              {/* Shimmer Text Effect */}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-lucenia-600 via-lucenia-400 to-lucenia-600 animate-text-shimmer bg-[length:200%_auto] inline-block ml-3">
                 {currentText}
              </span>
              <span className="animate-pulse ml-1 text-lucenia-600">|</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light text-balance opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              The only self-hosted, scalable replacement for Elasticsearch designed explicitly for secure, high-stakes enterprise environments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
               <MagneticButton>
                  <Button size="lg" className="min-w-[160px]">Start Deployment</Button>
               </MagneticButton>
               
               {/* Terminal Snippet - Technical */}
               <div className="flex items-center gap-0 bg-slate-900 text-slate-300 pl-4 pr-2 py-3 rounded-sm font-mono text-xs shadow-xl border border-slate-800 transition-transform hover:scale-[1.01]">
                  <span className="text-lucenia-400 font-bold mr-2">$</span>
                  <span className="tracking-tight text-white mr-4">curl -sSL get.lucenia.dev | bash</span>
                  <button 
                    onClick={handleCopy}
                    className="text-slate-500 hover:text-white transition-colors p-1 rounded hover:bg-slate-800" 
                    aria-label="Copy"
                  >
                    {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  </button>
               </div>
            </div>
            
            <div className="pt-8 border-t border-slate-200/60 overflow-hidden opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
               <p className="text-[10px] font-bold text-slate-400 mb-4 uppercase tracking-widest font-mono">Compatible Infrastructure</p>
               <div className="relative w-full overflow-hidden mask-image-gradient group">
                   <div className="flex gap-12 whitespace-nowrap animate-marquee opacity-60 grayscale mix-blend-multiply hover-pause">
                        {[1, 2, 3].map((set) => (
                            <React.Fragment key={set}>
                                <span className="font-bold text-base font-sans tracking-tight text-slate-600">AWS</span>
                                <span className="font-bold text-base font-sans tracking-tight text-slate-600">Azure</span>
                                <span className="font-bold text-base font-sans tracking-tight text-slate-600">Google Cloud</span>
                                <span className="font-bold text-base font-sans tracking-tight text-slate-600">DigitalOcean</span>
                                <span className="font-bold text-base font-sans tracking-tight text-slate-600">Oracle</span>
                                <span className="font-bold text-base font-sans tracking-tight text-slate-600">Kubernetes</span>
                            </React.Fragment>
                        ))}
                   </div>
               </div>
            </div>

          </div>

          <div className="lg:w-1/2 relative hidden md:block opacity-0 animate-fade-in-up" style={{ perspective: '1000px', animationDelay: '0.6s' }}>
             {/* Abstract Technical Visualization */}
             <div 
                ref={tiltRef}
                className="relative w-full aspect-square max-w-lg mx-auto bg-white border border-slate-200 rounded-sm shadow-2xl overflow-hidden p-1 transition-transform duration-100 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
             >
                <div className="absolute inset-0 bg-grid-slate-strong opacity-40"></div>
                
                {/* Simulated UI inside */}
                <div className="w-full h-full bg-slate-50 relative overflow-hidden">
                    {/* Header */}
                    <div className="h-8 border-b border-slate-200 bg-white flex items-center px-4 justify-between">
                        <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                            <div className="w-2 h-2 rounded-full bg-slate-300"></div>
                        </div>
                        <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Metric Explorer</div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                         <div className="flex justify-between items-end mb-8">
                             <div>
                                 <div className="text-4xl font-mono text-slate-900 tracking-tighter">-142ms</div>
                                 <div className="text-xs text-slate-500 font-medium mt-1">LATENCY REDUCTION (P99)</div>
                             </div>
                             <div className="h-10 w-32 bg-lucenia-100 flex items-end gap-1 p-1">
                                 {[40, 60, 45, 70, 85, 60, 75, 50, 65, 80].map((h, i) => (
                                     <div key={i} style={{height: `${h}%`}} className="flex-1 bg-lucenia-500"></div>
                                 ))}
                             </div>
                         </div>
                         
                         <div className="grid grid-cols-2 gap-4">
                             <div className="border border-slate-200 bg-white p-3 rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                                 <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Vector Index</div>
                                 <div className="text-lg font-mono text-slate-800">Ready</div>
                             </div>
                             <div className="border border-slate-200 bg-white p-3 rounded-sm shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
                                 <div className="text-[10px] text-slate-400 uppercase font-bold mb-1">Shards</div>
                                 <div className="text-lg font-mono text-slate-800">12/12</div>
                             </div>
                         </div>

                         {/* Code block simulated */}
                         <div className="mt-4 bg-slate-900 p-3 rounded-sm shadow-inner">
                             <div className="w-1/2 h-2 bg-slate-700 rounded-sm mb-2"></div>
                             <div className="w-3/4 h-2 bg-slate-800 rounded-sm mb-2"></div>
                             <div className="w-2/3 h-2 bg-slate-800 rounded-sm"></div>
                         </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;