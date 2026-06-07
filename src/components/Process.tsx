import { useEffect } from 'react';
import { ProcessStep } from '../types';

export default function Process() {
  const steps: ProcessStep[] = [
    {
      number: "01",
      title: "Discovery",
      description: "We deep-dive into your brand's unique capabilities, audience mechanics, local market opportunities, and key visual positioning."
    },
    {
      number: "02",
      title: "Strategy",
      description: "We map out continuous content pillars, high-converting funnel structures, copy frameworks, and AI workflows tailored precisely to you."
    },
    {
      number: "03",
      title: "Execution",
      description: "We build, write, edit, and launch premium campaigns, fast landing pages, and AI automations, maintaining absolute luxury aesthetic standards."
    },
    {
      number: "04",
      title: "Growth",
      description: "We monitor performance analytics, refine conversions, scale target reach channels, and ensure your brand dominates the industry."
    }
  ];

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
    const elements = document.querySelectorAll('.reveal-process');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="process" 
      className="py-24 md:py-32 bg-[#080808] border-t border-gold/10 relative px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION NAME */}
        <div className="mb-16 md:mb-24 flex flex-col items-start reveal-process reveal-on-scroll">
          <span className="font-sans text-[10px] md:text-sm text-[#C9A84C] font-semibold tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            How It Works
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#e5e5e5] font-light tracking-wide leading-tight">
            Our <span className="italic font-normal text-[#C9A84C]">Process</span>
          </h2>
          <div className="w-20 h-[1px] bg-gold mt-6" />
        </div>

        {/* HORIZONTAL CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={step.number}
              style={{ transitionDelay: `${index * 150}ms` }}
              className="group relative bg-[#101010] border border-gold/5 px-8 py-10 rounded-none transition-all duration-500 hover:bg-[#121212] hover:border-gold/15 reveal-process reveal-on-scroll flex flex-col"
            >
              {/* Gold Top Border on each card */}
              <span className="absolute top-0 left-0 w-full h-[2px] bg-gold scale-x-50 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

              {/* Large faded step number background decoration */}
              <div className="mb-6 flex justify-between items-center">
                <span className="font-serif text-4xl font-light text-gold leading-none">
                  {step.number}
                </span>
                <span className="font-mono text-[9px] text-[#e5e5e5]/30 tracking-widest uppercase bg-black/40 px-2 py-0.5 border border-gold/5">
                  Phase {step.number}
                </span>
              </div>

              {/* Step Title */}
              <h3 className="font-serif text-xl md:text-2xl text-[#e5e5e5] mb-4 tracking-wide group-hover:text-gold-light transition-colors duration-300">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="font-sans text-xs md:text-sm text-[#e5e5e5]/60 hoverable leading-relaxed font-light mt-2">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
