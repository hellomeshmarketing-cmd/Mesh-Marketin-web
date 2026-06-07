import { useEffect, useState } from 'react';
import { Target, Award, Compass } from 'lucide-react';
// @ts-ignore
import ceoPhoto from '../assets/images/ceo_portrait_1780824658276.png';

export default function About() {
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
    const elements = document.querySelectorAll('.reveal-about');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section 
      id="about" 
      className="py-24 md:py-32 bg-[#0c0c0c] border-t border-gold/10 relative overflow-hidden px-6 md:px-12"
    >
      {/* Editorial aesthetic line elements */}
      <div className="absolute top-1/2 left-0 w-24 h-[1px] bg-gradient-to-r from-gold/15 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION NAME */}
        <div className="mb-12 flex flex-col items-start reveal-about reveal-on-scroll">
          <span className="font-sans text-[10px] md:text-sm text-[#C9A84C] font-semibold tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            About Us
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* LEFT COLUMN: SOURCE OF CEO IMAGE */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-start reveal-about reveal-on-scroll delay-100">
            {/* Gold decorative frame offset behind */}
            <div className="absolute top-4 left-4 lg:-top-6 lg:-left-6 w-full h-full border border-[#C9A84C]/30 z-0 scale-95" />
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 w-1/2 h-1/2 border-r border-b border-[#C9A84C]/45 z-0" />

            {/* Main Picture Wrapper */}
            <div className="relative w-full max-w-[380px] aspect-[4/5] bg-neutral-950 overflow-hidden border border-[#C9A84C]/25 z-10 hover:border-gold/50 transition-colors duration-500 flex items-center justify-center">
              
              {!imageError && (
                <img 
                  src={ceoPhoto} 
                  alt="Meshack M. - Founder & CEO of Mesh Marketing" 
                  className={`w-full h-full object-cover scale-100 hover:scale-105 transition-all duration-700 absolute inset-0 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  referrerPolicy="no-referrer"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => setImageError(true)}
                />
              )}
              
              {/* Fallback portrait element if image is loading or fails rendering */}
              {(!imageLoaded || imageError) && (
                <div className="absolute inset-0 bg-[#0e0e0e] border border-gold/15 flex flex-col items-center justify-center p-8 text-center select-none">
                  <div className="w-24 h-24 rounded-full border border-[#C9A84C]/35 bg-[#C9A84C]/5 flex items-center justify-center mb-6 relative transition-transform duration-500">
                    <span className="font-serif italic text-gold text-5xl tracking-wide">M</span>
                    <span className="absolute -inset-1 rounded-full border border-dashed border-[#C9A84C]/20 animate-spin [animation-duration:15s]" />
                  </div>
                  <span className="font-serif italic text-[#C9A84C] text-2xl tracking-wide">Meshack M.</span>
                  <span className="font-sans text-[10px] text-white/50 tracking-[0.25em] uppercase mt-2">Founder & CEO</span>
                  
                  {/* Informative, luxurious subtext */}
                  <div className="mt-8 pt-4 border-t border-gold/10 w-4/5 text-center">
                    <p className="font-mono text-[8px] text-[#C9A84C]/65 tracking-widest uppercase mb-1">
                      {imageError ? "CEO PORTRAIT FRAMEWORK" : "LOADING PORTRAIT"}
                    </p>
                    <p className="font-sans text-[8px] text-[#e5e5e5]/45 leading-normal uppercase">
                      {imageError 
                        ? "Local asset validation error. Displaying fallback monograms." 
                        : "Synchronizing high-fidelity CEO studio photographic data..."}
                    </p>
                  </div>
                </div>
              )}

              {/* Gold CEO Tag bottom right */}
              <div className="absolute bottom-4 right-4 bg-[#C9A84C] text-[#080808] px-4 py-2 text-[10px] font-bold tracking-[0.2em] uppercase shadow-lg z-20">
                Founder & CEO
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: TEXT CONTENT */}
          <div className="lg:col-span-7 flex flex-col items-start reveal-about reveal-on-scroll delay-300">
            <h3 className="font-serif text-3xl md:text-5xl text-[#e5e5e5] font-light leading-tight mb-8">
              Built by a <span className="italic font-normal text-[#C9A84C]">Young Visionary</span>
            </h3>

            <div className="space-y-6 font-sans text-xs md:text-sm text-[#e5e5e5]/75 leading-relaxed font-light">
              <p>
                Founded by <strong className="text-gold font-semibold">Meshack M.</strong>, a young digital entrepreneur in his 20s, Mesh Marketing has quickly scaled to become Kisii’s top-tier brand acceleration partner. We reject generic templates and cookie-cutter approaches, designing bespoke online frameworks that translate views directly into sustainable scaling models.
              </p>
              
              <p>
                Our philosophy prioritizes absolute mastery of visual rhythm, digital funnel architecture, and high-performance lead conversion. Combining modern content production with the power of fully automated AI triggers, we help businesses establish immediate market authority, outpace local competitors, and expand their audience globally.
              </p>

              <p>
                From Kisii, Kenya, to clients operating across international borders, Mesh Marketing bridges elegant editorial aesthetics with pure data-backed growth. We operate with high speed, transparent accountability, and a relentless desire to make your company’s brand completely dominate.
              </p>
            </div>

            {/* CEO Sign-off layout details */}
            <div className="mt-10 pt-8 border-t border-gold/10 w-full flex items-center justify-between">
              <div>
                <span className="block font-serif text-2xl text-gold italic tracking-wide">
                  Meshack M.
                </span>
                <span className="block font-sans text-[10px] text-[#e5e5e5]/45 tracking-[0.25em] uppercase mt-1">
                  Founder & CEO · Mesh Marketing
                </span>
              </div>
              
              <div className="hidden xs:flex gap-4">
                <div className="flex flex-col items-end">
                  <span className="font-serif text-2xl text-gold font-light">20s</span>
                  <span className="font-sans text-[8px] text-[#e5e5e5]/40 tracking-widest uppercase">Driven Leader</span>
                </div>
                <div className="w-[1px] h-10 bg-gold/20" />
                <div className="flex flex-col items-end">
                  <span className="font-serif text-2xl text-gold font-light">100%</span>
                  <span className="font-sans text-[8px] text-[#e5e5e5]/40 tracking-widest uppercase">Commitment</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
