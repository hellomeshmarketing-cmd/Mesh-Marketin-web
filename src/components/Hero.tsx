import { useEffect, useState } from 'react';
import { ArrowDown, Flame, Sparkles, Navigation } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Retrigger entrance transition nicely
    const timer = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(timer);
  }, []);

  const handleScrollDown = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen relative flex flex-col justify-center items-center bg-[#080808] overflow-hidden pt-28 pb-16 px-6 md:px-12"
    >
      {/* Subtle gold grid overlay */}
      <div className="absolute inset-0 gold-grid opacity-30 pointer-events-none" />
      
      {/* Editorial Vignette Glowing Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] max-w-[800px] h-[300px] bg-gradient-to-r from-gold/5 via-gold/15 to-gold/5 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Content Grid/Center */}
      <div className="max-w-5xl mx-auto text-center relative z-10 flex flex-col items-center justify-center flex-1">
        
        {/* Eyebrow info */}
        <div className={`flex items-center gap-2 mb-8 bg-black/60 border border-gold/20 px-4 py-2 rounded-full backdrop-blur-md transition-all duration-1000 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
        }`}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          <span className="font-sans text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-[#E8C97A]">
            Premium Digital Marketing Agency · Kisii, Kenya
          </span>
        </div>

        {/* Big Heading */}
        <h1 className={`font-serif text-5xl sm:text-6xl md:text-8xl font-medium tracking-tight text-[#e5e5e5] leading-[1.05] max-w-4xl transition-all duration-1000 delay-300 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          We Build Brands <br/>
          <span className="font-serif italic font-light text-gradient bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
            That Dominate
          </span>
        </h1>

        {/* Subtext Grid */}
        <p className={`mt-8 font-sans text-xs sm:text-sm md:text-lg text-[#e5e5e5]/75 tracking-widest max-w-2xl text-center font-light leading-relaxed transition-all duration-1000 delay-500 transform ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Social Media Management <span className="text-[#C9A84C] px-1 font-bold">·</span> Content Creation <span className="text-[#C9A84C] px-1 font-bold">·</span> Web & Funnel Building <span className="text-[#C9A84C] px-1 font-bold">·</span> AI Automations
        </p>

        {/* floating/pulsing CTA button */}
        <div className={`mt-12 transition-all duration-1000 delay-700 transform ${
          mounted ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          <a
            href="https://wa.me/254740242611?text=Hello%20Mesh%20Marketing%2C%20I%27d%20like%20to%20work%20with%20you."
            target="_blank"
            rel="noopener noreferrer"
            className="animate-float-pulsar inline-flex items-center gap-3 font-sans text-xs md:text-sm font-semibold tracking-widest uppercase bg-gradient-to-r from-[#C9A84C] via-[#E8C97A] to-[#A9872D] text-[#080808] px-10 py-5 rounded-none shadow-xl hover:shadow-gold/20 hover:scale-105 active:scale-95 transition-all duration-300 transform"
          >
            Work With Us
            <Navigation size={15} className="fill-[#080808] rotate-90" />
          </a>
        </div>
      </div>

      {/* Decorative side stats - Adding agency metrics details in very clean minimal look */}
      <div className={`absolute bottom-16 left-6 md:left-12 hidden xs:flex flex-col gap-1 items-start font-mono text-[10px] text-[#e5e5e5]/30 tracking-widest transition-opacity duration-1000 delay-1000 ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`}>
        <span>GEO: Kisii, KE 254</span>
        <span>CLIENT ROAS: ~4.7x</span>
        <span>MEMBER: Meshack M. Founder</span>
      </div>

      {/* Animated scroll indicator */}
      <div className={`absolute bottom-8 right-6 md:right-12 hidden md:flex items-center gap-3 font-sans text-[10px] text-[#C9A84C] uppercase tracking-[0.25em] cursor-pointer hover:text-gold-light transition-colors duration-300 ${
        mounted ? 'opacity-100' : 'opacity-0'
      }`} onClick={handleScrollDown}>
        <span>SCROLL DOWN</span>
        <div className="w-8 h-8 rounded-full border border-gold/30 flex items-center justify-center animate-bounce">
          <ArrowDown size={12} />
        </div>
      </div>
    </section>
  );
}
