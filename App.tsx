import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CostCalculator from './components/CostCalculator';
import TerminalDemo from './components/TerminalDemo';
import Architecture from './components/Architecture';
import BookSection from './components/BookSection';
import DomainPlatform from './components/DomainPlatform';
import Resources from './components/Resources';
import Stats from './components/Stats';
import Footer from './components/Footer';
import Button from './components/Button';
import BookFloat from './components/BookFloat';
import RevealOnScroll from './components/RevealOnScroll';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans overflow-x-hidden bg-white text-slate-900 relative">
      {/* Visual Enhancements - Mesh Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-slate-50">
        <div className="absolute top-0 left-[-10%] w-[50%] h-[50%] bg-lucenia-100/40 rounded-full blur-[120px] animate-blob mix-blend-multiply"></div>
        <div className="absolute top-0 right-[-10%] w-[50%] h-[50%] bg-indigo-100/40 rounded-full blur-[120px] animate-blob animation-delay-2000 mix-blend-multiply"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] bg-blue-100/40 rounded-full blur-[120px] animate-blob animation-delay-4000 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-noise opacity-[0.03] mix-blend-overlay"></div>
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between opacity-[0.03]">
        <div className="w-px h-full bg-slate-900"></div>
        <div className="w-px h-full bg-slate-900 hidden md:block"></div>
        <div className="w-px h-full bg-slate-900 hidden lg:block"></div>
        <div className="w-px h-full bg-slate-900"></div>
      </div>

      <Navbar />
      
      <main className="relative z-10">
        {/* Hero Section - No reveal wrapper as it has initial load animations */}
        <Hero />

        {/* Value Prop Banner */}
        <RevealOnScroll>
          <section className="bg-slate-50/50 backdrop-blur-sm border-b border-slate-200 py-16">
              <div className="max-w-4xl mx-auto px-4 text-center">
                  <h2 className="text-2xl font-semibold text-slate-800 mb-3 tracking-tight">Lose Elasticsearch — not your time</h2>
                  <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
                      Drop-in replacement that's <span className="font-bold text-slate-900">7x cheaper</span> and instantly deployable.
                  </p>
              </div>
          </section>
        </RevealOnScroll>

        {/* Features Cards */}
        <RevealOnScroll>
          <Features />
        </RevealOnScroll>

        {/* Domain Data Platform */}
        <RevealOnScroll>
          <DomainPlatform />
        </RevealOnScroll>
        
        {/* Stats Band */}
        <RevealOnScroll>
          <Stats />
        </RevealOnScroll>

        {/* Cost Calculator Section */}
        <RevealOnScroll>
          <section className="py-32 bg-slate-50/50 border-b border-slate-200">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="mb-16 text-center">
                      <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">02 — Financials</span>
                      <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">Enterprise Retrieval Cost Calculator</h2>
                  </div>
                  <CostCalculator />
                  <div className="mt-12 text-center flex gap-4 justify-center">
                      <Button>Try Lucenia</Button>
                      <Button variant="secondary">Download Report</Button>
                  </div>
              </div>
          </section>
        </RevealOnScroll>

        {/* Secure AI Section (Terminal) */}
        <RevealOnScroll>
          <section className="py-32 bg-[#0f172a] text-white relative overflow-hidden">
               {/* Dark mode gradient accents */}
               <div className="absolute top-[-50%] left-[-20%] w-[50%] h-[100%] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
               
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                   <div className="flex flex-col lg:flex-row items-center gap-16">
                       <div className="lg:w-1/2">
                           <h2 className="text-3xl font-semibold text-white mb-6 tracking-tight">Secure Conversational AI, <br/>Powered by Lucenia</h2>
                           <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">
                              Put AI to work for you. Trust Lucenia behind your LLM to add secure, audited and mission-critical, domain-specific context to your business and operations.
                           </p>
                           <div className="flex gap-4">
                              <Button variant="secondary" className="bg-white text-slate-900 hover:bg-slate-100 border-none">Start Now</Button>
                              <Button variant="outline" className="text-white border-slate-700 hover:bg-slate-800 hover:text-white">Documentation</Button>
                          </div>
                       </div>
                       <div className="lg:w-1/2 w-full">
                           <TerminalDemo />
                       </div>
                   </div>
               </div>
          </section>
        </RevealOnScroll>

        {/* Architecture Section */}
        <RevealOnScroll>
          <section className="py-32 bg-white text-center border-b border-slate-200">
               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                   <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-2 block">03 — Architecture</span>
                   <h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Protect your most Precious Assets</h2>
                   <p className="text-lg text-slate-500 mb-16 max-w-2xl mx-auto font-light">
                      Lucenia secure AI Retrieval at the core. Retain custody of your own data. Accessible through <span className="font-bold text-slate-800">MCP</span>, integrated through Standard APIs.
                   </p>
                   
                   <Architecture />
               </div>
          </section>
        </RevealOnScroll>

        {/* Resources Section */}
        <RevealOnScroll>
          <Resources />
        </RevealOnScroll>

        {/* Book / Founder Section */}
        <RevealOnScroll>
          <BookSection />
        </RevealOnScroll>
        
        {/* Testimonials */}
        <RevealOnScroll>
          <section className="py-24 bg-slate-50 border-t border-slate-200">
              <div className="max-w-7xl mx-auto px-4 text-center">
                  <h2 className="text-2xl font-semibold mb-16 tracking-tight">Trusted by Intelligence Teams</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      {[
                          { company: "AMERICA'S NAVY", text: "Lucenia is the only fully supported search and retrieval system for modern AI that deploys easily to air gapped environments." },
                          { company: "OMNI FEDERAL", text: "Lucenia's hybrid approach puts control back in the hands of customers. Fast, efficient, and flexible search." },
                          { company: "AURA DIGITAL", text: "Lucenia is the search solution national security teams actually need: Drop-in compatible, geospatially superior." }
                      ].map((t, i) => (
                          <div key={i} className="bg-white p-8 rounded-sm shadow-sm border border-slate-200 text-left hover:shadow-md transition-shadow duration-300">
                              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-widest mb-4">{t.company}</h4>
                              <p className="text-slate-600 text-sm leading-relaxed hanging-punctuation">"{t.text}"</p>
                          </div>
                      ))}
                  </div>
              </div>
          </section>
        </RevealOnScroll>

      </main>

      <RevealOnScroll>
        <Footer />
      </RevealOnScroll>
      
      {/* Floating Elements */}
      <BookFloat />
    </div>
  );
};

export default App;