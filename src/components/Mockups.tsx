import { useState, useEffect } from 'react';
import { Laptop, Phone, Tablet, Sparkles, TrendingUp, HelpCircle, CheckCircle, Smartphone } from 'lucide-react';

export default function Mockups() {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const elements = document.querySelectorAll('.reveal-mockups');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="mockups" 
      className="py-24 md:py-32 bg-[#0c0c0c] border-t border-gold/10 relative px-6 md:px-12"
    >
      {/* Editorial aesthetic grid background element */}
      <div className="absolute inset-0 gold-grid opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* SECTION HEADER */}
        <div className="mb-16 flex flex-col items-center text-center reveal-mockups reveal-on-scroll">
          <span className="font-sans text-[10px] md:text-sm text-[#C9A84C] font-semibold tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Device Showcase
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#e5e5e5] font-light tracking-wide leading-tight">
            Elite Digital <span className="italic font-normal text-[#C9A84C]">Funnels & Layouts</span>
          </h2>
          <p className="mt-4 font-sans text-xs md:text-sm text-[#e5e5e5]/50 tracking-widest max-w-xl">
            Bespoke system designs optimized perfectly for every digital medium.
          </p>
          
          {/* DEVICE SEGMENT SWITCHER */}
          <div className="flex gap-4 mt-8 bg-black/60 p-1.5 border border-gold/15 rounded-full backdrop-blur-md">
            <button
              onClick={() => setActiveDevice('desktop')}
              className={`flex items-center gap-2 font-sans text-[10px] md:text-xs font-semibold tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-300 ${
                activeDevice === 'desktop' 
                  ? 'bg-gold text-black font-bold' 
                  : 'text-gold/60 hover:text-gold'
              }`}
            >
              <Laptop size={14} />
              Desktop UX
            </button>
            <button
              onClick={() => setActiveDevice('mobile')}
              className={`flex items-center gap-2 font-sans text-[10px] md:text-xs font-semibold tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-300 ${
                activeDevice === 'mobile' 
                  ? 'bg-gold text-black font-bold' 
                  : 'text-gold/60 hover:text-gold'
              }`}
            >
              <Smartphone size={14} />
              Mobile UX
            </button>
          </div>
        </div>

        {/* MOCKUP VIEWER */}
        <div className="flex justify-center items-center h-[460px] md:h-[580px] reveal-mockups reveal-on-scroll delay-150">
          
          {/* DESKTOP DISPLAY MACBOOK FRAME */}
          {activeDevice === 'desktop' && (
            <div className="w-full max-w-4xl flex flex-col items-center">
              {/* Screen Shell */}
              <div className="relative w-[92%] sm:w-[85%] md:w-full aspect-[16/10] bg-[#1a1a1a] p-[2.5%] pb-[3.5%] rounded-t-3xl border border-[#303030] shadow-2xl flex flex-col">
                {/* Camera dot */}
                <span className="absolute top-[1.2%] left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-black border border-white/5" />
                
                {/* Simulated Web View Container */}
                <div className="w-full h-full bg-[#080808] border border-gold/10 overflow-hidden flex flex-col relative rounded-lg">
                  
                  {/* Web Topbar */}
                  <div className="bg-[#121212] px-4 py-2 flex items-center justify-between border-b border-gold/10 text-white/40">
                    <div className="flex gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-red-500/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500/40" />
                    </div>
                    <span className="font-mono text-[9px] tracking-wider text-gold/50 truncate w-1/2 text-center bg-black/40 py-0.5 px-3 border border-gold/5 rounded-md">
                      meshmarketing.co.ke
                    </span>
                    <span className="text-[10px]">⚙</span>
                  </div>

                  {/* Dynamic Mockup Agency Site Body */}
                  <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-8 select-none bg-radial from-neutral-900 to-black text-left">
                    
                    {/* Mock Hero Header inside frame */}
                    <div className="flex justify-between items-center border-b border-white/5 pb-4">
                      <div className="flex items-center gap-1">
                        <span className="font-serif font-black text-gold text-sm tracking-widest">MESH</span>
                      </div>
                      <div className="flex gap-3 text-[8px] tracking-wider text-[#e5e5e5]/50 uppercase font-mono">
                        <span>SERVICING</span> <span className="text-gold">·</span> <span>PORTFOLIO</span> <span className="text-gold">·</span> <span>CEO BIO</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center pt-2">
                      <div className="space-y-4">
                        <span className="text-[8px] font-mono border border-gold/30 px-2 py-0.5 rounded text-gold bg-gold/5 uppercase tracking-widest">PRO RESULTS CHANNELS</span>
                        <h4 className="font-serif text-2xl md:text-3xl font-light text-[#e5e5e5] leading-none">
                          We Build Brands That <span className="italic font-normal text-gold">Dominate Shopify</span>
                        </h4>
                        <p className="font-sans text-[10px] text-white/50 leading-relaxed font-light">
                          Our active funnels guarantee steady consumer engagement and multi-channel loyalty indexing.
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="h-6 px-3 bg-gold/10 text-gold text-[9px] font-mono font-bold flex items-center border border-gold/20">ROAS: +580%</span>
                          <span className="h-6 px-3 bg-[#e5e5e5]/5 text-white/40 text-[9px] font-mono flex items-center">AUDIT COMPLETED</span>
                        </div>
                      </div>

                      {/* Client Growth Chart Mockup inside Frame */}
                      <div className="bg-[#121212] border border-gold/10 p-4 rounded-lg flex flex-col justify-between">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-sans text-[9px] text-[#e5e5e5]/50 tracking-wider font-semibold uppercase">ACTIVE CONVERSIONS</span>
                          <span className="font-mono text-[9px] text-emerald-500 font-bold flex items-center gap-1">
                            <TrendingUp size={10} /> +24% YoY
                          </span>
                        </div>
                        
                        {/* Fake graphical vectors representing Recharts */}
                        <div className="h-20 flex items-end gap-1 px-2 border-b border-[#303030] pb-1">
                          {[30, 45, 38, 55, 75, 60, 95, 80, 110].map((val, idx) => (
                            <div 
                              key={idx} 
                              style={{ height: `${val}%` }} 
                              className="flex-1 bg-gradient-to-t from-gold/30 to-gold rounded-t-sm transition-all duration-1000"
                            />
                          ))}
                        </div>
                        
                        <div className="flex justify-between font-mono text-[8px] text-white/20 mt-2">
                          <span>Q1</span> <span>Q2</span> <span>Q3</span> <span>Q4 (ACTIVE)</span>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>
              {/* Keyboard Bottom Support Base */}
              <div className="w-full h-4 bg-[#2b2b2b] rounded-b-xl border-x border-b border-[#1b1b1b] relative flex justify-center shadow-lg">
                <span className="absolute top-0 w-1/6 h-[3px] bg-black/40 rounded-b-md" />
              </div>
            </div>
          )}

          {/* MOBILE DISPLAY IPHONE PRO FRAME */}
          {activeDevice === 'mobile' && (
            <div className="relative w-[280px] h-[480px] md:w-[320px] md:h-[550px] bg-[#111] p-[3%] rounded-[40px] border-[6px] border-[#2d2d2d] shadow-2xl flex flex-col overflow-hidden">
              {/* Speaker Notch */}
              <div className="absolute top-[1.5%] left-1/2 -translate-x-1/2 w-1/3 h-5 bg-black rounded-full z-30 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-[#111] border border-white/5" />
                <span className="w-6 h-1 rounded-full bg-neutral-900 border border-white/5 ml-3" />
              </div>

              {/* Simulated Mobile screen view */}
              <div className="w-full h-full bg-[#080808] border border-gold/15 rounded-[30px] overflow-hidden flex flex-col relative z-25 text-left select-none">
                
                {/* Mobile top status bar */}
                <div className="bg-[#121212] px-6 pt-5 pb-2 flex justify-between items-center text-[8px] text-white/40 font-mono tracking-widest border-b border-gold/5">
                  <span>9:41 AM</span>
                  <div className="flex gap-1 items-center">
                    <span>5G</span>
                    <div className="w-3.5 h-2 border border-white/20 rounded-sm p-0.5 flex items-center">
                      <div className="w-full h-full bg-emerald-500 rounded-sm" />
                    </div>
                  </div>
                </div>

                {/* Mobile portfolio page container */}
                <div className="flex-1 overflow-y-auto p-5 space-y-6">
                  {/* Brand Monogram Header */}
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="font-serif font-black text-gold text-xs tracking-widest">MESH.</span>
                    <span className="font-[9px] text-[#e5e5e5]/40 tracking-widest uppercase font-mono">KISII, KE</span>
                  </div>

                  {/* Active Client Campaign Showcase mock */}
                  <div className="space-y-4">
                    <span className="text-[7px] font-mono border border-gold/25 px-1.5 py-0.5 rounded text-gold bg-gold/5 uppercase tracking-widest">Client Campaign Showcase</span>
                    <h5 className="font-serif text-lg leading-tight text-[#e5e5e5]">
                      Results-Driven <br/>
                      <span className="italic font-normal text-gold">Funnel UX</span>
                    </h5>

                    {/* Image Placeholder representing active content campaign mockup */}
                    <div className="relative aspect-[4/3] w-full bg-[#121212] border border-gold/10 rounded overflow-hidden flex flex-col justify-end p-3">
                      {/* Grid overlay */}
                      <div className="absolute inset-0 gold-grid opacity-[0.2]" />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-10" />
                      
                      {/* Interactive Metrics tags */}
                      <div className="relative z-20 flex flex-col gap-1">
                        <span className="font-sans text-[7px] font-semibold text-gold-light uppercase tracking-widest leading-none">LAUNCH CAMPAIGN</span>
                        <span className="font-serif text-xs font-light text-white leading-none mt-1">THE ONYX FASHION HOUSE</span>
                        <div className="flex gap-2 mt-2">
                          <span className="text-[7px] font-mono text-emerald-500 bg-emerald-500/10 px-1 border border-emerald-500/20 font-bold">+189% LEADS</span>
                          <span className="text-[7px] font-mono text-[#e5e5e5]/40">CONV: 4.8%</span>
                        </div>
                      </div>
                    </div>

                    {/* Simple service ticks for quick presentation inside mockup */}
                    <div className="space-y-2 pt-1 font-sans text-[9px] text-white/60 leading-relaxed font-light">
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span>High-conversion, blazing-fast funnels</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                        <span>Continuous target analytical optimization</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Simulated iPhone home swipe bar */}
                <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1/3 h-1 bg-white/40 rounded-full" />
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
