import React, { useState, useEffect, useRef } from 'react';
import Button from './Button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [navRect, setNavRect] = useState<{ left: number, width: number, opacity: number }>({ left: 0, width: 0, opacity: 0 });
  const navRefs = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Handle Navbar background
      setIsScrolled(window.scrollY > 10);

      // Handle Scroll Progress Bar
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scrolled));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (hoveredIndex !== null && navRefs.current[hoveredIndex]) {
        const el = navRefs.current[hoveredIndex];
        if (el) {
            setNavRect({
                left: el.offsetLeft,
                width: el.offsetWidth,
                opacity: 1
            });
        }
    } else {
        setNavRect(prev => ({ ...prev, opacity: 0 }));
    }
  }, [hoveredIndex]);

  const navLinks = [
    { name: 'Product', href: '#product' },
    { name: 'Resources', href: '#resources' },
    { name: 'Company', href: '#company' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled || mobileMenuOpen 
          ? 'bg-white/70 backdrop-blur-3xl backdrop-saturate-150 border-slate-200 py-3 shadow-sm' 
          : 'bg-transparent border-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-lucenia-400 to-lucenia-600 transition-all duration-100 ease-out z-50" style={{ width: `${scrollProgress * 100}%` }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer gap-3">
            <img 
              src="https://i.ibb.co/ztyZsXN/Asset-15thlucenialogosmall.png" 
              alt="Lucenia" 
              className="h-8 w-auto" 
            />
            <span className={`font-semibold tracking-tight text-lg transition-colors duration-300 ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
              Lucenia
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 relative" onMouseLeave={() => setHoveredIndex(null)}>
            {/* Lava Lamp Background */}
            <div 
                className="absolute top-0 bottom-0 bg-slate-100 rounded-md transition-all duration-300 ease-out -z-10"
                style={{
                    left: navRect.left,
                    width: navRect.width,
                    opacity: navRect.opacity,
                    height: '100%'
                }}
            />

            {navLinks.map((link, index) => (
              <a 
                key={link.name} 
                href={link.href}
                ref={el => { navRefs.current[index] = el; }}
                onMouseEnter={() => setHoveredIndex(index)}
                className="px-4 py-2 text-slate-600 hover:text-lucenia-700 font-medium text-sm transition-colors rounded-md relative z-10"
              >
                {link.name}
              </a>
            ))}
             <a 
                href="#login" 
                ref={el => { navRefs.current[navLinks.length] = el; }}
                onMouseEnter={() => setHoveredIndex(navLinks.length)}
                className="px-4 py-2 text-slate-600 hover:text-lucenia-700 font-medium text-sm transition-colors rounded-md mr-2 relative z-10"
              >
                Log in
              </a>
            <Button size="sm" variant="primary" className={`${isScrolled ? 'shadow-md' : ''} transition-all duration-300`}>
                Request Demo
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 absolute w-full animate-in slide-in-from-top-2">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-lucenia-700 hover:bg-slate-50 border-b border-slate-50 last:border-0"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-6 pt-2">
              <Button className="w-full">Request Demo</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;