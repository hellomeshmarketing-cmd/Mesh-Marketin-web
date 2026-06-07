import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export default function Faq() {
  const faqList: FaqItem[] = [
    {
      category: "Services & Scope",
      question: "What specific premium services does Mesh Marketing offer?",
      answer: "We specialize in end-to-end digital growth and brand supremacy: Premium Social Media Management, High-Converting Web & Sales Funnel Building, Cinematic & Viral Content Creation, and Custom AI Automations designed to streamline operations and drive conversions."
    },
    {
      category: "Results & ROI",
      question: "How can premium social media management increase our revenue?",
      answer: "By blending visual storytelling with strategic content pillars, we build massive brand authority. We don't just optimize for likes; we optimize for conversion. Through high-contrast photography, cinematic short-form video, and structured sales funnels, we convert passive attention into recurring revenue."
    },
    {
      category: "Process & Integration",
      question: "What is the onboarding process and timeline for new clients?",
      answer: "We begin with a deep-dive Discovery and Strategy blueprint tailored to your brand. Once approved, our team handles copy drafting, visual asset design, and automation setup. A standard campaign or digital funnel is fully operational and launched within 10 to 14 business days."
    },
    {
      category: "AI & Innovation",
      question: "How do custom AI Automations help our day-to-day business?",
      answer: "AI Automations are smart, background systems that immediately engage leads, route client messages, automate scheduling, and qualify prospects 24/7. This guarantees zero delayed responses, maximizes booking rates, and eliminates administrative overhead so you can focus strictly on delivery."
    },
    {
      category: "Location & Market",
      question: "Based in Kisii, Kenya, do you work with national and global brands?",
      answer: "Yes, absolutely. While we are proudly headquartered in Kisii, Kenya, we build and manage high-conversion architectures designed for both local dominance and global scale. No matter where your enterprise of focus is located, our methods connect natively with your target demographic."
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px 0px -105px 0px',
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
    const elements = document.querySelectorAll('.reveal-faq');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="faq" 
      className="py-24 md:py-32 bg-[#080808] border-t border-gold/10 relative px-6 md:px-12"
    >
      {/* Subtle overlay ambient background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center reveal-faq reveal-on-scroll">
          <span className="font-sans text-[10px] md:text-sm text-[#C9A84C] font-semibold tracking-[0.3em] uppercase mb-4 flex items-center gap-2">
            <Sparkles size={12} className="text-gold" />
            Support & Intelligence
            <Sparkles size={12} className="text-gold" />
          </span>
          <h2 className="font-serif text-4xl md:text-6xl text-[#e5e5e5] font-light tracking-wide leading-tight">
            Frequently Asked <span className="italic font-normal text-[#C9A84C]">Questions</span>
          </h2>
          <p className="font-sans text-[11px] md:text-xs text-[#e5e5e5]/40 tracking-wider uppercase mt-4 max-w-md leading-relaxed">
            Discover the mechanics behind our digital conversion systems and strategic campaign blueprints.
          </p>
          <div className="w-20 h-[1px] bg-gold mt-6" />
        </div>

        {/* Accordion List Container */}
        <div className="space-y-4 md:space-y-6">
          {faqList.map((item, index) => {
            const isOpen = activeIndex === index;
            return (
              <div 
                key={index}
                className="reveal-faq reveal-on-scroll border border-gold/10 hover:border-gold/25 transition-colors duration-500 bg-[#121212] relative overflow-hidden"
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* Visual active indicator - vertical left bar inside card */}
                <div 
                  className={`absolute top-0 left-0 w-[3px] h-full bg-[#C9A84C] transition-transform duration-500 origin-top ${
                    isOpen ? 'scale-y-100' : 'scale-y-0'
                  }`}
                />

                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left p-6 md:p-8 flex items-center justify-between gap-6 cursor-pointer select-none group"
                  aria-expanded={isOpen}
                >
                  <div className="flex flex-col gap-1.5 flex-1 pr-2">
                    {/* Category Tag */}
                    <span className="font-mono text-[8px] text-[#C9A84C]/60 tracking-widest uppercase">
                      {item.category}
                    </span>
                    {/* Question Header */}
                    <span className={`font-serif text-base md:text-lg transition-colors duration-300 ${
                      isOpen ? 'text-[#E8C97A] font-medium' : 'text-[#e5e5e5] group-hover:text-gold-light'
                    }`}>
                      {item.question}
                    </span>
                  </div>

                  {/* Toggle Arrow/Icon with luxury feel */}
                  <div className="flex-shrink-0">
                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isOpen 
                        ? 'bg-gold/10 border-[#C9A84C]/50 text-[#C9A84C] rotate-180' 
                        : 'border-gold/15 text-[#e5e5e5]/40 group-hover:text-gold-light group-hover:border-gold/30'
                    }`}>
                      <ChevronDown size={14} className="transition-transform duration-300" />
                    </div>
                  </div>
                </button>

                {/* Collapsible Content */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-6 pb-6 md:px-8 md:pb-8 pt-0 border-t border-gold/5">
                        <div className="font-sans text-xs md:text-sm text-[#e5e5e5]/70 leading-relaxed font-light hoverable space-y-2 max-w-3xl mt-4">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
