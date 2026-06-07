import { useEffect } from 'react';
import { Check, Shield, Sparkles, Send, Flame, Zap, ArrowRight } from 'lucide-react';

export default function Pricing() {
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
    const elements = document.querySelectorAll('.reveal-pricing');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleCtaClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const packages = [
    {
      id: "standard",
      name: "Standard Pack",
      price: "15,000",
      period: "per month",
      desc: "Essential digital presence management to establish authority and outpace standard competitors.",
      badge: "Market Entry",
      isRecommended: false,
      features: [
        "Strategic Brand Curation & Feed Design",
        "Premium Graphic Design & vector assets",
        "High-Retention vertical video editing",
        "Targeted audience behavior analysis",
        "Standard monthly KPI performance reports",
        "Business hours Slack & email support"
      ]
    },
    {
      id: "premium",
      name: "Premium Focus",
      price: "25,000",
      period: "per month",
      desc: "Our highly recommended power suite. Full-fidelity narrative storytelling, active traffic funnels and complete advertising setups.",
      badge: "RECOMMENDED",
      isRecommended: true,
      features: [
        "High-Frequency Organic Social Media Curation",
        "Meta Ads & Instagram Campaign setups",
        "TikTok Ads & short-form audience capturing",
        "Google Ads & search-intent routing systems",
        "High-Fidelity Content Creation & production blueprints",
        "Cinematic video editing & graded Reels/Shorts",
        "Active DM Funnels & custom Lead Handshakes",
        "Full Audience behavior analytics & keyword tuning",
        "Priority 24/7 dedicated account manager access"
      ]
    },
    {
      id: "ultimate",
      name: "Gold Enterprise",
      price: "40,000+",
      period: "per month",
      desc: "Absolute market dominance. All creative & production suites backed by custom React funnels, dynamic ad engines, and AI workflows.",
      badge: "ALL-INCLUSIVE SUITE",
      isRecommended: false,
      features: [
        "All Services Included (SMM, Design, Editing, Creation)",
        "Enterprise Ad Platform Ecosystems: Meta, Instagram, TikTok & Google Ads",
        "Premium custom React Website / Conversion Funnel",
        "Intelligent AI Agents & active comment-to-DM setups",
        "Multi-channel CRM automatic tracking & calendar trigger syncs",
        "Hands-off operational background triggers & Slack feeds",
        "Unlimited custom branding revision tickets",
        "Direct executive channel with our developers"
      ]
    }
  ];

  return (
    <section 
      id="pricing" 
      className="py-16 md:py-32 bg-[#0c0c0c] border-t border-gold/10 relative overflow-hidden px-4 md:px-12"
    >
      {/* Editorial backdrop circles */}
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-gold/[0.02] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gold/[0.02] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        
        {/* SECTION HEADER */}
        <div className="mb-12 md:mb-20 flex flex-col items-center text-center reveal-pricing reveal-on-scroll">
          <span className="font-mono text-[9px] md:text-sm text-[#C9A84C] font-semibold tracking-[0.3em] uppercase mb-4 flex items-center justify-center gap-2">
            <Sparkles size={11} className="text-gold animate-pulse" />
            Flexible Investment
          </span>
          <h2 className="font-serif text-2xl md:text-5xl text-[#e5e5e5] font-light tracking-wide leading-tight max-w-2xl">
            Surgical Growth <span className="italic font-normal text-[#C9A84C]">Packages</span> & Pricing
          </h2>
          <p className="font-sans text-[10px] md:text-xs text-[#e5e5e5]/40 tracking-wider uppercase mt-4 max-w-lg leading-relaxed">
            Choose the competitive tier engineered to scale your audience, automate leads, and elevate your absolute brand premium.
          </p>
          <div className="w-20 h-[1px] bg-gold mt-6" />
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {packages.map((pkg, idx) => {
            return (
              <div 
                key={pkg.id}
                style={{ transitionDelay: `${idx * 150}ms` }}
                className={`flex flex-col relative border ${
                  pkg.isRecommended 
                    ? 'border-[#C9A84C] bg-[#101010] shadow-[0_0_25px_rgba(201,168,76,0.06)]' 
                    : 'border-gold/5 bg-[#0e0e0e] hover:border-gold/20'
                } p-6 md:p-10 transition-all duration-500 reveal-pricing reveal-on-scroll flex-1`}
              >
                {/* Visual Accent top ribbon */}
                <span className={`absolute top-0 left-0 w-full h-[3px] ${
                  pkg.isRecommended 
                    ? 'bg-gradient-to-r from-gold-light via-gold to-gold-dark' 
                    : 'bg-gold/15 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'
                }`} />

                {/* Badge decoration */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`font-mono text-[8px] md:text-[9px] tracking-[0.15em] uppercase font-bold px-2.5 py-1 ${
                    pkg.isRecommended 
                      ? 'bg-gold text-[#080808]' 
                      : 'bg-gold/5 text-gold border border-gold/10'
                  }`}>
                    {pkg.badge}
                  </span>
                  {pkg.isRecommended && (
                    <span className="font-sans text-[9px] text-[#C9A84C] flex items-center gap-1 font-semibold animate-pulse">
                      <Flame size={12} className="text-gold" />
                      Popular choice
                    </span>
                  )}
                </div>

                {/* Price, Name and Desc Block */}
                <div className="mb-6 md:mb-8 pb-6 md:pb-8 border-b border-gold/10">
                  <h3 className="font-serif text-lg md:text-2xl text-[#e5e5e5] font-light tracking-wide mb-2 flex items-center gap-2">
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mt-4">
                    <span className="font-mono text-xs md:text-sm text-[#C9A84C] font-semibold">Ksh</span>
                    <span className="font-serif text-3xl md:text-5xl text-[#e5e5e5] font-light leading-none tracking-tight">
                      {pkg.price}
                    </span>
                    <span className="font-sans text-[10px] text-[#e5e5e5]/40 tracking-wider lowercase">
                      /{pkg.period}
                    </span>
                  </div>
                  <p className="font-sans text-[11px] md:text-xs text-[#e5e5e5]/50 leading-relaxed font-light mt-4">
                    {pkg.desc}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="flex-1 mb-8">
                  <h4 className="font-mono text-[8px] md:text-[10px] text-white/40 tracking-widest uppercase mb-4">
                    Inclusions & Specs:
                  </h4>
                  <ul className="space-y-3.5 md:space-y-4">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex gap-2.5 items-start">
                        <Check size={12} className="text-gold mt-1 flex-shrink-0" />
                        <span className="font-sans text-[10px] md:text-xs text-[#e5e5e5]/70 font-light leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action button */}
                <a
                  href={`https://wa.me/254740242611?text=Hello%20I%20want%20to%20learn%20more%20about%20the%20${encodeURIComponent(pkg.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 md:py-4 transition-all duration-300 font-sans text-[10px] tracking-widest uppercase font-semibold flex items-center justify-center gap-1.5 cursor-pointer select-none text-center ${
                    pkg.isRecommended
                      ? 'bg-[#C9A84C] hover:bg-[#E8C97A] text-[#080808] hover:shadow-lg hover:shadow-gold/10'
                      : 'bg-transparent border border-gold/30 hover:border-gold text-[#C9A84C] hover:bg-gold/5'
                  }`}
                >
                  <span>Request Package</span>
                  <ArrowRight size={11} />
                </a>
              </div>
            );
          })}
        </div>

        {/* Informational Subtext */}
        <div className="mt-12 text-center reveal-pricing reveal-on-scroll">
          <p className="font-sans text-[10px] text-[#e5e5e5]/30 leading-relaxed max-w-2xl mx-auto font-light uppercase tracking-wider">
            All plans can be fine-tuned or custom assembled to fit specific regional constraints.
            Our software engineers work closely to assure your database, integrations, and branding systems operate beautifully.
          </p>
        </div>

      </div>
    </section>
  );
}
