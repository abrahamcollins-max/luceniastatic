import React, { useRef } from 'react';
import Button from './Button';
import { Shield, Lock, Key } from 'lucide-react';

const BookSection: React.FC = () => {
  const bookRef = useRef<HTMLImageElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!bookRef.current) return;
    const { left, top, width, height } = bookRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    bookRef.current.style.transform = `rotateY(${x}deg) rotateX(${-y}deg) scale(1.05)`;
  };

  const handleMouseLeave = () => {
    if (!bookRef.current) return;
    bookRef.current.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
  };

  return (
    <section className="py-32 bg-slate-50 overflow-hidden relative border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-20">
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mb-6 tracking-tight">
              Definitive Guidance <br/> by the <span className="text-lucenia-700">Creator of OpenSearch</span>
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
              Lucenia isn't just a tool; it's a methodology. Founded by the author of <em>Scaling Search and Retrieval for Contextual AI</em>, we are defining the standard for secure, private RAG architectures.
            </p>

            <ul className="space-y-6 mb-10">
              {[
                  { title: "Context Design", desc: "Retrieval that provides precise, non-hallucinated context." },
                  { title: "Petabyte Scale", desc: "Architecture that scales horizontally without complexity." },
                  { title: "Data Sovereignty", desc: "Keep data private on-prem, at the edge, or in your cloud." }
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full border border-lucenia-200 bg-lucenia-50 flex items-center justify-center text-lucenia-600 text-xs font-bold mt-0.5">
                        {i + 1}
                    </div>
                    <div className="ml-4">
                        <h4 className="text-slate-900 font-medium text-sm">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              <Button variant="outline">Read Chapter 1</Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center perspective-1000">
            <div 
                className="relative group cursor-pointer perspective-1000"
                onMouseMove={handleMouseMove} 
                onMouseLeave={handleMouseLeave}
            >
              <div className="absolute inset-0 bg-slate-900/10 rotate-3 rounded-lg transform scale-95 origin-bottom-right transition-transform group-hover:rotate-6 blur-sm"></div>
              <img 
                ref={bookRef}
                src="https://i.ibb.co/5hpqQJDZ/orielly-book-knize-1.webp" 
                alt="Scaling Search and Retrieval Book" 
                className="relative z-10 w-64 lg:w-72 shadow-2xl rounded border border-white/50 transition-transform duration-200 ease-out"
                style={{ transformStyle: 'preserve-3d' }}
              />
            </div>
          </div>
        </div>

        {/* Security Badges - Integrated minimal look */}
        <div className="mt-32 pt-16 border-t border-slate-200">
            <div className="text-center mb-12">
                <h3 className="text-xl font-semibold text-slate-900 tracking-tight">Secure by Design</h3>
                <p className="text-slate-500 mt-2">Enterprise-grade security controls baked into every layer of the platform.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm mb-4 group-hover:border-lucenia-300 transition-colors">
                        <Shield className="h-5 w-5 text-slate-700 group-hover:text-lucenia-600" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">SOC 2 Type II</h4>
                    <p className="text-xs text-slate-500 mt-2 max-w-xs">Fully compliant processes and controls for data security.</p>
                </div>
                <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm mb-4 group-hover:border-lucenia-300 transition-colors">
                        <Lock className="h-5 w-5 text-slate-700 group-hover:text-lucenia-600" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Air-Gapped Ready</h4>
                    <p className="text-xs text-slate-500 mt-2 max-w-xs">Deploy without internet access. Zero external dependencies.</p>
                </div>
                <div className="flex flex-col items-center group">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border border-slate-200 shadow-sm mb-4 group-hover:border-lucenia-300 transition-colors">
                        <Key className="h-5 w-5 text-slate-700 group-hover:text-lucenia-600" />
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide">Role-Based Access</h4>
                    <p className="text-xs text-slate-500 mt-2 max-w-xs">Granular permission controls at index and document level.</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;