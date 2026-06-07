import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Handle scroll trigger dark layout
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check active section
      const sections = ['hero', 'services', 'about', 'clients', 'process', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const companyLogo = "https://photos.fife.usercontent.google.com/pw/AP1GczMTX_H9mxmIVz9gJfaTG5egF68yViIrfN_99SBJ4zmuWVAhzC_mhQM=w500-h500-s-no-gm?authuser=0";

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-[#080808]/90 border-b border-gold/10 backdrop-blur-md py-4' 
        : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* LOGO */}
        <a 
          href="#hero" 
          onClick={(e) => { e.preventDefault(); handleNavClick('hero'); }}
          className="flex items-center gap-3 group"
        >
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-gold/40 flex items-center justify-center bg-black transition-transform duration-500 group-hover:scale-105">
            <img 
              src={companyLogo} 
              alt="Mesh Marketing" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              onError={(e) => {
                // Remove image on error to show monogram fallback
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <span className="absolute font-serif font-bold text-sm text-gold">M</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-[#C9A84C] text-lg font-bold tracking-widest leading-none group-hover:text-gold-light transition-colors duration-300">
              MESH MARKETING
            </span>
            <span className="font-sans text-[9px] text-[#e5e5e5]/50 tracking-[0.25em] -mt-0.5 uppercase">
              Premium Agency
            </span>
          </div>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-8">
          {[
            { label: 'Services', id: 'services' },
            { label: 'About', id: 'about' },
            { label: 'Clients', id: 'clients' },
            { label: 'Process', id: 'process' },
            { label: 'Contact', id: 'contact' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
              className={`font-sans text-xs tracking-widest uppercase relative py-1 hover:text-gold transition-colors duration-300 ${
                activeSection === item.id ? 'text-[#C9A84C] font-semibold' : 'text-[#e5e5e5]/70'
              }`}
            >
              {item.label}
              <span className={`absolute bottom-0 left-0 w-full h-[1px] bg-gold scale-x-0 origin-right transition-transform duration-300 ${
                activeSection === item.id ? 'scale-x-100 origin-left' : 'group-hover:scale-x-100'
              }`} />
            </a>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="ml-4 font-sans text-xs font-semibold tracking-widest uppercase px-5 py-2.5 border border-[#C9A84C]/60 text-[#C9A84C] rounded-none bg-transparent hover:bg-[#C9A84C] hover:text-[#080808] transition-all duration-300"
          >
            Work With Us
          </button>
        </div>

        {/* MOBILE TRIGGER */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-[#C9A84C] hover:text-gold-light focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE DRAWER */}
      <div className={`md:hidden fixed inset-0 top-[72px] bg-[#080808]/98 backdrop-blur-lg border-t border-gold/15 transition-all duration-500 ease-in-out ${
        isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-10 invisible pointer-events-none'
      }`}>
        <div className="flex flex-col items-center justify-center h-full gap-8 pb-32">
          {[
            { label: 'Services', id: 'services' },
            { label: 'About', id: 'about' },
            { label: 'Clients', id: 'clients' },
            { label: 'Process', id: 'process' },
            { label: 'Contact', id: 'contact' }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.id); }}
              className={`font-sans text-lg tracking-widest uppercase transition-colors duration-300 ${
                activeSection === item.id ? 'text-[#C9A84C] font-semibold' : 'text-[#e5e5e5]/80'
              }`}
            >
              {item.label}
            </a>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="w-4/5 max-w-xs font-sans text-sm font-semibold tracking-widest uppercase py-4 border border-[#C9A84C] text-[#C9A84C] rounded-none bg-transparent hover:bg-gold hover:text-[#080808] transition-all duration-300"
          >
            Work With Us
          </button>
        </div>
      </div>
    </nav>
  );
}
