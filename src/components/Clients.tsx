import { useEffect, ReactNode } from 'react';

interface Brand {
  name: string;
  svg?: ReactNode;
  image?: string;
}

export default function Clients() {
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
    const elements = document.querySelectorAll('.reveal-clients');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const clientLogoImg = "https://photos.fife.usercontent.google.com/pw/AP1GczOC9m1wu7xAPPrew7LVS22c54iBRjB4nQJ40OFGxEn1AvNg6TUSbPw=w482-h281-s-no-gm?authuser=0";

  // Geometric custom mock brands list
  const mockBrands = [
    {
      name: "THE ECHO",
      svg: (
        <svg className="w-8 h-8 text-gold drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      )
    },
    {
      name: "APEX",
      svg: (
        <svg className="w-8 h-8 text-gold drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 22h20L12 2zM12 6l7 14H5l7-14z" />
          <circle cx="12" cy="14" r="2" />
        </svg>
      )
    },
    {
      name: "VERITAS",
      svg: (
        <svg className="w-8 h-8 text-gold drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M9 17V7l6 10V7" />
        </svg>
      )
    },
    {
      name: "LUMA",
      svg: (
        <svg className="w-8 h-8 text-gold drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2v20M17 5H7M19 12H5M17 19H7" />
        </svg>
      )
    },
    {
      name: "STRATUS",
      svg: (
        <svg className="w-8 h-8 text-gold drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61l1.42-1.42A6.979 6.979 0 015 12c0-3.87 3.13-7 7-7s7 3.13 7 7c0 1.63-.56 3.13-1.5 4.31l1.41 1.41C20.2 16.14 21 14.17 21 12c0-4.97-4.03-9-9-9z" />
          <path d="M12 7c-2.76 0-5 2.24-5 5H5c0-3.87 3.13-7 7-7s7 3.13 7 7h-2c0-2.76-2.24-5-5-5z" />
        </svg>
      )
    },
    {
      name: "ONYX",
      svg: (
        <svg className="w-8 h-8 text-gold drop-shadow-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    }
  ];

  const brandsList: Brand[] = [
    ...mockBrands,
    { name: "PRIMARY CLIENT", image: clientLogoImg }
  ];

  return (
    <section 
      id="clients" 
      className="py-24 bg-[#080808] border-t border-gold/10 relative overflow-hidden px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="mb-16 flex flex-col items-center text-center reveal-clients reveal-on-scroll">
          <span className="font-sans text-[10px] md:text-sm text-[#C9A84C] font-semibold tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            Trusted By
          </span>
          <h2 className="font-serif text-3xl md:text-5xl text-[#e5e5e5] font-light tracking-wide leading-tight">
            Brands We've <span className="italic font-normal text-[#C9A84C]">Worked With</span>
          </h2>
          <div className="w-20 h-[1px] bg-gold mt-6" />
        </div>

        {/* MARQUEE CONTAINER */}
        <div className="relative w-full overflow-hidden py-10 bg-[#0c0c0c] border-y border-gold/5 flex items-center my-6 reveal-clients reveal-on-scroll delay-100">
          
          {/* Left Gradient Fade Mask */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#080808] via-[#080808]/50 to-transparent z-20 pointer-events-none" />
          
          {/* Right Gradient Fade Mask */}
          <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#080808] via-[#080808]/50 to-transparent z-20 pointer-events-none" />

          {/* Scrolling Strip */}
          <div className="animate-marquee flex gap-12 md:gap-24 items-center">
            
            {/* Array Set 1 */}
            {brandsList.map((brand, i) => (
              <div 
                key={`b1-${i}`} 
                className="flex items-center gap-4 text-white/40 hover:text-gold transition-all duration-300 transform hover:scale-105 select-none"
              >
                {brand.image ? (
                  <div className="h-10 md:h-14 px-4 py-1.5 bg-black/40 border border-gold/10 hover:border-gold/30 rounded-none flex items-center justify-center transition-all duration-300">
                    <img 
                      src={brand.image} 
                      alt="Premium Client Partner Logo" 
                      className="h-full object-contain grayscale hover:grayscale-0 contrast-125 hover:contrast-100 transition-all duration-300"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Error fallback: Hide image, show high end client monogram text
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="font-serif text-[10px] md:text-xs text-gold/60 font-medium tracking-[0.3em] uppercase">CLIENT PARTNER</span>
                  </div>
                ) : (
                  <>
                    <div className="opacity-50 hover:opacity-100 transition-opacity duration-300">{brand.svg}</div>
                    <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-[#e5e5e5]/50 group-hover:text-gold">
                      {brand.name}
                    </span>
                  </>
                )}
              </div>
            ))}

            {/* Array Set 2 Duplicate to cover infinite loop */}
            {brandsList.map((brand, i) => (
              <div 
                key={`b2-${i}`} 
                className="flex items-center gap-4 text-white/40 hover:text-gold transition-all duration-300 transform hover:scale-105 select-none"
              >
                {brand.image ? (
                  <div className="h-10 md:h-14 px-4 py-1.5 bg-black/40 border border-gold/10 hover:border-gold/30 rounded-none flex items-center justify-center transition-all duration-300">
                    <img 
                      src={brand.image} 
                      alt="Premium Client Partner Logo" 
                      className="h-full object-contain grayscale hover:grayscale-0 contrast-125 hover:contrast-100 transition-all duration-300"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        (e.target as HTMLElement).style.display = 'none';
                      }}
                    />
                    <span className="font-serif text-[10px] md:text-xs text-gold/60 font-medium tracking-[0.3em] uppercase">CLIENT PARTNER</span>
                  </div>
                ) : (
                  <>
                    <div className="opacity-50 hover:opacity-100 transition-opacity duration-300">{brand.svg}</div>
                    <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.35em] uppercase text-[#e5e5e5]/50 group-hover:text-gold">
                      {brand.name}
                    </span>
                  </>
                )}
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
