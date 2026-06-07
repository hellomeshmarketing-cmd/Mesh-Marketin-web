import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle2, Shield, Sparkles, Send } from 'lucide-react';

interface ServiceBlogDetail {
  slug: string;
  subtitle: string;
  overview: string;
  conceptTitle: string;
  conceptText: string;
  methodologyTitle: string;
  methodologySteps: {
    phase: string;
    title: string;
    description: string;
  }[];
  deliverables: string[];
  impactTitle: string;
  impactText: string;
}

const SERVICE_BLOGS: Record<string, ServiceBlogDetail> = {
  smm: {
    slug: "social-media-management",
    subtitle: "Strategic Audience Curation & Digital Supremacy",
    overview: "Social media is no longer about arbitrary aesthetics; it is the ultimate direct-response testing ground and lead pipeline. We treat social channels as high-converting, high-trust digital assets engineered to turn passive scroll into brand premium and booked pipeline.",
    conceptTitle: "The Curation Philosophy",
    conceptText: "In the modern attention market, average content is ignored content. High-ticket clientele and sophisticated prospects do not buy based on generic templates. They make decisions when they witness relentless visual execution and deep technical value. We transform standard platforms from plain content scrapbooks into institutional authorities that project dominance and superiority.",
    methodologyTitle: "Our Social Acceleration Workflow",
    methodologySteps: [
      {
        phase: "Phase I",
        title: "Competitive Audit & Demographic Positioning",
        description: "We deep-dive into your competitive market space. We model customer behaviors and map exactly what triggers high-intent actions in your target demographic."
      },
      {
        phase: "Phase II",
        title: "Semantic Content Pillar & Hook Architecture",
        description: "Standard copy is replaced with narrative hooks. We design three strategic pillars: Educational Power, Brand Authority Narratives, and Direct Conversion Funnels."
      },
      {
        phase: "Phase III",
        title: "Polished Visual Production & Calendar Orchestration",
        description: "We deploy premium photography grids and high-retention scripts, scheduling and publishing them across networks at high-impact traffic hours."
      },
      {
        phase: "Phase IV",
        title: "Active Growth & Funnel Handshake Loops",
        description: "Our systems actively drive traffic from comments to direct message funnels and calendars, optimizing conversion metrics with math, not hope."
      }
    ],
    deliverables: [
      "Custom Typography & Photographic Style Guides",
      "Comprehensive Monthly Social Pipeline Masterplans",
      "Direct Message (DM) Interactive Handshake Funnels",
      "Advanced Audience Behavior Analytics & KPI Auditing",
      "Active Direct-Response Copywriting & Lead Optimization"
    ],
    impactTitle: "The Commercial Legacy",
    impactText: "Our primary objective is to elevate your organic presence to the point where your social channels are as reputable as a premium storefront, delivering high-intent inbound inquiries consistently without unneeded advertising spend."
  },
  cc: {
    slug: "content-creation",
    subtitle: "High-Fidelity Narrative Assets & Cinematic Storytelling",
    overview: "High-ticket buyers require high-ticket storytelling. We craft bespoke visual assets, cinematic vertical structures, and tailored copy that capture the spirit of your enterprise.",
    conceptTitle: "The Creative Principle",
    conceptText: "We reject typical cookie-cutter 'content'. We produce digital physical assets that are rich in value and meticulously graded. From the script pacing to color grading, every frame of our creative assets works to command undivided attention and inspire complete confidence.",
    methodologyTitle: "The Content Engine Staging",
    methodologySteps: [
      {
        phase: "Phase I",
        title: "Conceptual Staging & Scripting",
        description: "We draft magnetic scripts featuring strong opening hooks, crisp narratives, and zero verbal fillers, mapped around key buyer psychological triggers."
      },
      {
        phase: "Phase II",
        title: "High-Definition Visual Capture",
        description: "Using world-class lighting parameters, pristine digital lenses, and crisp audio capturing systems, we film outstanding narrative reels."
      },
      {
        phase: "Phase III",
        title: "Luxury Post-Production & Color Curation",
        description: "We grade content using deep cinematic tones, edit with high-retention pacing, and apply elegant custom caption styling to match premium brand spaces."
      }
    ],
    deliverables: [
      "Persuasive Hook Script Libraries",
      "Cinematic Short-Form Retention Videos",
      "High-Contrast Editorial Photography Sets",
      "Sophisticated Brand Presentation Cards",
      "Continuous Content Staging Audits"
    ],
    impactTitle: "Visual Supremacy",
    impactText: "With our custom creative assets, your brand looks instantly superior to competitors. Clients see a standard of performance that justifies premium pricing and builds ultimate prestige."
  },
  gd: {
    slug: "graphic-design",
    subtitle: "Prestigious Brand Identity & Pristine Creative Vectors",
    overview: "Design is your brand's silent ambassador. We build high-end visual ecosystems, presentation assets, and corporate packages that build instant credibility.",
    conceptTitle: "The Visual Aesthetic Rule",
    conceptText: "Low-end visuals act as a major friction point. In contrast, pristine Swiss-style layout grids, custom typography hierarchies, and premium color balances establish an elite price ceiling before your sales team ever communicates an offer.",
    methodologyTitle: "The Visual Grid Creation System",
    methodologySteps: [
      {
        phase: "Phase I",
        title: "Identity Blueprinting",
        description: "We establish your brand mood board, selecting sophisticated fonts (Inter/Space Grotesk pairings) and a refined, luxurious color framework."
      },
      {
        phase: "Phase II",
        title: "Grid & Composition Layouts",
        description: "We structure perfect digital compositions, applying spacious negative space and exact margins so that your visuals feel uncluttered and clean."
      },
      {
        phase: "Phase III",
        title: "Deliverable Finalization & Quality Checks",
        description: "Every file undergoes vector checks, checking readability across multi-tier layouts, dark mode spaces, and mobile frames."
      }
    ],
    deliverables: [
      "Master Vector Logo files & Minimalist Sub-marks",
      "Comprehensive Visual Identity Manuals (PDF)",
      "High-Conversion Digital Ad Layouts & Graphics",
      "Sophisticated Presentation & Pitch Decks",
      "Custom Typography Style Guides"
    ],
    impactTitle: "The Prestigious Frame",
    impactText: "We give your enterprise a refined visual dress code. The resulting aesthetic looks spectacular, allowing you to easily attract and convert upscale commercial partners."
  },
  ve: {
    slug: "video-editing",
    subtitle: "Cinematic Retention Post-Production & Sensory Engineering",
    overview: "Turn raw clips into captivating assets. We edit using psychological attention-retention blueprints, making sure every viewer stays glued until your call to action.",
    conceptTitle: "The Sensory Blueprint",
    conceptText: "Attention span is the scarcest currency of our times. Sound effects, micro-transitions, exact text placement, and color palettes are either holding attention or losing it. We treat post-production as a science: mathematical cuts that guarantee maximized retention rates and deep brand immersion.",
    methodologyTitle: "The Post-Production Assembly Pipeline",
    methodologySteps: [
      {
        phase: "Phase I",
        title: "Retention Cut & Flow Assembly",
        description: "We isolate and splice raw footage, discarding unnecessary breaks or fillers while preserving the core, high-value message flow."
      },
      {
        phase: "Phase II",
        title: "Sensory Sound & Foley Design",
        description: "We layering custom background tracks, crisp swoosh sounds, and visual-audio cues to make the auditory experience incredibly satisfying."
      },
      {
        phase: "Phase III",
        title: "Luxurious Visual Polishing",
        description: "We apply custom text animations and motion graphics, followed by modern cinematic color-grading to turn mobile footage into studio-grade film."
      }
    ],
    deliverables: [
      "High-Retention Cinematic Captions",
      "Custom Color-Graded LUT Files",
      "High-Fidelity Audio Foley & Soundtracks",
      "Tailored Cross-Platform Vertical Video Files",
      "Interactive Hook Optimization Reports"
    ],
    impactTitle: "Retention Supremacy",
    impactText: "Your videos go from being quickly swiped past to becoming highly engaging clips. Average viewing times double, and viewers organically stay to digest your final sales pitch."
  },
  wfb: {
    slug: "web-funnel-building",
    subtitle: "Ultra-Fast Landing Architectures & Conversion Systems",
    overview: "A premium website is a high-performance sales engine, not an online brochure. We craft modern, lightning-fast React platforms designed to convert visits into actual leads.",
    conceptTitle: "Conversion Architecture",
    conceptText: "We build websites using direct-response, mobile-optimized engineering. No slow page builders, bloated scripts, or clunky menus. We write ultra-clean React scripts styled with premium design structures, creating smooth, effortless journeys for your prospective clients.",
    methodologyTitle: "The Conversion Blueprint and Build",
    methodologySteps: [
      {
        phase: "Phase I",
        title: "Funnel Flow & Blueprint Design",
        description: "We map the exact steps a visitor takes: Landing Page -> Persuasive Solution Copy -> Calendar Booking Form -> Conversion Success."
      },
      {
        phase: "Phase II",
        title: "High-Performance Clean Coding",
        description: "We develop custom, highly responsive front-ends that load instantly, ensuring zero bounce rate due to speed or device problems."
      },
      {
        phase: "Phase III",
        title: "Automation & API Pipeline Sync",
        description: "We integrate CRM tracking, calendar automations, and payment services so your sales process is completely hands-off."
      }
    ],
    deliverables: [
      "Lightning-Fast Custom React Website Builds",
      "High-Converting Sales Funnel Structures",
      "Pristine Mobile-Optimized Interfaces",
      "Seamless Calendar Booking & CRM Integrations",
      "SEO-Friendly Semantic Structural Layouts"
    ],
    impactTitle: "Seamless Conversion",
    impactText: "We turn your web link into a premium business asset. Our sites load in milliseconds, establish high-trust brand values, and encourage visitors to book calls with your sales team seamlessly."
  },
  aia: {
    slug: "ai-automations",
    subtitle: "Intelligent Workflows & Automated Lead Architectures",
    overview: "Scale results without adding payroll overhead. We deploy smart, background systems and AI agents that qualify leads, trigger campaigns, and manage tasks 24/7.",
    conceptTitle: "Continuous Operations",
    conceptText: "We replace slow human admin and repetitive work with zero-latency software loops. When a client interacts with your brand, they receive interactive DMs and scheduling links in real-time. Your enterprise qualifies prospects and schedules calls even while you sleep.",
    methodologyTitle: "Workflow Automation Pipeline",
    methodologySteps: [
      {
        phase: "Phase I",
        title: "Friction Analysis & Mapping",
        description: "We audit your admin workspace, identifying repetitive tasks, follow-up delays, and lead drops."
      },
      {
        phase: "Phase II",
        title: "Software Interface & Trigger Staging",
        description: "We link components using customized trigger networks (e.g. Social Comment -> CRM lead logged -> Dynamic Calendar Invite sent)."
      },
      {
        phase: "Phase III",
        title: "AI Response Agent Tuning",
        description: "We deploy and fine-tune intelligent response systems configured to answer client FAQs with your exact brand tone and parameters."
      }
    ],
    deliverables: [
      "Interactive Comment-to-DM Growth Funnels",
      "Automated Booking & Appointment Workflows",
      "Custom Tuned Customer Response Conversational Flows",
      "Seamless Multi-Engine Database Integrations",
      "Operational Slack/Email Automated Notification Systems"
    ],
    impactTitle: "Zero Latency Scaling",
    impactText: "Human errors and delayed lead follow-ups are completely eliminated. Leads are qualified and booked in less than 60 seconds, which can increase bookings by over 40%."
  }
};

