import { useEffect, useState } from 'react';
import { 
  Megaphone, 
  PenTool, 
  Layers, 
  Video, 
  Globe, 
  Zap 
} from 'lucide-react';
import { Service } from '../types';
import ServiceDetailModal from './ServiceDetailModal';

export default function Services() {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const services: (Service & { icon: any })[] = [
    {
      id: "smm",
      number: "01",
      title: "Social Media Management",
      description: "Full-scale brand curation, audience growth, targeted positioning, and authentic engagement strategies across top channels.",
      icon: Megaphone
    },
    {
      id: "cc",
      number: "02",
      title: "Content Creation",
      description: "Bespoke media production, commercial assets, photography scripts, and copy tailored specifically to represent premium services.",
      icon: PenTool
    },
    {
      id: "gd",
      number: "03",
      title: "Graphic Design",
      description: "High-end brand identities, presentation decks, marketing materials, and digital assets prioritizing visual perfection.",
      icon: Layers
    },
    {
      id: "ve",
      number: "04",
      title: "Video Editing",
      description: "Cinematic commercial structures, social reels, short-form editing, color grading, and custom pacing for high attention-retention.",
      icon: Video
    },
    {
      id: "wfb",
      number: "05",
      title: "Web & Funnel Building",
      description: "Blazing fast landing pages, elite conversion funnels, and modern web platforms built to securely convert traffic on auto-pilot.",
      icon: Globe
    },
    {
      id: "aia",
      number: "06",
      title: "AI Automations",
      description: "Smarter automated marketing loops, custom AI agents, customer support agents, and trigger workflows to scale results safely.",
      icon: Zap
    }
  ];

  useEffect(() => {
    // Standard modular reveal initializer
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
    const elements = document.querySelectorAll('.reveal-services');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="services" 
      className="py-24 md:py-32 bg-[#080808] border-t border-gold/10 relative px-6 md:px-12"
    >
      {/* Decorative vertical golden accents */}
      <div className="absolute top-0 right-12 w-[1px] h-32 bg-gradient-to-b from-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="mb-16 md:mb-24 flex flex-col items-start reveal-services reveal-on-scroll">
          <span className="font-sans text-[10px] md:text-sm text-[#C9A84C] font-semibold tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold" />
            What We Do
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#e5e5e5] font-light tracking-wide leading-tight">
            Services Built for <span className="italic font-normal text-[#C9A84C]">Results</span>
          </h2>
          <div className="w-20 h-[1px] bg-gold mt-6" />
        </div>

        {/* 3x2 GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                onClick={() => setSelectedServiceId(service.id)}
                style={{ transitionDelay: `${index * 100}ms` }}
                className="group relative bg-[#0e0e0e] border border-gold/5 px-8 py-10 rounded-none transition-all duration-500 hover:bg-[#121212]/80 hover:border-gold/20 reveal-services reveal-on-scroll flex flex-col hover:shadow-xl hover:shadow-gold/[0.02] cursor-pointer"
              >
                {/* Slid-in top golden border */}
                <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-gold-light via-gold to-gold-dark scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Card Top Row - Number and Icon */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-12 h-12 rounded-none border border-gold/10 flex items-center justify-center bg-black/40 text-gold group-hover:border-gold/30 group-hover:text-gold-light transition-all duration-300">
                    <IconComponent size={20} className="stroke-[1.5]" />
                  </div>
                  <span className="font-serif text-4xl font-extralight text-[#C9A84C]/10 group-hover:text-[#C9A84C]/30 tracking-wider transition-colors duration-500">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl md:text-2xl text-[#e5e5e5] mb-4 tracking-wide group-hover:text-[#E8C97A] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-sans text-xs md:text-sm text-[#e5e5e5]/60 hoverable leading-relaxed mb-6 font-light">
                  {service.description}
                </p>

                {/* Subtle read more arrow linkage matching high end style */}
                <div className="mt-auto pt-4 flex items-center gap-1.5 text-[10px] text-gold/45 tracking-widest uppercase font-semibold group-hover:text-gold group-hover:translate-x-1 transition-all duration-300">
                  <span>DISCOVER DETAILS</span>
                  <span className="text-xs">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Editorial Detailed Modal Overlay */}
      <ServiceDetailModal 
        serviceId={selectedServiceId} 
        onClose={() => setSelectedServiceId(null)} 
      />
    </section>
  );
}
