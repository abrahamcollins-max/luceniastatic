import React from 'react';
import { Twitter, Linkedin, Facebook, ArrowRight, Terminal } from 'lucide-react';
import Button from './Button';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-white">
      {/* Creative CTA Section */}
      <div className="relative py-32 bg-[#020617] overflow-hidden border-t border-slate-900 group">
            {/* 3D Grid Floor */}
            <div 
                className="absolute inset-0 opacity-[0.15]" 
                style={{ 
                    backgroundImage: 'linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)', 
                    backgroundSize: '60px 60px',
                    transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) scale(2.5)',
                    transformOrigin: 'top center',
                    maskImage: 'linear-gradient(to bottom, transparent, black 40%)'
                }}
            ></div>

            {/* Moving glow effect */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-lucenia-600/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse-slow"></div>
            
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700/50 backdrop-blur-md text-emerald-400 text-[10px] font-mono tracking-widest uppercase mb-8 shadow-2xl">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    System Status: Ready for Deployment
                </div>

                <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-8 leading-[1.1]">
                    Ready to replace <br/>
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-500">Elasticsearch?</span>
                </h2>
                
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                    Join the intelligence teams securing their RAG pipelines with Lucenia. 
                    <span className="text-slate-200 block mt-2">Scale to petabytes. Deploy in minutes.</span>
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Button size="lg" className="min-w-[220px] bg-white text-slate-950 hover:bg-lucenia-50 border-none shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_60px_-15px_rgba(255,255,255,0.5)] transition-all duration-300">
                        Start Deployment <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                    <div className="flex items-center gap-2 group/term cursor-pointer">
                         <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center border border-slate-700 group-hover/term:border-slate-500 transition-colors">
                            <Terminal className="w-4 h-4 text-slate-400 group-hover/term:text-white transition-colors" />
                         </div>
                         <span className="text-slate-400 text-sm font-medium hover:text-white transition-colors">Read Documentation</span>
                    </div>
                </div>
            </div>
      </div>

      {/* Main Footer Content */}
      <div className="border-t border-slate-200 pt-16 pb-8 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                <div className="col-span-1 md:col-span-1">
                    <div className="flex items-center gap-2 mb-4">
                        <img 
                            src="https://i.ibb.co/ztyZsXN/Asset-15thlucenialogosmall.png" 
                            alt="Lucenia" 
                            className="h-6 w-auto" 
                        />
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed mb-6">
                        The secure, scalable retrieval engine for modern enterprise AI.
                    </p>
                    <div className="flex gap-4">
                        <a href="#" className="text-slate-400 hover:text-lucenia-600 transition-colors"><Twitter className="h-5 w-5" /></a>
                        <a href="#" className="text-slate-400 hover:text-lucenia-600 transition-colors"><Linkedin className="h-5 w-5" /></a>
                        <a href="#" className="text-slate-400 hover:text-lucenia-600 transition-colors"><Facebook className="h-5 w-5" /></a>
                    </div>
                </div>
                
                <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-4">Product</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li><a href="#" className="hover:text-lucenia-600">Features</a></li>
                        <li><a href="#" className="hover:text-lucenia-600">Security</a></li>
                        <li><a href="#" className="hover:text-lucenia-600">Integrations</a></li>
                        <li><a href="#" className="hover:text-lucenia-600">Changelog</a></li>
                        <li><a href="#" className="hover:text-lucenia-600">Documentation</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold text-slate-900 text-sm mb-4">Company</h4>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li><a href="#" className="hover:text-lucenia-600">About</a></li>
                        <li><a href="#" className="hover:text-lucenia-600">Blog</a></li>
                        <li><a href="#" className="hover:text-lucenia-600">Careers</a></li>
                        <li><a href="#" className="hover:text-lucenia-600">Contact</a></li>
                        <li><a href="#" className="hover:text-lucenia-600">Partners</a></li>
                    </ul>
                </div>
                
                <div className="col-span-1 md:col-span-1">
                    <h4 className="font-bold text-slate-900 text-sm mb-4">Subscribe</h4>
                    <p className="text-sm text-slate-500 mb-4">Latest retrieval research sent to your inbox.</p>
                    <div className="flex flex-col gap-2">
                        <input type="email" placeholder="Email address" className="w-full bg-white border border-slate-200 rounded-sm px-3 py-2 text-sm focus:ring-2 focus:ring-lucenia-500 outline-none transition-all" />
                        <button className="bg-slate-900 text-white px-4 py-2 rounded-sm text-sm font-medium hover:bg-slate-800 transition-colors">Subscribe</button>
                    </div>
                </div>
            </div>
            
            <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
                <p>© 2025 Lucenia Inc. All Rights Reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-slate-600">Privacy Policy</a>
                    <a href="#" className="hover:text-slate-600">Terms of Service</a>
                    <a href="#" className="hover:text-slate-600">Code of Conduct</a>
                </div>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