interface ServiceDetailModalProps {
  serviceId: string | null;
  onClose: () => void;
}

export default function ServiceDetailModal({ serviceId, onClose }: ServiceDetailModalProps) {
  // Prevent background scrolling when modal is active
  useEffect(() => {
    if (serviceId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [serviceId]);

  const blog = serviceId ? SERVICE_BLOGS[serviceId] : null;

  const handleCtaClick = () => {
    onClose();
    // Smooth scroll to contact form
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {blog && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-50 overflow-y-auto bg-[#040404]/98 backdrop-blur-md flex items-start justify-center px-4 py-8 md:p-12 custom-scrollbar"
          id="service-detail-modal"
        >
          {/* Main Container */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 30, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 120, delay: 0.1 }}
            className="w-full max-w-4xl bg-[#0d0d0d] border border-gold/15 shadow-2xl relative p-6 md:p-12 my-auto"
          >
            {/* Sliding gold accents border */}
            <span className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-gold-light via-gold to-gold-dark" />

            {/* Float Close button */}
            <button 
              onClick={onClose}
              id="close-service-modal"
              className="absolute top-6 right-6 w-10 h-10 border border-gold/10 hover:border-gold/30 rounded-full flex items-center justify-center text-[#e5e5e5]/60 hover:text-gold transition-all duration-300 bg-black/50 cursor-pointer group"
              aria-label="Close details"
            >
              <X size={16} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>

            {/* Category Tag & Header Row */}
            <div className="mb-8 pr-12">
              <span className="font-mono text-[9px] md:text-2xs text-[#C9A84C] font-semibold tracking-[0.3em] uppercase block mb-3 flex items-center gap-2">
                <Sparkles size={11} className="text-gold animate-pulse" />
                Service Deep-Dive Portfolio
              </span>
              <h1 className="font-serif text-3xl md:text-5xl text-[#e5e5e5] font-light leading-tight tracking-wide mb-4">
                {serviceId === 'smm' && "Social Media Management"}
                {serviceId === 'cc' && "Content Creation"}
                {serviceId === 'gd' && "Graphic Design"}
                {serviceId === 've' && "Video Editing"}
                {serviceId === 'wfb' && "Web & Funnel Building"}
                {serviceId === 'aia' && "AI Automations"}
              </h1>
              <p className="font-serif text-[#C9A84C] italic text-base md:text-lg tracking-wide font-normal">
                {blog.subtitle}
              </p>
              <div className="w-24 h-[1px] bg-gold/30 mt-6" />
            </div>

            {/* Grid Layout: Main Writing Column (Left) & Info Panel (Right) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
              
              {/* Left Column: Extensive Editorial Blog Copy */}
              <div className="lg:col-span-8 space-y-10">
                
                {/* 1. Overview Callout Block */}
                <div className="border-l-2 border-[#C9A84C]/50 pl-6 py-1 bg-gold/[0.02]">
                  <p className="font-sans text-xs md:text-sm text-[#e5e5e5]/80 leading-relaxed font-light italic">
                    \"{blog.overview}\"
                  </p>
                </div>

                {/* 2. Core Operational Philosophy */}
                <div className="space-y-4">
                  <h2 className="font-serif text-lg md:text-xl text-[#E8C97A] font-medium tracking-wide">
                    {blog.conceptTitle}
                  </h2>
                  <p className="font-sans text-xs md:text-sm text-[#e5e5e5]/60 leading-relaxed font-light">
                    {blog.conceptText}
                  </p>
                </div>

                {/* 3. Detailed Step-by-Step Methodology */}
                <div className="space-y-6 pt-2">
                  <h2 className="font-serif text-lg md:text-xl text-[#E8C97A] font-medium tracking-wide border-b border-gold/10 pb-3 flex items-center gap-2">
                    <Shield size={16} className="text-gold/50" />
                    {blog.methodologyTitle}
                  </h2>
                  <div className="space-y-6">
                    {blog.methodologySteps.map((step, idx) => (
                      <div key={idx} className="flex gap-4 md:gap-6 items-start">
                        <div className="font-mono text-[9px] text-[#C9A84C] bg-gold/5 px-2 py-1 border border-gold/10 uppercase tracking-widest font-semibold flex-shrink-0 mt-0.5">
                          {step.phase}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-sans text-xs md:text-sm font-semibold text-[#e5e5e5] tracking-wide">
                            {step.title}
                          </h4>
                          <p className="font-sans text-2xs md:text-xs text-[#e5e5e5]/50 leading-relaxed font-light">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Client Impact / ROI section */}
                <div className="space-y-3 pt-4 border-t border-gold/5">
                  <h3 className="font-serif text-base md:text-lg text-[#E8C97A] font-light italic">
                    {blog.impactTitle}
                  </h3>
                  <p className="font-sans text-xs text-[#e5e5e5]/50 leading-relaxed font-light">
                    {blog.impactText}
                  </p>
                </div>

              </div>

              {/* Right Column: Key Deliverables & Immediate Contact CTA */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* Deliverables Panel */}
                <div className="bg-[#121212] border border-gold/10 p-6 relative">
                  <span className="absolute top-0 right-4 font-mono text-[50px] font-black text-gold/[0.02] select-none">
                    SPEC
                  </span>
                  <h3 className="font-serif text-xs md:text-sm text-[#E8C97A] font-semibold tracking-wider uppercase mb-6 flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-gold" />
                    Core Deliverables
                  </h3>
                  <ul className="space-y-4">
                    {blog.deliverables.map((item, idx) => (
                      <li key={idx} className="flex gap-3 items-start">
                        <span className="text-gold/70 text-xs mt-0.5">▪</span>
                        <span className="font-sans text-2xs md:text-xs text-[#e5e5e5]/70 font-light leading-relaxed">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="border-t border-gold/5 mt-6 pt-5 flex items-center gap-3">
                    <Shield size={16} className="text-gold/60" />
                    <span className="font-mono text-[8px] text-[#e5e5e5]/40 tracking-widest uppercase">
                      Premium Quality Assured
                    </span>
                  </div>
                </div>

                {/* Instant Handshake Call-To-Action Box */}
                <div className="bg-gradient-to-br from-gold/[0.03] to-transparent border border-gold/10 p-6 flex flex-col justify-between">
                  <div>
                    <h4 className="font-serif text-sm text-[#e5e5e5] mb-2 tracking-wide font-normal">
                      Maximize Your Conversions
                    </h4>
                    <p className="font-sans text-2xs text-[#e5e5e5]/45 leading-relaxed mb-6 font-light">
                      Let our expert engineering team deploy this precise strategic framework directly into your brand systems to maximize recurring client bookings.
                    </p>
                  </div>
                  
                  <button
                    onClick={handleCtaClick}
                    id="modal-cta-contact"
                    className="w-full py-3 bg-[#C9A84C]/90 hover:bg-[#C9A84C] text-[#080808] font-sans text-2xs tracking-widest uppercase font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer select-none"
                  >
                    <span>Request Collaboration</span>
                    <Send size={11} />
                  </button>
                </div>

              </div>

            </div>

            {/* Footer detail */}
            <div className="mt-12 pt-8 border-t border-gold/10 text-center flex flex-col md:flex-row items-center justify-between gap-4">
              <span className="font-mono text-[8px] text-[#e5e5e5]/30 tracking-widest uppercase">
                Mesh Marketing © {new Date().getFullYear()} — Kisii, Kenya & Global
              </span>
              <button 
                onClick={onClose}
                className="font-sans text-[8px] text-[#C9A84C] hover:text-[#E8C97A] tracking-wider uppercase underline underline-offset-4 cursor-pointer"
              >
                Back to main suite
              </button>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
