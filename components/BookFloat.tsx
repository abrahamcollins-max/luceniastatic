import React, { useState } from 'react';
import { X, Download, Check, Mail, Shield } from 'lucide-react';
import Button from './Button';

const BookFloat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, setFormState] = useState<'initial' | 'input' | 'submitting' | 'success'>('initial');
  const [email, setEmail] = useState('');

  const handleDownloadClick = () => {
    setFormState('input');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    // Simulate API call
    setTimeout(() => {
        setFormState('success');
    }, 1500);
  };

  const handleClose = () => {
      setIsOpen(false);
      setTimeout(() => {
          setFormState('initial');
          setEmail('');
      }, 500);
  }

  return (
    <>
      {/* Floating Trigger */}
      <div 
        className={`fixed bottom-8 right-8 z-40 transition-all duration-500 ease-in-out ${isOpen ? 'translate-y-24 opacity-0 pointer-events-none scale-95' : 'translate-y-0 opacity-100 scale-100'}`}
      >
        <button 
            onClick={() => setIsOpen(true)}
            className="group relative w-16 md:w-20 aspect-[1/1.4] bg-slate-900 rounded shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)] hover:-translate-y-2 transition-all duration-300 overflow-visible"
        >
            {/* Ambient Glow Animation */}
            <div className="absolute -inset-4 bg-lucenia-500/30 rounded-full blur-xl animate-pulse-slow pointer-events-none opacity-75"></div>

            <div className="absolute -top-2 -right-2 w-6 h-6 bg-lucenia-600 rounded-full flex items-center justify-center text-[10px] font-bold text-white border-2 border-white animate-bounce shadow-sm z-10">1</div>
            
            <div className="absolute inset-0 rounded overflow-hidden border border-white/20 relative z-0">
                <img 
                    src="https://i.ibb.co/5hpqQJDZ/orielly-book-knize-1.webp" 
                    alt="Book Cover" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            
            {/* Tooltip */}
            <div className="absolute right-full top-1/2 -translate-y-1/2 mr-6 bg-slate-900 text-white text-xs px-4 py-2 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none shadow-xl border border-slate-700 font-medium translate-x-2 group-hover:translate-x-0 hidden md:block z-20">
                Get the Free Chapter
                <div className="absolute top-1/2 -right-1.5 -translate-y-1/2 border-6 border-transparent border-l-slate-900"></div>
            </div>
        </button>
      </div>

      {/* Modal Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <div 
                className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300" 
                onClick={handleClose}
            ></div>
            
            {/* Modal Content */}
            <div className="relative bg-white rounded-sm shadow-2xl w-full max-w-3xl overflow-hidden animate-in zoom-in-95 slide-in-from-bottom-4 duration-300 border border-slate-200 flex flex-col md:flex-row max-h-[90vh] md:max-h-[600px]">
                
                {/* Close Button */}
                <button 
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 z-20 p-2 hover:bg-slate-100 rounded-full transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Left: Image Side */}
                <div className="md:w-5/12 bg-slate-100 p-8 md:p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-200 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-grid-slate opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-200/50 to-transparent"></div>
                    
                    {/* Floating Book Effect */}
                    <div className="relative perspective-1000">
                        <div className="relative transform transition-transform duration-700 group-hover:rotate-y-12 group-hover:rotate-x-6 rotate-y-6 rotate-x-3 preserve-3d">
                             <img 
                                src="https://i.ibb.co/5hpqQJDZ/orielly-book-knize-1.webp" 
                                alt="Scaling Search and Retrieval"
                                className="w-40 md:w-48 shadow-[20px_20px_40px_-10px_rgba(0,0,0,0.3)] rounded-sm border-r border-b border-white/20" 
                            />
                            {/* Reflection/Shadow */}
                            <div className="absolute -bottom-8 left-4 right-4 h-4 bg-black/20 blur-xl rounded-full transform scale-x-110"></div>
                        </div>
                    </div>
                </div>

                {/* Right: Content Side */}
                <div className="md:w-7/12 p-8 md:p-10 flex flex-col justify-center bg-white">
                    <div className="inline-flex items-center gap-2 mb-4">
                         <span className="px-2 py-0.5 rounded-sm bg-lucenia-50 text-lucenia-700 text-[10px] font-bold uppercase tracking-widest border border-lucenia-100">Free Early Release</span>
                         <span className="h-px w-8 bg-slate-200"></span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 leading-tight tracking-tight">
                        Scaling Search and Retrieval for Contextual AI
                    </h3>
                    <p className="text-sm font-medium text-slate-500 mb-6">By Nicholas Knize, Creator of OpenSearch</p>

                    <p className="text-slate-600 text-sm leading-relaxed mb-8">
                        Get the definitive guide on architecting secure, high-scale RAG systems. Learn how to move beyond basic vector search to true contextual retrieval.
                    </p>

                    <div className="space-y-3 mb-8 border-t border-b border-slate-100 py-6">
                         {[
                             "Master vector search at petabyte scale",
                             "Architecting for zero-trust environments",
                             "Hybrid retrieval strategies explained"
                         ].map((item, i) => (
                             <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                                <div className="mt-0.5 w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                    <Check className="w-2.5 h-2.5 text-emerald-600" />
                                </div>
                                <span>{item}</span>
                             </div>
                         ))}
                    </div>

                    <div className="mt-auto min-h-[88px]">
                        {formState === 'initial' && (
                            <Button 
                                className="w-full justify-center gap-2 group" 
                                size="lg" 
                                onClick={handleDownloadClick}
                            >
                                <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" /> 
                                Download Chapter 1
                            </Button>
                        )}

                        {formState === 'input' && (
                            <form onSubmit={handleSubmit} className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                                <label className="block text-xs font-bold text-slate-700 mb-2 ml-1">Business Email Address</label>
                                <div className="flex gap-2">
                                    <input 
                                        type="email" 
                                        required
                                        placeholder="name@company.com"
                                        className="flex-1 bg-slate-50 border border-slate-300 rounded-sm px-4 py-2.5 text-sm focus:ring-2 focus:ring-lucenia-500 outline-none transition-all placeholder:text-slate-400 text-slate-900"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoFocus
                                    />
                                    <Button type="submit" size="md" className="min-w-[100px]">
                                        Send
                                    </Button>
                                </div>
                                <p className="text-[10px] text-slate-400 mt-2 ml-1 flex items-center gap-1">
                                    <Shield className="w-3 h-3" /> No spam. Unsubscribe anytime.
                                </p>
                            </form>
                        )}

                        {formState === 'submitting' && (
                            <div className="w-full h-12 flex items-center justify-center gap-3 text-sm font-medium text-slate-500 bg-slate-50 rounded-sm border border-slate-100 animate-pulse">
                                <div className="w-4 h-4 border-2 border-lucenia-600 border-t-transparent rounded-full animate-spin"></div>
                                Sending...
                            </div>
                        )}

                        {formState === 'success' && (
                            <div className="bg-emerald-50 border border-emerald-100 rounded-sm p-4 flex items-center gap-4 animate-in fade-in zoom-in-95 duration-300">
                                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shrink-0">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-emerald-800 text-sm">Check your inbox!</h4>
                                    <p className="text-xs text-emerald-600 mt-0.5">We've sent the download link to <span className="font-semibold">{email}</span></p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
      )}
    </>
  );
};

export default BookFloat;