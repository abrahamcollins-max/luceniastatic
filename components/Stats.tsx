import React, { useEffect, useState, useRef } from 'react';

const CountUp: React.FC<{ end: string, duration?: number }> = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState("0");
  const countRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // Extract number and suffix
  const numValue = parseFloat(end.replace(/[^0-9.]/g, ''));
  const suffix = end.replace(/[0-9.]/g, '');
  const decimals = end.includes('.') ? end.split('.')[1].replace(/[^0-9]/g, '').length : 0;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (countRef.current) {
      observer.observe(countRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    let startTime: number;
    let animationFrame: number;
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = numValue * easeProgress;
      setCount(current.toFixed(decimals) + suffix);
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isVisible, numValue, decimals, suffix, duration]);

  return <div ref={countRef}>{count}</div>;
};

const Stats: React.FC = () => {
  const stats = [
    {
      value: "99.999%",
      label: "Five-Nine Uptime.",
      sub: "Zero Compromises"
    },
    {
      value: "43%+",
      label: "Average cost savings.",
      sub: "Higher at scale."
    },
    {
      value: "7x",
      label: "Infrastructure savings.",
      sub: "Full on-prem support."
    },
    {
      value: "15+",
      label: "Service integrations.",
      sub: "Open-Source compatible."
    }
  ];

  return (
    <section className="bg-white py-16 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col group">
              <div className="text-4xl lg:text-5xl font-bold tracking-tight mb-3 font-mono bg-gradient-to-b from-slate-900 to-slate-700 bg-clip-text text-transparent">
                <CountUp end={stat.value} />
              </div>
              <div className="text-sm font-semibold text-slate-700">
                {stat.label}
              </div>
              <div className="text-sm text-slate-500">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;