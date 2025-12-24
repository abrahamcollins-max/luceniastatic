import React from 'react';
import { ArrowRight } from 'lucide-react';

const Resources: React.FC = () => {
  const posts = [
    {
      title: "In-Depth Look at Lucenia 0.8.1",
      excerpt: "Lucenia 0.8.1 delivers major performance gains with faster search, improved vectors, and stronger retrieval foundations.",
      author: "Maria Carrero",
      date: "December 12, 2025",
      color: "#4338ca", // Indigo-700
      image: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
           <rect width="200" height="200" fill="#3730a3" />
           <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
           <circle cx="100" cy="100" r="50" fill="rgba(255,255,255,0.1)" />
           <text x="100" y="95" textAnchor="middle" fill="white" fontSize="24" fontFamily="sans-serif" fontWeight="bold">Lucenia</text>
           <text x="100" y="120" textAnchor="middle" fill="white" fontSize="24" fontFamily="sans-serif" fontWeight="300">0.8.0</text>
        </svg>
      )
    },
    {
      title: "From Elementary Word Forms to Production Search",
      excerpt: "Lucenia transforms language understanding into smarter search—bridging human word forms with powerful, production-grade text analysis.",
      author: "Allison Richardet",
      date: "December 2, 2025",
      color: "#0f172a", // Slate-900
      image: (
        <svg viewBox="0 0 200 200" className="w-full h-full">
           <rect width="200" height="200" fill="#0f172a" />
           <text x="100" y="100" textAnchor="middle" fill="white" fontSize="18" fontFamily="monospace">Text Analysis</text>
           <path d="M 40 140 Q 100 60 160 140" stroke="rgba(255,255,255,0.3)" fill="none" strokeWidth="2" />
        </svg>
      )
    },
    {
      title: "Edge Computing in Theme Parks: A Use Case",
      excerpt: "Theme parks exemplify edge computing challenges—Lucenia's lightweight, geospatial search enables fast, resilient, localized queries.",
      author: "Allison Richardet",
      date: "September 23, 2025",
      color: "#60a5fa", // Blue-400
      image: (
         <svg viewBox="0 0 200 200" className="w-full h-full">
           <rect width="200" height="200" fill="#93c5fd" />
           <path d="M 0 100 Q 50 50 100 100 T 200 100" stroke="white" fill="none" strokeWidth="2" opacity="0.5" />
           <circle cx="150" cy="80" r="20" fill="white" opacity="0.3" />
           <circle cx="50" cy="150" r="15" fill="white" opacity="0.3" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold text-slate-900 text-center mb-16 tracking-tight">Resources and insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {posts.map((post, idx) => (
            <div key={idx} className="group flex flex-col items-start text-left">
              {/* Image Circle with Colored Shadow */}
              <div 
                className="w-full aspect-square rounded-full overflow-hidden mb-8 shadow-inner ring-1 ring-slate-100 transition-all duration-300 transform group-hover:-translate-y-2"
                style={{
                    boxShadow: `0 20px 40px -10px ${post.color}30` // 30 is hex alpha approx 20%
                }}
              >
                <div className="w-full h-full transition-transform duration-500 group-hover:scale-105">
                    {post.image}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-lucenia-700 transition-colors leading-tight">
                {post.title}
              </h3>
              
              <div className="text-[11px] text-slate-500 uppercase tracking-widest font-mono mb-4 border-l-2 border-slate-200 pl-2">
                By {post.author} | {post.date}
              </div>
              
              <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                {post.excerpt}
              </p>
              
              <a href="#" className="mt-auto inline-flex items-center text-xs font-bold uppercase tracking-wider text-lucenia-600 hover:text-lucenia-800 transition-colors border-b border-transparent hover:border-lucenia-600 pb-0.5">
                Read More <ArrowRight className="ml-2 h-3 w-3" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;